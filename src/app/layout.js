import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import ChatwoptWidget from './components/ChatWoot'
import Providers from './components/DarkMode/provider' 
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], })

export const metadata = {
  title: 'Portfolio',
  description: 'Frontend developer',
}

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en" className='dark' style={{colorScheme:'dark'}}>
    
      <body className={montserrat.className}>
      <Providers>
     
        {children}
        </Providers>
        <Analytics />
        <div className='hidden sm:block'>
        <ChatwoptWidget/>
        </div>
        </body>
      

    </html>
    </>
  )
}
