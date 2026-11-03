'use client'

import Script from 'next/script'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// ID z Elfsight kódu: class="elfsight-app-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
const ELFSIGHT_REVIEWS_WIDGET_ID = (process.env.NEXT_PUBLIC_ELFSIGHT_REVIEWS_ID || '')
  .replace(/^elfsight-app-/, '')
  .trim()

export default function Reviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="recenzie" className="surface-concrete" style={{ paddingBlock: '88px' }}>
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">— Recenzie</span>
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
            maxWidth: '560px',
            marginBottom: '36px',
          }}
        >
          Čo hovoria naši klienti
        </motion.h2>

        {ELFSIGHT_REVIEWS_WIDGET_ID ? (
          <>
            <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
            <div
              className={`elfsight-app-${ELFSIGHT_REVIEWS_WIDGET_ID}`}
              data-elfsight-app-lazy
            />
          </>
        ) : (
          <p style={{ color: 'var(--muted)', fontWeight: 500, maxWidth: '520px' }}>
            Sem príde tmavý Google karusel z Elfsight. V inštalačnom kóde nájdi
            elfsight-app-… a to ID vlož do NEXT_PUBLIC_ELFSIGHT_REVIEWS_ID.
          </p>
        )}
      </div>
    </section>
  )
}
