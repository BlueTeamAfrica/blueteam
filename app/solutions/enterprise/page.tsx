import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { generateServiceSchema, FAQPageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'ERP Integration & Managed Cloud Services — East Africa | Blue Team Africa',
  description: 'ERP, CRM and system integration for East African enterprises. Reduce operational costs and automate reconciliation. Book a free systems audit.',
  keywords: ['ERP integration East Africa', 'managed cloud services Uganda', 'system integration Uganda', 'enterprise solutions'],
  openGraph: {
    title: 'ERP Integration & Managed Cloud Services — East Africa | Blue Team Africa',
    description: 'ERP, CRM and system integration for East African enterprises.',
  },
}

export default function EnterprisePage() {
  const serviceSchema = generateServiceSchema(
    'ERP Integration & Managed Cloud Services',
    'ERP, CRM and system integration for East African enterprises. Reduce operational costs and automate reconciliation.',
    'Blue Team Africa',
    'https://blueteamafrica.com',
    'ERP Integration',
    ['Uganda', 'Kenya', 'Rwanda', 'Sudan']
  )

  const faqSchema: FAQPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does an ERP integration take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pilot phase typically takes 4–8 weeks, with full rollout taking 3–9 months depending on complexity and scope.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which ERPs do you support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support Odoo, MS Dynamics, selected SAP modules, and custom ERPs. We can work with most modern ERP systems that have API access.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will integration disrupt our operations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use phased pilots and parallel runs to minimize disruption. We work closely with your team to ensure smooth transitions.',
        },
      },
    ],
  }

  return (
    <>
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={faqSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Stop Building Websites. Start Integrating Systems.</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 mb-6">
              Blue Team Africa helps East African enterprises move from fragmented, manual processes to unified 
              cloud-based systems that deliver measurable business outcomes. Our work begins with strong digital 
              foundations — fast websites and secure hosting — and scales into ERP/CRM integrations, managed cloud 
              operations, and custom modules that automate reconciliation and reporting. Start with a free 30-minute 
              systems audit and get a prioritized action plan you can pilot within weeks.
            </p>

            <div className="bg-blue-600 text-white p-6 rounded-lg mb-8 text-center">
              <Link href="/contact?solution_interest=T3" className="btn-primary bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 inline-block">
                Book a Free 30-Minute Systems Audit
              </Link>
            </div>

            <h2 className="text-3xl font-semibold mt-8 mb-4">ERP / CRM Integration</h2>
            <p className="text-gray-700 mb-4">
              We map business workflows and data domains — customers, orders, inventory, and finance. Our architects 
              design data contracts and implement reliable connectors (API-first or ETL) so your ERP and CRM share a 
              single source of truth. Deliverables include a data mapping document, connector code, validation reports 
              and an automated reconciliation dashboard.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Business process mapping and workflow analysis</li>
              <li>Data architecture design and documentation</li>
              <li>API-first or ETL connector implementation</li>
              <li>Data validation and reconciliation automation</li>
              <li>Real-time sync and error handling</li>
              <li>Integration testing and validation</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Managed Cloud Services</h2>
            <p className="text-gray-700 mb-4">
              We provide backups, patch management, monitoring, role-based access, and documented SLAs. We recommend 
              cloud architectures that meet data residency needs and run daily operational checks to prevent drift.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Automated backups and disaster recovery</li>
              <li>Security patch management and updates</li>
              <li>24/7 monitoring and alerting</li>
              <li>Role-based access control (RBAC)</li>
              <li>Documented SLAs and incident response</li>
              <li>Quarterly performance reviews</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Custom Solutions Development</h2>
            <p className="text-gray-700 mb-4">
              We build targeted modules — reconciliation scripts, mobile data capture apps, reporting pipelines — to 
              solve specific operational problems.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Custom reconciliation and reporting tools</li>
              <li>Mobile data capture applications</li>
              <li>Automated workflow scripts</li>
              <li>Data pipeline and ETL solutions</li>
              <li>Custom dashboards and analytics</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Engagement Flow</h2>
            <ol className="list-decimal pl-6 text-gray-700 space-y-4 mb-6">
              <li>
                <strong>Discovery & Audit (Free, 30 min)</strong> — pre-call checklist and systems review. 
                We identify pain points and prioritize quick wins.
              </li>
              <li>
                <strong>Pilot (4–8 weeks)</strong> — small high-value connector and measurable KPIs. 
                Prove value before full commitment.
              </li>
              <li>
                <strong>Full Rollout (3–9 months)</strong> — migrations, training, and stabilization. 
                Phased approach to minimize risk.
              </li>
              <li>
                <strong>Managed Ops</strong> — ongoing monitoring, incident response and quarterly reviews. 
                Continuous improvement and support.
              </li>
            </ol>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Security & Compliance</h2>
            <p className="text-gray-700 mb-4">
              We encrypt data at rest and in transit, implement RBAC, maintain verified backups, and provide incident 
              playbooks. Optional hybrid/on-prem solutions available for procurement-driven clients.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>End-to-end encryption (at rest and in transit)</li>
              <li>Role-based access control and audit logs</li>
              <li>Regular security audits and penetration testing</li>
              <li>Compliance documentation and certifications</li>
              <li>Incident response playbooks and procedures</li>
              <li>Hybrid and on-premise deployment options</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Frequently Asked Questions</h2>
            <dl className="space-y-6 mb-8">
              <div>
                <dt className="font-semibold text-lg mb-2">How long does an ERP integration take?</dt>
                <dd className="text-gray-700">
                  Pilot phase typically takes 4–8 weeks, with full rollout taking 3–9 months depending on complexity 
                  and scope. We start with a small, high-value pilot to prove value before full commitment.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-lg mb-2">Which ERPs do you support?</dt>
                <dd className="text-gray-700">
                  We support Odoo, MS Dynamics, selected SAP modules, and custom ERPs. We can work with most modern 
                  ERP systems that have API access. Contact us to discuss your specific ERP requirements.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-lg mb-2">Will integration disrupt our operations?</dt>
                <dd className="text-gray-700">
                  We use phased pilots and parallel runs to minimize disruption. We work closely with your team to 
                  ensure smooth transitions and maintain business continuity throughout the integration process.
                </dd>
              </div>
            </dl>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Unify Your Systems?</h3>
              <p className="text-gray-700 mb-4">
                Book a free 30-minute systems audit and get a prioritized action plan you can pilot within weeks.
              </p>
              <Link href="/contact?solution_interest=T3" className="btn-primary">
                Book a Free 30-Minute Systems Audit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

