'use client';
import {
  ArrowDownCircleIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import { onError } from 'common/utils/sentry';
import useAuthStore from 'modules/auth/store';
import BottomPrimaryButton from 'modules/photos/components/BottomPrimaryButton';
import Navbar from 'modules/photos/components/Navbar';
import PhotoFrame from 'modules/photos/components/PhotoFrame';
import { getPhoto } from 'modules/photos/lib';
import STYLES from 'modules/photos/styles';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Replicate from 'replicate';

const Page = () => {
  const { photoId, styleId } = useParams();
  const [photo, setPhoto] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const { user } = useAuthStore();

  const getStyle = () =>
    STYLES.map((style) => style.filters)
      .flat()
      .filter((style) => style.id === styleId)[0];

  const style = getStyle();

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

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
    console.log('res: ', response);
    let prediction = await response.json();
    console.log('pred: ', prediction);
    if (response.status !== 201) {
      onError(prediction.detail, 'Nie udało się wygenerować pomieszczenia');
      return;
    }
    setPrediction(prediction);

    while (
      prediction.status !== 'succeeded' &&
      prediction.status !== 'failed'
    ) {
      await sleep(1000);
      const response = await fetch('/api/interior?id=' + prediction.id, {
        method: 'GET',
      });
      prediction = await response.json();
      if (response.status !== 200) {
        onError(prediction.detail, 'Nie udało się pobrać pomieszczeń');
        return;
      }
      console.log({ prediction });
      setPrediction(prediction);
    }
  };

  useEffect(() => {
    if (prediction?.output) {
      setIsLoading(false);
    }
  }, [prediction]);

  console.log('data: ', data);

  useEffect(() => {
    const onLoad = async () => {
      try {
        if (photoId) {
          setPhoto(await getPhoto(user, photoId));
        }
      } catch (err) {
        onError(err, 'Nie udało się wczytać renderów 😭');
      }
    };

    onLoad();
  }, []);

  return (
    <>
      <Navbar title={'Styl ' + style.label} />
      <div className="flex flex-col justify-start w-full">
        {photo ? (
          <>
            <div className="bg-neutral card border border-dashed overflow-hidden">
              <img className="h-auto" src={photo.url} alt="style" />
            </div>
            <div className="flex justify-center mt-4">
              <ArrowDownCircleIcon className="w-5 h-5" />
            </div>
            {prediction?.output ? (
              <div className="mt-4 flex flex-col space-y-4">
                {[1, 2, 3].map((idx) => (
                  <div key={idx} className="card border overflow-hidden h-auto">
                    <img
                      className="w-full h-auto"
                      src={prediction.output[idx]}
                      alt="design"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="card image-full border border-dashed overflow-hidden mt-4 h-auto">
                <img className="h-auto blur" src={photo.url} alt="style" />
                {isLoading ? (
                  <div className="card-body flex flex-col justify-center items-center">
                    <span className="loading loading-infinity loading-lg"></span>
                    <div className="flex space-x-2 items-center">
                      <div>AI generuje nowe wnętrze...</div>
                    </div>
                  </div>
                ) : (
                  <div class="card-body flex items-center justify-center">
                    Rozpocznij generowanie...
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-auto skeleton"></div>
        )}
      </div>
      <BottomPrimaryButton
        onClick={(e) => {
          setIsLoading(true);
          generatePhotos(e);
        }}
        text="Generuj"
        isLoading={isLoading}
      />
    </>
  );
};

export default Page;
