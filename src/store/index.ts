// store.js
import { create } from "zustand";

const useStore = create((set) => ({
  CurrentNFT: null,
  setCurrentNFT: (CurrentNFT: any) => set({ CurrentNFT }),
}));

export default useStore;
