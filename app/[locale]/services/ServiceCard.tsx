"use client"

import { Link } from '@/i18n/navigation'
import { Palette, Smartphone, Server, Database, BarChart3, FileText } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface ServiceCardProps {
  service: {
    id: string
    title: string
    excerpt: string
    href: string
    icon: string
  }
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'web-design': Palette,
  'mobile-apps': Smartphone,
  'hosting': Server,
  'erp': Database,
  'crm': Database,
  'ecommerce': BarChart3,
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const t = useTranslations('ServiceCard')
  const IconComponent = iconMap[service.id] || Palette

  return (
    <div className="group block rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transform-gpu transition-all duration-200">
      <Link href={service.href}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
            <IconComponent className="w-6 h-6 text-blue-600" />
          </div>

          <div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{service.excerpt}</p>

            <div className="mt-4">
              <span className="inline-flex items-center text-sm font-medium text-blue-600">
                {t('learnMore')}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

