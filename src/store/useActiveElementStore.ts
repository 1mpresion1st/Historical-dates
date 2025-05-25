import { create } from 'zustand';

interface ActiveElementState {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  reset: () => void;
}

export const useActiveElementStore = create<ActiveElementState>((set) => ({
  activeIndex: 0,
  setActiveIndex: (index) => set({ activeIndex: index }),
  reset: () => set({ activeIndex: 0 })
}));

export default useActiveElementStore;