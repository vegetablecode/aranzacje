'use client';
import {
  ArrowDownCircleIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import { onError } from 'common/utils/sentry';
import useAuthStore from 'modules/auth/store';
import PhotoFrame from 'modules/photos/components/PhotoFrame';
import { getPhoto } from 'modules/photos/lib';
import STYLES from 'modules/photos/styles';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = ({ title }) => {
  const router = useRouter();

  return (
    <div className="h-12">
      <div className="absolute flex space-x-4 items-center px-5 py-6 top-0 left-0 w-full">
        <button onClick={() => router.back()} className="btn btn-circle">
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
        <div className="text-lg font-semibold">{title}</div>
      </div>
    </div>
  );
};

const Page = () => {
  const { photoId, styleId } = useParams();
  const [photo, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { user } = useAuthStore();
  console.log(photo);

  useEffect(() => {
    const onLoad = async () => {
      try {
        if (photoId) {
          setPhoto(await getPhoto(user, photoId));
        }
      } catch (err) {
        onError(err, 'Nie udało się wczytać renderów 😭');
      }

      setIsLoading(false);
    };

    onLoad();
  }, []);

  useEffect(() => {
    if (photo) {
      // if photo has this style generated -> setData
      // else ->
      //         setLoading
      //         generate
      //         setData
      console.log('git');
    }
  }, [photo]);

  const getStyle = () =>
    STYLES.map((style) => style.filters)
      .flat()
      .filter((style) => style.id === styleId)[0];

  const style = getStyle();

  return (
    <>
      <Navbar title={'Styl ' + style.label} />
      <div className="flex flex-col justify-start w-full">
        {photo ? (
          <>
            <div className="bg-neutral card border border-dashed overflow-hidden">
              <img className="h-64" src={photo.url} alt="style" />
            </div>
            <div className="flex justify-center mt-4">
              <ArrowDownCircleIcon className="w-5 h-5" />
            </div>
            <div className="card image-full border border-dashed overflow-hidden mt-4 h-64">
              <img className="h-64 blur" src={photo.url} alt="style" />
              <div class="card-body flex flex-col justify-center items-center">
                <div
                  className="radial-progress"
                  style={{ '--value': 70 }}
                  role="progressbar"
                >
                  70%
                </div>
                <div className="flex space-x-2 items-center">
                  <div class="loading loading-infinity loading-xs"></div>
                  <div>AI generuje nowe wnętrze...</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-64 skeleton"></div>
        )}
      </div>
    </>
  );
};

export default Page;
