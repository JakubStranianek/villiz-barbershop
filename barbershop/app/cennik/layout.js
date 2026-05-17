import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/FooterSection'

export const metadata = {
  title: 'Villiz barbershop | Cenník',
  description: 'Cenník služieb Villiz Barbershop v Žiline Bôrik. Pánsky strih, úprava brady a ďalšie služby.',
}

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Contact />
      <Footer />
    </div>
  )
}
