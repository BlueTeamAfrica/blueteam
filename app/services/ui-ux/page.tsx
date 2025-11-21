import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import ServiceSidebar from '@/components/ServiceSidebar'

export const metadata = {
  title: 'UI/UX Design',
  description: 'User interface and user experience design services. Create intuitive, beautiful digital experiences for your users.',
}

export default function UIUXPage() {
  return (
    <>
      <InteriorHeader
        title="UI/UX Design"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'UI/UX' }
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
                  src="/images/services/web-design/n.webp"
                  alt="UI/UX Design"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </section>

            {/* Intro */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Great design is invisible—users notice when something works beautifully and intuitively. Blue Team Africa 
                specializes in user interface (UI) and user experience (UX) design that puts your users first. Through 
                research, wireframing, prototyping, and testing, we create digital experiences that are both beautiful 
                and functional, driving engagement and conversion.
              </p>
            </section>

            {/* 3 Value Pillars */}
            <section className="mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">User Research</h3>
                  <p className="text-gray-600">
                    Deep understanding of your users through interviews, surveys, and 
                    analytics to inform design decisions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Intuitive Interfaces</h3>
                  <p className="text-gray-600">
                    Clean, organized layouts with clear navigation that guide users 
                    naturally through your digital product.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Prototyping & Testing</h3>
                  <p className="text-gray-600">
                    Interactive prototypes tested with real users to validate designs 
                    before development begins.
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
                  <h3 className="font-semibold text-gray-900 mb-2">User-Centered Process</h3>
                  <p>Every design decision is backed by user research and testing to ensure we're building what users actually need.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Modern Design Trends</h3>
                  <p>We stay current with the latest UI/UX trends and best practices while maintaining timeless usability principles.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Collaborative Approach</h3>
                  <p>We work closely with your team throughout the design process, ensuring the final product aligns with your vision.</p>
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
                <Link href="/services/mobile-apps" className="text-primary hover:text-primary-dark font-medium">
                  Mobile App Development →
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
                <p className="text-primary-100 mb-6">Let's discuss your UI/UX needs and get a free quote today.</p>
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
