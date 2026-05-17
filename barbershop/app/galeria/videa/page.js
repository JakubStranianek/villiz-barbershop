"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'

const videos = [
  { id: '3ht7oixlvf', title: 'video1' },
  { id: 'btgdfy8oth', title: 'video2' },
  { id: 'eghkhubtpm', title: 'video3' },
]

export default function VideoGaleria() {
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
            Videá z nášho barbershopu.
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="gold-card overflow-hidden"
              style={{ borderRadius: '4px' }}
            >
              <div
                style={{
                  padding: '177.5% 0 0 0',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                  }}
                >
                  <iframe
                    src={`https://fast.wistia.net/embed/iframe/${video.id}?videoFoam=true`}
                    title={video.title}
                    allow="autoplay; fullscreen"
                    allowTransparency={true}
                    frameBorder="0"
                    scrolling="no"
                    className="wistia_embed"
                    name="wistia_embed"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
