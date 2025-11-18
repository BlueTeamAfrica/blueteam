import HeroSection from '@/components/HeroSection'
import ServicesOverview from '@/components/ServicesOverview'
import FeaturesSection from '@/components/FeaturesSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <FeaturesSection />
      <CTASection />
    </div>
  )
}
