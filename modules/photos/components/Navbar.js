import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Navbar = ({ title, showGoBack = true }) => {
  const router = useRouter();

  return (
    <div className="h-6 w-full bg-base-100 flex justify-center">
      <div className="fixed flex bg-base-100 z-50 space-x-4 max-w-xl items-center px-5 py-6 top-0 w-full">
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
      </div>
    </div>
  );
};

export default Navbar;
