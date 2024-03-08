'use client';

import Modal, {
  closeModalWithId,
  openModalWithId,
} from 'common/components/layout/Modal';
import Auth from 'modules/auth/components/Auth';
import useAuthStore from 'modules/auth/store';
import BottomPrimaryButton from 'modules/photos/components/BottomPrimaryButton';
import Navbar from 'modules/photos/components/Navbar';
import Uploader from 'modules/photos/components/Uploader';
import { addNewPhoto } from 'modules/photos/lib';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const [imageUrl, setImageUrl] = useState('');
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    const onLoad = async () => {
      if (imageUrl) {
        if (user) {
          closeModalWithId('signup');
          const id = await addNewPhoto(user, imageUrl);
          router.push(`/photos/${id}`);
        } else {
          openModalWithId('signup');
        }
      }
    };

    onLoad();
  }, [imageUrl, user]);

  const generateImage = () => {
    if (user) {
      router.push(`/photos/${id}`);
    } else {
      openModalWithId('signup');
    }
  };

  const renderAuthModalContent = () => (
    <div>
      <div className="font-black text-2xl">Create an account ✨</div>
      <div className="text-lg">...to keep your data safe!</div>
      <Auth simpleMode isSignUpMode={true} />
    </div>
  );

  return (
    <>
      <div className="space-y-4 flex w-full flex-col">
        <Navbar
          showGoBack
          onPrev={() => router.push('/photos')}
          title="Start with a photo ✨"
        />
        <div>
          <Uploader url={imageUrl} setUrl={setImageUrl} />
        </div>
      </div>
      {imageUrl ? (
        <BottomPrimaryButton onClick={generateImage} text="Next 👉" />
      ) : (
        ''
      )}
      <Modal id="signup" content={renderAuthModalContent()} />
    </>
  );
};

export default Page;
