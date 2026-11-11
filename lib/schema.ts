interface ServiceSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
    url: string;
  };
  areaServed?: Place[];
  serviceType: string;
}

/** A schema.org Place (Country, City…), optionally inside a larger one */
interface Place {
  '@type': string;
  name: string;
  containedInPlace?: Place;
}

interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: {
    '@type': string;
    position: number;
    name: string;
    item: string;
  }[];
}

export function generateServiceSchema(
  name: string,
  description: string,
  providerName: string,
  providerUrl: string,
  serviceType: string,
  // A plain string is a country; pass a Place for anything else (e.g. a City)
  areasServed?: (string | Place)[]
): ServiceSchema {
  const schema: ServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: providerName,
      url: providerUrl,
    },
    serviceType,
  };

  if (areasServed && areasServed.length > 0) {
    schema.areaServed = areasServed.map(area =>
      typeof area === 'string' ? { '@type': 'Country', name: area } : area
    );
  }

  return schema;
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** The countries we serve, Sudan first. Shared by the Organization and Service JSON-LD. */
export const AREA_SERVED_COUNTRIES = ['Sudan', 'Uganda', 'Rwanda', 'Kenya'] as const

export function countriesServed() {
  return AREA_SERVED_COUNTRIES.map((name) => ({ '@type': 'Country', name }))
}

// Function to generate service JSON-LD; description is the service page's own (English) meta description
export function getServiceSchema(serviceName: string, serviceSlug: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Blue Team Africa",
      "url": "https://www.blueteamafrica.com",
      "logo": "https://www.blueteamafrica.com/images/logo/logo.png"
    },
    "areaServed": countriesServed(),
    "url": `https://www.blueteamafrica.com/services/${serviceSlug}`,
    "description": description
  };
}

// Each case study's own summary for its CreativeWork JSON-LD (English on both locales).
// Every detail here is stated on the case page itself.
const portfolioSummaries: Record<string, { description: string; keywords: string[] }> = {
  'cslo-sudan': {
    description: 'ERPNext and Frappe CRM implementation with mobile field reporting for a humanitarian organisation working in conflict-affected regions of Sudan.',
    keywords: ['ERPNext', 'Frappe CRM', 'humanitarian', 'NGO', 'Sudan', 'mobile field reporting'],
  },
  'ngo-portal': {
    description: 'A platform for a regional NGO in East Africa to manage programmes, beneficiaries and donor relations, replacing manual processes.',
    keywords: ['NGO', 'programme management', 'beneficiary management', 'donor relations', 'East Africa'],
  },
  'erp-integration': {
    description: 'Custom ERP integration connecting the systems of a manufacturing company operating in Uganda, Kenya and Rwanda.',
    keywords: ['ERP', 'manufacturing', 'systems integration', 'Uganda', 'Kenya', 'Rwanda'],
  },
  'ecommerce-shop': {
    description: 'Online store with mobile money payments and inventory management for a retail business expanding beyond its physical shops.',
    keywords: ['e-commerce', 'mobile money', 'inventory management', 'retail', 'East Africa'],
  },
  'mobile-app': {
    description: 'Mobile application for patient records and appointment scheduling, replacing paper records for a healthcare clinic chain.',
    keywords: ['mobile app', 'healthcare', 'patient records', 'appointment scheduling'],
  },
  'crm-system': {
    description: 'CRM system with automated workflows and analytics for a B2B sales company moving off spreadsheets and email.',
    keywords: ['CRM', 'sales', 'workflow automation', 'analytics', 'B2B'],
  },
  'cloud-migration': {
    description: "Migration of a technology company's on-premises servers to the cloud with zero downtime.",
    keywords: ['cloud migration', 'infrastructure', 'hosting', 'zero downtime'],
  },
};

// Function to generate portfolio JSON-LD
export function getPortfolioSchema(projectName: string, projectSlug: string) {
  const summary = portfolioSummaries[projectSlug];
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": projectName,
    "url": `https://www.blueteamafrica.com/portfolio/${projectSlug}`,
    "author": {
      "@type": "Organization",
      "name": "Blue Team Africa"
    },
    ...(summary && { "description": summary.description, "keywords": summary.keywords })
  };
}

export interface BlogSchemaImage {
  path: string;
  width: number;
  height: number;
}

// Function to generate blog JSON-LD. `place`: a city the post is about (the Rwanda posts pass
// "Kigali"); it leads the keywords and description. No place is added by default.
export function getBlogSchema(blogTitle: string, blogSlug: string, datePublished: string, image: BlogSchemaImage, dateModified?: string, place?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogTitle,
    "url": `https://www.blueteamafrica.com/blog/${blogSlug}`,
    "image": {
      "@type": "ImageObject",
      "url": `https://www.blueteamafrica.com${image.path}`,
      "width": image.width,
      "height": image.height
    },
    "author": {
      "@type": "Organization",
      "name": "Blue Team Africa"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Blue Team Africa",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.blueteamafrica.com/images/logo/logo.webp"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "description": `Blog post: ${blogTitle}, relevant to NGOs and businesses in ${place ? `${place} and ` : ''}East Africa.`,
    "keywords": [...(place ? [place] : []), "East Africa", "NGO", "business", "technology", "web", "mobile", "ERP", "CRM"]
  };
}
