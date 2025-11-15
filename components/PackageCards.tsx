'use client'

import Link from 'next/link'

const PACKAGES = [
  {
    id: 'essential',
    name: 'Essential',
    subtitle: 'Launch your online presence',
    priceHint: 'From $399',
    bullets: [
      '1–3 page responsive website',
      'Mobile-first design & accessibility',
      'Basic on-page SEO and GA4 setup',
      'Managed hosting with daily backups',
      '1 month support & CMS training'
    ],
    timeline: '1–2 weeks',
    cta: '/contact?package=essential'
  },
  {
    id: 'professional',
    name: 'Professional',
    subtitle: 'Scale traffic & sales',
    priceHint: 'From $1,299',
    bullets: [
      '5–12 pages or product catalogue',
      'E-commerce or booking integration',
      'CRM integration & lead flows',
      'Conversion tracking & analytics setup',
      '2 months support & onboarding'
    ],
    timeline: '3–5 weeks',
    cta: '/contact?package=professional'
  },
  {
    id: 'elite',
    name: 'Elite',
    subtitle: 'Enterprise systems & managed ops',
    priceHint: 'Custom pricing',
    bullets: [
      'ERP/CRM integration & middleware',
      'Custom modules & secure APIs',
      'Managed cloud with SLA',
      'Automated reconciliation & reporting',
      'Dedicated technical account manager'
    ],
    timeline: 'Pilot 4–8 weeks; Full rollout 3–9 months',
    cta: '/contact?package=elite'
  }
]

export default function PackageCards() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-heading font-semibold text-dark mb-6">Our Packages</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <article key={p.id} className="bg-white p-6 rounded-2xl shadow border border-gray-100 hover:shadow-lg transition">
              <header>
                <h3 className="text-2xl font-semibold mb-1">{p.name}</h3>
                <p className="text-sm text-muted mb-3">{p.subtitle}</p>
                <p className="text-lg font-semibold text-primary mb-4">{p.priceHint}</p>
              </header>

              <ul className="mb-4 space-y-2 text-gray-700">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <p className="text-sm text-muted">{p.timeline}</p>
                <Link href={p.cta} className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:bg-primary-dark transition">
                  Get started
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

