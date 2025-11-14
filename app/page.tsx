import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { generateOrganizationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Professional Web Design & Development Services in East Africa',
  description: 'Expert web design and website design services in Uganda, Kenya, and Rwanda. Blue Team Africa provides professional web design, web development, hosting, and cloud solutions across East Africa. Sudanese tech experts bringing innovation to the region.',
  keywords: ['web design', 'website design', 'web development', 'Uganda', 'Kenya', 'Rwanda', 'East Africa', 'web design company', 'website design company'],
  openGraph: {
    title: 'Professional Web Design & Development Services in East Africa | Blue Team Africa',
    description: 'Expert web design and website design services in Uganda, Kenya, and Rwanda.',
  },
}

export default function Home() {
  const organizationSchema = generateOrganizationSchema(
    'Blue Team Africa',
    'Expert web design and development services across East Africa. Sudanese tech experts bringing innovation to Uganda, Kenya, and Rwanda.',
    'https://blueteamafrica.com',
    undefined,
    []
  )

  return (
    <>
      <JsonLd schema={organizationSchema} />
      
      {/* Hero Section - Modern Design */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Best Web Design & Digital Marketing Company
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100 font-light">
              We are The Best Web Design Digital Marketing Company in East Africa
            </p>
            <p className="text-lg mb-10 text-blue-200 max-w-3xl mx-auto">
              Expert web design and website design services in Uganda, Kenya, and Rwanda. 
              Sudanese tech experts bringing world-class digital solutions to East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary text-lg px-8 py-4 inline-block"
              >
                Get Started
              </Link>
              <Link 
                href="/services/web-design" 
                className="btn-secondary text-lg px-8 py-4 inline-block border-white text-white hover:bg-white hover:text-blue-600"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* At Blue Team Africa Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">At Blue Team Africa</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Looking for the best web design digital marketing company in East Africa? 
                At our agency, we specialize in creating stunning websites and delivering 
                effective digital marketing strategies to help businesses grow online.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We are one of the Best Web Design Digital Marketing Companies in East Africa. 
                  We work with businesses of all sizes to craft stunning, high-performing websites 
                  and data-driven marketing campaigns that help you stand out in today's competitive 
                  digital landscape.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Whether you're a startup, small business, or established brand, our expert team 
                  of web designers and digital marketers are here to help you elevate your online 
                  presence and grow your business. We bring creativity, precision, and cutting-edge 
                  technology to every project—because your success is our mission.
                </p>
                <div className="flex gap-4">
                  <Link href="/about" className="btn-primary">
                    About Us
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">450+</div>
                  <div className="text-xl text-gray-700">Client Websites</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to empower businesses with innovative web design and digital marketing 
                solutions that drive growth and success. We aim to deliver results-driven strategies, 
                combining creativity and technology to help our clients achieve their goals in the 
                digital world.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to be the leading Best Web Design Digital Marketing Company in East 
                Africa and beyond, recognized for our commitment to quality, transparency, and customer 
                success. We strive to create a future where every business can thrive online through 
                impactful digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced with Icons */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Services are Built Specifically for Your Business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Web Design */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Web Design & Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We specialize in crafting clean, modern, and responsive websites that not only 
                look great but perform seamlessly across all devices.
              </p>
              <Link href="/services/web-design" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>

            {/* SEO */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Search Engine Optimization</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Drive organic traffic to your website with our expert SEO services. We optimize 
                your website's structure, content, and performance.
              </p>
              <Link href="/services/web-design" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Digital Marketing */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From social media management to content marketing, our digital marketing strategies 
                are built to attract, engage, and convert your target audience.
              </p>
              <Link href="/services/web-development" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Hosting */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Hosting Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Reliable web hosting solutions with excellent uptime and support for businesses 
                in Uganda, Kenya, and Rwanda.
              </p>
              <Link href="/services/hosting" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>

            {/* App Development */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Application Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We offer custom application development services to meet the unique needs of your 
                business. Whether it's a mobile app or a web-based platform.
              </p>
              <Link href="/services/app-development" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Cloud Services */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Cloud Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Cloud infrastructure and migration services to help your business scale efficiently 
                and securely.
              </p>
              <Link href="/services/cloud" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-left">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We are Sudanese technology experts who fled our country after the war, 
                bringing our expertise and passion for innovation to East Africa. 
                Based in the region, we serve businesses across Uganda, Kenya, and Rwanda 
                with world-class web design and development services.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our team combines deep technical knowledge with an understanding of the 
                local market, delivering web design and website design solutions that 
                help businesses grow and succeed. We specialize in creating beautiful, 
                functional websites that drive results.
              </p>
            </div>
            <Link href="/about" className="btn-primary mt-6">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Location Targeting */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Serving East Africa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional web design and website design services across Uganda, Kenya, and Rwanda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center card-hover">
              <div className="text-4xl font-bold text-blue-600 mb-4">🇺🇬</div>
              <h3 className="text-2xl font-bold mb-4">Uganda</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Expert web design services for businesses in Uganda. 
                Professional website design that drives growth.
              </p>
              <Link href="/uganda/web-design" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                Web Design in Uganda <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center card-hover">
              <div className="text-4xl font-bold text-blue-600 mb-4">🇰🇪</div>
              <h3 className="text-2xl font-bold mb-4">Kenya</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Leading web design and development services in Kenya. 
                Custom solutions for Kenyan businesses.
              </p>
              <Link href="/kenya/web-design" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                Web Design in Kenya <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center card-hover">
              <div className="text-4xl font-bold text-blue-600 mb-4">🇷🇼</div>
              <h3 className="text-2xl font-bold mb-4">Rwanda</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Professional web design services in Rwanda. 
                Modern website design for Rwandan companies.
              </p>
              <Link href="/rwanda/web-design" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                Web Design in Rwanda <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Let's discuss how our web design and development services can help 
            your business succeed in Uganda, Kenya, or Rwanda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
              Contact Us Today
            </Link>
            <Link href="/portfolio" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
