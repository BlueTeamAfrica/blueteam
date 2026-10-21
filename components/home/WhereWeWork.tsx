import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Flag } from '@/components/Flag'
import { container, sectionPad, focusRing, SectionHeader, ArrowIcon } from './shared'

/** `note`: an extra line under the heading (the about page adds when and how widely); `tone`: its band */
export default async function WhereWeWork({ note, tone = 'light' }: { note?: string; tone?: 'light' | 'white' } = {}) {
  const t = await getTranslations('HomePage.whereWeWork')
  const tHeader = await getTranslations('Header')
  const tFooter = await getTranslations('Footer')
  const linkClass = `mt-4 inline-flex items-center gap-1.5 rounded text-[15px] font-semibold text-[#0D5A8A] !no-underline hover:!underline ${focusRing}`

  const countries = [
    { code: 'sd', name: t('sudan.name'), text: t('sudan.desc'), link: <Link href="/locations/sudan" className={linkClass}>{t('sudanLink')}</Link> },
    { code: 'ug', name: t('uganda.name'), text: t('uganda.desc') },
    { code: 'ke', name: t('kenya.name'), text: t('kenya.desc') },
    {
      code: 'rw',
      name: t('rwanda.name'),
      text: t('rwandaText'),
      link: <Link href="/web-design-rwanda" className={linkClass}>{tFooter('webDesignRwanda')}<ArrowIcon /></Link>,
    },
  ] as const

  return (
    <section aria-labelledby="where-heading" className={`${tone === 'white' ? 'bg-white' : 'bg-[#F6F8FA]'} ${sectionPad}`}>
      <div className={container}>
        <SectionHeader id="where-heading" eyebrow={tHeader('groupWhere')} title={t('heading')} />
        {note && <p className="-mt-6 mb-10 text-[16px] font-semibold text-[#0D5A8A] md:-mt-8 md:mb-12">{note}</p>}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((c) => (
            <div key={c.code} className={`reveal flex flex-col rounded-[20px] border border-[#E3E9EF] p-6 ${tone === 'white' ? 'bg-[#F6F8FA]' : 'bg-white'}`}>
              <Flag code={c.code} size="large" />
              <h3 className="mt-4 font-heading !text-[20px] font-bold text-navy">{c.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#4A5868]">{c.text}</p>
              {'link' in c && <div className="mt-auto">{c.link}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
