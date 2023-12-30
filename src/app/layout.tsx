import type { Metadata } from 'next'
import { Merriweather } from 'next/font/google'
import './globals.css'

import Header from '../components/Header'

const merriweather = Merriweather({
  weight: ['300'],
   subsets: ['latin']
  })

export const metadata: Metadata = {
  title: 'Pokemon List',
  description: 'Nextjs 14 app showing list of 151 Pokemon',
  icons: {
    icon: ['favicon.ico']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-300 ${merriweather.className} flex flex-col items-center min-h-screen p-24">
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
