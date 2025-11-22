export default function ContactPageSchema() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Us | Blue Team Africa',
    description: 'Get in touch with Blue Team Africa for web design, website development, cybersecurity, ERP solutions, and NGO tech support in Uganda, Sudan, Kenya, and Rwanda.',
    url: 'https://blueteamafrica.com/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'Blue Team Africa',
      telephone: '+256765508131',
      email: 'contact@blueteamafrica.com',
      url: 'https://blueteamafrica.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'UG',
        addressLocality: 'Kampala',
      },
      areaServed: ['UG', 'KE', 'RW', 'SD'],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
    />
  )
}

