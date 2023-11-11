'use client';

import { usePathname, useRouter } from 'next/navigation';
import { HomeIcon, UserIcon } from '@heroicons/react/24/outline';
import classNames from 'common/utils/classNames';

const menuItems = [
  {
    navLink: '/dashboard',
    label: 'Dashboard',
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    navLink: '/profile',
    label: 'Profile',
    icon: <UserIcon className="h-5 w-5" />,
  },
];

const Layout = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const renderTopNavigation = () => (
    <div className="flex items-center justify-center">
      <ul className="sm:menu sm:menu-horizontal bg-base-200 mb-2 rounded-box hidden">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a
              className={classNames(item.navLink === pathname ? 'active' : '')}
              onClick={() => router.push(item.navLink)}
            >
              {item.icon} <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderBottomNavigation = () => (
    <div className="btm-nav border-t border-gray-700 border-opacity-70 sm:hidden">
      {menuItems.map((item) => (
        <button
          key={item.label}
          className={classNames(item.navLink === pathname ? 'active' : '')}
          onClick={() => router.push(item.navLink)}
        >
          {item.icon}
          <span className="btm-nav-label text-sm">{item.label}</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="p-4">
      {renderTopNavigation()}
      {children}
      {renderBottomNavigation()}
    </div>
  );
};

export default Layout;
