import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Smartphone, Tablet, Watch } from 'lucide-react'

export default function DevicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Smartphone className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Latest Devices
            </h1>
            <p className="text-xl text-white/90">
              Get the newest smartphones, tablets, and wearables with our flexible plans.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Popular Devices
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Smartphone className="w-16 h-16 text-infratel-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Smartphones</h3>
                <p className="text-gray-600 mb-4">Latest iPhone and Android devices</p>
                <button className="px-6 py-2 bg-infratel-red text-white rounded-lg hover:bg-red-700">
                  Browse Phones
                </button>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Tablet className="w-16 h-16 text-infratel-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Tablets</h3>
                <p className="text-gray-600 mb-4">iPads and Android tablets</p>
                <button className="px-6 py-2 bg-infratel-red text-white rounded-lg hover:bg-red-700">
                  Browse Tablets
                </button>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Watch className="w-16 h-16 text-infratel-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Wearables</h3>
                <p className="text-gray-600 mb-4">Smartwatches and accessories</p>
                <button className="px-6 py-2 bg-infratel-red text-white rounded-lg hover:bg-red-700">
                  Browse Wearables
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
