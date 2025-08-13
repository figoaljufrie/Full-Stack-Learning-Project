import { create } from 'zustand'

interface OnlineState {
  isOnline: boolean;
  setOnline: (status: boolean) => void;
  checkOnlineStatus: ()=> void
}

export const useOnlineStore = create<OnlineState>((set) => ({
  isOnline: true,
  setOnline: (status) => set({ isOnline: status }),
  checkOnlineStatus: () => set({isOnline: navigator.onLine})
}))