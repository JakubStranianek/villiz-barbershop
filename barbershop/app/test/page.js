"use client"

import { About } from "../newComponents/About"
import { Socials } from "../newComponents/Socials"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
}) 

export default function Home() {
  return (
    <main className={`${poppins.variable} bg-gray-50`}>
      <About />
      <Socials />
    </main>
  )
}
