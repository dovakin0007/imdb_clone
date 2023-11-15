import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import NavBar from './components/NavBar'

import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB clone',
  description: 'IMDB clone app made from a udemy tutorial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
      <Header />
      <NavBar />
      {/*SearchBox*/}
      {children}
      </Providers>
</body>
    </html>
  )
}
