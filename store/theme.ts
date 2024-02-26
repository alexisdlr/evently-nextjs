import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      darkMode: true,
      toggleDarkMode: () => set({ darkMode: !get().darkMode}),
    }),
    {
      name: "theme",
    }
  )
);