'use client'
interface Props extends React.HTMLAttributes<HTMLInputElement> {}
function Input({ ...args }: Props) {
  return <div {...args}>Input</div>
}
export default Input
