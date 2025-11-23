export default function OrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Blue Team Africa',
    description: 'Leading web design, website development, and cyber security solutions for East Africa.',
    url: 'https://www.blueteamafrica.com',
    logo: 'https://www.blueteamafrica.com/logo.png',
    sameAs: [
      'https://facebook.com/blueteamafrica',
      'https://twitter.com/blueteamafrica',
      'https://linkedin.com/company/blueteamafrica',
      'https://instagram.com/blueteamafrica',
      'https://youtube.com/@blueteamafrica',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+256765508131',
        email: 'contact@blueteamafrica.com',
        contactType: 'customer support',
        areaServed: ['UG', 'KE', 'RW', 'SD'],
        availableLanguage: ['English'],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  )
}

