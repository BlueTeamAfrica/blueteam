import Link from 'next/link'
import Image from 'next/image'
import InteriorHeader from '@/components/InteriorHeader'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const base = 'https://www.blueteamafrica.com'
  const lp = locale === 'en' ? '' : `/${locale}`
  return {
    title: 'About BlueTeam Africa — Web Design & Technology Experts in East Africa',
    description: 'BlueTeam Africa is a Sudanese-founded digital agency delivering world-class web design, hosting, mobile apps, and ICT solutions across East Africa.',
    alternates: { canonical: `${base}${lp}/about` },
  }
}

export default async function AboutPage() {
  const t = await getTranslations('AboutPage')

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.blueteamafrica.com/' },
    { name: 'About Us', url: 'https://www.blueteamafrica.com/about' },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <main className="bg-white text-gray-800">
        <InteriorHeader
          title={t('title')}
          breadcrumb={[
            { label: t('breadcrumbHome'), href: '/' },
            { label: t('breadcrumbAbout') }
          ]}
        />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-64 md:h-80">
          <Image
            src="/images/about/about-team-01.webp"
            alt="Blue Team Africa Team"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('whoWeAreH2')}
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              {t('whoWeArePara1Intro')}{" "}
              <Link href="/services/web-design" className="text-primary hover:underline font-semibold">{t('linkWebDesign')}</Link>,{" "}
              <Link href="/services/mobile-apps" className="text-primary hover:underline font-semibold">{t('linkMobileApps')}</Link>,{" "}
              <Link href="/services/cybersecurity" className="text-primary hover:underline font-semibold">{t('linkCybersecurity')}</Link>,{" "}
              <Link href="/services/hosting" className="text-primary hover:underline font-semibold">{t('linkHosting')}</Link>,{" "}
              <Link href="/services/erp" className="text-primary hover:underline font-semibold">{t('linkERP')}</Link>{t('listAndSeparator')}{" "}
              <Link href="/services/crm" className="text-primary hover:underline font-semibold">{t('linkCRM')}</Link>.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              {t('whoWeArePara2')}
            </p>

            <p className="text-lg leading-relaxed">
              {t('whoWeArePara3')}
            </p>
          </div>

          <div>
            <Image
              src="/images/about/about-office-01.webp"
              alt="Blue Team Africa Office"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Sudan Case Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="/images/about/about-story-01.webp"
                alt="Field Operations"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('sudanH2')}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t('sudanPara1Intro')}{" "}
                <Link href="/services/erp" className="text-primary hover:underline font-semibold">{t('sudanLinkERP')}</Link>,{" "}
                <strong>{t('sudanDonor')}</strong>{t('listAndSeparator')}{" "}
                <Link href="/services/mobile-apps" className="text-primary hover:underline font-semibold">{t('sudanLinkMobile')}</Link>.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                {t('sudanPara2')}
              </p>

              <p className="text-lg leading-relaxed">
                {t('sudanPara3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          {t('specializeH2')}
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold text-xl mb-2">{t('digitalServicesH3')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-design" className="text-primary hover:underline">{t('gridWebDesign')}</Link>
              </li>
              <li>
                <Link href="/services/website-development" className="text-primary hover:underline">{t('gridWebDev')}</Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-primary hover:underline">{t('gridEcommerce')}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">{t('businessSystemsH3')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/erp" className="text-primary hover:underline">{t('gridERP')}</Link>
              </li>
              <li>
                <Link href="/services/crm" className="text-primary hover:underline">{t('gridCRM')}</Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="text-primary hover:underline">{t('gridMobile')}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">{t('securityHostingH3')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/cybersecurity" className="text-primary hover:underline">{t('gridCybersecurity')}</Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-primary hover:underline">{t('gridHosting')}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-gray-700 leading-relaxed">
          <p>
            {t.rich('rwandaPara', {
              webDesignLink: (chunks) => (
                <Link href="/web-design-rwanda" className="text-primary hover:text-primary-dark hover:underline">{chunks}</Link>
              ),
              webDevLink: (chunks) => (
                <Link href="/web-development-rwanda" className="text-primary hover:text-primary-dark hover:underline">{chunks}</Link>
              ),
            })}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5F7FA]/80 backdrop-blur-md border-b border-gray-200 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          {t('ctaH2')}
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto px-6 text-gray-700">
          {t('ctaBody')}
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-white px-10 py-3 font-semibold rounded-lg shadow hover:bg-primary-dark transition"
        >
          {t('ctaButton')}
        </Link>
      </section>

      </main>
    </>
  )
}
