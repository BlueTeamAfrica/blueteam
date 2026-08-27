import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { MessageCircle, Mail, Phone, AlertCircle, ArrowRight, MapPin, Clock } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'
import OrganizationSchema from '@/components/OrganizationSchema'
import ContactPageSchema from '@/components/ContactPageSchema'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Ltr } from '@/components/Ltr'
import { buildAlternates } from '@/lib/metadata-helpers'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Contact Us — Web Design, Cybersecurity & ERP Solutions',
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
    alternates: buildAlternates('/contact', locale),
  }
}

export default async function ContactPage() {
  const t = await getTranslations('ContactPage')

  return (
    <>
      {/* JSON-LD Schemas */}
      <ContactPageSchema />
      <LocalBusinessSchema location="Rwanda" />
      <OrganizationSchema />

      <main className="bg-white text-gray-800">
        <InteriorHeader
          title={t('title')}
          breadcrumb={[
            { label: t('breadcrumbHome'), href: '/' },
            { label: t('breadcrumbContact') }
          ]}
        />

        {/* SEO-Optimized Introduction + Contact Form - Two Column Layout */}
        <section className="py-20 container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                {t('subtitle')}
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  {t.rich('seoPara1', {
                    webDesign: (chunks) => <Link href="/services/web-design" className="text-primary hover:underline font-semibold">{chunks}</Link>,
                    webDev: (chunks) => <Link href="/services/website-development" className="text-primary hover:underline font-semibold">{chunks}</Link>,
                    cyber: (chunks) => <Link href="/services/cybersecurity" className="text-primary hover:underline font-semibold">{chunks}</Link>,
                    erp: (chunks) => <Link href="/services/erp" className="text-primary hover:underline font-semibold">{chunks}</Link>,
                    strong: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  {t.rich('seoPara2', {
                    mobile: (chunks) => <Link href="/services/mobile-apps" className="text-primary hover:underline font-semibold">{chunks}</Link>,
                    hosting: (chunks) => <Link href="/services/hosting" className="text-primary hover:underline font-semibold">{chunks}</Link>,
                    ecommerce: (chunks) => <Link href="/services/ecommerce" className="text-primary hover:underline font-semibold">{chunks}</Link>,
                  })}
                </p>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  {t.rich('seoPara3', {
                    strong: (chunks) => <strong>{chunks}</strong>,
                  })}
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
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('formSectionTitle')}</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Blue Team Africa */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
              {t('whyChooseTitle')}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">{t('regionalExpertise')}</h3>
                  <p className="text-gray-700">{t('regionalExpertiseText')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">{t('regionalExpertiseBody')}</h3>
                  <p className="text-gray-700">{t('ngoExpertiseText')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">{t('responsiveTime')}</h3>
                  <p className="text-gray-700">{t('fullServiceText')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">{t('responsiveTimeBody')}</h3>
                  <p className="text-gray-700">{t('securityFirstText')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:col-span-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">{t('provenResults')}</h3>
                  <p className="text-gray-700">{t('provenResultsText')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
              {t('provenResultsBody')}
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information Cards */}
              <div className="space-y-8">
                {/* Quick Contact Options */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('supportTitle')}</h3>

                  <div className="space-y-6">
                    {/* WhatsApp */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-1">{t('whatsappLabel')}</h4>
                        <p className="text-gray-600 mb-2">{t('supportBody')}</p>
                        <a
                          href="https://wa.me/250798973375"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          <Ltr>+250 798 973 375 →</Ltr>
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-1">{t('emailLabel')}</h4>
                        <p className="text-gray-600 mb-2">{t('directContact')}</p>
                        <a
                          href="mailto:contact@blueteamafrica.com"
                          className="text-primary hover:underline font-medium"
                        >
                          <Ltr>contact@blueteamafrica.com →</Ltr>
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-1">{t('phoneLabel')}</h4>
                        <p className="text-gray-600 mb-2">{t('whatsapp')}</p>
                        <a
                          href="tel:+250798973375"
                          className="text-primary hover:underline font-medium"
                        >
                          <Ltr>+250 798 973 375 →</Ltr>
                        </a>
                      </div>
                    </div>

                    {/* Emergency NGO Support */}
                    <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-1">{t('emergencyNgoTitle')}</h4>
                        <p className="text-gray-600 mb-2">{t('phone')}</p>
                        <a
                          href="https://wa.me/250798973375?text=Emergency%20NGO%20Support%20Request"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 hover:underline font-medium"
                        >
                          {t('emergencyNgoLink')} →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Info */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('email')}</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{t('locationLabel')}</h4>
                        <p className="text-gray-600">{t('office')}</p>
                        <p className="text-gray-600">{t('officeAddress')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{t('hoursLabel')}</h4>
                        <p className="text-gray-600">{t('hours')}</p>
                        <p className="text-gray-600">{t('hoursDetail')}</p>
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
              {t('followUs')}
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900">{t('linksDigitalTitle')}</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services/web-design" className="text-primary hover:underline">{t('linksWebDesign')}</Link>
                  </li>
                  <li>
                    <Link href="/services/website-development" className="text-primary hover:underline">{t('linksWebDev')}</Link>
                  </li>
                  <li>
                    <Link href="/services/ecommerce" className="text-primary hover:underline">{t('linksEcommerce')}</Link>
                  </li>
                  <li>
                    <Link href="/services/ui-ux" className="text-primary hover:underline">{t('linksUIUX')}</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900">{t('linksBusinessTitle')}</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services/erp" className="text-primary hover:underline">{t('linksERP')}</Link>
                  </li>
                  <li>
                    <Link href="/services/crm" className="text-primary hover:underline">{t('linksCRM')}</Link>
                  </li>
                  <li>
                    <Link href="/services/mobile-apps" className="text-primary hover:underline">{t('linksMobile')}</Link>
                  </li>
                  <li>
                    <Link href="/services/custom-systems" className="text-primary hover:underline">{t('linksCustom')}</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900">{t('linksSecurityTitle')}</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services/cybersecurity" className="text-primary hover:underline">{t('linksCyber')}</Link>
                  </li>
                  <li>
                    <Link href="/services/hosting" className="text-primary hover:underline">{t('linksHosting')}</Link>
                  </li>
                  <li>
                    <Link href="/services/maintenance" className="text-primary hover:underline">{t('linksMaintenance')}</Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-primary hover:underline">{t('linksAbout')}</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                {t.rich('rwandaPara', {
                  webDesign: (chunks) => <Link href="/web-design-rwanda" className="text-primary hover:text-primary-dark hover:underline">{chunks}</Link>,
                  webDev: (chunks) => <Link href="/web-development-rwanda" className="text-primary hover:text-primary-dark hover:underline">{chunks}</Link>,
                })}
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
              >
                <ArrowRight size={18} className="rotate-180" />
                {t('backToHome')}
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#F5F7FA]/80 backdrop-blur-md border-b border-gray-200 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            {t('bottomTitle')}
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto px-6 text-gray-700">
            {t('ctaBodyText')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/250798973375"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-primary-dark transition"
            >
              <MessageCircle size={20} />
              {t('bottomSubtitle')}
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition"
            >
              {t('bottomCta')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
