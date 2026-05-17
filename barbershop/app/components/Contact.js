"use client"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import {
  IconMapPin,
  IconPhone,
  IconBrandInstagram,
  IconExternalLink,
} from '@tabler/icons-react'

const contacts = [
  {
    icon: IconMapPin,
    label: 'Adresa',
    lines: ['Alexandra Rudnaya 45', '010 01 Žilina', 'Villiz Barbershop'],
    href: 'https://www.google.com/maps/dir//villizbarbershop/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47145fc2a67a2e77:0x751dea2c9af113b5?sa=X&ved=2ahUKEwiyj8u62uX8AhUWgv0HHWaADtQQ9Rd6BAgZEAU',
    cta: 'Navigovať',
  },
  {
    icon: IconPhone,
    label: 'Telefón',
    lines: ['0918 778 993'],
    href: 'tel:+421918778993',
    cta: null,
  },
  {
    icon: IconBrandInstagram,
    label: 'Instagram',
    lines: ['@villiz_barber'],
    href: 'https://www.instagram.com/villiz_barber',
    cta: 'Sledovať',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="kontakt"
      style={{ background: 'var(--bg-secondary)', paddingBlock: '88px' }}
    >
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">— Kontakt</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display mt-4"
          style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: 'var(--cream)',
            maxWidth: '460px',
            marginBottom: '40px',
          }}
        >
          Nájdi nás a objednaj sa
        </motion.h2>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
          {contacts.map((contact, i) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
              className="gold-card p-6"
            >
              {/* Icon + label */}
              <div className="flex items-center gap-2 mb-4">
                <contact.icon size={18} style={{ color: 'var(--gold)' }} stroke={1.5} />
                <span
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    fontWeight: 500,
                  }}
                >                 
                  {contact.label}
                </span>
              </div>

              {/* Lines */}
              <div className="mb-4">
                {contact.lines.map((line, j) => (
                  <p
                    key={j}
                    style={{
                      fontSize: '14px',
                      color: 'var(--cream)',
                      fontWeight: j === 0 ? 400 : 300,
                      lineHeight: 1.6,
                    }}
                  >
                     <Link href={contact.href} target="_blank" rel="noopener noreferrer" className='hover:text-gold transition-colors duration-200'>
                    {line}
                    </Link>
                  </p>
                ))}
              </div>

              {/* CTA link */}
              {contact.cta && (
                <Link
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors duration-200"
                  style={{ fontSize: '12px', color: 'var(--gold)', fontWeight: 400, letterSpacing: '0.05em' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                >
                  {contact.cta}
                  <IconExternalLink size={12} stroke={1.5} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
