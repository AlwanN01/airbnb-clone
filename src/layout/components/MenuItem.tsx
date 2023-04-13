interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  label: string
}
function MenuItem({ label, ...args }: Props) {
  return (
    <div {...args} className='px-4 py-3 transition hover:bg-neutral-100'>
      {label}
    </div>
  )
}
export default MenuItem
