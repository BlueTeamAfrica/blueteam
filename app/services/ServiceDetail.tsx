import Link from 'next/link'
import type { Service } from './service-data'
import { services } from './page'
import ServiceCard from './ServiceCard'

interface ServiceDetailProps {
  service: Service
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">{service.title}</h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8">{service.hero}</p>

            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-slate-700 leading-relaxed">{service.description}</p>

              {service.bullets && service.bullets.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="text-slate-700 flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href={service.cta.href}
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow hover:shadow-lg hover:bg-blue-700 transition"
              >
                {service.cta.text}
              </Link>
              <a
                href="https://wa.me/254119402737"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl border border-slate-200 text-slate-700 bg-white shadow-sm hover:bg-slate-50"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-slate-100 p-6 bg-slate-50">
                <h4 className="font-semibold text-slate-900 mb-3">Related services</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services/web-design" className="text-slate-700 hover:text-blue-600 text-sm">
                      Web Design & Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/mobile-apps" className="text-slate-700 hover:text-blue-600 text-sm">
                      Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/hosting" className="text-slate-700 hover:text-blue-600 text-sm">
                      Hosting & Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/erp-crm" className="text-slate-700 hover:text-blue-600 text-sm">
                      ERP & CRM
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-100 p-6 bg-white">
                <h4 className="font-semibold text-slate-900 mb-3">Want a quick chat?</h4>
                <a
                  href="https://wa.me/254119402737"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* DESKTOP-ONLY Our Services */}
      <div className="hidden sm:block">
        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
            <header className="mb-8">
              <h2 className="text-2xl font-bold">Our Services</h2>
              <p className="mt-2 text-slate-600">Detailed offerings with focused outcomes and pathway to engagement.</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* MOBILE-ONLY Our Services */}
      <div className="block sm:hidden">
        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
            <header className="mb-8">
              <h2 className="text-2xl font-bold">Our Services</h2>
              <p className="mt-2 text-slate-600">Detailed offerings with focused outcomes and pathway to engagement.</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

