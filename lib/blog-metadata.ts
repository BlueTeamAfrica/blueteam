import type { Metadata } from 'next'

// 1. How to Choose the Right Website for Your NGO
export const metadataHowToChooseWebsite: Metadata = {
  title: 'How to Choose the Right Website for Your NGO | Blue Team Africa',
  description: 'A practical guide for NGOs in Kigali and East Africa to select the best website for their needs and impact.',
  alternates: {
    canonical: 'https://blueteamafrica.com/blog/how-to-choose-the-right-website-for-your-ngo',
  },
}

// 2. Why Hosting Speed Matters in Africa
export const metadataHostingSpeed: Metadata = {
  title: 'Why Hosting Speed Matters in Africa | Blue Team Africa',
  description: 'Insights on web hosting performance for NGOs and businesses in Kigali and East Africa. Speed matters for success.',
  alternates: {
    canonical: 'https://blueteamafrica.com/blog/why-hosting-speed-matters-in-africa',
  },
}

// 3. ERP for African SMEs: A Complete Guide
export const metadataErpGuide: Metadata = {
  title: 'ERP for African SMEs: A Complete Guide | Blue Team Africa',
  description: 'Comprehensive guide on ERP systems for SMEs in Kigali and East Africa. Boost efficiency and business growth.',
  alternates: {
    canonical: 'https://blueteamafrica.com/blog/erp-for-african-smes-a-complete-guide',
  },
}

// 4. Choosing a Web Design Company in Rwanda: What Businesses Should Know
export const metadataChoosingWebDesignRwanda: Metadata = {
  title: 'Choosing a Web Design Partner: A Guide for Rwandan Businesses | Blue Team Africa',
  description: 'A guide to selecting a web design partner in Rwanda, covering key factors businesses should consider when making this important decision.',
  alternates: {
    canonical: 'https://blueteamafrica.com/blog/choosing-a-web-design-company-in-rwanda-what-businesses-should-know',
  },
}

// 5. Web Development Companies in Rwanda: What to Look For (2026)
export const metadataWebDevelopmentCompaniesRwanda: Metadata = {
  title: 'Web Development Companies in Rwanda: What to Look For (2026)',
  description: 'Looking for reliable web development companies in Rwanda? Learn how to choose the right partner for your business in 2026.',
  alternates: {
    canonical: 'https://blueteamafrica.com/blog/web-development-companies-in-rwanda-what-to-look-for-2026',
  },
}

// Metadata mapping by slug
export const blogMetadataMap: Record<string, Metadata> = {
  'how-to-choose-the-right-website-for-your-ngo': metadataHowToChooseWebsite,
  'why-hosting-speed-matters-in-africa': metadataHostingSpeed,
  'erp-for-african-smes-a-complete-guide': metadataErpGuide,
  'choosing-a-web-design-company-in-rwanda-what-businesses-should-know': metadataChoosingWebDesignRwanda,
  'web-development-companies-in-rwanda-what-to-look-for-2026': metadataWebDevelopmentCompaniesRwanda,
}
