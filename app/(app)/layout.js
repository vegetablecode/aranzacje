'use client';

import Header from 'modules/photos/components/Header';

const Layout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen px-5 pt-8 pb-20 flex flex-col space-y-8 items-center justify-start">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
