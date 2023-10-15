import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return(
    <>
    <header className={`bg-white border-gray-200 dark:bg-gray-900 shadow ${inter.className}`} style={{ boxShadow: "0 0 10px rgba(0,0,0,.125)" }}>
      <Navbar />
    </header>
    <main className={`min-h-screen ${inter.className}`}>
      <Component {...pageProps} />
    </main>
    </>
  )
}
