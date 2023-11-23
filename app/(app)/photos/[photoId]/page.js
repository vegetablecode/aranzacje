'use client';

import { ChevronRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { onError } from 'common/utils/sentry';
import useAuthStore from 'modules/auth/store';
import BottomPrimaryButton from 'modules/photos/components/BottomPrimaryButton';
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
    <>
      <div className="flex flex-col w-full space-y-8">
        <Navbar />
        {STYLES.map((item, id) => (
          <div key={item.id + id}>
            <div className="flex justify-between items-center">
              <div className="text-2xl font-semibold">{item.label}</div>
              {item.free ? '' : <div className="badge badge-primary">PRO</div>}
            </div>
            <div className="carousel w-full p-5 space-x-4 rounded-box">
              {item.filters.map((subitem, idx) => (
                <button
                  onClick={() => router.push(pathname + '/' + subitem.id)}
                  className="carousel-item card bg-neutral overflow-hidden w-64"
                  key={subitem.id + idx}
                >
                  {photo?.usedFilters?.includes(subitem.id) ? (
                    <div className="w-full flex h-0 justify-end">
                      <span className="absolute z-10 p-2">✅</span>
                    </div>
                  ) : (
                    ''
                  )}
                  <img src={subitem.image} alt="filter" />
                  <div className="p-5 flex w-full justify-between items-center">
                    <div>{subitem.label}</div>
                    <ChevronRightIcon className="h-4 w-4" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <BottomPrimaryButton
        text="Odblokuj wszystkie style"
        icon={<SparklesIcon className="w-5 h-5" />}
        onClick={() => router.push('/add')}
      />
    </>
  );
};

export default Page;
