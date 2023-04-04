import Container from '../components/Container'
import Logo from './components/Logo'
import Search from './components/Search'
import UserMenu from './components/UserMenu'

type Props = {}
export default function Navbar({}: Props) {
  return (
    <header className='fixed z-10 w-full bg-white shadow-sm'>
      <div className='border-b-[1px] py-4'>
        <Container>
          <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </header>
  )
}
