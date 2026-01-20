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
              Use your existing device or get a new one from our recommended partners.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
              <div className="w-20 h-20 bg-infratel-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-10 h-10 text-infratel-red" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Bring Your Own Device
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Use any unlocked 5G-compatible device with Infratel. We support all major smartphone brands including iPhone and Samsung.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Compatible Devices Include:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Apple</p>
                    <p>iPhone 11 and newer</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Samsung</p>
                    <p>Galaxy S20 and newer</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Google</p>
                    <p>Pixel 4 and newer</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Others</p>
                    <p>Any 5G device</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                Need a new device? We recommend purchasing from authorized retailers:
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://www.apple.com/sg" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                  Apple Store
                </a>
                <a href="https://www.samsung.com/sg" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                  Samsung
                </a>
                <a href="https://www.lazada.sg" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                  Lazada
                </a>
                <a href="https://shopee.sg" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                  Shopee
                </a>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-infratel-red to-red-600 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
              <p className="text-white/90 mb-6">Choose a plan and we'll deliver your SIM card for free.</p>
              <a href="/plans" className="inline-block px-8 py-3 bg-white text-infratel-red font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                View Mobile Plans
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
