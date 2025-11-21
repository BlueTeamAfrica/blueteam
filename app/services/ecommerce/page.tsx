import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import ServiceSidebar from '@/components/ServiceSidebar'

export const metadata = {
  title: 'E-commerce Development',
  description: 'Complete e-commerce solutions for online stores. Custom shopping platforms with payment integration for businesses in East Africa.',
}

export default function EcommercePage() {
  return (
    <>
      <InteriorHeader
        title="E-commerce Development"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'E-commerce' }
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
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/images/services/ecommerce/1.webp"
                  alt="E-commerce Development"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </section>

            {/* Intro */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Transform your business with a custom e-commerce platform designed to maximize sales and customer 
                satisfaction. Blue Team Africa builds complete online stores with secure payment processing, inventory 
                management, and order fulfillment systems. From product catalogs to checkout, we create seamless 
                shopping experiences that convert visitors into customers.
              </p>
            </section>

            {/* 3 Value Pillars */}
            <section className="mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Integration</h3>
                  <p className="text-gray-600">
                    Secure payment gateways including mobile money, bank transfers, and 
                    international cards for easy customer checkout.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Inventory Management</h3>
                  <p className="text-gray-600">
                    Real-time stock tracking and automated order management to keep your 
                    inventory organized and prevent overselling.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Optimized</h3>
                  <p className="text-gray-600">
                    Responsive design ensures your store looks great and functions perfectly 
                    on smartphones and tablets.
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
                  <h3 className="font-semibold text-gray-900 mb-2">Complete Solutions</h3>
                  <p>We handle everything from design and development to payment integration and ongoing maintenance.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Local Payment Methods</h3>
                  <p>Integration with East African payment providers including mobile money ensures customers can pay easily.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">SEO Optimized</h3>
                  <p>Built-in SEO features help your products rank in search engines and attract more organic traffic.</p>
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
                <Link href="/services/branding" className="text-primary hover:text-primary-dark font-medium">
                  Branding & Logo Design →
                </Link>
              </div>
            </section>

            {/* CTA Strip */}
            <section className="p-8 bg-primary text-white rounded-lg">
              <div className="text-center">
                <h2 className="text-2xl font-heading font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-primary-100 mb-6">Let's discuss your e-commerce needs and get a free quote today.</p>
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
    </>
  )
}
