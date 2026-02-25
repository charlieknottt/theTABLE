import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AdminFloatingButton from '@/components/AdminFloatingButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'The Table | Where Hospitality Meets Mission',
  description: 'Inspire face-to-face dinners across the nation to model Christian hospitality and spur meaningful change through warm, vibrant, intentional discussions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <AdminFloatingButton />
      </body>
    </html>
  )
}
