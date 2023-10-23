import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/FooterSection'

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
