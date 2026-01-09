import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Globe, Plane, Wifi, DollarSign, Shield, Clock } from 'lucide-react'

export default function RoamingPage() {
  const regions = [
    {
      name: 'Southeast Asia',
      countries: ['Malaysia', 'Thailand', 'Indonesia', 'Philippines', 'Vietnam', 'Cambodia'],
      dailyRate: 5,
      features: ['4G/5G Data', 'Unlimited calls', 'Unlimited SMS']
    },
    {
      name: 'Asia Pacific',
      countries: ['China', 'Hong Kong', 'Taiwan', 'Japan', 'South Korea', 'Australia'],
      dailyRate: 8,
      features: ['4G/5G Data', 'Unlimited calls', 'Unlimited SMS']
    },
    {
      name: 'Europe',
      countries: ['UK', 'France', 'Germany', 'Italy', 'Spain', 'Switzerland'],
      dailyRate: 12,
      features: ['4G/5G Data', 'Unlimited calls', 'Unlimited SMS']
    },
    {
      name: 'Americas',
      countries: ['USA', 'Canada', 'Mexico', 'Brazil'],
      dailyRate: 15,
      features: ['4G/5G Data', 'Unlimited calls', 'Unlimited SMS']
    }
  ]

  const dataPasses = [
    {
      name: 'SEA Data Pass',
      data: '1GB',
      validity: '7 days',
      price: 10,
      countries: 'Malaysia, Thailand, Indonesia'
    },
    {
      name: 'Asia Data Pass',
      data: '3GB',
      validity: '14 days',
      price: 35,
      countries: 'All Asian countries'
    },
    {
      name: 'Global Data Pass',
      data: '5GB',
      validity: '30 days',
      price: 80,
      countries: 'Over 100 countries worldwide'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Globe className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Stay Connected Worldwide
            </h1>
            <p className="text-xl text-white/90">
              Enjoy seamless roaming in over 100 countries with transparent pricing and no bill shock.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Infratel Roaming?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-infratel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-infratel-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Transparent Pricing
                </h3>
                <p className="text-gray-600">
                  No hidden charges. Pay only for what you use with our daily flat rates.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-infratel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-infratel-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Bill Protection
                </h3>
                <p className="text-gray-600">
                  Set spending limits and receive alerts to avoid unexpected charges.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-infratel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-infratel-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Auto-Activation
                </h3>
                <p className="text-gray-600">
                  Roaming activates automatically when you land. No setup required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Rates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Daily Roaming Rates
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Pay per day only when you use your phone abroad
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {regions.map((region, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {region.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {region.countries.slice(0, 3).join(', ')}
                        {region.countries.length > 3 && ` +${region.countries.length - 3} more`}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-infratel-red">
                        ${region.dailyRate}
                      </p>
                      <p className="text-sm text-gray-600">per day</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <p className="font-semibold text-gray-900 mb-2">Included:</p>
                    <ul className="space-y-2">
                      {region.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-2">💡 Pro Tip</h4>
              <p className="text-blue-800">
                Daily charges only apply on days you actually use your phone abroad. If you don't use data, calls, or SMS on a particular day, you won't be charged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Passes */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Data Passes
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Prepaid data packages for longer trips
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {dataPasses.map((pass, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {pass.name}
                    </h3>
                    <div className="text-4xl font-bold text-infratel-red mb-1">
                      ${pass.price}
                    </div>
                    <p className="text-sm text-gray-600">One-time payment</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600">Data</span>
                      <span className="font-semibold text-gray-900">{pass.data}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600">Validity</span>
                      <span className="font-semibold text-gray-900">{pass.validity}</span>
                    </div>
                    <div className="pt-3">
                      <p className="text-sm text-gray-600 mb-1">Coverage:</p>
                      <p className="text-sm font-medium text-gray-900">{pass.countries}</p>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 px-6 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                    Purchase Pass
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Popular Destinations from Singapore
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { country: '🇲🇾 Malaysia', rate: '$5/day' },
                { country: '🇹🇭 Thailand', rate: '$5/day' },
                { country: '🇯🇵 Japan', rate: '$8/day' },
                { country: '🇰🇷 South Korea', rate: '$8/day' },
                { country: '🇦🇺 Australia', rate: '$8/day' },
                { country: '🇬🇧 United Kingdom', rate: '$12/day' },
                { country: '🇺🇸 United States', rate: '$15/day' },
                { country: '🇫🇷 France', rate: '$12/day' },
              ].map((dest, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <p className="text-2xl mb-2">{dest.country}</p>
                  <p className="font-semibold text-infratel-red">{dest.rate}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              How to Use Roaming
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Activate</h3>
                <p className="text-white/80">
                  Roaming is automatically enabled on all plans. No setup needed.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Travel</h3>
                <p className="text-white/80">
                  When you land abroad, your phone will automatically connect to partner networks.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
                <p className="text-white/80">
                  Use data, calls, and SMS as usual. Pay only for days you use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Roaming FAQs
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Do I need to activate roaming before traveling?
                </h3>
                <p className="text-gray-700">
                  No, roaming is automatically enabled on all Infratel plans. Your phone will connect automatically when you arrive at your destination.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  How do I avoid bill shock?
                </h3>
                <p className="text-gray-700">
                  Set spending limits in the My Infratel app. You'll receive SMS alerts at 50%, 80%, and 100% of your limit. Roaming will auto-pause when you reach your limit.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Can I use data passes with daily roaming?
                </h3>
                <p className="text-gray-700">
                  Yes! Data passes give you better value for longer trips. Once activated, they'll be used first before daily roaming charges apply.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  What if I'm on a cruise?
                </h3>
                <p className="text-gray-700">
                  Maritime roaming is charged separately at $2.50 per MB. We recommend turning off data roaming on cruise ships to avoid high charges.
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
