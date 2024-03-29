'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type Props = {}
function Logo({}: Props) {
  const router = useRouter()
  return <Image alt='Logo' className='hidden cursor-pointer pr-2 md:block' height='100' width='100' src='/images/logo.png' />
}
export default Logo
