import '../globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Syahri - Sanity Studio',
  description: 'Sanity Studio to manage the content in the website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
