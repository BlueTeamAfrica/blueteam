import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio - Web Design & Development Projects',
  description: 'View our portfolio of web design and website design projects. Showcasing professional websites we\'ve created for businesses in Uganda, Kenya, and Rwanda.',
  keywords: ['web design website', 'website design website', 'portfolio', 'web design projects', 'website design examples', 'Uganda', 'Kenya', 'Rwanda'],
  openGraph: {
    title: 'Portfolio - Web Design & Development Projects | Blue Team Africa',
    description: 'View our portfolio of professional web design and development projects.',
  },
}

const portfolioItems = [
  {
    id: 'hydrolink-energy',
    title: 'HydroLink Energy',
    description: 'Full digital transformation for a renewable energy EPC serving Northern Uganda. We delivered a conversion-focused website plus an inbound lead engine.',
    services: ['Web Design', 'WordPress Development', 'Local SEO'],
    industry: 'Renewable Energy',
    location: 'Uganda',
    results: ['+140% inbound leads in 120 days', 'First-page ranking for “solar EPC Uganda”'],
    technologies: ['Next.js', 'Headless WordPress', 'HubSpot'],
  },
  {
    id: 'mara-finance',
    title: 'Mara Finance Group',
    description: 'Corporate site overhaul for a Pan-East African financial advisory. We created a bilingual experience tailored for Kenyan and Rwandan investors.',
    services: ['Experience Design', 'Content Strategy', 'Performance Optimization'],
    industry: 'Financial Services',
    location: 'Kenya & Rwanda',
    results: ['Bounce rate reduced by 52%', 'Average session duration up 2.1×'],
    technologies: ['Next.js', 'Sanity CMS', 'Vercel'],
  },
  {
    id: 'agri-track',
    title: 'AgriTrack SaaS Platform',
    description: 'Product design and engineering for a SaaS platform that helps cooperatives monitor crop yields across Eastern Africa.',
    services: ['Product Design', 'SaaS Development', 'API Integrations'],
    industry: 'AgriTech',
    location: 'Rwanda',
    results: ['Launched MVP in 8 weeks', '99.95% uptime across 3 regions'],
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'swiftline-logistics',
    title: 'SwiftLine Logistics',
    description: 'We built a digital experience for a Kenyan logistics scale-up, featuring real-time shipment tracking and a self-service client portal.',
    services: ['UX Research', 'Web App Development', 'Systems Integration'],
    industry: 'Logistics & Mobility',
    location: 'Kenya',
    results: ['Customer service tickets down 37%', 'Self-serve bookings up 3×'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Azure'],
  },
  {
    id: 'orbit-health',
    title: 'Orbit Health Network',
    description: 'Comprehensive cloud migration and hosting management for a regional healthcare network operating in Uganda and South Sudan.',
    services: ['Cloud Architecture', 'DevOps', 'Compliance & Security'],
    industry: 'Healthcare',
    location: 'Uganda',
    results: ['Infrastructure costs reduced 28%', 'HIPAA-aligned logging and alerting'],
    technologies: ['AWS', 'Terraform', 'Cloudflare'],
  },
  {
    id: 'talentbridge',
    title: 'TalentBridge Africa',
    description: 'Branding, web presence, and marketing site for a Nairobi-based HR-tech startup connecting Sudanese talent to East African companies.',
    services: ['Brand Identity', 'Marketing Site', 'Content Studio'],
    industry: 'HR Tech',
    location: 'Kenya & Remote',
    results: ['Secured Series A within 4 months', 'Newsletter list grew to 12k'],
    technologies: ['Next.js', 'Tailwind CSS', 'Contentful'],
  },
]

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl">
          Explore our portfolio of web design and website design projects. We've helped businesses 
          across Uganda, Kenya, and Rwanda establish strong online presences through professional 
          web design and development solutions.
        </p>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-white border border-gray-100 rounded-2xl shadow-soft p-8 flex flex-col gap-4 hover:-translate-y-1 transition">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="font-semibold text-blue-600">{item.industry}</span>
                <span>{item.location}</span>
              </div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500 mb-1">Services</p>
                <div className="flex flex-wrap gap-2">
                  {item.services.map((service) => (
                    <span key={service} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500 mb-1">Key Results</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {item.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">Stack:</span> {item.technologies.join(' • ')}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
                  Book a similar project →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Let's work together to create a professional web design or website design that 
            showcases your business and drives results.
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

