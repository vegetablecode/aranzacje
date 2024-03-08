import { db } from 'common/config/firebase';
import { doc, setDoc } from 'firebase/firestore';
import moment from 'moment';

export const createCheckoutSession = async (plan) => {
  const response = await fetch('/api/payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      plan: plan,
    }),
  });
  const session = await response.json();
  return session;
};

export const unlockPro = async (user, plan) => {
  let date = null;
  switch (plan) {
    case 'day':
      date = moment(new Date()).add(1, 'days');
    case 'week':
      date = moment(new Date()).add(7, 'days');
    case 'month':
    default:
      date = moment(new Date()).add(30, 'days');
  }
  await setDoc(doc(db, `users/${user.uid}`), {
    proUntil: date.toDate(),
  });
};
