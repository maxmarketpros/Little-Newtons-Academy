import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABanner from '@/components/cta-banner'
import JsonLd from '@/components/json-ld'
import { buildBreadcrumbs } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About Us - Our Mission & Philosophy',
  description:
    "Learn about Little Newtons Academy's philosophy of Curiosity, Discovery, and Growth. A premium early learning academy serving Lake Mary and Heathrow, FL.",
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us - Our Mission & Philosophy',
    description:
      "Learn about Little Newtons Academy's philosophy of Curiosity, Discovery, and Growth.",
    url: '/about',
  },
}

const pillars = [
  {
    title: 'Inspiring Curiosity',
    description:
      'Children are natural explorers. We encourage questions, imagination, and a love of learning that starts with simple "why?" moments and grows into a lifelong passion for discovery.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: 'Encouraging Discovery',
    description:
      'Learning happens through doing. With hands-on activities and guided exploration, children make connections, experiment with ideas, and understand how the world works around them.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Supporting Growth',
    description:
      'Every child grows in their own way. We nurture confidence, independence, and the social-emotional skills children need for their next big steps — at their own pace and in their own way.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

const promises = [
  {
    title: 'Safe & Secure Environment',
    description: 'Locked doors, 24-hour cameras, and strict protocols keep your child protected every single day.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'Experienced, Caring Teachers',
    description: 'CPR-certified, trained in early childhood development, and passionate about every child they teach.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Research-Based Curriculum',
    description: 'The Creative Curriculum framework with STEAM integration prepares children for academic success.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Nutritious Daily Meals',
    description: 'USDA CCFP-approved breakfast, lunch, and snacks prepared fresh every day at no additional cost.',
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
    title: 'Open Communication',
    description: 'The Procare app keeps you connected with daily updates, photos, and real-time messaging with teachers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: 'Kindergarten Readiness',
    description: 'Children leave fully prepared — academically, socially, and emotionally — for their next chapter.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
]

const credentials = [
  {
    title: 'DCF Licensed',
    description: 'State-approved and continuously monitored by the Florida Department of Children and Families.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'VPK Certified',
    description: "100% compliant with Florida's Voluntary Prekindergarten standards for 4-year-olds.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: 'School Readiness',
    description: 'Meeting and exceeding Early Learning Coalition school readiness guidelines.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'USDA CCFP Meals',
    description: 'Florida Department of Health approved food program providing balanced, nutritious daily meals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbs([{ name: 'Home', url: '/' }, { name: 'About Us', url: '/about' }])} />
      {/* Hero */}
      <section className="py-20 cream-pattern-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
                About Us
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--foreground)] text-balance mb-6 leading-tight">
                About Little Newtons Academy
              </h1>
              <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-4">
                More than a preschool — a place where curious minds grow, confidence begins, and futures take shape.
              </p>
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-8">
                At Little Newtons Academy, we believe the early years are the most important years of a child&apos;s
                development. Our classrooms are thoughtfully designed to support social, emotional, cognitive, and
                physical development — giving children the confidence and skills they need to thrive.
              </p>
              <Link
                href="/schedule-a-tour"
                className="inline-block bg-[var(--brand-blue-deep)] text-[var(--primary-foreground)] font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Schedule a Tour
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/client-playground-1.jpg"
                alt="Children playing together at Little Newtons Academy playground"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square lg:aspect-auto lg:h-[520px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/client-music-1.jpg"
                alt="Children enjoying music and movement at Little Newtons Academy"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
                Our Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-8">
                Curiosity. Discovery. Growth.
              </h2>

              <div className="flex flex-col gap-8">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="flex gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[var(--secondary)] text-[var(--brand-blue-deep)] flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--foreground)] mb-1.5">{pillar.title}</h3>
                      <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-[var(--secondary)] rounded-2xl border-l-4 border-[var(--brand-blue-deep)]">
                <p className="text-[var(--foreground)] font-semibold italic leading-relaxed">
                  &quot;At Little Newtons, we don&apos;t just teach — we inspire. We create a space where children feel
                  confident to explore, excited to learn, and ready to grow.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 cream-pattern-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
              Our Promise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
              What We Promise Every Family
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
              When you choose Little Newtons Academy, you&apos;re choosing a partner in your child&apos;s most
              formative years. Here&apos;s what we commit to every family, every day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {promises.map((promise) => (
              <div
                key={promise.title}
                className="flex gap-4 p-5 rounded-2xl border border-[var(--border)] bg-[var(--background)] hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--secondary)] text-[var(--brand-blue-deep)] flex items-center justify-center">
                  {promise.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--foreground)] mb-1">{promise.title}</h3>
                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{promise.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
              Trusted. Certified. Compliant.
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
              Credentials You Can Count On
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred) => (
              <div
                key={cred.title}
                className="text-center p-6 rounded-2xl border border-[var(--border)] bg-[var(--background)] hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--secondary)] text-[var(--brand-blue-deep)] flex items-center justify-center mx-auto mb-4">
                  {cred.icon}
                </div>
                <h3 className="font-bold text-[var(--foreground)] mb-2">{cred.title}</h3>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{cred.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 cream-pattern-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-3 gap-4">
            {[
              { src: '/images/client-earthday-3.jpg', alt: 'Children participating in Earth Day activities' },
              { src: '/images/music-fabrics.jpg', alt: 'Creative play with fabrics and movement' },
              { src: '/images/client-spring-1.jpg', alt: 'Spring activities at Little Newtons Academy' },
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
