import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Technology Solutions — Blue Team Africa',
  description: 'Explore our service tiers: Website design & hosting, Growth systems (eCommerce/CRM), and Enterprise integrations (ERP & managed cloud). Choose what fits your growth stage.',
  keywords: ['technology solutions East Africa', 'web design Uganda', 'ERP integration', 'CRM systems', 'managed cloud services'],
  openGraph: {
    title: 'Technology Solutions — Blue Team Africa',
    description: 'Explore our service tiers designed for your growth stage.',
  },
}

export default function SolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Technology Solutions Designed for East African Scale</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 mb-6">
            Blue Team organizes work into three tiers so you pay for what you need — and scale without disruption. 
            Choose fast, conversion-focused websites (T1), automation and CRM to grow sales (T2), or enterprise-grade 
            ERP integration and managed cloud to reduce operational risk (T3). Below are the typical deliverables, 
            timelines and business outcomes for each tier.
          </p>
        </div>

        {/* T1 - Foundational */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8 card-hover">
          <h2 className="text-3xl font-bold mb-4">T1 — Affordable, High-Performing Websites & Hosting</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold mb-2">Deliverables:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Responsive design</li>
                <li>CMS access</li>
                <li>Speed optimization</li>
                <li>Basic SEO</li>
                <li>Backups & SSL</li>
                <li>Local hosting options</li>
                <li>1-month maintenance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Timeline:</h3>
              <p className="text-gray-700 mb-4">1–4 weeks</p>
              <h3 className="font-semibold mb-2">Best For:</h3>
              <p className="text-gray-700">NGOs, startups, and SMEs getting online fast</p>
            </div>
          </div>
          <Link href="/solutions/foundational#packages" className="btn-primary">
            View Starter Packages
          </Link>
        </div>

        {/* T2 - Growth */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8 card-hover">
          <h2 className="text-3xl font-bold mb-4">T2 — eCommerce, CRM & Marketing Automation</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold mb-2">Deliverables:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Storefront & product pages</li>
                <li>Payment integration (including mobile money)</li>
                <li>CRM setup</li>
                <li>Email flows</li>
                <li>Analytics & reporting</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Timeline:</h3>
              <p className="text-gray-700 mb-4">4–8 weeks</p>
              <h3 className="font-semibold mb-2">Best For:</h3>
              <p className="text-gray-700">Businesses ready to scale revenue and automate sales</p>
            </div>
          </div>
          <Link href="/contact?solution_interest=T2" className="btn-primary">
            Book a Growth Discovery Call
          </Link>
        </div>

        {/* T3 - Enterprise */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8 card-hover">
          <h2 className="text-3xl font-bold mb-4">T3 — ERP Integration, Custom Software & Managed Cloud</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold mb-2">Deliverables:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Architecture design</li>
                <li>Middleware & connectors</li>
                <li>Data migration</li>
                <li>SLA-backed managed operations</li>
                <li>Training & documentation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Timeline:</h3>
              <p className="text-gray-700 mb-4">3–9 months (pilot first)</p>
              <h3 className="font-semibold mb-2">Best For:</h3>
              <p className="text-gray-700">Enterprises needing unified systems and operational efficiency</p>
            </div>
          </div>
          <Link href="/contact?solution_interest=T3" className="btn-primary">
            Book a Systems Audit
          </Link>
        </div>

        {/* Internal Links */}
        <div className="mt-12 bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Explore Detailed Solutions</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/solutions/foundational" className="text-blue-600 hover:underline font-semibold">
              Foundational Solutions →
            </Link>
            <Link href="/solutions/growth" className="text-blue-600 hover:underline font-semibold">
              Growth Solutions →
            </Link>
            <Link href="/solutions/enterprise" className="text-blue-600 hover:underline font-semibold">
              Enterprise Solutions →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

