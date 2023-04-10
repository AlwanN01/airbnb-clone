import Container from '../components/Container'
import Logo from './components/Logo'
import Search from './components/Search'
import UserMenu from './components/UserMenu'

type Props = {}
export default function Navbar({}: Props) {
  return (
    <div className='fixed z-10 w-full bg-white shadow-sm'>
      <div className='border-b-[1px] py-4'>
        <Container>
          <div className='grid-container auto-cols-[1fr_min-content] items-center gap-3 md:auto-cols-[1fr_max-content_1fr] md:gap-0'>
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  )
}
