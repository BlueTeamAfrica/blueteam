export default function WebSiteSchema() {
  const websiteSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Blue Team Africa',
    url: 'https://www.blueteamafrica.com',
    description: 'Founded by Sudanese technologists, Blue Team Africa builds secure digital systems for NGOs, media, and businesses serving Sudan, the diaspora, and East Africa.',
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

