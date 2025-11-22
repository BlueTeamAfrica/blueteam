import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceSidebar from '@/components/ServiceSidebar'
import PsyloLinks from '@/components/seo/PsyloLinks'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mobile App Development Services | Blue Team Africa',
  description: 'Secure, offline-first mobile apps for NGOs, enterprises and startups — built to work reliably in low-connectivity and high-risk environments across Sudan, Uganda, Kenya and Rwanda.',
  keywords: 'mobile app development, mobile app development Uganda, mobile app development Kenya, Flutter development, React Native development, offline mobile apps, NGO mobile apps East Africa',
  openGraph: {
    title: 'Mobile App Development Services in East Africa',
    description: 'Secure, offline-first mobile apps for NGOs, enterprises and startups built for low-connectivity environments.',
    url: 'https://www.blueteamafrica.com/services/mobile-apps',
    siteName: 'Blue Team Africa',
    images: [
      {
        url: '/images/services/mobile-apps/mobile-apps-hero-1.webp',
        width: 1200,
        height: 630,
        alt: 'Mobile App Development Services',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development Services | Blue Team Africa',
    description: 'Build secure, offline-capable mobile solutions for your team.',
    images: ['/images/services/mobile-apps/mobile-apps-hero-1.webp'],
  },
}

export default function MobileAppsPage() {
  return (
    <>
      <InteriorHeader
        title="Mobile App Development"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Mobile Apps' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <ServiceSidebar />
            </div>
          </aside>
          
          <div className="lg:w-3/4 flex-grow">
            {/* Hero Image */}
            <section className="mb-12">
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/services/mobile-apps/mobile-apps-hero-1.webp"
                  alt="Mobile App Development"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </section>

            {/* Hero Section with Two Columns */}
            <SectionWrapper bgColor="white">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 mb-6">
                    Secure, Offline-First Mobile Apps for East Africa
                  </h2>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                    Secure, offline-first mobile apps for NGOs, enterprises and startups — built to work reliably in low-connectivity and high-risk environments across Sudan 🇸🇩, Uganda 🇺🇬, Kenya 🇰🇪 and Rwanda 🇷🇼.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://wa.me/256765508131?text=Hello!%20I%20would%20like%20to%20start%20a%20mobile%20app%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition"
                    >
                      <MessageCircle size={20} />
                      Start Your App Project
                    </a>
                    <Link
                      href="/portfolio"
                      className="inline-flex items-center gap-2 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                    >
                      View Mobile Projects
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center md:justify-end">
                  <div className="w-full max-w-md bg-gray-50 rounded-xl p-6 shadow-lg">
                    <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
                      <Image
                        src="/images/services/mobile-apps/mobile-apps-ui-1.webp"
                        alt="Mobile app UI preview"
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Overview & Use Cases */}
            <SectionWrapper bgColor="light">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Overview & Use Cases</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We build custom Android and iOS applications and cross-platform solutions (Flutter / React Native) that focus on security, offline capability, and seamless integration with back-end systems like <Link href="/services/erp" className="text-primary hover:underline">ERPNext</Link> and <Link href="/services/crm" className="text-primary hover:underline">Frappe CRM</Link>. Typical use-cases include field data collection, beneficiary registration, staff coordination, monitoring & evaluation, and mobile commerce.
                  </p>
                  <ul className="list-disc ml-6 text-gray-700 space-y-2">
                    <li>Offline-first field data collection apps (images, GPS, forms)</li>
                    <li>Mobile dashboards for managers and donors</li>
                    <li>Secure API integrations with <Link href="/services/erp" className="text-primary hover:underline">ERP</Link>/<Link href="/services/crm" className="text-primary hover:underline">CRM</Link> systems</li>
                    <li>Multilingual apps (Arabic, English, Swahili)</li>
                    <li>Low-bandwidth optimizations and progressive sync</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-lg h-80 rounded-xl overflow-hidden shadow-lg bg-gray-50">
                    <Image
                      src="/images/services/mobile-apps/mobile-apps-dashboard-1.webp"
                      alt="Mobile app dashboard"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Core Features */}
            <SectionWrapper bgColor="white">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-heading font-bold text-gray-900 text-center mb-12">Core Features</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Offline Sync & Reliability",
                      desc: "Collect data offline and automatically sync when the device regains connectivity.",
                    },
                    {
                      title: "Secure Data Storage",
                      desc: "Encrypted local storage + secure transport to the central database (HTTPS, TLS).",
                    },
                    {
                      title: "Real-time Reporting",
                      desc: "Live dashboards and alerts for program managers and donors.",
                    },
                    {
                      title: "ERP & CRM Integration",
                      desc: "Seamless API-based sync with ERPNext, Frappe CRM, or custom backends.",
                    },
                    {
                      title: "Low-end Device Optimization",
                      desc: "Performance tuned for older Android devices common in East Africa.",
                    },
                    {
                      title: "User Access Control",
                      desc: "Role-based access, audit logs, and secure authentication (Firebase/Auth providers).",
                    },
                  ].map((f, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{f.title}</h3>
                      {f.title === "ERP & CRM Integration" ? (
                        <p className="text-gray-700">
                          Seamless API-based sync with <Link href="/services/erp" className="text-primary hover:underline">ERPNext</Link>, <Link href="/services/crm" className="text-primary hover:underline">Frappe CRM</Link>, or custom backends.
                        </p>
                      ) : (
                        <p className="text-gray-700">{f.desc}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>

            {/* Technology & Integrations */}
            <SectionWrapper bgColor="highlight">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Technology & Integrations</h2>
                  <p className="text-gray-700 mb-6">We build using modern frameworks and tools focused on speed and reliability.</p>
                  <ul className="list-disc ml-6 text-gray-700 space-y-2">
                    <li>Flutter / React Native / Native Android</li>
                    <li>Firebase / Firestore for realtime sync</li>
                    <li><Link href="/services/erp" className="text-primary hover:underline">ERPNext</Link> & <Link href="/services/crm" className="text-primary hover:underline">Frappe CRM</Link> API integrations</li>
                    <li>Vercel / Cloudflare for backend <Link href="/services/hosting" className="text-primary hover:underline">hosting</Link> and edge functions</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-lg h-80 rounded-xl overflow-hidden shadow-lg bg-gray-50">
                    <Image
                      src="/images/services/mobile-apps/mobile-apps-api-1.webp"
                      alt="Mobile app API integration"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Case Study Teaser */}
            <SectionWrapper bgColor="white">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Case Study: CSLO Mobile Field App</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  We built a lightweight mobile app for CSLO that allowed field officers to capture beneficiary surveys, GPS coordinates, and incident reports offline — then sync to a secure ERPNext backend when online. The solution improved reporting accuracy and reduced data entry time by over 60%.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Problem</h3>
                    <p className="text-gray-600">Field teams could not reliably send reports due to poor connectivity.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Solution</h3>
                    <p className="text-gray-600">Offline-first Android app with secure sync and minimal bandwidth usage.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Impact</h3>
                    <p className="text-gray-600">Reporting time reduced by 60%; data accuracy improved; faster donor reporting.</p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* CTA Section */}
            <SectionWrapper bgColor="white">
              <div className="max-w-4xl mx-auto text-center py-12 md:py-16 bg-primary text-white rounded-lg">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Build a Mobile App?</h2>
                <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
                  Let's design and deploy a secure, offline-capable mobile solution for your team.
                </p>
                <a
                  href="https://wa.me/256765508131?text=Hello!%20I%20would%20like%20to%20start%20a%20mobile%20app%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition shadow-lg"
                >
                  <MessageCircle size={20} />
                  Start Your Mobile App Project
                </a>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </div>
      
      {/* Psylo Links for SEO */}
      <PsyloLinks />
    </>
  )
}
