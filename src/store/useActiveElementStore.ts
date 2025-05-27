import { create } from "zustand";

interface ActiveElementState {
  activeIndex: number;
  maxIndex: number;
  isAnimationActive: boolean;
  setActiveIndex: (index: number) => void;
  setMaxIndex: (index: number) => void;
  setIsAnimationActive: (isActive: boolean) => void;
}

export const useActiveElementStore = create<ActiveElementState>((set) => ({
  activeIndex: 0,
  maxIndex: 5,
  isAnimationActive: false,
  setActiveIndex: (index) => set({ activeIndex: index }),
  setMaxIndex: (index) => set({ maxIndex: index }),
  setIsAnimationActive: (isActive) => set({ isAnimationActive: isActive }),
}));

export default useActiveElementStore;
