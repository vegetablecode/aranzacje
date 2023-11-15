'use client';

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import STYLES from 'modules/photos/styles';
import { usePathname, useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-full space-y-8">
      {STYLES.map((item) => (
        <div key={item.id}>
          <div className="text-2xl font-semibold">{item.label}</div>
          <div className="carousel w-full p-5 space-x-4 rounded-box">
            {item.filters.map((subitem) => (
              <button
                onClick={() => router.push(pathname + '/' + subitem.id)}
                className="carousel-item card bg-neutral overflow-hidden w-64"
                key={subitem.id}
              >
                <img src={subitem.image} alt="filter" />
                <div className="p-5 flex justify-between items-center">
                  <div className="">{subitem.label}</div>
                  <ChevronRightIcon className="h-4 w-4" />
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
