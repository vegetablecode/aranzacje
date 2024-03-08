import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoadingOverlay from 'common/components/layout/LoadingOverlay';
import useAuthStore from 'modules/auth/store';

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/signup');
    }
  }, [router, user, isLoading]);

  return <>{user ? children : <LoadingOverlay />}</>;
};

export default ProtectedRoute;
