import Image from 'next/image'

const schedule = [
  {
    time: 'Morning',
    title: 'Healthy Start',
    description: 'Children begin the day with a fresh, nutritious breakfast that supports focus, energy, and healthy habits.',
    image: '/images/daily-healthy-start.jpg',
    imageAlt: 'Fresh fruits and nutritious foods for a healthy start',
  },
  {
    time: 'Morning Circle',
    title: 'Circle Time',
    description: 'The day begins together as children gather with their teacher to greet classmates, explore early literacy and math, and build language skills.',
    image: '/images/daily-circle-time.jpg',
    imageAlt: 'Children and teachers gathered in a circle on the grass',
  },
  {
    time: 'Mid-Morning',
    title: 'Learning Centers',
    description: 'Children rotate through hands-on learning centers: art, reading, building, science discovery, and sensory play guided by teachers.',
    image: '/images/science-experiment.jpg',
    imageAlt: 'Children doing a hands-on science experiment',
  },
  {
    time: 'Late Morning',
    title: 'Outdoor Play',
    description: 'Active outdoor time lets children run, climb, build friendships, and develop motor skills through group games and nature exploration.',
    image: '/images/daily-outdoor-play.jpg',
    imageAlt: 'Child playing with bubbles on the playground',
  },
  {
    time: 'Midday',
    title: 'Lunch & Rest',
    description: 'Children enjoy a healthy lunch, then have quiet rest or nap time to recharge after an active morning of learning.',
    image: '/images/daily-lunch-rest.jpg',
    imageAlt: 'Children enjoying a healthy lunch together',
  },
  {
    time: 'Afternoon',
    title: 'Afternoon Exploration',
    description: 'Creative activities, learning centers, and play continue into the afternoon, reinforcing skills and building on the morning\'s discoveries.',
    image: '/images/10.jpg',
    imageAlt: 'Children exploring and playing during afternoon activities',
  },
]

export default function DailySchedule() {
  return (
    <section id="daily-schedule" className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-14">
          <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
            Daily Life
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
            A Day at Little Newtons Academy
          </h2>
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
            Every day is thoughtfully designed to balance learning, play, creativity, and rest. Our predictable
            routine helps children feel secure while giving them exciting opportunities to explore and grow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map((item, index) => (
            <div
              key={item.title}
              className="group rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--background)] hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[var(--foreground)]/20" />
                <span className="absolute top-4 left-4 bg-[var(--brand-green)] text-[var(--primary-foreground)] text-xs font-bold px-3 py-1.5 rounded-full">
                  {item.time}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-full bg-[var(--secondary)] flex items-center justify-center text-[var(--brand-green)] font-bold text-xs flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-[var(--foreground)]">{item.title}</h3>
                </div>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
