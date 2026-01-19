import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Check, X, Zap, Globe, Phone, MessageSquare, Download, Upload } from 'lucide-react'

export default function PlansPage() {
  const plans = [
    {
      name: 'SIM Only Lite',
      price: 18.00,
      originalPrice: null,
      highlight: false,
      badge: 'Students & Seniors',
      description: 'Perfect for light users',
      data: '20GB',
      speed: '300Mbps',
      calls: 'Unlimited',
      sms: 'Unlimited',
      roaming: '1GB',
      contract: 'No contract',
      features: [
        'Free incoming calls',
        'Free SIM delivery',
        'Port number for free',
        '20GB local data',
        'Unlimited local calls',
        'Unlimited local SMS',
        '1GB roaming data',
        'WiFi calling',
      ],
      notIncluded: [
        '5G Standalone',
        'Premium customer support',
      ]
    },
    {
      name: '5G Pro',
      price: 28.50,
      originalPrice: 35.00,
      highlight: true,
      badge: 'Best Seller',
      description: 'Most popular choice for everyday use',
      data: '100GB',
      speed: '500Mbps',
      calls: 'Unlimited',
      sms: 'Unlimited',
      roaming: '5GB',
      contract: 'No contract',
      features: [
        '100GB high-speed data',
        '5G Standalone access',
        'Unlimited local calls & SMS',
        '5GB roaming data (SEA)',
        'WiFi calling & VoLTE',
        'Free SIM delivery',
        'Port number for free',
        'Priority customer support',
        'Data rollover (up to 50GB)',
        'Free caller ID display',
      ],
      notIncluded: []
    },
    {
      name: 'Elite Travel',
      price: 45.00,
      originalPrice: null,
      highlight: false,
      badge: 'Premium',
      description: 'For frequent travelers',
      data: 'Unlimited',
      speed: '1Gbps',
      calls: 'Unlimited',
      sms: 'Unlimited',
      roaming: '20GB',
      contract: 'No contract',
      features: [
        'Unlimited local data',
        '5G Standalone access',
        'Ultra-fast 1Gbps speeds',
        '20GB roaming data (Global)',
        'Free roaming in 50+ countries',
        'Unlimited local & IDD calls',
        'Priority customer support 24/7',
        'Free SIM delivery',
        'Port number for free',
        'Unlimited data rollover',
        'Free mobile insurance ($500)',
      ],
      notIncluded: []
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Choose Your Perfect Plan
            </h1>
            <p className="text-xl text-white/90">
              No contracts. No hidden fees. Just transparent pricing for premium 5G connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                  plan.highlight ? 'ring-4 ring-infratel-red shadow-2xl' : ''
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-infratel-red to-red-600 text-white text-center py-2 text-sm font-semibold">
                    ⭐ {plan.badge}
                  </div>
                )}
                
                <div className={`p-8 ${plan.highlight ? 'pt-14' : ''}`}>
                  {!plan.highlight && plan.badge && (
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      {plan.badge}
                    </span>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-infratel-red">
                        ${plan.price.toFixed(2)}
                      </span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </div>
                    {plan.originalPrice && (
                      <p className="text-sm text-gray-500 line-through mt-1">
                        Was ${plan.originalPrice.toFixed(2)}/month
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">GST inclusive</p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-center">
                      <Download className="w-5 h-5 text-infratel-red mr-2" />
                      <div>
                        <p className="text-xs text-gray-600">Data</p>
                        <p className="font-semibold text-gray-900">{plan.data}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-5 h-5 text-infratel-red mr-2" />
                      <div>
                        <p className="text-xs text-gray-600">Speed</p>
                        <p className="font-semibold text-gray-900">{plan.speed}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-infratel-red mr-2" />
                      <div>
                        <p className="text-xs text-gray-600">Calls</p>
                        <p className="font-semibold text-gray-900">{plan.calls}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 text-infratel-red mr-2" />
                      <div>
                        <p className="text-xs text-gray-600">Roaming</p>
                        <p className="font-semibold text-gray-900">{plan.roaming}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <li key={`not-${idx}`} className="flex items-start opacity-50">
                        <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`/signup?plan=${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                      plan.highlight
                        ? 'bg-infratel-red text-white hover:bg-red-700 shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Can I change plans anytime?
                </h3>
                <p className="text-gray-700">
                  Yes! All our plans are contract-free. You can upgrade or downgrade anytime without penalties.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  What happens when I exceed my data limit?
                </h3>
                <p className="text-gray-700">
                  Your speeds will be throttled to 1Mbps after exceeding your data limit. You can always purchase data add-ons or upgrade your plan.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Is 5G available everywhere in Singapore?
                </h3>
                <p className="text-gray-700">
                  Our 5G network covers 99% of Singapore, including all MRT stations and popular shopping areas. Check our coverage map for details.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  How long does it take to port my number?
                </h3>
                <p className="text-gray-700">
                  Number porting typically takes 2-4 hours during business hours. You'll receive an SMS confirmation when complete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
