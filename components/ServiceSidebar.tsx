'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const services = [
  { name: 'Web Design', href: '/services/web-design' },
  { name: 'Website Development', href: '/services/website-development' },
  { name: 'ERP & CRM Systems', href: '/services/erp' },
  { name: 'Mobile App Development', href: '/services/mobile-apps' },
  { name: 'Hosting & Cloud Infrastructure', href: '/services/hosting' },
  { name: 'Cybersecurity', href: '/services/cybersecurity' },
  { name: 'Branding & Visual Identity', href: '/services/branding' },
  { name: 'UI/UX Design', href: '/services/ui-ux' },
  { name: 'E-commerce Development', href: '/services/ecommerce' },
  { name: 'Custom Systems', href: '/services/custom-systems' },
  { name: 'Maintenance & Support', href: '/services/maintenance' },
]

export default function ServiceSidebar() {
  const pathname = usePathname()

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
        Our Services
      </h3>
      <nav className="space-y-2">
        {services.map((service) => {
          const isActive = pathname === service.href
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
                {service.name}
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

