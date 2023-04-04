'use client'
type Props = {}
function Search({}: Props) {
  return (
    <div className='w-full cursor-pointer rounded-full border-[1px] py-2 shadow-sm transition hover:shadow-md md:w-auto'>
      <div className='flex flex-row items-center justify-between'>
        <div className='px-6 text-sm font-semibold'>Anything</div>
      </div>
    </div>
  )
}
export default Search
