import Link from 'next/link'

export const metadata = {
  title: 'Schedule a Tour | Little Newtons Academy',
  description: 'Schedule a tour at Little Newtons Academy. Contact us to learn about enrollment for our Infant, Toddler, Preschool, and VPK programs.',
}

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
          Contact
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
          Schedule a Tour
        </h1>
        <p className="text-[var(--muted-foreground)] text-lg mb-8">
          This page is coming soon. In the meantime, use the contact form on the home page.
        </p>
        <Link
          href="/#contact"
          className="inline-block bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Contact Form
        </Link>
      </div>
    </div>
  )
}
