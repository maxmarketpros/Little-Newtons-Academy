import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/cta-banner'
import JsonLd from '@/components/json-ld'
import { buildBreadcrumbs } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Parent Testimonials & Reviews',
  description:
    'Read what parents are saying about Little Newtons Academy. Real reviews from real families in Lake Mary and Heathrow, FL.',
  alternates: { canonical: '/testimonials' },
  openGraph: {
    title: 'Parent Testimonials & Reviews',
    description:
      'Real reviews from real families at Little Newtons Academy in Lake Mary and Heathrow, FL.',
    url: '/testimonials',
  },
}

const testimonials = [
  {
    quote:
      'From the moment we toured the school, we felt comfortable. The teachers are caring, the classrooms are organized, and we always know our child is safe and happy.',
    author: 'Heathrow Parent',
    title: 'A Place We Truly Trust',
  },
  {
    quote:
      'Every morning our child is excited to go to Little Newtons Academy. The teachers are wonderful and the activities keep the kids engaged and learning.',
    author: 'Lake Mary Parent',
    title: 'Our Child Loves Coming to School',
  },
  {
    quote:
      "The staff is warm and welcoming, and they keep us informed about our child's day. It really feels like a partnership between the school and families.",
    author: 'Heathrow Parent',
    title: 'Amazing Teachers and Communication',
  },
  {
    quote:
      "We've seen so much growth in our child's confidence, social skills, and learning. Little Newtons Academy has been an incredible start to their education.",
    author: 'Lake Mary Parent',
    title: 'A Wonderful Learning Environment',
  },
  {
    quote:
      'The safety measures, clean classrooms, and structured learning activities give us peace of mind every single day.',
    author: 'Heathrow Parent',
    title: 'Safe, Caring, and Well Organized',
  },
  {
    quote:
      "The teachers truly care about the children. It's not just a school — it's a community where families feel welcomed and supported.",
    author: 'Lake Mary Parent',
    title: 'A Community That Feels Like Family',
  },
]

function StarRating() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-[#f4c430] text-[#f4c430]" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

function LargeStarRating() {
  return (
    <div className="flex gap-1.5" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-6 h-6 fill-[#f4c430] text-[#f4c430]" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbs([{ name: 'Home', url: '/' }, { name: 'Testimonials', url: '/testimonials' }])} />
      {/* Hero */}
      <section className="py-20 cream-pattern-bg">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
            Parent Testimonials
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--foreground)] text-balance mb-6">
            What Parents Are Saying About Little Newtons Academy
          </h1>
          <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-6">
            Real reviews from real families who trust us with their children every day.
          </p>
          <div className="flex items-center justify-center gap-3">
            <LargeStarRating />
            <span className="text-[var(--foreground)] font-bold">5.0</span>
            <span className="text-[var(--muted-foreground)] text-sm">from families across Lake Mary & Heathrow</span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.title}
                className="flex flex-col gap-4 p-6 rounded-2xl border border-[var(--border)] bg-[var(--background)] hover:shadow-md transition-shadow"
              >
                <StarRating />
                <p className="text-[var(--foreground)] leading-relaxed font-medium flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-[var(--border)]">
                  <p className="font-bold text-[var(--brand-blue-deep)] text-sm">{testimonial.title}</p>
                  <p className="text-[var(--muted-foreground)] text-xs mt-0.5">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 cream-pattern-bg">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="bg-[var(--brand-blue-deep)] rounded-3xl p-8 sm:p-12 text-[var(--primary-foreground)] text-center relative overflow-hidden">
            {/* Decorative quote marks */}
            <div className="absolute top-4 left-6 text-white/10 text-[120px] font-serif leading-none select-none">&ldquo;</div>
            <div className="relative z-10">
              <LargeStarRating />
              <p className="font-serif text-xl sm:text-2xl font-bold leading-relaxed mt-6 mb-6">
                &ldquo;From the moment we toured the school, we felt comfortable. The teachers are caring,
                the classrooms are organized, and we always know our child is safe and happy.&rdquo;
              </p>
              <div>
                <p className="font-bold text-white">A Place We Truly Trust</p>
                <p className="text-white/70 text-sm mt-1">— Heathrow Parent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-3 gap-4">
            {[
              { src: '/images/client-new-welcome-group.jpg', alt: 'Smiling children in a Little Newtons Academy classroom' },
              { src: '/images/client-new-soccer.jpg', alt: 'Active outdoor play at Little Newtons Academy' },
              { src: '/images/client-new-playground-structure.jpg', alt: 'Children enjoying the playground structure' },
            ].map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Join the Many Families Who Trust Little Newtons Academy"
        description="See for yourself why parents across Lake Mary and Heathrow choose us for their children's early education. Schedule a tour and experience the Little Newtons difference."
      />
    </>
  )
}
