import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import InteriorHeader from '@/components/InteriorHeader'
import { MessageCircle, ArrowRight, Globe, Smartphone, Search, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Design Services in Rwanda | Blue Team Africa',
  description: 'Professional web design services for businesses and NGOs in Rwanda. Modern, mobile-first websites optimized for performance and conversions in Kigali and across Rwanda.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.blueteamafrica.com/web-design-rwanda',
  },
  keywords: [
    'web design Rwanda',
    'website design Rwanda',
    'web design Kigali',
    'website design Kigali',
    'professional web design Rwanda',
    'responsive web design Rwanda',
    'business website design Rwanda',
  ],
  openGraph: {
    title: 'Web Design Services in Rwanda | Blue Team Africa',
    description: 'Professional web design services for businesses and NGOs in Rwanda. Modern, mobile-first websites optimized for performance and conversions.',
    url: 'https://www.blueteamafrica.com/web-design-rwanda',
    type: 'website',
  },
}

export default function WebDesignRwandaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer professional web design services in Rwanda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Blue Team Africa provides professional web design services in Rwanda for businesses, NGOs, and startups, focusing on performance, usability, and SEO."
        }
      },
      {
        "@type": "Question",
        "name": "How much does web design cost in Rwanda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Web design costs in Rwanda depend on project scope, features, and complexity. Blue Team Africa offers flexible pricing tailored to business and NGO needs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you design websites for NGOs and organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialize in web design for NGOs and organizations in Rwanda, including informational websites, program portals, and donation-ready platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Will my website be mobile-friendly and SEO optimized?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All websites we design are mobile-friendly, fast-loading, and built with SEO best practices to ensure strong visibility in search results."
        }
      }
    ]
  }

  return (
    <>
      {/* JSON-LD Schema for FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <InteriorHeader
        title="Professional Web Design Services for Businesses in Rwanda"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Web Design Rwanda' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-primary/10 via-primary/5 to-gray-50 py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="fade-up">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 leading-tight">
                Professional Web Design Services for Businesses in Rwanda
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
                We create modern, high-performance websites for businesses and NGOs across Rwanda. Our web design services combine beautiful design with technical excellence, ensuring your website not only looks great but also drives results for your organization.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                Serving organizations in Kigali and throughout Rwanda with responsive, SEO-optimized websites that work seamlessly across all devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/locations/rwanda"
                  className="inline-block px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all font-semibold text-center"
                >
                  Learn About Our Services in Rwanda
                </Link>
              </div>
            </div>
            <div className="fade-in">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/web-design/services-webdesign-web-design-hero-01.webp"
                  alt="Professional web design services for businesses in Rwanda"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        {/* Why Web Design Matters in Rwanda */}
        <section className="mb-16 fade-up" aria-labelledby="why-web-design">
          <h2 id="why-web-design" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Why Web Design Matters for Businesses in Rwanda
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Rwanda's digital landscape is rapidly evolving, with businesses and organizations increasingly recognizing the importance of a strong online presence. A well-designed website serves as your digital storefront, representing your brand and enabling you to reach customers, donors, and stakeholders across Rwanda and beyond.
            </p>
            <p className="mb-4">
              For businesses in Kigali and throughout Rwanda, a professional website is essential for establishing credibility, showcasing services, and driving growth. NGOs and organizations also benefit from effective web design that communicates their mission clearly and engages their target audience.
            </p>
            <p>
              Modern web design goes beyond aesthetics—it encompasses user experience, mobile responsiveness, search engine optimization, and conversion-focused elements that help your organization achieve its goals online.
            </p>
          </div>
        </section>

        {/* Our Web Design Approach */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-10 fade-up" aria-labelledby="our-approach">
          <h2 id="our-approach" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900">
            Our Web Design Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Mobile-First Design</h3>
              <p className="text-gray-700 leading-relaxed">
                We design websites that look and perform beautifully on smartphones, tablets, and desktops. With mobile internet usage growing rapidly in Rwanda, ensuring your website works perfectly on all devices is essential.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Performance Optimization</h3>
              <p className="text-gray-700 leading-relaxed">
                Fast-loading websites keep visitors engaged and improve search engine rankings. We optimize every element for speed, ensuring your website loads quickly even on varying connection speeds across Rwanda.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">SEO-Ready Structure</h3>
              <p className="text-gray-700 leading-relaxed">
                Our websites are built with search engine optimization in mind, helping your business appear in local searches and reach potential customers in Rwanda who are looking for your services.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Conversion-Focused</h3>
              <p className="text-gray-700 leading-relaxed">
                Every design decision is made with your business goals in mind. We create clear calls-to-action and user flows that guide visitors toward taking action, whether that's contacting you, making a donation, or learning more about your services.
              </p>
            </div>
          </div>
        </section>

        {/* Services We Offer */}
        <section className="mb-16 fade-up" aria-labelledby="services-offered">
          <h2 id="services-offered" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900">
            Web Design Services for Organizations in Rwanda
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">
                Business Websites
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Professional websites for businesses in Kigali and across Rwanda, designed to showcase your services and attract customers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">
                Responsive Design
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mobile-optimized websites that provide an excellent user experience on smartphones, tablets, and desktops.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">
                SEO Optimization
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Websites built with search engine optimization to help your business rank higher in local and regional searches.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">
                Fast Performance
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Optimized for speed with modern technologies, ensuring quick load times that keep visitors engaged.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Blue Team Africa */}
        <section className="mb-16 bg-gradient-to-br from-primary/5 to-gray-50 rounded-2xl p-8 md:p-12 fade-up" aria-labelledby="why-choose">
          <h2 id="why-choose" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900 text-center">
            Why Choose Blue Team Africa for Web Design in Rwanda
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Local Understanding</h3>
              <p className="text-gray-700 leading-relaxed">
                We understand the unique needs of businesses and organizations operating in Rwanda. Our experience working with NGOs and companies across East Africa gives us insights into what works in the regional market.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Modern Technology</h3>
              <p className="text-gray-700 leading-relaxed">
                We use cutting-edge web technologies and best practices to build websites that are fast, secure, and scalable. Your website will be built to grow with your business.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                For projects that require advanced functionality, integrations, or scalable systems, we also provide <Link href="/web-development-rwanda" className="text-primary hover:text-primary-dark hover:underline">custom web development services in Rwanda</Link> tailored to complex business and NGO needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Proven Results</h3>
              <p className="text-gray-700 leading-relaxed">
                Our websites help organizations achieve their goals, from increasing online visibility to generating leads and supporting fundraising efforts. We focus on delivering measurable results.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Ongoing Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Beyond design and development, we provide ongoing support, maintenance, and optimization to ensure your website continues to perform well as your organization grows.
              </p>
            </div>
          </div>
        </section>

        {/* Working with Organizations in Rwanda */}
        <section className="mb-16 fade-up" aria-labelledby="working-rwanda">
          <h2 id="working-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Working with Organizations Across Rwanda
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Blue Team Africa works with a diverse range of organizations in Rwanda, from startups and small businesses in Kigali to NGOs and institutions operating across the country. We understand that each organization has unique needs and goals, and we tailor our web design services accordingly.
            </p>
            <p className="mb-4">
              Whether you're a business looking to establish an online presence, an NGO seeking to communicate your mission effectively, or an organization needing to showcase your services, we create websites that align with your objectives and resonate with your target audience.
            </p>
            <p>
              Our remote-first approach allows us to collaborate effectively with organizations throughout Rwanda while maintaining a deep understanding of the local context and market dynamics. We combine technical expertise with regional knowledge to deliver web design solutions that work for Rwandan businesses and organizations.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/locations/rwanda"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark hover:underline"
            >
              Learn more about our services in Rwanda →
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white fade-in shadow-2xl" aria-labelledby="cta-section">
          <h2 id="cta-section" className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-white">
            Ready to Build Your Website in Rwanda?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your web design project and create a website that helps your organization achieve its goals. Contact us today to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/256765508131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

