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
    description: 'Pohodlné parkovanie priamo pred dverami barbershopu, bez starostí.',
  },
  {
    icon: IconCoffee,
    title: 'Káva alebo rum',
    description: 'Ku každej službe ťa pohostíme kvalitnou kávičkou, chladným nápojom alebo pohárom rumu.',
  },
  {
    icon: IconScissors,
    title: 'Profesionálni barberi',
    description: 'Naši remeselníci majú vášeň pre detail a dlhoročné skúsenosti v barbierstve.',
  },
  {
    icon: IconLeaf,
    title: 'Zelená atmosféra',
    description: 'Živá zelená stena a hexagonálne LED svietidlá vytvárajú jedinečnú, upokojujúcu atmosféru.',
  },
]

function GalleryImage({ src, alt, style, className }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={`relative overflow-hidden ${className ?? ''}`}
      style={{
        border: '0.5px solid rgba(200,169,126,0.3)',
        borderRadius: '4px',
        transition: 'transform 0.35s ease, border-color 0.25s ease',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        borderColor: hovered ? 'rgba(200,169,126,0.65)' : 'rgba(200,169,126,0.3)',
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
      style={{ background: 'var(--bg-secondary)', paddingBlock: '88px' }}
    >
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">— O nás</span>
        </motion.div>

        {/* Heading */}
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
          Barbershop s dušou,<br />
          nie len so strojčekom
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            maxWidth: '560px',
            marginTop: '20px',
            color: 'var(--muted)',
            fontWeight: 300,
            lineHeight: 1.75,
            fontSize: '16px',
          }}
        >
          Barbershop nachádzajúci sa v mestskej časti Žilina Bôrik na ulici Alexandra
          Rudnaya 45. Príď si oddýchnuť a zresetovať po náročnom dni. Ponúkame ti
          kvalitný pánsky strih, úpravu brady a oveľa viac.
        </motion.p>

        {/* Editorial image grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 grid grid-cols-2 gap-3"
          style={{ maxWidth: '640px' }}
        >
          {/* Col 1: tall image */}
          <GalleryImage
            src="/images/gallery1.JPG"
            alt="Villiz Barbershop interiér"
            style={{ aspectRatio: '3/4' }}
          />

          {/* Col 2: two stacked images */}
          <div className="flex flex-col gap-3">
            <GalleryImage
              src="/images/gallery2.JPG"
              alt="Villiz Barbershop detail"
              style={{ flex: 1, minHeight: '140px' }}
            />
            <GalleryImage
              src="/images/gallery3.JPG"
              alt="Villiz Barbershop atmosféra"
              style={{ flex: 1, minHeight: '140px' }}
            />
          </div>
        </motion.div>

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
                  background: 'rgba(200,169,126,0.1)',
                  border: '0.5px solid rgba(200,169,126,0.25)',
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
                    fontWeight: 300,
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
