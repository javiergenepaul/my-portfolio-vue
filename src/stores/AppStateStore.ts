import { create } from "zustand";

type State = {
  count: number;
  doubleCount: number;
  dirty: boolean; // Added dirty property
};

type Actions = {
  increaseCount: () => void;
  doubleCountAction: () => void;
};

const useStore = create<State & Actions>((set) => ({
  count: 0,
  doubleCount: 0,
  dirty: false, // Initialize dirty flag
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  doubleCountAction: () =>
    set((state) => ({ doubleCount: state.doubleCount * 2 })),
}));

export default useStore;
