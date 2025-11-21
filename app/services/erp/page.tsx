import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceSidebar from '@/components/ServiceSidebar'

export const metadata = {
  title: 'ERP Systems',
  description: 'Enterprise resource planning solutions that streamline operations and boost productivity for businesses in East Africa.',
}

export default function ERPPage() {
  return (
    <>
      <InteriorHeader
        title="ERP Systems"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'ERP' }
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
            {/* Intro Text Section */}
            <SectionWrapper bgColor="white">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Blue Team Africa, we implement powerful ERPNext and Frappe ERP systems that integrate 
                all aspects of your business operations. From inventory management to financial reporting, 
                our solutions provide real-time visibility and streamline workflows for organizations across East Africa.
              </p>
            </SectionWrapper>

            {/* 3 Value Pillars */}
            <SectionWrapper bgColor="light">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrated Operations</h3>
                  <p className="text-gray-600">
                    Connect all departments—finance, inventory, HR, and sales—into a single, unified 
                    system that provides real-time insights.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Customizable Workflows</h3>
                  <p className="text-gray-600">
                    Tailored to your business processes with customizable modules that adapt to your 
                    specific operational needs.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Reporting</h3>
                  <p className="text-gray-600">
                    Comprehensive dashboards and reports that give you instant visibility into your 
                    business performance and help you make data-driven decisions.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* Why Choose Blue Team Africa */}
            <SectionWrapper bgColor="white">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                Why Choose Blue Team Africa?
              </h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">ERPNext Specialists</h3>
                  <p>Our team has deep expertise in ERPNext and Frappe platforms, ensuring your system is implemented correctly and efficiently.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">NGO & Business Focus</h3>
                  <p>We understand the unique needs of NGOs and businesses in East Africa, from donor reporting to local compliance requirements.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                  <p>From implementation to training and ongoing maintenance, we're here to ensure your ERP system continues to serve your organization effectively.</p>
                </div>
              </div>
            </SectionWrapper>

            {/* Related Services */}
            <SectionWrapper bgColor="highlight">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Related Services</h2>
              <div className="flex flex-wrap gap-4">
                <Link href="/services/crm" className="text-primary hover:text-primary-dark font-medium">
                  CRM Solutions →
                </Link>
                <Link href="/services/mobile-apps" className="text-primary hover:text-primary-dark font-medium">
                  Mobile App Development →
                </Link>
                <Link href="/services/hosting" className="text-primary hover:text-primary-dark font-medium">
                  Cloud Hosting →
                </Link>
              </div>
            </SectionWrapper>

            {/* CTA Strip */}
            <section className="p-8 bg-primary text-white rounded-lg">
              <div className="text-center">
                <h2 className="text-2xl font-heading font-bold mb-4">Ready to Transform Your Operations?</h2>
                <p className="text-primary-100 mb-6">Let's discuss how an ERP system can streamline your business.</p>
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
