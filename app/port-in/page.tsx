import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowRight, CheckCircle, Clock } from 'lucide-react'

export default function PortInPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ArrowRight className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Keep Your Number
            </h1>
            <p className="text-xl text-white/90">
              Port your existing mobile number to Infratel in just 2-4 hours. Free and hassle-free.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Simple 3-Step Process
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-infratel-red text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-bold mb-2">Choose Plan</h3>
                <p className="text-gray-600 text-sm">Select your Infratel plan</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-infratel-red text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-bold mb-2">Submit Details</h3>
                <p className="text-gray-600 text-sm">Provide your current number and NRIC</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-infratel-red text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-bold mb-2">Wait 2-4 Hours</h3>
                <p className="text-gray-600 text-sm">We'll handle everything</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6">What You Need</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span>Your current mobile number</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span>NRIC or Passport number</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span>Name as registered with current telco</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span>Ensure your current line has no outstanding bills</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Processing Time</h4>
                  <p className="text-blue-800">Port-in requests submitted before 5pm will be completed the same day. After 5pm will be processed the next business day.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="/plans" className="inline-block px-8 py-4 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                Start Port-In Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
