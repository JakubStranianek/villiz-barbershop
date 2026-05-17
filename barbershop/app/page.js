"use client"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About1 from './components/About1'
import About2 from './components/About2'
import Team from './components/Team'
import PriceList from './components/PriceList'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/FooterSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About1 />
      <About2 />
      <PriceList />
      <Team />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}
