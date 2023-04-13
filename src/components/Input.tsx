'use client'

import { BiDollar } from 'react-icons/bi'

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  formatPrice?: boolean
  errors?: unknown
  label: string
}
function Input({ id, formatPrice, label, ...args }: WithRequired<Props, 'id'>) {
  return (
    <div className='relative w-full'>
      {formatPrice && <BiDollar size={24} className='absolute left-2 top-5 text-neutral-700' />}
      <input
        id={id}
        {...args}
        className={`peer w-full rounded-md border-2 border-neutral-300 bg-white p-4 pt-6 font-light outline-none
                    transition focus:border-black disabled:cursor-not-allowed disabled:opacity-70
                    ${formatPrice ? 'pl-9' : 'pl-4'}`}
        placeholder=' '
      />
      <label
        htmlFor={id}
        className={`absolute top-5 z-10 origin-[0] -translate-y-3
          transform duration-150 ${formatPrice ? 'left-9' : 'left-4'}
          cursor-text text-zinc-400
          peer-placeholder-shown:translate-y-0
          peer-placeholder-shown:scale-100
          peer-focus:-translate-y-4
          peer-focus:scale-75`}>
        {label}
      </label>
    </div>
  )
}
export default Input
