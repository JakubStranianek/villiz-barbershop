import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/FooterSection'

export const metadata = {
  title: 'Villiz barbershop | Kariera',
  description: 'Príležitosť na vytvorenie svojej kariéry v svete barbarského umenia. Objavte svoj potenciál v našom barbershope a vytvorte si cestu k úspechu v oblasti krásy a štýlu.',
}

export default function Layout({children}) {
  return (
    <div>
        <Navbar />
        {children}
        <Contact />
        <Footer />
    </div>
  )
}
