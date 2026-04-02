import Hero from '@/components/hero'
import Philosophy from '@/components/philosophy'
import Safety from '@/components/safety'
import ImageShowcase from '@/components/image-showcase'
import WhyChooseUs from '@/components/why-choose-us'
import Programs from '@/components/programs'
import DailySchedule from '@/components/daily-schedule'
import KindergartenReadiness from '@/components/kindergarten-readiness'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Safety />
      <ImageShowcase />
      <WhyChooseUs />
      <Programs />
      <DailySchedule />
      <KindergartenReadiness />
      <Testimonials />
      <Contact />
    </>
  )
}
