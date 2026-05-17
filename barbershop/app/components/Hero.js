"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const stats = [
  { num: '5+', label: 'rokov skúseností' },
  { num: '100%', label: 'spokojnosť' },
  {
    num: 'Žilina Bôrik',
    label: 'nájdeš nás tu',
    href: 'https://www.google.com/maps/dir//villizbarbershop/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47145fc2a67a2e77:0x751dea2c9af113b5?sa=X&ved=2ahUKEwiyj8u62uX8AhUWgv0HHWaADtQQ9Rd6BAgZEAU',
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-16">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/priceList-bg.png"
          fill
          alt=""
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          quality={85}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(rgba(26,26,24,0.75), rgba(26,26,24,0.4))',
          }}
        />
        {/* Subtle diagonal texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(200,169,126,0.025) 2px, rgba(200,169,126,0.025) 4px)',
          }}
        />
      </div>

      {/* Main content */}
      <div
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center"
        style={{ paddingTop: '80px', paddingBottom: '60px' }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full"
          style={{
            border: '1px solid rgba(200,169,126,0.5)',
            background: 'rgba(26,26,24,0.55)',
            backdropFilter: 'blur(8px)',
            color: 'var(--gold)',
            fontSize: '11px',
            letterSpacing: '0.14em',
            fontWeight: 500,
            textTransform: 'uppercase',
            fontFamily: 'var(--font-body)',
          }}
        >
          ✦ Barbershop Žilina
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          className="font-display"
          style={{
            fontSize: 'clamp(44px, 7vw, 72px)',
            fontWeight: 700,
            lineHeight: 1.08,
            color: 'var(--cream)',
            maxWidth: '740px',
            letterSpacing: '-0.01em',
          }}
        >
          Staň sa najlepšou{' '}
          <span style={{ color: 'var(--gold)' }}>verziou</span>
          {' '}seba samého
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          style={{
            maxWidth: '380px',
            marginTop: '24px',
            color: 'rgba(245,240,232,0.75)',
            fontWeight: 300,
            lineHeight: 1.75,
            fontSize: '16px',
          }}
        >
          Viac ako nový strih. Zverte sa do rúk naším profesionálom,
          ktorí majú vášeň pre barbierstvo.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Link href="/#priceList" className="btn-primary">
            Pozri služby
          </Link>
          <Link href="/#kontakt" className="btn-ghost">
            Objednaj sa
          </Link>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div
        className="relative z-10 w-full"
        style={{
          borderTop: '1px solid rgba(200,169,126,0.2)',
          background: 'rgba(26,26,24,0.65)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {stats.map((stat, i) => {
              const sharedStyle = {
                borderLeft: i > 0 ? '1px solid rgba(200,169,126,0.2)' : 'none',
              }
              const content = (
                <>
                  <div
                    className="font-display"
                    style={{ fontSize: '36px', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                      marginTop: '6px',
                      fontWeight: 400,
                    }}
                  >
                    {stat.label}
                  </div>
                </>
              )
              return stat.href ? (
                <Link
                  key={i}
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-8 text-center block"
                  style={{ ...sharedStyle, textDecoration: 'none', transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  {content}
                </Link>
              ) : (
                <div key={i} className="py-8 text-center" style={sharedStyle}>
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
