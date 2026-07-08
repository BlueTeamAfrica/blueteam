import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceSidebar from '@/components/ServiceSidebar'

import { metadataWebDesign } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSection from '@/components/FAQSection'
import type { FAQ } from '@/lib/faqs'

const webDesignFAQs: FAQ[] = [
  {
    question: 'What types of websites do you design?',
    answer: 'We design corporate and marketing websites, NGO and humanitarian organization sites, landing pages, portfolio sites, and content-heavy informational sites. For businesses that need e-commerce functionality, that is handled through our dedicated e-commerce service, which integrates directly with web design.',
  },
  {
    question: 'How much does a website design project cost?',
    answer: 'Pricing depends on the number of pages, design complexity, and whether custom features like animations or e-commerce are needed. We provide a detailed, no-obligation quote after a short discovery call — reach out via WhatsApp or our contact form for pricing specific to your project.',
  },
  {
    question: 'Is the website SEO-ready from day one?',
    answer: 'Yes. SEO fundamentals are built into every project: semantic HTML structure, meta titles and descriptions, canonical URLs, structured data (JSON-LD), performance-optimized images, and mobile-responsive layouts. We also configure your sitemap and robots.txt correctly on delivery.',
  },
  {
    question: 'How is your web design different from a website builder like Wix or Squarespace?',
    answer: 'Builder platforms lock you into their infrastructure and impose limits on performance, custom code, and ownership. We build on frameworks like Next.js, giving you a fully custom codebase you own, faster load times, and the flexibility to scale. We also handle hosting separately so you are not tied to one vendor.',
  },
  {
    question: 'Do you design websites for NGOs operating in East Africa?',
    answer: 'We have significant experience with NGOs across Sudan, Uganda, Kenya, and Rwanda, including humanitarian organizations with multilingual needs, donor-facing reporting pages, and strict data-handling requirements. We understand what these organizations need and can work within NGO budget realities.',
  },
  {
    question: 'What happens after launch — do you offer maintenance?',
    answer: 'We offer maintenance and support plans that cover security updates, content changes, performance monitoring, and technical fixes. For organizations that want ongoing hosting alongside maintenance, we bundle both through our hosting and maintenance services.',
  },
]

function WebDesignFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: webDesignFAQs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

export const metadata = metadataWebDesign

export default function WebDesignPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.blueteamafrica.com/' },
        { name: 'Services', url: 'https://www.blueteamafrica.com/services' },
        { name: 'Professional Web Design Services', url: 'https://www.blueteamafrica.com/services/web-design' },
      ]} />
      <WebDesignFAQSchema />
      <ServiceSchema serviceName="Web Design" serviceSlug="web-design" />
      <InteriorHeader
        title="Professional Web Design Services"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Web Design' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block lg:w-1/4 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <ServiceSidebar />
            </div>
          </aside>
          
          <div className="lg:w-3/4 flex-grow">
            {/* Hero Image */}
            <section className="mb-12">
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/services/web-design/services-webdesign-web-design-hero-01.webp"
                  alt="Professional Web Design Services"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </section>

            {/* Intro Text Section */}
            <SectionWrapper bgColor="white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Blue Team Africa, we create stunning, functional websites tailored to your business needs. 
            From responsive design to full-stack development, we build digital experiences that convert visitors 
            into customers. Our team combines creative design with cutting-edge technology to deliver websites 
            that perform beautifully across all devices.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            For businesses in Rwanda looking for local web design expertise, visit our <Link href="/web-design-rwanda" className="text-primary hover:text-primary-dark hover:underline">professional web design services in Rwanda</Link> page.
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

      {/* FAQ Section */}
      <SectionWrapper bgColor="white">
        <FAQSection customFAQs={webDesignFAQs} />
      </SectionWrapper>

      {/* CTA Strip */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-primary-100 mb-6">Let's discuss your project and get a free quote today.</p>
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
              Get a Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
          </div>
        </div>
      </div>
    
      {/* Our Services - Mobile Only (Bottom) */}
      <div className="block lg:hidden max-w-7xl mx-auto px-6 pb-12">
        <ServiceSidebar />
      </div>
      
</>
  )
}
