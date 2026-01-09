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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <p className="text-3xl font-bold text-infratel-red mb-2">500K+</p>
                <p className="text-gray-600">Active Subscribers</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <p className="text-3xl font-bold text-infratel-red mb-2">99%</p>
                <p className="text-gray-600">Network Coverage</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <p className="text-3xl font-bold text-infratel-red mb-2">500+</p>
                <p className="text-gray-600">5G Base Stations</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <p className="text-3xl font-bold text-infratel-red mb-2">2025</p>
                <p className="text-gray-600">Established</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <FileText className="w-12 h-12 text-infratel-red mb-4" />
                <h3 className="text-2xl font-bold mb-4">Financial Reports</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-infratel-red hover:underline">Annual Report 2025</a>
                    <p className="text-sm text-gray-600">Published: Coming Soon</p>
                  </li>
                  <li>
                    <a href="#" className="text-infratel-red hover:underline">Q4 2025 Results</a>
                    <p className="text-sm text-gray-600">Published: Coming Soon</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Calendar className="w-12 h-12 text-infratel-red mb-4" />
                <h3 className="text-2xl font-bold mb-4">Corporate Calendar</h3>
                <ul className="space-y-3">
                  <li>
                    <p className="font-semibold">AGM 2026</p>
                    <p className="text-sm text-gray-600">Date: To be announced</p>
                  </li>
                  <li>
                    <p className="font-semibold">Q1 2026 Results</p>
                    <p className="text-sm text-gray-600">Date: To be announced</p>
                  </li>
                </ul>
              </div>
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
