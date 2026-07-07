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
  areaServed?: {
    '@type': string;
    name: string;
  }[];
  serviceType: string;
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
  services?: string[]
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

  return schema;
}

export function generateServiceSchema(
  name: string,
  description: string,
  providerName: string,
  providerUrl: string,
  serviceType: string,
  areasServed?: string[]
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
    schema.areaServed = areasServed.map(area => ({
      '@type': 'Country',
      name: area,
    }));
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

// Function to generate service JSON-LD (optimized for Kigali & East Africa)
export function getServiceSchema(serviceName: string, serviceSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Blue Team Africa",
      "url": "https://www.blueteamafrica.com",
      "logo": "https://www.blueteamafrica.com/images/logo/logo.webp"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Kigali, Rwanda"
    },
    "url": `https://www.blueteamafrica.com/services/${serviceSlug}`,
    "description": `Professional ${serviceName} services for NGOs and businesses in Kigali and East Africa.`
  };
}

// List of services
export const services = [
  { name: 'Web Design', slug: 'web-design' },
  { name: 'Website Development', slug: 'website-development' },
  { name: 'Hosting', slug: 'hosting' },
  { name: 'Mobile Apps', slug: 'mobile-apps' },
  { name: 'ERP', slug: 'erp' },
  { name: 'CRM', slug: 'crm' },
  { name: 'Cybersecurity', slug: 'cybersecurity' },
  { name: 'E-commerce', slug: 'ecommerce' },
  { name: 'Custom Systems', slug: 'custom-systems' },
  { name: 'Maintenance', slug: 'maintenance' },
  { name: 'Branding', slug: 'branding' },
  { name: 'UI/UX', slug: 'ui-ux' }
];

// Function to generate portfolio JSON-LD
export function getPortfolioSchema(projectName: string, projectSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": projectName,
    "url": `https://www.blueteamafrica.com/portfolio/${projectSlug}`,
    "author": {
      "@type": "Organization",
      "name": "Blue Team Africa"
    },
    "description": `Case study of ${projectName} showcasing web, software, or digital solutions for NGOs and businesses in Kigali and East Africa.`,
    "keywords": ["Kigali", "East Africa", "NGO", "business", "software", "web", "mobile"]
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

// Function to generate blog JSON-LD
export function getBlogSchema(blogTitle: string, blogSlug: string, datePublished: string, dateModified?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogTitle,
    "url": `https://www.blueteamafrica.com/blog/${blogSlug}`,
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

