import { create } from 'zustand';

const usePhotoStore = create((set) => ({
  image: '',
  isLoading: true,
  prompt: '',
  setImage: (image) => set({ image }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setPrompt: (prompt) => set({ prompt }),
}));

export default usePhotoStore;
