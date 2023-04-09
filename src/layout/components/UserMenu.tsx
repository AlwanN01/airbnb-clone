'use client'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from './Avatar'
import { useModalRegister } from '@/hooks/useModalRegister'
import Menu from '@/components/Menu'
type Props = {}
function UserMenu({}: Props) {
  const { setIsOpen, setRefbnb } = useModalRegister.use('setIsOpen', 'setRefbnb')
  return (
    <div className='flex flex-row items-center gap-3'>
      <div ref={setRefbnb} className='hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block'>
        Airbnb your home
      </div>
      <Menu>
        <Menu.Target>
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </Menu.Target>
        <Menu.Item>
          <div onClick={() => (useModalRegister.getState().refbnb!.style.color = 'blue')}>Log In</div>
          <div onClick={() => setIsOpen(true)}>Sign Up </div>
        </Menu.Item>
      </Menu>
      <Menu>
        <Menu.Target>
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </Menu.Target>
        <Menu.Item>
          <div onClick={() => (useModalRegister.getState().refbnb!.style.color = 'blue')}>Log In</div>
          <div onClick={() => setIsOpen(true)}>Sign Up </div>
        </Menu.Item>
      </Menu>
    </div>
  )
}
export default UserMenu
