import type { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react'
import ContactPageSchema from '@/components/ContactPageSchema'
import ContactForm from '@/components/ContactForm'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages, getTranslations } from 'next-intl/server'
import { Ltr } from '@/components/Ltr'
import { container, focusRing, NetworkLines, ArrowIcon } from '@/components/home/shared'
import { buildAlternates, withSocialDefaults } from '@/lib/metadata-helpers'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'ContactPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'ContactPage' })
  return withSocialDefaults({
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates('/contact', locale),
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
    },
  })
}

// One white section: breadcrumb, H1 and intro, then the form card. On lg the channel list and
// the 24/7 box sit under the intro in a 400px column with the form beside them; on phones they
// follow the form under their own H2. The two channel blocks are the same list, each shown at
// one size only, so the Tab order always matches what is on screen. No in-page CTA, and the
// footer's CTA band is hidden here.

const WHATSAPP = 'https://wa.me/254119402737'
const linkClass = `rounded !no-underline hover:!underline ${focusRing}`

function ChannelRow({ icon, tile, label, children }: { icon: ReactNode; tile: string; label?: string; children: ReactNode }) {
  return (
    <li className="flex items-center gap-4 py-4">
      <span aria-hidden="true" className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] ${tile}`}>{icon}</span>
      <div className="min-w-0">
        {label && <p className="text-[14px] text-[#4A5868]">{label}</p>}
        <div className="text-[17px] font-semibold text-navy">{children}</div>
      </div>
    </li>
  )
}

async function Channels() {
  const t = await getTranslations('ContactPage')
  const tFooter = await getTranslations('Footer')
  const prefill = encodeURIComponent(t('emergencyPrefill'))
  return (
    <>
      <ul className="divide-y divide-[#E3E9EF] border-y border-[#E3E9EF]">
        <ChannelRow icon={<WhatsAppIcon className="h-5 w-5" />} tile="bg-[#075E54] text-white" label={t('whatsappLabel')}>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`text-navy ${linkClass}`}><span className="whitespace-nowrap"><Ltr>+254 119 402 737</Ltr></span></a>
        </ChannelRow>
        <ChannelRow icon={<Phone size={20} strokeWidth={1.75} />} tile="bg-[#EAF4FB] text-primary" label={t('channels.call')}>
          <a href="tel:+254119402737" className={`text-navy ${linkClass}`}><span className="whitespace-nowrap"><Ltr>+254 119 402 737</Ltr></span></a>
          <p className="mt-0.5 text-[14px] font-normal text-[#4A5868]">
            {t('channels.rwandaLine')}{' '}
            <a href="tel:+250798973375" className={`text-[#4A5868] ${linkClass}`}><span className="whitespace-nowrap"><Ltr>+250 798 973 375</Ltr></span></a>
          </p>
        </ChannelRow>
        <ChannelRow icon={<Mail size={20} strokeWidth={1.75} />} tile="bg-[#EAF4FB] text-primary" label={t('emailLabel')}>
          <a href="mailto:contact@blueteamafrica.com" className={`text-navy [overflow-wrap:anywhere] ${linkClass}`}><Ltr>contact@blueteamafrica.com</Ltr></a>
        </ChannelRow>
        <ChannelRow icon={<MapPin size={20} strokeWidth={1.75} />} tile="bg-[#EAF4FB] text-primary">
          {tFooter('registered')}
        </ChannelRow>
      </ul>

      {/* 24/7: navy box, the whole box is the WhatsApp link with the emergency message prefilled */}
      <a
        href={`${WHATSAPP}?text=${prefill}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-6 flex gap-4 rounded-[20px] bg-navy p-5 text-white !no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-white/10 text-[#F0A867]">
          <ShieldCheck size={22} strokeWidth={1.75} />
        </span>
        <span>
          <span className="block font-heading text-[17px] font-bold text-white">{t('emergencyTitle')}</span>
          <span className="mt-1 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#8CC8EE] group-hover:underline">
            {t('emergencyNgoLink')} <ArrowIcon />
          </span>
        </span>
      </a>
    </>
  )
}

export default async function ContactPage() {
  const locale = await getLocale()
  const t = await getTranslations('ContactPage')
  const tTemplate = await getTranslations('ServiceTemplate')
  const messages = await getMessages()
  // ContactForm (client) only needs these two subtrees; keep the client payload small
  const contactFormMessages = {
    ContactPage: { form: messages.ContactPage.form, validation: messages.ContactPage.validation },
  }

  return (
    <>
      {/* JSON-LD: ContactPage only; the site-wide blocks come from the layout */}
      <ContactPageSchema />

      <section aria-labelledby="contact-heading" className="relative overflow-hidden bg-white">
        <NetworkLines className="absolute -start-24 -top-10 w-[420px] text-primary opacity-[0.08] lg:-start-16 lg:w-[540px]" />
        <div className={`${container} relative grid gap-10 pb-16 pt-8 md:pt-12 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-x-16 lg:gap-y-10 lg:pb-24 lg:pt-16`}>
          <div className="lg:col-start-1 lg:row-start-1">
            <nav aria-label={tTemplate('breadcrumbNav')}>
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] text-[#4A5868]">
                <li className="flex items-center gap-2">
                  <Link href="/" className={`hover:text-navy ${linkClass}`}>{t('breadcrumbHome')}</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden="true">{locale === 'ar' ? '‹' : '›'}</span>
                  <span aria-current="page" className="text-navy">{t('breadcrumbContact')}</span>
                </li>
              </ol>
            </nav>
            <h1 id="contact-heading" className="mt-6 font-heading !text-[34px] font-bold !leading-[1.12] text-navy md:!text-[44px] lg:!text-[50px] rtl:!leading-[1.35]">
              {t('title')}
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-[#4A5868] md:text-[18px]">{t('subtitle')}</p>
          </div>

          {/* lg: channels under the intro */}
          <div className="hidden lg:col-start-1 lg:row-start-2 lg:block">
            <Channels />
          </div>

          <div className="rounded-[24px] border border-[#E3E9EF] bg-white p-5 shadow-[0_12px_32px_rgba(11,27,43,0.08)] sm:p-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start">
            <h2 className="mb-6 font-heading !text-[24px] font-bold !leading-snug text-navy md:!text-[28px]">{t('formSectionTitle')}</h2>
            <NextIntlClientProvider messages={contactFormMessages}>
              <ContactForm />
            </NextIntlClientProvider>
          </div>

          {/* Phones: after the form, under their own heading */}
          <div className="lg:hidden">
            <h2 className="mb-4 font-heading !text-[24px] font-bold !leading-snug text-navy">{t('otherWays')}</h2>
            <Channels />
          </div>
        </div>
      </section>
    </>
  )
}
