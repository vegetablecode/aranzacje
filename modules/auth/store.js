import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  userData: {},
  isLoading: true,
  setUser: (user) => set({ user }),
  setUserData: (userData) => set({ userData }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));

export default useAuthStore;
