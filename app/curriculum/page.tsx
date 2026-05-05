import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABanner from '@/components/cta-banner'
import JsonLd from '@/components/json-ld'
import { buildBreadcrumbs } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Curriculum & STEAM Learning',
  description:
    'Our Creative Curriculum and STEAM-integrated approach prepares children for kindergarten success. Aligned with Florida VPK and School Readiness standards in Lake Mary, FL.',
  alternates: { canonical: '/curriculum' },
  openGraph: {
    title: 'Curriculum & STEAM Learning',
    description:
      'Creative Curriculum and STEAM-integrated approach for kindergarten readiness in Lake Mary, FL.',
    url: '/curriculum',
  },
}

const curriculumPrinciples = [
  'Purposeful exploration and guided discovery',
  'Hands-on learning through meaningful engagement',
  'Individualized instruction that meets each child where they are',
  'A balance of structure and creative freedom',
  'Social-emotional growth alongside academics',
]

const steamCards = [
  {
    title: 'Science',
    description: 'Children observe, question, and experiment — building a foundation of scientific thinking through hands-on exploration of the natural world.',
    image: '/images/science-experiment.jpg',
    imageAlt: 'Children doing science experiments',
  },
  {
    title: 'Technology & Engineering',
    description: 'Through building, problem-solving, and early engineering challenges, children develop logical thinking and learn to create solutions.',
    image: '/images/client-science-2.jpg',
    imageAlt: 'Children building and problem-solving',
  },
  {
    title: 'Art & Creativity',
    description: 'Art is a language for young children. Through painting, sculpting, and creative expression, children develop fine motor skills and imaginative thinking.',
    image: '/images/client-spring-3.jpg',
    imageAlt: 'Children creating art at Little Newtons Academy',
  },
  {
    title: 'Math & Logic',
    description: 'Counting, sorting, patterns, and comparing — math concepts come alive through playful, hands-on activities that make learning exciting.',
    image: '/images/playground-sensory.jpg',
    imageAlt: 'Children engaged in hands-on learning activities',
  },
  {
    title: 'Exploration & Discovery',
    description: 'Sensory play, nature walks, and open-ended exploration encourage children to ask questions, make connections, and understand the world around them.',
    image: '/images/client-earthday-2.jpg',
    imageAlt: 'Children exploring nature and discovery activities',
  },
]

const readinessSkills = [
  {
    title: 'Early Literacy Foundations',
    description: 'Children are introduced to the building blocks of reading and language through activities that encourage listening, storytelling, and early phonics awareness.',
    points: ['Recognizing letters and sounds', 'Expanding vocabulary through conversation', 'Listening and comprehension skills', 'Storytelling and communication confidence'],
    color: 'var(--brand-sky)',
    bg: '#eef9fc',
  },
  {
    title: 'Early Math & Problem-Solving',
    description: 'Children explore foundational math concepts through hands-on activities and guided discovery that make numbers meaningful.',
    points: ['Counting and number recognition', 'Sorting, patterns, and sequencing', 'Comparing sizes and quantities', 'Simple problem-solving strategies'],
    color: 'var(--brand-lime)',
    bg: '#f4fbed',
  },
  {
    title: 'Social & Emotional Development',
    description: 'Kindergarten readiness goes beyond academics. Children develop the life skills that help them thrive in a classroom environment.',
    points: ['Confidence and independence', 'Cooperation and teamwork', 'Following directions and routines', 'Expressing emotions in healthy ways'],
    color: '#2d7a3a',
    bg: '#edf7ef',
  },
]

const distinctions = [
  {
    title: 'A Balanced Approach',
    description: 'Structure and creativity work hand in hand, giving children the stability they need while fostering their natural imagination.',
  },
  {
    title: 'Individualized Guidance',
    description: 'Every child learns differently. Our teachers tailor their approach to support each child\'s unique strengths and learning pace.',
  },
  {
    title: 'Thoughtfully Designed Spaces',
    description: 'Our classrooms are calm, nurturing environments intentionally set up to encourage exploration, focus, and collaboration.',
  },
  {
    title: 'Academic + Personal Growth',
    description: 'We develop the whole child — strong academics alongside confidence, empathy, and a love of learning that lasts a lifetime.',
  },
]

export default function CurriculumPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbs([{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }])} />
      {/* Hero */}
      <section className="py-20 cream-pattern-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
                Our Curriculum
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--foreground)] text-balance mb-6 leading-tight">
                Academic Excellence Through Purposeful Learning
              </h1>
              <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-8">
                At Little Newtons Academy, early learning is approached with intention, care, and a commitment to excellence. Grounded in the Creative Curriculum framework with STEAM integration, we nurture intellectual growth, confidence, and a lifelong love of learning.
              </p>
              <Link
                href="/schedule-a-tour"
                className="inline-block bg-[var(--brand-blue-deep)] text-[var(--primary-foreground)] font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Schedule a Tour
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/science-focused.jpg"
                alt="Children focused on learning activities at Little Newtons Academy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Creative Curriculum */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/facility-classroom.jpg"
                alt="Bright classroom set up for Creative Curriculum activities"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
                Our Approach
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
                The Creative Curriculum Framework
              </h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
                Our program is grounded in the Creative Curriculum, a nationally recognized, research-based framework that respects how young children learn best — through purposeful exploration, guided discovery, and meaningful engagement.
              </p>
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
                Every experience is intentional. Every moment supports growth. Our teachers use this framework to create learning environments that develop the whole child — academically, socially, and emotionally.
              </p>
              <div className="flex flex-col gap-3">
                {curriculumPrinciples.map((principle) => (
                  <div key={principle} className="flex items-center gap-2.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-[var(--brand-blue-deep)] flex-shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[var(--foreground)] text-sm font-medium">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEAM Grid */}
      <section className="py-20 cream-pattern-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
              STEAM Learning
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
              Enriched Learning Through STEAM
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
              We extend learning beyond the traditional classroom by integrating Science, Technology, Engineering, Art, and Math into daily activities — cultivating curiosity, critical thinking, and intellectual confidence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steamCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--background)] overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={card.image} alt={card.imageAlt} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[var(--foreground)] mb-2">{card.title}</h3>
                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kindergarten Readiness */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
              Kindergarten Readiness
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
              Preparing Children for Kindergarten Success
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
              Our goal is to help children build the skills, confidence, and independence they need for a smooth transition into kindergarten and beyond.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {readinessSkills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-2xl p-6 border border-[var(--border)]"
                style={{ backgroundColor: skill.bg }}
              >
                <h3 className="font-bold text-[var(--foreground)] mb-3" style={{ color: skill.color }}>{skill.title}</h3>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-4">{skill.description}</p>
                <div className="flex flex-col gap-2">
                  {skill.points.map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: skill.color }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-[var(--foreground)] text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Distinction */}
      <section className="py-20 cream-pattern-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
                What Makes Us Different
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-8">
                The Little Newtons Distinction
              </h2>
              <div className="flex flex-col gap-6">
                {distinctions.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--secondary)] text-[var(--brand-blue-deep)] flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--foreground)] mb-1">{item.title}</h3>
                      <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/client-facility-3.jpg"
                alt="Thoughtfully designed learning environment at Little Newtons Academy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Standards Banner */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="bg-[var(--brand-blue-deep)] rounded-3xl p-8 sm:p-10">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--primary-foreground)] mb-2">
                Aligned with Recognized Standards
              </h2>
              <p className="text-white/80 text-sm">
                Our curriculum meets and exceeds Florida&apos;s early learning requirements
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 text-[var(--primary-foreground)]">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="font-bold mb-1">Florida VPK Standards</p>
                <p className="text-white/80 text-sm">Fully certified and compliant</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="font-bold mb-1">School Readiness Standards</p>
                <p className="text-white/80 text-sm">Meeting and exceeding guidelines</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="font-bold mb-1">Early Learning Coalition</p>
                <p className="text-white/80 text-sm">Aligned with all requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
