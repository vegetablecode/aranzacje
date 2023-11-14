'use client';

import { logout } from 'modules/auth/lib';
import useAuthStore from 'modules/auth/store';

const Page = () => {
  const { setUser } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <div>
      <button onClick={() => handleLogout()} className="btn">
        Logout
      </button>
    </div>
  );
};

export default Page;
