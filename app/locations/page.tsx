import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABanner from '@/components/cta-banner'
import JsonLd from '@/components/json-ld'
import { buildBreadcrumbs, SITE_URL, HEATHROW_CAMPUS, LAKE_MARY_CAMPUS } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Our Locations - Heathrow & Lake Mary FL',
  description:
    'Visit Little Newtons Academy at our Heathrow (1032 AAA Drive) or Lake Mary (2720 W. Lake Mary Blvd) locations. Schedule a tour today!',
  alternates: { canonical: '/locations' },
  openGraph: {
    title: 'Our Locations - Heathrow & Lake Mary FL',
    description:
      'Visit Little Newtons Academy at our Heathrow or Lake Mary locations. Schedule a tour today!',
    url: '/locations',
  },
}

const campusFeatures = [
  {
    title: 'Secure Campus',
    description: 'Controlled access, 24-hour cameras, and strict protocols keep every child safe.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'Loving Teachers',
    description: 'Experienced, CPR-certified educators who are passionate about early childhood development.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Creative Curriculum',
    description: 'Research-based framework with STEAM integration for well-rounded academic preparation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: 'USDA Meals',
    description: 'Fresh, nutritious breakfast, lunch, and snacks included daily at no additional cost.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: 'Outdoor Play Areas',
    description: 'Age-appropriate outdoor spaces designed for active play, exploration, and social growth.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: 'Parent Communication',
    description: 'Stay connected with the Procare app for daily updates, photos, and easy messaging.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]

export default function LocationsPage() {
  const childCareSchema = (campus: typeof HEATHROW_CAMPUS) => ({
    '@context': 'https://schema.org',
    '@type': 'ChildCare',
    name: campus.name,
    image: `${SITE_URL}/images/logo-landscape.png`,
    url: `${SITE_URL}/locations`,
    telephone: campus.phoneTel,
    email: campus.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: campus.address,
      addressLocality: campus.city,
      addressRegion: campus.state,
      postalCode: campus.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: campus.lat,
      longitude: campus.lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    priceRange: '$$',
    areaServed: ['Lake Mary', 'Heathrow', 'Sanford', 'Seminole County'],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Little Newtons Academy',
    },
  })

  return (
    <>
      <JsonLd data={buildBreadcrumbs([{ name: 'Home', url: '/' }, { name: 'Our Locations', url: '/locations' }])} />
      <JsonLd data={childCareSchema(HEATHROW_CAMPUS)} />
      <JsonLd data={childCareSchema(LAKE_MARY_CAMPUS)} />
      {/* Hero */}
      <section className="py-20 bg-[var(--brand-cream)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
            Our Locations
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--foreground)] text-balance mb-6">
            Two Locations Serving Lake Mary & Heathrow
          </h1>
          <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-8">
            Conveniently located to serve families across Seminole County. Both campuses offer the same premium Little Newtons experience.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#heathrow"
              className="bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Heathrow Campus
            </a>
            <a
              href="#lake-mary"
              className="border-2 border-[var(--brand-green)] text-[var(--brand-green)] font-bold px-8 py-3.5 rounded-full hover:bg-[var(--secondary)] transition-colors"
            >
              Lake Mary Campus
            </a>
          </div>
        </div>
      </section>

      {/* Heathrow Location */}
      <section id="heathrow" className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/client-facility-1.jpg"
                alt="Little Newtons Academy Heathrow campus"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-[var(--brand-green)]" />
                <span className="font-bold text-[var(--brand-green)] text-sm uppercase tracking-wide">Heathrow Campus</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[var(--foreground)] mb-6">
                Little Newtons Academy – Heathrow
              </h2>
              <div className="flex flex-col gap-3 mb-6 text-[var(--foreground)]">
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-[var(--brand-green)] flex-shrink-0 mt-0.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-sm">1032 AAA Drive, Lake Mary, FL 32746</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-[var(--brand-green)] flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:4077324413" className="text-sm font-semibold text-[var(--brand-green)] hover:underline">(407) 732-4413</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-[var(--brand-green)] flex-shrink-0">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:heathrow@littlenewtonsacademy.com" className="text-sm font-semibold text-[var(--brand-green)] hover:underline">heathrow@littlenewtonsacademy.com</a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Infant', 'Toddler', 'Preschool', 'VPK'].map((program) => (
                  <span key={program} className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--secondary)] text-[var(--brand-green)]">
                    {program}
                  </span>
                ))}
              </div>
              <p className="text-[var(--muted-foreground)] text-xs mb-6">DCF License # C18SE0335</p>
              <Link
                href="/schedule-a-tour"
                className="inline-block bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Schedule a Tour at Heathrow
              </Link>
            </div>
          </div>
          {/* Google Maps */}
          <div className="mt-10 rounded-2xl overflow-hidden border border-[var(--border)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.5!2d-81.35!3d28.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1032+AAA+Drive%2C+Lake+Mary%2C+FL+32746!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Little Newtons Academy Heathrow location map"
            />
          </div>
        </div>
      </section>

      {/* Lake Mary Location */}
      <section id="lake-mary" className="py-20 bg-[var(--brand-cream)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/client-facility-7.jpg"
                  alt="Little Newtons Academy Lake Mary campus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:order-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-[var(--brand-sky)]" />
                <span className="font-bold text-[var(--brand-sky)] text-sm uppercase tracking-wide">Lake Mary Campus</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[var(--foreground)] mb-6">
                Little Newtons Academy – Lake Mary
              </h2>
              <div className="flex flex-col gap-3 mb-6 text-[var(--foreground)]">
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-[var(--brand-green)] flex-shrink-0 mt-0.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-sm">2720 W. Lake Mary Blvd, Lake Mary, FL 32746</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-[var(--brand-green)] flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:4073231221" className="text-sm font-semibold text-[var(--brand-green)] hover:underline">(407) 323-1221</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-[var(--brand-green)] flex-shrink-0">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:lakemary@littlenewtonsacademy.com" className="text-sm font-semibold text-[var(--brand-green)] hover:underline">lakemary@littlenewtonsacademy.com</a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Infant', 'Toddler', 'Preschool', 'VPK'].map((program) => (
                  <span key={program} className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--secondary)] text-[var(--brand-green)]">
                    {program}
                  </span>
                ))}
              </div>
              <p className="text-[var(--muted-foreground)] text-xs mb-6">DCF License # C18SE031</p>
              <Link
                href="/schedule-a-tour"
                className="inline-block bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Schedule a Tour at Lake Mary
              </Link>
            </div>
          </div>
          {/* Google Maps */}
          <div className="mt-10 rounded-2xl overflow-hidden border border-[var(--border)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.5!2d-81.35!3d28.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2720+W+Lake+Mary+Blvd%2C+Lake+Mary%2C+FL+32746!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Little Newtons Academy Lake Mary location map"
            />
          </div>
        </div>
      </section>

      {/* Campus Features */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
              At Every Campus
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
              The Same Premium Experience at Both Locations
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 p-5 rounded-2xl border border-[var(--border)] bg-[var(--background)] hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--secondary)] text-[var(--brand-green)] flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--foreground)] mb-1">{feature.title}</h3>
                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="py-20 bg-[var(--brand-cream)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl font-bold text-[var(--foreground)]">Our Facilities</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: '/images/facility-play-structure.jpg', alt: 'Play structure at Little Newtons Academy' },
              { src: '/images/facility-playground.jpg', alt: 'Outdoor playground area' },
              { src: '/images/client-facility-3.jpg', alt: 'Interior facility at Little Newtons' },
              { src: '/images/client-facility-8.jpg', alt: 'Learning space at Little Newtons Academy' },
            ].map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
