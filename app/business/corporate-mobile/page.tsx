import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Check, ArrowRight } from 'lucide-react'

export default function CorporateMobilePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Corporate Mobile Plans
            </h1>
            <p className="text-xl text-white/90">
              Flexible mobile solutions designed for businesses of all sizes with centralized billing and management.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Volume-Based Pricing
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter */}
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-gray-600 mb-4">For small teams</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$35</span>
                  <span className="text-gray-600">/line/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>10-49 lines</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>30GB data per line</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Unlimited local calls/SMS</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Online management portal</span>
                  </li>
                </ul>
                <a href="/business/quote" className="block w-full px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors text-center">
                  Get Quote
                </a>
              </div>

              {/* Business */}
              <div className="bg-white rounded-xl p-8 shadow-xl border-2 border-infratel-red relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-infratel-red text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Business</h3>
                <p className="text-gray-600 mb-4">For growing companies</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-infratel-red">$28</span>
                  <span className="text-gray-600">/line/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>50-199 lines</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>50GB data per line</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Unlimited local calls/SMS</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <a href="/business/quote" className="block w-full px-6 py-3 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors text-center">
                  Get Quote
                </a>
              </div>

              {/* Enterprise */}
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-4">For large organizations</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">Custom</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>200+ lines</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Unlimited data per line</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Unlimited everything</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom SLA agreements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>24/7 premium support</span>
                  </li>
                </ul>
                <a href="/contact" className="block w-full px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors text-center">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              All Plans Include
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-infratel-red/10 rounded-lg flex items-center justify-center mr-4">
                  <Check className="w-6 h-6 text-infratel-red" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Single Consolidated Bill</h3>
                  <p className="text-gray-600">One invoice for all your lines with detailed usage reports</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-infratel-red/10 rounded-lg flex items-center justify-center mr-4">
                  <Check className="w-6 h-6 text-infratel-red" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Online Management Portal</h3>
                  <p className="text-gray-600">Add, remove, or modify lines instantly through our portal</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-infratel-red/10 rounded-lg flex items-center justify-center mr-4">
                  <Check className="w-6 h-6 text-infratel-red" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">No Contracts</h3>
                  <p className="text-gray-600">Month-to-month flexibility with no long-term commitments</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-infratel-red/10 rounded-lg flex items-center justify-center mr-4">
                  <Check className="w-6 h-6 text-infratel-red" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Free Number Porting</h3>
                  <p className="text-gray-600">Keep your existing numbers at no extra cost</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-infratel-red/10 rounded-lg flex items-center justify-center mr-4">
                  <Check className="w-6 h-6 text-infratel-red" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Free SIM Cards</h3>
                  <p className="text-gray-600">Physical SIMs or eSIM activation included</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-infratel-red/10 rounded-lg flex items-center justify-center mr-4">
                  <Check className="w-6 h-6 text-infratel-red" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Business Support</h3>
                  <p className="text-gray-600">Dedicated business support team available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-infratel-red to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a custom quote for your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/business/quote" className="inline-flex items-center justify-center px-8 py-4 bg-white text-infratel-red font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Request a Quote
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur border-2 border-white text-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
