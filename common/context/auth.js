import { useEffect, createContext, useState, useContext } from 'react';
import { auth } from '../config/firebase';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  confirmPasswordReset,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
} from 'firebase/auth';
import updatePreferences from '../api/updatePreferences';
import getPreferences from '../api/getPreferences';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [preferences, setPreferences] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
        try {
          await getUserPreferences(user);
        } catch (err) {
          console.error(err);
        }
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email, password) => {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    await updatePreferences(newUser.user, null, true);
    return newUser;
  };

  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    const newUser = await signInWithPopup(auth, provider);
    const { isNewUser } = getAdditionalUserInfo(newUser);
    if (isNewUser) {
      await updatePreferences(newUser.user, null, true);
    }
    return newUser;
  };

  const resetPassword = async (email) => {
    return await sendPasswordResetEmail(auth, email);
  };

  const confirmThePasswordReset = async (oobCode, newPassword) => {
    if (!oobCode && !newPassword) return;
    return await confirmPasswordReset(auth, oobCode, newPassword);
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  const getUserPreferences = async (currentUser) => {
    const userPreferences = await getPreferences(currentUser);
    setPreferences(userPreferences);
  };

  const updateUserPreferences = async (newPreferences) => {
    await updatePreferences(user, newPreferences);
    setPreferences(newPreferences);
  };

  const contextValue = {
    user,
    preferences,
    login,
    loginWithGoogle,
    signUp,
    resetPassword,
    confirmThePasswordReset,
    logout,
    updateUserPreferences,
    isLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
