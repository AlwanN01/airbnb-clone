import { createStore } from '@/libs/zustand'

export const useUserMenu = createStore({ isOpen: false }, (set, get) => ({
  setIsOpen: () => set({ isOpen: !get().isOpen })
}))
export const use = useUserMenu.use
