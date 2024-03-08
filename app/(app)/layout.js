'use client';

import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { openModalWithId } from 'common/components/layout/Modal';
import HelpModal from 'modules/photos/components/HelpModal';

const Layout = ({ children }) => {
  return (
    <div className="w-full bg-base-200">
      <div className="w-full min-h-screen px-5 pt-6 pb-20 flex flex-col space-y-8 bg-base-200 max-w-xl mx-auto items-center justify-start">
        {children}
      </div>
      <div className="fixed right-0 bottom-0 transform translate-x-[56px] -translate-y-36 -rotate-90">
        <button
          onClick={() => openModalWithId('help')}
          className="bg-primary cursor-pointer flex items-center space-x-1 bg-opacity-80 py-1 px-2 rounded-t-xl"
        >
          <QuestionMarkCircleIcon className="h-5 w-5 text-white" />
          <div className="text-white">Centrum pomocy</div>
        </button>
      </div>
      <HelpModal />
    </div>
  );
};

export default Layout;
