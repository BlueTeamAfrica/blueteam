import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'ERP Systems',
  description: 'Enterprise resource planning solutions that streamline operations and boost productivity for businesses in East Africa.',
}

export default function ERPPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            ERP Systems
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Streamline operations and boost productivity with integrated ERP solutions
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Enterprise Resource Planning (ERP) systems integrate all your business processes into a single, 
            unified platform. Blue Team Africa designs and implements custom ERP solutions that streamline 
            inventory, finance, HR, and operations management. Our ERP systems provide real-time insights 
            to help you make better decisions and grow your business efficiently.
          </p>
        </div>
      </section>

      {/* 3 Value Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrated Workflows</h3>
              <p className="text-gray-600">
                Connect all departments and processes in one system, eliminating 
                data silos and improving collaboration across your organization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Analytics</h3>
              <p className="text-gray-600">
                Access comprehensive dashboards and reports that give you instant 
                visibility into your business performance and key metrics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Growth</h3>
              <p className="text-gray-600">
                Built to grow with your business, from small operations to large 
                enterprises with expanding needs and complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Blue Team Africa */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
            Why Choose Blue Team Africa?
          </h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Industry Expertise</h3>
              <p>We understand the unique operational challenges of East African businesses and design ERP solutions tailored to local requirements.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Custom Implementation</h3>
              <p>Every business is unique. We customize ERP systems to match your specific workflows and business processes.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Training & Support</h3>
              <p>Comprehensive training ensures your team can use the system effectively, with ongoing support for smooth operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Related Services</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/crm" className="text-primary hover:text-primary-dark font-medium">
              CRM Solutions →
            </Link>
            <Link href="/custom-systems" className="text-primary hover:text-primary-dark font-medium">
              Custom Software Development →
            </Link>
            <Link href="/maintenance" className="text-primary hover:text-primary-dark font-medium">
              IT Maintenance & Support →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-primary-100 mb-6">Let's discuss your ERP needs and get a free quote today.</p>
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
  )
}

