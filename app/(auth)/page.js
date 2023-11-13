'use client';

import { useRouter } from 'next/navigation';
import ThemeSwitcher from 'common/components/layout/ThemeSwitcher';

const Home = () => {
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col space-y-4 items-center justify-start">
      ️
      <div className="text-3xl font-semibold text-center">
        <div>Witaj w kreatorze</div>
        <div>pomieszczeń AI 🤖</div>
      </div>
    </div>
  );
};

export default Home;
