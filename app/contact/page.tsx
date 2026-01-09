import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Phone, Mail, MessageCircle, MapPin, Clock, HelpCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90">
              Our customer service team is here to help 24/7. Reach out through your preferred channel.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Phone */}
              <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-infratel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-infratel-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600 mb-4">
                  Speak to our friendly team
                </p>
                <a href="tel:1800-888-8888" className="text-2xl font-bold text-infratel-red hover:text-red-700">
                  1800-888-8888
                </a>
                <p className="text-sm text-gray-500 mt-2">Toll-free from Singapore</p>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  WhatsApp
                </h3>
                <p className="text-gray-600 mb-4">
                  Chat with us instantly
                </p>
                <a href="https://wa.me/6588888888" className="text-2xl font-bold text-green-600 hover:text-green-700">
                  +65 8888 8888
                </a>
                <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Email
                </h3>
                <p className="text-gray-600 mb-4">
                  Send us a message
                </p>
                <a href="mailto:hello@infratel.sg" className="text-lg font-bold text-blue-600 hover:text-blue-700">
                  hello@infratel.sg
                </a>
                <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-infratel-red mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Operating Hours
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Customer Service Hotline</p>
                  <p className="text-gray-700">24/7 - Every day</p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Email Support</p>
                  <p className="text-gray-700">24/7 - Replies within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Send Us a Message
            </h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-infratel-red"
                    placeholder="John Tan"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-infratel-red"
                    placeholder="+65 9123 4567"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-infratel-red"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-infratel-red"
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="billing">Billing & Payments</option>
                  <option value="technical">Technical Support</option>
                  <option value="plans">Plans & Pricing</option>
                  <option value="roaming">Roaming Services</option>
                  <option value="porting">Number Porting</option>
                  <option value="other">Other Enquiries</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-infratel-red"
                  placeholder="Tell us how we can help..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                Send Message
              </button>
              
              <p className="text-sm text-gray-600 text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Store Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Visit Our Stores
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <MapPin className="w-8 h-8 text-infratel-red mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Orchard Gateway
                </h3>
                <p className="text-gray-600 mb-4">
                  277 Orchard Road<br />
                  #01-12/13<br />
                  Singapore 238858
                </p>
                <p className="text-sm text-gray-700 mb-1">
                  <strong>Hours:</strong> 10am - 10pm daily
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Tel:</strong> 6123 4567
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <MapPin className="w-8 h-8 text-infratel-red mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  VivoCity
                </h3>
                <p className="text-gray-600 mb-4">
                  1 HarbourFront Walk<br />
                  #02-156<br />
                  Singapore 098585
                </p>
                <p className="text-sm text-gray-700 mb-1">
                  <strong>Hours:</strong> 10am - 10pm daily
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Tel:</strong> 6234 5678
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <MapPin className="w-8 h-8 text-infratel-red mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Tampines Mall
                </h3>
                <p className="text-gray-600 mb-4">
                  4 Tampines Central 5<br />
                  #03-22<br />
                  Singapore 529510
                </p>
                <p className="text-sm text-gray-700 mb-1">
                  <strong>Hours:</strong> 10am - 10pm daily
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Tel:</strong> 6345 6789
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <HelpCircle className="w-16 h-16 text-infratel-red mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Looking for Quick Answers?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Check out our FAQ page for instant solutions to common questions.
            </p>
            <a
              href="/faq"
              className="inline-block px-8 py-4 bg-infratel-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Visit FAQ Page
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
