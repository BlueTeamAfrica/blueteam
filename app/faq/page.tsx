import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { FAQPageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | Blue Team Africa',
  description: 'Frequently asked questions about web design, hosting, ERP integration, CRM, and our services in Uganda, Kenya, Rwanda, and Sudan. Get answers to common questions.',
  keywords: ['web design FAQ', 'website design FAQ', 'ERP integration FAQ', 'hosting FAQ', 'Uganda', 'Kenya', 'Rwanda', 'Sudan'],
  openGraph: {
    title: 'FAQ - Frequently Asked Questions | Blue Team Africa',
    description: 'Get answers to common questions about our services.',
  },
}

interface FAQ {
  question: string
  answer: string
  category?: 'T1' | 'T2' | 'T3' | 'All'
}

const faqs: FAQ[] = [
  {
    question: 'How long does a website project take?',
    answer: 'Website projects typically take 1–6 weeks depending on scope. Starter packages (1–3 pages) take 1–2 weeks, Professional packages (5–10 pages) take 2–4 weeks, and Business packages with eCommerce take 3–6 weeks. We work closely with you throughout the process to ensure timely delivery.',
    category: 'T1',
  },
  {
    question: 'How much does a website cost?',
    answer: 'Website costs vary by package. Starter packages begin at affordable rates for small businesses, Professional packages offer comprehensive features, and Business packages include eCommerce functionality. Contact us for a free quote tailored to your specific needs. We provide transparent pricing for all our website design services.',
    category: 'T1',
  },
  {
    question: 'Do you provide hosting and maintenance?',
    answer: 'Yes, we provide reliable hosting with SSL, daily backups, and monitoring. All packages include maintenance periods (1–3 months depending on package). We offer managed WordPress hosting or Vercel hosting for Next.js sites, with 99.9% uptime guarantees.',
    category: 'T1',
  },
  {
    question: 'Can you integrate our website with a CRM?',
    answer: 'Yes, we integrate websites with CRM systems including HubSpot, custom Firestore CRM, and other platforms. We set up lead capture forms, automated workflows, and data synchronization between your website and CRM to streamline your sales process.',
    category: 'T2',
  },
  {
    question: 'How long for an ERP integration?',
    answer: 'Pilot phase typically takes 4–8 weeks, with full rollout taking 3–9 months depending on complexity and scope. We start with a small, high-value pilot to prove value before full commitment, ensuring minimal disruption to your operations.',
    category: 'T3',
  },
  {
    question: 'Will integration disrupt our operations?',
    answer: 'We use phased pilots and parallel runs to minimize disruption. We work closely with your team to ensure smooth transitions and maintain business continuity throughout the integration process. Most integrations run in parallel with existing systems during the transition period.',
    category: 'T3',
  },
  {
    question: 'Which ERPs do you support?',
    answer: 'We support Odoo, MS Dynamics, selected SAP modules, and custom ERPs. We can work with most modern ERP systems that have API access. Contact us to discuss your specific ERP requirements and integration needs.',
    category: 'T3',
  },
  {
    question: 'Do you support local payment gateways & mobile money?',
    answer: 'Yes, we integrate local payment gateways and mobile money solutions (MTN Mobile Money, Airtel Money, etc.) for eCommerce platforms. This enables businesses in East Africa to accept payments from customers using their preferred mobile money services.',
    category: 'T2',
  },
  {
    question: 'What security measures do you use?',
    answer: 'We implement end-to-end encryption (at rest and in transit), role-based access control (RBAC), regular security audits, penetration testing, verified backups, and incident response playbooks. We follow industry best practices and can provide compliance documentation as needed.',
    category: 'All',
  },
  {
    question: 'Do you work with NGOs and humanitarian organizations?',
    answer: 'Yes, we have extensive experience working with NGOs and humanitarian organizations. We understand the unique needs of mission-driven organizations and offer mission-aligned pricing. Our founder\'s background includes delivering technical services to NGOs through MESL Solutions.',
    category: 'All',
  },
]

export default function FAQPage() {
  const faqSchema: FAQPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <JsonLd schema={faqSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-700 mb-12">
            Find answers to common questions about our web design, hosting, ERP integration, CRM, and 
            technology services in Uganda, Kenya, Rwanda, and Sudan.
          </p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <h2 className="text-2xl font-semibold mb-3 text-gray-900">
                  {faq.question}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
                {faq.category && (
                  <span className="inline-block mt-3 text-xs text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded">
                    {faq.category === 'T1' && 'Foundational'}
                    {faq.category === 'T2' && 'Growth'}
                    {faq.category === 'T3' && 'Enterprise'}
                    {faq.category === 'All' && 'All Services'}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-700 mb-6">
              Can't find the answer you're looking for? Contact us and we'll be happy to help 
              with any questions about our web design, hosting, ERP integration, or other services.
            </p>
            <Link 
              href="/contact" 
              className="btn-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
