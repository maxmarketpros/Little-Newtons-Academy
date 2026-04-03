import Image from 'next/image'
import Link from 'next/link'
import CTABanner from '@/components/cta-banner'

export const metadata = {
  title: 'A Day at Little Newtons | Daily Schedule | Little Newtons Academy Lake Mary',
  description:
    'See what a typical day looks like at Little Newtons Academy in Lake Mary, FL. From morning breakfast to afternoon exploration, every moment is purposeful.',
}

const timeline = [
  {
    time: '7:00 – 8:30 AM',
    title: 'Healthy Start',
    description: 'Children begin the day with a fresh, nutritious USDA-approved breakfast that fuels their morning. This calm start helps children transition into the school day, build healthy eating habits, and socialize with classmates.',
    image: '/images/daily-healthy-start.jpg',
    imageAlt: 'Children enjoying a healthy breakfast at Little Newtons Academy',
  },
  {
    time: '8:30 – 9:00 AM',
    title: 'Morning Circle Time',
    description: 'The day begins together as children gather with their teacher to greet classmates, discuss the day\'s theme, and explore early literacy and math concepts. This group time builds language skills, listening skills, and a sense of community.',
    image: '/images/daily-circle-time.jpg',
    imageAlt: 'Children in morning circle time with their teacher',
  },
  {
    time: '9:00 – 10:30 AM',
    title: 'Learning Centers',
    description: 'Children rotate through hands-on learning centers including art and creativity, reading and storytelling, building and problem solving, science and discovery, and sensory play. Teachers guide each child through activities tailored to their developmental level.',
    image: '/images/science-experiment.jpg',
    imageAlt: 'Children exploring hands-on learning activities',
  },
  {
    time: '10:30 – 11:30 AM',
    title: 'Outdoor Play',
    description: 'Outdoor time allows children to run, climb, and develop gross motor skills while playing group games, exploring nature, and building friendships. Active play supports physical development, coordination, and social growth.',
    image: '/images/daily-outdoor-play.jpg',
    imageAlt: 'Children playing outdoors at Little Newtons Academy',
  },
  {
    time: '11:30 AM – 12:00 PM',
    title: 'Lunch Time',
    description: 'Children enjoy a healthy, USDA CCFP-approved lunch while practicing conversation, independence, and positive table manners. Mealtime is a social experience that reinforces healthy habits and community.',
    image: '/images/daily-lunch-rest.jpg',
    imageAlt: 'Children enjoying lunch together',
  },
  {
    time: '12:00 – 2:00 PM',
    title: 'Rest & Quiet Time',
    description: 'After a busy morning, children have nap or quiet rest time to recharge. Younger children nap while older children may enjoy quiet activities like books, puzzles, or calm creative play.',
    image: '/images/8.jpg',
    imageAlt: 'Calm rest time at Little Newtons Academy',
  },
  {
    time: '2:00 – 4:00 PM',
    title: 'Afternoon Exploration',
    description: 'The afternoon continues with creative activities, learning centers, and play that reinforce skills learned earlier in the day. Children have snack time and engage in enrichment activities that keep learning fresh and exciting.',
    image: '/images/10.jpg',
    imageAlt: 'Children engaged in afternoon exploration activities',
  },
  {
    time: 'Throughout the Week',
    title: 'Special Events & Enrichment',
    description: 'Throughout the year, children participate in music and movement, themed activities, seasonal celebrations, and special events that keep learning exciting and build confidence, creativity, and community.',
    image: '/images/client-music-2.jpg',
    imageAlt: 'Children enjoying music and enrichment activities',
  },
]

const enrichment = [
  {
    title: 'Music & Movement',
    description: 'Rhythm, dance, and song develop coordination, language, and creative expression.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    title: 'Science Discovery',
    description: 'Hands-on experiments and observation build scientific thinking and curiosity.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: 'Art & Creativity',
    description: 'Painting, sculpting, and creative projects develop fine motor skills and imagination.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: 'Outdoor Nature',
    description: 'Nature walks and outdoor exploration connect children to the world around them.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Holiday Celebrations',
    description: 'Seasonal events and cultural celebrations build excitement and community spirit.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Community Events',
    description: 'Family events and community activities strengthen the bond between school and home.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
]

export default function DailyLifePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-[var(--brand-cream)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
                Daily Life
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--foreground)] text-balance mb-6 leading-tight">
                A Day at Little Newtons Academy
              </h1>
              <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-8">
                Every day is thoughtfully designed to balance learning, play, creativity, and rest. Our predictable
                routine helps children feel secure while giving them exciting opportunities to explore and grow.
              </p>
              <Link
                href="/schedule-a-tour"
                className="inline-block bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Schedule a Tour
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/daily-circle-time.jpg"
                alt="Children in circle time at Little Newtons Academy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full Day Timeline */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-16">
            <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
              From Morning to Afternoon
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
              A Full Day of Purposeful Learning
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-[140px] top-0 bottom-0 w-px bg-[var(--border)]" />

            <div className="flex flex-col gap-12">
              {timeline.map((item, index) => (
                <div key={item.title} className="grid lg:grid-cols-[140px_1fr] gap-6 lg:gap-10 items-start">
                  {/* Time badge */}
                  <div className="flex lg:flex-col items-center lg:items-end gap-3 lg:gap-0">
                    <div className="relative z-10 bg-[var(--brand-green)] text-[var(--primary-foreground)] text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                      {item.time}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="flex-1 h-px lg:hidden bg-[var(--border)]" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className="grid sm:grid-cols-2 gap-6 p-6 rounded-2xl border border-[var(--border)] bg-[var(--background)] hover:shadow-md transition-shadow">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                      <Image src={item.image} alt={item.imageAlt} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-bold text-lg text-[var(--foreground)] mb-2">{item.title}</h3>
                      <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enrichment Grid */}
      <section className="py-20 bg-[var(--brand-cream)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
              Enrichment Activities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
              Beyond the Daily Routine
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
              In addition to our daily schedule, children participate in a variety of enrichment activities that expand their horizons and keep learning exciting.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrichment.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-2xl border border-[var(--border)] bg-[var(--background)] hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--secondary)] text-[var(--brand-green)] flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--foreground)] mb-1">{item.title}</h3>
                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-3 gap-4">
            {[
              { src: '/images/client-earthday-2.jpg', alt: 'Earth Day activities at Little Newtons' },
              { src: '/images/playground-play.jpg', alt: 'Children playing outdoors' },
              { src: '/images/client-spring-2.jpg', alt: 'Spring activities at Little Newtons Academy' },
            ].map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Come See a Day in Action"
        description="The best way to understand what a day at Little Newtons looks like is to visit. Schedule a tour and see our classrooms, meet our teachers, and watch learning happen."
      />
    </>
  )
}
