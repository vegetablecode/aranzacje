'use client';

import { useEffect, useState } from 'react';
import usePhotoStore from 'modules/photos/store';
import { addNewPhoto, getPhotos } from 'modules/photos/lib';
import useAuthStore from 'modules/auth/store';
import { onError } from 'common/utils/sentry';
import BottomPrimaryButton from 'modules/photos/components/BottomPrimaryButton';
import { ChevronRightIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const Page = () => {
  const { image, setImage } = usePhotoStore();
  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const onLoad = async () => {
      try {
        if (image) {
          await addNewPhoto(user, image);
          setImage(null);
          //router.push('/photos/' + 'photo_id');
        }
        setData(await getPhotos(user));
      } catch (err) {
        onError(err, 'Nie udało się wczytać zdjęć 😭');
      }

      setIsLoading(false);
    };

    onLoad();
  }, [image]);

  console.log(data);

  const renderPhotos = () => (
    <>
      <div className="flex flex-col space-y-4">
        <div className="text-2xl font-semibold">Wybierz pomieszczenie 👇</div>
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
      <BottomPrimaryButton
        text="Dodaj nowe pomieszczenie"
        icon={<PhotoIcon className="w-5 h-5" />}
        onClick={() => router.push('/add')}
      />
    </>
  );

  if (isLoading) return <div className="skeleton w-full h-64"></div>;

  return data ? renderPhotos() : <div>Nie ma dodanych zdjęć</div>;
};

export default Page;
