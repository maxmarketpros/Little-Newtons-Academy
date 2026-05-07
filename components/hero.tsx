import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative cream-pattern-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:min-h-[calc(100vh-176px)]">
          {/* Content */}
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-10 sm:pt-14 lg:py-24 pb-8 lg:pb-24">
            <span className="inline-block text-[var(--brand-blue)] font-bold text-base sm:text-lg lg:text-xl tracking-widest uppercase mb-4 lg:mb-5">
              Little Newtons Academy
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--foreground)] leading-tight text-balance mb-4 lg:mb-6">
              Where Curious Minds{' '}
              <span className="whitespace-nowrap">Grow <span className="text-[var(--brand-blue)]">&</span></span>{' '}
              <em>Futures</em> Take Shape
            </h1>
            <p className="text-[var(--muted-foreground)] text-base lg:text-lg leading-relaxed mb-3 lg:mb-4 lg:max-w-xl">
              You&apos;re not just looking for childcare. You&apos;re looking for a place where your child will be{' '}
              <strong className="text-[var(--foreground)]">safe, nurtured, and truly known.</strong>
            </p>
            <p className="text-[var(--muted-foreground)] text-sm sm:text-base leading-relaxed mb-6 lg:mb-8 lg:max-w-xl">
              At Little Newtons Academy, the early years are approached with intention. Our classrooms support social,
              emotional, cognitive, and physical development — giving children the confidence to thrive.
            </p>

            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2.5 self-start mb-6 lg:mb-8 px-4 py-2.5 rounded-full bg-[var(--brand-red)]/10 border-2 border-[var(--brand-red)]/30 shadow-sm">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-red)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--brand-red)]"></span>
              </span>
              <span className="text-[var(--brand-red)] font-bold text-sm sm:text-base lg:text-lg tracking-wide">
                Limited 2026 Enrollment Spots Available
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <a
                href="#contact"
                className="bg-[var(--brand-blue-deep)] text-[var(--primary-foreground)] font-bold px-6 py-3.5 lg:px-8 lg:py-4 rounded-full text-center hover:opacity-90 transition-opacity text-sm lg:text-base"
              >
                Schedule a Tour Today
              </a>
              <a
                href="#programs"
                className="border-2 border-[var(--brand-blue-deep)] text-[var(--brand-blue-deep)] font-bold px-6 py-3.5 lg:px-8 lg:py-4 rounded-full text-center hover:bg-[var(--secondary)] transition-colors text-sm lg:text-base"
              >
                See Our Programs
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 lg:mt-12 flex flex-wrap items-center justify-between sm:justify-start sm:gap-6">
              {['DCF Licensed', 'VPK Certified', 'USDA Meals'].map((badge) => (
                <div key={badge} className="flex items-center gap-1 lg:gap-2">
                  <div className="w-5 h-5 lg:w-8 lg:h-8 rounded-full bg-[var(--brand-blue-deep)] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-2.5 h-2.5 lg:w-4 lg:h-4">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[11px] lg:text-sm font-semibold text-[var(--foreground)]">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="px-4 sm:px-8 md:px-10 pb-10 lg:p-0 lg:relative">
            {/* Decorative dots - mobile only */}
            <div className="flex items-center gap-2 mb-4 lg:hidden">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-sky)]" />
              <span className="w-2 h-2 rounded-full bg-[var(--brand-lime)]" />
              <span className="w-2 h-2 rounded-full bg-[var(--brand-red)]" />
              <span className="w-2 h-2 rounded-full bg-[var(--brand-sky)]" />
            </div>

            <div className="relative aspect-[4/3] sm:aspect-[3/2] rounded-3xl overflow-hidden shadow-xl max-h-[500px] lg:absolute lg:inset-0 lg:aspect-auto lg:rounded-none lg:shadow-none lg:max-h-none">
              <Image
                src="/images/client-new-girl-focused.jpg"
                alt="A focused student at Little Newtons Academy working independently in the classroom"
                fill
                className="object-cover"
                style={{ objectPosition: '70% 50%' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
