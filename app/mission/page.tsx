import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorPageLayout from '@/components/InteriorPageLayout'
import SectionWrapper from '@/components/SectionWrapper'

export const metadata = {
  title: 'Our Mission & Values',
  description: 'Blue Team Africa\'s mission, vision, and values - human-centered technology, peace, and accessibility for East Africa.',
}

export default function MissionPage() {
  return (
    <InteriorPageLayout
      title="Our Mission & Values"
      subtitle="Human-centered technology, peace, and accessibility"
    >
      {/* Vision */}
      <SectionWrapper bgColor="white">
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
          Our Vision
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          To be the leading technology partner in East Africa, empowering organizations with 
          accessible, reliable digital solutions that drive positive change and sustainable growth.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          We envision a region where quality technology is within reach of every organization, 
          regardless of size or resources. Where digital tools enable businesses and NGOs to 
          serve their communities more effectively, and where innovation thrives in service 
          of human dignity and progress.
        </p>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper bgColor="light">
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          To deliver exceptional technology solutions that serve the needs of businesses and 
          organizations across East Africa. We combine international best practices with deep 
          local understanding to create digital infrastructure that is both powerful and accessible.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Every project we undertake is an opportunity to strengthen communities, support 
          economic growth, and contribute to the digital transformation of the region we call home.
        </p>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper bgColor="white">
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Human-Centered Technology</h3>
            <p className="text-gray-700">
              Technology should serve people, not the other way around. We design solutions 
              with real users in mind, prioritizing usability, accessibility, and genuine value.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Peace Through Service</h3>
            <p className="text-gray-700">
              Having experienced conflict and displacement, we believe in using our skills 
              to build rather than destroy. Every project is a contribution to stability and progress.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility First</h3>
            <p className="text-gray-700">
              Quality technology should not be reserved for the few. We work to make reliable, 
              professional solutions accessible to organizations of all sizes and budgets.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Additional Values */}
      <SectionWrapper bgColor="light">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
            <p className="text-gray-700">
              We maintain high standards in everything we do, from code quality to client communication. 
              Our commitment to excellence ensures our clients receive solutions they can rely on.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
            <p className="text-gray-700">
              Honesty and transparency guide our business relationships. We communicate clearly, 
              deliver on our promises, and stand behind our work.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-700">
              We embrace new technologies and methodologies while remaining practical and results-focused. 
              Innovation serves a purpose: solving real problems for real people.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
            <p className="text-gray-700">
              We're part of the East African technology community and committed to its growth. 
              We share knowledge, support peers, and contribute to the region's digital ecosystem.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Related Pages */}
      <SectionWrapper bgColor="white">
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Learn More</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/about" className="text-primary hover:text-primary-dark font-medium">
            Our Story →
          </Link>
          <Link href="/team" className="text-primary hover:text-primary-dark font-medium">
            Our Team →
          </Link>
          <Link href="/process" className="text-primary hover:text-primary-dark font-medium">
            Our Process →
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA Strip */}
      <SectionWrapper className="bg-primary text-white">
        <div className="text-center">
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
      </SectionWrapper>
    </InteriorPageLayout>
  )
}
