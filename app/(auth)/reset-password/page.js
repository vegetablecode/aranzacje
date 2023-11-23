'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  makeErrorToast,
  makeSuccessToast,
} from 'common/components/layout/Toast';
import mapAuthErrorToMessage from '../../../common/utils/mapAuthErrorToMessage';
import classNames from 'common/utils/classNames';
import TextInput from 'common/components/inputs/TextInput';
import { resetPassword } from 'modules/auth/lib';
import useAuthStore from 'modules/auth/store';

const Page = () => {
  const router = useRouter();
  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      router.push('/photos');
    }
  }, []);

  const handleReset = async () => {
    setIsLoading(true);
    try {
      await resetPassword(email);
      setIsLoading(false);
      makeSuccessToast('A reset link has been sent to your email');
      router.push('/login');
    } catch (err) {
      makeErrorToast(mapAuthErrorToMessage(err));
      setIsLoading(false);
    }
  };

  return (
    <div className="flex pt-10 px-4 flex-col items-center justify-center">
      <div className="text-3xl font-semibold text-center">
        Przypomnienie hasła
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="flex card w-full space-y-4 max-w-lg bg-neutral p-8 flex-col mt-8">
          <TextInput
            id="email"
            type="text"
            placeholder="Email Address"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button onClick={handleReset} className="btn btn-primary">
            <span
              className={classNames(isLoading ? 'loading loading-spinner' : '')}
            ></span>
            Wyślij link resetujący
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
