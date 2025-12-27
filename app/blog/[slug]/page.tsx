import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import type { Metadata } from 'next'
import { blogMetadataMap } from '@/lib/blog-metadata'
import BlogSchema from '@/components/BlogSchema'

const blogPosts: Record<string, any> = {
  'how-to-choose-the-right-website-for-your-ngo': {
    title: 'How to Choose the Right Website for Your NGO',
    excerpt: 'A comprehensive guide to selecting the best website solution for your nonprofit organization, including key features and considerations.',
    date: '2024-01-15',
    category: 'Web Development',
    image: '/images/blog/blog-thumbnail-01.webp',
    content: `
      <p>Choosing the right website for your NGO is crucial for effectively reaching your audience, engaging donors, and managing your programs. With so many options available, it can be overwhelming to determine which solution best fits your organization's needs and budget.</p>
      
      <h2>Understanding Your NGO's Needs</h2>
      <p>Before selecting a website platform, it's essential to clearly understand what your NGO needs to accomplish online. Are you primarily focused on fundraising, program management, beneficiary registration, or donor communication? Different platforms excel in different areas.</p>
      
      <p>Consider your audience: Who are you trying to reach? Donors, beneficiaries, volunteers, or partner organizations? Your website should be designed with your primary audience in mind, ensuring it's accessible, easy to navigate, and meets their specific needs.</p>
      
      <h2>Key Features to Look For</h2>
      <p><strong>Donation Management:</strong> If fundraising is a priority, ensure the platform integrates with payment gateways that work in your region. Mobile money integration is essential for East African NGOs, as many donors prefer this payment method.</p>
      
      <p><strong>Content Management:</strong> Your team needs to be able to update content regularly without technical expertise. Look for user-friendly content management systems that allow non-technical staff to make updates easily.</p>
      
      <p><strong>Program Tracking:</strong> For NGOs managing multiple programs, consider platforms that allow you to showcase different initiatives, track progress, and share impact stories effectively.</p>
      
      <p><strong>Multilingual Support:</strong> If you serve diverse communities, multilingual support is crucial. The ability to switch between languages can significantly expand your reach and engagement.</p>
      
      <h2>Budget Considerations</h2>
      <p>Many NGOs operate with limited budgets, making cost-effectiveness a key consideration. However, it's important to balance cost with quality and functionality. A free or very cheap website might save money initially but could cost more in the long run due to limitations or security issues.</p>
      
      <p>Consider the total cost of ownership: hosting fees, domain registration, security certificates, maintenance, and updates. Some platforms include these in their pricing, while others charge separately.</p>
      
      <h2>Technical Requirements</h2>
      <p>Your website needs to perform well in areas with varying internet connectivity. Optimize for speed and consider offline capabilities if your beneficiaries access the site from remote locations. Mobile responsiveness is non-negotiable, as most users in East Africa access the internet primarily through smartphones.</p>
      
      <h2>Making the Decision</h2>
      <p>When choosing a website for your NGO, prioritize platforms that understand the unique challenges and opportunities of operating in East Africa. Work with developers who have experience serving nonprofit organizations and can provide ongoing support as your needs evolve.</p>
      
      <p>Remember, your website is often the first impression donors and beneficiaries have of your organization. Investing in the right solution can significantly impact your ability to fulfill your mission and serve your community effectively.</p>
    `,
  },
  'why-hosting-speed-matters-in-africa': {
    title: 'Why Hosting Speed Matters in Africa',
    excerpt: 'Understanding the importance of fast hosting speeds for African businesses and how it impacts user experience and conversions.',
    date: '2024-01-10',
    category: 'Hosting',
    image: '/images/blog/blog-thumbnail-02.webp',
    content: `
      <p>Website speed is critical for businesses everywhere, but in Africa, it takes on even greater significance due to unique infrastructure challenges and user behavior patterns. Slow-loading websites don't just frustrate users—they directly impact your bottom line.</p>
      
      <h2>The African Internet Landscape</h2>
      <p>Internet connectivity in Africa varies significantly between urban and rural areas, and even within cities. Many users rely on mobile data with varying speeds and data caps. A website that loads quickly in Nairobi might be unusable in rural Uganda with slower connections.</p>
      
      <p>Additionally, data costs are still relatively high in many African countries, making users particularly sensitive to slow-loading pages that consume their limited data plans. Every second of loading time matters when users are paying for each megabyte.</p>
      
      <h2>Impact on User Experience</h2>
      <p>Research shows that users abandon websites that take more than 3 seconds to load. In areas with slower connections, this threshold is even lower. Users who experience slow load times are unlikely to return, and they're even less likely to convert into customers or donors.</p>
      
      <p>For e-commerce sites, slow loading directly translates to lost sales. For NGOs, it means fewer donations and less engagement. For service businesses, it means missed opportunities to connect with potential clients.</p>
      
      <h2>Mobile-First Considerations</h2>
      <p>The vast majority of internet users in Africa access the web primarily through mobile devices. Mobile networks, while improving, often have higher latency and lower bandwidth than fixed connections. This makes optimization even more critical.</p>
      
      <p>Mobile users expect instant access to information. They're often on the go, multitasking, and have limited patience for slow-loading pages. If your site doesn't load quickly on mobile, you're losing a significant portion of your potential audience.</p>
      
      <h2>SEO and Search Rankings</h2>
      <p>Search engines like Google consider page speed as a ranking factor. Slow websites rank lower in search results, meaning fewer organic visitors. For businesses relying on search traffic, slow hosting can significantly impact visibility and growth.</p>
      
      <p>Google's Core Web Vitals, which measure loading performance, interactivity, and visual stability, are increasingly important for SEO. Websites that fail these metrics are penalized in search rankings, making it harder to reach potential customers.</p>
      
      <h2>Solutions for African Businesses</h2>
      <p>Choosing the right hosting solution is crucial. Look for hosting providers with servers located in or near Africa to reduce latency. Content Delivery Networks (CDNs) can help deliver content faster by caching it closer to users.</p>
      
      <p>Website optimization is equally important: compress images, minimize code, use efficient caching strategies, and optimize for mobile devices. Work with developers who understand the African internet landscape and can build sites that perform well in varying conditions.</p>
      
      <h2>The Bottom Line</h2>
      <p>Fast hosting isn't a luxury—it's a necessity for African businesses. Investing in quality hosting and optimization pays dividends through better user experience, higher conversions, and improved search rankings. In a competitive market, speed can be the difference between success and failure.</p>
    `,
  },
  'erp-for-african-smes-a-complete-guide': {
    title: 'ERP for African SMEs: A Complete Guide',
    excerpt: 'Everything small and medium enterprises in Africa need to know about implementing ERP systems to streamline operations.',
    date: '2024-01-05',
    category: 'ERP Systems',
    image: '/images/blog/blog-thumbnail-03.webp',
    content: `
      <p>Enterprise Resource Planning (ERP) systems are no longer reserved for large corporations. Small and medium enterprises (SMEs) across Africa are discovering that ERP solutions can transform their operations, improve efficiency, and enable growth.</p>
      
      <h2>What is ERP and Why Does It Matter?</h2>
      <p>ERP systems integrate various business processes—inventory, sales, finance, HR, production—into a single, unified platform. For SMEs, this means no more juggling multiple spreadsheets, manual data entry, or disconnected systems. Everything your business does can be tracked, managed, and analyzed in one place.</p>
      
      <p>For African SMEs facing resource constraints and operational challenges, ERP systems offer a way to compete more effectively. They provide visibility into operations, enabling better decision-making and resource allocation. In markets where margins are tight and competition is fierce, efficiency isn't optional—it's essential.</p>
      
      <h2>Common Challenges for African SMEs</h2>
      <p>Many SMEs in Africa operate with limited resources, making it difficult to manage growing operations manually. Inventory gets misplaced, orders get delayed, and financial records become disorganized. As businesses grow, these problems multiply.</p>
      
      <p>Other challenges include limited access to skilled staff, unreliable internet connectivity in some areas, and the need to comply with local regulations and tax requirements. An ERP system must address these unique challenges while remaining affordable and accessible.</p>
      
      <h2>Benefits of ERP for SMEs</h2>
      <p><strong>Improved Efficiency:</strong> Automated workflows eliminate manual processes, reducing errors and saving time. Tasks that used to take hours can be completed in minutes.</p>
      
      <p><strong>Better Inventory Management:</strong> Real-time inventory tracking prevents stockouts and overstocking, optimizing cash flow and ensuring products are available when customers need them.</p>
      
      <p><strong>Financial Visibility:</strong> Integrated financial management provides real-time insights into cash flow, expenses, and profitability, enabling better financial planning and decision-making.</p>
      
      <p><strong>Scalability:</strong> As your business grows, your ERP system grows with you. You don't need to switch systems as you expand—the platform scales to accommodate increasing complexity and volume.</p>
      
      <h2>Choosing the Right ERP Solution</h2>
      <p>Not all ERP systems are created equal, and what works for a large corporation might be overkill for an SME. Look for solutions that are:</p>
      
      <ul>
        <li><strong>Affordable:</strong> Pricing that fits your budget without hidden costs</li>
        <li><strong>User-Friendly:</strong> Easy to learn and use, without requiring extensive training</li>
        <li><strong>Flexible:</strong> Customizable to match your specific business processes</li>
        <li><strong>Local Support:</strong> Providers who understand African markets and can offer ongoing support</li>
        <li><strong>Cloud-Based:</strong> Accessible from anywhere, with automatic updates and backups</li>
      </ul>
      
      <h2>Implementation Considerations</h2>
      <p>Implementing an ERP system requires careful planning. Start by documenting your current processes and identifying areas that need improvement. Choose modules that address your immediate needs—you can always add more later.</p>
      
      <p>Data migration is critical: ensure your existing data is clean, organized, and properly imported into the new system. Training is equally important—your team needs to understand how to use the system effectively to realize its benefits.</p>
      
      <h2>ROI and Long-Term Value</h2>
      <p>While ERP systems require an initial investment, the return on investment typically comes through improved efficiency, reduced errors, better inventory management, and faster decision-making. Many SMEs see payback within the first year of implementation.</p>
      
      <p>The long-term value extends beyond immediate cost savings. ERP systems enable growth by providing the infrastructure needed to scale operations without proportional increases in administrative overhead.</p>
      
      <h2>Getting Started</h2>
      <p>If you're considering ERP for your SME, start by assessing your current operations and identifying pain points. Research solutions designed for SMEs, and work with providers who understand the African business environment. A well-implemented ERP system can transform your business operations and set you on a path to sustainable growth.</p>
    `,
  },
  'choosing-a-web-design-company-in-rwanda-what-businesses-should-know': {
    title: 'Choosing a Web Design Company in Rwanda: What Businesses Should Know',
    excerpt: 'A guide to selecting a web design partner in Rwanda, covering key factors businesses should consider when making this important decision.',
    date: '2024-12-20',
    category: 'Web Design',
    image: '/images/blog/blog-thumbnail-01.webp',
    content: `
      <p>For businesses operating in Rwanda, having a professional website has become essential for establishing credibility, reaching customers, and competing in the digital marketplace. However, selecting the right web design company can be challenging, especially when you're trying to balance quality, cost, and local understanding.</p>
      
      <h2>Understanding Your Website Needs</h2>
      <p>Before beginning your search for a web design company, it's important to clearly define what your business needs. Are you looking for a simple informational website, an e-commerce platform, a complex application with custom functionality, or something in between? Different projects require different skill sets and approaches.</p>
      
      <p>Consider your target audience: Will your website primarily serve local customers in Rwanda, or do you need to reach an international audience? Understanding your audience helps determine technical requirements, language considerations, and design preferences that resonate with your users.</p>
      
      <h2>Technical Expertise and Capabilities</h2>
      <p>Technical expertise is crucial when selecting a web design partner. Look for companies that demonstrate proficiency with modern web technologies and understand current best practices. The company should be able to explain their technology choices and how they contribute to your website's performance, security, and scalability.</p>
      
      <p>Consider whether you need basic <a href="/web-design-rwanda" class="text-primary hover:text-primary-dark hover:underline">website design services in Rwanda</a> or if your project requires more advanced functionality. Some businesses start with a simple website but later need additional features like custom integrations, payment processing, or database management. Understanding whether your chosen company can grow with your needs is important for long-term planning.</p>
      
      <h2>Understanding Local Market Context</h2>
      <p>Working with a company that understands the Rwandan market can provide significant advantages. Local knowledge helps ensure your website resonates with Rwandan users, considers local payment preferences like mobile money, and understands connectivity patterns that affect website performance. When evaluating potential partners, look for providers who offer comprehensive <a href="/web-design-rwanda" class="text-primary hover:text-primary-dark hover:underline">web design services in Rwanda</a> and can also handle more advanced technical requirements.</p>
      
      <p>However, local understanding shouldn't come at the expense of technical quality. The best partners combine local market insights with strong technical capabilities, ensuring your website performs well for users in Rwanda while meeting international standards for security and performance. Some businesses may need both design and <a href="/web-development-rwanda" class="text-primary hover:text-primary-dark hover:underline">web development services in Rwanda</a> to create a complete digital solution that meets their operational needs.</p>
      
      <h2>Portfolio and Past Work</h2>
      <p>Reviewing a company's portfolio gives you insight into their design style, technical capabilities, and experience with businesses similar to yours. Look for diversity in their work—companies that have successfully completed various types of projects are more likely to adapt well to your specific needs.</p>
      
      <p>Don't just look at design aesthetics—consider the functionality and user experience of their past projects. Can you easily navigate their example websites? Do they load quickly? Are they mobile-friendly? These factors indicate the quality of work you can expect.</p>
      
      <h2>Communication and Process</h2>
      <p>Effective communication throughout the project is essential for success. Understand how the company communicates—do they provide regular updates, respond promptly to questions, and explain technical concepts in ways you can understand? Clear communication prevents misunderstandings and ensures your vision is realized.</p>
      
      <p>Ask about their design and development process. How do they gather requirements? What's their timeline for delivery? How do they handle revisions and feedback? A structured process with clear milestones helps ensure projects stay on track and meet expectations.</p>
      
      <h2>Budget and Pricing Transparency</h2>
      <p>Website projects can vary significantly in cost depending on scope, complexity, and features required. Be transparent about your budget from the start, and look for companies that provide clear pricing information and explain what's included in their quotes.</p>
      
      <p>Consider the total cost of ownership: initial design and development, hosting, domain registration, maintenance, and potential future updates. Some companies offer all-inclusive packages, while others charge separately for ongoing services. Understanding the full cost helps you make an informed decision.</p>
      
      <h2>Ongoing Support and Maintenance</h2>
      <p>Websites require ongoing maintenance to stay secure, perform well, and remain current with technology updates. Ask potential partners about their support and maintenance offerings. Do they provide hosting services? How do they handle security updates? What's their process for making content updates or adding new features?</p>
      
      <p>For businesses that anticipate needing additional functionality over time, consider whether the company can handle more complex <a href="/web-development-rwanda" class="text-primary hover:text-primary-dark hover:underline">web development projects in Rwanda</a>. Companies that offer both design and development services can provide a smoother experience if your needs evolve beyond a basic website.</p>
      
      <h2>Making Your Decision</h2>
      <p>Choosing a web design company is an important decision that affects your business's online presence. Take time to evaluate multiple options, ask detailed questions, and trust your instincts about which company best understands your needs and vision. The right partnership will result in a website that effectively represents your business and helps you achieve your goals.</p>
      
      <p>Remember that a website is often the first impression potential customers have of your business. Investing time in selecting the right design partner ensures you create a website that builds trust, engages visitors, and supports your business objectives effectively.</p>
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]
  
  if (!post) {
    return {
      title: 'Post Not Found | Blue Team Africa',
      description: 'The blog post you are looking for does not exist.',
    }
  }

  // Use shared metadata if available, otherwise fallback to post data
  const sharedMetadata = blogMetadataMap[slug]
  
  if (sharedMetadata) {
    return sharedMetadata
  }

  // Fallback to post data if no shared metadata exists
  return {
    title: `${post.title} | Blue Team Africa`,
    description: post.excerpt,
    alternates: {
      canonical: `https://blueteamafrica.com/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  return (
    <>
      <BlogSchema 
        blogTitle={post.title} 
        blogSlug={slug} 
        datePublished={post.date}
      />
      <InteriorHeader
        title={post.title}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Featured Image */}
        <section className="mb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">More Articles</h2>
          <div className="flex flex-wrap gap-4">
            {Object.entries(blogPosts)
              .filter(([postSlug]) => postSlug !== slug)
              .slice(0, 2)
              .map(([postSlug, relatedPost]) => (
                <Link
                  key={postSlug}
                  href={`/blog/${postSlug}`}
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  {relatedPost.title} →
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-6">
            Let's discuss how we can help with your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/256765508131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

