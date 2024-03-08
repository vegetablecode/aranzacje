import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { makeErrorToast } from 'common/components/layout/Toast';
import mapAuthErrorToMessage from 'common/utils/mapAuthErrorToMessage';
import ProviderLoginButton from 'modules/auth/components/ProviderLoginButton';
import classNames from 'common/utils/classNames';
import useAuthStore from 'modules/auth/store';
import { login, loginWithGoogle, signUp } from 'modules/auth/lib';
import TextInput from 'common/components/inputs/TextInput';
import Link from 'next/link';
import Metadata from 'common/components/layout/Metadata';

const Auth = ({ isSignUpMode, simpleMode = false }) => {
  const router = useRouter();
  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user && !simpleMode) {
      router.push('/photos');
    }
  }, [user]);

  const handleAuth = async () => {
    setIsLoading(true);
    try {
      if (isSignUpMode) {
        await signUp(email, password);
      } else {
        await login(email, password);
      }
      if (!simpleMode) {
        router.push('/photos');
      }
    } catch (err) {
      makeErrorToast(mapAuthErrorToMessage(err));
      setIsLoading(false);
    }
  };

  const handleLoginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await loginWithGoogle();
      if (!simpleMode) {
        router.push('/photos');
      }
    } catch (err) {
      makeErrorToast(mapAuthErrorToMessage(err));
      setIsLoading(false);
    }
  };

  return (
    <div
      className={classNames(
        !simpleMode
          ? 'flex pt-10 px-4 flex-col items-center justify-center'
          : ''
      )}
    >
      {!simpleMode ? (
        <div className="text-center">
          <div className="text-3xl font-semibold-text-center">
            {isSignUpMode ? 'Sign Up 🔥' : 'Log In ⬇️'}
          </div>
          <div className="mt-2 pb-4">
            {isSignUpMode
              ? '...by zapisać postęp'
              : 'by przeglądać aranżacje ✨'}
          </div>
          <Link href="/">
            <img
              alt="decoratly logo"
              src="/logo.png"
              className="h-16 cursor-pointer w-auto"
            />
          </Link>
        </div>
      ) : (
        ''
      )}
      <div className="w-full flex items-center justify-center">
        <Metadata />
        <div className="flex card w-full space-y-8 max-w-lg bg-white shadow p-8 flex-col mt-8">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2 items-center">
              <ProviderLoginButton
                handler={handleLoginWithGoogle}
                isLoading={isLoading}
              />
            </div>
          </div>
          <div className="divider">OR</div>
          <div className="flex flex-col space-y-4">
            <TextInput
              id="email"
              type="text"
              placeholder="E-mail"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextInput
              id="password"
              type="password"
              placeholder="Hasło"
              className="input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="flex flex-col space-y-4">
            <button onClick={handleAuth} className="btn btn-primary">
              <span
                className={classNames(
                  isLoading ? 'loading loading-spinner' : ''
                )}
              ></span>
              {isSignUpMode ? 'Sign Up' : 'Log In'}
            </button>
          </div>
        </div>
      </div>
      {!simpleMode ? (
        <>
          <div className="mt-4">
            {isSignUpMode ? 'Mam już konto' : 'Nie posiadam konta'}
            <button
              onClick={() => router.push(isSignUpMode ? '/login' : '/signup')}
              className="btn btn-link inline"
            >
              {isSignUpMode ? 'Logowanie' : 'Rejestracja'}
            </button>
          </div>
          {!isSignUpMode ? (
            <button
              onClick={() => router.push('/reset-password')}
              className="btn btn-link"
            >
              Nie pamiętam hasła
            </button>
          ) : (
            ''
          )}
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Auth;
