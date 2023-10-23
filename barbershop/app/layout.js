import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Villiz barbershop | Barbershop Zilina',
  description: 'Barbershop nachádzajúci sa v mestskej časti Žilina Bôrik na ulici Alexandra Rudnaya 45. Príď si oddýchnuť a zresetovať po náročnom dni do nášho holičstva Villiz Barbershop. Ponúkame ti kvalitný pánsky strih, úpravu brady a mnoho ďalšieho.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
