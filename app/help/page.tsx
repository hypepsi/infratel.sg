import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { HelpCircle, Book, MessageCircle, Phone } from 'lucide-react'

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Help Center
            </h1>
            <p className="text-xl text-white/90">
              Find answers to common questions and get support when you need it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <Book className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">User Guides</h3>
                <p className="text-gray-600 mb-4">Step-by-step tutorials</p>
                <a href="#guides" className="text-infratel-red font-semibold hover:underline">
                  Read Guides →
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <MessageCircle className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Chat with support team</p>
                <a href="/contact" className="text-infratel-red font-semibold hover:underline">
                  Start Chat →
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <Phone className="w-12 h-12 text-infratel-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">24/7 hotline support</p>
                <a href="tel:18008888888" className="text-infratel-red font-semibold hover:underline">
                  1800-888-8888 →
                </a>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Popular Topics
            </h2>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-2">How do I activate my SIM card?</h3>
                  <p className="text-gray-600">Insert your SIM card and follow the SMS instructions...</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-2">How to check my data usage?</h3>
                  <p className="text-gray-600">Download the My Infratel app or dial *100#...</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-2">How do I port my number?</h3>
                  <p className="text-gray-600">Visit our port-in page and submit your request online...</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">What if I lose my phone?</h3>
                  <p className="text-gray-600">Call our hotline immediately to suspend your line...</p>
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
