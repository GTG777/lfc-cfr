'use client'

import Link from 'next/link'
import { Share2, Mail, Phone, MapPin } from 'lucide-react'
import { useTheme } from '@/lib/theme'

const palettes = [
  { id: 'A' as const, label: 'Kingdom Purple', primary: '#6B21A8', accent: '#CA8A04' },
  { id: 'B' as const, label: 'Crimson', primary: '#7F1D1D', accent: '#B8963E' },
  { id: 'C' as const, label: 'Midnight Navy', primary: '#0F172A', accent: '#D97706' },
  { id: 'D' as const, label: 'Royal Emerald', primary: '#14532D', accent: '#CA8A04' },
]

export default function Footer() {
  const { palette, setPalette, mode, toggleMode } = useTheme()

  return (
    <footer style={{ background: 'var(--color-primary)', color: 'var(--color-text-on-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Col 1 – Brand */}
        <div className="flex flex-col gap-4">
          <p className="font-playfair font-bold text-2xl" style={{ color: 'var(--color-accent)' }}>LFC•CFR</p>
          <p className="text-sm opacity-80" style={{ fontFamily: 'Inter, system-ui' }}>
            Labourers For Christ<br />Center For Reconstruction
          </p>
          <p className="font-lora text-sm opacity-70 leading-relaxed">
            "They shall rebuild the ancient ruins..."<br />
            <span className="not-italic opacity-60 text-xs" style={{ fontFamily: 'Inter, system-ui', fontStyle: 'normal' }}>— Isaiah 58:12</span>
          </p>
          <p className="text-xs opacity-60" style={{ fontFamily: 'Inter, system-ui' }}>Williamsburg, VA 23188</p>
        </div>

        {/* Col 2 – Links */}
        <div className="flex flex-col gap-3">
          <p className="section-label mb-2" style={{ color: 'var(--color-accent)' }}>Quick Links</p>
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Church Gathering', href: '/gathering' },
            { label: 'Outreach & Ministries', href: '/outreach' },
            { label: 'Iaomai Wellness', href: '/iaomai' },
            { label: 'Give Online', href: '/giving' },
            { label: 'Contact', href: '/contact' },
          ].map(l => (
            <Link key={l.label} href={l.href}
              className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text-on-primary)' }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Col 3 – Contact */}
        <div className="flex flex-col gap-4">
          <p className="section-label mb-2" style={{ color: 'var(--color-accent)' }}>Connect With Us</p>
          <a href="tel:7575610737" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100"
            style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text-on-primary)' }}>
            <Phone size={14} /> 757.561.0737
          </a>
          <a href="mailto:lfccfr@gmail.com" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100"
            style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text-on-primary)' }}>
            <Mail size={14} /> lfccfr@gmail.com
          </a>
          <span className="flex items-start gap-2 text-sm opacity-80"
            style={{ fontFamily: 'Inter, system-ui' }}>
            <MapPin size={14} className="mt-0.5 shrink-0" />
            5252 Olde Towne Rd., Suite C<br />Williamsburg, VA 23188
          </span>
          <a href="https://www.facebook.com/lfcreconstruction" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100"
            style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text-on-primary)' }}>
            <Share2 size={14} /> @lfcreconstruction
          </a>
        </div>

        {/* Col 4 – Theme switcher */}
        <div className="flex flex-col gap-4">
          <p className="section-label mb-2" style={{ color: 'var(--color-accent)' }}>Choose Your Theme</p>
          <div className="grid grid-cols-2 gap-2">
            {palettes.map(p => (
              <button key={p.id} onClick={() => setPalette(p.id)}
                aria-pressed={palette === p.id}
                aria-label={`Palette ${p.id}: ${p.label}`}
                className="flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-all"
                style={{
                  fontFamily: 'Inter, system-ui',
                  border: palette === p.id ? `2px solid var(--color-accent)` : '2px solid rgba(255,255,255,0.2)',
                  background: palette === p.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: 'var(--color-text-on-primary)',
                }}>
                <span className="flex gap-1">
                  <span className="w-3 h-3 rounded-full inline-block" style={{ background: p.primary }} />
                  <span className="w-3 h-3 rounded-full inline-block" style={{ background: p.accent }} />
                </span>
                {p.id}
              </button>
            ))}
          </div>

          <button onClick={toggleMode}
            className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity mt-2"
            style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text-on-primary)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            {mode === 'dark' ? '☀ Light Mode' : '☾ Dark Mode'}
          </button>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs opacity-50" style={{ fontFamily: 'Inter, system-ui' }}>
            © 2026 Labourers For Christ Center For Reconstruction. All rights reserved.
          </p>
          <p className="text-xs opacity-40" style={{ fontFamily: 'Inter, system-ui' }}>
            5252 Olde Towne Rd., Suite C · Williamsburg, VA 23188
          </p>
        </div>
      </div>
    </footer>
  )
}
