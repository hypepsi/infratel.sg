import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Leaf, Recycle, Sun, Droplets } from 'lucide-react'

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Leaf className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Sustainability
            </h1>
            <p className="text-xl text-white/90">
              Building a greener future for Singapore's telecommunications industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Environmental Commitments
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Sun className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Renewable Energy</h3>
                <p className="text-gray-600 mb-4">
                  50% of our network infrastructure powered by solar energy by 2026
                </p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: '35%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">35% achieved</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Recycle className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">E-Waste Recycling</h3>
                <p className="text-gray-600 mb-4">
                  Free device recycling program at all stores
                </p>
                <p className="text-2xl font-bold text-green-600">10,000+</p>
                <p className="text-sm text-gray-600">Devices recycled</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Droplets className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Carbon Neutral</h3>
                <p className="text-gray-600 mb-4">
                  Committed to carbon neutrality by 2030
                </p>
                <p className="text-2xl font-bold text-green-600">-25%</p>
                <p className="text-sm text-gray-600">Carbon reduction since 2025</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Leaf className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Green Initiatives</h3>
                <p className="text-gray-600 mb-4">
                  Paperless billing and digital-first operations
                </p>
                <p className="text-2xl font-bold text-green-600">95%</p>
                <p className="text-sm text-gray-600">Paperless customer base</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                Join Our Green Movement
              </h3>
              <p className="text-green-800 mb-6">
                Every Infratel customer contributes to a sustainable future. Switch to paperless billing and recycle your old devices with us.
              </p>
              <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
