import Script from 'next/script'

export default function WebSiteSchema() {
  const websiteSchema = {
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
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  )
}

