import '../globals.css'

import Link from 'next/link'
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
      <body className='max-w-3xl mx-auto py-10'>
        <header>
          <Link
            href="/"
            className="text-gradient-primary text-lg font-bold"
          >
            Syahri
          </Link>
        </header>
        <main className='py-20'>
          {children}
        </main>
      </body>
    </html>
  )
}
