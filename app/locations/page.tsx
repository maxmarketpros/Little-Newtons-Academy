import Link from 'next/link'

export const metadata = {
  title: 'Our Locations | Little Newtons Academy',
  description: 'Visit Little Newtons Academy at our Heathrow or Lake Mary locations. Schedule a tour today!',
}

export default function LocationsPage() {
  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
          Locations
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
          Our Locations
        </h1>
        <p className="text-[var(--muted-foreground)] text-lg mb-8">
          This page is coming soon. In the meantime, find our contact info on the home page.
        </p>
        <Link
          href="/#contact"
          className="inline-block bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}
