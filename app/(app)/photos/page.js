'use client';

import { PlusIcon, PlusSmallIcon, UserIcon } from '@heroicons/react/24/outline';
import Badge from 'common/components/layout/Badge';
import Modal, {
  closeModalWithId,
  openModalWithId,
} from 'common/components/layout/Modal';
import {
  makeErrorToast,
  makeSuccessToast,
} from 'common/components/layout/Toast';

import classNames from 'common/utils/classNames';
import { timestampToMoment } from 'common/utils/dateConverters';
import isPro from 'common/utils/isPro';
import { onError } from 'common/utils/sentry';
import Auth from 'modules/auth/components/Auth';
import { getUserData, logout } from 'modules/auth/lib';
import useAuthStore from 'modules/auth/store';
import { unlockPro } from 'modules/payment/lib';
import Navbar from 'modules/photos/components/Navbar';
import PremiumModal from 'modules/photos/components/PremiumModal';
import Uploader from 'modules/photos/components/Uploader';
import { addNewPhoto, getPhotos } from 'modules/photos/lib';
import SlotMachine from 'modules/slot-machine/SlotMachine';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const [photos, setPhotos] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [plan, setPlan] = useState('week');
  const { user, userData, setUserData } = useAuthStore();
  const router = useRouter();
  const searchParams = useSearchParams();

  const isUserPro = isPro(userData?.proUntil);
  const endDate = userData?.proUntil
    ? timestampToMoment(userData?.proUntil)
    : null;

  useEffect(() => {
    const onLoad = async () => {
      try {
        setPhotos(await getPhotos(user));
      } catch (err) {
        onError(err, 'Unable to get photos');
      }
    };

    if (user) {
      onLoad();
    }
  }, [user]);

  useEffect(() => {
    const onLoad = async () => {
      if (searchParams.get('success')) {
        const paidPlan = searchParams.get('plan');
        await unlockPro(user, paidPlan);
        makeSuccessToast('You are PRO now! ✨');
        setUserData(await getUserData(user));
      }

      if (searchParams.get('canceled')) {
        makeErrorToast('Payment has been canceled! 😢');
      }
    };

    onLoad();
  }, [user]);

  useEffect(() => {
    const onLoad = async () => {
      if (imageUrl) {
        if (user) {
          closeModalWithId('signup');
          const id = await addNewPhoto(user, imageUrl);
          setPhotos(await getPhotos(user));
          router.push(`/photos/${id}`);
        } else {
          openModalWithId('signup');
        }
      }
    };

    onLoad();
  }, [imageUrl, user]);

  const renderAuthModalContent = () => (
    <div>
      <div className="font-black text-2xl">Create an account ✨</div>
      <div className="text-lg">...to keep your data safe!</div>
      <Auth simpleMode isSignUpMode={true} />
    </div>
  );

  const renderMenu = () => (
    <div className="flex space-x-2 items-center">
      {isUserPro ? (
        <div className="absolute -ml-12">
          <Badge text="pro" />
        </div>
      ) : (
        ''
      )}
      <button
        onClick={() => openModalWithId('profile')}
        className="p-3 rounded-full bg-primary"
      >
        <UserIcon className="h-5 w-5 text-white" />
      </button>
    </div>
  );

  const renderProfileModalContent = () => (
    <div className="text-center">
      {isUserPro ? (
        <div className="text-xl">
          You are <Badge text="pro" /> until
          <div>{endDate.format('MMMM Do YYYY, h:mm a')}</div>
        </div>
      ) : (
        <div className="text-xl">Korzystasz z darmowej wersji!</div>
      )}
      <div className="flex flex-col">
        <button onClick={() => logout()} className="btn btn-neutral mt-4">
          Wyloguj
        </button>
        <Link href="/">
          <button className="btn w-full btn-neutral mt-4">Strona Główna</button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="space-y-4 flex w-full flex-col">
      <Navbar menu={renderMenu()} title="Twoje pomieszczenia ✨" />
      <div className="grid gap-2 grid-cols-4">
        {photos
          ? photos.map((photo) => (
              <button
                key={photo.id}
                onClick={() => router.push(`/photos/${photo.id}`)}
              >
                <div className="flex items-center justify-center">
                  {photo.unlocked ? (
                    <div className="badge font-bold badge-primary border-0 text-xs absolute z-50">
                      PRO
                    </div>
                  ) : (
                    ''
                  )}
                  <img
                    alt="photo"
                    src={photo.url}
                    className="w-full aspect-square h-full card"
                  />
                </div>
              </button>
            ))
          : 'loading...'}
        {isUserPro || photos.length < 1 ? (
          <Uploader setUrl={setImageUrl} />
        ) : (
          <div
            className="bg-white shadow w-full h-full items-center justify-center aspect-square card pointer"
            onClick={() => openModalWithId('premium')}
          >
            <PlusSmallIcon className="h-5 w-5" />
          </div>
        )}
      </div>
      {photos.length ? (
        ''
      ) : (
        <img src="/start.png" alt="start" className="w-2/3" />
      )}
      <Modal id="signup" content={renderAuthModalContent()} />
      <Modal mini id="profile" content={renderProfileModalContent()} />
      <PremiumModal plan={plan} setPlan={setPlan} />
    </div>
  );
};

export default Page;
