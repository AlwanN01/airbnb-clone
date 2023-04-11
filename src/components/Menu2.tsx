'use client'
import { useEffect, createContext, useContext, useState, useCallback, Dispatch, SetStateAction } from 'react'

type Props = {
  children: [React.ReactElement, React.ReactElement]
  open?: boolean
}
type MenuState = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  showTransition: boolean
  setShowTransition: Dispatch<SetStateAction<boolean>>
  handleClose: () => void
}
const MenuStateContext = createContext<MenuState | null>(null)
function Menu({ children, open = false }: Props) {
  const [isOpen, setIsOpen] = useState(open)
  const [showTransition, setShowTransition] = useState(false)
  const handleClose = useCallback(() => {
    setShowTransition(false)
    setTimeout(() => setIsOpen(false), 150)
  }, [])
  const state: MenuState = { isOpen, setIsOpen, showTransition, setShowTransition, handleClose }
  return (
    <MenuStateContext.Provider value={state}>
      <div className='relative'>{children}</div>
    </MenuStateContext.Provider>
  )
}
const Target: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const state = useContext(MenuStateContext)
  if (!state) throw new Error('Missing MenuContext.Provider in the tree')
  const { isOpen, handleClose, setIsOpen } = state
  return (
    <div
      onClick={() => (isOpen ? handleClose() : setIsOpen(true))}
      onMouseDown={e => isOpen && e.preventDefault()}
      className='grid-cols cursor-pointer select-none place-items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-md md:py-1 md:pl-3 md:pr-2'>
      {children}
    </div>
  )
}
const Item: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const state = useContext(MenuStateContext)
  if (!state) throw new Error('Missing MenuContext.Provider in the tree')
  const { isOpen, showTransition, handleClose, setShowTransition } = state
  useEffect(() => setShowTransition(isOpen), [isOpen, setShowTransition])

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
      <div className='child:cursor-pointer child:px-4 child:py-3 child:transition hover:child:bg-neutral-100'>{children}</div>
    </div>
  )
}

Menu.Target = Target
Menu.Item = Item
export default Menu
