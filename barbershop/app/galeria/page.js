"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const photos = [
  { src: '/images/gallery1.JPG', alt: 'Villiz Barbershop – interiér' },
  { src: '/images/gallery2.JPG', alt: 'Villiz Barbershop – detail' },
  { src: '/images/gallery3.JPG', alt: 'Villiz Barbershop – atmosféra' },
  { src: '/images/gallery/img1.png', alt: 'Strih 1' },
  { src: '/images/gallery/img2.png', alt: 'Strih 2' },
  { src: '/images/gallery/img3.png', alt: 'Strih 3' },
  { src: '/images/gallery/img4.png', alt: 'Strih 4' },
  { src: '/images/gallery/img5.png', alt: 'Strih 5' },
  { src: '/images/gallery/img6.png', alt: 'Strih 6' },
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
        border: '0.5px solid rgba(200,169,126,0.3)',
        cursor: 'pointer',
        transition: 'border-color 0.25s ease',
        borderColor: hovered ? 'rgba(200,169,126,0.7)' : 'rgba(200,169,126,0.3)',
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
          background: 'rgba(26,26,24,0.35)',
          opacity: hovered ? 1 : 0,
        }}
      />
    </motion.div>
  )
}

export default function Galeria() {
  return (
    <main style={{ background: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '64px' }}>
      {/* Header */}
      <div
        style={{
          background: 'var(--bg-secondary)',
          borderBottom: '0.5px solid rgba(200,169,126,0.2)',
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
              fontWeight: 300,
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
                border: '0.5px solid rgba(200,169,126,0.25)',
                borderRadius: '2px',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--gold)'
                e.currentTarget.style.borderColor = 'rgba(200,169,126,0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--muted)'
                e.currentTarget.style.borderColor = 'rgba(200,169,126,0.25)'
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
