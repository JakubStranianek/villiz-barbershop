"use client"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import {
  IconScissors,
  IconUser,
  IconStars,
  IconCrown,
  IconDiamond,
} from '@tabler/icons-react'

const services = [
  {
    icon: IconUser,
    name: 'Junior',
    description: 'Strih nožničkami a strojčekom pre deti do 8 rokov',
    price: '18€',
  },
  {
    icon: IconScissors,
    name: 'Basic',
    description: 'Úprava brady',
    price: '15€',
  },
  {
    icon: IconScissors,
    name: 'Standard',
    description: 'Pánsky strih nožničkami a strojčekom',
    price: '23€',
  },
  {
    icon: IconStars,
    name: 'Premium',
    description: 'Oholenie hlavy, úprava fúzov a brady',
    price: '28€',
  },
  {
    icon: IconCrown,
    name: 'Gold',
    description: 'Pánsky strih, úprava fúzov a brady',
    price: '33€',
  },
]

export default function PriceList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="priceList"
      className="relative"
      style={{ background: 'var(--bg-primary)', paddingBlock: '88px', overflow: 'hidden' }}
    >
      {/* Subtle texture background image */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/images/priceList-bg.png"
          fill
          alt=""
          style={{ objectFit: 'cover', opacity: 0.06, mixBlendMode: 'multiply' }}
          sizes="100vw"
        />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">— Cenník</span>
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
            maxWidth: '400px',
            marginBottom: '40px',
          }}
        >
          Cenník našich služieb
        </motion.h2>

        {/* Price list block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            border: '0.5px solid rgba(200,169,126,0.3)',
            borderRadius: '4px',
            overflow: 'hidden',
            maxWidth: '760px',
          }}
        >
          {services.map((service, i) => (
            <div
              key={service.name}
              className="flex items-center gap-4 px-6 py-5 transition-colors duration-200"
              style={{
                borderTop: i > 0 ? '1px solid rgba(200,169,126,0.15)' : 'none',
                background: 'var(--bg-card)',
                cursor: 'default',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#353530')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg-card)')}
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(200,169,126,0.1)',
                  border: '0.5px solid rgba(200,169,126,0.3)',
                }}
              >
                <service.icon size={18} style={{ color: 'var(--gold)' }} stroke={1.5} />
              </div>

              {/* Name + description */}
              <div className="flex-1 min-w-0">
                <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--cream)' }}>
                  {service.name}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: 'var(--muted)',
                    fontWeight: 300,
                    marginTop: '2px',
                  }}
                >
                  {service.description}
                </div>
              </div>

              {/* Price */}
              <div
                className="font-display flex-shrink-0"
                style={{ fontSize: '22px', fontWeight: 700, color: 'var(--gold)' }}
              >
                {service.price}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '16px', fontWeight: 300 }}
        >
          Cenník platný od 1.12.2022
        </motion.p>
      </div>
    </section>
  )
}
