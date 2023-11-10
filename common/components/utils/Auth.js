import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../common/context/auth';
import { useForm } from 'react-hook-form';
import { makeErrorToast } from '../../../common/components/layout/Toast';
import mapAuthErrorToMessage from '../../../common/utils/mapAuthErrorToMessage';
import ProviderLoginButton from '../../../common/components/inputs/ProviderLoginButton';
import classNames from '../../utils/classNames';
import TextInput from '../inputs/TextInput';

const Auth = ({ isSignUpMode }) => {
  const router = useRouter();
  const { login, loginWithGoogle, signUp, user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      router.push('/profile');
    }
  }, user);

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm({
    mode: 'onTouched',
  });

  const handleRegistration = async (data) => {
    setIsLoading(true);
    try {
      if (isSignUpMode) {
        await signUp(data.email, data.password);
      } else {
        await login(data.email, data.password);
      }
      router.push('/profile');
    } catch (err) {
      makeErrorToast(mapAuthErrorToMessage(err));
      setIsLoading(false);
    }
  };

  const handleLoginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await loginWithGoogle();
      router.push('/profile');
    } catch (err) {
      makeErrorToast(mapAuthErrorToMessage(err));
      setIsLoading(false);
    }
  };

  return (
    <div className='flex pt-10 px-4 flex-col items-center justify-center'>
      <div className='text-3xl font-semibold text-center'>
        {isSignUpMode ? 'Zarejestruj się' : 'Zaloguj się'}
      </div>
      <form
        className='w-full flex items-center justify-center'
        onSubmit={handleSubmit(handleRegistration)}
      >
        <div className='flex card w-full space-y-12 max-w-lg bg-neutral p-8 flex-col mt-8'>
          <div className='flex flex-col space-y-4'>
            <div className='flex flex-col space-y-2 items-center'>
              <ProviderLoginButton
                handler={handleLoginWithGoogle}
                isLoading={isLoading}
              />
            </div>
          </div>
          <div className='divider'>OR</div>
          <div className='flex flex-col space-y-4'>
            <TextInput
              id='email'
              type='text'
              placeholder='Email Address'
              className='input'
              register={register}
              watch={watch}
              required
            />
            <TextInput
              id='password'
              type='password'
              placeholder='Password'
              className='input'
              register={register}
              watch={watch}
              required
            />
          </div>
          <div className='flex flex-col space-y-4'>
            <button type='submit' className='btn btn-primary'>
              <span
                className={classNames(
                  isLoading ? 'loading loading-spinner' : '',
                )}
              ></span>
              {isSignUpMode ? 'Zarejestruj się' : 'Zaloguj'}
            </button>
          </div>
        </div>
      </form>
      <div className='mt-4'>
        {isSignUpMode ? 'Masz już konto?' : 'Nie masz konta?'}
        <button
          onClick={() => router.push(isSignUpMode ? '/login' : '/signup')}
          className='btn btn-link inline'
        >
          {isSignUpMode ? 'Zaloguj się' : 'Zarejestruj się'}
        </button>
      </div>
      {!isSignUpMode ? (
        <button
          onClick={() => router.push('/reset-password')}
          className='btn btn-link'
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
