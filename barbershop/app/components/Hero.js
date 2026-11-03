"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col pt-16"
      style={{ '--cream': '#f4f2ee', '--gold': '#d7e4c8', '--muted': 'rgba(244,242,238,0.8)' }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/prevadzka/villiz-barbershop-hlavnaFotka.jpg"
          fill
          alt=""
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          quality={85}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.32) 46%, rgba(10,10,10,0.58) 100%)',
          }}
        />
      </div>

      {/* Main content */}
      <div
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center"
        style={{ paddingTop: '80px', paddingBottom: '60px' }}
      >
        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          className="font-display"
          style={{
            fontSize: 'clamp(44px, 7vw, 72px)',
            fontWeight: 700,
            lineHeight: 1.08,
            color: 'var(--cream)',
            maxWidth: '740px',
            letterSpacing: '-0.01em',
          }}
        >
          Jeden barber, jeden klient{' '}
          <span style={{ color: 'var(--gold)' }}>a čas</span>
          {' '}venovaný iba tebe.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          style={{
            maxWidth: '380px',
            marginTop: '24px',
            color: 'rgba(245,240,232,0.75)',
            fontWeight: 500,
            lineHeight: 1.75,
            fontSize: '16px',
          }}
        >
          Precízny strih, upravená brada a chvíľa pokoja. Vo Villiz Barbershop sa venujem iba tebe — v súkromí, bez zhonu a s dôrazom na každý detail.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Link href="/#kontakt" className="btn-primary">
            Rezervovať termín
          </Link>
          <Link href="/#priceList" className="btn-ghost">
            Pozrieť služby
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
