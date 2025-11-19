import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme:localStorage.getItem("metto-theme") || "coffee",
  setTheme:(theme) => {
    localStorage.setItem("metto-theme", theme);
    set({theme});
},
  
})) ;
