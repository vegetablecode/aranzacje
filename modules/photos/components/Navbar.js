import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { openModalWithId } from 'common/components/layout/Modal';
import UserModal from 'modules/auth/components/UserModal';

const Navbar = ({ title, showGoBack = true, showUserMenu }) => {
  const router = useRouter();

  return (
    <div className="h-6 w-full bg-base-100 flex justify-center">
      <UserModal />
      <div className="fixed flex bg-base-100 z-50 space-x-4 max-w-xl justify-between items-center px-5 py-6 top-0 w-full">
        {showGoBack ? (
          <div className="h-5 flex items-center justify-center w-10">
            <button onClick={() => router.back()} className="btn btn-circle">
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
          </div>
        ) : (
          ''
        )}
        <div className="text-2xl h-8 font-semibold">{title}</div>
        {showUserMenu ? (
          <button
            onClick={() => openModalWithId('user-menu')}
            className="avatar placeholder h-8 flex justify-center items-center"
          >
            <div className="bg-neutral text-neutral-content rounded-full w-10 h-10">
              <span>🧑</span>
            </div>
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Navbar;
