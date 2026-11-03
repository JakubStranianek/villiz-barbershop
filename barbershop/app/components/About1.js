"use client"
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import {
  IconParking,
  IconCoffee,
  IconScissors,
  IconLeaf,
} from '@tabler/icons-react'

const features = [
  {
    icon: IconParking,
    title: 'Bezplatné parkovanie',
    description: 'Zaparkuj pohodlne a bezplatne priamo pred barbershopom.',
  },
  {
    icon: IconCoffee,
    title: 'Káva',
    description: 'Ku každej službe ťa pohostíme kvalitnou kávičkou.',
  },
  {
    icon: IconScissors,
    title: 'Tvoj osobný barber',
    description: 'Pri každej návšteve sa stretneš so mnou. Spoznám tvoje predstavy aj preferencie a postarám sa o každý detail.',
  },
  {
    icon: IconLeaf,
    title: 'Priestor na oddych',
    description: 'Drevo, zeleň a moderný interiér vytvárajú príjemné miesto, kde si vychutnáš čas pre seba.',
  },
]

function GalleryImage({ src, alt, style, className }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={`relative overflow-hidden ${className ?? ''}`}
      style={{
        border: '0.5px solid var(--line)',
        borderRadius: '4px',
        transition: 'transform 0.35s ease, border-color 0.25s ease',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        borderColor: hovered ? 'var(--line-strong)' : 'var(--line)',
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={src}
        fill
        alt={alt}
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 640px) 100vw, 33vw"
      />
    </div>
  )
}

export default function About1() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      className="surface-concrete"
      style={{ paddingBlock: '88px' }}
    >
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="section-label">— VILLIZ Barbershop</span>
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
                maxWidth: '540px',
              }}
            >
              Poctivé remeslo.<br />
              Osobný prístup.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                maxWidth: '520px',
                marginTop: '20px',
                color: 'var(--muted)',
                fontWeight: 500,
                lineHeight: 1.75,
                fontSize: '17px',
              }}
            >
              VILLIZ je privátny barbershop na žilinskom Bôriku, kde sa o teba postarám od prvého privítania až po finálny styling. Strih aj bradu prispôsobím tvojmu štýlu a tomu, čo ti pristane.
Na Alexandra Rudnaya 45 ťa čaká priestor, kde si môžeš oddýchnuť, dať si niečo dobré a na chvíľu vypnúť.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 lg:mt-0 grid grid-cols-2 gap-3"
          >
          {/* Col 1: tall image */}
          <GalleryImage
            src="/villiz-barbershop-barber1.PNG"
            alt="Villiz Barbershop interiér"
            style={{ aspectRatio: '3/4' }}
          />

          {/* Col 2: two stacked images */}
          <div className="flex flex-col gap-3">
            <GalleryImage
              src="/villiz-barbershop-barber2.PNG"
              alt="Villiz Barbershop detail"
              style={{ flex: 1, minHeight: '140px' }}
            />
            <GalleryImage
              src="/prevadzka/villiz-barbershop-prevadzka1.PNG"
              alt="Villiz Barbershop atmosféra"
              style={{ flex: 1, minHeight: '140px' }}
            />
          </div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.25 + i * 0.08 }}
              className="gold-card p-6 flex gap-4"
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '4px',
                  background: 'color-mix(in srgb, var(--gold) 12%, transparent)',
                  border: '0.5px solid var(--line)',
                }}
              >
                <feature.icon size={20} style={{ color: 'var(--gold)' }} stroke={1.5} />
              </div>

              <div>
                <h3
                  className="font-body"
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: 'var(--cream)',
                    marginBottom: '6px',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--muted)',
                    lineHeight: 1.65,
                    fontWeight: 500,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
