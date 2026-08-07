'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

const serviceLinks = [
  { key: 'webDesign',      href: '/services/web-design' },
  { key: 'websiteDev',     href: '/services/website-development' },
  { key: 'erpCrm',         href: '/services/erp' },
  { key: 'mobileApps',     href: '/services/mobile-apps' },
  { key: 'hosting',        href: '/services/hosting' },
  { key: 'cybersecurity',  href: '/services/cybersecurity' },
  { key: 'branding',       href: '/services/branding' },
  { key: 'uiux',           href: '/services/ui-ux' },
  { key: 'ecommerce',      href: '/services/ecommerce' },
  { key: 'customSystems',  href: '/services/custom-systems' },
  { key: 'maintenance',    href: '/services/maintenance' },
] as const

type ServiceKey = typeof serviceLinks[number]['key']

export default function ServiceSidebar() {
  const pathname = usePathname()
  const t = useTranslations('ServiceSidebar')

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
        {t('title')}
      </h3>
      <nav className="space-y-2">
        {serviceLinks.map((service) => {
          // pathname includes locale prefix on AR routes (/ar/services/…)
          const isActive = pathname.endsWith(service.href)
          return (
            <Link
              key={service.href}
              href={service.href}
              className={`block py-2 text-sm transition-colors relative group ${
                isActive
                  ? 'text-primary font-medium'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <span className="relative">
                {t(service.key as ServiceKey)}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? 'w-full' : 'group-hover:w-full'
                  }`}
                ></span>
              </span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
