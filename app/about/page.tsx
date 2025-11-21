import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'

export const metadata = {
  title: 'About Us',
  description: 'The story of Blue Team Africa - from displacement to serving East Africa with technology solutions.',
}

export default function AboutPage() {
  return (
    <>
      <InteriorHeader
        title="Our Story"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Intro Text Section */}
        <SectionWrapper bgColor="white">
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

              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 mt-12">
                What Drives Us
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every organization we work with represents an opportunity to make a real difference. 
                Whether it's helping an NGO deliver humanitarian aid more efficiently, enabling a 
                business to expand its reach, or supporting organizations working in challenging 
                environments, we approach each project with dedication and purpose.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We've built our reputation on delivering quality work, maintaining transparent 
                communication, and truly understanding the unique contexts in which our clients operate. 
                From conflict zones to remote rural areas, we design solutions that work where they're 
                needed most.
              </p>

              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 mt-12">
                Our Commitment
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We're committed to maintaining the highest standards of technical excellence while 
                remaining accessible and affordable for organizations of all sizes. Whether you're 
                a small startup or an established organization, we bring the same level of expertise 
                and dedication to your project.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As we continue to grow, our mission remains unchanged: to use technology as a force 
                for positive change in East Africa, one project at a time.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper bgColor="highlight">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-700 mb-6">
              Ready to discuss your project? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/256765508131"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </>
  )
}
