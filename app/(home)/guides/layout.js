'use client';

import classNames from 'common/utils/classNames';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full bg-center bg-cover px-4 sm:px-12 py-4">
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
    </>
  );
};

export default Layout;
