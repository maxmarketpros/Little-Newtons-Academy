import Image from 'next/image'

const skills = [
  {
    title: 'Early Literacy Foundations',
    items: ['Recognizing letters and sounds', 'Expanding vocabulary', 'Listening and comprehension', 'Storytelling and communication'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    color: 'var(--brand-sky)',
    bg: '#eef9fc',
  },
  {
    title: 'Early Math & Problem-Solving',
    items: ['Counting and number recognition', 'Sorting and patterns', 'Comparing sizes and quantities', 'Simple problem solving'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    color: 'var(--brand-lime)',
    bg: '#f4fbed',
  },
  {
    title: 'Social & Emotional Development',
    items: ['Confidence and independence', 'Cooperation and teamwork', 'Following directions and routines', 'Expressing emotions in healthy ways'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: 'var(--brand-green)',
    bg: '#edf7ef',
  },
  {
    title: 'STEAM & Creative Exploration',
    items: ['Scientific observation and experimentation', 'Problem-solving and early engineering', 'Creative expression through art', 'Logical reasoning through math'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    color: '#e07c3a',
    bg: '#fef4ec',
  },
]

export default function KindergartenReadiness() {
  return (
    <section className="py-20 bg-[var(--brand-cream)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div>
            <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
              Academic Excellence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-6 leading-tight">
              Preparing Children for Kindergarten Success
            </h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
              At Little Newtons Academy, our goal is to help children build the skills, confidence, and independence
              they need for a smooth transition into kindergarten.
            </p>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-8">
              Our program is grounded in the{' '}
              <strong className="text-[var(--foreground)]">Creative Curriculum</strong>, a research-based framework
              that respects how young children learn best — through purposeful exploration, guided discovery, and
              meaningful engagement.
            </p>

            {/* Outcome checklist */}
            <div className="bg-[var(--brand-green)] rounded-2xl p-6 text-[var(--primary-foreground)]">
              <p className="font-bold mb-4">Children leave Little Newtons Academy with:</p>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  'Strong academic foundations',
                  'Confidence and independence',
                  'Social and emotional readiness',
                  'A love for learning',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-6 flex flex-wrap gap-3">
              {['Florida VPK Standards', 'School Readiness Standards', 'Early Learning Coalition'].map((cert) => (
                <span
                  key={cert}
                  className="text-xs font-semibold px-4 py-2 rounded-full border-2 border-[var(--brand-green)] text-[var(--brand-green)]"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Right: skill cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-2xl p-6"
                style={{ backgroundColor: skill.bg }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-[var(--primary-foreground)]"
                  style={{ backgroundColor: skill.color }}
                >
                  {skill.icon}
                </div>
                <h3 className="font-bold text-[var(--foreground)] mb-3">{skill.title}</h3>
                <ul className="flex flex-col gap-1.5">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                        style={{ color: skill.color }}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
