export default function OrganizationSchema() {
  const organizationSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Blue Team Africa',
    description: 'Leading web design, website development, and cyber security solutions for East Africa.',
    url: 'https://www.blueteamafrica.com',
    logo: 'https://www.blueteamafrica.com/logo.png',
    sameAs: [
      'https://www.facebook.com/profile.php?id=61585128246041',
      'https://x.com/BLUETEAMAFRICA',
      'https://www.linkedin.com/company/blue-team-africa',
      'https://www.instagram.com/blueteamafrica/',
      'https://youtube.com/@BLUETEAMAFRICA',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+254119402737',
        email: 'contact@blueteamafrica.com',
        contactType: 'customer support',
        areaServed: ['UG', 'KE', 'RW', 'SD'],
        availableLanguage: ['English'],
      },
    ],
  })

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: organizationSchema }}
    />
  )
}

