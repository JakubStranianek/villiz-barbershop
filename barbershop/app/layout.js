import { Fraunces, Nunito } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  weight: ['700'],
  variable: '--font-fraunces',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata = {
  title: 'Villiz barbershop | Barbershop Zilina',
  description: 'Barbershop nachádzajúci sa v mestskej časti Žilina Bôrik na ulici Alexandra Rudnaya 45. Príď si oddýchnuť a zresetovať po náročnom dni do nášho holičstva Villiz Barbershop. Ponúkame ti kvalitný pánsky strih, úpravu brady a mnoho ďalšieho.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <body className={`${nunito.variable} ${fraunces.variable} surface-concrete`}>
        <div className="concrete-wall" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
