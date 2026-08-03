export interface Service {
  slug: string
  id: string
  title: string
  hero: string
  description: string
  bullets: string[]
  cta: {
    text: string
    href: string
  }
}

export const allServices: Service[] = [
  {
    slug: 'web-design',
    id: 'web-design',
    title: 'Web Design & Development',
    hero: 'Build fast, SEO-first websites for NGOs and businesses in East Africa.',
    description:
      'We design and build Next.js websites optimized for performance, accessibility, and search. Includes content strategy, SEO, and analytics setup.',
    bullets: [
      'SEO-first architecture',
      'Performance & accessibility',
      'CMS integration (WordPress, Strapi, Sanity)',
    ],
    cta: { text: 'Get a web design quote', href: '/contact' },
  },
  {
    slug: 'mobile-apps',
    id: 'mobile-apps',
    title: 'Mobile App Development',
    hero: 'Cross-platform mobile apps for field teams and communities.',
    description:
      'Native-feeling cross-platform apps with offline-first features, push notifications, and secure sync with backend systems.',
    bullets: ['Offline-first', 'Push notifications', 'API integrations'],
    cta: { text: 'Start a mobile app project', href: '/contact' },
  },
  {
    slug: 'hosting',
    id: 'hosting',
    title: 'Hosting & Maintenance',
    hero: 'Managed hosting and site maintenance for mission-critical services.',
    description:
      'Managed VPS and serverless hosting, automated backups, SSL, performance monitoring, and 24/7 incident response options.',
    bullets: ['Automated backups', 'Monitoring & alerts', 'Security updates'],
    cta: { text: 'Discuss hosting options', href: '/contact' },
  },
]

