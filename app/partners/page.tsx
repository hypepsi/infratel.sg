import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Award, TrendingUp } from 'lucide-react'

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Partner Program
            </h1>
            <p className="text-xl text-white/90">
              Join our growing network of authorized retailers and resellers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Partner Benefits
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <Award className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Attractive Commissions</h3>
                <p className="text-gray-600">Competitive commission structure with performance bonuses</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <TrendingUp className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Marketing Support</h3>
                <p className="text-gray-600">Co-marketing programs and promotional materials</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <Users className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
                <p className="text-gray-600">Partner account manager and technical assistance</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Become a Partner</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-infratel-red"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-infratel-red"
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder="Tell us about your business"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-infratel-red"
                ></textarea>
                <button className="w-full py-3 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
