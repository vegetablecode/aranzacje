'use client';
import { useEffect } from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { ErrorBoundary } from '@sentry/nextjs';
import { Nunito } from 'next/font/google';
import { themeChange } from 'theme-change';
import { Toast } from 'common/components/layout/Toast';
import ProtectedRoute from 'modules/auth/components/ProtectedRoute';
import { setupLogging } from 'common/utils/sentry';

import 'react-toastify/dist/ReactToastify.min.css';
import 'common/styles/globals.scss';
import 'common/styles/tailwind.scss';
import useAuthStore from 'modules/auth/store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'common/config/firebase';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-family-sans',
  fallback: ['system-ui', 'Helvetica Neue', 'Helvetica', 'Arial'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const noAuthPaths = [/^\/$/, /^\/signup/, /^\/login/, /^\/reset-password/];
  const { setUser, setIsLoading } = useAuthStore();

  useEffect(() => {
    themeChange(false);
    setupLogging();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ErrorBoundary>
      <html lang="pl" className={nunito.className}>
        <Head>
          <title>Aranżacje AI | Odmień swoje wnętrze</title>
        </Head>
        <body>
          <Toast />
          {noAuthPaths.find((rx) => rx.test(pathname)) ? (
            children
          ) : (
            <ProtectedRoute>{children}</ProtectedRoute>
          )}
        </body>
      </html>
    </ErrorBoundary>
  );
}
