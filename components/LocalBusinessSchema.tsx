interface LocalBusinessSchemaProps {
  location?: 'Uganda' | 'Sudan'
}

export default function LocalBusinessSchema({ location = 'Uganda' }: LocalBusinessSchemaProps) {
  const isUganda = location === 'Uganda'
  
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Blue Team Africa',
    description: 'Leading web design, website development, cybersecurity, ERP solutions, and NGO tech support in East Africa.',
    url: 'https://blueteamafrica.com',
    telephone: '+256765508131',
    email: 'contact@blueteamafrica.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: isUganda ? 'UG' : 'SD',
      addressLocality: isUganda ? 'Kampala' : 'Khartoum',
      addressRegion: isUganda ? 'Central Region' : 'Khartoum State',
    },
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'Country',
        name: 'Uganda',
      },
      {
        '@type': 'Country',
        name: 'Sudan',
      },
      {
        '@type': 'Country',
        name: 'Kenya',
      },
      {
        '@type': 'Country',
        name: 'Rwanda',
      },
    ],
    serviceType: [
      'Web Design',
      'Website Development',
      'Cybersecurity',
      'ERP Solutions',
      'CRM Systems',
      'Mobile App Development',
      'NGO Tech Support',
      'Digital Marketing',
      'Website Hosting',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  )
}

