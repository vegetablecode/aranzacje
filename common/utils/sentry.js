import * as Sentry from '@sentry/nextjs';
import { makeErrorToast } from '../components/layout/Toast';

export const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;
export const IS_PROD = process.env.NEXT_PUBLIC_IS_PROD;

export const setupLogging = () => {
  if (SENTRY_DSN) {
    Sentry.init({ dsn: SENTRY_DSN });
  }
};

export const logError = (error, errorInfo = null) => {
  if (!SENTRY_DSN) {
    return;
  }

  Sentry.withScope((scope) => {
    errorInfo && scope.setExtras(errorInfo);
    Sentry.captureException(error);
  });
};

export const onError = (error, alertText = '') => {
  let errorInfo = {};
  let message = error.toString();

  if (!(error instanceof Error) && error.message) {
    errorInfo = error;
    message = error.message;
    error = new Error(message);
  } else if (error.config && error.config.url) {
    errorInfo.url = error.config.url;
  }

  if (alertText) {
    makeErrorToast(alertText);
    errorInfo.alert = alertText;
  }

  logError(error, errorInfo);

  if (!IS_PROD) {
    console.error(error.message);
  }
};
