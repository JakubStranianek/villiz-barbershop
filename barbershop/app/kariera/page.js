"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  IconPhone,
  IconBrandInstagram,
  IconScissors,
  IconStar,
  IconUsers,
} from '@tabler/icons-react'

const perks = [
  {
    icon: IconScissors,
    title: 'Moderné vybavenie',
    description: 'Pracuj s profesionálnymi náradím a vybavením v štýlovom priestore.',
  },
  {
    icon: IconStar,
    title: 'Rozvoj a rast',
    description: 'Neustále zdokonaľovanie remesla, kurzy a mentorstvo od skúsených barberOV.',
  },
  {
    icon: IconUsers,
    title: 'Skvelý kolektív',
    description: 'Priateľská atmosféra a tím, ktorý ťa podporuje každý deň.',
  },
]

export default function Kariera() {
  return (
    <main style={{ background: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '64px' }}>
      {/* Hero with barber-wanted.jpg */}
      <section
        className="relative flex items-center justify-center"
        style={{ minHeight: '60vh' }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/barber-wanted.jpg"
            fill
            alt="Barber wanted – Villiz Barbershop"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            quality={85}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(rgba(26,26,24,0.8), rgba(26,26,24,0.55))',
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">— Kariéra</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-display mt-4"
            style={{
              fontSize: 'clamp(38px, 6vw, 68px)',
              fontWeight: 700,
              lineHeight: 1.08,
              color: 'var(--cream)',
              maxWidth: '640px',
              margin: '16px auto 0',
            }}
          >
            Hľadáš pozíciu<br />
            v tomto <span style={{ color: 'var(--gold)' }}>remesle</span>?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              marginTop: '20px',
              color: 'rgba(245,240,232,0.75)',
              fontWeight: 300,
              maxWidth: '420px',
              margin: '20px auto 0',
              lineHeight: 1.75,
              fontSize: '16px',
            }}
          >
            Neváhaj nás kontaktovať — telefonicky alebo cez Instagram.
            Dohodneme si stretnutie a prejednáme všetko. Tešíme sa na TEBA.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <Link href="tel:+421918778993" className="btn-primary">
              <IconPhone size={16} stroke={1.5} style={{ marginRight: '8px' }} />
              Zavolaj nám
            </Link>
            <Link
              href="https://www.instagram.com/villiz_barber/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <IconBrandInstagram size={16} stroke={1.5} style={{ marginRight: '8px' }} />
              Napíš na Instagram
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Separator */}
      <div className="section-separator" />

      {/* Perks section */}
      <section style={{ background: 'var(--bg-secondary)', paddingBlock: '88px' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="section-label">— Čo ponúkame</span>
          <h2
            className="font-display mt-4"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: 'var(--cream)',
              maxWidth: '480px',
              marginBottom: '40px',
            }}
          >
            Prečo pracovať<br />
            s Villiz Barbershop
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
                className="gold-card p-6"
              >
                <div
                  className="flex items-center justify-center mb-4"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '4px',
                    background: 'rgba(200,169,126,0.1)',
                    border: '0.5px solid rgba(200,169,126,0.25)',
                  }}
                >
                  <perk.icon size={20} style={{ color: 'var(--gold)' }} stroke={1.5} />
                </div>
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: 'var(--cream)',
                    marginBottom: '8px',
                  }}
                >
                  {perk.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--muted)',
                    lineHeight: 1.65,
                    fontWeight: 300,
                  }}
                >
                  {perk.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="section-separator" />

      {/* Contact CTA block */}
      <section style={{ background: 'var(--bg-primary)', paddingBlock: '88px' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="gold-card p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
            style={{ maxWidth: '800px' }}
          >
            <div>
              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(26px, 4vw, 42px)',
                  fontWeight: 700,
                  color: 'var(--cream)',
                  lineHeight: 1.1,
                }}
              >
                Máš záujem?<br />
                <span style={{ color: 'var(--gold)' }}>Ozvi sa.</span>
              </h3>
              <p
                style={{
                  marginTop: '12px',
                  color: 'var(--muted)',
                  fontWeight: 300,
                  maxWidth: '340px',
                  lineHeight: 1.65,
                }}
              >
                Stačí jeden hovor alebo správa. Dohodneme si osobné stretnutie čo najskôr.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link href="tel:+421918778993" className="btn-primary">
                <IconPhone size={16} stroke={1.5} style={{ marginRight: '8px' }} />
                0918 778 993
              </Link>
              <Link
                href="https://www.instagram.com/villiz_barber/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <IconBrandInstagram size={16} stroke={1.5} style={{ marginRight: '8px' }} />
                @villiz_barber
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
