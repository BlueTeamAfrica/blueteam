/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.blueteamafrica.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,

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

  changefreq: 'weekly',
  priority: 0.7,
};

