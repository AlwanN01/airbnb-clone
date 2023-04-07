'use client'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from './Avatar'
import { useModalRegister } from '@/hooks/useModalRegister'
import { Menu } from '@/components/Menu'
type Props = {}
function UserMenu({}: Props) {
  const { setIsOpen } = useModalRegister.use('setIsOpen')
  const target = (
    <>
      <AiOutlineMenu />
      <div className='hidden md:block'>
        <Avatar />
      </div>
    </>
  )
  return (
    <div className='flex flex-row items-center gap-3'>
      <div className='hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block'>
        Airbnb your home
      </div>
      <Menu target={target}>
        <Menu.Item onClick={() => {}}>Log In</Menu.Item>
        <Menu.Item onClick={() => setIsOpen(true)}>Sign Up </Menu.Item>
      </Menu>
    </div>
  )
}
export default UserMenu
