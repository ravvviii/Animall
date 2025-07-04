import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Booster Purchase Flow',
  description: 'Simulated purchase flow for Animall task',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen">{children}</body>
    </html>
  )
}
