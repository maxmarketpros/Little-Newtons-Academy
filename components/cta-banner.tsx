import Link from 'next/link'

interface CTABannerProps {
  heading?: string
  description?: string
  buttonText?: string
  buttonHref?: string
}

export default function CTABanner({
  heading = 'Schedule a Tour Today',
  description = 'Every great future starts with the right foundation. Meet our teachers, explore our classrooms, and see how Little Newtons Academy helps children grow with confidence, curiosity, and joy.',
  buttonText = 'Schedule Your Tour',
  buttonHref = '/contact',
}: CTABannerProps) {
  return (
    <section className="py-20 bg-[var(--brand-cream)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="bg-[var(--brand-green)] rounded-3xl p-8 sm:p-12 text-[var(--primary-foreground)] text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            {heading}
          </h2>
          <p className="text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={buttonHref}
              className="bg-[var(--background)] text-[var(--brand-green)] font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              {buttonText}
            </Link>
            <a
              href="tel:4077324413"
              className="text-white/80 font-semibold hover:text-white transition-colors text-sm"
            >
              Or call (407) 732-4413
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
