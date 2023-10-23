import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About1 from './components/About1'
import Gallery from './components/Gallery'
import About2 from './components/About2'
import Team from './Team'
import PriceList from './components/PriceList'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/FooterSection'

export default function Home() {
  return (
    <main className="">
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
