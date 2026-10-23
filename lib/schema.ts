export interface LocalBusinessSchema {
  '@context': string;
  '@type': string;
  name: string;
  description?: string;
  address?: {
    '@type': string;
    addressCountry: string;
    addressLocality: string;
    addressRegion?: string;
  };
  telephone?: string;
  email?: string;
  url: string;
  priceRange?: string;
  areaServed?: {
    '@type': string;
    name: string;
  }[];
  serviceType?: string[];
}

export interface ServiceSchema {
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
export interface Place {
  '@type': string;
  name: string;
  containedInPlace?: Place;
}

export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  logo?: string;
  contactPoint?: {
    '@type': string;
    telephone: string;
    contactType: string;
    areaServed: string[];
  }[];
  sameAs?: string[];
}

export interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: {
    '@type': string;
    position: number;
    name: string;
    item: string;
  }[];
}

export interface FAQPageSchema {
  '@context': string;
  '@type': string;
  mainEntity: {
    '@type': string;
    name: string;
    acceptedAnswer: {
      '@type': string;
      text: string;
    };
  }[];
}

export function generateLocalBusinessSchema(
  name: string,
  country: string,
  city: string,
  url: string,
  services?: string[],
  telephone?: string
): LocalBusinessSchema {
  const schema: LocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    url,
    address: {
      '@type': 'PostalAddress',
      addressCountry: country,
      addressLocality: city,
    },
  };

  if (services && services.length > 0) {
    schema.serviceType = services;
  }

  if (telephone) {
    schema.telephone = telephone;
  }

  return schema;
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

export function generateOrganizationSchema(
  name: string,
  description: string,
  url: string,
  logo?: string,
  sameAs?: string[],
  telephone?: string,
  email?: string
): OrganizationSchema {
  const schema: OrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    description,
    url,
  };

  if (logo) {
    schema.logo = logo;
  }

  if (sameAs && sameAs.length > 0) {
    schema.sameAs = sameAs;
  }

  if (telephone || email) {
    schema.contactPoint = [{
      '@type': 'ContactPoint',
      telephone: telephone || '',
      contactType: 'customer service',
      areaServed: ['UG', 'KE', 'RW', 'SD'],
    }];
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
    "areaServed": {
      "@type": "Place",
      "name": "Kigali, Rwanda"
    },
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

// List of portfolio projects
export const portfolioProjects = [
  { name: 'CSLO Sudan', slug: 'cslo-sudan' },
  { name: 'NGO Portal', slug: 'ngo-portal' },
  { name: 'ERP Integration', slug: 'erp-integration' },
  { name: 'E-commerce Shop', slug: 'ecommerce-shop' },
  { name: 'Mobile App', slug: 'mobile-app' },
  { name: 'CRM System', slug: 'crm-system' },
  { name: 'Cloud Migration', slug: 'cloud-migration' }
];

export interface BlogSchemaImage {
  path: string;
  width: number;
  height: number;
}

// Function to generate blog JSON-LD
export function getBlogSchema(blogTitle: string, blogSlug: string, datePublished: string, image: BlogSchemaImage, dateModified?: string) {
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
    "description": `Blog post: ${blogTitle}, relevant to NGOs and businesses in Kigali and East Africa.`,
    "keywords": ["Kigali", "East Africa", "NGO", "business", "technology", "web", "mobile", "ERP", "CRM"]
  };
}

// List of blog posts
export const blogs = [
  { title: 'How to Choose the Right Website for Your NGO', slug: 'how-to-choose-the-right-website-for-your-ngo', date: '2024-01-15' },
  { title: 'Why Hosting Speed Matters in Africa', slug: 'why-hosting-speed-matters-in-africa', date: '2024-01-10' },
  { title: 'ERP for African SMEs: A Complete Guide', slug: 'erp-for-african-smes-a-complete-guide', date: '2024-01-05' }
];

