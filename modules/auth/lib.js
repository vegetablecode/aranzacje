import { auth, db } from 'common/config/firebase';
import {
  GoogleAuthProvider,
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export const signUp = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const login = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  return await signInWithPopup(auth, provider);
};

export const resetPassword = async (email) => {
  return await sendPasswordResetEmail(auth, email);
};

export const confirmThePasswordReset = async (oobCode, newPassword) => {
  if (!oobCode && !newPassword) return;
  return await confirmPasswordReset(auth, oobCode, newPassword);
};

export const logout = async () => {
  await signOut(auth);
};

export const getUserData = async (user) => {
  const userRef = await getDoc(doc(db, `users/${user.uid}`));
  return userRef.data();
};
