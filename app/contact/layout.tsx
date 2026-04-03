import type { Metadata } from 'next'
import JsonLd from '@/components/json-ld'
import { buildBreadcrumbs } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Contact Us - Lake Mary & Heathrow FL',
  description:
    'Contact Little Newtons Academy in Lake Mary or Heathrow, FL. Call, email, or send a message to learn about enrollment for Infant, Toddler, Preschool, and VPK programs.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us - Lake Mary & Heathrow FL',
    description:
      'Get in touch with Little Newtons Academy. Two locations in Lake Mary & Heathrow, FL.',
    url: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbs([
          { name: 'Home', url: '/' },
          { name: 'Contact Us', url: '/contact' },
        ])}
      />
      {children}
    </>
  )
}
