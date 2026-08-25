import Link from 'next/link'
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
    title: 'Our Process',
    description: "Blue Team Africa's 6-step development process: Discovery, Design, Development, QA, Deployment, and Support.",
    alternates: buildAlternates('/process', locale),
  }
}

export default async function ProcessPage() {
  const t = await getTranslations('ProcessPage')

  const steps = [
    { number: '01', title: t('step01Title'), description: t('step01Desc') },
    { number: '02', title: t('step02Title'), description: t('step02Desc') },
    { number: '03', title: t('step03Title'), description: t('step03Desc') },
    { number: '04', title: t('step04Title'), description: t('step04Desc') },
    { number: '05', title: t('step05Title'), description: t('step05Desc') },
    { number: '06', title: t('step06Title'), description: t('step06Desc') },
  ]

  return (
    <>
      <InteriorHeader
        title={t('title')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbAbout'), href: '/about' },
          { label: t('breadcrumbProcess') }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Introduction */}
        <SectionWrapper bgColor="white">
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            {t('intro')}
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
            {t('whyH2')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('whyClearCommTitle')}</h3>
              <p className="text-gray-700">{t('whyClearCommBody')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('whyAgileTitle')}</h3>
              <p className="text-gray-700">{t('whyAgileBody')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('whyQualityTitle')}</h3>
              <p className="text-gray-700">{t('whyQualityBody')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('whyPartnershipTitle')}</h3>
              <p className="text-gray-700">{t('whyPartnershipBody')}</p>
            </div>
          </div>
        </SectionWrapper>

        {/* Timeline */}
        <SectionWrapper bgColor="light">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 text-center">
              {t('timelineH2')}
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4">{t('timelineIntro')}</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold">•</span>
                  <span>{t('timelineDiscovery')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold">•</span>
                  <span>{t('timelineDev')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold">•</span>
                  <span>{t('timelineQA')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold">•</span>
                  <span>{t('timelineDeployment')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold">•</span>
                  <span>{t('timelineSupport')}</span>
                </li>
              </ul>
              <p className="text-gray-600 text-sm mt-4 italic">{t('timelineDisclaimer')}</p>
            </div>
          </div>
        </SectionWrapper>

        {/* Related Pages */}
        <SectionWrapper bgColor="white">
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
            <Link href="/mission" className="text-primary hover:text-primary-dark font-medium">
              {t('linkMissionValues')}
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
                {t('ctaGetStarted')}
                <ArrowRight size={18} className="rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </>
  )
}
