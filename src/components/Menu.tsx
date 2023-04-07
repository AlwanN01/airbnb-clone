'use client'
import { useCallback, useEffect, useState } from 'react'
type Props = {
  target: React.ReactNode
  children: React.ReactNode
}
export function Menu({ target, children }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [showTransition, setShowTransition] = useState(false)
  const handleClose = useCallback(() => {
    setShowTransition(false)
    setTimeout(() => setIsOpen(false), 150)
  }, [])
  useEffect(() => setShowTransition(isOpen), [isOpen])
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
          className={`
          absolute right-0 top-12 z-20 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-cmd 
          transition duration-150 focus:outline-none md:w-48
          ${showTransition ? 'translate-x-0 translate-y-0 opacity-100' : '-translate-y-2 translate-x-1 opacity-0'}
          `}
          onClick={handleClose}
          onBlur={handleClose}>
          <div className='cursor-pointer'>{children}</div>
        </div>
      )}
    </div>
  )
}

const Item: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({ children, ...args }) => {
  return (
    <div {...args} className='px-4 py-3 transition hover:bg-neutral-100'>
      {children}
    </div>
  )
}
Menu.displayName = 'Menu'
Menu.Item = Item
Menu.Item.displayName = 'Menu Item'
