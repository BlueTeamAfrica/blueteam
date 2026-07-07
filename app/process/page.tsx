import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorPageLayout from '@/components/InteriorPageLayout'
import SectionWrapper from '@/components/SectionWrapper'

export const metadata = {
  title: 'Our Process',
  description: 'Blue Team Africa\'s 6-step development process: Discovery, Design, Development, QA, Deployment, and Support.',
}

export default function ProcessPage() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We begin by understanding your business, goals, and requirements. Through consultations and research, we identify challenges, opportunities, and the best path forward for your project.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our design team creates wireframes, prototypes, and visual designs that align with your brand and user needs. We iterate based on your feedback until the design is perfect.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'With approved designs, our developers build your solution using modern technologies and best practices. We follow agile methodologies, providing regular updates and demos throughout development.',
    },
    {
      number: '04',
      title: 'Quality Assurance',
      description: 'Our QA team thoroughly tests your solution across different devices, browsers, and scenarios. We ensure everything works as expected and meets quality standards before launch.',
    },
    {
      number: '05',
      title: 'Deployment',
      description: 'We handle the deployment process, ensuring smooth launch with minimal downtime. This includes server configuration, domain setup, SSL certificates, and initial go-live support.',
    },
    {
      number: '06',
      title: 'Support',
      description: 'After launch, we provide ongoing support including bug fixes, updates, monitoring, and enhancements. We\'re here to ensure your solution continues to serve your business effectively.',
    },
  ]

  return (
    <InteriorPageLayout
      title="Our Process"
      subtitle="A structured approach to delivering quality solutions"
    >
      {/* Process Introduction */}
      <SectionWrapper bgColor="white">
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          We follow a proven 6-step process designed to deliver exceptional results while keeping 
          you informed and involved every step of the way. From initial discovery to ongoing support, 
          our methodology ensures your project succeeds.
        </p>
      </SectionWrapper>

      {/* 6 Steps */}
      <SectionWrapper bgColor="light">
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary text-white rounded-lg flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Our Process Works */}
      <SectionWrapper bgColor="white">
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
          Why Our Process Works
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Clear Communication</h3>
            <p className="text-gray-700">
              Regular updates and demos ensure you're always informed about progress and can provide feedback when it matters most.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Flexible & Agile</h3>
            <p className="text-gray-700">
              Our process adapts to your needs. We can adjust timelines, priorities, and approaches based on changing requirements.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Quality Focused</h3>
            <p className="text-gray-700">
              Built-in quality checks at every stage ensure we deliver solutions that meet your standards and exceed expectations.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Long-Term Partnership</h3>
            <p className="text-gray-700">
              Our process extends beyond launch with ongoing support, ensuring your solution evolves with your business needs.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper bgColor="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 text-center">
            Typical Timeline
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">
              While every project is unique, here's a general timeline you can expect:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary font-semibold">•</span>
                <span><strong>Discovery & Design:</strong> 2-4 weeks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-semibold">•</span>
                <span><strong>Development:</strong> 4-12 weeks (varies by project scope)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-semibold">•</span>
                <span><strong>QA & Testing:</strong> 1-2 weeks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-semibold">•</span>
                <span><strong>Deployment:</strong> 1 week</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-semibold">•</span>
                <span><strong>Support:</strong> Ongoing</span>
              </li>
            </ul>
            <p className="text-gray-600 text-sm mt-4 italic">
              *Timelines are estimates and will be adjusted based on your specific project requirements.
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
          <Link href="/mission" className="text-primary hover:text-primary-dark font-medium">
            Our Mission & Values →
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA Strip */}
      <SectionWrapper className="bg-primary text-white">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-primary-100 mb-6">Let's discuss your needs and begin the discovery phase.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/254119402737"
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
              Get Started
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </InteriorPageLayout>
  )
}

