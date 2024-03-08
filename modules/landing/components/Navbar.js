'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const menuLinks = [
  {
    id: 'login',
    navLink: '/login',
    label: 'Logowanie',
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const renderMenuItems = () => (
    <div className="sm:flex-row text-xl sm:text-base flex-col flex justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 font-semibold">
      {menuLinks.map((item) => (
        <Link key={item.id} href={item.navLink}>
          <button className="hover:text-primary uppercase text-sm font-bold ease-in-out duration-150 transition">
            {item.label}
          </button>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="flex justify-between items-center">
      <Link href="/">
        <img alt="decoratly logo" src="/logo.png" className="h-16 w-auto" />
      </Link>
      {isMenuOpen ? (
        <div className="fixed flex items-center justify-center top-0 left-0 h-screen w-screen bg-neutral z-50">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-0 right-0 m-8"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          {renderMenuItems()}
        </div>
      ) : (
        <div>
          <div className="hidden sm:block">{renderMenuItems()}</div>
          <button
            className="block sm:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
