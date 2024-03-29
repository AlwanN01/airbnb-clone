'use client'

import { BiDollar } from 'react-icons/bi'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  formatPrice?: boolean
  isError?: boolean
  errMsg?: string
  label?: string
}
function Input({ id, formatPrice, label, isError, errMsg, className, ...args }: InputProps) {
  return (
    <div className='relative w-full'>
      {formatPrice && <BiDollar size={24} className='absolute left-2 top-5 text-neutral-700' />}
      <input
        {...args}
        id={id || label}
        className={`peer w-full rounded-md border-2  bg-white p-4 pt-6 font-light
                    transition focus:border-black disabled:cursor-not-allowed disabled:opacity-70 ${className ?? ''}
                    ${formatPrice ? 'pl-9' : 'pl-4'}
                    ${isError ? 'border-rose-500' : 'border-neutral-300'}`}
        placeholder=' '
      />
      <label
        htmlFor={id || label}
        className={`absolute top-5 z-10 origin-[0] -translate-y-3
          transform duration-150 ${formatPrice ? 'left-9' : 'left-4'}
          cursor-text select-none text-zinc-400
          peer-placeholder-shown:translate-y-0
          peer-placeholder-shown:scale-100
          peer-focus:-translate-y-4
          peer-focus:scale-75`}>
        {label}
      </label>
      {isError && <span className='mx-2 -mt-3 text-sm font-light text-rose-500'>{errMsg}</span>}
    </div>
  )
}
export default Input
