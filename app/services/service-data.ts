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
  {
    slug: 'erp-crm',
    id: 'erp-crm',
    title: 'ERP & CRM',
    hero: 'ERPNext and Odoo implementations tailored to NGOs and SMEs.',
    description:
      'We configure and customize ERP and CRM systems for finance, procurement, HR, and program management, with training and support.',
    bullets: ['Finance & procurement', 'HR & payroll', 'Custom workflows'],
    cta: { text: 'Request ERP consultation', href: '/contact' },
  },
  {
    slug: 'monitoring-evaluation',
    id: 'm-and-e',
    title: 'M&E & Reporting',
    hero: 'Monitoring, evaluation and reporting tools for program teams.',
    description:
      'Dashboards, mobile data capture, and automated reports to reduce manual work and improve decision-making.',
    bullets: ['Realtime dashboards', 'Mobile data capture', 'Automated reports'],
    cta: { text: 'Talk to an M&E specialist', href: '/contact' },
  },
  {
    slug: 'proposal-writing',
    id: 'proposal-writing',
    title: 'Proposal Writing',
    hero: 'Grant and project proposal writing aligned with donor requirements.',
    description:
      'Technical writing, theory of change, budgets and donor-aligned proposals for NGOs and social enterprises.',
    bullets: ['Donor-aligned proposals', 'Logical frameworks', 'Budget templates'],
    cta: { text: 'Request a proposal quote', href: '/contact' },
  },
  {
    slug: 'integrations',
    id: 'integrations',
    title: 'System Integrations',
    hero: 'Connect your systems seamlessly.',
    description:
      'We integrate your existing systems with new platforms, APIs, and services to create a unified workflow.',
    bullets: ['API integrations', 'Data synchronization', 'Workflow automation'],
    cta: { text: 'Discuss integration needs', href: '/contact' },
  },
  {
    slug: 'inventory-pos',
    id: 'inventory-pos',
    title: 'Inventory & POS Systems',
    hero: 'Complete retail & warehouse management systems.',
    description:
      'Point of sale and inventory management systems for retail stores, warehouses, and distribution centers.',
    bullets: ['POS terminals', 'Inventory tracking', 'Sales reporting'],
    cta: { text: 'Get a POS quote', href: '/contact' },
  },
  {
    slug: 'hrm',
    id: 'hrm',
    title: 'HRM Systems',
    hero: 'Human resource management systems for your organization.',
    description:
      'Complete HR management including employee records, payroll, attendance, leave management, and performance tracking.',
    bullets: ['Employee management', 'Payroll processing', 'Attendance tracking'],
    cta: { text: 'Request HRM consultation', href: '/contact' },
  },
]

