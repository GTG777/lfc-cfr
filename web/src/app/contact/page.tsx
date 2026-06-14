'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Share2, Clock } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
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
          <Link href="/" style={{ color: 'var(--color-accent)' }}>Home</Link> <span className="mx-2">›</span> Contact
        </nav>
        <h1 className="font-playfair font-bold" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff' }}>Contact Us</h1>
        <p className="mt-3 max-w-xl" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.75)' }}>
          We would love to hear from you. Reach out for any reason — we are here to serve.
        </p>
      </section>

      <section style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <span className="section-label mb-3">Get in Touch</span>
              <h2 className="font-playfair font-bold mb-6" style={{ fontSize: '2rem', color: 'var(--color-text)' }}>
                We're Here for You
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { icon: <Phone size={20} />, label: 'Phone', value: '757.561.0737', href: 'tel:7575610737' },
                { icon: <Mail size={20} />, label: 'Email', value: 'lfccfr@gmail.com', href: 'mailto:lfccfr@gmail.com' },
                { icon: <MapPin size={20} />, label: 'Address', value: '5252 Olde Towne Rd., Suite C\nWilliamsburg, VA 23188', href: 'https://maps.google.com/?q=5252+Olde+Towne+Rd+Williamsburg+VA+23188' },
                { icon: <Share2 size={20} />, label: 'Facebook', value: 'facebook.com/lfcreconstruction', href: 'https://www.facebook.com/lfcreconstruction' },
                { icon: <Clock size={20} />, label: 'Service Time', value: 'Sundays at 10:00 AM', href: null },
              ].map(item => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-primary)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-0.5" style={{ color: 'var(--color-accent)', fontFamily: 'Inter, system-ui', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className="text-sm whitespace-pre-line hover:underline"
                        style={{ color: 'var(--color-text)', fontFamily: 'Inter, system-ui', lineHeight: 1.6 }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm" style={{ color: 'var(--color-text)', fontFamily: 'Inter, system-ui' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden h-48" style={{ border: '1px solid var(--color-border)' }}>
              <iframe
                title="LFC-CFR Location"
                src="https://maps.google.com/maps?q=5252+Olde+Towne+Rd+Williamsburg+VA+23188&output=embed"
                width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className="section-label mb-3">Send a Message</span>
            <h2 className="font-playfair font-bold mb-8" style={{ fontSize: '2rem', color: 'var(--color-text)' }}>
              How Can We Help?
            </h2>

            {submitted ? (
              <div className="rounded-xl p-12 text-center"
                style={{ background: 'var(--color-surface)', border: '2px solid var(--color-accent)' }}>
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="font-playfair font-bold text-2xl mb-3" style={{ color: 'var(--color-text)' }}>Message Received!</h3>
                <p style={{ color: 'var(--color-text-muted)', fontFamily: 'Inter, system-ui', lineHeight: 1.7 }}>
                  Thank you for reaching out. A member of our team will be in touch with you shortly.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                  className="btn-outline mt-6">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-xl p-8"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold" style={{ color: 'var(--color-text)', fontFamily: 'Inter, system-ui' }}>Full Name *</label>
                    <input type="text" required placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="rounded-lg px-4 py-3 text-sm outline-none"
                      style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', color: 'var(--color-text)', fontFamily: 'Inter, system-ui' }} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold" style={{ color: 'var(--color-text)', fontFamily: 'Inter, system-ui' }}>Email *</label>
                    <input type="email" required placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="rounded-lg px-4 py-3 text-sm outline-none"
                      style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', color: 'var(--color-text)', fontFamily: 'Inter, system-ui' }} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold" style={{ color: 'var(--color-text)', fontFamily: 'Inter, system-ui' }}>Phone</label>
                    <input type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="rounded-lg px-4 py-3 text-sm outline-none"
                      style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', color: 'var(--color-text)', fontFamily: 'Inter, system-ui' }} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold" style={{ color: 'var(--color-text)', fontFamily: 'Inter, system-ui' }}>Subject</label>
                    <select value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      className="rounded-lg px-4 py-3 text-sm outline-none"
                      style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', color: form.subject ? 'var(--color-text)' : 'var(--color-text-muted)', fontFamily: 'Inter, system-ui' }}>
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="prayer">Prayer Request</option>
                      <option value="giving">Giving & Tithing</option>
                      <option value="ministry">Ministry Partnership</option>
                      <option value="iaomai">Iaomai Wellness</option>
                      <option value="visit">Planning a Visit</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold" style={{ color: 'var(--color-text)', fontFamily: 'Inter, system-ui' }}>Message *</label>
                  <textarea rows={6} required placeholder="How can we help you?" value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="rounded-lg px-4 py-3 text-sm outline-none resize-none"
                    style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', color: 'var(--color-text)', fontFamily: 'Inter, system-ui' }} />
                </div>
                <button type="submit" className="btn-primary text-base py-4">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="text-center px-4" style={{ background: 'var(--color-primary)', padding: '80px 32px' }}>
        <h2 className="font-playfair font-bold mb-4" style={{ fontSize: '2.25rem', color: '#fff' }}>Join Us This Sunday</h2>
        <p className="max-w-xl mx-auto mb-8" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.75)' }}>
          The best way to get connected is to come worship with us. We meet every Sunday at 10:00 AM — in person and online.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/gathering" className="btn-primary">Ways to Gather</Link>
          <Link href="/prayer" className="btn-secondary">Submit Prayer</Link>
        </div>
      </section>
    </>
  )
}
