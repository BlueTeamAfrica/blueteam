import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import ServiceSidebar from '@/components/ServiceSidebar'
import { metadataHosting } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSection from '@/components/FAQSection'
import type { FAQ } from '@/lib/faqs'

const hostingFAQs: FAQ[] = [
  {
    question: 'What does your hosting service actually include?',
    answer: 'Our hosting packages cover server provisioning and configuration, SSL certificate setup and renewal, daily automated backups, uptime monitoring, CDN configuration for faster delivery across East Africa, and basic security hardening. We manage the infrastructure so your team does not need a sysadmin on staff.',
  },
  {
    question: 'Where are your servers located, and does that affect speed in East Africa?',
    answer: 'We use cloud infrastructure with regional options including providers with points of presence in Africa, which reduces latency for users in Uganda, Kenya, Rwanda, and Sudan compared to servers located exclusively in Europe or the US. For most projects we also configure a CDN layer so static assets are served from the nearest edge node regardless of origin server location.',
  },
  {
    question: 'What uptime guarantee do you offer?',
    answer: 'Our infrastructure targets 99.9% uptime. For production systems — particularly ERP platforms or e-commerce stores where downtime has direct operational or revenue impact — we can discuss higher-availability configurations with redundant infrastructure.',
  },
  {
    question: 'Can you host our existing website or system, not just ones you built?',
    answer: 'Yes. We migrate and host sites and applications we did not build, provided they run on a supported stack (typically Node.js, PHP, or Python-based applications). We assess compatibility during scoping and handle the migration with minimal downtime.',
  },
  {
    question: 'How do you handle security at the hosting level?',
    answer: 'Standard hardening includes firewall configuration, SSH key-only access, automated security patching, and encrypted backups stored off-server. For organizations with higher risk profiles — particularly NGOs handling sensitive beneficiary or field data — we can layer in additional monitoring through our cybersecurity service.',
  },
  {
    question: 'Is hosting bundled with other services or priced separately?',
    answer: 'Hosting is available as a standalone service or bundled with website development, ERP, or custom systems projects. Pricing depends on resource requirements — storage, traffic volume, number of domains, and whether a managed database is needed. Contact us for a quote once you know what you need to run.',
  },
]

function HostingFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: hostingFAQs.map((faq) => ({
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

export const metadata = metadataHosting

export default function HostingPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.blueteamafrica.com/' },
    { name: 'Services', url: 'https://www.blueteamafrica.com/services' },
    { name: 'Cloud & Web Hosting', url: 'https://www.blueteamafrica.com/services/hosting' },
  ]
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <HostingFAQSchema />
      <ServiceSchema serviceName="Hosting" serviceSlug="hosting" />
      <InteriorHeader
        title="Cloud & Web Hosting"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Hosting' }
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
                  src="/images/services/hosting/services-hosting-hero-01.webp"
                  alt="Cloud & Web Hosting"
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
                Your website's performance starts with reliable hosting. Blue Team Africa provides enterprise-grade 
                cloud hosting and domain services designed to keep your business online. With secure infrastructure, 
                automatic backups, and expert support, we ensure your digital presence stays accessible to your customers 
                around the clock. For organizations in Rwanda, we also offer comprehensive <Link href="/web-development-rwanda" className="text-primary hover:text-primary-dark hover:underline">web development services in Rwanda</Link> to build custom applications and scalable digital platforms.
              </p>
            </section>

            {/* 3 Value Pillars */}
            <section className="mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">99.9% Uptime</h3>
                  <p className="text-gray-600">
                    Our infrastructure is built for reliability, ensuring your website stays online 
                    when your customers need it most.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Fast</h3>
                  <p className="text-gray-600">
                    Enterprise-level security with SSL certificates and fast CDN integration to 
                    protect and accelerate your site.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
                  <p className="text-gray-600">
                    Our technical team is always available to help with any issues, ensuring 
                    peace of mind for your business.
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
                  <h3 className="font-semibold text-gray-900 mb-2">Local Expertise</h3>
                  <p>We understand the infrastructure needs of East African businesses and provide hosting optimized for regional connectivity.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
                  <p>Start small and grow as your business expands. Our hosting scales seamlessly with your traffic and storage needs.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Automatic Backups</h3>
                  <p>Regular automated backups ensure your data is safe and can be restored quickly in case of any issues.</p>
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
                <Link href="/services/cybersecurity" className="text-primary hover:text-primary-dark font-medium">
                  Cybersecurity →
                </Link>
                <Link href="/services/maintenance" className="text-primary hover:text-primary-dark font-medium">
                  IT Maintenance &amp; Support →
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">See our work</p>
                <Link href="/portfolio/cloud-migration" className="text-primary hover:text-primary-dark font-medium">
                  Case Study: Cloud Migration Project →
                </Link>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <FAQSection customFAQs={hostingFAQs} />
            </section>

            {/* CTA Strip */}
            <section className="p-8 bg-primary text-white rounded-lg">
              <div className="text-center">
                <h2 className="text-2xl font-heading font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-primary-100 mb-6">Let's discuss your hosting needs and get a free quote today.</p>
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
