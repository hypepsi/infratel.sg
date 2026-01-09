import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Cookie } from 'lucide-react'

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-br from-infratel-red to-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Cookie className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Cookie Policy
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
              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>

              <h2>Types of Cookies We Use</h2>
              
              <h3>1. Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
              </p>

              <h3>2. Performance Cookies</h3>
              <p>
                These cookies collect information about how visitors use our website, such as which pages are visited most often. This data helps us improve our website.
              </p>

              <h3>3. Functionality Cookies</h3>
              <p>
                These cookies allow our website to remember your choices (such as language preference) and provide enhanced features.
              </p>

              <h3>4. Targeting Cookies</h3>
              <p>
                These cookies are used to deliver advertisements relevant to you and your interests. They also limit the number of times you see an advertisement.
              </p>

              <h2>Managing Cookies</h2>
              <p>
                You can control and manage cookies in your browser settings. However, disabling cookies may affect the functionality of our website.
              </p>

              <h3>Browser Settings</h3>
              <ul>
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                <li><strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
              </ul>

              <h2>Third-Party Cookies</h2>
              <p>
                We may use third-party services (like Google Analytics) that also use cookies. These services have their own privacy policies.
              </p>

              <h2>Your Consent</h2>
              <p>
                By using our website, you consent to our use of cookies in accordance with this Cookie Policy. You can withdraw consent at any time by adjusting your browser settings.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact us at:<br />
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
