import type { Metadata } from 'next'
import { Nunito, Fraunces, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import JsonLd from '@/components/json-ld'
import ScrollToTop from '@/components/scroll-to-top'
import { SITE_URL, SITE_NAME } from '@/lib/seo'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Little Newtons Academy | Curiosity. Discovery. Growth.',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Little Newtons Academy provides a safe, nurturing, and enriching early education environment in Lake Mary, FL. Infant through VPK programs. Schedule a tour today!',
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Little Newtons Academy | Curiosity. Discovery. Growth.',
    description:
      'A safe, nurturing, and enriching early education environment in Lake Mary, FL.',
    url: '/',
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/logo-landscape.png',
        width: 1200,
        height: 630,
        alt: 'Little Newtons Academy - Curiosity. Discovery. Growth.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Little Newtons Academy | Curiosity. Discovery. Growth.',
    description:
      'A safe, nurturing, and enriching early education environment in Lake Mary, FL.',
    images: ['/images/logo-landscape.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  themeColor: '#0879A1',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
            logo: `${SITE_URL}/images/logo-square.png`,
            description:
              'Premium early education academy serving Lake Mary and Heathrow, FL. Programs for infants through VPK.',
            telephone: ['+14077324413', '+14073231221'],
            email: [
              'heathrow@littlenewtonsacademy.com',
              'lakemary@littlenewtonsacademy.com',
            ],
            sameAs: [],
          }}
        />
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE_NAME,
            url: SITE_URL,
            description: 'Curiosity. Discovery. Growth.',
          }}
        />
        <ScrollToTop />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
