"use client"
import Link from 'next/link'
import Image from 'next/image'
import { IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react'

const navLinks = [
  { name: 'Domov', href: '/' },
  { name: 'VILLIZ Barbershop', href: '/#about' },
  { name: 'Cenník', href: '/#priceList' },
  { name: 'Recenzie', href: '/#recenzie' },
  { name: 'Galéria', href: '/galeria' },
  { name: 'Kontakt', href: '/#kontakt' },
]

const socials = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/villiz_barber',
    icon: IconBrandInstagram,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/viliam.stranianek',
    icon: IconBrandFacebook,
  },
]

const LOGO_FILTER = 'brightness(0) invert(1)'

export default function FooterSection() {
  return (
    <footer className="surface-slats" style={{ borderTop: '0.5px solid var(--line)' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" aria-label="Villiz Barbershop" className="flex-shrink-0">
            <Image
              src="/villiz-barbershop-logo.svg"
              width={90}
              height={28}
              alt="Villiz Barbershop"
              style={{ filter: LOGO_FILTER }}
            />
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  fontWeight: 400,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
              >
                <s.icon size={18} stroke={1.5} />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: '0.5px solid var(--line)' }}
        >
          <p style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 500 }}>
            &copy; 2020 Villiz Barbershop. Všetky práva vyhradené.
          </p>
          <p style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 500 }}>
            Built with ♥ by{' '}
            <Link
              href="https://www.stranianek.dev"
              target="_blank"
              style={{ color: 'var(--gold)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-light)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gold)')}
            >
              Jakub Stranianek
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
