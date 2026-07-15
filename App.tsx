import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import About from "@/components/About"
import Categories from "@/components/Categories"
import Products from "@/components/Products"
import WhyUs from "@/components/WhyUs"
import Gallery from "@/components/Gallery"
import VideoSection from "@/components/VideoSection"
import Testimonials from "@/components/Testimonials"
import OrderSteps from "@/components/OrderSteps"
import FAQ from "@/components/FAQ"
import CTA from "@/components/CTA"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import FloatingButtons from "@/components/FloatingButtons"

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Categories />
      <Products />
      <WhyUs />
      <Gallery />
      <VideoSection />
      <Testimonials />
      <OrderSteps />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  )
}
