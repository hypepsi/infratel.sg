import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MapIcon } from 'lucide-react'

export default function SitemapPage() {
  const sections = [
    {
      title: 'Products',
      links: [
        { name: 'Mobile Plans', url: '/plans' },
        { name: 'Broadband', url: '/broadband' },
        { name: 'Roaming', url: '/roaming' },
        { name: 'eSIM', url: '/esim' },
        { name: 'Devices', url: '/devices' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', url: '/help' },
        { name: 'Coverage Map', url: '/coverage' },
        { name: 'Port Your Number', url: '/port-in' },
        { name: 'Store Locator', url: '/stores' },
        { name: 'Contact Us', url: '/contact' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '/about' },
        { name: 'Investor Relations', url: '/investors' },
        { name: 'Careers', url: '/careers' },
        { name: 'Newsroom', url: '/newsroom' },
        { name: 'Sustainability', url: '/sustainability' },
      ]
    },
    {
      title: 'Business',
      links: [
        { name: 'Business Solutions', url: '/business' },
        { name: 'Enterprise', url: '/enterprise' },
        { name: 'IoT Solutions', url: '/iot' },
        { name: 'Wholesale', url: '/wholesale' },
        { name: 'Partner Program', url: '/partners' },
      ]
    },
    {
      title: 'Other',
      links: [
        { name: 'Rewards Program', url: '/rewards' },
        { name: 'Login', url: '/login' },
        { name: 'Privacy Policy', url: '/privacy' },
        { name: 'Terms of Service', url: '/terms' },
        { name: 'Cookie Policy', url: '/cookies' },
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <MapIcon className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Sitemap
            </h1>
            <p className="text-xl text-white/90">
              Find your way around infratel.sg
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.url}
                          className="text-gray-600 hover:text-infratel-red transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for?
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
