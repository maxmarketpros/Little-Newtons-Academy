import type { Metadata } from 'next'
import { Nunito, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Little Newtons Academy | Curiosity. Discovery. Growth.',
  description:
    'Little Newtons Academy provides a safe, nurturing, and enriching early education environment in Lake Mary, FL. Infant through VPK programs. Schedule a tour today!',
  generator: 'v0.app',
  keywords: [
    'preschool',
    'daycare',
    'VPK',
    'infant care',
    'toddler program',
    'Lake Mary FL',
    'Heathrow FL',
    'early education',
    'childcare',
  ],
  openGraph: {
    title: 'Little Newtons Academy | Curiosity. Discovery. Growth.',
    description:
      'A safe, nurturing, and enriching early education environment in Lake Mary, FL.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#2d7a3a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
