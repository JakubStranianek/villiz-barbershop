"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const photos = [
  { src: '/prevadzka/villiz-barbershop-prevadzka1.PNG', alt: 'Villiz Barbershop – interiér' },
  { src: '/prevadzka/villiz-barbershop-prevadzka2.PNG', alt: 'Villiz Barbershop – detail' },
  { src: '/villiz-barbershop-barber2.PNG', alt: 'Villiz Barbershop – atmosféra' },
  { src: '/prevadzka/villiz-barbershop-prevadzka4.PNG', alt: 'Strih 1' },
  { src: '/prevadzka/villiz-barbershop-prevadzka5.PNG', alt: 'Strih 2' },
  { src: '/prevadzka/villiz-barbershop-prevadzka6.PNG', alt: 'Strih 3' },
  { src: '/prevadzka/villiz-barbershop-prevadzka7.PNG', alt: 'Strih 4' },
  { src: '/prevadzka/villiz-barbershop-prevadzka8.PNG', alt: 'Strih 5' },
  { src: '/villiz-barbershop-barber1.PNG', alt: 'Strih 6' },
]

function GalleryCard({ src, alt, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="relative overflow-hidden"
      style={{
        borderRadius: '4px',
        border: '0.5px solid var(--line)',
        cursor: 'pointer',
        transition: 'border-color 0.25s ease',
        borderColor: hovered ? 'var(--line-strong)' : 'var(--line)',
        aspectRatio: index % 4 === 0 ? '3/4' : '4/3',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={src}
        fill
        alt={alt}
        style={{
          objectFit: 'cover',
          transition: 'transform 0.4s ease',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
        }}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Hover overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: 'rgba(16,16,16,0.28)',
          opacity: hovered ? 1 : 0,
        }}
      />
    </motion.div>
  )
}

export default function Galeria() {
  return (
    <main className="surface-concrete" style={{ minHeight: '100vh', paddingTop: '64px' }}>
      {/* Header */}
      <div
        style={{
          borderBottom: '0.5px solid var(--line)',
          paddingBlock: '56px',
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="section-label">— Galéria</span>
          <h1
            className="font-display mt-3"
            style={{
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: 700,
              lineHeight: 1.08,
              color: 'var(--cream)',
              maxWidth: '520px',
            }}
          >
            Naša práca
          </h1>
          <p
            style={{
              marginTop: '16px',
              color: 'var(--muted)',
              fontWeight: 500,
              maxWidth: '400px',
              lineHeight: 1.7,
            }}
          >
            Zábery z nášho barbershopu a ukážky našej práce.
          </p>

          {/* Tab navigation */}
          <div className="flex gap-3 mt-8">
            <Link href="/galeria" className="btn-primary" style={{ fontSize: '12px', padding: '8px 24px' }}>
              Fotky
            </Link>
            <Link
              href="/galeria/videa"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 24px',
                fontSize: '12px',
                letterSpacing: '0.06em',
                color: 'var(--muted)',
                border: '0.5px solid var(--line)',
                borderRadius: '2px',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--gold)'
                e.currentTarget.style.borderColor = 'var(--line-strong)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--muted)'
                e.currentTarget.style.borderColor = 'var(--line)'
              }}
            >
              Videá
            </Link>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="section-separator" />

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <div key={photo.src} className="break-inside-avoid">
              <GalleryCard src={photo.src} alt={photo.alt} index={i} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
