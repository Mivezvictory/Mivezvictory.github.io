import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/themes/ThemeProvider'
import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Miyen‑Ebi Iyakoregha — Portfolio',
  description: 'Azure Cloud Developer (C#, React, Functions). Projects, experience, and contact.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'Miyen‑Ebi Iyakoregha — Portfolio',
    description: 'Azure Cloud Developer (C#, React, Functions).',
    url: 'https://your-domain.dev',
    siteName: 'Portfolio',
    type: 'website',
  },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider>
          <Navbar />
          <main className="container">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}