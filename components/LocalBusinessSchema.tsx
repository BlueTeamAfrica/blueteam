interface LocalBusinessSchemaProps {
  location?: 'Uganda' | 'Sudan' | 'Rwanda' | 'Kenya'
}

export default function LocalBusinessSchema({ location = 'Rwanda' }: LocalBusinessSchemaProps) {
  const getLocationData = (): { addressCountry: string; addressLocality: string; addressRegion?: string } => {
    switch (location) {
      case 'Rwanda':
        return {
          addressCountry: 'RW',
          addressLocality: 'Kigali',
          addressRegion: 'Kigali City',
        }
      case 'Kenya':
        return {
          addressCountry: 'KE',
          addressLocality: 'Nairobi',
        }
      case 'Sudan':
        return {
          addressCountry: 'SD',
          addressLocality: 'Khartoum',
          addressRegion: 'Khartoum State',
        }
      default: // Uganda
        return {
          addressCountry: 'UG',
          addressLocality: 'Kampala',
          addressRegion: 'Central Region',
        }
    }
  }
  
  const locationData = getLocationData()
  
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Blue Team Africa',
    description: 'Leading web design, website development, cybersecurity, ERP solutions, and NGO tech support in East Africa.',
    url: 'https://www.blueteamafrica.com',
    telephone: '+254119402737',
    email: 'contact@blueteamafrica.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: locationData.addressCountry,
      addressLocality: locationData.addressLocality,
      ...(locationData.addressRegion && { addressRegion: locationData.addressRegion }),
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

