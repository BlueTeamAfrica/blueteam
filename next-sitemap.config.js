/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.blueteamafrica.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // 🔑 IMPORTANT
  sitemapSize: 5000,

  changefreq: 'weekly',
  priority: 0.7,

  exclude: [
    '/maintenance',
    '/solutions',
    '/solutions/*',
    '/search',
    '/search/*',
    '/blog/*',
    '/services/cloud',
    '/services/crm-development',
    '/services/erpnext-development'
  ],
};

