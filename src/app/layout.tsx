import Navbar from '@/components/layout/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Lilita_One } from 'next/font/google'
import { ShoppingCartProvider } from '@/context/ShoppingCartContext'
import ShoppingCart from '@/components/elements/ShoppingCart'
import Footer from '@/components/layout/Footer'

const lilita = Lilita_One({ 
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ShoppingCartProvider>
      <html lang="pt-br">
      <body className={lilita.className}>
        <Navbar/>
        <ShoppingCart/>
        {children}
        <Footer/>
      </body>
    </html>
    </ShoppingCartProvider>
  )
}
