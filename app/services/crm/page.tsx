import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { generateServiceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'CRM Implementation & Automation — Sales That Scale | Blue Team Africa',
  description: 'We configure lead capture, pipelines, and automations tied directly to your website and eCommerce. CRM implementation services for East Africa.',
  keywords: ['CRM implementation', 'CRM systems East Africa', 'sales automation', 'lead management'],
  openGraph: {
    title: 'CRM Implementation & Automation — Sales That Scale | Blue Team Africa',
    description: 'We configure lead capture, pipelines, and automations tied directly to your website.',
  },
}

export default function CRMPage() {
  const serviceSchema = generateServiceSchema(
    'CRM Implementation & Automation',
    'We configure lead capture, pipelines, and automations tied directly to your website and eCommerce. Sales that scale.',
    'Blue Team Africa',
    'https://blueteamafrica.com',
    'CRM',
    ['Uganda', 'Kenya', 'Rwanda', 'Sudan']
  )

  return (
    <>
      <JsonLd schema={serviceSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">CRM Implementation & Automation — Sales That Scale</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 mb-6">
              We configure lead capture, pipelines, and automations tied directly to your website and eCommerce. 
              Your sales team gets a single source of truth for all customer interactions.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">CRM Solutions</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>HubSpot CRM setup and configuration</li>
              <li>Custom Firestore CRM development</li>
              <li>Integration with existing systems</li>
              <li>Lead capture and scoring automation</li>
              <li>Sales pipeline management</li>
              <li>Email and communication integration</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <p className="text-gray-700 mb-4">
                Ready to scale your sales? Book a Growth Discovery Call to discuss your CRM needs.
              </p>
              <Link href="/contact?solution_interest=T2" className="btn-primary">
                Book a Growth Discovery Call
              </Link>
            </div>

            <p className="text-gray-700">
              <Link href="/solutions/growth" className="text-blue-600 hover:underline">
                Learn more about our Growth Solutions →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

