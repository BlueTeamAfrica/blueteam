import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import InteriorHeader from '@/components/InteriorHeader'
import { Code, Database, Zap, Shield, GitBranch, Server, Cloud } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Development Company in Rwanda | Scalable, Secure & Custom Solutions',
  description: 'Work with a trusted web development company in Rwanda delivering secure, scalable, and custom-built solutions for businesses and NGOs. Talk to our team today.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.blueteamafrica.com/web-development-rwanda',
  },
  keywords: [
    'web development Rwanda',
    'website development Rwanda',
    'backend development Rwanda',
    'API development Rwanda',
    'database integration Rwanda',
    'web development Kigali',
    'custom web applications Rwanda',
    'scalable web development Rwanda',
  ],
  openGraph: {
    title: 'Web Development Company in Rwanda | Scalable, Secure & Custom Solutions',
    description: 'Trusted web development company in Rwanda. We deliver secure, scalable, custom solutions for businesses and NGOs. Talk to our team today.',
    url: 'https://www.blueteamafrica.com/web-development-rwanda',
    type: 'website',
  },
}

export default function WebDevelopmentRwandaPage() {
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.blueteamafrica.com/web-development-rwanda#business",
    "name": "Blue Team Africa – Web Development Company in Rwanda",
    "alternateName": "Blue Team for Digital Solutions",
    "url": "https://www.blueteamafrica.com/web-development-rwanda",
    "logo": "https://www.blueteamafrica.com/logo.png",
    "image": "https://www.blueteamafrica.com/og-image.png",
    "telephone": "+250798973375",
    "email": "contact@blueteamafrica.com",
    "priceRange": "$$",
    "description": "Professional web development company in Rwanda providing custom website development, backend systems, and scalable digital solutions for businesses and NGOs.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RW",
      "addressRegion": "Kigali City",
      "addressLocality": "Kigali"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Rwanda"
    },
    "sameAs": [
      "https://www.linkedin.com/company/blue-team-africa",
      "https://www.facebook.com/profile.php?id=61585128246041",
      "https://www.instagram.com/blueteamafrica/",
      "https://x.com/BLUETEAMAFRICA"
    ],
    "serviceType": [
      "Web Development",
      "Website Development",
      "Backend Development",
      "Custom Software Development"
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of web applications do you build?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build a wide range of web applications including custom business platforms, NGO management systems, e-commerce solutions, dashboards, CRM integrations, API-driven applications, and scalable cloud-based systems for organizations in Rwanda."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide custom software development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide full-stack custom software development services, building tailored solutions from the ground up to meet specific business requirements, including backend systems, APIs, databases, and frontend interfaces."
        }
      },
      {
        "@type": "Question",
        "name": "Is your development scalable and secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All our web development follows security best practices and is built with scalability in mind. We use modern frameworks, implement secure authentication, regular security updates, and architecture designed to grow with your business needs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer ongoing support after development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide ongoing technical support, maintenance, security updates, and system improvements after project delivery. Support packages are tailored to client needs, ensuring your application continues to perform optimally."
        }
      }
    ]
  }

  return (
    <>
      {/* JSON-LD Schema for ProfessionalService */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      {/* JSON-LD Schema for FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <InteriorHeader
        title="Web Development Company in Rwanda"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Web Development Rwanda' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-primary/10 via-primary/5 to-gray-50 py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="fade-up">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 leading-tight">
                Web Development Company in Rwanda
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed font-medium">
                Trusted by NGOs, startups, and growing companies across Rwanda. Clear pricing. Fast delivery. No hidden costs.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
                We build custom web applications, backend systems, and scalable platforms for businesses and NGOs across Rwanda. Our web development services focus on technical excellence, performance optimization, and secure infrastructure tailored to Rwanda's digital ecosystem.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                Serving organizations in Kigali and throughout Rwanda with robust backend development, API integrations, database solutions, and enterprise-grade web applications that scale with your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
                >
                  Start Your Development Project
                </Link>
                <Link
                  href="/locations/rwanda"
                  className="inline-block px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all font-semibold text-center"
                >
                  Our Services in Rwanda
                </Link>
              </div>
            </div>
            <div className="fade-in">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/website-development/services-websitedevelopment-website-development-hero-01.webp"
                  alt="Professional web development services for organizations in Rwanda"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        {/* Why Web Development Matters in Rwanda */}
        <section className="mb-16 fade-up" aria-labelledby="why-web-development">
          <h2 id="why-web-development" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Why Web Development Matters for Organizations in Rwanda
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Rwanda's rapidly growing digital economy demands more than just attractive websites—organizations need robust backend systems, secure data management, and scalable applications that can handle real-world operations. Web development is the technical foundation that powers your digital presence, enabling functionality, automation, and integration with existing business processes.
            </p>
            <p className="mb-4">
              For businesses in Kigali and across Rwanda, custom web development enables you to build systems that match your unique workflows rather than forcing your operations into generic templates. NGOs and humanitarian organizations require secure platforms for data collection, member management, and program tracking that work reliably even in challenging connectivity environments.
            </p>
            <p>
              Modern web development encompasses backend architecture, database design, API development, security implementation, and performance optimization—all critical components that determine whether your digital solution succeeds or fails under real-world conditions in Rwanda.
            </p>
          </div>
        </section>

        {/* Web Development for Businesses in Rwanda */}
        <section className="mb-16 fade-up" aria-labelledby="web-development-businesses-rwanda">
          <h2 id="web-development-businesses-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Web Development for Businesses in Rwanda
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              We provide professional web development services for businesses and organizations across Rwanda, including Kigali and surrounding regions. Our development work focuses on performance, security, and scalability — helping NGOs, startups, and growing companies build reliable digital platforms that support real operational needs.
            </p>
            <p>
              From custom websites to web applications and backend systems, our team understands the technical and compliance requirements common in Rwanda-based projects. We work closely with clients to deliver development solutions that integrate smoothly with existing tools, support future growth, and align with local business environments. We also provide <Link href="/web-design-rwanda" className="text-primary hover:text-primary-dark hover:underline">website design services in Rwanda</Link> for organizations that need both visual design and technical development capabilities.
            </p>
          </div>
        </section>

        {/* Technical Capabilities and Development Stack */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-10 fade-up" aria-labelledby="technical-capabilities">
          <h2 id="technical-capabilities" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900">
            Technical Capabilities and Development Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Modern Development Frameworks</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We build with Next.js, React, Node.js, and TypeScript to create fast, scalable web applications. Our development approach prioritizes code quality, maintainability, and performance optimization for Rwanda's infrastructure.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Server-side rendering (SSR) and static site generation (SSG)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>API route development and middleware implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Component-based architecture for scalable codebases</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Database Architecture and Integration</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We design and implement database solutions using PostgreSQL, MySQL, MongoDB, and cloud-based databases. Our database architecture ensures data integrity, efficient queries, and scalability for growing organizations in Rwanda.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Relational and NoSQL database design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Data migration and synchronization systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Backup and disaster recovery implementation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">API Development and Integration</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We build RESTful and GraphQL APIs that enable seamless integration between your web application and external services, mobile apps, and third-party platforms. Our API development follows industry best practices for security and performance.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Custom API endpoints and webhook implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Third-party service integration (payment gateways, SMS, email)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>API authentication and rate limiting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Backend Infrastructure and Deployment</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We deploy applications on cloud platforms optimized for performance in Rwanda, including AWS, Vercel, and custom server configurations. Our deployment processes ensure reliability, scalability, and minimal downtime.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>CI/CD pipeline setup and automated deployments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Server configuration and load balancing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Monitoring and logging implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Performance Optimization for Rwanda */}
        <section className="mb-16 fade-up" aria-labelledby="performance-optimization">
          <h2 id="performance-optimization" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Performance Optimization for Rwanda's Digital Infrastructure
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Web development in Rwanda requires special attention to performance optimization, given varying connectivity speeds and the need for applications to function reliably across different network conditions. We implement technical strategies that ensure your web application performs well for users in Kigali and throughout Rwanda.
            </p>
            <p className="mb-4">
              Our performance optimization approach includes code splitting, lazy loading, image optimization, caching strategies, and CDN integration. We optimize database queries, minimize API response times, and implement progressive loading techniques that provide fast initial page loads even on slower connections.
            </p>
            <p className="mb-4">
              We conduct performance testing using tools like Lighthouse, WebPageTest, and real-world testing across different network conditions in Rwanda. Our development process includes performance budgets and continuous monitoring to ensure your application maintains optimal speed as it scales.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2 text-gray-900">Core Web Vitals Optimization</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We optimize Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) to meet Google's performance standards and improve user experience.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2 text-gray-900">Caching and CDN Strategy</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We implement multi-layer caching at the application, database, and CDN levels to reduce server load and improve response times for users across Rwanda.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2 text-gray-900">Security and Performance Balance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We implement security measures that protect your application without compromising performance, ensuring fast load times while maintaining robust protection against threats.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Implementation */}
        <section className="mb-16 bg-gradient-to-br from-primary/5 to-gray-50 rounded-2xl p-8 md:p-10 fade-up" aria-labelledby="security-implementation">
          <h2 id="security-implementation" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Security Implementation for Web Applications in Rwanda
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Security is fundamental to web development, especially for organizations in Rwanda handling sensitive data, financial transactions, or beneficiary information. We implement comprehensive security measures throughout the development process, from code-level protections to infrastructure security.
            </p>
            <p className="mb-4">
              Our security implementation includes authentication and authorization systems, data encryption, SQL injection prevention, XSS protection, CSRF tokens, and secure API endpoints. We follow OWASP security guidelines and conduct security audits to identify and address vulnerabilities before deployment.
            </p>
            <p className="mb-6">
              For NGOs and organizations in Rwanda, we ensure compliance with data protection requirements and implement secure data handling practices. We provide ongoing security monitoring and updates to protect against emerging threats.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Authentication and Access Control</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>JWT-based authentication and session management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Role-based access control (RBAC) implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Multi-factor authentication (MFA) support</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Data Protection and Encryption</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>End-to-end encryption for sensitive data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Secure database connections (SSL/TLS)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Regular security audits and penetration testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Capabilities */}
        <section className="mb-16 fade-up" aria-labelledby="integration-capabilities">
          <h2 id="integration-capabilities" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Integration Capabilities for Organizations in Rwanda
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Modern organizations in Rwanda require web applications that integrate seamlessly with existing systems, third-party services, and mobile applications. Our web development services include comprehensive integration capabilities that connect your web platform with the tools and services your organization relies on.
            </p>
            <p className="mb-4">
              We integrate web applications with payment gateways (Mobile Money, bank transfers), SMS and email services, cloud storage solutions, ERP systems, CRM platforms, and mobile applications. Our integration approach ensures data consistency, real-time synchronization, and reliable communication between systems.
            </p>
            <p>
              For NGOs and humanitarian organizations in Rwanda, we build integrations with data collection tools, reporting systems, and donor management platforms. We also develop custom integration solutions when standard APIs are not available, ensuring your web application works with your existing technology ecosystem.
            </p>
          </div>
        </section>

        {/* Industries We Serve in Rwanda */}
        <section className="mb-16 bg-white rounded-2xl p-8 md:p-10 border border-gray-200 fade-up" aria-labelledby="industries-rwanda">
          <h2 id="industries-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Industries We Serve in Rwanda
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Our web development services support organizations across various sectors in Rwanda, each requiring specialized technical solutions and system architectures.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Humanitarian and Development Organizations</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  NGOs and humanitarian organizations in Rwanda need secure, scalable systems for program management, beneficiary tracking, and donor reporting. We build platforms that handle sensitive data while maintaining accessibility for field teams.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Program management and reporting systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Beneficiary database and tracking platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Mobile app integration for field data collection</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Financial Services and Fintech</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Financial institutions and fintech companies in Rwanda require robust, secure web applications with payment processing, transaction management, and compliance features. We build systems that meet regulatory requirements while delivering excellent user experiences.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Payment gateway integration and processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Transaction management and reporting systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Secure authentication and authorization systems</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Healthcare and Medical Services</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Healthcare providers in Rwanda need web applications that manage patient information, appointments, and medical records while maintaining strict privacy and security standards. We develop HIPAA-compliant systems tailored to healthcare workflows.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Patient management and appointment systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Medical record management platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Telemedicine and remote consultation tools</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Education and E-Learning</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Educational institutions and e-learning platforms in Rwanda require web applications that support course delivery, student management, and administrative functions. We build scalable learning management systems and student portals.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Learning management system development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Student portal and enrollment systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Content delivery and assessment platforms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Development Process */}
        <section className="mb-16 fade-up" aria-labelledby="development-process">
          <h2 id="development-process" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Our Web Development Process for Organizations in Rwanda
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              We follow an agile development methodology that ensures transparency, flexibility, and continuous delivery of value throughout the project lifecycle for organizations in Rwanda.
            </p>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">1. Requirements Analysis and Planning</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We conduct detailed requirements gathering sessions to understand your organization's technical needs, operational workflows, and integration requirements. This phase includes system architecture design and technology stack selection.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Stakeholder interviews and workflow analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Technical requirements documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>System architecture and technology selection</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">2. Development and Iteration</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Our development team builds your application using modern frameworks and best practices. We work in sprints, delivering functional increments regularly and incorporating feedback throughout the development process.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Agile sprint planning and execution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Regular code reviews and quality assurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Continuous integration and automated testing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">3. Testing and Quality Assurance</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We conduct comprehensive testing including unit tests, integration tests, security audits, and performance testing. We ensure your application works reliably under real-world conditions in Rwanda's digital environment.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Automated and manual testing procedures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Security vulnerability scanning and remediation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Performance testing and optimization</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">4. Deployment and Support</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We manage the deployment process, including server configuration, database migration, and go-live coordination. After launch, we provide ongoing support, monitoring, and iterative improvements based on user feedback and system performance.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Production deployment and configuration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Team training and documentation delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Ongoing maintenance and feature development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="mb-16 bg-gradient-to-br from-primary/5 to-gray-50 rounded-2xl p-8 md:p-10 fade-up" aria-labelledby="related-services">
          <h2 id="related-services" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Related Services for Organizations in Rwanda
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              Our web development services integrate seamlessly with other digital solutions we provide to organizations in Rwanda, creating comprehensive technology ecosystems.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">ERP and CRM Systems</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  For organizations requiring comprehensive business management, we integrate web applications with ERP and CRM systems that streamline operations, manage customer relationships, and automate workflows.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Includes ERPNext integration, custom CRM development, and workflow automation.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Mobile App Development</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We develop mobile applications that integrate with web platforms, enabling field teams to collect data, access information, and synchronize with central systems even in areas with limited connectivity.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Native and cross-platform apps with offline capabilities and real-time sync.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Cybersecurity Services</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We provide comprehensive security services including security audits, penetration testing, and secure hosting to protect web applications and sensitive organizational data.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Includes vulnerability assessments, security hardening, and ongoing threat monitoring.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Cloud Hosting and Infrastructure</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We deploy and manage cloud infrastructure optimized for performance in Rwanda, including scalable hosting, database management, and content delivery network configuration.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Ensures high availability, fast load times, and reliable uptime for organizations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Blue Team Africa */}
        <section className="mb-16 bg-white rounded-2xl p-8 md:p-10 border border-gray-200 fade-up" aria-labelledby="why-choose">
          <h2 id="why-choose" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900">
            Why Choose Blue Team Africa for Web Development in Rwanda
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Technical Expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                Our development team has extensive experience building complex web applications, backend systems, and scalable platforms. We stay current with modern development practices and technologies, ensuring your application is built with best-in-class solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Rwanda-Specific Optimization</h3>
              <p className="text-gray-700 leading-relaxed">
                We understand the technical challenges and opportunities in Rwanda's digital ecosystem. Our development approach accounts for local connectivity patterns, infrastructure considerations, and user behavior specific to organizations operating in Rwanda.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Scalable Architecture</h3>
              <p className="text-gray-700 leading-relaxed">
                We design and build web applications with scalability in mind, ensuring your system can grow with your organization. Our architecture decisions prioritize long-term maintainability and the ability to handle increased traffic and data volumes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Ongoing Technical Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Beyond initial development, we provide ongoing technical support, maintenance, security updates, and feature enhancements. We monitor your application's performance and proactively address issues to ensure reliable operation.
              </p>
            </div>
          </div>
        </section>

        {/* Working with Organizations in Rwanda */}
        <section className="mb-16 fade-up" aria-labelledby="working-rwanda">
          <h2 id="working-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Working with Organizations Across Rwanda
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Blue Team Africa works with diverse organizations in Rwanda, from startups and small businesses in Kigali to NGOs and institutions operating across the country. We understand that each organization has unique technical requirements and operational constraints, and we tailor our web development services accordingly.
            </p>
            <p className="mb-4">
              Whether you need a custom backend system for data management, API development for mobile app integration, database architecture for scalable growth, or a complete web application platform, we build solutions that align with your technical needs and business objectives.
            </p>
            <p className="mb-6">
              Our remote-first development approach enables effective collaboration with organizations throughout Rwanda while maintaining deep technical expertise and understanding of local context. We combine technical excellence with regional knowledge to deliver web development solutions that work for Rwandan organizations.
            </p>
            <div className="mt-8">
              <Link
                href="/locations/rwanda"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark hover:underline"
              >
                Learn more about our services in Rwanda →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16 fade-up" aria-labelledby="faq-section">
          <h2 id="faq-section" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">What types of web applications do you build?</h3>
              <p className="text-gray-700 leading-relaxed">
                We build a wide range of web applications including custom business platforms, NGO management systems, e-commerce solutions, dashboards, CRM integrations, API-driven applications, and scalable cloud-based systems for organizations in Rwanda.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Do you provide custom software development?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. We provide full-stack custom software development services, building tailored solutions from the ground up to meet specific business requirements, including backend systems, APIs, databases, and frontend interfaces.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Is your development scalable and secure?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. All our web development follows security best practices and is built with scalability in mind. We use modern frameworks, implement secure authentication, regular security updates, and architecture designed to grow with your business needs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Do you offer ongoing support after development?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. We provide ongoing technical support, maintenance, security updates, and system improvements after project delivery. Support packages are tailored to client needs, ensuring your application continues to perform optimally.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white fade-in shadow-2xl" aria-labelledby="cta-section">
          <h2 id="cta-section" className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-white">
            Ready to Build Your Web Application in Rwanda?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your web development project and create a robust, scalable application that powers your organization's digital operations. Contact us today to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Your Development Project
            </Link>
            <a
              href="https://wa.me/256765508131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-semibold"
            >
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

