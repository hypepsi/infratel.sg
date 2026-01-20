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
              Help us build a better mobile experience for Singaporeans.
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
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-gray-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">No Open Positions</h4>
                <p className="text-gray-600 mb-6">
                  We're not actively hiring at the moment, but we're always interested in hearing from talented individuals.
                </p>
                <a 
                  href="mailto:careers@infratel.sg" 
                  className="inline-flex items-center px-6 py-3 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  Send Your Resume
                </a>
                <p className="text-sm text-gray-500 mt-3">
                  Email us at careers@infratel.sg
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
