const fs = require('fs');
const path = require('path');

const renames = [
  // home/portfolio
  {
    from: 'public/images/home/portfolio/ngo-portal.jpg',
    to: 'public/images/home/portfolio/portfolio-mockup-ngo-portal-v01.jpg'
  },
  {
    from: 'public/images/home/portfolio/regional-logistics.webp',
    to: 'public/images/home/portfolio/portfolio-mockup-regional-logistics-v01.webp'
  },
  {
    from: 'public/images/home/portfolio/retail-ecommerce.webp',
    to: 'public/images/home/portfolio/portfolio-mockup-retail-ecommerce-v01.webp'
  },
  // home/team
  {
    from: 'public/images/home/team/about-team.webp',
    to: 'public/images/home/team/brand-team-photo-v01.webp'
  },
  // hero
  {
    from: 'public/images/hero/hero-gradient-abstract.webp',
    to: 'public/images/hero/hero-banner-gradient-abstract-v01.webp'
  },
  {
    from: 'public/images/og-home-hero.webp',
    to: 'public/images/hero-banner-og-image-v01.webp'
  },
  // portfolio/cslo-sudan
  {
    from: 'public/images/portfolio/cslo-sudan/cslo-banner.webp',
    to: 'public/images/portfolio/cslo-sudan/portfolio-project-cslo-erp-system-v01.webp'
  }
];

console.log('Starting image renaming...\n');

let success = 0;
let failed = 0;

renames.forEach((rename) => {
  try {
    if (fs.existsSync(rename.from)) {
      fs.renameSync(rename.from, rename.to);
      console.log(`✅ Renamed: ${path.basename(rename.from)} → ${path.basename(rename.to)}`);
      success++;
    } else {
      console.log(`⚠️  File not found: ${rename.from}`);
      failed++;
    }
  } catch (error) {
    console.log(`❌ Error renaming ${rename.from}: ${error.message}`);
    failed++;
  }
});

console.log(`\n✨ Complete! ${success} renamed, ${failed} failed.`);

