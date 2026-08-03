import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceSidebar from '@/components/ServiceSidebar'
import type { Metadata } from 'next'
import { metadataMobileApps } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSection from '@/components/FAQSection'
import type { FAQ } from '@/lib/faqs'

const mobileAppsFAQs: FAQ[] = [
  {
    question: 'What platforms do you develop for — iOS, Android, or both?',
    answer: 'We develop for both iOS and Android using React Native, which produces a single codebase that runs natively on both platforms. For projects where native device APIs or performance requirements demand it, we can build platform-specific versions. We advise on the right approach during scoping based on your user base and budget.',
  },
  {
    question: 'How long does mobile app development take?',
    answer: 'A focused app with a defined feature set — field data collection, beneficiary registration, staff scheduling — typically takes eight to fourteen weeks from requirements to app store submission. More complex apps with real-time sync, offline-first architecture, or third-party integrations run fourteen to twenty-four weeks. We provide a firm estimate after the requirements phase.',
  },
  {
    question: 'Can the app work offline in low-connectivity environments?',
    answer: 'Offline-first capability is a design requirement we treat as standard for apps deployed in East Africa and humanitarian contexts, not an optional add-on. Data is stored locally on the device and syncs to the server automatically when a connection is available. Field teams in low-connectivity zones in Sudan, Uganda, and rural Rwanda rely on this behaviour in apps we have built.',
  },
  {
    question: 'How does the app connect to our ERP or back-office system?',
    answer: 'We build the app\'s API layer to exchange data directly with ERPNext or any back-end system with an accessible API. Field submissions — beneficiary records, incident reports, distribution data — flow into the ERP in real time once synced. This eliminates manual re-entry and gives program managers live visibility into field operations.',
  },
  {
    question: 'Do you handle app store submission and approval?',
    answer: 'Yes. We prepare all required assets — screenshots, app descriptions, privacy policy, and review responses — and manage the submission process for both the Apple App Store and Google Play Store. Approval timelines are set by the stores, but we handle everything on your behalf.',
  },
  {
    question: 'What security measures are applied to mobile apps handling sensitive data?',
    answer: 'For apps handling beneficiary data, health records, or confidential field information, we implement encrypted local storage, secure token-based authentication, certificate pinning to prevent API interception, and role-based data access so users only see records relevant to their assignment. We align these controls with our broader cybersecurity service standards.',
  },
]

function MobileAppsFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mobileAppsFAQs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

export const metadata: Metadata = {
  ...metadataMobileApps,
  keywords: 'mobile app development, mobile app development Uganda, mobile app development Kenya, Flutter development, React Native development, offline mobile apps, NGO mobile apps East Africa',
  openGraph: {
    title: 'Mobile App Development Services in East Africa',
    description: 'Secure, offline-first mobile apps for NGOs, enterprises and startups built for low-connectivity environments.',
    url: 'https://www.blueteamafrica.com/services/mobile-apps',
    siteName: 'Blue Team Africa',
    images: [
      {
        url: '/images/services/mobile-apps/services-mobileapps-mobile-apps-hero-01.webp',
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
    images: ['/images/services/mobile-apps/services-mobileapps-mobile-apps-hero-01.webp'],
  },
}

export default function MobileAppsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.blueteamafrica.com/' },
        { name: 'Services', url: 'https://www.blueteamafrica.com/services' },
        { name: 'Mobile App Development Services', url: 'https://www.blueteamafrica.com/services/mobile-apps' },
      ]} />
      <MobileAppsFAQSchema />
      <ServiceSchema serviceName="Mobile Apps" serviceSlug="mobile-apps" />
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
          <aside className="hidden lg:block lg:w-1/4 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <ServiceSidebar />
            </div>
          </aside>
          
          <div className="lg:w-3/4 flex-grow">
            {/* Hero Image */}
            <section className="mb-12">
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/services/mobile-apps/services-mobileapps-mobile-apps-hero-01.webp"
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
                    Secure, offline-first mobile apps for NGOs, enterprises and startups — built to work reliably in low-connectivity and high-risk environments across Sudan 🇸🇩, Uganda 🇺🇬, Kenya 🇰🇪 and Rwanda 🇷🇼. Our <Link href="/locations/rwanda" className="text-primary hover:text-primary-dark hover:underline">mobile app development solutions in Kigali and throughout Rwanda</Link> are designed for NGOs, startups, and SMEs seeking secure and scalable apps.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://wa.me/254119402737?text=Hello!%20I%20would%20like%20to%20start%20a%20mobile%20app%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition"
                    >
                      <MessageCircle size={20} />
                      Start Your App Project
                    </a>
                    <Link
                      href="/portfolio/mobile-app"
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
                        src="/images/services/mobile-apps/services-mobileapps-mobile-apps-ui-01.webp"
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
                      src="/images/services/mobile-apps/services-mobileapps-mobile-apps-hero-03.webp"
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
                      src="/images/services/mobile-apps/services-mobileapps-mobile-apps-hero-02.webp"
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

            {/* FAQ Section */}
            <SectionWrapper bgColor="white">
              <FAQSection customFAQs={mobileAppsFAQs} />
            </SectionWrapper>

            {/* CTA Section */}
            <SectionWrapper bgColor="white">
              <div className="max-w-4xl mx-auto text-center py-12 md:py-16 bg-primary text-white rounded-lg">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Build a Mobile App?</h2>
                <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
                  Let's design and deploy a secure, offline-capable mobile solution for your team.
                </p>
                <a
                  href="https://wa.me/254119402737?text=Hello!%20I%20would%20like%20to%20start%20a%20mobile%20app%20project."
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

      {/* Our Services - Mobile Only (Bottom) */}
      <div className="block lg:hidden max-w-7xl mx-auto px-6 pb-12">
        <ServiceSidebar />
      </div>
      

    </>
  )
}
