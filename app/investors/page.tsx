import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TrendingUp, FileText, Calendar, Users } from 'lucide-react'

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Investor Relations
            </h1>
            <p className="text-xl text-white/90">
              Financial information and corporate governance for stakeholders.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="text-center py-8">
                <TrendingUp className="w-16 h-16 text-infratel-red mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Private Company</h3>
                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                  Infratel Communications Pte. Ltd. is a private limited company incorporated in Singapore. 
                  As a private company, we do not publish public financial reports.
                </p>
                <p className="text-gray-600">
                  For partnership or investment enquiries, please contact us directly.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-infratel-red to-red-600 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Interested in Partnership?</h3>
              <p className="text-white/90 mb-6">
                We're open to discussing partnership opportunities with like-minded businesses.
              </p>
              <a href="mailto:business@infratel.sg" className="inline-flex items-center px-6 py-3 bg-white text-infratel-red font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Contact Business Development
              </a>
            </div>

            <div className="mt-8 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Company Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Company Name</p>
                  <p className="text-gray-600">Infratel Communications Pte. Ltd.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">UEN</p>
                  <p className="text-gray-600">202532622H</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Registered Address</p>
                  <p className="text-gray-600">60 Paya Lebar Road, #11-53<br />Paya Lebar Square, Singapore 409051</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Incorporation Date</p>
                  <p className="text-gray-600">28 July 2025</p>
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
