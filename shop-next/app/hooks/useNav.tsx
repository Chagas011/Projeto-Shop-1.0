import { create } from "zustand";

interface navStore {
  navOpen: boolean;
  handleToggleNav: () => void;
}

interface profileStore {
  profileOpen: boolean;
  handleToggleProfile: () => void;
}

export const useNav = create<navStore>((set) => ({
  navOpen: false,
  handleToggleNav: () => set((state) => ({ navOpen: !state.navOpen })),
}));

export const useProfile = create<profileStore>((set) => ({
  profileOpen: false,
  handleToggleProfile: () =>
    set((state) => ({ profileOpen: !state.profileOpen })),
}));
