'use client'
import { useEffect, createContext, useRef, useContext } from 'react'
import { createStore } from '@/libs/zustand'
import { useStore } from 'zustand'
import { useClickOutside } from '@mantine/hooks'
const useMenu = () =>
  createStore(
    { isOpen: false, showTransition: false },
    (set, get) => ({
      useTransition: () => useEffect(() => void setTimeout(() => set({ showTransition: get().isOpen }), 1), [get().isOpen]),
      handleClose: () => {
        set({ showTransition: false })
        setTimeout(() => set({ isOpen: false }), 150)
      }
    }),
    { devtools: true }
  )
type MenuStore = ReturnType<typeof useMenu>
const MenuContext = createContext<MenuStore | null>(null)
type Props = {
  children: React.ReactNode
}
function Menu({ children }: Props) {
  const store = useRef(useMenu()).current
  return (
    <MenuContext.Provider value={store}>
      <div className='relative'>{children}</div>
    </MenuContext.Provider>
  )
}
const Target: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const store = useContext(MenuContext)
  if (!store) throw new Error('Missing MenuContext.Provider in the tree')
  // const { isOpen, handleClose, setIsOpen, useTransition, get } = useStore(store)
  const handleClose = useStore(store, state => state.handleClose)
  const setIsOpen = useStore(store, state => state.setIsOpen)
  const get = useStore(store, state => state.get)
  return (
    <div
      onClick={() => (get().isOpen ? handleClose() : setIsOpen(true))}
      onMouseDown={e => get().isOpen && e.preventDefault()}
      className='grid-cols cursor-pointer select-none place-items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-md md:py-1 md:pl-3 md:pr-2'>
      {children}
    </div>
  )
}

const Item: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const store = useContext(MenuContext)
  if (!store) throw new Error('Missing MenuContext.Provider in the tree')
  const { isOpen, showTransition, handleClose, useTransition } = useStore(store)
  useTransition()
  console.log({ isOpen, showTransition })
  const ref = useClickOutside(() => handleClose())
  if (!isOpen) return null
  return (
    <div
      ref={ref}
      tabIndex={-1}
      className={`absolute right-0 top-12 z-20 w-[40vw] overflow-hidden rounded-xl
          bg-white text-sm shadow-cmd transition duration-150 focus:outline-none md:w-48
          ${showTransition ? 'translate-x-0 translate-y-0 opacity-100' : '-translate-y-2 translate-x-1 opacity-0'}
          `}
      onClick={handleClose}
      onBlur={handleClose}>
      <div className='child:cursor-pointer child:px-4 child:py-3 child:transition hover:child:bg-neutral-100'>{children}</div>
    </div>
  )
}
Menu.displayName = 'Menu'
Menu.Target = Target
Menu.Item = Item
Menu.Item.displayName = 'Menu Item'

export default Menu
