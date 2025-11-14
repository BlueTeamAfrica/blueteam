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
  sameAs?: string[]
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

