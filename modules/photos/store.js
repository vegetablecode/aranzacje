import { create } from 'zustand';

const usePhotoStore = create((set) => ({
  image: '',
  isLoading: true,
  setImage: (image) => set({ image }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));

export default usePhotoStore;
