'use client';

import { useEffect, useState } from 'react';
import usePhotoStore from 'modules/photos/store';
import { addNewPhoto, getPhotos } from 'modules/photos/lib';
import useAuthStore from 'modules/auth/store';
import { onError } from 'common/utils/sentry';
import BottomPrimaryButton from 'modules/photos/components/BottomPrimaryButton';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const Page = () => {
  const { image, setImage } = usePhotoStore();
  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const router = useRouter();

  console.log(data);

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

  const renderPhotos = () => (
    <>
      <div className="flex flex-col space-y-4">
        {data.map((item) => (
          <div key={item.id} className="card bg-neutral overflow-hidden">
            <img src={item.url} alt="room" className="w-auto h-64" />
            <div className="card-body">
              <div className="card-actions justify-end">
                <button
                  onClick={() => router.push('/photos/'.concat(item.id))}
                  className="btn btn-primary w-full"
                >
                  Aranżuj 🤖
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <BottomPrimaryButton
        text="Dodaj nowe pomieszczenie"
        icon={<PhotoIcon className="w-5 h-5" />}
        onClick={() => console.log('add new')}
      />
    </>
  );

  if (isLoading) return <div className="skeleton w-full h-64"></div>;

  return data ? renderPhotos() : <div>Nie ma dodanych zdjęć</div>;
};

export default Page;
