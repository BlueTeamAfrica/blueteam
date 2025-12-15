import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import ServiceSidebar from '@/components/ServiceSidebar'
import PsyloLinks from '@/components/seo/PsyloLinks'
import { metadataMaintenance } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'

export const metadata = metadataMaintenance

export default function MaintenancePage() {
  return (
    <>
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

            {/* CTA Strip */}
            <section className="p-8 bg-primary text-white rounded-lg">
              <div className="text-center">
                <h2 className="text-2xl font-heading font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-primary-100 mb-6">Let's discuss your maintenance needs and get a free quote today.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://wa.me/256765508131"
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

      {/* Psylo Links for SEO */}
      <PsyloLinks />

</>
  )
}
