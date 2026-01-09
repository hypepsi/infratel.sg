import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MapPin, Clock, Phone } from 'lucide-react'

export default function StoresPage() {
  const stores = [
    {
      name: 'Paya Lebar Square',
      address: '60 Paya Lebar Road, #11-53',
      postal: 'Singapore 409051',
      hours: '10:00 AM - 10:00 PM Daily',
      phone: '6123 4567',
      isHQ: true
    },
    {
      name: 'Orchard Gateway',
      address: '277 Orchard Road, #01-12/13',
      postal: 'Singapore 238858',
      hours: '10:00 AM - 10:00 PM Daily',
      phone: '6123 4568'
    },
    {
      name: 'VivoCity',
      address: '1 HarbourFront Walk, #02-156',
      postal: 'Singapore 098585',
      hours: '10:00 AM - 10:00 PM Daily',
      phone: '6234 5678'
    },
    {
      name: 'Tampines Mall',
      address: '4 Tampines Central 5, #03-22',
      postal: 'Singapore 529510',
      hours: '10:00 AM - 10:00 PM Daily',
      phone: '6345 6789'
    },
    {
      name: 'Jurong Point',
      address: '1 Jurong West Central 2, #02-35',
      postal: 'Singapore 648886',
      hours: '10:00 AM - 10:00 PM Daily',
      phone: '6456 7890'
    },
    {
      name: 'Bugis Junction',
      address: '200 Victoria Street, #01-48',
      postal: 'Singapore 188021',
      hours: '10:00 AM - 10:00 PM Daily',
      phone: '6567 8901'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Our Stores
            </h1>
            <p className="text-xl text-white/90">
              Visit us at any of our convenient locations across Singapore.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stores.map((store, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  {store.isHQ && (
                    <span className="inline-block bg-infratel-red text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      Headquarters
                    </span>
                  )}
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {store.name}
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-infratel-red mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-700">{store.address}</p>
                        <p className="text-gray-600">{store.postal}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-infratel-red mr-2 flex-shrink-0" />
                      <p className="text-gray-700">{store.hours}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-infratel-red mr-2 flex-shrink-0" />
                      <a href={`tel:${store.phone}`} className="text-infratel-red font-semibold hover:underline">
                        {store.phone}
                      </a>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 py-2 bg-gray-100 text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                    Get Directions
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-blue-900 mb-2">Walk-in Services</h3>
              <p className="text-blue-800">
                New activations • SIM replacement • Bill payments • Device purchases • Technical support
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
