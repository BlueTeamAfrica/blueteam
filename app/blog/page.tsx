import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Web Design & Development Insights',
  description: 'Read our blog for insights on web design, website design, SEO, and technology trends in Uganda, Kenya, and Rwanda.',
  keywords: ['web design blog', 'website design blog', 'SEO blog', 'web development blog', 'Uganda', 'Kenya', 'Rwanda'],
  openGraph: {
    title: 'Blog - Web Design & Development Insights | Blue Team Africa',
    description: 'Read our blog for insights on web design, development, and technology.',
  },
}

// Blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: 'SEO Website Design: Best Practices for 2024',
    excerpt: 'The exact checklist we use to launch SEO-ready sites in Uganda, Kenya, and Rwanda—from keyword clustering to Core Web Vitals monitoring.',
    slug: 'seo-website-design-best-practices',
    date: '2024-01-15',
    category: 'Web Design',
    keywords: ['seo website design', 'web design', 'SEO'],
  },
  {
    id: 2,
    title: 'Web Design Services: What to Look For',
    excerpt: 'A buyer’s guide for East African founders. We cover strategic planning, UX workshops, hosting, and support agreements before you sign a proposal.',
    slug: 'web-design-services-what-to-look-for',
    date: '2024-01-10',
    category: 'Web Design',
    keywords: ['web design services', 'website design services'],
  },
  {
    id: 3,
    title: 'Best Web Design Practices in Uganda',
    excerpt: 'Localization tips for Kampala, Gulu, and Entebbe—from payment integrations to multilingual content that resonates with Ugandan buyers.',
    slug: 'best-web-design-practices-uganda',
    date: '2024-01-05',
    category: 'Web Design',
    keywords: ['web design Uganda', 'Uganda'],
  },
  {
    id: 4,
    title: 'Web Development Trends in East Africa',
    excerpt: 'Exploring the latest web development trends and technologies being adopted by businesses across Kenya, Uganda, and Rwanda.',
    slug: 'web-development-trends-east-africa',
    date: '2023-12-20',
    category: 'Web Development',
    keywords: ['web development', 'East Africa'],
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl">
          Insights, playbooks, and case studies on web design, SEO, and digital transformation 
          for businesses in Uganda, Kenya, and Rwanda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl border border-gray-100 shadow-soft overflow-hidden hover:-translate-y-1 transition">
              <div className="h-40 bg-gradient-to-br from-blue-600 to-blue-400 text-white flex flex-col items-start justify-end p-6">
                <span className="text-sm uppercase tracking-wide opacity-80">{post.category}</span>
                <h2 className="text-2xl font-semibold mt-2">{post.title}</h2>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-3">
                  {new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-blue-600 font-semibold hover:underline inline-flex items-center"
                >
                  Read Article <span className="ml-2">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Featured Post Section */}
        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Featured: SEO Website Design</h2>
          <p className="text-gray-700 mb-4">
            Discover how SEO website design can transform your online presence. Our comprehensive 
            guide covers everything you need to know about creating websites that rank well in 
            search engines.
          </p>
          <Link 
            href="/blog/seo-website-design-best-practices" 
            className="text-blue-600 font-semibold hover:underline"
          >
            Read the Full Article →
          </Link>
        </div>
      </div>
    </div>
  )
}

