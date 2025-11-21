#!/usr/bin/env node

/**
 * Batch Update All Service Pages
 * Replaces old hero banners with new InteriorHeader component
 */

const fs = require('fs');
const path = require('path');

const services = [
  { 
    file: 'app/services/crm/page.tsx',
    title: 'CRM Solutions',
    breadcrumb: "{ label: 'Home', href: '/' },\n        { label: 'Services', href: '/services' },\n        { label: 'CRM Solutions' }"
  },
  { 
    file: 'app/services/ecommerce/page.tsx',
    title: 'E-commerce Development',
    breadcrumb: "{ label: 'Home', href: '/' },\n        { label: 'Services', href: '/services' },\n        { label: 'E-commerce' }"
  },
  { 
    file: 'app/services/mobile-apps/page.tsx',
    title: 'Mobile App Development',
    breadcrumb: "{ label: 'Home', href: '/' },\n        { label: 'Services', href: '/services' },\n        { label: 'Mobile Apps' }"
  },
  { 
    file: 'app/services/hosting/page.tsx',
    title: 'Cloud & Web Hosting',
    breadcrumb: "{ label: 'Home', href: '/' },\n        { label: 'Services', href: '/services' },\n        { label: 'Hosting' }"
  },
  { 
    file: 'app/services/cybersecurity/page.tsx',
    title: 'Cybersecurity Services',
    breadcrumb: "{ label: 'Home', href: '/' },\n        { label: 'Services', href: '/services' },\n        { label: 'Cybersecurity' }"
  },
  { 
    file: 'app/services/branding/page.tsx',
    title: 'Branding & Visual Identity',
    breadcrumb: "{ label: 'Home', href: '/' },\n        { label: 'Services', href: '/services' },\n        { label: 'Branding' }"
  },
  { 
    file: 'app/services/ui-ux/page.tsx',
    title: 'UI/UX Design',
    breadcrumb: "{ label: 'Home', href: '/' },\n        { label: 'Services', href: '/services' },\n        { label: 'UI/UX Design' }"
  },
  { 
    file: 'app/services/custom-systems/page.tsx',
    title: 'Custom System Development',
    breadcrumb: "{ label: 'Home', href: '/' },\n        { label: 'Services', href: '/services' },\n        { label: 'Custom Systems' }"
  },
  { 
    file: 'app/services/maintenance/page.tsx',
    title: 'Maintenance & Support',
    breadcrumb: "{ label: 'Home', href: '/' },\n        { label: 'Services', href: '/services' },\n        { label: 'Maintenance' }"
  },
];

console.log('🚀 Starting batch update of service pages...\n');

services.forEach((service, index) => {
  console.log(`[${index + 1}/${services.length}] Updating ${service.file}...`);
  
  if (!fs.existsSync(service.file)) {
    console.log(`  ⚠️  File not found, skipping.\n`);
    return;
  }
  
  let content = fs.readFileSync(service.file, 'utf8');
  
  // Add InteriorHeader import if not present
  if (!content.includes('InteriorHeader')) {
    content = content.replace(
      /import.*from 'lucide-react'/,
      `import { MessageCircle, ArrowRight } from 'lucide-react'\nimport InteriorHeader from '@/components/InteriorHeader'\nimport ServiceSidebar from '@/components/ServiceSidebar'`
    );
  }
  
  // Replace old hero banner with InteriorHeader
  const heroBannerRegex = /\{\/\* Hero Banner \*\/\}[\s\S]*?<\/section>/;
  
  if (heroBannerRegex.test(content)) {
    content = content.replace(
      heroBannerRegex,
      `<InteriorHeader
        title="${service.title}"
        breadcrumb={[
          ${service.breadcrumb}
        ]}
      />`
    );
  }
  
  // Wrap content in proper container
  content = content.replace(
    /return \(\s*<div className="min-h-screen">/,
    `return (
    <>
      <InteriorHeader
        title="${service.title}"
        breadcrumb={[
          ${service.breadcrumb}
        ]}
      />
      
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <ServiceSidebar />
            </div>
          </aside>
          
          <div className="lg:w-3/4 flex-grow">`
  );
  
  // Close the wrapper
  content = content.replace(
    /<\/div>\s*\)\s*}/g,
    `          </div>
        </div>
      </div>
    </>
  )
}`
  );
  
  fs.writeFileSync(service.file, content, 'utf8');
  console.log(`  ✅ Updated successfully\n`);
});

console.log('✅ All service pages updated!');
console.log('\nNext steps:');
console.log('1. Review the changes');
console.log('2. Test each page');
console.log('3. Commit if everything looks good');

