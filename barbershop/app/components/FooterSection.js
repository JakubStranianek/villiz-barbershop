"use client"
import Link from 'next/link'
import Image from 'next/image'
import { IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react'

const navLinks = [
  { name: 'Domov', href: '/' },
  { name: 'O nás', href: '/#about' },
  { name: 'Cenník', href: '/#priceList' },
  { name: 'Recenzie', href: '/#recenzie' },
  { name: 'Galéria', href: '/galeria' },
  { name: 'Kariéra', href: '/kariera' },
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

const LOGO_FILTER =
  'brightness(0) saturate(100%) invert(75%) sepia(30%) saturate(500%) hue-rotate(5deg) brightness(105%)'

export default function FooterSection() {
  return (
    <footer
      style={{
        background: 'var(--bg-primary)',
        borderTop: '0.5px solid rgba(200,169,126,0.2)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" aria-label="Villiz Barbershop" className="flex-shrink-0">
            <Image
              src="/images/logoB.png"
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
          style={{ borderTop: '0.5px solid rgba(200,169,126,0.12)' }}
        >
          <p style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 300 }}>
            &copy; 2020 Villiz Barbershop. Všetky práva vyhradené.
          </p>
          <p style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 300 }}>
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
