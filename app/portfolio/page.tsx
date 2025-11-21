import Link from 'next/link'
import Image from 'next/image'
import InteriorPageLayout from '@/components/InteriorPageLayout'
import SectionWrapper from '@/components/SectionWrapper'

export const metadata = {
  title: 'Portfolio',
  description: 'Explore our portfolio of successful projects - web design, mobile apps, ERP systems, and more for clients across East Africa.',
}

const portfolioItems = [
  {
    id: 'cslo-sudan',
    title: 'ERP & CRM for CSLO Sudan',
    description: 'Full ERPNext and Frappe CRM implementation with mobile field reporting for humanitarian operations in Sudan',
    category: 'ERP Systems',
    image: '/images/portfolio/cslo-sudan/portfolio-project-cslo-erp-system-v01.webp',
  },
  {
    id: 'ngo-portal',
    title: 'NGO Management Portal',
    description: 'Comprehensive platform for managing programs, beneficiaries, and donor relations',
    category: 'Web Development',
    image: '/images/portfolio/portfolio-project-preview-i-v01.webp',
  },
  {
    id: 'erp-integration',
    title: 'Enterprise ERP Integration',
    description: 'Custom ERP system integration for manufacturing company across multiple locations',
    category: 'ERP Systems',
    image: '/images/portfolio/portfolio-project-preview-q-v01.webp',
  },
  {
    id: 'ecommerce-shop',
    title: 'E-commerce Platform',
    description: 'Full-featured online store with mobile money integration and inventory management',
    category: 'E-commerce',
    image: '/images/portfolio/portfolio-project-preview-t-v01.webp',
  },
  {
    id: 'mobile-app',
    title: 'Healthcare Mobile App',
    description: 'Native mobile application for patient records and appointment scheduling',
    category: 'Mobile App',
    image: '/images/portfolio/portfolio-project-preview-u-v01.webp',
  },
  {
    id: 'crm-system',
    title: 'Sales CRM Platform',
    description: 'Customer relationship management system with automated workflows and analytics',
    category: 'CRM Solutions',
    image: '/images/portfolio/portfolio-project-preview-v-v01.webp',
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration Project',
    description: 'Complete infrastructure migration to cloud with zero downtime',
    category: 'Cloud Hosting',
    image: '/images/portfolio/portfolio-project-preview-i-v01.webp',
  },
]

export default function PortfolioPage() {
  return (
    <InteriorPageLayout
      title="Our Portfolio"
      subtitle="Success stories from clients across East Africa"
    >
      {/* Portfolio Grid */}
      <SectionWrapper bgColor="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.id}`}
              className="group block bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wide text-primary font-semibold">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  View Case Study
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bgColor="light">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-700 mb-6">
            Let's discuss how we can help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
          >
            Get Started
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </SectionWrapper>
    </InteriorPageLayout>
  )
}

