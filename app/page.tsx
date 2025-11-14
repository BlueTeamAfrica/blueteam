import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { generateOrganizationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Blue Team Africa — Web Design, Hosting & Enterprise Systems (East Africa)',
  description: 'Blue Team Africa builds high-performance websites, secure hosting, and enterprise systems (ERP/CRM/Apps) for organizations in Uganda, Kenya, Rwanda & Sudan. Book a free systems audit.',
  keywords: ['web design Uganda', 'website hosting Uganda', 'ERP integration East Africa', 'business system integration', 'web design company Uganda', 'technology solutions East Africa'],
  openGraph: {
    title: 'Blue Team Africa — Web Design, Hosting & Enterprise Systems (East Africa)',
    description: 'Blue Team Africa builds high-performance websites, secure hosting, and enterprise systems for organizations in Uganda, Kenya, Rwanda & Sudan.',
  },
}

export default function Home() {
  const organizationSchema = generateOrganizationSchema(
    'Blue Team Africa',
    'Blue Team Africa builds high-performance websites, secure hosting, and enterprise systems (ERP/CRM/Apps) for organizations in East Africa.',
    'https://blueteamafrica.com',
    undefined,
    [],
    '+25676550813',
    'eldaby@meslsolutions.com'
  )

  return (
    <>
      <JsonLd schema={organizationSchema} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Blue Team Africa — Websites, Hosting & Unified Systems for East Africa
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100 font-light">
              From fast, SEO-ready websites and reliable hosting to ERP, CRM and secure cloud operations — we help NGOs, startups and enterprises turn fragmented tech into reliable, measurable outcomes.
            </p>
            <p className="text-lg mb-10 text-blue-200 max-w-3xl mx-auto">
              Book a free 30-minute systems audit and get a prioritized action plan you can pilot within weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Link 
                href="/contact?solution_interest=T3" 
                className="btn-primary text-lg px-8 py-4 inline-block"
              >
                Book a Free 30-Minute Systems Audit
              </Link>
              <Link 
                href="/solutions/foundational#packages" 
                className="btn-secondary text-lg px-8 py-4 inline-block border-white text-white hover:bg-white hover:text-blue-600"
              >
                Get a Website Quote
              </Link>
            </div>
            <p className="text-sm text-blue-200">Free — we'll email a 5-question checklist to prepare the call.</p>
          </div>
        </div>
      </section>

      {/* Top 3 Feature Blocks */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Technology Solutions Designed for Your Growth Stage</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose fast, conversion-focused websites (T1), automation and CRM to grow sales (T2), or enterprise-grade ERP integration and managed cloud to reduce operational risk (T3).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* T1 - Foundational */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 card-hover">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Foundational Websites & Hosting</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Fast launch with responsive design, SEO optimization, and local support. Get online quickly with reliable hosting and performance that meets Google's Core Web Vitals.
                </p>
                <Link href="/solutions/foundational" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>

              {/* T2 - Growth */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 card-hover">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Growth Systems (eCommerce & CRM)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Convert visitors into buyers and automate manual tasks. eCommerce with local mobile money, CRM-driven sales pipelines, and marketing automation.
                </p>
                <Link href="/solutions/growth" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>

              {/* T3 - Enterprise */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 card-hover">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Enterprise Integration (ERP & Cloud)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Systems that scale. ERP integration, middleware, and managed cloud operations to reduce operational risk and automate reconciliation.
                </p>
                <Link href="/solutions/enterprise" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">What We Do</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We build technology that delivers measurable business outcomes. Whether you need a fast, search-optimized website, ultra-reliable hosting, a CRM to drive sales, or a full ERP integration to unify finance and operations — Blue Team builds it, secures it, and supports it. We focus on outcomes: fewer manual processes, faster reporting, and predictable growth.
              </p>

              <div className="bg-white p-6 rounded-lg mb-6">
                <p className="text-gray-700 mb-4">
                  <strong>Foundational:</strong> high-performing websites, local hosting and SEO to get you online fast.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Growth:</strong> eCommerce, CRM and marketing automation to scale revenue.
                </p>
                <p className="text-gray-700">
                  <strong>Enterprise:</strong> ERP integration, middleware and managed cloud for mission-critical operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why East Africa Chooses Blue Team */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Why East Africa Chooses Blue Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Local Experience</h3>
                <p className="text-gray-600">Across Uganda, Kenya, Rwanda and Sudan</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">End-to-End Delivery</h3>
                <p className="text-gray-600">Design → build → secure → operate</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Human-Centered Approach</h3>
                <p className="text-gray-600">We train your teams and hand over control</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="section-padding bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-600 mb-2">Trusted by organizations across East Africa</p>
            <p className="text-sm text-gray-500 italic">
              Reduced reconciliation time by up to 40% — regional logistics (confidential)
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Technology?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Book a free 30-minute systems audit and get a prioritized action plan you can pilot within weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?solution_interest=T3" className="btn-primary bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
              Book a Free Systems Audit
            </Link>
            <Link href="/solutions/foundational#packages" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              Get a Website Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
