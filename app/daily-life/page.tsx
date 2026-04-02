import Link from 'next/link'

export const metadata = {
  title: 'A Day at Little Newtons | Little Newtons Academy',
  description: 'See what a typical day looks like at Little Newtons Academy — from morning circle time to afternoon exploration.',
}

export default function DailyLifePage() {
  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
          Daily Life
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
          A Day at Little Newtons
        </h1>
        <p className="text-[var(--muted-foreground)] text-lg mb-8">
          This page is coming soon. In the meantime, explore our daily schedule on the home page.
        </p>
        <Link
          href="/#daily-schedule"
          className="inline-block bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
        >
          View Daily Schedule
        </Link>
      </div>
    </div>
  )
}
