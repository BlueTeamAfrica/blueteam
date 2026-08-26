import { Link } from '@/i18n/navigation'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/metadata-helpers'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Our Mission & Values',
    description: "Blue Team Africa's mission, vision, and values - human-centered technology, peace, and accessibility for East Africa.",
    alternates: buildAlternates('/mission', locale),
  }
}

export default async function MissionPage() {
  const t = await getTranslations('MissionPage')

  return (
    <>
      <InteriorHeader
        title={t('title')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbAbout'), href: '/about' },
          { label: t('breadcrumbMission') }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Subtitle / Tagline */}
        <SectionWrapper bgColor="white">
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </SectionWrapper>

        {/* Vision */}
        <SectionWrapper bgColor="light">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            {t('visionH2')}
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            {t('visionPara1')}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('visionPara2')}
          </p>
        </SectionWrapper>

        {/* Mission */}
        <SectionWrapper bgColor="white">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            {t('missionH2')}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t('missionPara1')}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('missionPara2')}
          </p>
        </SectionWrapper>

        {/* Core Values */}
        <SectionWrapper bgColor="light">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
            {t('coreValuesH2')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('valHuman')}</h3>
              <p className="text-gray-700">{t('valHumanBody')}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('valPeace')}</h3>
              <p className="text-gray-700">{t('valPeaceBody')}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('valAccessibility')}</h3>
              <p className="text-gray-700">{t('valAccessibilityBody')}</p>
            </div>
          </div>
        </SectionWrapper>

        {/* Additional Values */}
        <SectionWrapper bgColor="white">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('valExcellence')}</h3>
              <p className="text-gray-700">{t('valExcellenceBody')}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('valIntegrity')}</h3>
              <p className="text-gray-700">{t('valIntegrityBody')}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('valInnovation')}</h3>
              <p className="text-gray-700">{t('valInnovationBody')}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('valCommunity')}</h3>
              <p className="text-gray-700">{t('valCommunityBody')}</p>
            </div>
          </div>
        </SectionWrapper>

        {/* Related Pages */}
        <SectionWrapper bgColor="light">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">{t('learnMoreH2')}</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="text-primary hover:text-primary-dark font-medium">
              {t('linkOurStory')}
              <span aria-hidden="true" className="rtl:hidden"> →</span>
              <span aria-hidden="true" className="ltr:hidden"> ←</span>
            </Link>
            <Link href="/team" className="text-primary hover:text-primary-dark font-medium">
              {t('linkOurTeam')}
              <span aria-hidden="true" className="rtl:hidden"> →</span>
              <span aria-hidden="true" className="ltr:hidden"> ←</span>
            </Link>
            <Link href="/process" className="text-primary hover:text-primary-dark font-medium">
              {t('linkOurProcess')}
              <span aria-hidden="true" className="rtl:hidden"> →</span>
              <span aria-hidden="true" className="ltr:hidden"> ←</span>
            </Link>
          </div>
        </SectionWrapper>

        {/* CTA Strip */}
        <SectionWrapper className="bg-primary text-white">
          <div className="text-center">
            <h2 className="text-2xl font-heading font-bold mb-4">{t('ctaH2')}</h2>
            <p className="text-primary-100 mb-6">{t('ctaBody')}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/254119402737"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                <MessageCircle size={20} />
                {t('ctaWhatsApp')}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                {t('ctaContact')}
                <ArrowRight size={18} className="rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </>
  )
}
