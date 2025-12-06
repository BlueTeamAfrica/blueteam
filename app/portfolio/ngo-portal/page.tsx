import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'

export const metadata = {
  title: 'NGO Management Portal - Case Study',
  description: 'Case study: Comprehensive platform for managing programs, beneficiaries, and donor relations.',
}

export default function NGOPortalCaseStudy() {
  return (
    <>
      <InteriorHeader
        title="NGO Management Portal"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'NGO Management Portal' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Project Image */}
        <section className="mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/portfolio-preview-01.webp"
              alt="NGO Management Portal"
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
              A regional NGO serving communities across East Africa was struggling with manual processes 
              for managing their programs, beneficiaries, and donor relationships. Information was scattered 
              across spreadsheets, emails, and paper files, making it difficult to track program progress, 
              report to donors, and coordinate efforts across multiple locations.
            </p>
            <p>
              The organization needed a centralized system to manage beneficiary data, program activities, 
              donor communications, and generate reports efficiently. The solution had to be accessible 
              to field staff in remote locations with limited internet connectivity, while also providing 
              comprehensive analytics for headquarters.
            </p>
            <p>
              Key challenges included data security, offline capability, multi-language support, and 
              integration with existing donor management systems.
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
              We developed a comprehensive web-based management portal with offline-first architecture, 
              allowing field staff to work without constant internet connectivity. The system includes 
              modules for beneficiary management, program tracking, donor relations, and automated reporting.
            </p>
            <p>
              Key features include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Centralized database with role-based access control for security</li>
              <li>Offline synchronization for field workers in remote locations</li>
              <li>Multi-language support (English, Swahili, local dialects)</li>
              <li>Automated donor reporting with customizable templates</li>
              <li>Mobile-responsive design accessible on tablets and smartphones</li>
              <li>Integration with email systems and donor management platforms</li>
              <li>Real-time dashboards showing program progress and key metrics</li>
            </ul>
            <p>
              The platform was built with modern web technologies, ensuring scalability and security 
              while remaining user-friendly for staff with varying technical skills.
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
              <div className="text-3xl font-bold text-primary mb-2">75%</div>
              <p className="text-gray-700">Reduction in administrative time</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">50%</div>
              <p className="text-gray-700">Faster donor reporting</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">3x</div>
              <p className="text-gray-700">More programs tracked efficiently</p>
            </div>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Since implementation, the NGO has experienced significant improvements in operational efficiency. 
              Administrative tasks that previously took days now take hours, allowing staff to focus more on 
              program delivery and community engagement.
            </p>
            <p>
              The automated reporting system has reduced the time needed to prepare donor reports by 50%, 
              and the real-time dashboards provide leadership with immediate insights into program performance 
              across all locations.
            </p>
            <p>
              Field staff can now manage beneficiary data and program activities even in areas with poor 
              connectivity, with automatic synchronization when internet becomes available. The system has 
              enabled the organization to expand their programs while maintaining quality data management 
              and reporting standards.
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
            Let's discuss how we can help your organization with a custom solution.
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

