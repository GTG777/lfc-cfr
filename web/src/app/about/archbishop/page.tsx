import Link from 'next/link'
import { BookOpen, Shield, Globe } from 'lucide-react'

export default function ArchbishopPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center px-4 py-24"
        style={{ background: 'var(--color-primary)', minHeight: '40vh' }}>
        <nav className="text-xs mb-4" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.6)' }}>
          <Link href="/" style={{ color: 'var(--color-accent)' }}>Home</Link> <span className="mx-2">›</span>
          <Link href="/about" style={{ color: 'var(--color-accent)' }}>About</Link> <span className="mx-2">›</span>
          Archbishop Purnell
        </nav>
        <h1 className="font-playfair font-bold" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff' }}>Archbishop Edgar Purnell</h1>
        <p className="mt-3" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.75)' }}>
          Founder & Presiding Prelate — Labourers For Christ Center For Reconstruction
        </p>
      </section>

      <section style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col items-center gap-4">
            <div className="w-56 h-56 rounded-full flex items-center justify-center"
              style={{ background: 'var(--color-surface)', border: '4px solid var(--color-accent)' }}>
              <span className="font-playfair text-5xl font-bold" style={{ color: 'var(--color-primary)' }}>EP</span>
            </div>
            <h2 className="font-playfair font-bold text-xl" style={{ color: 'var(--color-text)' }}>Archbishop Edgar Purnell</h2>
            <span className="section-label text-center">Founder & Presiding Prelate</span>
          </div>

          <div>
            <span className="section-label mb-3">About the Archbishop</span>
            <h2 className="font-playfair font-bold mb-5" style={{ fontSize: '2rem', color: 'var(--color-text)' }}>
              A Builder of Kingdom Vision
            </h2>
            <p className="mb-4 leading-relaxed" style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text)', fontSize: '1.0625rem' }}>
              Archbishop Edgar Purnell is the founder and presiding prelate of Labourers For Christ Center For
              Reconstruction. Called by God to rebuild individuals, families, and communities, Archbishop Purnell
              has dedicated his ministry to the prophetic mandate of Isaiah 58:12 — raising up former devastations
              and restoring paths to dwell in.
            </p>
            <div className="scripture-block mb-5">
              <p>"And they shall rebuild the ancient ruins; they shall raise up the former devastations; they shall repair the ruined cities, the devastations of many generations."</p>
              <cite>— Isaiah 58:12</cite>
            </div>
            <p className="mb-6 leading-relaxed" style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text)', fontSize: '1.0625rem' }}>
              Archbishop Purnell founded LFC-CFR with a vision for holistic Kingdom ministry — reaching not just
              souls, but addressing the social, economic, and spiritual dimensions of brokenness in communities.
              Under his leadership, LFC-CFR has launched multiple outreach initiatives, discipleship programs,
              and the Iaomai Wellness Initiative focused on whole-person healing.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">Contact Us</Link>
              <Link href="/prayer" className="btn-outline">Submit Prayer Request</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-surface)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <span className="section-label text-center block mb-10">Areas of Ministry</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: <BookOpen size={28} />, title: 'Apostolic Teaching', desc: 'Grounding believers in sound doctrine and Kingdom principles.' },
              { icon: <Shield size={28} />, title: 'Prophetic Leadership', desc: 'Providing vision and direction for the body of Christ.' },
              { icon: <Globe size={28} />, title: 'Community Transformation', desc: 'Rebuilding cities and regions through the power of the Gospel.' },
            ].map(item => (
              <div key={item.title} className="rounded-lg p-6 text-center"
                style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'var(--color-primary)', color: 'var(--color-text-on-primary)' }}>
                  {item.icon}
                </div>
                <h3 className="font-playfair font-semibold mb-2" style={{ fontSize: '1.2rem', color: 'var(--color-text)' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)', fontFamily: 'Inter, system-ui', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center px-4" style={{ background: 'var(--color-primary)', padding: '80px 32px' }}>
        <p className="font-lora text-2xl max-w-2xl mx-auto mb-4" style={{ color: '#fff', lineHeight: 1.7 }}>
          "The mandate is clear — rebuild the ancient ruins, restore the paths to dwell in. This is not just a scripture; it is our assignment."
        </p>
        <p style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>— Archbishop Edgar Purnell</p>
      </section>
    </>
  )
}
