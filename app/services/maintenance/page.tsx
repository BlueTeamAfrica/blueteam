import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import ServiceSidebar from '@/components/ServiceSidebar'
import { metadataMaintenance } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSection from '@/components/FAQSection'
import type { FAQ } from '@/lib/faqs'

const maintenanceFAQs: FAQ[] = [
  {
    question: 'What does an IT maintenance plan cover?',
    answer: 'Depending on the plan tier: CMS and plugin/framework updates, security patch application, uptime monitoring with alerts, monthly backup verification, performance checks, and a set number of content or minor configuration changes per month. We document everything applied so you have a clear audit trail.',
  },
  {
    question: 'How quickly do you respond to a reported issue?',
    answer: 'Response times depend on your support tier, with priority plans responding faster to critical issues than standard plans — exact response-time commitments are confirmed in your support agreement. All active maintenance clients have a direct contact channel — WhatsApp or email — rather than a generic ticket queue.',
  },
  {
    question: 'Do you do proactive monitoring, or only respond when something breaks?',
    answer: 'Both. Proactive monitoring is a core part of what separates a maintenance plan from ad-hoc support. We run continuous uptime checks, receive alerts before users notice an outage, and apply security patches on a scheduled basis rather than waiting for a vulnerability to be exploited.',
  },
  {
    question: 'Can you maintain a system your team did not build?',
    answer: 'Yes, with an onboarding audit first. We assess the codebase, server configuration, and dependency state before taking on maintenance responsibility. If there are outstanding security issues or outdated dependencies, we flag these and resolve them as part of the onboarding scope.',
  },
  {
    question: 'Is maintenance available for ERP systems, not just websites?',
    answer: 'Yes. We maintain ERPNext installations, custom applications, mobile app backends, and websites. Organizations running multiple systems we built often consolidate under a single maintenance agreement that covers all of them.',
  },
  {
    question: 'What happens if our site or system is hacked or goes down outside business hours?',
    answer: 'Priority maintenance plans include emergency response outside standard hours. For organizations with critical operational systems — particularly NGOs with live field operations — we recommend confirming emergency coverage during onboarding. We also recommend pairing maintenance with our cybersecurity monitoring for early threat detection.',
  },
]

function MaintenanceFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: maintenanceFAQs.map((faq) => ({
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

export const metadata = metadataMaintenance

export default function MaintenancePage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.blueteamafrica.com/' },
    { name: 'Services', url: 'https://www.blueteamafrica.com/services' },
    { name: 'IT Maintenance & Support', url: 'https://www.blueteamafrica.com/services/maintenance' },
  ]
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <MaintenanceFAQSchema />
      <ServiceSchema serviceName="Maintenance" serviceSlug="maintenance" />
      <InteriorHeader
        title="IT Maintenance & Support"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Maintenance' }
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
                  src="/images/services/maintenance/services-maintenance-hero-01.webp"
                  alt="IT Maintenance & Support"
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
                Technology needs ongoing care to perform at its best. Blue Team Africa provides comprehensive IT 
                maintenance and support services to keep your systems updated, secure, and running efficiently. 
                From routine updates and monitoring to troubleshooting and emergency support, we ensure your 
                technology infrastructure supports your business goals without interruption.
              </p>
            </section>

            {/* 3 Value Pillars */}
            <section className="mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Proactive Monitoring</h3>
                  <p className="text-gray-600">
                    24/7 system monitoring detects issues before they impact your business, 
                    allowing for quick resolution and minimal downtime.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Updates</h3>
                  <p className="text-gray-600">
                    Keep software, security patches, and systems current with scheduled 
                    updates that maintain performance and security.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Response</h3>
                  <p className="text-gray-600">
                    Fast response times for technical issues with priority support for 
                    critical problems that affect your operations.
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
                  <h3 className="font-semibold text-gray-900 mb-2">Preventive Maintenance</h3>
                  <p>Regular check-ups and optimizations prevent problems before they occur, saving you time and money in the long run.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Experienced Technicians</h3>
                  <p>Our support team has deep technical knowledge and can quickly diagnose and resolve issues across various platforms.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Flexible Support Plans</h3>
                  <p>Choose from various support packages that match your needs and budget, from basic maintenance to comprehensive managed services.</p>
                </div>
              </div>
            </section>

            {/* Related Services */}
            <section className="mb-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Related Services</h2>
              <div className="flex flex-wrap gap-4">
                <Link href="/services/hosting" className="text-primary hover:text-primary-dark font-medium">
                  Cloud & Web Hosting →
                </Link>
                <Link href="/services/cybersecurity" className="text-primary hover:text-primary-dark font-medium">
                  Cybersecurity →
                </Link>
                <Link href="/services/web-design" className="text-primary hover:text-primary-dark font-medium">
                  Web Design →
                </Link>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <FAQSection customFAQs={maintenanceFAQs} />
            </section>

            {/* CTA Strip */}
            <section className="p-8 bg-primary text-white rounded-lg">
              <div className="text-center">
                <h2 className="text-2xl font-heading font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-primary-100 mb-6">Let's discuss your maintenance needs and get a free quote today.</p>
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
