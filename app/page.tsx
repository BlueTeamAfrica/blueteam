import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import FeaturesSection from '@/components/FeaturesSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <CTASection />
    </div>
  )
}
