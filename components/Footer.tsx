import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-infratel-gray text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="mb-4">
              <span className="text-3xl font-bold tracking-tight text-infratel-red">
                Infratel
              </span>
              <span className="text-sm text-gray-400">.sg</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Next-generation 5G connectivity in Singapore. Experience the future of
              mobile communications.
            </p>
            <div className="text-gray-400 text-sm space-y-1 mb-4">
              <p><a href="tel:+6589891397" className="hover:text-white transition-colors">+65 8989 1397</a></p>
              <p><a href="mailto:info@infratel.sg" className="hover:text-white transition-colors">info@infratel.sg</a></p>
            </div>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-infratel-red transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-infratel-red transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-infratel-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-infratel-red transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://youtube.com"
                className="text-gray-400 hover:text-infratel-red transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/mobile"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Mobile Plans
                </a>
              </li>
              <li>
                <a
                  href="/broadband"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Broadband
                </a>
              </li>
              <li>
                <a
                  href="/roaming"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Roaming
                </a>
              </li>
              <li>
                <a
                  href="/esim"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  eSIM
                </a>
              </li>
              <li>
                <a
                  href="/devices"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Devices
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/help"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/coverage"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Coverage Map
                </a>
              </li>
              <li>
                <a
                  href="/port-in"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Port Your Number
                </a>
              </li>
              <li>
                <a
                  href="/stores"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Store Locator
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/investors"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Investor Relations
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/newsroom"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Newsroom
                </a>
              </li>
              <li>
                <a
                  href="/sustainability"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="font-semibold text-white mb-4">Business</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/business"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Business Solutions
                </a>
              </li>
              <li>
                <a
                  href="/enterprise"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Enterprise
                </a>
              </li>
              <li>
                <a
                  href="/iot"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  IoT Solutions
                </a>
              </li>
              <li>
                <a
                  href="/wholesale"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Wholesale
                </a>
              </li>
              <li>
                <a
                  href="/partners"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Partner Program
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">·</span>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <span className="text-gray-600">·</span>
              <a
                href="/cookies"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
              <span className="text-gray-600">·</span>
              <a
                href="/sitemap"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Sitemap
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>
                © {currentYear} Infratel Communications Pte. Ltd.
              </p>
              <p className="mt-1">UEN: 202532622H · All prices inclusive of GST.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
