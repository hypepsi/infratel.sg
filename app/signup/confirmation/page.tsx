import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle, Mail, Smartphone, Clock, Download } from 'lucide-react'

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Success Message */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Order Confirmed!
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Thank you for choosing Infratel. Your mobile plan is being activated.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <p className="font-semibold text-blue-900 mb-2">Order Reference</p>
                <p className="text-2xl font-bold text-blue-600">#IF{Math.floor(Math.random() * 1000000)}</p>
              </div>

              {/* What's Next */}
              <div className="text-left mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What happens next?</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-infratel-red text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center mb-2">
                        <Mail className="w-5 h-5 text-infratel-red mr-2" />
                        <h3 className="font-semibold text-lg">Email Confirmation</h3>
                      </div>
                      <p className="text-gray-600">
                        You'll receive an order confirmation email within 5 minutes. Check your inbox!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-infratel-red text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center mb-2">
                        <Smartphone className="w-5 h-5 text-infratel-red mr-2" />
                        <h3 className="font-semibold text-lg">SIM Card Delivery</h3>
                      </div>
                      <p className="text-gray-600">
                        Your SIM card will be delivered to your address in 2-3 business days (or next day if you chose express delivery).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-infratel-red text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center mb-2">
                        <Clock className="w-5 h-5 text-infratel-red mr-2" />
                        <h3 className="font-semibold text-lg">Activation</h3>
                      </div>
                      <p className="text-gray-600">
                        Once you receive your SIM, follow the SMS instructions to activate. Your number will be active within minutes!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-infratel-red text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center mb-2">
                        <Download className="w-5 h-5 text-infratel-red mr-2" />
                        <h3 className="font-semibold text-lg">Download Our App</h3>
                      </div>
                      <p className="text-gray-600">
                        Download the My Infratel app to manage your account, check data usage, and access exclusive rewards.
                      </p>
                      <div className="flex gap-4 mt-3">
                        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800">
                          App Store
                        </button>
                        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800">
                          Google Play
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/"
                  className="px-8 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Back to Home
                </a>
                <a
                  href="/help"
                  className="px-8 py-3 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  Need Help?
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-600 mb-2">Questions about your order?</p>
                <p className="font-semibold text-gray-900">
                  Call us at <a href="tel:18008888888" className="text-infratel-red hover:underline">1800-888-8888</a>
                </p>
                <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
