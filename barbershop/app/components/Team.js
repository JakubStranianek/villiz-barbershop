"use client"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IconBrandInstagram, IconPhone } from '@tabler/icons-react'

const people = [
  {
    name: 'Viliam Stranianek',
    role: 'Villiz Barber',
    imageUrl: '/images/team1.JPG',
    instaUrl: 'https://www.instagram.com/villiz_barber',
    phoneNumber: '+421918778993',
  },
  {
    name: 'Barber wanted',
    role: 'Chceš to byť práve ty?',
    imageUrl: '/images/barber-wanted.jpg',
    instaUrl: 'https://www.instagram.com/villiz_barber',
    phoneNumber: '+421918778993',
  },
]

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="team"
      style={{ background: 'var(--bg-secondary)', paddingBlock: '88px' }}
    >
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">— Tím</span>
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
            maxWidth: '500px',
            marginBottom: '8px',
          }}
        >
          Náš Team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.14 }}
          style={{
            color: 'var(--muted)',
            fontWeight: 300,
            maxWidth: '480px',
            lineHeight: 1.7,
            marginBottom: '40px',
          }}
        >
          Momentálne sa o teba postará Villiz Barber, ktorý zároveň aj náš barbershop
          celý zastrešuje. Tešíme sa na teba.
        </motion.p>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
          {people.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="gold-card overflow-hidden"
            >
              {/* Photo area */}
              <div
                className="relative w-full overflow-hidden"
                style={{ height: '220px' }}
              >
                <Image
                  src={person.imageUrl}
                  alt={person.name}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {/* Dark gradient overlay at bottom */}
                <div
                  className="absolute inset-x-0 bottom-0"
                  style={{
                    height: '80px',
                    background: 'linear-gradient(to top, rgba(26,26,24,0.9) 0%, transparent 100%)',
                  }}
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3
                  className="font-display"
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'var(--cream)',
                    lineHeight: 1.1,
                  }}
                >
                  {person.name}
                </h3>
                <p
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    fontWeight: 500,
                    marginTop: '4px',
                  }}
                >
                  {person.role}
                </p>

                {/* Social links */}
                <div className="flex gap-4 mt-4">
                  <Link
                    href={person.instaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                  >
                    <IconBrandInstagram size={20} stroke={1.5} />
                  </Link>
                  <Link
                    href={`tel:${person.phoneNumber}`}
                    aria-label="Telefón"
                    style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                  >
                    <IconPhone size={20} stroke={1.5} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
