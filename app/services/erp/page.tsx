import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceSidebar from '@/components/ServiceSidebar'
import PsyloLinks from '@/components/seo/PsyloLinks'
import type { Metadata } from 'next'
import { metadataERP } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'

export const metadata: Metadata = {
  ...metadataERP,
  keywords: 'ERP systems, ERPNext, ERP solutions Uganda, ERP for NGOs, ERP for humanitarian organizations, ERPNext implementation, enterprise resource planning East Africa, NGO ERP systems',
  openGraph: {
    title: 'ERP Solutions for NGOs, Companies & Humanitarian Organizations',
    description: 'Modern, scalable, and secure ERP systems powered by ERPNext for organizations across East Africa.',
    url: 'https://blueteamafrica.com/services/erp',
    siteName: 'Blue Team Africa',
    images: [
      {
        url: '/images/services/erp-crm/services-erpcrm-erp-crm-dashboard-01.webp',
        width: 1200,
        height: 630,
        alt: 'ERP Solutions for NGOs and Companies',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERP Solutions | Blue Team Africa',
    description: 'Streamline operations with ERPNext-powered ERP systems for NGOs and companies.',
    images: ['/images/services/erp-crm/services-erpcrm-erp-crm-dashboard-01.webp'],
  },
}

export default function ERPPage() {
  return (
    <>
      <ServiceSchema serviceName="ERP" serviceSlug="erp" />
      <InteriorHeader
        title="ERP Solutions for NGOs, Companies & Humanitarian Organizations"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'ERP Solutions' }
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
                  src="/images/services/erp-crm/services-erpcrm-erp-crm-dashboard-01.webp"
                  alt="ERP Systems"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </section>

            {/* Hero Section */}
            <SectionWrapper bgColor="white">
              <div className="max-w-5xl mx-auto">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Blue Team builds modern, scalable, and secure <strong>ERP systems powered by <Link href="/services/erp" className="text-primary hover:underline">ERPNext</Link></strong>—designed for NGOs, companies, and humanitarian organizations operating in complex environments. Streamline operations, automate workflows, and gain real-time visibility across your entire organization.
                </p>
              </div>
            </SectionWrapper>

            {/* Why ERP Section */}
            <SectionWrapper bgColor="light">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                  Centralize Your Entire Organization in One Unified ERP System
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our ERP solutions replace scattered spreadsheets, manual reports, and disconnected workflows. With <strong><Link href="/services/erp" className="text-primary hover:underline">ERPNext</Link></strong>, every department becomes fully connected—finance, HR, procurement, logistics, projects, and field operations.
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-lg">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Finance & Accounting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>HR & Payroll</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Procurement & Vendor Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Inventory & Supply Chain Operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Fleet & Asset Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Donor Reporting & Grant Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Monitoring & Evaluation (M&E)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Project & Program Management</span>
                  </li>
                </ul>
              </div>
            </SectionWrapper>

            {/* Sudan Case Study Section */}
            <SectionWrapper bgColor="highlight">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                  Real Use Case: ERP for Sudan-Based Humanitarian Operations
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We implemented a complete ERP system for a Sudanese humanitarian organization operating in conflict-affected regions. The system centralized field data, procurement, HR operations, and donor reporting into one secure platform—reducing admin time by 40% and improving field visibility.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The ERP platform is fully integrated with a <strong><Link href="/services/mobile-apps" className="text-primary hover:underline">mobile data-collection app</Link></strong> allowing field teams to gather assessments, beneficiary records, and incident reports even in low-connectivity zones. All data syncs directly to the ERP database for real-time dashboards and program oversight.
                </p>
              </div>
            </SectionWrapper>

            {/* Mobile App Integration */}
            <SectionWrapper bgColor="white">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                  Mobile App + ERP Integration for Field Data
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Your ERP is more powerful when connected with a dedicated mobile application. Our integrated <Link href="/services/mobile-apps" className="text-primary hover:underline">mobile solutions</Link> allow your field staff to:
                </p>

                <ul className="space-y-4 text-gray-800 text-lg mb-8">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Collect field reports and beneficiary data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Capture images, GPS coordinates, and incident logs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Work offline and sync automatically once connected</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Access task lists, distribution records, and schedules</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Push updates directly to your operations dashboard</span>
                  </li>
                </ul>

                <p className="text-lg text-gray-700">
                  All submitted data flows securely into your ERP for instant processing, reporting, and program decision-making.
                </p>
              </div>
            </SectionWrapper>

            {/* Key Features Section */}
            <SectionWrapper bgColor="light">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                  What You Get With Blue Team's ERP Solutions
                </h2>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-lg">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Fully customized ERPNext implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Secure <Link href="/services/hosting" className="text-primary hover:underline">hosting</Link> & infrastructure management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Custom modules for NGOs & humanitarian work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Workflow automation for all departments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Role-based access + advanced user permissions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Real-time dashboards & donor reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>API integrations with <Link href="/services/web-design" className="text-primary hover:underline">websites</Link> & <Link href="/services/mobile-apps" className="text-primary hover:underline">mobile apps</Link></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Ongoing <Link href="/services/maintenance" className="text-primary hover:underline">support</Link>, maintenance & training</span>
                  </li>
                </ul>
              </div>
            </SectionWrapper>

            {/* Related Services - Enhanced with Internal Links */}
            <SectionWrapper bgColor="white">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
                  Explore Related Services
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our ERP solutions work seamlessly with our other offerings such as <Link href="/services/web-design" className="text-primary hover:underline">web design</Link> (optimized for NGOs and organizations needing strong visibility), <Link href="/services/mobile-apps" className="text-primary hover:underline">mobile app development</Link> for integrated field operations, and <Link href="/services/cybersecurity" className="text-primary hover:underline">cybersecurity solutions</Link> to protect your digital infrastructure.
                </p>
              </div>
            </SectionWrapper>

            {/* 3 Value Pillars */}
            <SectionWrapper bgColor="light">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrated Operations</h3>
                  <p className="text-gray-600">
                    Connect all departments—finance, inventory, HR, and sales—into a single, unified 
                    system that provides real-time insights.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Customizable Workflows</h3>
                  <p className="text-gray-600">
                    Tailored to your business processes with customizable modules that adapt to your 
                    specific operational needs.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Reporting</h3>
                  <p className="text-gray-600">
                    Comprehensive dashboards and reports that give you instant visibility into your 
                    business performance and help you make data-driven decisions.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* Why Choose Blue Team Africa */}
            <SectionWrapper bgColor="white">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                Why Choose Blue Team Africa?
              </h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">ERPNext Specialists</h3>
                  <p>Our team has deep expertise in <Link href="/services/erp" className="text-primary hover:underline">ERPNext</Link> and <Link href="/services/crm" className="text-primary hover:underline">Frappe</Link> platforms, ensuring your system is implemented correctly and efficiently.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">NGO & Business Focus</h3>
                  <p>We understand the unique needs of NGOs and businesses in East Africa, from donor reporting to local compliance requirements. Our <Link href="/services/mobile-apps" className="text-primary hover:underline">mobile app</Link> solutions integrate seamlessly with ERP systems for field operations.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                  <p>From implementation to training and ongoing <Link href="/services/maintenance" className="text-primary hover:underline">maintenance</Link>, we're here to ensure your ERP system continues to serve your organization effectively.</p>
                </div>
              </div>
            </SectionWrapper>

            {/* CTA Section */}
            <SectionWrapper bgColor="white">
              <div className="max-w-4xl mx-auto text-center py-12 md:py-16 bg-primary text-white rounded-lg">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Build Your ERP System?</h2>
                <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
                  Let's help your organization automate operations, improve reporting, and gain full visibility across teams.
                </p>
                <a
                  href="https://wa.me/254119402737?text=Hello!%20I%20would%20like%20to%20discuss%20ERP%20solutions%20for%20my%20organization."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition shadow-lg"
                >
                  <MessageCircle size={20} />
                  Contact Us
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
    
      
      {/* Psylo Links for SEO */}
      <PsyloLinks />

</>
  )
}
