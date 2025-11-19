import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import ServicesOverview from '@/components/ServicesOverview'
import FeaturesSection from '@/components/FeaturesSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import OrganizationSchema from '@/components/OrganizationSchema'
import HomepageFAQSchema from '@/components/HomepageFAQSchema'

export const metadata: Metadata = {
  title: 'Website Design & Cyber Security Solutions | Blue Team Africa',
  description: 'Professional website design, website development, and cyber security solutions for businesses in Uganda, Kenya & Rwanda. Enterprise-grade web design and security services.',
  openGraph: {
    title: 'Website Design & Cyber Security Solutions | Blue Team Africa',
    description: 'Professional website design, website development, and cyber security solutions for businesses in Uganda, Kenya & Rwanda.',
    url: 'https://blueteamafrica.com',
    siteName: 'Blue Team Africa',
    images: [
      {
        url: '/images/og-home-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Blue Team Africa hero — enterprise web design and cyber security',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Design & Cyber Security Solutions | Blue Team Africa',
    description: 'Professional website design, website development, and cyber security solutions for businesses in Uganda, Kenya & Rwanda.',
    images: ['/images/og-home-hero.webp'],
  },
  keywords: [
    'website design',
    'web design',
    'website development',
    'website build',
    'cyber security',
    'cybersecurity',
    'website design Uganda',
    'website development Kenya',
    'cyber security Rwanda',
    'web design East Africa',
  ],
}

export default function Home() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <OrganizationSchema />
      <HomepageFAQSchema />

      <main className="min-h-screen">
        <HeroSection />
        <ServicesOverview />
        <FeaturesSection />
        <FAQSection 
          maxItems={4} 
          showCTA={false}
          title="Frequently Asked Questions"
          description="Common questions about our website design, development, and cyber security services"
          bgColor="gray"
          customFAQs={[
            {
              question: 'How long does a website project take?',
              answer: 'Starter: 1–2 weeks. Professional: 3–6 weeks. Complex systems: 3–9 months.',
            },
            {
              question: 'How much does a website cost?',
              answer: 'Costs depend on scope. Starter packages available; final quotes after an audit.',
            },
            {
              question: 'Do you provide hosting and maintenance?',
              answer: 'Yes — managed hosting with daily backups, SSL, monitoring and optional support retainers.',
            },
            {
              question: 'How do you secure our data?',
              answer: 'We use encryption, RBAC, vulnerability scanning, and disaster recovery plans.',
            },
          ]}
        />
        <CTASection />
      </main>
    </>
  )
}
