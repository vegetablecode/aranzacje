'use client';

import classNames from 'common/utils/classNames';
import Header from 'modules/photos/components/Header';
import Uploader from 'modules/photos/components/Uploader';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Page = () => {
  const [useOnDekstop, setUseOnDekstop] = useState(false);

  return (
    <>
      <div
        className={classNames(
          'w-full min-h-screen px-5 pt-8 pb-20 flex flex-col space-y-6 items-center justify-start',
          useOnDekstop ? '' : 'lg:hidden'
        )}
      >
        <Header showIntro />
        <Uploader intro />
      </div>
      <div
        className={classNames(
          'w-full min-h-screen px-5 pt-8 pb-20 flex flex-col space-y-6 items-center justify-start',
          useOnDekstop ? 'lg:hidden' : ''
        )}
      >
        <div className="mockup-phone border-primary">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard text-center artboard-demo phone-1 flex flex-col space-y-4 px-8">
              <Header />
              <img src="/qr.png" className="w-full h-auto" alt="qr-code" />
              <div>Zeskanuj kod telefonem, aby rozpocząć 📲</div>
            </div>
          </div>
        </div>
        <div className="divider">LUB</div>
        <button onClick={() => setUseOnDekstop(true)} class="btn btn-primary">
          💻 Uzywaj na komputerze
        </button>
      </div>
    </>
  );
};

export default Page;
