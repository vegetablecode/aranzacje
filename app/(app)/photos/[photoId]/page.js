'use client';

import { ChevronRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Modal, { openModal } from 'common/components/layout/Modal';
import classNames from 'common/utils/classNames';
import isPro from 'common/utils/isPro';
import { onError } from 'common/utils/sentry';
import useAuthStore from 'modules/auth/store';
import BottomPrimaryButton from 'modules/photos/components/BottomPrimaryButton';
import Navbar from 'modules/photos/components/Navbar';
import PremiumModal from 'modules/photos/components/PremiumModal';
import { getPhoto } from 'modules/photos/lib';
import STYLES from 'modules/photos/styles';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { photoId } = useParams();
  const { user, userData } = useAuthStore();
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

  const isUserPro = isPro(userData?.proUntil);

  return (
    <>
      <div className="flex flex-col w-full space-y-8">
        <Navbar />
        {STYLES.map((item, id) => (
          <div key={item.id + id}>
            <div className="flex justify-between items-center">
              <div className="text-2xl font-semibold">{item.label}</div>
              {!isUserPro && !item.free ? (
                <div className="badge badge-primary">PRO</div>
              ) : (
                ''
              )}
            </div>
            <div
              className={classNames(
                'carousel md:grid grid-cols-2 gap-4 w-full py-5 space-x-4 md:space-x-0 rounded-box'
              )}
            >
              {item.filters.map((subitem, idx) => (
                <button
                  onClick={() =>
                    isUserPro || item.free
                      ? router.push(pathname + '/' + subitem.id)
                      : openModal()
                  }
                  className="carousel-item card bg-neutral overflow-hidden w-64 md:w-full"
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
      <PremiumModal />
      {!isUserPro ? (
        <BottomPrimaryButton
          text="Odblokuj wszystkie style"
          icon={<SparklesIcon className="w-5 h-5" />}
          onClick={() => openModal()}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default Page;
