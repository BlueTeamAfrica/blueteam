import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceSidebar from '@/components/ServiceSidebar'

import PsyloLinks from '@/components/seo/PsyloLinks'
import { metadataWebDesign } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'

export const metadata = metadataWebDesign

export default function WebDesignPage() {
  return (
    <>
      <ServiceSchema serviceName="Web Design" serviceSlug="web-design" />
      <InteriorHeader
        title="Professional Web Design Services"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Web Design' }
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
                  src="/images/services/web-design/services-webdesign-web-design-hero-01.webp"
                  alt="Professional Web Design Services"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </section>

            {/* Intro Text Section */}
            <SectionWrapper bgColor="white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Blue Team Africa, we create stunning, functional websites tailored to your business needs. 
            From responsive design to full-stack development, we build digital experiences that convert visitors 
            into customers. Our team combines creative design with cutting-edge technology to deliver websites 
            that perform beautifully across all devices.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            For businesses in Rwanda looking for local web design expertise, visit our <Link href="/web-design-rwanda" className="text-primary hover:text-primary-dark hover:underline">professional web design services in Rwanda</Link> page.
          </p>
        </div>
      </SectionWrapper>

      {/* 3 Value Pillars */}
      <SectionWrapper bgColor="light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsive Design</h3>
              <p className="text-gray-600">
                Your website looks perfect on every device, from smartphones to desktops, ensuring 
                a seamless user experience for all your visitors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Performance</h3>
              <p className="text-gray-600">
                Optimized for speed with modern technologies and best practices, delivering 
                lightning-fast load times that keep users engaged.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">SEO Optimized</h3>
              <p className="text-gray-600">
                Built with search engines in mind, helping your website rank higher and attract 
                more organic traffic to grow your business.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Blue Team Africa */}
      <SectionWrapper bgColor="white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
            Why Choose Blue Team Africa?
          </h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p>Our developers and designers have years of experience building successful websites for businesses across East Africa.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Modern Stack</h3>
              <p>We use the latest technologies and frameworks to ensure your website is future-proof and scalable.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Ongoing Support</h3>
              <p>From launch to maintenance, we're here to support your digital presence with updates, security, and optimization.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Related Services */}
      <SectionWrapper bgColor="highlight">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Related Services</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/services/hosting" className="text-primary hover:text-primary-dark font-medium">
              Cloud & Web Hosting →
            </Link>
            <Link href="/services/ecommerce" className="text-primary hover:text-primary-dark font-medium">
              E-commerce Development →
            </Link>
            <Link href="/services/branding" className="text-primary hover:text-primary-dark font-medium">
              Branding & Logo Design →
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Strip */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-primary-100 mb-6">Let's discuss your project and get a free quote today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/254119402737"
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
