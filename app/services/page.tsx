import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Code, Smartphone, Server, Shield, Palette, ShoppingCart, Settings, Database, Globe, Layers } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'

export const metadata: Metadata = {
  title: 'Our Services — Web Design, Development & Digital Solutions | Blue Team Africa',
  description: 'Comprehensive digital services including web design, mobile apps, ERP systems, cybersecurity, hosting, and more. Serving NGOs and businesses across East Africa.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.blueteamafrica.com/services',
  },
  openGraph: {
    title: 'Our Services — Digital Solutions for East Africa',
    description: 'Web design, mobile apps, ERP systems, cybersecurity, hosting, and enterprise solutions.',
    url: 'https://www.blueteamafrica.com/services',
  },
}

const services = [
  {
    name: 'Web Design',
    href: '/services/web-design',
    description: 'Modern, mobile-first website design optimized for speed, SEO, and user experience.',
    icon: Palette,
    category: 'Design & Development',
  },
  {
    name: 'Website Development',
    href: '/services/website-development',
    description: 'Custom Next.js websites, portals, dashboards, and enterprise systems tailored for your workflow.',
    icon: Code,
    category: 'Design & Development',
  },
  {
    name: 'Mobile App Development',
    href: '/services/mobile-apps',
    description: 'Offline-capable Android & iOS apps that sync directly with your ERP, CRM, or database.',
    icon: Smartphone,
    category: 'Design & Development',
  },
  {
    name: 'E-commerce Development',
    href: '/services/ecommerce',
    description: 'Complete online stores with payment integration, inventory management, and order processing.',
    icon: ShoppingCart,
    category: 'Design & Development',
  },
  {
    name: 'ERP Systems',
    href: '/services/erp',
    description: 'End-to-end NGO management systems: finance, HR, logistics, reporting, and field tracking powered by ERPNext.',
    icon: Database,
    category: 'Enterprise Systems',
  },
  {
    name: 'CRM Solutions',
    href: '/services/crm',
    description: 'Customer and donor management systems for tracking relationships, communications, and engagement.',
    icon: Layers,
    category: 'Enterprise Systems',
  },
  {
    name: 'Custom Systems',
    href: '/services/custom-systems',
    description: 'Tailored software solutions built specifically for your unique business processes and requirements.',
    icon: Settings,
    category: 'Enterprise Systems',
  },
  {
    name: 'Cloud & Web Hosting',
    href: '/services/hosting',
    description: 'Secure, scalable cloud hosting with 99.9% uptime, automated backups, and 24/7 monitoring.',
    icon: Server,
    category: 'Infrastructure',
  },
  {
    name: 'Cybersecurity',
    href: '/services/cybersecurity',
    description: 'Full protection: penetration testing, threat monitoring, audits, backups, secure hosting, and compliance.',
    icon: Shield,
    category: 'Infrastructure',
  },
  {
    name: 'UI/UX Design',
    href: '/services/ui-ux',
    description: 'User-centered design that creates intuitive, engaging experiences for your digital products.',
    icon: Globe,
    category: 'Design & Development',
  },
  {
    name: 'Branding & Visual Identity',
    href: '/services/branding',
    description: 'Complete brand identity packages including logos, color schemes, typography, and brand guidelines.',
    icon: Palette,
    category: 'Design & Development',
  },
  {
    name: 'Maintenance & Support',
    href: '/services/maintenance',
    description: 'Ongoing website maintenance, updates, security patches, and technical support to keep your systems running smoothly.',
    icon: Settings,
    category: 'Infrastructure',
  },
]

const categories = ['All Services', 'Design & Development', 'Enterprise Systems', 'Infrastructure']

export default function ServicesPage() {
  return (
    <>
      <InteriorHeader
        title="Our Services"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Introduction */}
        <SectionWrapper bgColor="white">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Complete Digital Solutions for Your Business
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              From stunning websites to enterprise systems, we provide end-to-end digital services 
              that help NGOs, businesses, and organizations across East Africa achieve their goals. 
              Our team combines design expertise, technical innovation, and regional understanding 
              to deliver solutions that work in challenging environments.
            </p>
          </div>
        </SectionWrapper>

        {/* Services Grid */}
        <SectionWrapper bgColor="light">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-primary/20"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </SectionWrapper>

        {/* Service Categories Overview */}
        <SectionWrapper bgColor="white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Design & Development</h3>
                <p className="text-gray-600 mb-4">
                  Beautiful, functional websites and mobile apps built with modern technologies 
                  and best practices for performance and user experience.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Web Design & Development</li>
                  <li>• Mobile App Development</li>
                  <li>• E-commerce Solutions</li>
                  <li>• UI/UX Design</li>
                  <li>• Branding & Visual Identity</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Systems</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive business management systems including ERP, CRM, and custom 
                  solutions tailored for NGOs and growing businesses.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• ERPNext Implementation</li>
                  <li>• CRM Platforms</li>
                  <li>• Custom Business Software</li>
                  <li>• Field Data Collection Apps</li>
                  <li>• Integration Services</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Infrastructure & Security</h3>
                <p className="text-gray-600 mb-4">
                  Reliable hosting, cybersecurity, and ongoing support to keep your digital 
                  infrastructure secure and running smoothly.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cloud & Web Hosting</li>
                  <li>• Cybersecurity Services</li>
                  <li>• Maintenance & Support</li>
                  <li>• Backup & Recovery</li>
                  <li>• Performance Monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Why Choose Us */}
        <SectionWrapper bgColor="highlight">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
              Why Choose Blue Team Africa?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Regional Expertise</h3>
                <p className="text-gray-600">
                  We understand the unique challenges of operating in East Africa, from connectivity 
                  issues to data security requirements in challenging environments.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">NGO Experience</h3>
                <p className="text-gray-600">
                  Specialized in building systems for humanitarian organizations, with deep understanding 
                  of donor reporting, field operations, and compliance requirements.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Technology</h3>
                <p className="text-gray-600">
                  We use cutting-edge tools like Next.js, ERPNext, Flutter, and Firebase to build 
                  scalable, future-proof solutions.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                <p className="text-gray-600">
                  From launch to long-term maintenance, we provide continuous support, updates, 
                  and optimization to keep your systems running at peak performance.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white rounded-xl">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Let's discuss your needs and find the perfect solution for your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/256765508131"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Chat on WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

