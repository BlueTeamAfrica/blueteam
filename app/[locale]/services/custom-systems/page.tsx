import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import ServiceSidebar from '@/components/ServiceSidebar'
import type { Metadata } from 'next'
import { metadataCustomSystems } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSection from '@/components/FAQSection'
import type { FAQ } from '@/lib/faqs'

const customSystemsFAQs: FAQ[] = [
  {
    question: 'What counts as a "custom system" — how is it different from a website or an ERP?',
    answer: 'A custom system is purpose-built software that does not map neatly to a standard product. Examples we have built: internal staff management dashboards, beneficiary registration and tracking databases, procurement approval portals, field data collection tools, and reporting systems that pull from multiple data sources. If off-the-shelf software does not fit how you work, a custom system likely does.',
  },
  {
    question: 'How do you scope a custom development project?',
    answer: 'We start with a requirements workshop where we map your current process — what data flows in, what decisions get made, what outputs you need. From that we produce a functional specification and a fixed scope before any development begins. This prevents scope creep and gives you a clear cost and timeline before committing.',
  },
  {
    question: 'Can a custom system integrate with our existing tools — ERP, mobile app, website?',
    answer: 'Yes, and this is often the point. We build custom systems with open APIs so they can exchange data with ERPNext, mobile apps we develop, your website, or third-party tools like Google Workspace or payment gateways. We have built systems that sit as a coordination layer across several existing platforms.',
  },
  {
    question: 'Who owns the code when the project is complete?',
    answer: 'You do, entirely. We hand over the full source code, deployment configuration, and technical documentation. We do not retain licensing rights over anything we build for you.',
  },
  {
    question: 'How long does custom software development take?',
    answer: 'Scope determines timeline. Focused internal tools — a dashboard, a single-process workflow app — typically take six to ten weeks. Larger systems with multiple user roles, complex data models, or third-party integrations run twelve to twenty weeks. We provide a firm estimate after the requirements workshop.',
  },
  {
    question: 'Do you provide training and ongoing maintenance after delivery?',
    answer: 'Yes. Handover includes documentation and at minimum one training session for administrators and end users. We offer ongoing maintenance contracts for bug fixes, feature additions, and server management — particularly important for systems handling live operational data.',
  },
]

function CustomSystemsFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: customSystemsFAQs.map((faq) => ({
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
  const canonical = `https://www.blueteamafrica.com${lp}/services/custom-systems`
  return {
    ...metadataCustomSystems,
    alternates: { canonical },
  }
}

export default function CustomSystemsPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.blueteamafrica.com/' },
    { name: 'Services', url: 'https://www.blueteamafrica.com/services' },
    { name: 'Custom Software Development', url: 'https://www.blueteamafrica.com/services/custom-systems' },
  ]
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <CustomSystemsFAQSchema />
      <ServiceSchema serviceName="Custom Systems" serviceSlug="custom-systems" />
      <InteriorHeader
        title="Custom Software Development"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Custom Systems' }
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
                  src="/images/services/custom-systems/services-customsystems-custom-systems-hero-01.webp"
                  alt="Custom Software Development"
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
                Off-the-shelf software often doesn't fit your unique business processes. Blue Team Africa develops 
                custom software solutions tailored to your specific requirements. From internal tools and dashboards 
                to complex enterprise applications, we build software that works the way your business works, 
                improving efficiency and enabling growth.
              </p>
            </section>

            {/* 3 Value Pillars */}
            <section className="mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Tailored Solutions</h3>
                  <p className="text-gray-600">
                    Software designed around your workflows and business processes, 
                    not the other way around.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Architecture</h3>
                  <p className="text-gray-600">
                    Built with modern technologies that grow with your business, 
                    from startups to enterprise scale.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Ownership</h3>
                  <p className="text-gray-600">
                    You own the code and intellectual property, giving you complete 
                    control over your software.
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
                  <h3 className="font-semibold text-gray-900 mb-2">Deep Understanding</h3>
                  <p>We take time to understand your business, processes, and goals before writing a single line of code.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Agile Development</h3>
                  <p>Iterative development with regular demos ensures the software evolves to match your exact needs.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Long-Term Partnership</h3>
                  <p>We provide ongoing support, updates, and enhancements to keep your custom software relevant and useful.</p>
                </div>
              </div>
            </section>

            {/* Related Services */}
            <section className="mb-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Related Services</h2>
              <div className="flex flex-wrap gap-4">
                <Link href="/services/erp" className="text-primary hover:text-primary-dark font-medium">
                  ERP Systems →
                </Link>
                <Link href="/services/crm" className="text-primary hover:text-primary-dark font-medium">
                  CRM Solutions →
                </Link>
                <Link href="/services/mobile-apps" className="text-primary hover:text-primary-dark font-medium">
                  Mobile App Development →
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">See our work</p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/portfolio/ngo-portal" className="text-primary hover:text-primary-dark font-medium">
                    Case Study: NGO Management Portal →
                  </Link>
                  <Link href="/portfolio/crm-system" className="text-primary hover:text-primary-dark font-medium">
                    Case Study: Sales CRM Platform →
                  </Link>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <FAQSection customFAQs={customSystemsFAQs} />
            </section>

            {/* CTA Strip */}
            <section className="p-8 bg-primary text-white rounded-lg">
              <div className="text-center">
                <h2 className="text-2xl font-heading font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-primary-100 mb-6">Let's discuss your custom software needs and get a free quote today.</p>
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
