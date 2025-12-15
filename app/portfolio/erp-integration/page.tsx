import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import { metadataErpIntegration } from '@/lib/portfolio-metadata'
import PortfolioSchema from '@/components/PortfolioSchema'

export const metadata = metadataErpIntegration

export default function ERPIntegrationCaseStudy() {
  return (
    <>
      <PortfolioSchema projectName="ERP Integration" projectSlug="erp-integration" />
      <InteriorHeader
        title="Enterprise ERP Integration"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Enterprise ERP Integration' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Project Image */}
        <section className="mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/portfolio-preview-03.webp"
              alt="Enterprise ERP Integration"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            The Problem
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              A growing manufacturing company with operations across Uganda, Kenya, and Rwanda was 
              struggling with disconnected systems and manual processes. Each location maintained 
              separate inventory, sales, and financial records, making it impossible to get a unified 
              view of the business.
            </p>
            <p>
              The lack of integrated systems led to inventory discrepancies, delayed order processing, 
              and inefficient resource allocation. Management couldn't make informed decisions because 
              data was siloed and often outdated by the time it was consolidated.
            </p>
            <p>
              The company needed a centralized ERP system that could integrate existing systems, 
              streamline operations across all locations, and provide real-time visibility into 
              inventory, sales, production, and financial performance.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            Our Solution
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We designed and implemented a comprehensive ERP system that unified operations across 
              all three locations. The solution integrated inventory management, sales, production, 
              finance, and HR into a single platform accessible from anywhere.
            </p>
            <p>
              Key components include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Centralized inventory management with real-time tracking across locations</li>
              <li>Automated sales order processing and fulfillment workflows</li>
              <li>Production planning and scheduling modules</li>
              <li>Integrated financial management with multi-currency support</li>
              <li>HR management system for employee data and payroll</li>
              <li>Business intelligence dashboards for management reporting</li>
              <li>API integrations with existing third-party systems</li>
              <li>Mobile access for managers on the go</li>
            </ul>
            <p>
              The system was deployed with minimal disruption to operations, with comprehensive 
              training provided to staff at all levels. Data migration from legacy systems was 
              handled carefully to ensure accuracy and continuity.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            Results
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">60%</div>
              <p className="text-gray-700">Reduction in inventory discrepancies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <p className="text-gray-700">Faster order processing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">30%</div>
              <p className="text-gray-700">Cost savings in operations</p>
            </div>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The ERP integration has transformed how the company operates. Real-time visibility 
              across all locations has enabled better decision-making and resource allocation. 
              Inventory discrepancies have dropped by 60%, reducing waste and optimizing stock levels.
            </p>
            <p>
              Order processing is now 40% faster, with automated workflows eliminating manual bottlenecks. 
              The unified system has enabled the company to respond more quickly to market demands and 
              customer needs.
            </p>
            <p>
              Overall operational costs have decreased by 30% through improved efficiency and reduced 
              errors. The management team now has access to real-time dashboards showing key performance 
              indicators, enabling proactive decision-making and strategic planning.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-6">
            Let's discuss how we can help streamline your operations with an ERP solution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/256765508131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
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
    </>
  )
}

