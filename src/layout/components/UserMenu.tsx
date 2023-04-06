'use client'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from './Avatar'
import MenuItem from './MenuItem'
import { useState } from 'react'
import { useModalRegister } from '@/hooks/useModalRegister'
type Props = {}
function UserMenu({}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const { setIsOpen: setOpenRegister } = useModalRegister.use('setIsOpen')
  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div className='hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block'>
          Airbnb your home
        </div>
        <div
          onClick={() => setIsOpen(v => !v)}
          className='grid-col cursor-pointer select-none place-items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-md md:py-1 md:pl-3 md:pr-2'>
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          ref={e => e?.focus()}
          tabIndex={0}
          className='absolute right-0 top-12 z-20 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-cmd focus:outline-none md:w-3/4'
          onBlur={() => setIsOpen(false)}>
          <div className='cursor-pointer'>
            <MenuItem onClick={() => {}} label='Log In' />
            <MenuItem onClick={() => void (setOpenRegister(true), setIsOpen(false))} label='Sign Up' />
          </div>
        </div>
      )}
    </div>
  )
}
export default UserMenu
