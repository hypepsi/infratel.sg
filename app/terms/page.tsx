import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FileText } from 'lucide-react'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-white/90">
              Last updated: 28 July 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg">
            <div className="prose max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using Infratel's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>

              <h2>2. Service Description</h2>
              <p>
                Infratel provides mobile telecommunications services including voice, SMS, data, and related services in Singapore.
              </p>

              <h2>3. Account Registration</h2>
              <p>To use our services, you must:</p>
              <ul>
                <li>Be at least 18 years old or have parental consent</li>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>

              <h2>4. Payment Terms</h2>
              <ul>
                <li>All prices are in Singapore Dollars (SGD) and include GST</li>
                <li>Payment is due monthly in advance for postpaid plans</li>
                <li>We reserve the right to suspend service for non-payment</li>
                <li>Late payment fees may apply</li>
              </ul>

              <h2>5. Acceptable Use Policy</h2>
              <p>You agree not to use our services for:</p>
              <ul>
                <li>Illegal activities or fraud</li>
                <li>Sending spam or unsolicited communications</li>
                <li>Network abuse or unauthorized access</li>
                <li>Any activity that disrupts our network</li>
              </ul>

              <h2>6. Service Limitations</h2>
              <p>
                While we strive for continuous service, we do not guarantee uninterrupted or error-free service. Network coverage and speeds may vary by location.
              </p>

              <h2>7. Fair Usage Policy</h2>
              <p>
                Unlimited plans are subject to fair usage policies. Excessive use may result in speed throttling during peak hours.
              </p>

              <h2>8. Termination</h2>
              <p>
                Either party may terminate service with 30 days notice. We may suspend or terminate service immediately for violations of these terms.
              </p>

              <h2>9. Limitation of Liability</h2>
              <p>
                Infratel shall not be liable for indirect, incidental, or consequential damages arising from service use or interruption.
              </p>

              <h2>10. Governing Law</h2>
              <p>
                These terms are governed by the laws of Singapore. Disputes shall be resolved in Singapore courts.
              </p>

              <h2>11. Contact Information</h2>
              <p>
                <strong>Infratel Communications Pte. Ltd.</strong><br />
                UEN: 202532622H<br />
                60 Paya Lebar Road, #11-53<br />
                Paya Lebar Square, Singapore 409051<br />
                Email: legal@infratel.sg<br />
                Phone: 1800-888-8888
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
