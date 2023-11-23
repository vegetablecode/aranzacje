'use client';

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen px-5 pt-6 pb-20 flex flex-col space-y-8 items-center justify-start">
      {children}
    </div>
  );
};

export default Layout;
