import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Shield } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Privacy Policy
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
              <h2>1. Introduction</h2>
              <p>
                Infratel Communications Pte. Ltd. (UEN: 202532622H) ("Infratel", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>

              <h2>2. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul>
                <li>Personal identification information (Name, NRIC, date of birth, address)</li>
                <li>Contact information (Email address, phone number)</li>
                <li>Account information (Username, password)</li>
                <li>Payment information (Credit card details, billing address)</li>
                <li>Usage data (Call records, data usage, location information)</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and maintain our telecommunications services</li>
                <li>Process your transactions and manage your account</li>
                <li>Send you service-related communications</li>
                <li>Improve our services and develop new features</li>
                <li>Comply with legal obligations and regulations</li>
                <li>Prevent fraud and ensure network security</li>
              </ul>

              <h2>4. Information Sharing and Disclosure</h2>
              <p>
                We do not sell your personal information. We may share your information with:
              </p>
              <ul>
                <li>Service providers who assist in our operations</li>
                <li>Law enforcement when required by law</li>
                <li>Other parties with your consent</li>
              </ul>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>6. Your Rights</h2>
              <p>Under the Personal Data Protection Act (PDPA), you have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Withdraw consent for data processing</li>
                <li>Request deletion of your data</li>
              </ul>

              <h2>7. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations, typically for 7 years after account closure.
              </p>

              <h2>8. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                <strong>Infratel Communications Pte. Ltd.</strong><br />
                60 Paya Lebar Road, #11-53<br />
                Paya Lebar Square, Singapore 409051<br />
                Email: privacy@infratel.sg<br />
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
