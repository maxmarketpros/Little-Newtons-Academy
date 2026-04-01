const safetyFeatures = [
  {
    title: 'Secure Access',
    description: 'Locked doors and strict sign-in/sign-out procedures help keep our school secure at all times.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'Constant Monitoring',
    description: '24-hour camera surveillance and continuous staff supervision provide an added layer of safety.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M1 6s.5 1 2 1 3-2 4-2 2 2 4 2 3-2 4-2 3.5 2 5 2" />
        <path d="M1 12s.5 1 2 1 3-2 4-2 2 2 4 2 3-2 4-2 3.5 2 5 2" />
        <path d="M1 18s.5 1 2 1 3-2 4-2 2 2 4 2 3-2 4-2 3.5 2 5 2" />
      </svg>
    ),
  },
  {
    title: 'Parent Communication',
    description:
      'The Procare app keeps families connected throughout the day with real-time updates and easy messaging.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: 'Emergency Preparedness',
    description: 'Regular emergency drills help children become familiar with safety routines in a calm, supportive way.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: 'CPR & First Aid Certified',
    description: 'All staff are fully trained and certified to respond quickly and confidently in any situation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Clean & Healthy Classrooms',
    description: 'We maintain sanitized classrooms daily and encourage healthy habits to support every child\'s wellness.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Continuous Supervision',
    description: 'Our team closely supervises children throughout the entire day — they are never out of sight.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'State-Licensed & Compliant',
    description: 'Fully licensed by DCF, and compliant with VPK, School Readiness, and Early Learning Coalition standards.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
]

export default function Safety() {
  return (
    <section id="safety" className="py-20 bg-[var(--brand-cream)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-14">
          <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
            Your Peace of Mind
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
            Our Safety Commitment to Every Family
          </h2>
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
            At Little Newtons Academy, we create a safe, secure, and healthy environment so children can learn,
            play, and grow with confidence — and families can have peace of mind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {safetyFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-[var(--background)] rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--secondary)] text-[var(--brand-green)] flex items-center justify-center flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-[var(--foreground)] mb-1.5">{feature.title}</h3>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certification bar */}
        <div className="mt-12 bg-[var(--brand-green)] rounded-2xl p-6 sm:p-8">
          <div className="grid sm:grid-cols-3 gap-6 text-[var(--primary-foreground)]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p className="font-bold mb-0.5">State-Approved & Monitored</p>
                <p className="text-white/80 text-sm">Aligned with DCF and Early Learning Coalition requirements</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p className="font-bold mb-0.5">100% VPK & School Readiness Compliant</p>
                <p className="text-white/80 text-sm">Meeting and exceeding Florida&apos;s early learning guidelines</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p className="font-bold mb-0.5">USDA CCFP Food Program</p>
                <p className="text-white/80 text-sm">Nutritious, balanced meals approved by the Florida Dept. of Health</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
