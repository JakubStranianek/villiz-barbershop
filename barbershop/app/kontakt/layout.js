import Navbar from '../components/Navbar'
import Footer from '../components/FooterSection'

export const metadata = {
  title: 'Villiz barbershop | Kontakt',
  description: 'Kontaktuj Villiz Barbershop v Žiline Bôrik. Adresa, telefón a Instagram.',
}

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
