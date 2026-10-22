import { getTranslations } from 'next-intl/server'
import FooterView, { type FooterLink } from '@/components/FooterView'
import { SERVICES, getServiceNames } from '@/components/service/services'

// Translates the footer on the server and hands FooterView (client) just the strings
export default async function Footer() {
  const t = await getTranslations('Footer')
  const tHeader = await getTranslations('Header')
  const serviceName = await getServiceNames()
  const tSudan = await getTranslations('LocationsSudanPage')
  const tRwanda = await getTranslations('LocationsRwandaPage')
  const year = new Date().getFullYear()

  // The shared service list, in family order, split over two columns of six
  const allServices: FooterLink[] = SERVICES.map((svc) => ({ href: `/services/${svc.slug}`, label: serviceName(svc) }))
  const services = allServices.slice(0, 6)
  const servicesMore = allServices.slice(6)
  const company: FooterLink[] = [
    { href: '/about', label: tHeader('about') },
    { href: '/portfolio', label: t('caseStudies') },
    { href: '/process', label: tHeader('process') },
    { href: '/team', label: tHeader('team') },
    { href: '/blog', label: tHeader('blog') },
    { href: '/faq', label: tHeader('faq') },
    { href: '/contact', label: t('contact') },
  ]
  const locations: FooterLink[] = [
    { href: '/locations/sudan', label: tSudan('breadcrumbSudan') },
    { href: '/locations/rwanda', label: tRwanda('breadcrumbRwanda') },
    { href: '/web-design-rwanda', label: t('webDesignRwanda') },
    { href: '/web-development-rwanda', label: t('webDevelopmentRwanda') },
  ]
  const legal: FooterLink[] = [
    { href: '/privacy', label: t('privacyPolicy') },
    { href: '/terms', label: t('termsOfService') },
    { href: '/cookies', label: t('cookiePolicy') },
  ]
  return (
    <FooterView
      s={{
        ctaTitle: t('ctaTitle'), ctaText: t('ctaText'), cta: tHeader('cta'), ctaWhatsApp: t('ctaWhatsApp'),
        tagline: t('tagline'), services: tHeader('services'), company: tHeader('company'), locations: t('locations'),
        registered: t('registered'), socialFacebook: t('socialFacebook'), socialLinkedIn: t('socialLinkedIn'),
        legalNav: t('legalNav'), copyright: t('copyright', { year }),
        servicesLinks: services, servicesMoreLinks: servicesMore, companyLinks: company,
        locationLinks: locations, legalLinks: legal,
      }}
    />
  )
}
