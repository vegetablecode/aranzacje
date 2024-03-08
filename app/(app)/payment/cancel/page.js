'use client';
import BottomPrimaryButton from 'modules/photos/components/BottomPrimaryButton';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center text-center flex-col space-y-6">
        <img
          src="/drawings/cancel.jpg"
          alt="cancel"
          className="w-full h-auto card"
        />
        <div className="flex justify-center flex-col space-y-2">
          <div className="text-3xl">❌</div>
          <div className="font-bold text-xl">Payment failed!</div>
          <div>The payment has been canceled.</div>
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
