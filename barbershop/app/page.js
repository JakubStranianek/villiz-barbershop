"use client"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About1 from './components/About1'
import Gallery from './components/Gallery'
import About2 from './components/About2'
import Team from './components/Team'
import PriceList from './components/PriceList'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/FooterSection'
import SplashScreen from './components/Splash'
import { useEffect, useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(true)

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 2000);
}) 

  return (
    <main className="">
      {loading && (
          <SplashScreen />
        )}
        <Navbar />
        <Hero />
        <About1 />
        <Gallery />
        <About2 />
        <Team />
        <PriceList />
        <Reviews />
        <Contact />
        <Footer />
    </main>
  )
}
