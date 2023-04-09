'use client'
import { BiSearch } from 'react-icons/bi'
type Props = {}

function Search({}: Props) {
  return (
    <nav className='w-full cursor-pointer rounded-full border-[1px] py-2 shadow-sm transition hover:shadow-md md:w-auto'>
      <div className='flex flex-row items-center justify-between'>
        <div className='px-6 text-sm font-semibold'>Anything</div>
        <div className='hidden flex-grow border-x-[1px] px-6 text-center text-sm font-semibold sm:block'>Any Week</div>
        <div className='flex flex-row items-center gap-3 pl-6 pr-2 text-sm text-gray-600'>
          <div className='hidden sm:block'>Add Guests</div>
          <div className='rounded-full bg-rose-500 p-2 text-white'>
            <BiSearch size={15} />
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Search
