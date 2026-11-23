"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'

const videos = [
  { src: '/videos/vb_video.mp4', poster: '/videos/vb_video.jpg', title: 'Villiz Barbershop – video 1' },
  { src: '/videos/vb_video2.mp4', poster: '/videos/vb_video2.jpg', title: 'Villiz Barbershop – video 2' },
  { src: '/videos/vb_video3.mp4', poster: '/videos/vb_video3.jpg', title: 'Villiz Barbershop – video 3' },
  { src: '/videos/vb_video4.mp4', poster: '/videos/vb_video4.jpg', title: 'Villiz Barbershop – video 4' },
]

export default function VideoGaleria() {
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
            Z môjho kresla
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
            Ukážky strihov, úpravy brady a atmosféra priamo z barbershopu.
          </p>

          {/* Tab navigation */}
          <div className="flex gap-3 mt-8">
            <Link
              href="/galeria"
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
              Fotky
            </Link>
            <Link href="/galeria/videa" className="btn-primary" style={{ fontSize: '12px', padding: '8px 24px' }}>
              Videá
            </Link>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="section-separator" />

      {/* Videos grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden"
              style={{ borderRadius: '4px', border: '0.5px solid var(--line)', background: '#101010' }}
            >
              <video
                src={video.src}
                poster={video.poster}
                title={video.title}
                controls
                playsInline
                preload="none"
                style={{ width: '100%', aspectRatio: '9 / 16', objectFit: 'cover', display: 'block' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
