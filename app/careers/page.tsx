import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Briefcase, Heart, TrendingUp, Users } from 'lucide-react'

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Briefcase className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-white/90">
              Build the future of connectivity with Singapore's fastest-growing telco.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Work at Infratel?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <Heart className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Great Culture</h3>
                <p className="text-gray-600">Collaborative environment with work-life balance</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <TrendingUp className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Career Growth</h3>
                <p className="text-gray-600">Training programs and advancement opportunities</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <Users className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Diverse Team</h3>
                <p className="text-gray-600">Inclusive workplace celebrating diversity</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6">Open Positions</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-semibold text-lg mb-2">Network Engineer</h4>
                  <p className="text-gray-600 mb-2">Engineering · Full-time · Singapore</p>
                  <button className="px-4 py-2 bg-infratel-red text-white rounded-lg hover:bg-red-700">
                    Apply Now
                  </button>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold text-lg mb-2">Customer Service Representative</h4>
                  <p className="text-gray-600 mb-2">Customer Support · Full-time · Singapore</p>
                  <button className="px-4 py-2 bg-infratel-red text-white rounded-lg hover:bg-red-700">
                    Apply Now
                  </button>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Marketing Manager</h4>
                  <p className="text-gray-600 mb-2">Marketing · Full-time · Singapore</p>
                  <button className="px-4 py-2 bg-infratel-red text-white rounded-lg hover:bg-red-700">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
