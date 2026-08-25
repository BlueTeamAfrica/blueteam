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
    title: 'Our Team',
    description: 'Meet the talented team behind Blue Team Africa - dedicated professionals building technology solutions for East Africa.',
    alternates: buildAlternates('/team', locale),
  }
}

export default async function TeamPage() {
  const t = await getTranslations('TeamPage')

  const teamRoles = [
    { role: t('roleDirector'),  description: t('roleDirectorDesc') },
    { role: t('roleFullStack'), description: t('roleFullStackDesc') },
    { role: t('roleDesigner'),  description: t('roleDesignerDesc') },
    { role: t('roleMobile'),    description: t('roleMobileDesc') },
    { role: t('roleDevOps'),    description: t('roleDevOpsDesc') },
    { role: t('rolePM'),        description: t('rolePMDesc') },
    { role: t('roleQA'),        description: t('roleQADesc') },
    { role: t('roleAnalyst'),   description: t('roleAnalystDesc') },
  ]

  return (
    <>
      <InteriorHeader
        title={t('title')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbAbout'), href: '/about' },
          { label: t('breadcrumbTeam') }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Team Introduction */}
        <SectionWrapper bgColor="white">
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            {t('intro')}
          </p>
        </SectionWrapper>

        {/* Team Roles Grid */}
        <SectionWrapper bgColor="light">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamRoles.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {member.role}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Team Values */}
        <SectionWrapper bgColor="white">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
            {t('valuesH2')}
          </h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('valCollab')}</h3>
              <p>{t('valCollabBody')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('valLearning')}</h3>
              <p>{t('valLearningBody')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('valClient')}</h3>
              <p>{t('valClientBody')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('valRegional')}</h3>
              <p>{t('valRegionalBody')}</p>
            </div>
          </div>
        </SectionWrapper>

        {/* Join Us */}
        <SectionWrapper bgColor="light">
          <div className="text-center">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              {t('joinH2')}
            </h2>
            <p className="text-gray-700 mb-6">
              {t('joinBody')}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium"
            >
              {t('joinCta')}
              <span aria-hidden="true" className="rtl:hidden">→</span>
              <span aria-hidden="true" className="ltr:hidden">←</span>
            </Link>
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
            <Link href="/mission" className="text-primary hover:text-primary-dark font-medium">
              {t('linkMission')}
              <span aria-hidden="true" className="rtl:hidden"> →</span>
              <span aria-hidden="true" className="ltr:hidden"> ←</span>
            </Link>
            <Link href="/process" className="text-primary hover:text-primary-dark font-medium">
              {t('linkProcess')}
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
