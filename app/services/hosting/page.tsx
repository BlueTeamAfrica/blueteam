import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import ServiceSidebar from '@/components/ServiceSidebar'

import PsyloLinks from '@/components/seo/PsyloLinks'
export const metadata = {
  title: 'Website Hosting Uganda — Secure, Fast & Reliable Hosting',
  description: 'Reliable cloud hosting with 99.9% uptime, SSL, backups and strong security. Perfect for NGOs and businesses.',
  alternates: {
    canonical: 'https://www.blueteamafrica.com/services/hosting',
  },
}

export default function HostingPage() {
  return (
    <>
      <InteriorHeader
        title="Cloud & Web Hosting"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Hosting' }
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
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/services/hosting/services-hosting-hero-01.webp"
                  alt="Cloud & Web Hosting"
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
                Your website's performance starts with reliable hosting. Blue Team Africa provides enterprise-grade 
                cloud hosting and domain services designed to keep your business online. With secure infrastructure, 
                automatic backups, and expert support, we ensure your digital presence stays accessible to your customers 
                around the clock.
              </p>
            </section>

            {/* 3 Value Pillars */}
            <section className="mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">99.9% Uptime</h3>
                  <p className="text-gray-600">
                    Our infrastructure is built for reliability, ensuring your website stays online 
                    when your customers need it most.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Fast</h3>
                  <p className="text-gray-600">
                    Enterprise-level security with SSL certificates and fast CDN integration to 
                    protect and accelerate your site.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
                  <p className="text-gray-600">
                    Our technical team is always available to help with any issues, ensuring 
                    peace of mind for your business.
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
                  <h3 className="font-semibold text-gray-900 mb-2">Local Expertise</h3>
                  <p>We understand the infrastructure needs of East African businesses and provide hosting optimized for regional connectivity.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
                  <p>Start small and grow as your business expands. Our hosting scales seamlessly with your traffic and storage needs.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Automatic Backups</h3>
                  <p>Regular automated backups ensure your data is safe and can be restored quickly in case of any issues.</p>
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
                <Link href="/services/cybersecurity" className="text-primary hover:text-primary-dark font-medium">
                  Cybersecurity →
                </Link>
                <Link href="/services/maintenance" className="text-primary hover:text-primary-dark font-medium">
                  IT Maintenance & Support →
                </Link>
              </div>
            </section>

            {/* CTA Strip */}
            <section className="p-8 bg-primary text-white rounded-lg">
              <div className="text-center">
                <h2 className="text-2xl font-heading font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-primary-100 mb-6">Let's discuss your hosting needs and get a free quote today.</p>
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
    
      
      {/* Psylo Links for SEO */}
      <PsyloLinks />
</>
  )
}
