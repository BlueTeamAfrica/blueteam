export default function ContactPageSchema() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Us | Blue Team Africa',
    description: 'Contact Blue Team Africa about websites, ERP and CRM systems, mobile apps and cybersecurity for organisations working on Sudan and East Africa.',
    url: 'https://www.blueteamafrica.com/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'Blue Team Africa',
      telephone: '+254119402737',
      email: 'contact@blueteamafrica.com',
      url: 'https://www.blueteamafrica.com',
      logo: 'https://www.blueteamafrica.com/images/logo/logo.png',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'RW',
        addressLocality: 'Kigali',
        addressRegion: 'Kigali City',
      },
      areaServed: ['UG', 'KE', 'RW', 'SD'],
      // The two numbers the page lists: the main line and the Rwanda line
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+254119402737',
          contactType: 'customer support',
          areaServed: ['SD', 'UG', 'KE', 'RW'],
          availableLanguage: ['en', 'ar'],
        },
        {
          '@type': 'ContactPoint',
          telephone: '+250798973375',
          contactType: 'customer support',
          areaServed: 'RW',
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
    />
  )
}

