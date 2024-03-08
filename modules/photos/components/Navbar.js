import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Navbar = ({ title, showGoBack = false, menu = '', onPrev }) => {
  const router = useRouter();

  return (
    <div className="h-12 w-full bg-base-200 flex justify-center">
      <div className="fixed flex bg-base-200 z-50 space-x-4 max-w-xl justify-between items-center px-5 py-6 top-0 w-full">
        <div className="flex items-center space-x-4">
          {showGoBack ? (
            <div className="h-5 flex items-center justify-center w-10">
              <button
                onClick={() => (onPrev ? onPrev() : router.back())}
                className="rounded-full p-3 bg-primary"
              >
                <ArrowLeftIcon className="h-5 w-5 text-white" />
              </button>
            </div>
          ) : (
            ''
          )}
          <div className="text-2xl h-8 font-black">{title}</div>
        </div>
        <div className="h-5 flex items-center justify-center w-10">{menu}</div>
      </div>
    </div>
  );
};

export default Navbar;
