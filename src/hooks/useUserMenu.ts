import { createStore } from '@/libs/zustand'

export const useUserMenu = createStore({ isOpen: false, nama: 'alwan' }, (set, get) => ({
  setIsOpen: () => set({ isOpen: !get().isOpen })
}))
