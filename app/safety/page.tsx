import Link from 'next/link'

export const metadata = {
  title: 'Safety & Trust | Little Newtons Academy',
  description: 'Learn about our safety measures, certifications, and commitment to keeping your child safe at Little Newtons Academy.',
}

export default function SafetyPage() {
  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
          Safety & Trust
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
          Your Child&apos;s Safety Is Our Priority
        </h1>
        <p className="text-[var(--muted-foreground)] text-lg mb-8">
          This page is coming soon. In the meantime, learn about our safety commitment on the home page.
        </p>
        <Link
          href="/#safety"
          className="inline-block bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
        >
          View Safety Info
        </Link>
      </div>
    </div>
  )
}
