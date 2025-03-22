import { create } from "zustand";

type GlobalState = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  userRole: string | null;
  userName: string | null;
  setUser: (name: string, role: string) => void;
};

export const useGlobalStore = create<GlobalState>((set) => ({
  isDarkMode: false, // Default light mode

  userRole: null, // Initially unknown, will be set from API response
  userName: null, // Initially unknown, will be set from API response

  toggleDarkMode: () =>{
    set((state) => ({ isDarkMode: !state.isDarkMode }))
  },
    
  setUser: (name, role) => {
    set({ userName: name, userRole: role })
  }
}));
