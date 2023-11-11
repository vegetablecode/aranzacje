import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from 'common/config/firebase';

const updatePreferences = async (user, preferences, initial = false) => {
  if (initial) {
    const defaultPreferences = { hideCompletedGoals: false };
    await setDoc(doc(db, 'users', user.uid), defaultPreferences);
    return defaultPreferences;
  } else {
    await updateDoc(doc(db, 'users', user.uid), preferences);
    return preferences;
  }
};

export default updatePreferences;
