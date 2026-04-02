import Link from 'next/link'

export const metadata = {
  title: 'Our Programs | Little Newtons Academy',
  description: 'Explore our age-appropriate programs from Infants through VPK at Little Newtons Academy in Lake Mary, FL.',
}

export default function ProgramsPage() {
  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
          Programs
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
          Our Programs
        </h1>
        <p className="text-[var(--muted-foreground)] text-lg mb-8">
          This page is coming soon. In the meantime, explore our programs on the home page.
        </p>
        <Link
          href="/#programs"
          className="inline-block bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
        >
          View Programs
        </Link>
      </div>
    </div>
  )
}
