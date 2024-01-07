import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, Navbar } from '@/components'
// import bg from '../../public/hero-image.jpg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Netflix clone',
  description: 'Netflix clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`my-container ${inter.className} `}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
