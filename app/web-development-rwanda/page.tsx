import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import InteriorHeader from '@/components/InteriorHeader'
import { Code, Database, Zap, Shield, GitBranch, Server, Cloud } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Development Company in Rwanda | Blue Team Africa',
  description: 'Web development company in Rwanda providing professional web development services for businesses and NGOs. Custom backend systems, API integrations, database solutions, and scalable web applications built for Kigali and across Rwanda.',
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
    title: 'Web Development Company in Rwanda | Blue Team Africa',
    description: 'Web development company in Rwanda providing professional web development services for businesses and NGOs. Custom backend systems, API integrations, and scalable web applications.',
    url: 'https://www.blueteamafrica.com/web-development-rwanda',
    type: 'website',
  },
}

export default function WebDevelopmentRwandaPage() {
  return (
    <>
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

