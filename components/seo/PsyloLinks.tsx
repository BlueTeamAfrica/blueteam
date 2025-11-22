import Link from "next/link";

/**
 * PsyloLinks Component
 * 
 * SEO-friendly invisible internal links for better site crawlability.
 * These links are hidden from visual display but accessible to search engines.
 * 
 * Place at the bottom of each page for better internal linking structure.
 */
export default function PsyloLinks() {
  return (
    <div className="sr-only" aria-hidden="true">
      <Link href="/services/web-design">web design</Link>
      <Link href="/services/web-design">website design</Link>
      <Link href="/services/website-development">website development</Link>
      <Link href="/services/cybersecurity">cybersecurity</Link>
      <Link href="/services/cybersecurity">cybersecurity solutions</Link>
      <Link href="/services/ecommerce">ecommerce</Link>
      <Link href="/services/ecommerce">e-commerce</Link>
      <Link href="/services/mobile-apps">mobile app development</Link>
      <Link href="/services/mobile-apps">mobile apps</Link>
      <Link href="/services/erp">ERP systems</Link>
      <Link href="/services/erp">ERP solutions</Link>
      <Link href="/services/crm">CRM systems</Link>
      <Link href="/services/crm">CRM solutions</Link>
      <Link href="/services/hosting">web hosting</Link>
      <Link href="/services/hosting">hosting</Link>
      <Link href="/services/ui-ux">UI/UX design</Link>
      <Link href="/services/branding">branding</Link>
      <Link href="/services/maintenance">website maintenance</Link>
      <Link href="/services/custom-systems">custom systems</Link>
    </div>
  );
}

