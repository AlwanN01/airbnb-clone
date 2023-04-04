import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './layout/Navbar'
export const metadata = {
  title: 'Airbnb Clone',
  description: 'Generated by create next app'
}
const font = Nunito({ subsets: ['latin'] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
