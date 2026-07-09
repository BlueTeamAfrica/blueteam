import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import InteriorHeader from '@/components/InteriorHeader'
import { MessageCircle, ArrowRight, Globe, Smartphone, Search, Zap } from 'lucide-react'
import FAQSection from '@/components/FAQSection'
import type { FAQ } from '@/lib/faqs'

const webDesignRwandaFAQs: FAQ[] = [
  {
    question: 'How much does web design cost in Rwanda?',
    answer: 'Web design costs in Rwanda depend on project scope, features, and complexity. Blue Team Africa offers flexible pricing tailored to business and NGO needs, with transparent packages starting from RWF 350,000.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'Website development timelines vary based on project complexity. A standard 5-page website typically takes 2-4 weeks, while more complex sites with custom features may take 6-8 weeks. We provide clear timelines during project planning.',
  },
  {
    question: 'Do you work with NGOs and international organizations?',
    answer: 'Yes. We specialize in web design for NGOs and international organizations operating in Rwanda, including informational websites, program portals, donation platforms, and multi-language sites for global audiences.',
  },
  {
    question: 'Can you redesign an existing website?',
    answer: 'Yes. We offer website redesign services to modernize existing sites, improve performance, enhance user experience, and update content management systems while preserving your brand identity and SEO value.',
  },
]

function WebDesignRwandaFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: webDesignRwandaFAQs.map((faq) => ({
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

export const metadata: Metadata = {
  title: 'Web Design Company in Rwanda | High-Performance Websites for Business & NGOs',
  description: 'Professional web design company in Rwanda delivering fast, secure, and SEO-ready websites for businesses and NGOs. Get a custom quote today.',
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
    title: 'Web Design Company in Rwanda | High-Performance Websites for Business & NGOs',
    description: 'Reliable web design company in Rwanda. We build fast, SEO-ready websites for businesses, NGOs, and growing organizations. Get a quote today.',
    url: 'https://www.blueteamafrica.com/web-design-rwanda',
    type: 'website',
  },
}

export default function WebDesignRwandaPage() {
  return (
    <>
      <WebDesignRwandaFAQSchema />
      <InteriorHeader
        title="Professional Web Design Services for Businesses in Rwanda"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Web Design Rwanda' },
        ]}
        headingLevel="h2"
      />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-primary/10 via-primary/5 to-gray-50 py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="fade-up">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 leading-tight">
                Professional Web Design Services for Businesses in Rwanda
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed font-medium">
                Trusted by NGOs, startups, and growing companies across Rwanda. Clear pricing. Fast delivery. No hidden costs.
              </p>
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
        {/* Pricing Section */}
        <section className="mb-16 fade-up" aria-labelledby="pricing-rwanda">
          <h2 id="pricing-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-gray-900">
            Affordable Web Design & Hosting Packages in Rwanda
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Transparent pricing for businesses, startups, and NGOs operating in Rwanda.
          </p>
          <div className="pricing-grid">
            {/* Starter */}
            <div className="pricing-card">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-900">Starter</h3>
              <p className="price text-3xl font-bold mb-6 text-primary">RWF 350,000</p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>5-page professional website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Mobile-responsive design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Free .rw or .com domain (1 year)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Business email (5 accounts)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Basic SEO setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>1 year secure hosting</span>
                </li>
              </ul>
              <p className="note text-sm text-gray-600 italic">Best for small businesses & personal brands</p>
            </div>

            {/* Business */}
            <div className="pricing-card featured">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-900">Business</h3>
              <p className="price text-3xl font-bold mb-6 text-primary">RWF 750,000</p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Up to 12 pages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Custom UI/UX design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Unlimited business emails</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Advanced SEO optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Fast NVMe hosting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Free SSL & CDN</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>WhatsApp & contact form integration</span>
                </li>
              </ul>
              <p className="note text-sm text-gray-600 italic">Most popular for growing companies in Rwanda</p>
            </div>

            {/* Enterprise */}
            <div className="pricing-card">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-900">Enterprise</h3>
              <p className="price text-3xl font-bold mb-6 text-primary">Custom Quote</p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Unlimited pages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Web apps / dashboards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>ERP / CRM integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>High-performance cloud hosting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Security hardening</span>
                </li>
              </ul>
              <p className="note text-sm text-gray-600 italic">For NGOs, institutions & large organizations</p>
            </div>
          </div>
        </section>

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
                For projects that require advanced functionality, integrations, or scalable systems, we also provide <Link href="/web-development-rwanda" className="text-primary hover:text-primary-dark hover:underline">custom web development solutions in Rwanda</Link> tailored to complex business and NGO needs.
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

        {/* Industries We Serve in Rwanda */}
        <section className="mb-16 bg-white rounded-2xl p-8 md:p-10 border border-gray-200 fade-up" aria-labelledby="industries-rwanda">
          <h2 id="industries-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Industries We Serve in Rwanda
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Blue Team Africa provides web design services to organizations across multiple sectors in Rwanda, each with distinct digital communication needs and objectives.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Non-Governmental Organizations</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  NGOs operating in Rwanda require websites that effectively communicate their mission, showcase program impact, and facilitate donor engagement. We design platforms that highlight humanitarian work, program outcomes, and organizational transparency.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Program portfolio and impact reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Donor engagement and fundraising platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Multi-language support for international audiences</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Businesses and Enterprises</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Businesses in Rwanda need professional websites that establish credibility, showcase products and services, and generate leads. We create conversion-focused designs that drive customer engagement and support business growth.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Service showcase and portfolio presentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Lead generation and contact optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>E-commerce and online sales integration</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Educational Institutions</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Schools, universities, and training organizations in Rwanda benefit from websites that provide information to students, parents, and stakeholders while showcasing academic programs and achievements.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Program and course information systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Student portal integration capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>News and event management features</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Healthcare Organizations</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Healthcare providers and medical facilities in Rwanda need websites that build trust, provide essential information, and enable patient engagement while maintaining privacy and compliance standards.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Service information and facility details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Appointment booking system integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Health information and resource libraries</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Web Design Process */}
        <section className="mb-16 fade-up" aria-labelledby="design-process">
          <h2 id="design-process" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Our Web Design Process for Organizations in Rwanda
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              We follow a structured design process that ensures your website meets your organization's goals while delivering an exceptional user experience for your audience in Rwanda and beyond.
            </p>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">1. Discovery and Planning</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We begin by understanding your organization's goals, target audience, and unique requirements. This phase includes stakeholder interviews, competitive analysis, and technical requirements gathering to inform the design strategy.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Stakeholder consultation and goal definition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Audience research and user persona development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Content audit and information architecture planning</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">2. Design and Prototyping</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Our design team creates visual mockups and interactive prototypes that bring your website concept to life. We focus on user experience, visual hierarchy, and conversion optimization throughout the design phase.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Wireframe development and layout planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Visual design and brand integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Interactive prototype creation and user testing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">3. Development and Implementation</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Once designs are approved, we build your website using modern web technologies, ensuring fast performance, mobile responsiveness, and SEO optimization. We conduct thorough testing across devices and browsers.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Responsive frontend development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Performance optimization and speed testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Cross-browser and device compatibility testing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">4. Launch and Optimization</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We manage the launch process, including content migration, final testing, and go-live coordination. After launch, we monitor performance and make optimizations based on user behavior and analytics data.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Pre-launch quality assurance and testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Deployment and DNS configuration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Post-launch monitoring and performance optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="mb-16 bg-gradient-to-br from-primary/5 to-gray-50 rounded-2xl p-8 md:p-10 fade-up" aria-labelledby="related-services">
          <h2 id="related-services" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Related Services for Organizations in Rwanda
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              Beyond web design, Blue Team Africa offers complementary services that help organizations in Rwanda build comprehensive digital solutions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Website Development</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  For organizations requiring advanced functionality, custom features, or complex integrations, our <Link href="/web-development-rwanda" className="text-primary hover:text-primary-dark hover:underline">web development services in Rwanda</Link> provide the technical foundation needed for sophisticated digital platforms.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Includes backend systems, API development, database integration, and scalable architecture.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Branding and UI/UX Design</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Comprehensive branding services that extend beyond web design, including logo creation, brand identity development, and user interface design that creates cohesive visual experiences.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Ensures consistent brand representation across all digital touchpoints.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Hosting and Maintenance</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Reliable hosting solutions optimized for performance in Rwanda, along with ongoing maintenance, security updates, and technical support to keep your website running smoothly.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Includes regular backups, security monitoring, and performance optimization.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">E-commerce Development</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  For businesses looking to sell products or services online, we build e-commerce platforms with payment integration, inventory management, and order processing capabilities.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Supports local payment methods and mobile money integration for Rwanda.
                </p>
              </div>
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
            <p className="mt-4">
              For detailed information about <Link href="/blog/web-design-cost-in-rwanda-2026" className="text-primary hover:text-primary-dark hover:underline">website design cost in Rwanda</Link>, including pricing factors and package options, visit our comprehensive guide.
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

        {/* FAQ Section */}
        <section className="mb-16 fade-up" aria-labelledby="faq-section">
          <h2 id="faq-section" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900">
            Frequently Asked Questions
          </h2>
          <FAQSection customFAQs={webDesignRwandaFAQs} />
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
              href="https://wa.me/254119402737"
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

