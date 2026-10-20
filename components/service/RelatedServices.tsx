import { Link } from '@/i18n/navigation'
import { container, focusRing, stretched, ArrowIcon } from '@/components/home/shared'

// Three bordered link cards to neighbouring services (the page's own related links)

export default function RelatedServices({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <section aria-labelledby="related-heading" className="bg-[#F6F8FA] py-14 md:py-16">
      <div className={container}>
        <h2 id="related-heading" className="mb-8 font-heading !text-[28px] font-bold !leading-[1.15] text-navy md:!text-[36px]">{title}</h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {links.map((l) => (
            <li key={l.href} className="group relative flex items-center justify-between gap-4 rounded-[18px] border border-[#D5DEE7] bg-white px-6 py-5 transition-colors hover:border-primary">
              <h3 className="font-heading !text-[18px] font-semibold !leading-snug text-navy">
                <Link href={l.href} className={`rounded !no-underline group-hover:text-primary-dark ${stretched} ${focusRing}`}>{l.label}</Link>
              </h3>
              <ArrowIcon className="text-primary-dark" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
