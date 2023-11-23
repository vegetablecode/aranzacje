'use client';
import Navbar from 'modules/photos/components/Navbar';
import Uploader from 'modules/photos/components/Uploader';

const Page = () => {
  return (
    <div className="w-full min-h-screen px-5 pt-12 pb-20 flex flex-col space-y-8 items-center justify-start">
      <Navbar title="Dodaj pomieszczenie ✨" />
      <Uploader />
    </div>
  );
};

export default Page;
