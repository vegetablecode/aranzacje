'use client';

import Header from 'modules/photos/components/Header';
import Uploader from 'modules/photos/components/Uploader';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen px-5 pt-8 pb-20 flex flex-col space-y-6 items-center justify-start">
      <Header showIntro />
      <Uploader intro />
      <div className="flex flex-col space-y-2 items-center justify-center">
        <div>Masz konto?</div>
        <div>👇</div>
        <button onClick={() => router.push('/login')} className="btn">
          Zaloguj się
        </button>
      </div>
    </div>
  );
};

export default Page;
