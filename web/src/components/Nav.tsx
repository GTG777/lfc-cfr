'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/lib/theme'

const links = [
  { label: 'Home', href: '/' },
  {
    label: 'About', href: '/about',
    children: [
      { label: 'Archbishop Edgar Purnell', href: '/about/archbishop' },
      { label: 'Our Purpose', href: '/about/purpose' },
      { label: 'Our Faith Principles', href: '/about/purpose' },
    ],
  },
  {
    label: 'Gathering', href: '/gathering',
    children: [
      { label: 'Building Block Sundays', href: '/gathering' },
      { label: 'Corporate Fasting & Prayer', href: '/gathering' },
      { label: 'Resurrection Sunday', href: '/gathering' },
    ],
  },
  {
    label: 'Outreach', href: '/outreach',
    children: [
      { label: 'I AM the Storm', href: '/outreach' },
      { label: "Ruby's Gems", href: '/outreach' },
      { label: '7 Days Dead', href: '/outreach' },
      { label: 'Wailing Wall Ministry', href: '/prayer' },
      { label: 'Iaomai Wellness', href: '/iaomai' },
    ],
  },
  { label: 'Iaomai', href: '/iaomai' },
  {
    label: 'Affiliates', href: '/affiliates',
    children: [
      { label: 'LFC Ministries HQ', href: '/affiliates' },
      { label: 'LFC Apostolic Ecumenical Network', href: '/affiliates' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const { mode, toggleMode } = useTheme()
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{ background: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center h-16 gap-8">
        {/* Logo */}
        <Link href="/" className="font-playfair font-bold text-xl shrink-0"
          style={{ color: 'var(--color-accent)', letterSpacing: '0.05em' }}>
          LFC•CFR
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1 flex-1">
          {links.map(link => (
            <li key={link.label} className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}>
              <Link href={link.href}
                className="flex items-center gap-1 px-3 py-2 rounded text-sm font-medium transition-colors"
                style={{ color: 'var(--color-text)', fontFamily: 'Inter, system-ui, sans-serif' }}
                onFocus={() => link.children && setActiveDropdown(link.label)}>
                {link.label}
                {link.children && <span style={{ fontSize: '0.6rem', opacity: 0.7 }}>▾</span>}
              </Link>
              {link.children && activeDropdown === link.label && (
                <ul className="absolute top-full left-0 mt-1 w-56 rounded-lg shadow-lg py-1 z-50"
                  style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}>
                  {link.children.map(child => (
                    <li key={child.label}>
                      <Link href={child.href}
                        className="block px-4 py-2 text-sm hover:opacity-80 transition-opacity"
                        style={{ color: 'var(--color-text)', fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3 ml-auto">
          <button onClick={toggleMode} aria-label="Toggle dark mode"
            className="p-2 rounded-full transition-colors"
            style={{ color: 'var(--color-text-muted)' }}>
            {mode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link href="/giving" className="btn-primary hidden sm:inline-flex" style={{ padding: '0.5rem 1.25rem', fontSize: '0.75rem' }}>
            Give
          </Link>
          {/* Mobile hamburger */}
          <button className="lg:hidden p-2" onClick={() => setOpen(o => !o)}
            aria-label="Open menu" style={{ color: 'var(--color-text)' }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden px-4 pb-4 flex flex-col gap-1"
          style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}>
          {links.map(link => (
            <div key={link.label}>
              <Link href={link.href}
                className="block py-2 text-sm font-medium"
                style={{ color: 'var(--color-text)' }}
                onClick={() => setOpen(false)}>
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-4">
                  {link.children.map(child => (
                    <Link key={child.label} href={child.href}
                      className="block py-1 text-sm"
                      style={{ color: 'var(--color-text-muted)' }}
                      onClick={() => setOpen(false)}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/giving" className="btn-primary mt-2 justify-center" onClick={() => setOpen(false)}>Give Now</Link>
        </div>
      )}
    </nav>
  )
}
