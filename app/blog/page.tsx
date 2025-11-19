import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Blog',
  description: 'Insights, guides, and updates on web development, hosting, ERP systems, and technology solutions for East Africa.',
}

const blogPosts = [
  {
    slug: 'how-to-choose-the-right-website-for-your-ngo',
    title: 'How to Choose the Right Website for Your NGO',
    excerpt: 'A comprehensive guide to selecting the best website solution for your nonprofit organization, including key features and considerations.',
    date: '2024-01-15',
    category: 'Web Development',
    image: '/images/blog/2.jpg',
  },
  {
    slug: 'why-hosting-speed-matters-in-africa',
    title: 'Why Hosting Speed Matters in Africa',
    excerpt: 'Understanding the importance of fast hosting speeds for African businesses and how it impacts user experience and conversions.',
    date: '2024-01-10',
    category: 'Hosting',
    image: '/images/blog/3.webp',
  },
  {
    slug: 'erp-for-african-smes-a-complete-guide',
    title: 'ERP for African SMEs: A Complete Guide',
    excerpt: 'Everything small and medium enterprises in Africa need to know about implementing ERP systems to streamline operations.',
    date: '2024-01-05',
    category: 'ERP Systems',
    image: '/images/blog/4.webp',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Insights, guides, and updates on technology solutions for East Africa
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-wide text-primary font-semibold">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Read More
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

