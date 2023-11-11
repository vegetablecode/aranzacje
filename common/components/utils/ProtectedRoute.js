import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from 'common/context/auth';
import LoadingOverlay from 'common/components/layout/LoadingOverlay';

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [router, user, isLoading]);

  return <>{user ? children : <LoadingOverlay />}</>;
};

export default ProtectedRoute;
