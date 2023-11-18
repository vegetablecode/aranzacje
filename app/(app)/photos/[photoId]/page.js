'use client';

import { ChevronRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { onError } from 'common/utils/sentry';
import useAuthStore from 'modules/auth/store';
import Header from 'modules/photos/components/Header';
import Navbar from 'modules/photos/components/Navbar';
import { getPhoto } from 'modules/photos/lib';
import STYLES from 'modules/photos/styles';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { photoId } = useParams();
  const { user } = useAuthStore();
  const [photo, setPhoto] = useState('');

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
    <div className="flex flex-col w-full space-y-8">
      <Navbar />
      {STYLES.map((item) => (
        <div key={item.id}>
          <div className="text-2xl font-semibold">{item.label}</div>
          <div className="carousel w-full p-5 space-x-4 rounded-box">
            {item.filters.map((subitem) => (
              <button
                onClick={() => router.push(pathname + '/' + subitem.id)}
                className="carousel-item card bg-neutral overflow-hidden w-64"
                key={subitem.id}
              >
                <img src={subitem.image} alt="filter" />
                <div className="p-5 flex w-full justify-between items-center">
                  <div className="">{subitem.label}</div>
                  <ChevronRightIcon className="h-4 w-4" />
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
