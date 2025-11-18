import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Mobile App Development',
  description: 'Native and cross-platform mobile app development for iOS and Android. Custom mobile solutions for businesses in East Africa.',
}

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Mobile App Development
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Native and cross-platform apps that engage your users on iOS and Android
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Mobile apps are essential for reaching your customers where they spend most of their time. 
            Blue Team Africa develops native iOS and Android applications, as well as cross-platform solutions, 
            that deliver exceptional user experiences. From concept to launch and beyond, we build mobile apps 
            that drive engagement and business growth.
          </p>
        </div>
      </section>

      {/* 3 Value Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Native & Cross-Platform</h3>
              <p className="text-gray-600">
                Choose native apps for maximum performance or cross-platform solutions 
                for faster development and lower costs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">User-Centered Design</h3>
              <p className="text-gray-600">
                Intuitive interfaces and smooth interactions designed with your users 
                in mind for maximum engagement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">App Store Ready</h3>
              <p className="text-gray-600">
                We handle the entire submission process to get your app approved 
                and published on iOS App Store and Google Play.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Blue Team Africa */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
            Why Choose Blue Team Africa?
          </h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Full-Stack Mobile Expertise</h3>
              <p>Our team specializes in both iOS and Android development, plus backend API integration for complete mobile solutions.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Agile Development</h3>
              <p>We follow agile methodologies to deliver working features quickly and iterate based on your feedback and user data.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Ongoing Maintenance</h3>
              <p>Post-launch support includes updates, bug fixes, and feature enhancements to keep your app performing at its best.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Related Services</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/web-design" className="text-primary hover:text-primary-dark font-medium">
              Web Design & Development →
            </Link>
            <Link href="/ui-ux" className="text-primary hover:text-primary-dark font-medium">
              UI/UX Design →
            </Link>
            <Link href="/custom-systems" className="text-primary hover:text-primary-dark font-medium">
              Custom Software Development →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-primary-100 mb-6">Let's discuss your mobile app idea and get a free quote today.</p>
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
  )
}

