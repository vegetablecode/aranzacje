'use client';
import { ArrowDownCircleIcon, FireIcon } from '@heroicons/react/24/outline';
import { onError } from 'common/utils/sentry';
import sleep from 'common/utils/sleep';
import useAuthStore from 'modules/auth/store';
import BottomPrimaryButton from 'modules/photos/components/BottomPrimaryButton';
import Navbar from 'modules/photos/components/Navbar';
import { addNewPrediction, getPhoto, getPrediction } from 'modules/photos/lib';
import { getLastPercentage, getStyle } from 'modules/photos/utils';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Download from 'yet-another-react-lightbox/plugins/download';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Page = () => {
  const { photoId, styleId } = useParams();
  const [photo, setPhoto] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const { user } = useAuthStore();
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const style = getStyle(styleId);

  const generatePhotos = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/interior', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: photo.url,
        prompt: style.prompt,
      }),
    });
    let prediction = await response.json();
    if (response.status !== 201) {
      onError(prediction.detail, 'Nie udało się wygenerować pomieszczenia');
      return;
    }
    await addNewPrediction(user, photoId, style, prediction);
    setData(prediction);

    await checkPredictions(prediction);
  };

  const checkPredictions = async (prediction) => {
    while (
      prediction.status !== 'succeeded' &&
      prediction.status !== 'failed'
    ) {
      await sleep(2000);
      const response = await fetch('/api/interior?id=' + prediction.id, {
        method: 'GET',
      });
      prediction = await response.json();

      if (response.status !== 200) {
        onError(prediction.detail, 'Nie udało się pobrać pomieszczeń');
        return;
      }

      if (prediction?.logs) {
        setProgress(getLastPercentage(prediction.logs));
      }

      setData(prediction);
      if (prediction?.output) {
        await addNewPrediction(user, photoId, style, prediction);
        setIsGenerating(false);
      }
    }
  };

  useEffect(() => {
    const onLoad = async () => {
      try {
        if (photoId) {
          const photo = await getPhoto(user, photoId);
          const prediction = await getPrediction(user, photoId, style.id);
          setPhoto(photo);
          if (prediction !== null && !prediction.output && prediction.id) {
            setIsLoading(false);
            setIsGenerating(true);
            await checkPredictions(prediction);
          } else {
            setData(prediction);
          }
        }
      } catch (err) {
        onError(err, 'Nie udało się wczytać renderów 😭');
      }
      setIsLoading(false);
    };

    onLoad();
  }, []);

  const renderStarting = () => (
    <>
      <div className="loading loading-infinity loading-lg"></div>
      <div className="flex space-x-2 items-center">
        <div>Budzimy naszego robota 😴🤖</div>
      </div>
    </>
  );

  const renderProcessing = () => (
    <>
      <div
        className="radial-progress"
        style={{ '--value': progress }}
        role="progressbar"
      >
        {progress}%
      </div>
      <div className="flex space-x-2 items-center">
        <div>Trwa generowanie ✨</div>
      </div>
    </>
  );

  let slides = [];
  if (photo && data?.output) {
    slides = data.output.slice(1).map((item) => ({ src: item }));
  }

  const renderContent = () =>
    photo ? (
      <>
        <div className="bg-neutral card border border-dashed overflow-hidden">
          <img className="h-auto" src={photo.url} alt="style" />
        </div>
        <div className="flex justify-center mt-4">
          <ArrowDownCircleIcon className="w-5 h-5" />
        </div>
        {isOpen ? (
          <Lightbox
            open={open}
            close={() => setIsOpen(false)}
            slides={slides}
            plugins={[Download]}
          />
        ) : (
          ''
        )}
        {data?.output ? (
          <div className="mt-4 flex flex-col space-y-4">
            {data.output.slice(1).map((item) => (
              <button key={item} className="card border overflow-hidden h-auto">
                <img
                  onClick={() => setIsOpen(true)}
                  className="w-full h-auto"
                  src={item}
                  alt="design"
                />
              </button>
            ))}
          </div>
        ) : (
          <div className="card image-full border border-dashed overflow-hidden mt-4 h-auto">
            <img
              className="h-auto blur"
              style={{ opacity: progress * 0.01 }}
              src={photo.url}
              alt="style"
            />
            {isGenerating ? (
              <div className="card-body flex flex-col justify-center items-center">
                {data?.status === 'starting' ? renderStarting() : ''}
                {data?.status === 'processing' ? renderProcessing() : ''}
              </div>
            ) : (
              <div className="card-body flex items-center justify-center">
                👇 Kliknij &apos;Generuj&apos; by rozpocząć! 👇
              </div>
            )}
          </div>
        )}
      </>
    ) : (
      ''
    );

  const renderSkeleton = () => (
    <div className="flex flex-col space-y-4">
      <div className="skeleton h-80 w-full"></div>
      <div className="flex justify-center mt-4">
        <ArrowDownCircleIcon className="w-5 h-5" />
      </div>
      <div className="skeleton h-80 w-full"></div>
    </div>
  );

  return (
    <>
      <Navbar title={'Styl ' + style.label} />
      <div className="flex flex-col justify-start w-full">
        {isLoading ? renderSkeleton() : renderContent()}
      </div>
      {data?.output ? (
        ''
      ) : (
        <BottomPrimaryButton
          onClick={(e) => {
            setIsGenerating(true);
            generatePhotos(e);
          }}
          icon={<FireIcon className="h-5 w-5" />}
          text="Generuj"
          isLoading={isGenerating}
          disabled={isGenerating}
        />
      )}
    </>
  );
};

export default Page;
