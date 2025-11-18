import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Cybersecurity',
  description: 'Comprehensive cybersecurity solutions including penetration testing, security audits, and secure operations for East African businesses.',
}

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Cybersecurity
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Protect your business with comprehensive security solutions and expert guidance
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            In today's digital landscape, cybersecurity is not optional. Blue Team Africa provides comprehensive 
            security solutions including penetration testing, vulnerability assessments, and security audits. 
            We help businesses across East Africa protect their data, systems, and reputation from evolving 
            cyber threats.
          </p>
        </div>
      </section>

      {/* 3 Value Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Audits</h3>
              <p className="text-gray-600">
                Comprehensive assessments identify vulnerabilities in your systems 
                and networks before attackers can exploit them.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Penetration Testing</h3>
              <p className="text-gray-600">
                Simulated attacks test your defenses and reveal security gaps that 
                need immediate attention.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Operations</h3>
              <p className="text-gray-600">
                Ongoing monitoring and incident response services to maintain 
                your security posture and quickly address threats.
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
              <h3 className="font-semibold text-gray-900 mb-2">Certified Experts</h3>
              <p>Our security team includes certified professionals with deep expertise in identifying and mitigating cyber threats.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Proactive Approach</h3>
              <p>We don't just react to incidents—we help you build robust defenses and security practices to prevent attacks.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Compliance Support</h3>
              <p>Get help meeting industry standards and regulatory requirements with our compliance-focused security services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Related Services</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/hosting" className="text-primary hover:text-primary-dark font-medium">
              Cloud & Web Hosting →
            </Link>
            <Link href="/maintenance" className="text-primary hover:text-primary-dark font-medium">
              IT Maintenance & Support →
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
          <p className="text-primary-100 mb-6">Let's discuss your security needs and get a free quote today.</p>
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

