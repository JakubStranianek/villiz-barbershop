import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Villiz barbershop | Barbershop Zilina',
  description: 'Barbershop nachádzajúci sa v mestskej časti Žilina Bôrik na ulici Alexandra Rudnaya 45. Príď si oddýchnuť a zresetovať po náročnom dni do nášho holičstva Villiz Barbershop. Ponúkame ti kvalitný pánsky strih, úpravu brady a mnoho ďalšieho.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <body className={`${dmSans.variable} ${cormorant.variable}`}>{children}</body>
    </html>
  )
}
