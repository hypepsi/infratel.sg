import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Newspaper } from 'lucide-react'

export default function NewsroomPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Newspaper className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Newsroom
            </h1>
            <p className="text-xl text-white/90">
              Latest news, press releases, and company updates.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <p className="text-sm text-gray-500 mb-2">28 July 2025</p>
                <h3 className="text-2xl font-bold mb-3">Infratel Launches Singapore's Fastest 5G Network</h3>
                <p className="text-gray-600 mb-4">
                  Infratel Communications officially launches its 5G Standalone network, offering speeds up to 1Gbps across 99% of Singapore...
                </p>
                <a href="#" className="text-infratel-red font-semibold hover:underline">
                  Read More →
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <p className="text-sm text-gray-500 mb-2">15 July 2025</p>
                <h3 className="text-2xl font-bold mb-3">Company Reaches 500,000 Subscribers Milestone</h3>
                <p className="text-gray-600 mb-4">
                  Just months after launch, Infratel celebrates half a million happy customers across Singapore...
                </p>
                <a href="#" className="text-infratel-red font-semibold hover:underline">
                  Read More →
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <p className="text-sm text-gray-500 mb-2">01 July 2025</p>
                <h3 className="text-2xl font-bold mb-3">Infratel Wins IMDA Digital Excellence Award</h3>
                <p className="text-gray-600 mb-4">
                  Recognized for innovation in telecommunications and customer service excellence...
                </p>
                <a href="#" className="text-infratel-red font-semibold hover:underline">
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
