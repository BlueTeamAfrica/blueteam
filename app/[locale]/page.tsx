import type { Metadata } from 'next'
import OrganizationSchema from '@/components/OrganizationSchema'
import HeroSection from '@/components/hero/Hero'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata-helpers'
import ResultsBand from '@/components/home/ResultsBand'
import ServicesBento from '@/components/home/ServicesBento'
import SelectedWork from '@/components/home/SelectedWork'
import SecureByDesign from '@/components/home/SecureByDesign'
import HowWeWork from '@/components/home/HowWeWork'
import WhereWeWork from '@/components/home/WhereWeWork'
import FaqSection from '@/components/home/FaqSection'
import CtaBand from '@/components/home/CtaBand'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const alternates = buildAlternates('/', locale)

  const isAr = locale === 'ar'
  const t = await getTranslations({ locale, namespace: 'HomePage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'HomePage' })

  return {
    // Absolute: no layout template suffix on the homepage
    title: { absolute: t('metaTitle') },
    description: t('metaDescription'),
    robots: 'index, follow',
    alternates,
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
      url: alternates.canonical,
      siteName: 'Blue Team Africa',
      type: 'website',
      images: [
        {
          url: '/images/hero/hero-og-1200x630.jpg',
          width: 1200,
          height: 630,
          alt: 'Blue Team Africa — Web Design, Website Development & Digital Solutions',
        },
      ],
      locale: isAr ? 'ar_001' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
      images: ['/images/hero/hero-og-1200x630.jpg'],
    },
    keywords: [
      'web design',
      'website design',
      'website development',
      'web development',
      'digital solutions',
      'hosting',
      'SEO',
      'NGO',
      'Uganda',
      'Kenya',
      'East Africa',
      'web design company',
      'website development company',
    ],
  }
}

export default async function Home() {
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.blueteamafrica.com/#localbusiness",
    "name": "Blue Team Africa",
    "legalName": "Blue Team Ltd.",
    "url": "https://www.blueteamafrica.com",
    "logo": "https://www.blueteamafrica.com/images/logo/logo.png",
    "image": "https://www.blueteamafrica.com/og-image.png",
    "telephone": "+254119402737",
    "email": "contact@blueteamafrica.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RW"
    },
    "areaServed": [
      { "@type": "Country", "name": "Sudan" },
      { "@type": "Country", "name": "Rwanda" },
      { "@type": "Country", "name": "Uganda" },
      { "@type": "Country", "name": "Kenya" }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/blue-team-africa",
      "https://about.me/blueteamafrica"
    ],
    "description": "Blue Team Africa is a Rwanda-based web design and web development company delivering high-performance, SEO-driven digital solutions for businesses and NGOs.",
    "foundingDate": "2023-09-16",
    "serviceType": [
      "Web Design",
      "Web Development",
      "Website Hosting",
      "CRM Systems",
      "ERP Systems"
    ]
  }

  return (
    <>
      {/* JSON-LD Schemas */}
      <OrganizationSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />

      <div className="w-full overflow-hidden">
        <HeroSection />

        <ResultsBand />
        <ServicesBento />
        <SelectedWork />
        <SecureByDesign />
        <HowWeWork />
        <WhereWeWork />
        <FaqSection />
        <CtaBand />
      </div>
    </>
  )
}
