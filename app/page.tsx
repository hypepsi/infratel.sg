import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PricingGrid from '@/components/PricingGrid'
import Features from '@/components/Features'
import RoamingBanner from '@/components/RoamingBanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PricingGrid />
      <Features />
      <RoamingBanner />
      <Footer />
    </main>
  )
}
