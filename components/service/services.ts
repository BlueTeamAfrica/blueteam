import { getTranslations } from 'next-intl/server'
import {
  Monitor,
  Code2,
  MousePointerClick,
  PenTool,
  ShoppingCart,
  Smartphone,
  Puzzle,
  BarChart3,
  Users,
  ShieldCheck,
  Server,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import type { ServiceFamily } from './ServiceHero'

// The 12 services in their three families, in display order: the one list the header menus,
// the footer, the case-study pages and the /services index all read. Titles keep the names the
// header has always shown (ServiceSidebar, or Navigation.services for ERP and CRM); descriptions
// are the header's one-liners. A figure is one value from the service's results strip, exactly
// as its case page shows it, labelled by that page's own stat key.

export interface ServiceFigure {
  value: string
  /** Case-study namespace and its stat label key */
  namespace: string
  labelKey: string
  /** The case's slug in cases.ts */
  caseSlug: string
}

export interface Service {
  slug: string
  icon: LucideIcon
  /** [namespace, key] of the service's name */
  title: ['ServiceSidebar' | 'Navigation', string]
  /** Header.* one-liner */
  descKey: string
  figure?: ServiceFigure
}

export interface Family {
  id: ServiceFamily
  /** In-page anchor on /services */
  anchor: string
  /** Header.* group heading */
  headingKey: 'groupBuild' | 'groupSystems' | 'groupProtect'
  icon: LucideIcon
  services: Service[]
}

const cslo = (value: string, n: number): ServiceFigure => ({ value, namespace: 'CaseStudyCsloSudanPage', labelKey: `stat${n}Label`, caseSlug: 'cslo-sudan' })
const ecommerceShop = (value: string, n: number): ServiceFigure => ({ value, namespace: 'CaseStudyEcommerceShopPage', labelKey: `stat${n}Label`, caseSlug: 'ecommerce-shop' })

export const FAMILIES: Family[] = [
  {
    id: 'design',
    anchor: 'design',
    headingKey: 'groupBuild',
    icon: Monitor,
    services: [
      { slug: 'web-design', icon: Monitor, title: ['ServiceSidebar', 'webDesign'], descKey: 'descWebDesign', figure: ecommerceShop('5x', 1) },
      { slug: 'website-development', icon: Code2, title: ['ServiceSidebar', 'websiteDev'], descKey: 'descWebDev', figure: cslo('70%', 1) },
      { slug: 'ui-ux', icon: MousePointerClick, title: ['ServiceSidebar', 'uiux'], descKey: 'descUiUx' },
      { slug: 'branding', icon: PenTool, title: ['ServiceSidebar', 'branding'], descKey: 'descBranding' },
      { slug: 'ecommerce', icon: ShoppingCart, title: ['ServiceSidebar', 'ecommerce'], descKey: 'descEcommerce', figure: ecommerceShop('80%', 2) },
    ],
  },
  {
    id: 'systems',
    anchor: 'apps',
    headingKey: 'groupSystems',
    icon: Smartphone,
    services: [
      { slug: 'mobile-apps', icon: Smartphone, title: ['ServiceSidebar', 'mobileApps'], descKey: 'descMobile', figure: cslo('50%', 2) },
      { slug: 'custom-systems', icon: Puzzle, title: ['ServiceSidebar', 'customSystems'], descKey: 'descCustom', figure: { value: '75%', namespace: 'CaseStudyNgoPortalPage', labelKey: 'stat1Label', caseSlug: 'ngo-portal' } },
      { slug: 'erp', icon: BarChart3, title: ['Navigation', 'services.erp.name'], descKey: 'descErp', figure: cslo('70%', 1) },
      { slug: 'crm', icon: Users, title: ['Navigation', 'services.crm.name'], descKey: 'descCrm', figure: { value: '45%', namespace: 'CaseStudyCrmSystemPage', labelKey: 'stat1Label', caseSlug: 'crm-system' } },
    ],
  },
  {
    id: 'protect',
    anchor: 'protect',
    headingKey: 'groupProtect',
    icon: ShieldCheck,
    services: [
      { slug: 'cybersecurity', icon: ShieldCheck, title: ['ServiceSidebar', 'cybersecurity'], descKey: 'descSecurity' },
      { slug: 'hosting', icon: Server, title: ['ServiceSidebar', 'hosting'], descKey: 'descHosting', figure: { value: '99.9%', namespace: 'CaseStudyCloudMigrationPage', labelKey: 'stat1Label', caseSlug: 'cloud-migration' } },
      { slug: 'maintenance', icon: Wrench, title: ['ServiceSidebar', 'maintenance'], descKey: 'descMaintenance' },
    ],
  },
]

export const SERVICES: Service[] = FAMILIES.flatMap((f) => f.services)

/** Translator for service names: name(service) → the name the header shows */
export async function getServiceNames() {
  const tSvc = await getTranslations('ServiceSidebar')
  const tNav = await getTranslations('Navigation')
  return (s: Service) => (s.title[0] === 'Navigation' ? tNav(s.title[1]) : tSvc(s.title[1]))
}
