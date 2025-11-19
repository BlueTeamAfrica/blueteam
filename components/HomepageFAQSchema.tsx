export default function HomepageFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does a website project take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Starter: 1–2 weeks. Professional: 3–6 weeks. Complex systems: 3–9 months.',
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

