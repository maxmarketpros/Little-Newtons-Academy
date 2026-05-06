import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABanner from '@/components/cta-banner'
import JsonLd from '@/components/json-ld'
import { buildBreadcrumbs } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Infant, Toddler, Preschool & VPK Programs',
  description:
    'Explore age-appropriate programs from Infant through VPK at Little Newtons Academy in Lake Mary, FL. Discover our 4-step early learning journey designed for every stage of development.',
  alternates: { canonical: '/programs' },
  openGraph: {
    title: 'Infant, Toddler, Preschool & VPK Programs',
    description:
      'Explore age-appropriate programs from Infant through VPK at Little Newtons Academy in Lake Mary, FL.',
    url: '/programs',
  },
}

const programs = [
  {
    number: '01',
    label: 'Step 1',
    title: 'Infant Program',
    subtitle: 'A Loving Start',
    ages: '6 weeks – 12 months',
    description:
      "Your baby's journey begins in a safe, calm, and nurturing environment where they feel secure, loved, and cared for every moment of the day. Our infant classrooms are designed to provide warmth and comfort while gently introducing early developmental experiences.",
    outcomes: [
      'Build strong emotional bonds with caregivers',
      'Explore the world through senses and gentle play',
      'Begin early language and motor development',
      'Develop trust and comfort in a structured routine',
      'Experience music, textures, and visual stimulation',
    ],
    tagline: 'A foundation of trust, comfort, and care',
    image: '/images/client-new-infant-playmat.jpg',
    imageAlt: 'Teacher with infants on a play mat at Little Newtons Academy',
    color: 'var(--brand-sky)',
    bg: '#eef9fc',
  },
  {
    number: '02',
    label: 'Step 2',
    title: 'Toddler Program',
    subtitle: 'Discovering the World',
    ages: '12 months – 2 years',
    description:
      'As your child begins to move, explore, and express themselves, we guide their natural curiosity into meaningful learning experiences. Our toddler classrooms provide a safe space for growing independence while building language, social skills, and confidence.',
    outcomes: [
      'Develop language and communication skills',
      'Gain independence and self-confidence',
      'Learn to interact and build early social skills',
      'Explore through hands-on sensory activities',
      'Build fine and gross motor coordination',
    ],
    tagline: 'Curiosity turns into confidence',
    image: '/images/client-new-toddler-puzzles.jpg',
    imageAlt: 'Toddlers working on wooden puzzles with their teacher',
    color: 'var(--brand-lime)',
    bg: '#f4fbed',
  },
  {
    number: '03',
    label: 'Step 3',
    title: 'Preschool (3-Year-Olds)',
    subtitle: 'Building Foundations',
    ages: '3 years old',
    description:
      'Now learning takes shape through structured play, creativity, and early academics in a warm, supportive setting. Children begin developing the foundational skills they need for academic success while building friendships and learning how to navigate the classroom environment.',
    outcomes: [
      'Build early reading, writing, and math skills',
      'Learn to focus, listen, and follow routines',
      'Grow socially through teamwork and cooperative play',
      'Develop creative expression through art and music',
      'Strengthen problem-solving and critical thinking',
    ],
    tagline: 'Confidence in learning begins here',
    image: '/images/client-new-playdoh.jpg',
    imageAlt: 'Preschoolers doing playdoh art with their teacher',
    color: '#2d7a3a',
    bg: '#edf7ef',
  },
  {
    number: '04',
    label: 'Step 4',
    title: 'VPK (4-Year-Olds)',
    subtitle: 'Ready to Shine',
    ages: '4 years old',
    description:
      "The final step before kindergarten — where everything comes together. Our VPK program integrates Florida's Voluntary Prekindergarten standards with our Creative Curriculum to ensure children are academically, socially, and emotionally prepared for the transition to elementary school.",
    outcomes: [
      'Strong phonics and early reading fluency',
      'Writing readiness and number recognition',
      'Problem-solving and logical reasoning ability',
      'Independence and classroom confidence',
      'Social-emotional skills for group learning',
    ],
    tagline: 'Fully prepared for kindergarten success',
    image: '/images/client-new-careers.jpg',
    imageAlt: 'Children dressed as chef, doctor, police officer and scientist — ready for kindergarten',
    color: '#e07c3a',
    bg: '#fef4ec',
  },
]

const outcomes = [
  {
    title: 'Confident & Independent',
    description: 'Children develop a strong sense of self, ready to take on new challenges and make decisions with confidence.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Socially & Emotionally Strong',
    description: 'They build empathy, cooperation skills, and the ability to express emotions in healthy, constructive ways.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Academically Prepared',
    description: 'Strong foundations in literacy, math, science, and creative thinking prepare children for kindergarten success.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Excited for Kindergarten',
    description: 'A natural love of learning and curiosity about the world means children look forward to the next chapter.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
]

export default function ProgramsPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbs([{ name: 'Home', url: '/' }, { name: 'Programs', url: '/programs' }])} />
      {/* Hero */}
      <section className="py-20 cream-pattern-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
                Our Programs
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--foreground)] text-balance mb-6 leading-tight">
                Programs Designed for Every Stage of Growth
              </h1>
              <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-8">
                From their very first day to their first step into kindergarten, your child is supported,
                guided, and inspired every step of the way at Little Newtons Academy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/schedule-a-tour"
                  className="bg-[var(--brand-blue-deep)] text-[var(--primary-foreground)] font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  Schedule a Tour
                </Link>
                <a
                  href="#journey"
                  className="border-2 border-[var(--brand-blue-deep)] text-[var(--brand-blue-deep)] font-bold px-8 py-3.5 rounded-full hover:bg-[var(--secondary)] transition-colors"
                >
                  See Our Journey
                </a>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/client-new-welcome-group.jpg"
                alt="Children smiling on a classroom rug at Little Newtons Academy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Journey */}
      <section id="journey" className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-16">
            <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
              Your Child&apos;s Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
              Four Steps to Kindergarten Readiness
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
              Each stage is thoughtfully designed to build upon the last, supporting your child&apos;s social,
              emotional, cognitive, and physical development at every step.
            </p>
          </div>

          <div className="flex flex-col gap-20">
            {programs.map((program, index) => (
              <div
                key={program.number}
                className="grid lg:grid-cols-2 gap-10 items-center"
              >
                {/* Image - alternates left/right */}
                <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={program.image}
                    alt={program.imageAlt}
                    fill
                    className="object-cover"
                    style={program.imagePosition ? { objectPosition: program.imagePosition } : undefined}
                  />
                  <div
                    className="absolute top-4 left-4 text-xs font-bold px-4 py-1.5 rounded-full text-[var(--primary-foreground)]"
                    style={{ backgroundColor: program.color }}
                  >
                    {program.label}
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
                    style={{ backgroundColor: program.bg, color: program.color }}
                  >
                    {program.ages}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-2">
                    {program.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] text-sm font-semibold mb-4" style={{ color: program.color }}>
                    {program.subtitle}
                  </p>
                  <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <div className="flex flex-col gap-2.5 mb-6">
                    {program.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-2.5">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: program.color }}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-[var(--foreground)] text-sm">{outcome}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-semibold italic" style={{ color: program.color }}>
                    {program.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Result */}
      <section className="py-20 cream-pattern-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
              The Result
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
              By the End of Their Journey, Your Child Will Be Ready
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="text-center p-6 rounded-2xl border border-[var(--border)] bg-[var(--background)] hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--secondary)] text-[var(--brand-blue-deep)] flex items-center justify-center mx-auto mb-4">
                  {outcome.icon}
                </div>
                <h3 className="font-bold text-[var(--foreground)] mb-2">{outcome.title}</h3>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: '/images/client-new-parachute.jpg', alt: 'Children playing with a rainbow parachute outdoors' },
              { src: '/images/client-new-science.jpg', alt: 'Hands-on science exploration at Little Newtons' },
              { src: '/images/client-new-art-yarn.jpg', alt: 'Yarn weaving art project with teacher and students' },
              { src: '/images/client-new-art-paint.jpg', alt: 'Art class with paint bottles at Little Newtons Academy' },
            ].map((photo) => (
              <div key={photo.src} className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Begin Your Child's Journey Today"
        description="Every great future starts with the right foundation. Limited spots available — schedule your tour today and see how your child will grow with us."
      />
    </>
  )
}
