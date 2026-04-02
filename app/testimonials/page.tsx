import Link from 'next/link'

export const metadata = {
  title: 'Testimonials | Little Newtons Academy',
  description: 'Read what parents are saying about Little Newtons Academy. Real reviews from real families.',
}

export default function TestimonialsPage() {
  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
          Testimonials
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
          What Parents Are Saying
        </h1>
        <p className="text-[var(--muted-foreground)] text-lg mb-8">
          This page is coming soon. In the meantime, see what parents say on the home page.
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
