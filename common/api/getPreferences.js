import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const getPreferences = async (user) => {
  const preferencesSnap = await getDoc(doc(db, 'users', user.uid));
  return preferencesSnap.data();
};

export default getPreferences;
