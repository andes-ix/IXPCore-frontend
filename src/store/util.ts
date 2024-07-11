import { create } from "zustand";

interface UtilState {
  isOpenNavbar: boolean;
  openNavbar: () => void;
  closeNavbar: () => void;
}

export const useUtilStore = create<UtilState>((set) => ({
  isOpenNavbar: false,
  openNavbar: () => set(() => ({ isOpenNavbar: true })),
  closeNavbar: () => set(() => ({ isOpenNavbar: false })),
}));
