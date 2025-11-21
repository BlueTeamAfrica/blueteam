import type { Metadata } from "next";
import InteriorPageLayout from "@/components/InteriorPageLayout";
import ServiceSidebar from "@/components/ServiceSidebar";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Website Development Services in Uganda & East Africa | Blue Team Africa",
  description: "Expert website development services in Uganda, Kenya, Rwanda & Sudan. We build fast, secure, and scalable websites for businesses and NGOs. Custom web applications, e-commerce platforms, and integrated systems.",
  keywords: [
    "website development Uganda",
    "web development East Africa",
    "custom web applications",
    "NGO website development",
    "business website development Kenya",
    "e-commerce development",
    "web application development Sudan",
    "website development services Rwanda",
    "scalable web development",
    "secure website development"
  ],
  openGraph: {
    title: "Professional Website Development Services in Uganda & East Africa",
    description: "Fast, secure, and scalable website development for businesses and NGOs across East Africa.",
    images: ["/images/hero/hero-banner-og-image-v01.webp"],
  },
};

export default function WebsiteDevelopmentPage() {
  return (
    <InteriorPageLayout
      title="Professional Website Development Services in Uganda & East Africa"
      breadcrumb="Website Development"
    >
      <div className="grid lg:grid-cols-[1fr_320px] gap-12">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <SectionWrapper>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Blue Team Africa, we develop fast, secure, and scalable websites that help businesses, NGOs, and organizations grow online. Whether you need a custom-built system, a dynamic website integrated with your internal workflows, or a fully optimized business platform — our development team delivers reliable, modern, and SEO-ready solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              From corporate websites to NGO management platforms, our builds are designed to perform under real conditions in Uganda, Sudan, Kenya, and across East Africa.
            </p>
          </SectionWrapper>

          {/* Why Website Development Matters */}
          <SectionWrapper title="Why Website Development Matters">
            <p className="text-gray-700 leading-relaxed mb-4">
              Most companies stop at "web design," but real success requires <strong>website development</strong> — the part that makes your site powerful, functional, automated, and secure.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website development services focus on:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Speed optimization</strong> (Core Web Vitals)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Secure backend systems</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Integrations</strong> with databases & APIs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Scalable architecture</strong> for growth</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Mobile-first performance</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>SEO-ready code structure</strong></span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This ensures your website doesn't just look good — it works flawlessly, loads fast, ranks high, and supports real business operations.
            </p>
          </SectionWrapper>

          {/* What We Build */}
          <SectionWrapper title="What We Build">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  1. Business & Corporate Websites
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  High-performance websites built for companies in Uganda, Sudan, Kenya, and Rwanda. Optimized for search engines and tailored to your brand.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  2. NGO & Humanitarian Organization Websites
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We specialize in building digital platforms for NGOs operating across East Africa. This includes membership systems, reporting dashboards, data collection tools, and secure portals.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  3. E-Commerce Websites
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Full online sales platforms with product management, payment integration, and inventory tracking.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  4. Custom Web Applications
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  If your operations are unique, we build software that matches your workflow — rather than forcing you to adapt.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  5. Integrated Mobile + Web Systems
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  For field teams, humanitarian missions, and sensitive operations. We can build:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Mobile apps for data collection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Secure dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Centralized cloud reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Offline-to-online sync</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Multi-level access for staff</span>
                  </li>
                </ul>
              </div>
            </div>
          </SectionWrapper>

          {/* Real Case Example */}
          <SectionWrapper title="Real Case Example" bgColor="bg-blue-50">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">
                CSLO Sudan – ERP + CRM + Website Development
              </h3>
              <p className="text-gray-700 leading-relaxed">
                During the Sudan crisis, CSLO struggled to manage members and humanitarian reports spread across different regions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Blue Team Africa built a complete ERPNext-based system, CRM module, and a fully integrated website — enabling their team inside Sudan to securely store, track, and manage data even in risky areas.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We also designed a complementary mobile app for data collectors in remote zones. All information syncs directly to the database for real-time reporting.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                👉 This proves our capability to build enterprise-level systems for real field conditions.
              </p>
              <Link
                href="/portfolio/cslo-sudan"
                className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-semibold"
              >
                View Full Case Study →
              </Link>
            </div>
          </SectionWrapper>

          {/* Why Choose Blue Team Africa */}
          <SectionWrapper title="Why Choose Blue Team Africa">
            <p className="text-gray-700 leading-relaxed mb-4">
              We are a Sudanese-founded team with firsthand experience navigating crisis environments. We operate in Uganda, serving clients across East Africa.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our survival story pushes us to deliver high-quality work with absolute integrity. We build websites and systems that function reliably even under pressure — because we understand what "mission-critical" really means.
            </p>
          </SectionWrapper>

          {/* Service Highlights */}
          <SectionWrapper title="Service Highlights">
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Website development in Uganda</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Custom web applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Fast & SEO-optimized websites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Secure database-driven platforms</span>
                </li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Humanitarian & NGO technology solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Mobile + website integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>API & cloud system integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Scalable hosting & maintenance packages</span>
                </li>
              </ul>
            </div>
          </SectionWrapper>

          {/* Related Services */}
          <SectionWrapper title="Related Services">
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/services/web-design"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-1">Website Design</h3>
                <p className="text-sm text-gray-600">UI/UX design and visual branding</p>
              </Link>
              <Link
                href="/services/mobile-apps"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-1">Mobile App Development</h3>
                <p className="text-sm text-gray-600">iOS and Android applications</p>
              </Link>
              <Link
                href="/services/cybersecurity"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-1">Cyber Security Services</h3>
                <p className="text-sm text-gray-600">Security audits and protection</p>
              </Link>
              <Link
                href="/services/erp"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-1">ERP Systems for NGOs</h3>
                <p className="text-sm text-gray-600">ERPNext and enterprise solutions</p>
              </Link>
            </div>
          </SectionWrapper>

          {/* Call to Action */}
          <SectionWrapper bgColor="bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Ready to Build a Reliable Website or System for Your Organization?
              </h2>
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Our team is here to support your mission with professional, secure, and scalable technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a
                  href="tel:+256765508131"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  📞 +256 765 508 131
                </a>
                <a
                  href="mailto:contact@blueteamafrica.com"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                >
                  📧 Get Started
                </a>
              </div>
              <p className="text-sm text-gray-600 pt-2">
                💬 WhatsApp chat available for quick inquiries
              </p>
            </div>
          </SectionWrapper>
        </div>

        {/* Sidebar */}
        <aside>
          <ServiceSidebar />
        </aside>
      </div>
    </InteriorPageLayout>
  );
}

