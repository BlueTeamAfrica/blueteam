import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { generateServiceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Cybersecurity & Compliance — Protect Your Data and Reputation | Blue Team Africa',
  description: 'Pen-testing, secure cloud configuration, incident playbooks, and staff awareness training. Cybersecurity services for East African businesses.',
  keywords: ['cybersecurity', 'data security', 'penetration testing', 'compliance', 'security audit'],
  openGraph: {
    title: 'Cybersecurity & Compliance — Protect Your Data and Reputation | Blue Team Africa',
    description: 'Pen-testing, secure cloud configuration, incident playbooks, and staff awareness training.',
  },
}

export default function CybersecurityPage() {
  const serviceSchema = generateServiceSchema(
    'Cybersecurity & Compliance Services',
    'Pen-testing, secure cloud configuration, incident playbooks, and staff awareness training. Protect your data and reputation.',
    'Blue Team Africa',
    'https://blueteamafrica.com',
    'Cybersecurity',
    ['Uganda', 'Kenya', 'Rwanda', 'Sudan']
  )

  return (
    <>
      <JsonLd schema={serviceSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Cybersecurity & Compliance — Protect Your Data and Reputation</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 mb-6">
              Pen-testing, secure cloud configuration, incident playbooks, and staff awareness training. 
              We help East African businesses protect their data and maintain compliance.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Our Cybersecurity Services</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Security audits and penetration testing</li>
              <li>Secure cloud configuration and hardening</li>
              <li>Incident response playbooks and procedures</li>
              <li>Staff security awareness training</li>
              <li>Compliance documentation and certifications</li>
              <li>Ongoing security monitoring and support</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Security Measures</h2>
            <p className="text-gray-700 mb-4">
              We implement end-to-end encryption (at rest and in transit), role-based access control (RBAC), 
              regular security audits, penetration testing, verified backups, and incident response playbooks.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <p className="text-gray-700 mb-4">
                Concerned about your security posture? Book a systems audit to identify vulnerabilities and get a security action plan.
              </p>
              <Link href="/contact?solution_interest=T3" className="btn-primary">
                Book a Security Audit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

