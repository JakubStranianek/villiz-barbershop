"use client"
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'
import { IconQuote, IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

const reviews = [
  { id: 1, name: 'Martin', src: '/images/guy1.png', review: 'Vždy spokojný po návšteve tohto barbershopu. Príjemné prostredie, kvalitný barber, cena služieb zodpovedá kvalite. Plne každému odporúčam. Barber Vilo si dá vždy záležať.' },
  { id: 2, name: 'Dávid',  src: '/images/guy2.png', review: 'Čo sa týka Viliho v Žiline tak odporúčam 👌 Šikovný chalan vie sa s tým pekne vyhrať. Spokojnosť 100% plus príjemné prostredie.' },
  { id: 3, name: 'Daniel', src: '/images/guy3.png', review: 'Vždy spokojnosť so strihom ale aj čo sa týka prostredia. Villiz Barber komunikatívny a vždy vykúzli účes ktorý spĺňa všetky moje kritéria, za mňa najlepšia voľba v ZA.' },
  { id: 4, name: 'Miro',   src: '/images/guy4.png', review: 'Barber Villiz má perfektný prístup. Vždy mi urobí skvelý strih. Je to štýlový barbershop. TOPka v Žiline. Odporúčam.' },
  { id: 5, name: 'Michal', src: '/images/guy5.png', review: 'Vždy veľká spokojnosť či už so strihom alebo s úpravou brady s Villiz Barberom vždy dobre pokecáme a odchádzam s fresh cutom spokojný domov 😌' },
  { id: 6, name: 'Roman',  src: '/images/guy6.png', review: 'Dlho som nevedel nájsť barbera, ktorý by vyhovoval mojej náročnosti, no Villiz spĺňa všetko na špičkovej úrovni. Od priateľského a pohodového prístupu k zákaznikovi až po precízne vypiplaný strih.' },
  { id: 7, name: 'Martin', src: '/images/guy7.png', review: 'Top služby. Originálne a hlavne príjemné prostredie. Robota vždy na 100%, žiadne odfláknutie. Ochotný a kamarátsky prístup. Vždy odchádzam spokojný 👍' },
  { id: 8, name: 'Jakub',  src: '/images/guy8.png', review: 'Vždy maximálna spokojnosť. Každý jeden strih je niečím jedinečný. Výborná komunikácia a veľmi príjemné prostredia. 10/10' },
  { id: 9, name: 'Lukáš',  src: '/images/guy9.png', review: 'Moderné prostredie kde sa vždy cítim pohodlne. Výborná priateľská nálada a ešte lepšie služby. Vrelo odporúčam!!' },
]

export default function Reviews() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length)
  const next = () => setCurrent((c) => (c + 1) % reviews.length)

  return (
    <section id="recenzie" style={{ background: 'var(--bg-primary)', paddingBlock: '88px' }}>
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
          style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--cream)', maxWidth: '500px', marginBottom: '48px' }}
        >
          Čo hovoria naši klienti
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ maxWidth: '860px' }}
        >
          {/* Card */}
          <div className="gold-card flex flex-col sm:flex-row overflow-hidden" style={{ minHeight: '300px' }}>

            {/* Photo column — h-52 on mobile (full width), sm: fixed 210px wide + stretches to card height */}
            <div
              className="relative flex-shrink-0 overflow-hidden w-full h-52 sm:w-52 sm:h-auto"
              style={{ background: 'linear-gradient(160deg, #2e2e28 0%, #2d4a32 100%)' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`img-${current}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={reviews[current].src}
                    fill
                    alt={reviews[current].name}
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                    sizes="(max-width: 640px) 100vw, 210px"
                  />
                </motion.div>
              </AnimatePresence>
              {/* bottom fade on mobile */}
              <div
                className="sm:hidden absolute inset-x-0 bottom-0 z-10"
                style={{ height: '56px', background: 'linear-gradient(to top, rgba(46,46,40,0.95), transparent)' }}
              />
              {/* right fade on desktop */}
              <div
                className="hidden sm:block absolute inset-y-0 right-0 z-10"
                style={{ width: '48px', background: 'linear-gradient(to right, transparent, rgba(46,46,40,0.85))' }}
              />
            </div>

            {/* Text column */}
            <div className="flex-1 flex flex-col justify-between p-6 sm:p-10">
              <div>
                <IconQuote size={28} style={{ color: 'var(--gold)', opacity: 0.45 }} stroke={1.5} />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${current}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <blockquote style={{ marginTop: '14px', fontSize: '16px', lineHeight: 1.8, color: 'var(--cream)', fontWeight: 300 }}>
                      &ldquo;{reviews[current].review}&rdquo;
                    </blockquote>
                    <footer style={{ marginTop: '20px' }}>
                      <span style={{ fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>
                        — {reviews[current].name}
                      </span>
                    </footer>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 mt-5">
            <button
              onClick={prev}
              aria-label="Predchádzajúca recenzia"
              style={{ width: 36, height: 36, border: '0.5px solid rgba(200,169,126,0.3)', borderRadius: '2px', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color .2s, border-color .2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderColor = 'rgba(200,169,126,0.6)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'rgba(200,169,126,0.3)' }}
            >
              <IconChevronLeft size={16} stroke={1.5} />
            </button>

            <button
              onClick={next}
              aria-label="Nasledujúca recenzia"
              style={{ width: 36, height: 36, border: '0.5px solid rgba(200,169,126,0.3)', borderRadius: '2px', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color .2s, border-color .2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderColor = 'rgba(200,169,126,0.6)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'rgba(200,169,126,0.3)' }}
            >
              <IconChevronRight size={16} stroke={1.5} />
            </button>

            <div className="flex gap-1.5 ml-1">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Recenzia ${i + 1}`}
                  style={{ width: i === current ? 20 : 6, height: 3, borderRadius: 2, background: i === current ? 'var(--gold)' : 'rgba(200,169,126,0.25)', border: 'none', cursor: 'pointer', transition: 'all .3s ease', padding: 0 }}
                />
              ))}
            </div>

            <span style={{ marginLeft: 'auto', fontSize: '12px', color: 'var(--muted)', fontWeight: 300 }}>
              {current + 1} / {reviews.length}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
