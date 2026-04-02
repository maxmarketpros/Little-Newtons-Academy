import Link from 'next/link'

export const metadata = {
  title: 'About Us | Little Newtons Academy',
  description: 'Learn about Little Newtons Academy\'s philosophy, mission, and commitment to early childhood education in Lake Mary, FL.',
}

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
          About Us
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
          About Little Newtons Academy
        </h1>
        <p className="text-[var(--muted-foreground)] text-lg mb-8">
          This page is coming soon. In the meantime, learn about our philosophy on the home page.
        </p>
        <Link
          href="/#philosophy"
          className="inline-block bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
        >
          View Our Philosophy
        </Link>
      </div>
    </div>
  )
}
