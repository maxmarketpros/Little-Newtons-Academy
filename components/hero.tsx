import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-[var(--brand-cream)] overflow-hidden">
      {/* Mobile: image-first hero */}
      <div className="lg:hidden -mt-2">
        {/* Mobile hero image */}
        <div className="relative h-64 sm:h-72">
          <Image
            src="/images/hero-image.jpg"
            alt="Happy children at Little Newtons Academy"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--brand-cream)]" />
        </div>

        {/* Mobile text content */}
        <div className="px-6 sm:px-10 -mt-16 relative z-10 pb-10">
          <span className="inline-block text-[var(--brand-green)] font-bold text-xs tracking-widest uppercase mb-3">
            Little Newtons Academy
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] leading-tight mb-4">
            Where Curious Minds{' '}
            <span className="whitespace-nowrap">Grow <span className="text-[var(--brand-green)]">&</span></span>{' '}
            Futures Take Shape
          </h1>
          <p className="text-[var(--muted-foreground)] text-base leading-relaxed mb-3">
            You&apos;re not just looking for childcare. You&apos;re looking for a place where your child will be{' '}
            <strong className="text-[var(--foreground)]">safe, nurtured, and truly known.</strong>
          </p>

          {/* Urgency badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-red)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--brand-red)]"></span>
            </span>
            <span className="text-[var(--brand-red)] font-semibold text-sm">
              Limited enrollment spots available for 2026
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold px-6 py-3.5 rounded-full text-center hover:opacity-90 transition-opacity text-sm"
            >
              Schedule a Tour Today
            </a>
            <a
              href="#programs"
              className="border-2 border-[var(--brand-green)] text-[var(--brand-green)] font-bold px-6 py-3.5 rounded-full text-center hover:bg-[var(--secondary)] transition-colors text-sm"
            >
              See Our Programs
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex items-center justify-between">
            {['DCF Licensed', 'VPK Certified', 'USDA Meals'].map((badge) => (
              <div key={badge} className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-[var(--brand-green)] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-2.5 h-2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-[var(--foreground)]">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: side-by-side layout */}
      <div className="hidden lg:block max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">
          {/* Left content */}
          <div className="flex flex-col justify-center px-16 py-24">
            <span className="inline-block text-[var(--brand-green)] font-bold text-sm tracking-widest uppercase mb-4">
              Little Newtons Academy
            </span>
            <h1 className="font-serif text-6xl font-bold text-[var(--foreground)] leading-tight text-balance mb-6">
              Where Curious Minds{' '}
              <span className="whitespace-nowrap">Grow <span className="text-[var(--brand-green)]">&</span></span>{' '}
              Futures Take Shape
            </h1>
            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-4 max-w-xl">
              You&apos;re not just looking for childcare. You&apos;re looking for a place where your child will be{' '}
              <strong className="text-[var(--foreground)]">safe, nurtured, and truly known.</strong>
            </p>
            <p className="text-[var(--muted-foreground)] text-base leading-relaxed mb-8 max-w-xl">
              At Little Newtons Academy, the early years are approached with intention. Our classrooms support social,
              emotional, cognitive, and physical development — giving children the confidence to thrive.
            </p>

            {/* Urgency badge */}
            <div className="flex items-center gap-2 mb-8">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-red)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--brand-red)]"></span>
              </span>
              <span className="text-[var(--brand-red)] font-semibold text-sm">
                Limited enrollment spots available for 2026
              </span>
            </div>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold px-8 py-4 rounded-full text-center hover:opacity-90 transition-opacity text-base"
              >
                Schedule a Tour Today
              </a>
              <a
                href="#programs"
                className="border-2 border-[var(--brand-green)] text-[var(--brand-green)] font-bold px-8 py-4 rounded-full text-center hover:bg-[var(--secondary)] transition-colors text-base"
              >
                See Our Programs
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-6 items-center">
              {['DCF Licensed', 'VPK Certified', 'USDA Meals'].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[var(--brand-green)] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-4 h-4">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-[var(--foreground)]">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <Image
              src="/images/hero-image.jpg"
              alt="Happy children learning at Little Newtons Academy"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-[var(--brand-green)]/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
