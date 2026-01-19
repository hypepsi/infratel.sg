import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MapPin, Signal, Wifi, Building2, Train, ShoppingBag, Plane } from 'lucide-react'

export default function CoveragePage() {
  const locations = [
    {
      icon: Building2,
      title: 'Central Business District',
      coverage: '100%',
      speed: '800Mbps',
      areas: ['Raffles Place', 'Marina Bay', 'Shenton Way', 'Tanjong Pagar']
    },
    {
      icon: Train,
      title: 'MRT Network',
      coverage: '100%',
      speed: '600Mbps',
      areas: ['All MRT Stations', 'All MRT Tunnels', 'Platform coverage', 'Train carriages']
    },
    {
      icon: ShoppingBag,
      title: 'Shopping Districts',
      coverage: '100%',
      speed: '700Mbps',
      areas: ['Orchard Road', 'Marina Square', 'VivoCity', 'Jewel Changi']
    },
    {
      icon: Plane,
      title: 'Changi Airport',
      coverage: '100%',
      speed: '900Mbps',
      areas: ['All Terminals', 'Transit Areas', 'Check-in Halls', 'Arrival Halls']
    }
  ]

  const regions = [
    { name: 'Central Region', coverage: '99.9%', color: 'bg-green-500' },
    { name: 'North Region', coverage: '99.5%', color: 'bg-green-500' },
    { name: 'East Region', coverage: '99.7%', color: 'bg-green-500' },
    { name: 'West Region', coverage: '99.4%', color: 'bg-green-500' },
    { name: 'North-East Region', coverage: '99.6%', color: 'bg-green-500' },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Signal className="w-5 h-5 mr-2" />
              <span className="font-semibold">99% Island-Wide Coverage</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Comprehensive 5G Network Coverage
            </h1>
            <p className="text-xl text-white/90">
              Experience seamless connectivity across the entire island with our extensive 5G Standalone network.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-infratel-red/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Signal className="w-6 h-6 text-infratel-red" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">99%</p>
              <p className="text-gray-600">Coverage</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-infratel-red/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-6 h-6 text-infratel-red" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">500+</p>
              <p className="text-gray-600">5G Sites</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-infratel-red/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-infratel-red" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">100%</p>
              <p className="text-gray-600">MRT Coverage</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-infratel-red/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-infratel-red" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">95%</p>
              <p className="text-gray-600">Indoor Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Coverage at Key Locations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {locations.map((location, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-infratel-red rounded-lg flex items-center justify-center mr-4">
                      <location.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {location.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-green-600 font-semibold">
                          {location.coverage} Coverage
                        </span>
                        <span className="text-gray-600">
                          Avg {location.speed}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 ml-16">
                    {location.areas.map((area, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-1.5 h-1.5 bg-infratel-red rounded-full mr-3"></div>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Regional Coverage
            </h2>
            
            <div className="space-y-4">
              {regions.map((region, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {region.name}
                    </h3>
                    <span className="text-2xl font-bold text-infratel-red">
                      {region.coverage}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`${region.color} h-3 rounded-full transition-all`}
                      style={{ width: region.coverage }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Interactive Coverage Map
            </h2>
            
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 text-center">
              <MapPin className="w-16 h-16 text-infratel-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Check Your Area
              </h3>
              <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                Enter your postal code or address to see detailed coverage information for your specific location.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter postal code or address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-infratel-red"
                  />
                  <button className="px-6 py-3 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                    Check
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Network Technology
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-purple-600">5G</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  5G Standalone
                </h3>
                <p className="text-gray-600 text-sm">
                  True 5G experience with ultra-low latency and speeds up to 1Gbps.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">4G+</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  4G LTE Advanced
                </h3>
                <p className="text-gray-600 text-sm">
                  Reliable fallback with speeds up to 300Mbps in areas without 5G.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Wifi className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  WiFi Calling
                </h3>
                <p className="text-gray-600 text-sm">
                  Make calls over WiFi when mobile signal is weak.
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
