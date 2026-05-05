import type { Metadata } from 'next'
import Contact from '@/components/contact'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import JsonLd from '@/components/json-ld'
import { buildBreadcrumbs } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Schedule a Tour - Lake Mary & Heathrow FL',
  description:
    'Schedule a tour at Little Newtons Academy. Contact us about enrollment for Infant, Toddler, Preschool, and VPK programs in Lake Mary and Heathrow, FL.',
  alternates: { canonical: '/schedule-a-tour' },
  openGraph: {
    title: 'Schedule a Tour - Lake Mary & Heathrow FL',
    description:
      'Schedule a tour at Little Newtons Academy. See our classrooms and meet our teachers.',
    url: '/schedule-a-tour',
  },
}

const faqs = [
  {
    question: 'What ages do you serve?',
    answer:
      'We welcome children from 6 weeks through VPK (age 4). Our programs include Infant (6 weeks–12 months), Young Toddler (12–18 months), Toddler (18 months–2 years), Preschool (3-year-olds), and VPK (4-year-olds).',
  },
  {
    question: 'What is VPK and do you offer it?',
    answer:
      "VPK (Voluntary Prekindergarten) is Florida's free early education program for 4-year-olds. Yes, we are a certified VPK provider at both our Heathrow and Lake Mary locations. VPK helps prepare your child for kindergarten with a strong academic and social-emotional foundation.",
  },
  {
    question: 'Do you provide meals?',
    answer:
      'Yes! We participate in the USDA Child Care Food Program (CCFP). Children receive a nutritious breakfast, lunch, and snacks daily — all prepared fresh and included in tuition at no additional cost.',
  },
  {
    question: 'What are your hours of operation?',
    answer:
      'Both locations are open Monday through Friday. Please contact us for specific hours at each campus. We offer full-day programs designed to accommodate working families.',
  },
  {
    question: 'How do I enroll my child?',
    answer:
      "Enrollment starts with a tour! Fill out the form above or call us to schedule a visit. During the tour, you'll meet our teachers, see the classrooms, and learn about our programs. We'll then walk you through the enrollment paperwork and answer any questions.",
  },
  {
    question: 'What is your teacher-to-child ratio?',
    answer:
      'We maintain ratios that meet or exceed Florida DCF requirements. Our small class sizes ensure every child receives individual attention, guidance, and care throughout the day.',
  },
  {
    question: 'What curriculum do you use?',
    answer:
      'We use the Creative Curriculum, a nationally recognized research-based framework. Our approach integrates STEAM learning (Science, Technology, Engineering, Art, and Math) with hands-on exploration and guided discovery.',
  },
  {
    question: 'Is there a waitlist?',
    answer:
      'Enrollment availability varies by program and location. We recommend scheduling a tour as soon as possible to secure your spot. Contact us to check current availability for your child\'s age group.',
  },
]

const tourSteps = [
  {
    number: '1',
    title: 'Welcome & Meet Our Team',
    description:
      "You'll be greeted by our team and introduced to the teachers who will be part of your child's daily experience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'Tour Our Classrooms',
    description:
      "Walk through our age-appropriate classrooms, learning centers, and outdoor play areas to see where your child will learn and grow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Learn About Our Programs',
    description:
      "We'll walk you through the Creative Curriculum, our STEAM approach, daily schedules, and what your child will experience at each stage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    number: '4',
    title: 'Ask Questions & Enroll',
    description:
      "Have all your questions answered, discuss enrollment options, and take the first step toward giving your child an exceptional start.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <JsonLd data={buildBreadcrumbs([{ name: 'Home', url: '/' }, { name: 'Schedule a Tour', url: '/schedule-a-tour' }])} />
      <JsonLd data={faqSchema} />
      {/* Hero */}
      <section className="py-16 cream-pattern-bg">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--foreground)] text-balance mb-6">
            Schedule a Tour at Little Newtons Academy
          </h1>
          <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
            See our classrooms, meet our teachers, and discover why families across Lake Mary and Heathrow
            trust us with their children&apos;s early education.
          </p>
        </div>
      </section>

      {/* Contact form (reusing existing component) */}
      <Contact />

      {/* What to expect on your tour */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
              Your Visit
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
              What to Expect on Your Tour
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
              A tour at Little Newtons Academy is your chance to see our programs in action and find the perfect fit for your family.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourSteps.map((step) => (
              <div
                key={step.number}
                className="text-center p-6 rounded-2xl border border-[var(--border)] bg-[var(--background)] hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--brand-blue-deep)] text-[var(--primary-foreground)] font-bold text-sm flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <div className="w-12 h-12 rounded-xl bg-[var(--secondary)] text-[var(--brand-blue-deep)] flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="font-bold text-[var(--foreground)] mb-2">{step.title}</h3>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 cream-pattern-bg">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
              Common Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-[var(--border)]">
                <AccordionTrigger className="text-left font-semibold text-[var(--foreground)] py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--muted-foreground)] leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}
