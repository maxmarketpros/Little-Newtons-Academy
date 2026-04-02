import Image from 'next/image'

const reasons = [
  {
    title: 'Safe & Secure Campus',
    description: 'Locked doors, secure check-in/out, and monitored cameras.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'Caring Educators',
    description: 'Experienced teachers who truly understand child development.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Learning Through Discovery',
    description: 'Hands-on activities that spark curiosity and exploration.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: 'Kindergarten Ready',
    description: 'Strong foundations in literacy, math, and independence.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Social & Emotional Growth',
    description: 'Children build confidence, empathy, and cooperation skills.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Fresh Meals Included Daily',
    description: 'Breakfast, lunch, and snacks prepared fresh — USDA CCFP approved.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: 'Engaging Learning Centers',
    description: 'Classrooms designed for creativity, discovery, and play.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: 'Individual Attention',
    description: 'Teachers support every child\'s unique learning journey.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    title: 'Strong Parent Communication',
    description: 'Open and consistent communication with families via Procare.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: 'Positive Classroom Culture',
    description: 'Warm, welcoming environments where children feel truly valued.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: 'STEAM Enrichment',
    description: 'Science, technology, engineering, art & math woven into every day.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: 'A Community Feel',
    description: 'A preschool where children and families feel at home.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-14">
          <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
            The Little Newtons Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
            Why Families Choose Little Newtons Academy
          </h2>
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
            From safety and nutrition to expert teaching and warm community — everything your family needs is here.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-4 p-5 rounded-2xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--brand-green)] hover:shadow-sm transition-all"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--secondary)] text-[var(--brand-green)] flex items-center justify-center">
                {reason.icon}
              </div>
              <div>
                <h3 className="font-bold text-[var(--foreground)] text-sm mb-1">{reason.title}</h3>
                <p className="text-[var(--muted-foreground)] text-xs leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-14 grid lg:grid-cols-2 rounded-3xl overflow-hidden bg-[var(--secondary)]">
          <div className="p-10 flex flex-col justify-center gap-5">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--foreground)] text-balance">
              The Best Way to See the Difference Is to Visit
            </h3>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              Meet our teachers, explore our classrooms, and see how Little Newtons Academy helps children grow with
              confidence, curiosity, and joy.
            </p>
            <a
              href="#contact"
              className="self-start bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Schedule Your Tour Today
            </a>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-auto">
            <Image
              src="/images/facility-play-structure.jpg"
              alt="Colorful play structure at Little Newtons Academy"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
