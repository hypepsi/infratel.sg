import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Wifi, Zap, Shield, CheckCircle, Home } from 'lucide-react'

export default function BroadbandPage() {
  const plans = [
    {
      name: 'Home 500',
      speed: '500Mbps',
      price: 29.90,
      features: [
        'Download: 500Mbps',
        'Upload: 500Mbps',
        'Free WiFi 6 Router',
        'Unlimited data',
        'Free installation',
        '24/7 support'
      ]
    },
    {
      name: 'Home 1Gbps',
      speed: '1Gbps',
      price: 39.90,
      highlight: true,
      features: [
        'Download: 1Gbps',
        'Upload: 1Gbps',
        'Free WiFi 6E Router',
        'Unlimited data',
        'Free installation',
        'Priority support',
        'Free mesh extender'
      ]
    },
    {
      name: 'Home 2Gbps',
      speed: '2Gbps',
      price: 49.90,
      features: [
        'Download: 2Gbps',
        'Upload: 2Gbps',
        'Premium WiFi 6E Router',
        'Unlimited data',
        'Free installation',
        'Priority support',
        'Free mesh system (2 units)',
        'Static IP included'
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Home className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Superfast Home Broadband
            </h1>
            <p className="text-xl text-white/90">
              Experience lightning-fast fiber broadband with speeds up to 2Gbps. Perfect for streaming, gaming, and working from home.
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Choose Your Speed
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  plan.highlight ? 'ring-4 ring-infratel-red transform scale-105' : ''
                }`}
              >
                {plan.highlight && (
                  <div className="bg-infratel-red text-white text-center py-2 text-sm font-semibold">
                    ⭐ Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-4xl font-bold text-infratel-red mb-1">{plan.speed}</p>
                  
                  <div className="my-6">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600">/month</span>
                    <p className="text-sm text-gray-500 mt-1">No contract required</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={`/broadband/signup?plan=${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all touch-manipulation ${
                      plan.highlight
                        ? 'bg-infratel-red text-white hover:bg-red-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Infratel Broadband?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-infratel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-infratel-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Symmetrical Speed
                </h3>
                <p className="text-gray-600">
                  Same speed for downloads and uploads. Perfect for video calls and cloud backups.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-infratel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-infratel-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Free WiFi 6 Router
                </h3>
                <p className="text-gray-600">
                  Latest technology for maximum coverage and performance throughout your home.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-infratel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-infratel-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  No Contract Lock-in
                </h3>
                <p className="text-gray-600">
                  Cancel anytime with just 30 days notice. No penalties or hidden fees.
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
