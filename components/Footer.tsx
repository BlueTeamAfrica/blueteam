import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Blue Team Africa</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Expert web design and development services across East Africa. 
              Sudanese tech experts bringing innovation to Uganda, Kenya, and Rwanda.
            </p>
            <p className="text-gray-500 text-sm">
              Based in East Africa, serving businesses globally.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services/web-design" className="hover:text-white transition">Web Design</Link></li>
              <li><Link href="/services/web-development" className="hover:text-white transition">Web Development</Link></li>
              <li><Link href="/services/hosting" className="hover:text-white transition">Hosting</Link></li>
              <li><Link href="/services/app-development" className="hover:text-white transition">App Development</Link></li>
              <li><Link href="/services/saas" className="hover:text-white transition">SaaS Solutions</Link></li>
              <li><Link href="/services/cloud" className="hover:text-white transition">Cloud Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Locations</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/uganda/web-design" className="hover:text-white transition">Uganda</Link></li>
              <li><Link href="/kenya/web-design" className="hover:text-white transition">Kenya</Link></li>
              <li><Link href="/rwanda/web-design" className="hover:text-white transition">Rwanda</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Blue Team Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

