import type { Metadata } from "next";
import Image from "next/image";
import InteriorHeader from "@/components/InteriorHeader";
import ServiceSidebar from "@/components/ServiceSidebar";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { metadataWebsiteDevelopment } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSection from '@/components/FAQSection'
import type { FAQ } from '@/lib/faqs'

const websiteDevelopmentFAQs: FAQ[] = [
  {
    question: 'What types of websites and systems do you build?',
    answer: 'We build corporate and organizational websites, NGO platforms, client and staff portals, content management systems, and web applications that replace manual processes. From straightforward marketing sites to complex multi-role portals, our builds are designed to perform under real conditions across East Africa.',
  },
  {
    question: 'What technology stack do you use, and why does it matter?',
    answer: 'We build primarily on Next.js and React, which deliver fast-loading, SEO-friendly sites that scale well. For content-managed sites we integrate CMS platforms like Sanity or Contentful. The stack choice means your website is maintainable by any competent developer, not locked to a proprietary builder.',
  },
  {
    question: 'How long does a website development project take?',
    answer: 'Straightforward websites typically take three to six weeks. Web applications with user authentication, dashboards, or database integrations run eight to sixteen weeks depending on complexity. We provide a timeline estimate after scoping, with milestones agreed before development begins.',
  },
  {
    question: 'Do you handle everything — design, development, and launch?',
    answer: 'Yes. We manage the full delivery: UI/UX design, front-end and back-end development, hosting setup, domain configuration, and post-launch testing. For organizations that already have a design, we can work from provided assets. For those starting from scratch, design and development are coordinated internally.',
  },
  {
    question: 'Can you build platforms for NGOs with donor reporting or beneficiary management features?',
    answer: 'Yes — this is work we do regularly. We have built portals for humanitarian organizations that include secure beneficiary registration, donor-facing reporting dashboards, multilingual interfaces, and offline-capable data entry. We understand the compliance and data-sensitivity requirements that NGO platforms carry.',
  },
  {
    question: 'What is included in handover, and do you offer ongoing maintenance?',
    answer: 'Handover includes the deployed site or application, codebase access, documentation, and a walkthrough session. We offer ongoing maintenance plans covering security updates, dependency management, performance monitoring, and content changes — so the system stays current without requiring your team to manage the technical details.',
  },
]

function WebsiteDevelopmentFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: websiteDevelopmentFAQs.map((faq) => ({
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
  ...metadataWebsiteDevelopment,
  keywords: [
    "website development",
    "web development",
    "custom web applications",
    "NGO website development",
    "business website development",
    "e-commerce development",
    "web application development",
    "scalable web development",
    "secure website development",
    "full-stack development"
  ],
  openGraph: {
    title: "Professional Web Development Services",
    description: "Fast, secure, and scalable website development for businesses and NGOs. Custom web applications, backend systems, and enterprise solutions.",
    images: ["/images/hero/hero-og-01.webp"],
  },
};

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.blueteamafrica.com/' },
        { name: 'Services', url: 'https://www.blueteamafrica.com/services' },
        { name: 'Professional Web Development Services', url: 'https://www.blueteamafrica.com/services/website-development' },
      ]} />
      <WebsiteDevelopmentFAQSchema />
      <ServiceSchema serviceName="Website Development" serviceSlug="website-development" />
      <InteriorHeader
        title="Web Development Services"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Website Development' }
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
                  src="/images/services/website-development/services-websitedevelopment-website-development-hero-01.webp"
                  alt="Professional Website Development Services"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </section>

            {/* Introduction */}
            <SectionWrapper>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Blue Team Africa, we develop fast, secure, and scalable websites that help businesses, NGOs, and organizations grow online. Whether you need a custom-built system, a dynamic website integrated with your internal workflows, or a fully optimized business platform — our development team delivers reliable, modern, and SEO-ready solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                From corporate websites to NGO management platforms, our builds are designed to perform under real conditions across East Africa. For organizations in Rwanda, we provide comprehensive <Link href="/web-development-rwanda" className="text-primary hover:text-primary-dark hover:underline">web development services in Rwanda</Link> with custom solutions tailored to local needs.
              </p>
            </SectionWrapper>

            {/* Why Website Development Matters */}
            <SectionWrapper>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Why Website Development Matters
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most companies stop at "web design," but real success requires <strong>website development</strong> — the part that makes your site powerful, functional, automated, and secure.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website development services focus on:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Speed optimization</strong> (Core Web Vitals)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Secure backend systems</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Integrations</strong> with databases & APIs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Scalable architecture</strong> for growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Mobile-first performance</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>SEO-ready code structure</strong></span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                This ensures your website doesn't just look good — it works flawlessly, loads fast, ranks high, and supports real business operations.
              </p>
            </SectionWrapper>

            {/* What We Build */}
            <SectionWrapper>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                What We Build
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    1. Business & Corporate Websites
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    High-performance websites built for companies across East Africa. Optimized for search engines and tailored to your brand.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    2. NGO & Humanitarian Organization Websites
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We specialize in building digital platforms for NGOs operating across East Africa. This includes membership systems, reporting dashboards, data collection tools, and secure portals.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    3. E-Commerce Websites
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Full online sales platforms with product management, payment integration, and inventory tracking.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    4. Custom Web Applications
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    If your operations are unique, we build software that matches your workflow — rather than forcing you to adapt.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    5. Integrated Mobile + Web Systems
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    For field teams, humanitarian missions, and sensitive operations. We can build:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Mobile apps for data collection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Secure dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Centralized cloud reporting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Offline-to-online sync</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Multi-level access for staff</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SectionWrapper>

            {/* Real Case Example */}
            <SectionWrapper bgColor="highlight">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Real Case Example
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  CSLO Sudan – ERP + CRM + Website Development
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  During the Sudan crisis, CSLO struggled to manage members and humanitarian reports spread across different regions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Blue Team Africa built a complete ERPNext-based system, CRM module, and a fully integrated website — enabling their team inside Sudan to securely store, track, and manage data even in risky areas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We also designed a complementary mobile app for data collectors in remote zones. All information syncs directly to the database for real-time reporting.
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  👉 This proves our capability to build enterprise-level systems for real field conditions.
                </p>
                <Link
                  href="/portfolio/cslo-sudan"
                  className="inline-block mt-4 text-primary hover:text-primary-dark font-semibold"
                >
                  View Full Case Study →
                </Link>
              </div>
            </SectionWrapper>

            {/* Why Choose Blue Team Africa */}
            <SectionWrapper>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Why Choose Blue Team Africa
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are a Sudanese-founded team with firsthand experience navigating crisis environments. We operate in Uganda, serving clients across East Africa.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our survival story pushes us to deliver high-quality work with absolute integrity. We build websites and systems that function reliably even under pressure — because we understand what "mission-critical" really means.
              </p>
            </SectionWrapper>

            {/* Service Highlights */}
            <SectionWrapper>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Service Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Custom web application development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Custom web applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Fast & SEO-optimized websites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Secure database-driven platforms</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Humanitarian & NGO technology solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Mobile + website integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>API & cloud system integrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Scalable hosting & maintenance packages</span>
                  </li>
                </ul>
              </div>
            </SectionWrapper>

            {/* Related Services */}
            <SectionWrapper>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Related Services
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/services/web-design"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">Website Design</h3>
                  <p className="text-sm text-gray-600">UI/UX design and visual branding</p>
                </Link>
                <Link
                  href="/services/mobile-apps"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">Mobile App Development</h3>
                  <p className="text-sm text-gray-600">iOS and Android applications</p>
                </Link>
                <Link
                  href="/services/cybersecurity"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">Cyber Security Services</h3>
                  <p className="text-sm text-gray-600">Security audits and protection</p>
                </Link>
                <Link
                  href="/services/erp"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">ERP Systems for NGOs</h3>
                  <p className="text-sm text-gray-600">ERPNext and enterprise solutions</p>
                </Link>
              </div>
            </SectionWrapper>

            {/* FAQ Section */}
            <SectionWrapper bgColor="white">
              <FAQSection customFAQs={websiteDevelopmentFAQs} />
            </SectionWrapper>

            {/* Call to Action */}
            <SectionWrapper>
              <div className="text-center space-y-4 p-8 bg-gray-50 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900">
                  Ready to Build a Reliable Website or System for Your Organization?
                </h2>
                <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  Our team is here to support your mission with professional, secure, and scalable technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <a
                    href="tel:+254119402737"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    📞 +254 119 402 737
                  </a>
                  <a
                    href="mailto:contact@blueteamafrica.com"
                    className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg border-2 border-primary hover:bg-gray-50 transition-colors"
                  >
                    📧 Get Started
                  </a>
                </div>
                <p className="text-sm text-gray-600 pt-2">
                  💬 WhatsApp chat available for quick inquiries
                </p>
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
  );
}
