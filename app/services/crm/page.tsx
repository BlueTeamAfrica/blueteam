import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import ServiceSidebar from '@/components/ServiceSidebar'

export const metadata = {
  title: 'CRM Solutions',
  description: 'Customer relationship management systems to automate sales, track leads, and grow your business in East Africa.',
}

export default function CRMPage() {
  return (
    <>
      <InteriorHeader
        title="CRM Solutions"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'CRM Solutions' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <ServiceSidebar />
            </div>
          </aside>
          
          <div className="lg:w-3/4 flex-grow">
            {/* Hero Image */}
            <section className="mb-12">
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/images/services/crm/5.webp"
                  alt="CRM Solutions"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </section>

            {/* Intro */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Customer Relationship Management (CRM) systems help you manage interactions with current and 
                potential customers more effectively. Blue Team Africa develops custom CRM solutions that automate 
                sales processes, track customer interactions, and provide insights to improve customer satisfaction 
                and drive revenue growth.
              </p>
            </section>

            {/* 3 Value Pillars */}
            <section className="mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Lead Management</h3>
                  <p className="text-gray-600">
                    Track and manage leads through the entire sales funnel, from initial 
                    contact to closed deals, with automated workflows.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Insights</h3>
                  <p className="text-gray-600">
                    Centralized customer data provides a 360-degree view of each client, 
                    helping you personalize interactions and improve satisfaction.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Sales Automation</h3>
                  <p className="text-gray-600">
                    Automate repetitive tasks, follow-ups, and reporting to free up your 
                    sales team to focus on building relationships and closing deals.
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
                  <h3 className="font-semibold text-gray-900 mb-2">Sales-Focused Design</h3>
                  <p>Our CRM systems are built by sales professionals for sales teams, ensuring features that actually improve productivity.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Mobile Access</h3>
                  <p>Access your CRM from anywhere with mobile-optimized interfaces that let your team manage relationships on the go.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Integration Ready</h3>
                  <p>Seamlessly connect with your existing tools including email, calendar, and accounting software for a unified workflow.</p>
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
                <Link href="/services/web-design" className="text-primary hover:text-primary-dark font-medium">
                  Web Design →
                </Link>
                <Link href="/services/custom-systems" className="text-primary hover:text-primary-dark font-medium">
                  Custom Software Development →
                </Link>
              </div>
            </section>

            {/* CTA Strip */}
            <section className="p-8 bg-primary text-white rounded-lg">
              <div className="text-center">
                <h2 className="text-2xl font-heading font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-primary-100 mb-6">Let's discuss your CRM needs and get a free quote today.</p>
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
    </>
  )
}
