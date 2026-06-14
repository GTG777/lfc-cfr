'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HeartHandshake, Flame, Users } from 'lucide-react'

export default function PrayerPage() {
  const [form, setForm] = useState({ name: '', email: '', request: '', private: false })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="flex flex-col items-center justify-center text-center px-4 py-24"
        style={{ background: 'var(--color-primary)', minHeight: '45vh' }}>
        <nav className="text-xs mb-4" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.6)' }}>
          <Link href="/" style={{ color: 'var(--color-accent)' }}>Home</Link> <span className="mx-2">›</span> Prayer
        </nav>
        <h1 className="font-playfair font-bold" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff' }}>The Wailing Wall Ministry</h1>
        <p className="mt-3 max-w-xl" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.75)' }}>
          Our intercessory prayer team stands in the gap for individuals, families, and nations.
        </p>
        <div className="scripture-block max-w-xl mt-8 text-left">
          <p style={{ color: 'rgba(255,255,255,0.9)' }}>"I looked for someone among them who would build up the wall and stand before me in the gap on behalf of the land so I would not have to destroy it."</p>
          <cite style={{ color: 'rgba(255,255,255,0.6)' }}>— Ezekiel 22:30</cite>
        </div>
      </section>

      <section style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <HeartHandshake size={28} />, title: 'We Stand With You', body: 'Every prayer request is received with care, treated with confidentiality, and lifted before the throne of grace by our intercession team.' },
            { icon: <Flame size={28} />, title: '24-Hour Intercession', body: 'Our Wailing Wall Ministry maintains a continual posture of prayer, standing in the gap for those who cannot stand for themselves.' },
            { icon: <Users size={28} />, title: 'Community Prayer', body: 'Join us for corporate intercession during our weekly gathering and special prayer calls throughout the month.' },
          ].map(item => (
            <div key={item.title} className="rounded-lg p-8 flex flex-col gap-4"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: 'var(--color-primary)', color: 'var(--color-text-on-primary)' }}>
                {item.icon}
              </div>
              <h3 className="font-playfair font-semibold" style={{ fontSize: '1.2rem', color: 'var(--color-text)' }}>{item.title}</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)', fontFamily: 'Inter, system-ui', lineHeight: 1.7 }}>{item.body}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-8">
          <span className="section-label text-center block mb-3">Submit Your Request</span>
          <h2 className="font-playfair font-bold text-center mb-8" style={{ fontSize: '2rem', color: 'var(--color-text)' }}>
            Prayer Request Form
          </h2>

          {submitted ? (
            <div className="rounded-xl p-12 text-center"
              style={{ background: 'var(--color-surface)', border: '2px solid var(--color-accent)' }}>
              <div className="text-5xl mb-4">🙏</div>
              <h3 className="font-playfair font-bold text-2xl mb-3" style={{ color: 'var(--color-text)' }}>Your Request Has Been Received</h3>
              <p style={{ color: 'var(--color-text-muted)', fontFamily: 'Inter, system-ui', lineHeight: 1.7 }}>
                Our Wailing Wall Ministry team will lift your request before the Lord. You are not alone — we stand with you in prayer.
              </p>
              <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', request: '', private: false }) }}
                className="btn-outline mt-6">Submit Another Request</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-xl p-8"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold" style={{ color: 'var(--color-text)', fontFamily: 'Inter, system-ui' }}>Name</label>
                  <input type="text" placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="rounded-lg px-4 py-3 text-sm outline-none"
                    style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', color: 'var(--color-text)', fontFamily: 'Inter, system-ui' }} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold" style={{ color: 'var(--color-text)', fontFamily: 'Inter, system-ui' }}>Email</label>
                  <input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="rounded-lg px-4 py-3 text-sm outline-none"
                    style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', color: 'var(--color-text)', fontFamily: 'Inter, system-ui' }} />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold" style={{ color: 'var(--color-text)', fontFamily: 'Inter, system-ui' }}>Prayer Request</label>
                <textarea rows={6} placeholder="Share your prayer need..." value={form.request}
                  onChange={e => setForm(f => ({ ...f, request: e.target.value }))} required
                  className="rounded-lg px-4 py-3 text-sm outline-none resize-none"
                  style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', color: 'var(--color-text)', fontFamily: 'Inter, system-ui' }} />
              </div>
              <label className="flex items-center gap-3 cursor-pointer" style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text)', fontSize: '0.875rem' }}>
                <input type="checkbox" checked={form.private} onChange={e => setForm(f => ({ ...f, private: e.target.checked }))}
                  className="w-4 h-4 rounded" style={{ accentColor: 'var(--color-primary)' }} />
                Keep this request private (shared only with our prayer team)
              </label>
              <button type="submit" className="btn-primary text-base py-4">Submit Prayer Request</button>
            </form>
          )}
        </div>
      </section>

      <section className="text-center px-4" style={{ background: 'var(--color-primary)', padding: '80px 32px' }}>
        <h2 className="font-playfair font-bold mb-4" style={{ fontSize: '2.25rem', color: '#fff' }}>Join Us in Prayer</h2>
        <p className="max-w-xl mx-auto mb-8" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.75)' }}>
          Join our Sunday gathering to experience corporate intercession and the presence of God together.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/gathering" className="btn-primary">Find a Gathering</Link>
          <Link href="/contact" className="btn-secondary">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
