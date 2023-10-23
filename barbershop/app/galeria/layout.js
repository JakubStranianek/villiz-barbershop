import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/FooterSection'

export const metadata = {
  title: 'Villiz barbershop | Galeria',
  description: 'Ožite svoje zmysly našou galériou. Zábery z našich barbarských zážitkov vás vtiahnu do sveta štýlu a elegancie, ktorý ponúkame.',
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
