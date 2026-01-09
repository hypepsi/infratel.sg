import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Building2, Users, Shield, Headphones, Globe, BarChart, ArrowRight } from 'lucide-react'

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-white/90">
              Powerful connectivity solutions tailored for Singapore businesses. From SMEs to large enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Business Solutions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Users className="w-12 h-12 text-infratel-red mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Corporate Mobile Plans
                </h3>
                <p className="text-gray-600 mb-4">
                  Flexible mobile plans for your team with centralized billing and management.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3"></div>
                    Volume discounts from 10 lines
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3"></div>
                    Single consolidated bill
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3"></div>
                    Online portal for line management
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3"></div>
                    Dedicated account manager
                  </li>
                </ul>
                <a href="/business/corporate-mobile" className="inline-flex items-center px-6 py-3 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Globe className="w-12 h-12 text-infratel-red mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Enterprise Connectivity
                </h3>
                <p className="text-gray-600 mb-4">
                  High-speed dedicated internet and private network solutions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3"></div>
                    Dedicated fiber up to 10Gbps
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3"></div>
                    99.9% SLA guarantee
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3"></div>
                    Static IP addresses
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3"></div>
                    24/7 network monitoring
                  </li>
                </ul>
                <a href="/contact" className="inline-flex items-center px-6 py-3 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                  Contact Sales
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Shield className="w-12 h-12 text-infratel-red mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Cybersecurity Services
                </h3>
                <p className="text-gray-600 mb-4">
                  Protect your business with enterprise-grade security solutions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3"></div>
                    Advanced threat protection
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3"></div>
                    DDoS mitigation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3"></div>
                    Secure web gateway
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3"></div>
                    Regular security audits
                  </li>
                </ul>
                <a href="/contact" className="inline-flex items-center px-6 py-3 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                  Contact Sales
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <BarChart className="w-12 h-12 text-infratel-red mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  IoT & M2M Solutions
                </h3>
                <p className="text-gray-600 mb-4">
                  Connect your devices with reliable IoT connectivity.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3"></div>
                    Low-cost data plans
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3"></div>
                    Global SIM cards
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3"></div>
                    API integration
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3"></div>
                    Real-time monitoring
                  </li>
                </ul>
                <a href="/iot" className="inline-flex items-center px-6 py-3 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Businesses Choose Infratel
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Fast Deployment
                </h3>
                <p className="text-gray-600">
                  Get your team connected in as little as 3 business days.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Enterprise-Grade Security
                </h3>
                <p className="text-gray-600">
                  Built-in security features to protect your business data.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">👨‍💼</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Dedicated Support
                </h3>
                <p className="text-gray-600">
                  Your personal account manager available when you need them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Speak to our business solutions team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/business/quote" className="inline-flex items-center justify-center px-8 py-4 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                Request a Quote
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Contact Sales
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
