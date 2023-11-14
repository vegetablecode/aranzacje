import { create } from 'zustand';

const useOnboardingStore = create((set) => ({
  image: '',
  isLoading: true,
  setImage: (image) => set({ image }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));

export default useOnboardingStore;
