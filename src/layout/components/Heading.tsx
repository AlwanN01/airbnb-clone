type Props = {
  title: string
  subTitle?: string
  center?: boolean
}
function Heading(props: Props) {
  return (
    <div className={props.center ? 'text-center' : 'text-start'}>
      <h1 className='text-2xl font-bold'>{props.title}</h1>
      <h2 className='mt-2 font-light text-neutral-500'>{props.subTitle}</h2>
    </div>
  )
}
export default Heading
