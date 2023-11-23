'use client';

import Header from 'modules/photos/components/Header';
import Uploader from 'modules/photos/components/Uploader';

const Page = () => {
  return (
    <div className="w-full min-h-screen px-5 pt-12 pb-20 flex flex-col space-y-8 items-center justify-start">
      <Header showIntro />
      <Uploader intro />
    </div>
  );
};

export default Page;
