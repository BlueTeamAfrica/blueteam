import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { JsonLd } from '@/components/SEO'
import { generateOrganizationSchema } from '@/lib/schema'
import PackageCards from '@/components/PackageCards'

export const metadata: Metadata = {
  title: 'Blue Team Africa — Web Design, Hosting & Enterprise Systems (East Africa)',
  description: 'Blue Team Africa builds high-performance websites, secure hosting, and enterprise systems (ERP/CRM/Apps) for organizations in Uganda, Kenya, Rwanda & Sudan. Book a free systems audit.',
  keywords: ['web design Uganda', 'website hosting Uganda', 'ERP integration East Africa', 'business system integration', 'web design company Uganda', 'technology solutions East Africa'],
  openGraph: {
    title: 'Blue Team Africa — Web Design, Hosting & Enterprise Systems (East Africa)',
    description: 'Blue Team Africa builds high-performance websites, secure hosting, and enterprise systems for organizations in Uganda, Kenya, Rwanda & Sudan.',
  },
}

export default function Home() {
  const organizationSchema = generateOrganizationSchema(
    'Blue Team Africa',
    'Blue Team Africa builds high-performance websites, secure hosting, and enterprise systems (ERP/CRM/Apps) for organizations in East Africa.',
    'https://blueteamafrica.com',
    undefined,
    [],
    '+25676550813',
    'eldaby@meslsolutions.com'
  )

  return (
    <>
      <JsonLd schema={organizationSchema} />
      
      {/* Hero Section - New Design */}
      <section className="relative w-full min-h-[60vh] flex items-center bg-gradient-to-br from-primary via-primary-light to-secondary">
        {/* Background Image - Optimized */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/1.webp"
            alt="Blue Team Africa - Technology Solutions for East Africa"
            fill
            className="object-cover"
            priority
            quality={75}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-white">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight">
            Blue Team Africa — Websites, Hosting & Unified Systems for East Africa
          </h1>
          <p className="mt-6 text-lg max-w-3xl">
            From fast, SEO-ready websites and ultra-reliable hosting to ERP, CRM and secure cloud operations — Blue Team Africa transforms fragmented tech into measurable outcomes. Start with a free 30-minute systems audit and receive a prioritized roadmap you can pilot within weeks.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link href="/contact?solution_interest=elite" className="px-6 py-3 rounded-xl bg-secondary text-white font-medium hover:bg-orange-700 transition">
              Book a Free Systems Audit
            </Link>
            <Link href="/solutions/foundational#packages" className="px-6 py-3 rounded-xl border border-white text-white hover:bg-white hover:text-primary transition">
              Get a Website Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services intro & packages */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-semibold text-dark">Technology Solutions Designed for East African Scale</h2>
          <p className="mt-4 text-muted">Choose the path that fits your growth: Essential for launch, Professional for growth, and Elite for enterprise transformation.</p>
        </div>
      </section>

      <PackageCards />

      {/* Trust strip */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <div className="text-muted">Trusted by organizations across East Africa</div>
          <div className="flex items-center gap-6">
            {/* Placeholder for client logos - add when available */}
            <div className="h-8 w-24 bg-gray-200 rounded"></div>
            <div className="h-8 w-24 bg-gray-200 rounded"></div>
            <div className="h-8 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>

      {/* Bottom FAQ block */}
      <section id="faq" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-semibold text-dark mb-6">Frequently Asked Questions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <dl>
              <dt className="font-medium mb-2">How long does a website project take?</dt>
              <dd className="text-muted mb-4">Starter sites: 1–2 weeks. Professional: 3–5 weeks. Business/eCommerce: 4–8 weeks depending on integrations.</dd>

              <dt className="font-medium mb-2">How much does a website cost?</dt>
              <dd className="text-muted mb-4">Prices vary by scope. Our Essential package starts from the equivalent of $399; exact quotes after a short audit.</dd>

              <dt className="font-medium mb-2">Do you provide hosting and maintenance?</dt>
              <dd className="text-muted mb-4">Yes — managed hosting, daily backups, SSL, and optional retainer support.</dd>
            </dl>

            <dl>
              <dt className="font-medium mb-2">How long for ERP integration?</dt>
              <dd className="text-muted mb-4">Pilot: 4–8 weeks. Full rollout: typically 3–9 months depending on scope and data migration complexity.</dd>

              <dt className="font-medium mb-2">Will integration disrupt operations?</dt>
              <dd className="text-muted mb-4">We use phased pilots and parallel runs to limit disruption and provide rollback plans during the transition.</dd>

              <dt className="font-medium mb-2">Do you work with NGOs and humanitarian organizations?</dt>
              <dd className="text-muted mb-4">Yes — our team has deep experience supporting NGOs, and we offer mission-aligned contract terms and support.</dd>
            </dl>
          </div>
        </div>
      </section>
    </>
  )
}
