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
    imageUrl: '/villiz-barbershop-barber1.PNG',
    instaUrl: 'https://www.instagram.com/villiz_barber',
    phoneNumber: '+421918778993',
  }
]

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="team"
      className="surface-slats"
      style={{ paddingBlock: '88px' }}
    >
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(340px,480px)] lg:items-center lg:gap-24">
        <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display"
          style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: 'var(--cream)',
            maxWidth: '500px',
            marginBottom: '8px',
          }}
        >
          TVOJ BARBER
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.14 }}
          style={{
            color: 'var(--muted)',
            fontWeight: 500,
            maxWidth: '520px',
            lineHeight: 1.7,
            fontSize: '17px',
          }}
        >
          Som Vilo. Teší ma.
<br></br><br></br>
VILLIZ je môj priestor a barberstvo moje remeslo. Zakladám si na precíznej práci, otvorenej komunikácii a tom, aby si sa u mňa cítil príjemne.
<br></br><br></br>
Či máš jasnú predstavu, alebo potrebuješ poradiť, spolu nájdeme strih a úpravu brady, ktoré ti sadnú. Pri každej návšteve sa o teba postarám osobne.
<br></br><br></br>
Viliam Stranianek<br/>
Barber a zakladateľ VILLIZ
        </motion.p>
        </div>

        <div className="mt-10 lg:mt-0 lg:justify-self-end w-full max-w-md lg:max-w-none">
          {people.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="overflow-hidden"
              style={{
                background: '#f3f2f0',
                borderRadius: '4px',
                '--cream': '#1c1c1c',
                '--muted': '#3f3d39',
                '--gold': '#1c4d30',
              }}
            >
              {/* Photo area */}
              <div
                className="relative w-full overflow-hidden h-72 lg:h-[460px]"
              >
                <Image
                  src={person.imageUrl}
                  alt={person.name}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'middle center' }}
                  sizes="(max-width: 1024px) 100vw, 480px"
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
              <div className="p-6 lg:p-8">
                <h3
                  className="font-display"
                  style={{
                    fontSize: 'clamp(28px, 3vw, 36px)',
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
      </div>
    </section>
  )
}
