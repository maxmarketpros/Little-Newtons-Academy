import Image from 'next/image'

const pillars = [
  {
    title: 'Inspiring Curiosity',
    description:
      'Children are natural explorers. We encourage questions, imagination, and a love of learning that starts with simple "why?" moments.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: 'Encouraging Discovery',
    description:
      'Learning happens through doing. With hands-on activities and guided exploration, children make connections and understand how the world works.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: 'Supporting Growth',
    description:
      'Every child grows in their own way. We nurture confidence, independence, and the skills children need for their next big steps.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: image */}
          <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-auto lg:h-[520px] order-2 lg:order-1">
            <Image
              src="/images/client-new-reading-flowers.jpg"
              alt="Children in a music and movement activity"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
              Our Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4 leading-tight">
              Curiosity. Discovery. Growth.
            </h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-10">
              At Little Newtons Academy, we believe childhood is full of wonder — and learning should feel just as
              exciting. Every experience is purposeful. Every moment supports growth.
            </p>

            <div className="flex flex-col gap-8">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[var(--secondary)] text-[var(--brand-blue-deep)] flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--foreground)] mb-1.5">{pillar.title}</h3>
                    <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-[var(--secondary)] rounded-2xl border-l-4 border-[var(--brand-blue-deep)]">
              <p className="text-[var(--foreground)] font-semibold italic leading-relaxed">
                &quot;At Little Newtons, we don&apos;t just teach — we inspire. We create a space where children feel
                confident to explore, excited to learn, and ready to grow.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
