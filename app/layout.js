'use client';
import { useEffect } from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { ErrorBoundary } from '@sentry/nextjs';
import { Work_Sans } from 'next/font/google';
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
import { getUserData } from 'modules/auth/lib';
import Metadata from 'common/components/layout/Metadata';
import Script from 'next/script';
import { getAnalytics, isSupported } from 'firebase/analytics';

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-family-sans',
  fallback: ['system-ui', 'Helvetica Neue', 'Helvetica', 'Arial'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const authPaths = ['/profile', '/app', '/photos', '/payment', '/add'];

const requireAuth = (path) => {
  return authPaths.some((authPath) => {
    const regex = new RegExp(`^${authPath}(\/|$)`);
    return regex.test(path);
  });
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const { user, setUserData, setUser, setIsLoading } = useAuthStore();

  useEffect(() => {
    themeChange(false);
    setupLogging();
  }, []);

  useEffect(() => {
    const onLoad = async () => {
      if (user?.uid) {
        setUserData(await getUserData(user));
      }
    };

    onLoad();
  }, [user]);

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
      <html lang="pl" className={workSans.className}>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${process.env.NEXT_PUBLIC_PIXEL_ID});
            fbq('track', 'PageView');
          `,
          }}
        />
        <Script strategy="lazyOnload" id="clarity-script">
          {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY}");
        `}
        </Script>
        {process.env.NEXT_PUBLIC_ANALYTICS_TOKEN ? (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_ANALYTICS_TOKEN}"}`}
          ></script>
        ) : (
          ''
        )}
        <body>
          <Toast />
          <div>
            {requireAuth(pathname) ? (
              <ProtectedRoute>{children}</ProtectedRoute>
            ) : (
              children
            )}
          </div>
        </body>
      </html>
    </ErrorBoundary>
  );
}
