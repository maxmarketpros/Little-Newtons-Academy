import Image from 'next/image'

export default function ImageShowcase() {
  return (
    <section className="relative my-12 sm:my-16 lg:my-20 mx-4 sm:mx-8 lg:mx-16">
      {/* Rounded image container */}
      <div className="relative h-[45vh] sm:h-[50vh] rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="/images/playground-adventure.jpg"
          alt="Children playing and dancing outdoors at Little Newtons Academy"
          fill
          className="object-cover object-top"
        />
        {/* Darker overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-green)]/70 via-[var(--brand-green)]/40 to-transparent" />

        {/* Content pinned to the left */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="px-8 sm:px-12 lg:px-16 max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-sky)]" />
              <span className="w-2 h-2 rounded-full bg-[var(--brand-lime)]" />
              <span className="w-2 h-2 rounded-full bg-[var(--brand-red)]" />
              <span className="w-2 h-2 rounded-full bg-[var(--brand-sky)]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Every Day Is an Adventure
            </h2>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6">
              Where laughter fills the halls and little hands are always busy discovering something new.
            </p>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 bg-white text-[var(--brand-green)] font-bold text-sm px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
            >
              Explore Our Programs
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
