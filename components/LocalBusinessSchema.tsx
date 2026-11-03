// Kigali is the only public address; the schema renders on /contact
export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Blue Team Africa',
    description: 'Founded by Sudanese technologists, Blue Team Africa builds secure digital systems for NGOs, media, and businesses serving Sudan, the diaspora, and East Africa.',
    url: 'https://www.blueteamafrica.com',
    telephone: '+250798973375',
    email: 'contact@blueteamafrica.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'RW',
      addressLocality: 'Kigali',
      addressRegion: 'Kigali City',
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

