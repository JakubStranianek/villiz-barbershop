"use client"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    name: 'Junior',
    description: 'Strih nožničkami a strojčekom pre deti do 8 rokov',
    price: '18 €',
  },
  {
    name: 'Basic',
    description: 'Úprava brady',
    price: '15 €',
  },
  {
    name: 'Standard',
    description: 'Pánsky strih nožničkami a strojčekom',
    price: '23 €',
  },
  {
    name: 'Premium',
    description: 'Oholenie hlavy, úprava fúzov a brady',
    price: '28 €',
  },
  {
    name: 'Gold',
    description: 'Pánsky strih, úprava fúzov a brady',
    price: '33 €',
  },
]

export default function PriceList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="priceList"
      className="surface-concrete"
      style={{ paddingBlock: '88px' }}
    >
      <div ref={ref} className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
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
          }}
        >
          Cenník služieb
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '16px', marginBottom: '28px', fontWeight: 400 }}
        >
          Cenník platný od 1.12.2025
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="price-board"
        >
          <table className="price-table">
            <thead>
              <tr>
                <th scope="col">Služba</th>
                <th scope="col">Cena</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.name}>
                  <th scope="row" style={{ textAlign: 'left', fontWeight: 400 }}>
                    <div className="price-name font-display">{service.name}</div>
                    <div className="price-desc">{service.description}</div>
                  </th>
                  <td className="price-value">{service.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
