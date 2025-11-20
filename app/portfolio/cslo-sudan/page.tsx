import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ERP & CRM Digital Transformation for CSLO Sudan | Blue Team Africa',
  description: 'How Blue Team Africa implemented a full ERPNext and Frappe CRM solution for CSLO Sudan—automating programs, strengthening accountability, securing data, and enabling mobile field reporting from conflict-affected areas.',
  keywords: 'ERPNext Sudan, CRM Sudan, NGO ERP system, humanitarian data management Sudan, CSLO Sudan ERP, East Africa technology solutions',
  openGraph: {
    title: 'ERP & CRM Implementation for CSLO Sudan',
    description: 'Blue Team Africa deployed a modern ERPNext + CRM platform for CSLO Sudan, including mobile field reporting and secure multi-program dashboards.',
    url: 'https://blueteamafrica.com/portfolio/cslo-sudan',
    siteName: 'Blue Team Africa',
    images: [
      {
        url: '/images/portfolio/cslo-sudan/cslo-banner.webp',
        width: 1200,
        height: 630,
        alt: 'CSLO Sudan ERPNext and CRM Implementation',
      },
    ],
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERP & CRM Digital Transformation for CSLO Sudan',
    description: 'A complete ERPNext + CRM digital transformation built for humanitarian operations in Sudan.',
    images: ['/images/portfolio/cslo-banner.webp'],
  },
}

// Case Study Schema Component (Server Component)
function CaseStudySchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    name: 'ERPNext & Frappe CRM Implementation for CSLO Sudan',
    description: 'Blue Team delivered a full ERP and CRM digital transformation for CSLO Sudan, including remote field data collection, automated workflows, reporting dashboards and mobile-app-powered humanitarian data capture.',
    provider: {
      '@type': 'Organization',
      name: 'Blue Team Africa',
      url: 'https://www.blueteamafrica.com',
      logo: 'https://www.blueteamafrica.com/logo.png',
    },
    client: {
      '@type': 'NonprofitOrganization',
      name: 'CSLO Sudan',
      address: 'Sudan',
      url: 'https://cslo-sudan.org',
    },
    about: [
      'ERPNext Implementation',
      'Frappe CRM Deployment',
      'Humanitarian Project Management System',
      'Mobile Data Collection App',
      'Secure Database Integration',
    ],
    genre: 'Digital Transformation',
    keywords: [
      'ERP Sudan',
      'CRM Sudan',
      'ERPNext Sudan',
      'Humanitarian data management Sudan',
      'NGO technology solutions East Africa',
      'Blue Team Africa',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function CSLOSudanCaseStudy() {
  return (
    <>
      {/* JSON-LD Schema */}
      <CaseStudySchema />

      <div className="min-h-screen">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              ERP & CRM Digital Transformation for CSLO Sudan
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Full ERPNext and Frappe CRM implementation enabling mobile field reporting and secure multi-program dashboards for humanitarian operations
            </p>
          </div>
        </section>

        {/* Project Hero Image */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative h-96 md:h-[500px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/portfolio/cslo-sudan/cslo-banner.webp"
                alt="ERPNext and Frappe CRM dashboard for CSLO Sudan humanitarian operations"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              The Challenge
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                CSLO Sudan, a humanitarian organization operating in conflict-affected regions of Sudan, 
                faced critical challenges in managing their programs, beneficiary data, and field operations. 
                Manual processes, scattered data across spreadsheets and paper files, and the inability to 
                collect real-time data from remote field locations were hindering their ability to deliver 
                effective humanitarian assistance.
              </p>
              <p>
                The organization needed a comprehensive digital solution that could:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li>Manage multiple humanitarian programs across different regions</li>
                <li>Enable field staff to collect and submit data from low-connectivity areas</li>
                <li>Automate workflows for donor reporting and accountability</li>
                <li>Secure sensitive beneficiary and program data</li>
                <li>Provide real-time dashboards for program monitoring and evaluation</li>
                <li>Integrate financial management, inventory, and CRM functionality</li>
              </ul>
              <p>
                Operating in Sudan's challenging context—with limited internet connectivity, security 
                concerns, and the need for multilingual support—required a solution that was both 
                robust and adaptable to field conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              Our Solution
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Blue Team Africa delivered a complete digital transformation for CSLO Sudan, implementing 
                a full ERPNext and Frappe CRM platform tailored for humanitarian operations. This project 
                is part of our <Link href="/erp" className="text-primary hover:text-primary-dark underline">ERPNext Development</Link> and 
                {' '}<Link href="/mobile-apps" className="text-primary hover:text-primary-dark underline">Mobile App Solutions</Link> for NGOs across Africa.
              </p>
              <p>
                The solution included:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li><strong>ERPNext Implementation:</strong> Complete enterprise resource planning system with modules for financial management, inventory, HR, and project management</li>
                <li><strong>Frappe CRM Deployment:</strong> Customer relationship management system for managing donor relationships, communications, and engagement tracking</li>
                <li><strong>Humanitarian Project Management:</strong> Custom modules for program planning, beneficiary tracking, and impact measurement</li>
                <li><strong>Mobile Data Collection App:</strong> Offline-capable mobile application allowing field staff to collect and sync data even in low-connectivity areas</li>
                <li><strong>Secure Database Integration:</strong> Robust security measures including encryption, role-based access control, and data backup systems</li>
                <li><strong>Multi-program Dashboards:</strong> Real-time reporting dashboards for program managers, donors, and senior leadership</li>
                <li><strong>Automated Workflows:</strong> Streamlined processes for donor reporting, financial reconciliation, and beneficiary registration</li>
                <li><strong>Multilingual Support:</strong> Arabic and English language support for local and international stakeholders</li>
              </ul>
              <p>
                The platform was designed to work effectively in Sudan's challenging infrastructure environment, 
                with offline capabilities, data compression for low-bandwidth connections, and mobile-first 
                design for field operations.
              </p>
              <p>
                Learn more about our <Link href="/services/erpnext-development" className="text-primary hover:text-primary-dark underline">ERPNext Development Services</Link> and 
                {' '}<Link href="/services/crm-development" className="text-primary hover:text-primary-dark underline">CRM Development Solutions</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              Results & Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">70%</div>
                <p className="text-gray-700">Reduction in manual data entry time</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">50%</div>
                <p className="text-gray-700">Faster donor reporting and accountability</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-gray-700">Data security and backup compliance</p>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The ERPNext and CRM implementation has transformed CSLO Sudan's operations, enabling 
                real-time program monitoring, streamlined beneficiary management, and efficient donor 
                reporting. Field staff can now collect data using mobile devices even in areas with 
                limited connectivity, with automatic synchronization when connections are available.
              </p>
              <p>
                Automated workflows have reduced manual data entry by 70%, freeing staff to focus on 
                program delivery rather than administrative tasks. Donor reporting is now 50% faster, 
                with standardized reports generated automatically from the system.
              </p>
              <p>
                The secure database integration ensures all sensitive beneficiary and program data is 
                protected with encryption, role-based access controls, and automated backups. Multi-program 
                dashboards provide real-time visibility into program performance, enabling data-driven 
                decision-making and improved accountability to donors and beneficiaries.
              </p>
              <p>
                The mobile data collection app has proven particularly valuable in Sudan's challenging 
                context, allowing field staff to work offline and sync data when connectivity is available. 
                This capability has significantly improved data collection accuracy and timeliness in 
                remote areas.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Linking Section */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Related Services
              </h3>
              <p className="text-gray-700 mb-4">
                This project showcases our expertise in ERP, CRM, and mobile app development for NGOs. 
                Explore our related services:
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="/erp" className="text-primary hover:text-primary-dark underline">
                    → ERPNext Development & Implementation
                  </Link>
                </li>
                <li>
                  <Link href="/crm" className="text-primary hover:text-primary-dark underline">
                    → CRM Solutions for NGOs
                  </Link>
                </li>
                <li>
                  <Link href="/mobile-apps" className="text-primary hover:text-primary-dark underline">
                    → Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-primary hover:text-primary-dark underline">
                    → About Blue Team Africa
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Why did CSLO Sudan choose ERPNext?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  ERPNext offers flexibility, affordability, multilingual support, and the ability to run 
                  offline or from low-connectivity regions—critical in Sudan's challenging infrastructure 
                  environment. As an open-source platform, ERPNext provides the customization capabilities 
                  needed for humanitarian operations while remaining cost-effective for NGOs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Does Blue Team develop ERP systems for other NGOs?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes. We provide ERP, CRM, mobile data collection apps, and digital transformation 
                  solutions for NGOs across Sudan, Uganda, Kenya, Rwanda, and throughout East Africa. 
                  Our team specializes in adapting enterprise systems for humanitarian operations, 
                  ensuring they work effectively in challenging field conditions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How does the mobile data collection app work in low-connectivity areas?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The mobile app is designed with offline-first capabilities. Field staff can collect 
                  data without internet connectivity, storing it locally on their devices. When connectivity 
                  is available, the app automatically syncs data to the central ERPNext system. This 
                  ensures continuous data collection even in remote or conflict-affected areas.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What security measures are in place for sensitive humanitarian data?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The system includes multiple layers of security: encryption for data at rest and in 
                  transit, role-based access controls to ensure staff only see data relevant to their 
                  roles, regular automated backups, and compliance with data protection standards. All 
                  sensitive beneficiary information is protected according to humanitarian data protection 
                  principles.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How long does an ERPNext implementation take for an NGO?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Implementation timelines vary based on scope and complexity. A basic ERPNext setup 
                  typically takes 4-8 weeks, while a full implementation with custom modules, mobile 
                  apps, and training can take 12-16 weeks. We work closely with NGOs to ensure minimal 
                  disruption to operations during implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Ready to Transform Your NGO's Operations?
            </h2>
            <p className="text-primary-100 mb-6">
              Let's discuss how we can help streamline your programs with ERP, CRM, and mobile solutions tailored for humanitarian operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/256765508131"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Get a Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

