'use client'
import { useCallback, useEffect, useState } from 'react'
import { createStore } from '@/libs/zustand'

const useMenu = createStore(
  { isOpen: false, showTransition: false },
  (set, get) => ({
    useTransition: () => useEffect(() => set({ showTransition: get().isOpen }), [get().isOpen]),
    handleClose: () => {
      set({ showTransition: false })
      setTimeout(() => set({ isOpen: false }), 150)
    }
  }),
  { devtools: false }
)

type Props = {
  target: React.ReactNode
  children: React.ReactNode
}
export function Menu({ target, children }: Props) {
  const { isOpen, showTransition, setIsOpen, setShowTransition, handleClose, useTransition } = useMenu()
  useTransition()
  return (
    <div className='relative'>
      <div
        onClick={() => (isOpen ? handleClose() : setIsOpen(true))}
        onMouseDown={e => e.preventDefault()}
        className='grid-cols cursor-pointer select-none place-items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-md md:py-1 md:pl-3 md:pr-2'>
        {target}
      </div>
      {isOpen && (
        <div
          ref={e => e?.focus()}
          tabIndex={-1}
          className={`absolute right-0 top-12 z-20 w-[40vw] overflow-hidden rounded-xl
          bg-white text-sm shadow-cmd transition duration-150 focus:outline-none md:w-48
          ${showTransition ? 'translate-x-0 translate-y-0 opacity-100' : '-translate-y-2 translate-x-1 opacity-0'}
          `}
          onClick={handleClose}
          onBlur={handleClose}>
          {children}
        </div>
      )}
    </div>
  )
}
const Target: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen, handleClose, setIsOpen } = useMenu.use('isOpen', 'handleClose', 'setIsOpen')
  return (
    <div
      onClick={() => (isOpen ? handleClose() : setIsOpen(true))}
      onMouseDown={e => e.preventDefault()}
      className='grid-cols cursor-pointer select-none place-items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-md md:py-1 md:pl-3 md:pr-2'>
      {children}
    </div>
  )
}
const Item: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({ children, ...args }) => {
  return (
    <div {...args} className='child:cursor-pointer child:px-4 child:py-3 child:transition child:hover:bg-neutral-100'>
      {children}
    </div>
  )
}
const Item2: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen, showTransition, handleClose } = useMenu()
  if (!isOpen) return null
  return (
    <div
      ref={e => e?.focus()}
      tabIndex={-1}
      className={`absolute right-0 top-12 z-20 w-[40vw] overflow-hidden rounded-xl
          bg-white text-sm shadow-cmd transition duration-150 focus:outline-none md:w-48
          ${showTransition ? 'translate-x-0 translate-y-0 opacity-100' : '-translate-y-2 translate-x-1 opacity-0'}
          `}
      onClick={handleClose}
      onBlur={handleClose}>
      <div className='child:cursor-pointer child:px-4 child:py-3 child:transition child:hover:bg-neutral-100'>{children}</div>
    </div>
  )
}
Menu.displayName = 'Menu'
Menu.Target = Target
Menu.Item = Item
Menu.Item2 = Item2
Menu.Item.displayName = 'Menu Item'
