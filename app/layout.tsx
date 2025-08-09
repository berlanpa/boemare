import './globals.css'
import type { Metadata } from 'next'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export const metadata: Metadata = {
  title: 'Pablo Berlanga Boemare',
  description: 'about me + my reading, writing, and deep dives',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={lora.variable}>{children}</body>
    </html>
  )
}


