import { IconType } from 'react-icons'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  outline?: boolean
  small?: boolean
  icon?: IconType
}
function Button({ onClick, label, disabled, outline, small, icon: Icon, ...args }: Props) {
  return (
    <button
      {...args}
      onClick={onClick}
      disabled={disabled}
      className={`relative w-full rounded-lg transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70
        ${outline ? 'border-black bg-white text-black' : 'border-rose-500 bg-rose-500 text-white'}
        ${small ? 'border py-1 text-sm font-light' : 'border-2 py-3 text-base font-semibold'}`}>
      {Icon && <Icon size={24} className='absolute left-4 top-3' />}
      {label}
    </button>
  )
}
export default Button
