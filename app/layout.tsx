import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: 'Pablo Berlanga Boemare',
  description: 'Personal website of Pablo Berlanga Boemare',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lora.variable} font-sans`}>{children}</body>
    </html>
  )
}
