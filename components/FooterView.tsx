'use client'

import Image from 'next/image'
// Legal pages are English-only: link straight to /privacy etc. (no /ar prefix, no redirect hop)
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Mail, Facebook, Linkedin } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import { Ltr } from '@/components/Ltr'
import { container, NetworkLines } from '@/components/home/shared'

// The footer's markup, rendered from strings that components/Footer.tsx (server) translates.
// A client component on purpose: a server component's whole element tree is serialised again
// into the page's inline RSC payload (+27 KB on /, which delayed first paint); a client
// component only sends its props.
// Colours on the #0A1A2B navy: links #C5D2DE (11.4:1), headings and email #8CC8EE (9.7:1),
// "Africa" #F0A867 (8.8:1). The CTA card is primary-strong (white text 4.52:1).

export interface FooterLink { href: string; label: string }
export interface FooterStrings {
  ctaTitle: string; ctaText: string; cta: string; ctaWhatsApp: string
  tagline: string; services: string; company: string; locations: string
  registered: string; socialFacebook: string; socialLinkedIn: string; legalNav: string; copyright: string
  servicesLinks: FooterLink[]; servicesMoreLinks: FooterLink[]; companyLinks: FooterLink[]
  locationLinks: FooterLink[]; legalLinks: FooterLink[]
}

const PHONES = ['+254 119 402 737', '+250 798 973 375']
const EMAIL = 'contact@blueteamafrica.com'
const WHATSAPP = 'https://wa.me/254119402737'

// White, not primary: the focus ring has to show on the navy and on the blue CTA card
const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
const heading = 'font-heading !text-[13px] font-semibold uppercase !leading-normal tracking-[0.08em] text-[#8CC8EE]'
const link = `rounded text-[15px] text-[#C5D2DE] !no-underline transition-colors hover:text-white ${focusRing}`

function LinkList({ links, className = '' }: { links: FooterLink[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {links.map((l) => (
        <li key={l.href}>
          <Link href={l.href} className={link}>{l.label}</Link>
        </li>
      ))}
    </ul>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function ContactLine({ href, icon, children, className = 'text-[#C5D2DE]' }: { href: string; icon: ReactNode; children: ReactNode; className?: string }) {
  return (
    <li>
      <a href={href} className={`inline-flex items-center gap-2.5 rounded text-[15px] !no-underline transition-colors hover:text-white ${className} ${focusRing}`}>
        {icon}
        {children}
      </a>
    </li>
  )
}

export default function FooterView({ s }: { s: FooterStrings }) {
  const pathname = usePathname()
  // The homepage (/ and /ar) ends with its own CTA band
  const showCta = pathname !== '/' && pathname !== '/ar'
  const social = [
    { href: 'https://www.facebook.com/profile.php?id=61585128246041', label: s.socialFacebook, icon: Facebook },
    { href: 'https://www.linkedin.com/company/blue-team-africa', label: s.socialLinkedIn, icon: Linkedin },
  ]

  const button = `inline-flex min-h-[52px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-[12px] px-6 text-[16px] font-semibold !no-underline transition-colors sm:w-auto ${focusRing}`
  const divider = 'border-white/[0.12]'

  return (
    <footer className="relative overflow-hidden bg-[#0A1A2B] text-[#C5D2DE]">
      <NetworkLines accentNode className="absolute -bottom-20 -end-16 w-[520px] text-[#1B7CBB] opacity-[0.22]" />

      <div className={`${container} relative`}>
        {showCta && (
          <div data-footer-cta className="mt-12 rounded-[24px] bg-primary-strong px-6 py-10 text-white md:mt-16 md:flex md:items-center md:justify-between md:gap-10 md:px-12 md:py-12">
            <div className="max-w-xl">
              <h2 className="font-heading !text-[30px] font-bold !leading-[1.15] text-white">{s.ctaTitle}</h2>
              <p className="mt-3 text-[17px] leading-relaxed text-white">{s.ctaText}</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-0 md:shrink-0">
              <Link href="/contact" className={`${button} bg-white text-navy hover:bg-[#EAF4FB]`}>
                {s.cta}
              </Link>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`${button} border-2 border-white text-white hover:bg-primary-strong-hover`}>
                <WhatsAppIcon />
                {s.ctaWhatsApp}
              </a>
            </div>
          </div>
        )}

        {/* Phones: brand, then a 2×2 grid (Services, its second column, Company, Locations), then
            the badge row. From lg: brand 4 + Services 3+2 + Company 3, then Locations and the
            badge on one row under a divider (the order classes move the divider up there);
            the Locations heading sits inline from xl, above its links at lg so they keep one line */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:py-16 lg:grid-cols-12 lg:gap-x-8">
          <div className="col-span-2 lg:order-1 lg:col-span-4">
            <Link href="/" aria-label="Blue Team Africa" className={`inline-flex items-center gap-2.5 rounded-lg !no-underline ${focusRing}`}>
              <Image src="/images/logo/logo-icon.png" alt="" width={44} height={44} className="h-11 w-11" />
              <span dir="ltr" className="whitespace-nowrap font-heading text-[22px] font-bold leading-none">
                <span className="text-white">Blue Team</span> <span className="text-[#F0A867]">Africa</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed">{s.tagline}</p>
            <ul className="mt-6 space-y-2.5">
              {PHONES.map((p) => (
                <ContactLine key={p} href={`tel:${p.replace(/\s/g, '')}`} icon={<Phone size={16} aria-hidden="true" />}>
                  <Ltr>{p}</Ltr>
                </ContactLine>
              ))}
              <ContactLine href={`mailto:${EMAIL}`} icon={<Mail size={16} aria-hidden="true" />} className="text-[#8CC8EE]">
                <Ltr>{EMAIL}</Ltr>
              </ContactLine>
            </ul>
            <ul className="mt-6 flex gap-3">
              {social.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.08] text-[#C5D2DE] transition-colors hover:bg-primary-strong hover:text-white ${focusRing}`}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-labelledby="footer-services" className="col-span-2 lg:order-1 lg:col-span-5">
            <h2 id="footer-services" className={heading}>{s.services}</h2>
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-5 lg:gap-x-8">
              <LinkList links={s.servicesLinks} className="lg:col-span-3" />
              <LinkList links={s.servicesMoreLinks} className="lg:col-span-2" />
            </div>
          </nav>

          <nav aria-labelledby="footer-company" className="lg:order-1 lg:col-span-3">
            <h2 id="footer-company" className={heading}>{s.company}</h2>
            <LinkList links={s.companyLinks} className="mt-5" />
          </nav>

          <nav aria-labelledby="footer-locations" className="lg:order-2 lg:col-span-8 xl:flex xl:items-center xl:gap-6">
            <h2 id="footer-locations" className={`${heading} shrink-0`}>{s.locations}</h2>
            <ul className="mt-5 space-y-3 lg:mt-3 lg:flex lg:flex-wrap lg:items-center lg:gap-y-2 lg:space-y-0 xl:mt-0">
              {s.locationLinks.map((l, i) => (
                <li key={l.href} className="lg:flex lg:items-center">
                  {i > 0 && <span aria-hidden="true" className="hidden px-3 text-[#5E7388] lg:inline">·</span>}
                  <Link href={l.href} className={link}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={`col-span-2 border-t ${divider} lg:order-1 lg:col-span-12`} aria-hidden="true" />

          <div className="col-span-2 flex flex-wrap items-center gap-x-5 gap-y-3 lg:order-2 lg:col-span-4 lg:justify-end">
            <a
              href="https://www.goodfirms.co/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GoodFirms verified digital solutions company in East Africa"
              className={`inline-block rounded ${focusRing}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Goodfirms-newlogo-kit/PNG/gf-logo-horizontal-light.png"
                alt="GoodFirms verified digital solutions company in East Africa"
                width={180}
                height={34}
                loading="lazy"
                className="h-[34px] w-[180px] opacity-90 transition hover:opacity-100"
              />
            </a>
            <p className="text-[14px]">{s.registered}</p>
          </div>
        </div>

        {/* pb-24 keeps this row clear of the fixed WhatsApp button (56px, 20px from the bottom) */}
        <div className={`flex flex-col gap-4 border-t ${divider} pb-24 pt-8 text-[14px] sm:flex-row sm:items-center sm:justify-between`}>
          <p>{s.copyright}</p>
          <nav aria-label={s.legalNav}>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {s.legalLinks.map((l) => (
                <li key={l.href}>
                  <NextLink href={l.href} className={`${link} !text-[14px]`}>{l.label}</NextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
