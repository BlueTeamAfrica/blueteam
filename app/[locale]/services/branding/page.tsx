import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import ServiceSidebar from '@/components/ServiceSidebar'
import type { Metadata } from 'next'
import { metadataBranding } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSection from '@/components/FAQSection'
import type { FAQ } from '@/lib/faqs'

const brandingFAQs: FAQ[] = [
  {
    question: 'What does a branding package from Blue Team Africa include?',
    answer: 'A full branding engagement covers logo design (primary, secondary, and icon variants), a colour palette, typography selection, and a brand guidelines document. The guidelines specify how to apply all elements consistently across digital touchpoints — website, social profiles, email — and print materials like business cards and reports.',
  },
  {
    question: 'How is your logo design process different from using an online generator?',
    answer: 'We start with a discovery session to understand your business, audience, and market position before a single line is drawn. Every mark is custom-built to carry meaning specific to your organization. You also receive source files (AI/SVG) with full ownership, not a locked template you cannot edit or scale.',
  },
  {
    question: 'Do you understand East African brand aesthetics and market expectations?',
    answer: 'Yes — our team has designed brands for NGOs, startups, and SMEs across Sudan, Uganda, Kenya, and Rwanda. We understand how visual language varies across these markets and can create a brand that resonates locally while holding up against international standards.',
  },
  {
    question: 'Can the brand identity be applied to my website after branding is complete?',
    answer: 'Absolutely. Branding and web design work best as a unified project. Once your visual identity is defined, we apply it directly to your website through our web design and UI/UX services, ensuring complete visual consistency across every screen.',
  },
  {
    question: 'What file formats will I receive, and do I own them?',
    answer: 'You receive the complete working file set — SVG and AI vector source files, PNG exports at multiple resolutions, and a PDF brand guidelines document. All assets are yours outright; we do not retain licensing over your brand identity.',
  },
  {
    question: 'How long does a branding project take?',
    answer: 'Most branding projects complete in two to four weeks, depending on revision rounds and feedback turnaround. Projects that include brand guidelines alongside the logo add roughly one additional week. Timeline is confirmed at kickoff once the scope is clear.',
  },
]

function BrandingFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: brandingFAQs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const lp = locale === 'en' ? '' : `/${locale}`
  const canonical = `https://www.blueteamafrica.com${lp}/services/branding`
  return {
    ...metadataBranding,
    alternates: { canonical },
  }
}

export default function BrandingPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.blueteamafrica.com/' },
    { name: 'Services', url: 'https://www.blueteamafrica.com/services' },
    { name: 'Branding & Logo Design', url: 'https://www.blueteamafrica.com/services/branding' },
  ]
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <BrandingFAQSchema />
      <ServiceSchema serviceName="Branding" serviceSlug="branding" />
      <InteriorHeader
        title="Branding & Logo Design"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Branding' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block lg:w-1/4 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <ServiceSidebar />
            </div>
          </aside>
          
          <div className="lg:w-3/4 flex-grow">
            {/* Hero Image */}
            <section className="mb-12">
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/services/branding/services-branding-hero-01.webp"
                  alt="Branding & Logo Design"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </section>

            {/* Intro */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Your brand is more than just a logo—it's the visual and emotional connection customers have with your business. 
                Blue Team Africa creates comprehensive brand identities including logo design, color palettes, typography, and 
                brand guidelines. We help businesses across East Africa establish a cohesive, professional brand that stands out 
                and builds trust.
              </p>
            </section>

            {/* 3 Value Pillars */}
            <section className="mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Logo Design</h3>
                  <p className="text-gray-600">
                    Unique, memorable logos that capture your brand essence and 
                    work across all platforms and applications.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand Guidelines</h3>
                  <p className="text-gray-600">
                    Comprehensive style guides ensure consistent brand application 
                    across all marketing materials and touchpoints.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Identity</h3>
                  <p className="text-gray-600">
                    Complete visual systems including color palettes, typography, 
                    and design elements that define your brand.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Blue Team Africa */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                Why Choose Blue Team Africa?
              </h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Strategic Approach</h3>
                  <p>We start with understanding your business, audience, and market to create brands that truly represent who you are.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cultural Understanding</h3>
                  <p>Our team understands East African markets and creates brands that resonate with local audiences while maintaining global appeal.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Versatile Assets</h3>
                  <p>Your brand identity works seamlessly across digital and print, from websites to business cards and everything in between.</p>
                </div>
              </div>
            </section>

            {/* Related Services */}
            <section className="mb-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Related Services</h2>
              <div className="flex flex-wrap gap-4">
                <Link href="/services/web-design" className="text-primary hover:text-primary-dark font-medium">
                  Web Design →
                </Link>
                <Link href="/services/ui-ux" className="text-primary hover:text-primary-dark font-medium">
                  UI/UX Design →
                </Link>
                <Link href="/services/ecommerce" className="text-primary hover:text-primary-dark font-medium">
                  E-commerce Development →
                </Link>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <FAQSection customFAQs={brandingFAQs} />
            </section>

            {/* CTA Strip */}
            <section className="p-8 bg-primary text-white rounded-lg">
              <div className="text-center">
                <h2 className="text-2xl font-heading font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-primary-100 mb-6">Let's discuss your branding needs and get a free quote today.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://wa.me/254119402737"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    Get a Quote
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    
      
      {/* Our Services - Mobile Only (Bottom) */}
      <div className="block lg:hidden max-w-7xl mx-auto px-6 pb-12">
        <ServiceSidebar />
      </div>


</>
  )
}
