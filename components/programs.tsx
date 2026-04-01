import Image from 'next/image'

const steps = [
  {
    number: '01',
    label: 'A Loving Start',
    title: 'Infant Program',
    description:
      "Your baby's journey begins in a safe, calm, and nurturing environment where they feel secure, loved, and cared for.",
    outcomes: [
      'Build strong emotional bonds',
      'Explore through senses and gentle play',
      'Begin early language and motor development',
    ],
    tagline: 'A foundation of trust, comfort, and care',
    image: '/images/11.jpg',
    imageAlt: 'Baby exploring in a nurturing classroom',
    color: 'var(--brand-sky)',
    bg: '#eef9fc',
  },
  {
    number: '02',
    label: 'Discovering the World',
    title: 'Toddler Program',
    description:
      'As your child begins to move, explore, and express themselves, we guide their natural curiosity into meaningful learning.',
    outcomes: [
      'Develop language and communication',
      'Gain independence and confidence',
      'Learn to interact and build social skills',
    ],
    tagline: 'Curiosity turns into confidence',
    image: '/images/3.jpg',
    imageAlt: 'Toddler exploring with an abacus',
    color: 'var(--brand-lime)',
    bg: '#f4fbed',
  },
  {
    number: '03',
    label: 'Building Foundations',
    title: 'Preschool (3-Year-Olds)',
    description:
      'Now learning takes shape through structured play, creativity, and early academics in a warm, supportive setting.',
    outcomes: [
      'Build early reading and math skills',
      'Learn to focus, listen, and follow routines',
      'Grow socially through teamwork and play',
    ],
    tagline: 'Confidence in learning begins here',
    image: '/images/10.jpg',
    imageAlt: 'Preschool children doing arts and crafts',
    color: 'var(--brand-green)',
    bg: '#edf7ef',
  },
  {
    number: '04',
    label: 'Ready to Shine',
    title: 'VPK (4-Year-Olds)',
    description:
      'The final step before kindergarten — where everything comes together and children leave ready to thrive.',
    outcomes: [
      'Strong phonics and early reading skills',
      'Writing readiness and problem-solving ability',
      'Independence and classroom confidence',
    ],
    tagline: 'Fully prepared for kindergarten success',
    image: '/images/2.jpg',
    imageAlt: 'VPK children engaging with a teacher',
    color: '#e07c3a',
    bg: '#fef4ec',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-[var(--brand-cream)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-16">
          <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
            Programs Designed for Every Stage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
            Your Child&apos;s Journey at Little Newtons
          </h2>
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
            From their very first day to their first step into kindergarten, your child is supported, guided, and
            inspired every step of the way.
          </p>
        </div>

        {/* Timeline steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-28 left-0 right-0 h-0.5 bg-[var(--border)] z-0" />

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col gap-0">
                {/* Step number connector */}
                <div className="flex lg:flex-col items-center lg:items-start gap-4 mb-5">
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg text-[var(--primary-foreground)]"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </div>
                  {/* Mobile connector */}
                  {index < steps.length - 1 && (
                    <div className="flex-1 h-0.5 lg:hidden bg-[var(--border)]" />
                  )}
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl overflow-hidden flex flex-col h-full"
                  style={{ backgroundColor: step.bg }}
                >
                  <div className="relative h-44 w-full">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                    />
                    <div
                      className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-[var(--primary-foreground)]"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.label}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <h3 className="font-bold text-[var(--foreground)] text-lg">{step.title}</h3>
                    <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{step.description}</p>
                    <ul className="flex flex-col gap-1.5 mt-1">
                      {step.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2 text-sm text-[var(--foreground)]">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                            style={{ color: step.color }}
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                    <p
                      className="mt-auto pt-4 text-xs font-bold italic"
                      style={{ color: step.color }}
                    >
                      {step.tagline}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Result section */}
        <div className="mt-14 bg-[var(--brand-green)] rounded-3xl p-8 sm:p-10 text-[var(--primary-foreground)]">
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">
                By the End of Their Journey, Your Child Will Be:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Confident and independent',
                  'Socially and emotionally strong',
                  'Academically prepared',
                  'Excited and ready for kindergarten',
                ].map((outcome) => (
                  <div key={outcome} className="flex items-start gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 flex-shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-white/90">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white/80 leading-relaxed">
                Every great future starts with the right foundation. Limited spots available — schedule your tour
                today and see how your child will grow with us.
              </p>
              <a
                href="#contact"
                className="self-start bg-[var(--background)] text-[var(--brand-green)] font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Begin Your Child&apos;s Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
