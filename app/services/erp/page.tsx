import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { generateServiceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'ERP Integration Services — Unify Finance, Sales & Inventory | Blue Team Africa',
  description: 'Evaluate, design and implement ERP connectors and migrations with audit-backed pilots. ERP integration services for East African enterprises.',
  keywords: ['ERP integration', 'ERP services Uganda', 'system integration', 'enterprise solutions'],
  openGraph: {
    title: 'ERP Integration Services — Unify Finance, Sales & Inventory | Blue Team Africa',
    description: 'Evaluate, design and implement ERP connectors and migrations.',
  },
}

export default function ERPPage() {
  const serviceSchema = generateServiceSchema(
    'ERP Integration Services',
    'Evaluate, design and implement ERP connectors and migrations with audit-backed pilots. Unify finance, sales, and inventory systems.',
    'Blue Team Africa',
    'https://blueteamafrica.com',
    'ERP Integration',
    ['Uganda', 'Kenya', 'Rwanda', 'Sudan']
  )

  return (
    <>
      <JsonLd schema={serviceSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">ERP Integration Services — Unify Finance, Sales & Inventory</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 mb-6">
              Evaluate, design and implement ERP connectors and migrations with audit-backed pilots. 
              We help East African enterprises unify fragmented systems into a single source of truth.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Our ERP Integration Approach</h2>
            <p className="text-gray-700 mb-4">
              We map business workflows and data domains — customers, orders, inventory, and finance. 
              Our architects design data contracts and implement reliable connectors (API-first or ETL) 
              so your ERP and CRM share a single source of truth.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Supported ERPs</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Odoo</li>
              <li>MS Dynamics</li>
              <li>Selected SAP modules</li>
              <li>Custom ERPs</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <p className="text-gray-700 mb-4">
                Ready to unify your systems? Book a free 30-minute systems audit to get started.
              </p>
              <Link href="/contact?solution_interest=T3" className="btn-primary">
                Book a Systems Audit
              </Link>
            </div>

            <p className="text-gray-700">
              <Link href="/solutions/enterprise" className="text-blue-600 hover:underline">
                Learn more about our Enterprise Solutions →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

