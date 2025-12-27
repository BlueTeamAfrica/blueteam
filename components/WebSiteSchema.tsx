export default function WebSiteSchema() {
  const websiteSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Blue Team Africa',
    url: 'https://www.blueteamafrica.com',
    description: 'Leading web design, website development, and cyber security solutions for East Africa.',
    publisher: {
      '@type': 'Organization',
      name: 'Blue Team Africa',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.blueteamafrica.com/logo.png',
      },
    },
  })

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: websiteSchema }}
    />
  )
}

