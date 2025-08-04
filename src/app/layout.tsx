import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './airbnb-colors.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PartaiBook - For Vendors',
  description: 'AI-powered platform that helps party vendors get booked, get paid, and avoid admin headaches',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
