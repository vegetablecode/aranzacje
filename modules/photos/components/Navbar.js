import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Navbar = ({ title }) => {
  const router = useRouter();

  return (
    <div className="h-6 w-full">
      <div className="fixed flex z-50 space-x-4 bg-base-100 items-center px-5 py-6 top-0 left-0 w-full">
        <div className="h-5 flex items-center justify-center w-10">
          <button onClick={() => router.back()} className="btn btn-circle">
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="text-2xl h-8 font-semibold">{title}</div>
      </div>
    </div>
  );
};

export default Navbar;
