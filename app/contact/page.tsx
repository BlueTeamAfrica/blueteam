import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, Mail, Phone, AlertCircle, ArrowRight, MapPin, Clock } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'
import OrganizationSchema from '@/components/OrganizationSchema'
import ContactPageSchema from '@/components/ContactPageSchema'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import PsyloLinks from '@/components/seo/PsyloLinks'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Blue Team Africa - Web Design, Cybersecurity & ERP Solutions',
  description: 'Contact Blue Team Africa for web design Uganda, website development East Africa, SEO experts, cybersecurity, ERP solutions, and NGO tech support in Sudan, Uganda, Kenya & Rwanda.',
  keywords: [
    'web design Uganda',
    'website development East Africa',
    'SEO experts',
    'Sudan NGO tech support',
    'cybersecurity',
    'ERP solutions',
    'contact Blue Team Africa',
    'NGO tech support Uganda',
    'web design company Kampala',
  ],
}

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <ContactPageSchema />
      <LocalBusinessSchema location="Rwanda" />
      <OrganizationSchema />

      <main className="bg-white text-gray-800">
        <InteriorHeader
          title="Contact Us"
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Contact' }
          ]}
        />

        {/* SEO-Optimized Introduction + Contact Form - Two Column Layout */}
        <section className="py-20 container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Get in Touch with East Africa's Leading Digital Solutions Provider
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  Blue Team Africa specializes in <Link href="/services/web-design" className="text-primary hover:underline font-semibold">web design Uganda</Link>, 
                  comprehensive <Link href="/services/website-development" className="text-primary hover:underline font-semibold">website development East Africa</Link>, 
                  and enterprise <Link href="/services/cybersecurity" className="text-primary hover:underline font-semibold">cybersecurity solutions</Link> for NGOs, 
                  businesses, and organizations across Uganda, Sudan, Kenya, and Rwanda. Whether you need <Link href="/services/erp" className="text-primary hover:underline font-semibold">ERP solutions</Link>, 
                  SEO optimization, or specialized <strong>Sudan NGO tech support</strong>, our team is ready to help you transform your digital infrastructure.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  We understand the unique challenges faced by organizations operating in East Africa and conflict-affected regions. 
                  Our expertise in building reliable systems for humanitarian organizations, combined with our technical excellence in 
                  <Link href="/services/mobile-apps" className="text-primary hover:underline font-semibold"> mobile app development</Link>, 
                  <Link href="/services/hosting" className="text-primary hover:underline font-semibold"> secure hosting</Link>, and 
                  <Link href="/services/ecommerce" className="text-primary hover:underline font-semibold"> e-commerce platforms</Link>, 
                  makes us a trusted partner for your digital transformation journey.
                </p>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Reach out to us today to discuss your project requirements, request a consultation, or learn more about how we can 
                  support your organization's technology needs. Our team of <strong>SEO experts</strong> and digital solution specialists 
                  is available to assist you with everything from initial planning to ongoing maintenance and support.
                </p>
              </div>

              {/* Hero Image */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/contact/contact-hero-1.webp"
                  alt="Blue Team Africa Contact"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Blue Team Africa */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
              Why Choose Blue Team Africa
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">Regional Expertise</h3>
                  <p className="text-gray-700">Deep understanding of East African markets, infrastructure challenges, and NGO operational needs in Uganda, Sudan, Kenya, and Rwanda.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">NGO Specialization</h3>
                  <p className="text-gray-700">Proven experience building ERP systems, mobile data collection apps, and secure infrastructure for humanitarian organizations working in challenging environments.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">Comprehensive Solutions</h3>
                  <p className="text-gray-700">Full-service digital agency offering web design, development, cybersecurity, ERP/CRM systems, mobile apps, and ongoing support — all under one roof.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">Security-First Approach</h3>
                  <p className="text-gray-700">Enterprise-grade cybersecurity practices, secure hosting, data encryption, and compliance-focused solutions tailored for sensitive NGO operations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:col-span-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">Responsive Support</h3>
                  <p className="text-gray-700">Fast response times, emergency NGO support line, and dedicated account management to ensure your technology needs are met promptly and efficiently.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
              Contact Information
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information Cards */}
              <div className="space-y-8">
                {/* Quick Contact Options */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Quick Contact</h3>
                  
                  <div className="space-y-6">
                    {/* WhatsApp */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-1">WhatsApp</h4>
                        <p className="text-gray-600 mb-2">Chat with us instantly</p>
                        <a
                          href="https://wa.me/250798973375"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          +250 798 973 375 →
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-1">Email</h4>
                        <p className="text-gray-600 mb-2">Send us a message</p>
                        <a
                          href="mailto:contact@blueteamafrica.com"
                          className="text-primary hover:underline font-medium"
                        >
                          contact@blueteamafrica.com →
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-1">Phone</h4>
                        <p className="text-gray-600 mb-2">Call us directly</p>
                        <a
                          href="tel:+250798973375"
                          className="text-primary hover:underline font-medium"
                        >
                          +250 798 973 375 →
                        </a>
                      </div>
                    </div>

                    {/* Emergency NGO Support */}
                    <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-1">Emergency NGO Support</h4>
                        <p className="text-gray-600 mb-2">24/7 critical support</p>
                        <a
                          href="https://wa.me/250798973375?text=Emergency%20NGO%20Support%20Request"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 hover:underline font-medium"
                        >
                          Get Emergency Support →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Info */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Office Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                        <p className="text-gray-600">Kigali, Rwanda</p>
                        <p className="text-gray-600">Serving: Uganda, Sudan, Kenya, Rwanda</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Emergency NGO Support: 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Images */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src="/images/contact/contact-office-01.webp"
                    alt="Blue Team Africa Office"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    unoptimized={true}
                  />
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src="/images/contact/contact-team-01.webp"
                    alt="Blue Team Africa Team"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
              Explore Our Services
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900">Digital Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services/web-design" className="text-primary hover:underline">Web Design</Link>
                  </li>
                  <li>
                    <Link href="/services/website-development" className="text-primary hover:underline">Website Development</Link>
                  </li>
                  <li>
                    <Link href="/services/ecommerce" className="text-primary hover:underline">E-commerce Solutions</Link>
                  </li>
                  <li>
                    <Link href="/services/ui-ux" className="text-primary hover:underline">UI/UX Design</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900">Business Systems</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services/erp" className="text-primary hover:underline">ERP Solutions</Link>
                  </li>
                  <li>
                    <Link href="/services/crm" className="text-primary hover:underline">CRM Systems</Link>
                  </li>
                  <li>
                    <Link href="/services/mobile-apps" className="text-primary hover:underline">Mobile App Development</Link>
                  </li>
                  <li>
                    <Link href="/services/custom-systems" className="text-primary hover:underline">Custom Systems</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900">Security & Support</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services/cybersecurity" className="text-primary hover:underline">Cybersecurity Solutions</Link>
                  </li>
                  <li>
                    <Link href="/services/hosting" className="text-primary hover:underline">Website Hosting</Link>
                  </li>
                  <li>
                    <Link href="/services/maintenance" className="text-primary hover:underline">Maintenance & Support</Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-primary hover:underline">About Us</Link>
                  </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            For organizations in Rwanda seeking local digital solutions, we provide specialized <Link href="/web-design-rwanda" className="text-primary hover:text-primary-dark hover:underline">website design services in Rwanda</Link> and custom <Link href="/web-development-rwanda" className="text-primary hover:text-primary-dark hover:underline">web development services for businesses and NGOs operating in Rwanda</Link>. Contact us to discuss your project requirements.
          </p>
        </div>

            <div className="text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
              >
                <ArrowRight size={18} className="rotate-180" />
                Back to Homepage
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#F5F7FA]/80 backdrop-blur-md border-b border-gray-200 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ready to Start Your Digital Transformation?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto px-6 text-gray-700">
            Let's discuss how we can help your organization achieve its technology goals with reliable, secure, and scalable solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/250798973375"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-primary-dark transition"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition"
            >
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
      </div>
        </section>

        {/* Psylo Links for SEO */}
        <PsyloLinks />
      </main>
    </>
  )
}

