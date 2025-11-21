import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorPageLayout from '@/components/InteriorPageLayout'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceSidebar from '@/components/ServiceSidebar'

export const metadata = {
  title: 'Web Design',
  description: 'Professional web design services for businesses across East Africa. Custom websites built with modern technologies.',
}

export default function WebDesignPage() {
  return (
    <InteriorPageLayout
      title="Web Design"
      subtitle="Custom websites that engage your audience and drive business growth"
      showSidebar={true}
      sidebar={<ServiceSidebar />}
    >
      {/* Intro Text Section */}
      <SectionWrapper bgColor="white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            At Blue Team Africa, we create stunning, functional websites tailored to your business needs. 
            From responsive design to full-stack development, we build digital experiences that convert visitors 
            into customers. Our team combines creative design with cutting-edge technology to deliver websites 
            that perform beautifully across all devices.
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
    </InteriorPageLayout>
  )
}
