export default function WebSiteSchema() {
  const websiteSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Blue Team Africa',
    url: 'https://www.blueteamafrica.com',
    description: 'Leading web design, website development, and cyber security solutions for East Africa.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.blueteamafrica.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
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

