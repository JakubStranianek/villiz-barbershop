"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IconMenu2, IconX } from '@tabler/icons-react'

const navigation = [
  { name: 'Domov', href: '/' },
  { name: 'O nás', href: '/#about' },
  { name: 'Cenník', href: '/#priceList' },
  { name: 'Recenzie', href: '/#recenzie' },
  { name: 'Galéria', href: '/galeria' },
  { name: 'Kariéra', href: '/kariera' },
  { name: 'Kontakt', href: '/#kontakt' },
]

const LOGO_FILTER =
  'brightness(0) saturate(100%) invert(75%) sepia(30%) saturate(500%) hue-rotate(5deg) brightness(105%)'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'var(--bg-primary)',
        borderBottom: '0.5px solid rgba(200,169,126,0.25)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Villiz Barbershop – domov">
            <Image
              src="/images/logoB.png"
              width={105}
              height={32}
              alt="Villiz Barbershop"
              style={{ filter: LOGO_FILTER }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-body transition-colors duration-200"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  fontWeight: 400,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2"
            style={{ color: 'var(--muted)' }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: 'var(--bg-secondary)',
            borderTop: '0.5px solid rgba(200,169,126,0.15)',
          }}
          className="sm:hidden"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-body"
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  fontWeight: 400,
                  paddingBlock: '4px',
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
