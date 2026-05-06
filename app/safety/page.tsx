import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABanner from '@/components/cta-banner'
import JsonLd from '@/components/json-ld'
import { buildBreadcrumbs } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Safety & Trust - Licensed & Secure Childcare',
  description:
    "Your child's safety is our highest priority. DCF-licensed, 24hr cameras, CPR-certified staff, and secure access at Little Newtons Academy in Lake Mary, FL.",
  alternates: { canonical: '/safety' },
  openGraph: {
    title: 'Safety & Trust - Licensed & Secure Childcare',
    description:
      "Your child's safety is our highest priority. DCF-licensed, secure access, and CPR-certified staff.",
    url: '/safety',
  },
}

const safetyFeatures = [
  {
    title: 'Secure Access',
    description: 'Our facilities feature locked entry points with strict sign-in and sign-out procedures. Only authorized individuals are permitted to enter, ensuring your child is always in a protected environment.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'Constant Monitoring',
    description: '24-hour camera surveillance operates throughout our campus. Combined with continuous staff supervision, we maintain an added layer of safety and accountability every moment of the day.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Parent Communication',
    description: 'The Procare app makes it easy for families to receive real-time updates, daily activity reports, and photos. Stay connected with your child throughout the day and communicate directly with our team.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: 'Emergency Preparedness',
    description: 'We conduct regular emergency drills including fire, severe weather, and lockdown procedures. Children become familiar with safety routines in a calm, supportive, and age-appropriate way.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: 'CPR & First Aid Certified',
    description: 'Every member of our teaching staff holds current CPR and First Aid certifications. They are trained to respond quickly, calmly, and confidently in any medical situation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Clean & Healthy Classrooms',
    description: 'Our classrooms are sanitized daily with child-safe products. We promote healthy hand-washing habits, proper hygiene routines, and maintain a wellness-focused environment for all children.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Continuous Supervision',
    description: 'Children are never left unattended. Our teachers maintain appropriate ratios throughout the day, closely supervising every activity — from classroom learning to outdoor play and rest time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'State-Licensed & Compliant',
    description: 'We are fully licensed by the Florida Department of Children and Families (DCF) and meet all requirements set by VPK, School Readiness, and the Early Learning Coalition.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
]

const deepDive = [
  {
    title: 'Secure Access & 24/7 Monitoring',
    description:
      'Every entrance to our campus is secured with controlled access systems. Parents and authorized individuals follow a strict check-in and check-out process. Our 24-hour surveillance camera system covers all classrooms, hallways, and outdoor areas, providing complete visibility and an added layer of accountability.',
    points: ['Controlled entry with locked doors', 'Strict sign-in/sign-out protocols', '24-hour camera surveillance campus-wide', 'Only authorized individuals permitted'],
    image: '/images/client-new-infant-teddy.jpg',
    imageAlt: 'Teacher caring for an infant in a secure classroom at Little Newtons Academy',
  },
  {
    title: 'Trained & Certified Staff',
    description:
      'Our teachers are more than educators — they are trained safety professionals. Every staff member holds current CPR and First Aid certifications, participates in ongoing professional development, and is committed to maintaining the highest standards of child safety and supervision.',
    points: ['CPR & First Aid certified team', 'Ongoing safety training', 'Background-checked staff', 'Consistent supervision ratios'],
    image: '/images/client-new-highfive.jpg',
    imageAlt: 'Teacher engaging warmly with a student at Little Newtons Academy',
  },
  {
    title: 'Health & Cleanliness Standards',
    description:
      'A clean environment is a safe environment. Our classrooms are sanitized daily using child-safe cleaning products. We teach children proper hand-washing techniques, maintain strict illness policies, and serve nutritious USDA-approved meals that support healthy growth and development.',
    points: ['Daily classroom sanitization', 'Hand hygiene routines taught', 'USDA CCFP approved nutrition', 'Strict illness and wellness policies'],
    image: '/images/client-new-lunch-served.jpg',
    imageAlt: 'Children enjoying a clean, healthy USDA-approved meal at Little Newtons Academy',
  },
]

const communicationFeatures = [
  { title: 'Daily Activity Reports', description: 'See what your child learned, ate, and enjoyed each day' },
  { title: 'Real-Time Photo Sharing', description: 'Receive photos of your child throughout the day' },
  { title: 'Easy Messaging', description: 'Communicate directly with teachers and staff anytime' },
  { title: 'Attendance Tracking', description: 'Digital check-in and check-out for complete transparency' },
]

export default function SafetyPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbs([{ name: 'Home', url: '/' }, { name: 'Safety & Trust', url: '/safety' }])} />
      {/* Hero */}
      <section className="py-20 cream-pattern-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
                Safety & Trust
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--foreground)] text-balance mb-6 leading-tight">
                Your Child&apos;s Safety Is Our Highest Priority
              </h1>
              <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-8">
                We create a safe, secure, and healthy environment so children can learn, play, and grow — and families can have complete peace of mind.
              </p>
              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                {['DCF Licensed', 'VPK Certified', 'USDA Meals'].map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[var(--brand-blue-deep)] flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-3.5 h-3.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-[var(--foreground)]">{badge}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/schedule-a-tour"
                className="inline-block bg-[var(--brand-blue-deep)] text-[var(--primary-foreground)] font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Schedule a Tour
              </Link>
            </div>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/client-new-buggy-logo.jpg"
                alt="Teachers and infants in front of the Little Newtons Academy logo wall"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features Grid */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
              How We Keep Children Safe
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
              Every Layer of Protection, Every Single Day
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {safetyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-[var(--background)] rounded-2xl p-6 flex flex-col gap-4 border border-[var(--border)] hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--secondary)] text-[var(--brand-blue-deep)] flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--foreground)] mb-1.5">{feature.title}</h3>
                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="py-20 cream-pattern-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
              A Closer Look
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
              Safety in Every Detail
            </h2>
          </div>

          <div className="flex flex-col gap-16">
            {deepDive.map((item, index) => (
              <div key={item.title} className="grid lg:grid-cols-2 gap-10 items-center">
                <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image src={item.image} alt={item.imageAlt} fill className="object-cover" />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="font-serif text-2xl font-bold text-[var(--foreground)] mb-4">{item.title}</h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">{item.description}</p>
                  <div className="flex flex-col gap-2.5">
                    {item.points.map((point) => (
                      <div key={point} className="flex items-center gap-2.5">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-[var(--brand-blue-deep)] flex-shrink-0">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-[var(--foreground)] text-sm font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Communication */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/client-new-infant-lift.jpg"
                alt="Teacher lifting a smiling baby — warm parent communication moment"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
                Staying Connected
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
                Real-Time Communication with Families
              </h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-8">
                Through the Procare app, families stay connected with their child&apos;s day. You&apos;ll receive updates, photos, and can communicate directly with our team — because we believe trust is built through open, consistent communication.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {communicationFeatures.map((feature) => (
                  <div key={feature.title} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--secondary)] text-[var(--brand-blue-deep)] flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-[var(--foreground)] text-sm">{feature.title}</p>
                      <p className="text-[var(--muted-foreground)] text-xs leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="py-20 cream-pattern-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="bg-[var(--brand-blue-deep)] rounded-3xl p-8 sm:p-10">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--primary-foreground)] mb-2">
                Trusted. Certified. Compliant.
              </h2>
              <p className="text-white/80 text-sm">
                Meeting and exceeding Florida&apos;s early learning standards at every level
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 text-[var(--primary-foreground)]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold mb-0.5">State-Approved & Monitored</p>
                  <p className="text-white/80 text-sm">Aligned with DCF and Early Learning Coalition requirements</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold mb-0.5">100% VPK & School Readiness Compliant</p>
                  <p className="text-white/80 text-sm">Meeting and exceeding Florida&apos;s early learning guidelines</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold mb-0.5">USDA CCFP Food Program</p>
                  <p className="text-white/80 text-sm">Nutritious, balanced meals approved by the Florida Dept. of Health</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap gap-6 justify-center text-white/60 text-xs">
              <span>Heathrow: DCF License # C18SE0335</span>
              <span>Lake Mary: DCF License # C18SE031</span>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="See Our Safe, Secure Campus for Yourself"
        description="Nothing replaces seeing our safety measures in person. Schedule a tour and experience the peace of mind that comes with choosing Little Newtons Academy."
        buttonText="Schedule Your Tour"
      />
    </>
  )
}
