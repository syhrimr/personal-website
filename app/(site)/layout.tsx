import '../globals.css'

import HeaderNavbar from '../_components/HeaderNavbar'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Syahri - Portfolio',
  description: 'Personal Website for Portfolio Showcase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className='shadow-md'>
          <HeaderNavbar />
        </header>
        <main className='max-w-3xl mx-10 sm:mx-auto py-20'>
          {children}
        </main>
      </body>
    </html>
  )
}
