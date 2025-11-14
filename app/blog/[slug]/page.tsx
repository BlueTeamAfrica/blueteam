import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// In a real app, this would fetch from a CMS or database
const blogPosts: Record<string, {
  title: string
  content: string
  date: string
  category: string
  keywords: string[]
}> = {
  'seo-website-design-best-practices': {
    title: 'SEO Website Design: Best Practices for 2024',
    date: '2024-01-15',
    category: 'Web Design',
    keywords: ['seo website design', 'web design', 'SEO'],
    content: `
      <h2>Introduction to SEO Website Design</h2>
      <p>SEO website design is crucial for businesses looking to improve their online visibility. 
      When creating a website, it's essential to consider search engine optimization from the 
      very beginning. This article explores best practices for SEO website design that can help 
      your website rank well in search engines.</p>

      <h2>Why SEO Website Design Matters</h2>
      <p>SEO website design combines aesthetic appeal with technical optimization. A well-designed 
      website that's also optimized for search engines will attract more organic traffic, leading 
      to better business results. This is especially important for businesses in Uganda, Kenya, 
      and Rwanda looking to establish a strong online presence.</p>

      <h2>Key Elements of SEO Website Design</h2>
      <p>Effective SEO website design includes several key elements:</p>
      <ul>
        <li>Fast loading times and performance optimization</li>
        <li>Mobile-responsive design</li>
        <li>Clean, semantic HTML structure</li>
        <li>Optimized images and media</li>
        <li>Proper heading hierarchy (H1, H2, H3)</li>
        <li>Internal linking structure</li>
        <li>User-friendly navigation</li>
      </ul>

      <h2>Best Practices for SEO Website Design</h2>
      <p>When designing a website with SEO in mind, focus on creating a user-friendly experience 
      that search engines can easily crawl and index. This includes using proper meta tags, 
      creating quality content, and ensuring your website loads quickly.</p>

      <h2>Conclusion</h2>
      <p>SEO website design is an essential component of a successful online presence. By following 
      these best practices, you can create a website that not only looks great but also performs 
      well in search engine results.</p>
    `,
  },
  'web-design-services-what-to-look-for': {
    title: 'Web Design Services: What to Look For',
    date: '2024-01-10',
    category: 'Web Design',
    keywords: ['web design services', 'website design services'],
    content: `
      <h2>Choosing the Right Web Design Services</h2>
      <p>Selecting the right web design services is crucial for your business success. This guide 
      helps you understand what to look for when choosing a web design company or website design 
      services provider.</p>

      <h2>Key Factors to Consider</h2>
      <p>When evaluating web design services, consider factors such as portfolio quality, experience 
      in your industry, understanding of SEO, and ability to deliver on time and within budget.</p>
    `,
  },
  'best-web-design-practices-uganda': {
    title: 'Best Web Design Practices in Uganda',
    date: '2024-01-05',
    category: 'Web Design',
    keywords: ['web design Uganda', 'Uganda'],
    content: `
      <h2>Web Design in Uganda</h2>
      <p>Understanding the Ugandan market is essential for effective web design. This article 
      explores best practices for creating websites that resonate with Ugandan businesses and 
      consumers.</p>
    `,
  },
  'web-development-trends-east-africa': {
    title: 'Web Development Trends in East Africa',
    date: '2023-12-20',
    category: 'Web Development',
    keywords: ['web development', 'East Africa'],
    content: `
      <h2>Web Development in East Africa</h2>
      <p>Explore the latest web development trends and technologies being adopted by businesses 
      across Kenya, Uganda, and Rwanda.</p>
    `,
  },
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: `Read about ${post.title.toLowerCase()} - insights on web design and development.`,
    keywords: post.keywords.join(', '),
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Blog
        </Link>
        
        <article>
          <div className="mb-6">
            <span className="text-sm text-blue-600 font-semibold">{post.category}</span>
            <span className="text-sm text-gray-500 ml-4">{new Date(post.date).toLocaleDateString()}</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(blogPosts)
              .filter(([postSlug]) => postSlug !== slug)
              .slice(0, 2)
              .map(([slug, relatedPost]) => (
                <Link 
                  key={slug} 
                  href={`/blog/${slug}`}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <h3 className="font-semibold mb-2">{relatedPost.title}</h3>
                  <span className="text-sm text-gray-500">{new Date(relatedPost.date).toLocaleDateString()}</span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

