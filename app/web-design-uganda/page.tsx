import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import InteriorHeader from '@/components/InteriorHeader'
import { MessageCircle, ArrowRight, Globe, Smartphone, Search, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Design Company in Uganda | Professional Website Solutions',
  description: 'Professional web design services in Uganda for businesses and NGOs. We build fast, secure, and SEO-ready websites.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.blueteamafrica.com/web-design-uganda',
  },
  keywords: [
    'web design Uganda',
    'website design Uganda',
    'web design Kampala',
    'website design Kampala',
    'professional web design Uganda',
    'responsive web design Uganda',
    'business website design Uganda',
  ],
  openGraph: {
    title: 'Web Design Company in Uganda | Professional Website Solutions',
    description: 'Professional web design services in Uganda for businesses and NGOs. We build fast, secure, and SEO-ready websites.',
    url: 'https://www.blueteamafrica.com/web-design-uganda',
    type: 'website',
  },
}

export default function WebDesignUgandaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer professional web design services in Uganda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Blue Team Africa provides professional web design services in Uganda for businesses, NGOs, and startups, focusing on performance, usability, and SEO."
        }
      },
      {
        "@type": "Question",
        "name": "How much does web design cost in Uganda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Web design costs in Uganda depend on project scope, features, and complexity. Blue Team Africa offers flexible pricing tailored to business and NGO needs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you design websites for NGOs and organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialize in web design for NGOs and organizations in Uganda, including informational websites, program portals, and donation-ready platforms."
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
        title="Professional Web Design Services for Businesses in Uganda"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Web Design Uganda' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-primary/10 via-primary/5 to-gray-50 py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="fade-up">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 leading-tight">
                Professional Web Design Services for Businesses in Uganda
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
                We create modern, high-performance websites for businesses and NGOs across Uganda. Our web design services combine beautiful design with technical excellence, ensuring your website not only looks great but also drives results for your organization.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                Serving organizations in Kampala and throughout Uganda with responsive, SEO-optimized websites that work seamlessly across all devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all font-semibold text-center"
                >
                  Learn About Our Services in Uganda
                </Link>
              </div>
            </div>
            <div className="fade-in">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/web-design/services-webdesign-web-design-hero-01.webp"
                  alt="Professional web design services for businesses in Uganda"
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
        {/* Pricing Section */}
        <section className="mb-16 fade-up" aria-labelledby="pricing-uganda">
          <h2 id="pricing-uganda" className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-gray-900">
            Web Design & Hosting Packages in Uganda
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Cost-effective website solutions tailored for Ugandan businesses.
          </p>
          <div className="pricing-grid">
            {/* Starter */}
            <div className="pricing-card">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-900">Starter</h3>
              <p className="price text-3xl font-bold mb-6 text-primary">UGX 950,000</p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>5-page website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Mobile-friendly design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Free domain (.ug or .com)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>5 professional email accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Basic SEO</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>1 year hosting</span>
                </li>
              </ul>
              <p className="note text-sm text-gray-600 italic">Ideal for startups and small businesses</p>
            </div>

            {/* Business */}
            <div className="pricing-card featured">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-900">Business</h3>
              <p className="price text-3xl font-bold mb-6 text-primary">UGX 2,200,000</p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Up to 12 pages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Custom branding & UI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Unlimited emails</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Advanced SEO</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>High-speed hosting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Lead capture forms</span>
                </li>
              </ul>
              <p className="note text-sm text-gray-600 italic">Best value for established businesses</p>
            </div>

            {/* Enterprise */}
            <div className="pricing-card">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-900">Enterprise</h3>
              <p className="price text-3xl font-bold mb-6 text-primary">Custom Quote</p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Custom software solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>ERP / CRM systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Cloud & VPS hosting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Security & backups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Ongoing technical support</span>
                </li>
              </ul>
              <p className="note text-sm text-gray-600 italic">For NGOs & enterprise clients in Uganda</p>
            </div>
          </div>
        </section>

        {/* Why Web Design Matters in Uganda */}
        <section className="mb-16 fade-up" aria-labelledby="why-web-design">
          <h2 id="why-web-design" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Why Web Design Matters for Businesses in Uganda
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Uganda's digital landscape is rapidly evolving, with businesses and organizations increasingly recognizing the importance of a strong online presence. A well-designed website serves as your digital storefront, representing your brand and enabling you to reach customers, donors, and stakeholders across Uganda and beyond.
            </p>
            <p className="mb-4">
              For businesses in Kampala and throughout Uganda, a professional website is essential for establishing credibility, showcasing services, and driving growth. NGOs and organizations also benefit from effective web design that communicates their mission clearly and engages their target audience.
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
                We design websites that look and perform beautifully on smartphones, tablets, and desktops. With mobile internet usage growing rapidly in Uganda, ensuring your website works perfectly on all devices is essential.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Performance Optimization</h3>
              <p className="text-gray-700 leading-relaxed">
                Fast-loading websites keep visitors engaged and improve search engine rankings. We optimize every element for speed, ensuring your website loads quickly even on varying connection speeds across Uganda.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">SEO-Ready Structure</h3>
              <p className="text-gray-700 leading-relaxed">
                Our websites are built with search engine optimization in mind, helping your business appear in local searches and reach potential customers in Uganda who are looking for your services.
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
            Web Design Services for Organizations in Uganda
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
                Professional websites for businesses in Kampala and across Uganda, designed to showcase your services and attract customers.
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
            Why Choose Blue Team Africa for Web Design in Uganda
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Local Understanding</h3>
              <p className="text-gray-700 leading-relaxed">
                We understand the unique needs of businesses and organizations operating in Uganda. Our experience working with NGOs and companies across East Africa gives us insights into what works in the regional market.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Modern Technology</h3>
              <p className="text-gray-700 leading-relaxed">
                We use cutting-edge web technologies and best practices to build websites that are fast, secure, and scalable. Your website will be built to grow with your business.
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

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white fade-in shadow-2xl" aria-labelledby="cta-section">
          <h2 id="cta-section" className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-white">
            Ready to Build Your Website in Uganda?
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

