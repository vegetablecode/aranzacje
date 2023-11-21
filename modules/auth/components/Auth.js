import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { makeErrorToast } from 'common/components/layout/Toast';
import mapAuthErrorToMessage from 'common/utils/mapAuthErrorToMessage';
import ProviderLoginButton from 'modules/auth/components/ProviderLoginButton';
import classNames from 'common/utils/classNames';
import useAuthStore from 'modules/auth/store';
import { login, loginWithGoogle, signUp } from 'modules/auth/lib';
import TextInput from 'common/components/inputs/TextInput';

const Auth = ({ isSignUpMode }) => {
  const router = useRouter();
  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) {
      router.push('/photos');
    }
  }, user);

  const handleAuth = async () => {
    setIsLoading(true);
    try {
      if (isSignUpMode) {
        await signUp(email, password);
      } else {
        await login(email, password);
      }
      router.push('/photos');
    } catch (err) {
      makeErrorToast(mapAuthErrorToMessage(err));
      setIsLoading(false);
    }
  };

  const handleLoginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await loginWithGoogle();
      router.push('/photos');
    } catch (err) {
      makeErrorToast(mapAuthErrorToMessage(err));
      setIsLoading(false);
    }
  };

  return (
    <div className="flex pt-10 px-4 flex-col items-center justify-center">
      <div className="text-center">
        <div className="text-3xl font-semibold-text-center">
          {isSignUpMode ? 'Zarejestruj się 🔥' : 'Zaloguj się ⬇️'}
        </div>
        <div className="mt-2">
          {isSignUpMode
            ? '...by nie utracić postępu'
            : 'by przeglądać swoje kreacje ✨'}
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="flex card w-full space-y-12 max-w-lg bg-neutral p-8 flex-col mt-8">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2 items-center">
              <ProviderLoginButton
                handler={handleLoginWithGoogle}
                isLoading={isLoading}
              />
            </div>
          </div>
          <div className="divider">LUB</div>
          <div className="flex flex-col space-y-4">
            <TextInput
              id="email"
              type="text"
              placeholder="Adres e-mail"
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
              {isSignUpMode ? 'Zarejestruj się' : 'Zaloguj'}
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {isSignUpMode ? 'Masz już konto?' : 'Nie masz konta?'}
        <button
          onClick={() => router.push(isSignUpMode ? '/login' : '/signup')}
          className="btn btn-link inline"
        >
          {isSignUpMode ? 'Zaloguj się' : 'Zarejestruj się'}
        </button>
      </div>
      {!isSignUpMode ? (
        <button
          onClick={() => router.push('/reset-password')}
          className="btn btn-link"
        >
          Zapomniałem hasła
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default Auth;
