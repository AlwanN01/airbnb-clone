'use client'
import { useEffect, createContext, useContext, useMemo } from 'react'
import { createStore } from '@/libs/zustand'
//prettier-ignore
const createMenuStore = (open = false) => 
  createStore({ isOpen: open, showTransition: false }, (set, get) => ({
    handleClose: () => void (set({ showTransition: false }), setTimeout(() => set({ isOpen: false }), 150))
  }),{ devtools: false })
const MenuContext = createContext<ReturnType<typeof createMenuStore> | null>(null)

type Props = { children: [React.ReactElement, React.ReactElement]; open?: boolean }
function Menu({ children, open }: Props) {
  return (
    <MenuContext.Provider value={useMemo(() => createMenuStore(open), [open])}>
      <div className='relative'>{children}</div>
    </MenuContext.Provider>
  )
}
const Target: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const useStore = useContext(MenuContext)
  if (!useStore) throw new Error('Missing MenuContext.Provider in the tree')
  const { isOpen } = useStore.use('isOpen')
  const { handleClose, setIsOpen } = useStore.useFunction()
  return (
    <div
      onClick={() => (isOpen ? handleClose() : setIsOpen(true))}
      onMouseDown={e => isOpen && e.preventDefault()}
      className='grid-container cursor-pointer select-none place-items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-md md:py-1 md:pl-3 md:pr-2'>
      {children}
    </div>
  )
}
const Item: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const useStore = useContext(MenuContext)
  if (!useStore) throw new Error('Missing MenuContext.Provider in the tree')
  const { isOpen, showTransition, handleClose, setShowTransition } = useStore()
  useEffect(() => void setTimeout(() => setShowTransition(isOpen), 1), [isOpen, setShowTransition])
  if (!isOpen) return null
  return (
    <div
      ref={e => showTransition && e?.focus()}
      tabIndex={-1}
      className={`absolute right-0 top-12 z-20 w-[40vw] overflow-hidden rounded-xl bg-white
          text-sm shadow-cmd transition duration-150 focus:outline-none md:w-40
          ${showTransition ? 'translate-x-0 translate-y-0 opacity-100' : '-translate-y-2 translate-x-1 opacity-0'}
          `}
      onClick={handleClose}
      onBlur={handleClose}>
      <div className='child:cursor-pointer child:px-4 child:py-3 child:transition child-hover:bg-neutral-100'>{children}</div>
    </div>
  )
}
Menu.Target = Target
Menu.Item = Item
export default Menu
