'use client';

import { useEffect, useState } from 'react';
import usePhotoStore from 'modules/photos/store';
import { addNewPhoto, getPhotos } from 'modules/photos/lib';
import useAuthStore from 'modules/auth/store';
import { onError } from 'common/utils/sentry';
import BottomPrimaryButton from 'modules/photos/components/BottomPrimaryButton';
import { ChevronRightIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import PhotoFrame from 'modules/photos/components/PhotoFrame';
import Navbar from 'modules/photos/components/Navbar';

const Page = () => {
  const { image, setImage } = usePhotoStore();
  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const onLoad = async () => {
      try {
        if (image != '') {
          await addNewPhoto(user, image);
          setImage('');
        }
        setData(await getPhotos(user));
      } catch (err) {
        onError(err, 'Nie udało się wczytać zdjęć 😭');
      }
    };

    onLoad();

    setIsLoading(false);
  }, [image]);

  const renderPhotos = () => (
    <div className="flex flex-col space-y-4">
      {data.map((item) => (
        <button
          key={item.id}
          onClick={() => router.push('/photos/'.concat(item.id))}
          className="card bg-neutral overflow-hidden w-full"
        >
          <img src={item.url} alt="filter" />
          <div className="p-5 flex w-full justify-between items-center">
            <div>Aranżuj 🤖</div>
            <ChevronRightIcon className="h-4 w-4" />
          </div>
        </button>
      ))}
    </div>
  );

  const renderEmpty = () => (
    <div className="card flex flex-col items-center justify-center space-y-4 w-full py-10 px-5 text-center h-64 border border-dashed">
      <PhotoIcon className="h-10 w-10" />
      <div>Nie ma żadnych zdjęć</div>
    </div>
  );

  if (isLoading) return <div className="skeleton w-full h-64"></div>;

  return (
    <>
      <Navbar title="Pomieszczenia 📷" showGoBack={false} showUserMenu={true} />
      {data?.length ? renderPhotos() : renderEmpty()}
      <BottomPrimaryButton
        text="Dodaj nowe pomieszczenie"
        icon={<PhotoIcon className="w-5 h-5" />}
        onClick={() => router.push('/add')}
      />
    </>
  );
};

export default Page;
