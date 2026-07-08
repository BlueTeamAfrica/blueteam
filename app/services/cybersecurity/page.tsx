import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight, Shield, Search, AlertTriangle, Lock, Database, Users, Smartphone, Server } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQSection from '@/components/FAQSection'
import type { Metadata } from 'next'
import type { FAQ } from '@/lib/faqs'
import { metadataCybersecurity } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  ...metadataCybersecurity,
  keywords: 'cybersecurity Uganda, cybersecurity Sudan, penetration testing East Africa, security audit Uganda, NGO cybersecurity, website security, data protection East Africa, cyber security services, Blue Team Africa',
  openGraph: {
    title: 'Cybersecurity Solutions for East African Businesses & NGOs',
    description: 'Enterprise-grade cybersecurity solutions including penetration testing, security audits, and secure operations for organizations across East Africa.',
        url: 'https://www.blueteamafrica.com/services/cybersecurity',
        siteName: 'Blue Team Africa',
        images: [
          {
            url: '/images/services/cybersecurity/services-cybersecurity-hero-01.webp',
            width: 1200,
            height: 630,
            alt: 'Cybersecurity Solutions for East Africa',
          },
        ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybersecurity Solutions | Blue Team Africa',
    description: 'Protect your digital infrastructure with expert cybersecurity solutions for East Africa.',
    images: ['/images/services/cybersecurity/services-cybersecurity-hero-01.webp'],
  },
}


// Custom FAQs for Cybersecurity
const cybersecurityFAQs: FAQ[] = [
  {
    question: 'How much do cybersecurity services cost?',
    answer: 'Pricing depends on infrastructure size and services needed. Most clients fall between UGX 350,000 – 2,500,000 monthly depending on monitoring, penetration testing, and ongoing support requirements. We provide custom quotes after assessing your specific security needs.',
  },
  {
    question: 'Do you work with NGOs?',
    answer: 'Yes — we specialize in NGOs operating in Sudan, South Sudan, Uganda, Kenya, and the Great Lakes region. We understand the unique challenges humanitarian organizations face and provide tailored security solutions for high-risk environments.',
  },
  {
    question: 'Can you secure our ERP / CRM?',
    answer: 'Absolutely. We secure ERPNext, custom CRMs, and humanitarian databases. Our security services include access controls, data encryption, secure backups, and vulnerability scanning to protect your critical business systems.',
  },
  {
    question: 'What is penetration testing?',
    answer: 'Penetration testing (pentest) is ethical hacking where our security experts simulate cyber attacks to identify vulnerabilities in your systems before malicious hackers can exploit them. We provide detailed reports with actionable recommendations.',
  },
  {
    question: 'How often should we perform security audits?',
    answer: 'We recommend quarterly security audits for most organizations, with monthly vulnerability scanning. For high-risk environments or organizations handling sensitive data, we suggest more frequent assessments. Annual comprehensive audits are essential for compliance and security posture.',
  },
  {
    question: 'Do you provide incident response services?',
    answer: 'Yes, we offer 24/7 incident response and emergency recovery services. When your organization experiences a breach or cyber attack, our team responds immediately to contain the threat, assess damage, and restore operations quickly.',
  },
  {
    question: 'Can you train our staff on cybersecurity?',
    answer: 'Absolutely. Human error causes over 70% of breaches. We offer comprehensive staff cyber awareness training covering phishing prevention, password security, safe browsing, and data handling best practices tailored to your organization.',
  },
  {
    question: 'Do you secure mobile apps and APIs?',
    answer: 'Yes, we provide end-to-end security for mobile applications and API protection. This includes secure authentication, data encryption, API rate limiting, and protection against common mobile and API vulnerabilities.',
  },
]

// FAQ Schema
function FAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cybersecurityFAQs.map((faq) => ({
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

export default function CybersecurityPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.blueteamafrica.com/' },
        { name: 'Services', url: 'https://www.blueteamafrica.com/services' },
        { name: 'Cybersecurity Solutions', url: 'https://www.blueteamafrica.com/services/cybersecurity' },
      ]} />
      <ServiceSchema serviceName="Cybersecurity" serviceSlug="cybersecurity" />
      <FAQSchema />
      
      <InteriorHeader
        title="Trusted Cybersecurity Solutions for East African Businesses & NGOs"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Cybersecurity' }
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
                  src="/images/services/cybersecurity/services-cybersecurity-hero-01.webp"
                  alt="Trusted Cybersecurity Solutions for East African Businesses & NGOs"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </section>

            {/* Section 1 — Why Cybersecurity Matters */}
            <SectionWrapper bgColor="white">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 text-center">
                  Secure Today. Operate Confidently Tomorrow.
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Cyber threats in East Africa continue to rise — from website attacks to NGO data breaches targeting sensitive beneficiary information. At Blue Team Africa, we deliver robust <Link href="/locations/rwanda" className="text-primary hover:text-primary-dark hover:underline">cybersecurity solutions for organizations in Rwanda</Link>, including businesses and NGOs in Kigali, helping protect critical digital infrastructure across the region.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our security systems are designed for:
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>High-risk regions like Sudan and South Sudan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Remote NGO operations with limited connectivity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Websites handling beneficiary databases and sensitive data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>SMEs and startups scaling online services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Organizations storing sensitive financial and personal information</span>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We keep your digital infrastructure safe so your team can focus on impact and growth.
                </p>
              </div>
            </SectionWrapper>

            {/* Section 2 — What We Secure */}
            <SectionWrapper bgColor="light">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                  We Protect Your Entire Digital Ecosystem
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-3">
                      <Server className="text-primary mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">Websites & Hosting Environments</h3>
                    </div>
                    <p className="text-gray-600">
                      Secure your web presence with firewall protection, SSL encryption, and continuous monitoring.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-3">
                      <Database className="text-primary mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">Cloud Applications</h3>
                    </div>
                    <p className="text-gray-600">
                      Protect Firebase, Vercel, Google Cloud, and other cloud platforms from threats.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-3">
                      <Shield className="text-primary mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">NGO ERPs & CRMs</h3>
                    </div>
                    <p className="text-gray-600">
                      Secure ERPNext and custom CRM systems handling sensitive humanitarian data.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-3">
                      <Smartphone className="text-primary mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">Mobile Apps & APIs</h3>
                    </div>
                    <p className="text-gray-600">
                      End-to-end security for mobile applications and API endpoints.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-3">
                      <Users className="text-primary mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">Internal Staff Networks</h3>
                    </div>
                    <p className="text-gray-600">
                      Protect internal networks and devices from unauthorized access and malware.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-3">
                      <Database className="text-primary mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">User & Beneficiary Databases</h3>
                    </div>
                    <p className="text-gray-600">
                      Encrypt and secure sensitive databases containing personal and organizational data.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 md:col-span-2">
                    <div className="flex items-center mb-3">
                      <Lock className="text-primary mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">Email Systems & Communication Tools</h3>
                    </div>
                    <p className="text-gray-600">
                      Secure email communications and protect against phishing, spam, and email-based attacks.
                    </p>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-[#EEF4FF] rounded-lg border border-primary/20">
                  <p className="text-gray-700">
                    <Link href="/services/website-development" className="text-primary hover:text-primary-dark font-medium underline">
                      Learn more about our Website Development Services
                    </Link>{' '}
                    for improved security integration.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* Section 3 — Our Cybersecurity Services */}
            <SectionWrapper bgColor="white">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                  Comprehensive Cybersecurity Solutions
                </h2>
                <div className="space-y-6">
                  <div className="bg-[#F8F9FC] p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start mb-3">
                      <Shield className="text-primary mr-3 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Website Security Hardening</h3>
                        <p className="text-gray-700">
                          We secure your website against malware, defacement, brute-force attacks, and data theft. Includes firewall setup, continuous monitoring, and incident alerts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F8F9FC] p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start mb-3">
                      <Search className="text-primary mr-3 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Penetration Testing (Pentest)</h3>
                        <p className="text-gray-700">
                          Ethical hacking to expose vulnerabilities before attackers do. We simulate real-world attacks and provide detailed reports with actionable recommendations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F8F9FC] p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start mb-3">
                      <AlertTriangle className="text-primary mr-3 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Cybersecurity Audits & Risk Assessments</h3>
                        <p className="text-gray-700">
                          Professional evaluation of your systems with actionable reports. We assess your security posture, identify risks, and provide prioritized remediation plans.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F8F9FC] p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start mb-3">
                      <AlertTriangle className="text-primary mr-3 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Incident Response & Emergency Recovery</h3>
                        <p className="text-gray-700">
                          Fast support when your organization experiences a breach or cyber attack. Our team responds immediately to contain threats, assess damage, and restore operations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F8F9FC] p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start mb-3">
                      <Search className="text-primary mr-3 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Vulnerability Scanning</h3>
                        <p className="text-gray-700">
                          Continuous scanning and patching for websites, networks, and cloud systems. Regular automated scans identify and prioritize security issues.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F8F9FC] p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start mb-3">
                      <Users className="text-primary mr-3 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Staff Cyber Awareness Training</h3>
                        <p className="text-gray-700">
                          Human error causes over 70% of breaches — we train your team to prevent them. Customized training programs cover phishing, password security, and safe data handling.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F8F9FC] p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start mb-3">
                      <Lock className="text-primary mr-3 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Encryption & Secure Backups</h3>
                        <p className="text-gray-700">
                          Protects your organization's sensitive data from loss or unauthorized access. Automated encrypted backups ensure business continuity.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F8F9FC] p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start mb-3">
                      <Smartphone className="text-primary mr-3 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Mobile App Development & API Protection</h3>
                        <p className="text-gray-700">
                          End-to-end security for mission-critical NGO data collection apps. We secure mobile apps, APIs, and backend systems from vulnerabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Section 4 — Specialized for NGOs & High-Risk Zones */}
            <SectionWrapper bgColor="highlight">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 text-center">
                  Security Built From Real Experience in Sudan & East Africa
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Your experience rebuilding CSLO Sudan gives Blue Team Africa a unique advantage: we understand how humanitarian organizations operate under pressure.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our NGO-focused solutions include:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">Secure ERPs & CRMs</h3>
                    <p className="text-gray-600 text-sm">ERPNext + Frappe systems with multi-layer access controls and encrypted data storage.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">Protected Beneficiary Databases</h3>
                    <p className="text-gray-600 text-sm">Secure storage and access controls for sensitive humanitarian data.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">Remote-Area Mobile Data Collection</h3>
                    <p className="text-gray-600 text-sm">Offline-capable apps with secure sync for field staff operating in unstable regions.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">Multi-Layer Access Control</h3>
                    <p className="text-gray-600 text-sm">Role-based permissions and authentication for staff at all levels.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">Automatic Backups</h3>
                    <p className="text-gray-600 text-sm">Redundant backups for unstable regions with multiple recovery points.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">Field Tool Sync</h3>
                    <p className="text-gray-600 text-sm">Offline-capable field tools synced securely to a central database.</p>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-primary/20">
                  <p className="text-gray-700">
                    <Link href="/services/erp" className="text-primary hover:text-primary-dark font-medium underline">
                      See how we build NGO Digital Solutions
                    </Link>{' '}
                    with security-first architecture.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* Section 5 — Why Choose Blue Team Africa */}
            <SectionWrapper bgColor="white">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 text-center">
                  We Are Not Just a Tech Company — We Are Survivors & Builders
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As a team of Sudanese professionals who fled conflict and rebuilt from the ground up, we understand one thing better than any competitor:
                </p>
                <p className="text-xl font-semibold text-gray-900 mb-8 text-center bg-[#EEF4FF] p-4 rounded-lg border border-primary/20">
                  Your data is your lifeline. It must be protected.
                </p>
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">What Makes Us Different?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#F8F9FC] p-5 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Security-First Development Approach</h4>
                    <p className="text-gray-600 text-sm">Security is built into every solution from the ground up, not added as an afterthought.</p>
                  </div>
                  <div className="bg-[#F8F9FC] p-5 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Real Field Experience with NGOs</h4>
                    <p className="text-gray-600 text-sm">We've built secure systems for humanitarian organizations operating in risky areas.</p>
                  </div>
                  <div className="bg-[#F8F9FC] p-5 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">High-Level Technical Expertise</h4>
                    <p className="text-gray-600 text-sm">ERPNext, cloud platforms, mobile apps — we secure the entire technology stack.</p>
                  </div>
                  <div className="bg-[#F8F9FC] p-5 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Fast Response Time & Reliable Support</h4>
                    <p className="text-gray-600 text-sm">24/7 incident response and ongoing support when you need it most.</p>
                  </div>
                  <div className="bg-[#F8F9FC] p-5 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Transparent Pricing</h4>
                    <p className="text-gray-600 text-sm">Clear, upfront pricing with no hidden costs. Tailored for East African budgets.</p>
                  </div>
                  <div className="bg-[#F8F9FC] p-5 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Tailored Solutions</h4>
                    <p className="text-gray-600 text-sm">Security solutions designed specifically for East African markets and challenges.</p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Section 6 — Our Cybersecurity Process */}
            <SectionWrapper bgColor="light">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                  Our Cybersecurity Process
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Consultation</h3>
                      <p className="text-gray-700">We assess your current security posture, identify risks, and understand your unique requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Audit & Vulnerability Scan</h3>
                      <p className="text-gray-700">Comprehensive assessment of your systems, networks, and applications to identify security gaps.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation & Hardening</h3>
                      <p className="text-gray-700">We implement security measures, patch vulnerabilities, and harden your systems against threats.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring & Alerts Setup</h3>
                      <p className="text-gray-700">Continuous monitoring systems alert you to threats in real-time, enabling quick response.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      5
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Staff Training (Optional)</h3>
                      <p className="text-gray-700">Comprehensive cyber awareness training empowers your team to prevent security breaches.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      6
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Protection Plan</h3>
                      <p className="text-gray-700">Regular security updates, vulnerability scanning, and incident response support keep you protected.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Section 7 — FAQ */}
            <SectionWrapper bgColor="white">
              <FAQSection 
                customFAQs={cybersecurityFAQs}
                showAll={true}
                showCTA={false}
                title="Frequently Asked Questions"
                description="Common questions about our cybersecurity services"
              />
            </SectionWrapper>

            {/* Section 8 — Final CTA */}
            <SectionWrapper bgColor="highlight">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                  Ready to Secure Your Organization?
                </h2>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Protect your digital assets with expert support tailored for East African conditions. Our team understands the unique challenges you face and delivers security solutions that work in your environment.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://wa.me/254119402737?text=Hello!%20I%20would%20like%20to%20request%20a%20security%20assessment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition shadow-lg"
                  >
                    <MessageCircle size={20} />
                    Request a Security Assessment
                  </a>
                  <a
                    href="https://wa.me/254119402737"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition"
                  >
                    <MessageCircle size={20} />
                    WhatsApp: +254 119 402 737
                  </a>
                </div>
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
