import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle, Home, Calendar, Mail, Phone, ArrowRight } from 'lucide-react'

export default function BroadbandConfirmationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-2xl mx-auto">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 text-green-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Order Confirmed!
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Your broadband service order has been successfully placed.
            </p>
          </div>

          {/* Order Details Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
              What Happens Next?
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-infratel-red/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-infratel-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Confirmation Email</h3>
                  <p className="text-sm text-gray-600">
                    You'll receive an order confirmation email within the next few minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-infratel-red/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-infratel-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Installation Call</h3>
                  <p className="text-sm text-gray-600">
                    Our team will contact you within 1 business day to confirm your installation appointment.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-infratel-red/10 rounded-full flex items-center justify-center mr-4">
                  <Calendar className="w-5 h-5 text-infratel-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Installation Day</h3>
                  <p className="text-sm text-gray-600">
                    Our certified technician will arrive at your preferred time slot. Installation typically takes 1-2 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-infratel-red/10 rounded-full flex items-center justify-center mr-4">
                  <Home className="w-5 h-5 text-infratel-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Enjoy Fast Internet</h3>
                  <p className="text-sm text-gray-600">
                    Start experiencing superfast fiber broadband right away! Test speeds and enjoy unlimited data.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-8">
            <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Important Information
            </h3>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>• Please ensure someone aged 18+ is present during installation</li>
              <li>• Free installation includes router setup and testing</li>
              <li>• First month billing starts from your activation date</li>
              <li>• No contract · Cancel anytime with 30 days notice</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/"
              className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors touch-manipulation"
            >
              Back to Home
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/help"
              className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors touch-manipulation"
            >
              Help Center
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center text-sm text-gray-600">
            <p className="mb-2">Need assistance? We're here to help!</p>
            <p className="font-semibold text-gray-900">
              📞 Customer Service: 1800-INFRATEL (1800-463-7283)
            </p>
            <p className="text-xs mt-2">Available 24/7</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
