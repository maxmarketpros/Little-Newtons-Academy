import Image from 'next/image'

const testimonials = [
  {
    quote:
      'From the moment we toured the school, we felt comfortable. The teachers are caring, the classrooms are organized, and we always know our child is safe and happy.',
    author: 'Heathrow Parent',
    title: 'A Place We Truly Trust',
  },
  {
    quote:
      'Every morning our child is excited to go to Little Newtons Academy. The teachers are wonderful and the activities keep the kids engaged and learning.',
    author: 'Lake Mary Parent',
    title: 'Our Child Loves Coming to School',
  },
  {
    quote:
      'The staff is warm and welcoming, and they keep us informed about our child\'s day. It really feels like a partnership between the school and families.',
    author: 'Heathrow Parent',
    title: 'Amazing Teachers and Communication',
  },
  {
    quote:
      "We've seen so much growth in our child's confidence, social skills, and learning. Little Newtons Academy has been an incredible start to their education.",
    author: 'Lake Mary Parent',
    title: 'A Wonderful Learning Environment',
  },
  {
    quote:
      'The safety measures, clean classrooms, and structured learning activities give us peace of mind every single day.',
    author: 'Heathrow Parent',
    title: 'Safe, Caring, and Well Organized',
  },
  {
    quote:
      "The teachers truly care about the children. It's not just a school — it's a community where families feel welcomed and supported.",
    author: 'Lake Mary Parent',
    title: 'A Community That Feels Like Family',
  },
]

function StarRating() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-[#f4c430] text-[#f4c430]" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-14">
          <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
            Parent Reviews
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
            What Parents Are Saying
          </h2>
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
            Families choose Little Newtons Academy because they see their children growing in confidence,
            curiosity, and happiness every day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.title}
              className="flex flex-col gap-4 p-6 rounded-2xl border border-[var(--border)] bg-[var(--background)] hover:shadow-md transition-shadow"
            >
              <StarRating />
              <p className="text-[var(--foreground)] leading-relaxed font-medium flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-[var(--border)]">
                <p className="font-bold text-[var(--brand-green)] text-sm">{testimonial.title}</p>
                <p className="text-[var(--muted-foreground)] text-xs mt-0.5">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image row */}
        <div className="mt-12 grid grid-cols-3 gap-4 rounded-3xl overflow-hidden h-48 sm:h-64">
          <div className="relative">
            <Image
              src="/images/18.jpg"
              alt="Happy children at Little Newtons Academy"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/8.jpg"
              alt="Two children hugging at Little Newtons Academy"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/15.jpg"
              alt="Curious child at Little Newtons Academy"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <p className="text-center mt-10 text-[var(--muted-foreground)]">
          Join the many families who trust Little Newtons Academy to provide a safe, engaging, and supportive start
          to their child&apos;s learning journey.{' '}
          <a href="#contact" className="text-[var(--brand-green)] font-bold hover:underline">
            Schedule a Tour Today
          </a>
        </p>
      </div>
    </section>
  )
}
