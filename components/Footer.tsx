import { getTranslations } from 'next-intl/server'
import FooterView, { type FooterLink } from '@/components/FooterView'

// Translates the footer on the server and hands FooterView (client) just the strings
export default async function Footer() {
  const t = await getTranslations('Footer')
  const tHeader = await getTranslations('Header')
  const tSvc = await getTranslations('ServiceSidebar')
  const tNav = await getTranslations('Navigation')
  const tSudan = await getTranslations('LocationsSudanPage')
  const tRwanda = await getTranslations('LocationsRwandaPage')
  const year = new Date().getFullYear()

  // Same service names as the header's Services panel
  const services: FooterLink[] = [
    { href: '/services/web-design', label: tSvc('webDesign') },
    { href: '/services/website-development', label: tSvc('websiteDev') },
    { href: '/services/ui-ux', label: tSvc('uiux') },
    { href: '/services/branding', label: tSvc('branding') },
    { href: '/services/ecommerce', label: tSvc('ecommerce') },
    { href: '/services/mobile-apps', label: tSvc('mobileApps') },
  ]
  const servicesMore: FooterLink[] = [
    { href: '/services/custom-systems', label: tSvc('customSystems') },
    { href: '/services/erp', label: tNav('services.erp.name') },
    { href: '/services/crm', label: tNav('services.crm.name') },
    { href: '/services/cybersecurity', label: tSvc('cybersecurity') },
    { href: '/services/hosting', label: tSvc('hosting') },
    { href: '/services/maintenance', label: tSvc('maintenance') },
  ]
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
