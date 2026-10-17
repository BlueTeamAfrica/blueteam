export default function HomepageFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does it take to design a website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It depends on size: a small website (landing page or up to about 5 pages) takes 10–14 days, a business website (about 6–15 pages with a CMS and integrations) 2–4 weeks, and a web application or portal (logins, dashboards, databases) 6–8 weeks. We confirm the timeline after scoping.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a website cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Costs depend on scope. Starter packages available; final quotes after an audit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide hosting and maintenance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — managed hosting with daily backups, SSL, monitoring and optional support retainers.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you secure our data?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use encryption, RBAC, vulnerability scanning, and disaster recovery plans.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

