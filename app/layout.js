'use client';
import { useEffect } from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ErrorBoundary } from '@sentry/nextjs';
import { Nunito } from 'next/font/google';
import { themeChange } from 'theme-change';
import { AuthProvider } from '../common/context/auth';
import { Toast } from '../common/components/layout/Toast';
import ProtectedRoute from '../common/components/utils/ProtectedRoute';
import { setupLogging } from '../common/utils/sentry';

import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.min.css';
import '../common/styles/globals.scss';
import '../common/styles/tailwind.scss';

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

  useEffect(() => {
    themeChange(false);
    setupLogging();
  }, []);

  return (
    <ErrorBoundary>
      <html lang="pl" className={nunito.className}>
        <Head>
          {process.env.NEXT_PUBLIC_ANALYTICS_TOKEN ? (
            <script
              defer
              src="https://static.cloudflareinsights.com/beacon.min.js"
              data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_ANALYTICS_TOKEN}"}`}
            ></script>
          ) : (
            ''
          )}
          <title>Aranżacje AI | Odmień swoje wnętrze</title>
        </Head>
        <body>
          <Toast />
          <SkeletonTheme
            borderRadius={18}
            baseColor="#ebebeb"
            highlightColor="#f5f5f5"
          >
            <AuthProvider>
              {noAuthPaths.find((rx) => rx.test(pathname)) ? (
                children
              ) : (
                <ProtectedRoute>{children}</ProtectedRoute>
              )}
            </AuthProvider>
          </SkeletonTheme>
        </body>
      </html>
    </ErrorBoundary>
  );
}
