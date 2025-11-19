import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'About Us',
  description: 'The story of Blue Team Africa - from displacement to serving East Africa with technology solutions.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Story
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            From displacement to building digital solutions across East Africa
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/images/about/1.jpg"
              alt="Our Story"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              A Journey of Resilience and Innovation
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Blue Team Africa was born from a story of displacement, resilience, and determination. 
              Our founders, Sudanese nationals displaced by conflict, found themselves starting anew 
              in Uganda with little more than their skills, ambition, and hope for a better future.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              What began as a struggle to rebuild lives has evolved into a mission to serve communities 
              across East Africa through technology. Having experienced the challenges of displacement 
              and starting over, we understand the importance of reliable digital infrastructure and 
              accessible technology solutions.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Today, we work with businesses, NGOs, and organizations throughout Uganda, Kenya, and 
              Rwanda, providing web development, cloud hosting, and enterprise systems that empower 
              organizations to serve their communities more effectively.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our story is not just about technology—it's about using our expertise to bridge gaps, 
              create opportunities, and contribute to the digital transformation of East Africa. We 
              believe that access to quality technology should not be limited by geography, resources, 
              or circumstance.
            </p>

            <h2 className="text-2xl font-heading font-bold text-gray-900 mt-12 mb-4">
              Building for East Africa
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              From our base in Uganda, we've grown to serve clients across the region. Our deep 
              understanding of local contexts, combined with international best practices, enables 
              us to deliver solutions that truly serve the communities we work with.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Every project we undertake is an opportunity to strengthen the digital infrastructure 
              of East Africa and support organizations making a positive impact in their communities.
            </p>
          </div>
        </div>
      </section>

      {/* Values Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Resilience</h3>
              <p className="text-gray-600">
                We've overcome significant challenges to build something meaningful, and we bring 
                that same determination to every project.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service</h3>
              <p className="text-gray-600">
                Our mission is to serve communities across East Africa with reliable, accessible 
                technology solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We deliver high-quality solutions that meet international standards while respecting 
                local contexts and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Learn More</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/team" className="text-primary hover:text-primary-dark font-medium">
              Our Team →
            </Link>
            <Link href="/mission" className="text-primary hover:text-primary-dark font-medium">
              Our Mission & Values →
            </Link>
            <Link href="/process" className="text-primary hover:text-primary-dark font-medium">
              Our Process →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-primary-100 mb-6">Let's discuss how we can help your organization.</p>
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
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

