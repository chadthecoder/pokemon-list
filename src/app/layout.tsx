import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      
      <body className="bg-gray-300 ${inter.className} flex flex-col items-center min-h-screen p-24">
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
