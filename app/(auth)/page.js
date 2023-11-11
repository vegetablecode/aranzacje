'use client';

import { useRouter } from 'next/navigation';
import ThemeSwitcher from 'common/components/layout/ThemeSwitcher';

const Home = () => {
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col space-y-4 items-center justify-center">
      ️<div>Hello 👋</div>
      <button onClick={() => router.push('/login')} className="btn">
        Login
      </button>
      <ThemeSwitcher />
    </div>
  );
};

export default Home;
