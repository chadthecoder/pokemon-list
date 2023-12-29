import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

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
      <head>
      {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
      </head>
      <body className="bg-gray-300 ${inter.className} flex flex-col items-center min-h-screen p-24">
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
