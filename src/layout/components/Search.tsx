'use client'
import { BiSearch } from 'react-icons/bi'
import Menu from '@/components/Menu'
type Props = {}

function Search({}: Props) {
  return (
    <Nav>
      <div className='flex items-center !pl-4 sm:justify-center'>Anything</div>
      <div className='hidden place-items-center sm:grid'>Any Week</div>
      <div className='flex items-center justify-end gap-2 sm:justify-center'>
        <div className='hidden sm:block'>Add Guests</div>
        <div className='rounded-full bg-rose-500 p-2 text-white'>
          <BiSearch size={15} />
        </div>
      </div>
    </Nav>
  )
}
export default Search

type PropsNav = { children: React.ReactNode }
function Nav(props: PropsNav) {
  return (
    <nav className='w-full cursor-pointer rounded-full border-[1px] py-2 shadow-sm transition hover:shadow-md md:w-auto'>
      <div
        className='
        grid
        auto-cols-auto
        grid-flow-col
        place-items-center
        divide-x-0
        divide-solid
        child:h-full
        child:w-full
        child:px-2
        child:text-sm
        child:font-semibold
        child-hover:text-rose-500
        sm:divide-x-2
         '>
        {props.children}
      </div>
    </nav>
  )
}
