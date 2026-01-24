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
      
      {/* Hero with Map - Combined Section */}
      <section className="relative">
        {/* Map Background */}
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.05676058498!2d103.77766573281249!3d1.3139961000000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2ssg!4v1706000000000!5m2!1sen!2ssg"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(30%) brightness(0.95)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white mb-6">
                <Signal className="w-5 h-5 mr-2" />
                <span className="font-semibold">99% Island-Wide Coverage</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                5G Network Coverage
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Experience seamless connectivity across the entire island. Our network reaches every corner of Singapore.
              </p>
              
              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20">
                  <p className="text-3xl font-bold text-white mb-1">99%</p>
                  <p className="text-white/80 text-sm">5G Coverage</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20">
                  <p className="text-3xl font-bold text-white mb-1">500+</p>
                  <p className="text-white/80 text-sm">5G Sites</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20">
                  <p className="text-3xl font-bold text-white mb-1">100%</p>
                  <p className="text-white/80 text-sm">MRT Coverage</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20">
                  <p className="text-3xl font-bold text-white mb-1">95%</p>
                  <p className="text-white/80 text-sm">Indoor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
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
