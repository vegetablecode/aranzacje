'use client';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import BottomPrimaryButton from 'modules/photos/components/BottomPrimaryButton';
import { setPremiumUntil } from 'modules/photos/lib';
import { useEffect } from 'react';
import useAuthStore from 'modules/auth/store';
import { onError } from 'common/utils/sentry';
import { getUserData } from 'modules/auth/lib';

const Page = () => {
  const router = useRouter();
  const { user, setUserData } = useAuthStore();

  useEffect(() => {
    const onLoad = async () => {
      try {
        var proEndDate = moment(new Date()).add(7, 'days');
        await setPremiumUntil(user, proEndDate);
        setUserData(await getUserData(user));
      } catch (err) {
        onError(err, 'Nie udało się ustawić subskrypcji');
      }
    };
    onLoad();
  }, []);

  return (
    <>
      <div className="flex justify-center text-center flex-col space-y-6">
        <img
          src="/drawings/success.jpg"
          alt="success"
          className="w-full h-auto card"
        />
        <div className="flex justify-center flex-col space-y-2">
          <div className="text-3xl">✅</div>
          <div className="font-bold text-xl">Płatność się powiodła!</div>
          <div>Możesz teraz korzystać ze wszystkich funkcji aplikacji!</div>
        </div>
      </div>
      <BottomPrimaryButton
        onClick={() => router.push('/photos')}
        text="⬅️ Wróć do aplikacji"
      />
    </>
  );
};

export default Page;
