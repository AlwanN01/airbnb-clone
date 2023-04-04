import { createStore } from '@/libs/zustand'

export const useUserMenu = createStore({ isOpen: false })
export const use = useUserMenu.use
