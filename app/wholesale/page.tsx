import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Building2, Network, Users } from 'lucide-react'

export default function WholesalePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Wholesale Services
            </h1>
            <p className="text-xl text-white/90">
              Partner with Infratel for wholesale mobile and data services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <Network className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Network Access</h3>
                <p className="text-gray-600">Wholesale access to our 5G network infrastructure</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <Building2 className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">MVNO Solutions</h3>
                <p className="text-gray-600">Full or light MVNO packages available</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <Users className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">White Label</h3>
                <p className="text-gray-600">Launch your own branded mobile service</p>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Interested in Partnership?</h3>
              <p className="text-gray-600 mb-6">
                Contact our wholesale team to discuss opportunities
              </p>
              <button className="px-8 py-3 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
