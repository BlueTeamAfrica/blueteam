import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import ServiceSidebar from '@/components/ServiceSidebar'
import PsyloLinks from '@/components/seo/PsyloLinks'
export const metadata = {
  title: 'Branding & Logo Design',
  description: 'Professional branding and logo design services. Create a memorable brand identity that resonates with your audience in East Africa.',
}

export default function BrandingPage() {
  return (
    <>
      <InteriorHeader
        title="Branding & Logo Design"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Branding' }
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
                  src="/images/services/branding/services-branding-hero-01.webp"
                  alt="Branding & Logo Design"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </section>

            {/* Intro */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Your brand is more than just a logo—it's the visual and emotional connection customers have with your business. 
                Blue Team Africa creates comprehensive brand identities including logo design, color palettes, typography, and 
                brand guidelines. We help businesses across East Africa establish a cohesive, professional brand that stands out 
                and builds trust.
              </p>
            </section>

            {/* 3 Value Pillars */}
            <section className="mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Logo Design</h3>
                  <p className="text-gray-600">
                    Unique, memorable logos that capture your brand essence and 
                    work across all platforms and applications.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand Guidelines</h3>
                  <p className="text-gray-600">
                    Comprehensive style guides ensure consistent brand application 
                    across all marketing materials and touchpoints.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Identity</h3>
                  <p className="text-gray-600">
                    Complete visual systems including color palettes, typography, 
                    and design elements that define your brand.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Blue Team Africa */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                Why Choose Blue Team Africa?
              </h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Strategic Approach</h3>
                  <p>We start with understanding your business, audience, and market to create brands that truly represent who you are.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cultural Understanding</h3>
                  <p>Our team understands East African markets and creates brands that resonate with local audiences while maintaining global appeal.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Versatile Assets</h3>
                  <p>Your brand identity works seamlessly across digital and print, from websites to business cards and everything in between.</p>
                </div>
              </div>
            </section>

            {/* Related Services */}
            <section className="mb-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Related Services</h2>
              <div className="flex flex-wrap gap-4">
                <Link href="/services/web-design" className="text-primary hover:text-primary-dark font-medium">
                  Web Design →
                </Link>
                <Link href="/services/ui-ux" className="text-primary hover:text-primary-dark font-medium">
                  UI/UX Design →
                </Link>
                <Link href="/services/ecommerce" className="text-primary hover:text-primary-dark font-medium">
                  E-commerce Development →
                </Link>
              </div>
            </section>

            {/* CTA Strip */}
            <section className="p-8 bg-primary text-white rounded-lg">
              <div className="text-center">
                <h2 className="text-2xl font-heading font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-primary-100 mb-6">Let's discuss your branding needs and get a free quote today.</p>
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
