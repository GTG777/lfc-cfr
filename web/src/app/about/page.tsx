import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center px-4 py-24"
        style={{ background: 'var(--color-primary)', minHeight: '40vh' }}>
        <nav className="text-xs mb-4" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.6)' }}>
          <Link href="/" style={{ color: 'var(--color-accent)' }}>Home</Link> <span className="mx-2">›</span> About
        </nav>
        <h1 className="font-playfair font-bold" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff' }}>About LFC-CFR</h1>
        <p className="mt-3 max-w-xl" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.75)' }}>
          Meet our leadership and learn the mission, vision, and faith principles that ground everything we do.
        </p>
      </section>

      <section style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Archbishop Edgar Purnell', role: 'Founder & Presiding Prelate', href: '/about/archbishop', desc: 'Called by God to rebuild individuals, families, and communities through the power of the Gospel.' },
            { title: 'Our Purpose', role: 'Mission & Vision', href: '/about/purpose', desc: 'Rooted in Isaiah 58:12 — to rebuild ancient ruins and restore paths to dwell in.' },
            { title: 'Our Faith Principles', role: 'What We Believe', href: '/about/purpose', desc: 'The biblical foundations of faith that guide our doctrine, practice, and community life.' },
          ].map(card => (
            <Link key={card.title} href={card.href}
              className="card-hover rounded-lg p-8 flex flex-col gap-4 no-underline"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <span className="section-label">{card.role}</span>
              <h2 className="font-playfair font-semibold" style={{ fontSize: '1.4rem', color: 'var(--color-text)' }}>{card.title}</h2>
              <p style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text-muted)', fontSize: '0.9375rem', lineHeight: 1.6 }}>{card.desc}</p>
              <span className="text-sm font-semibold mt-auto" style={{ color: 'var(--color-accent)', fontFamily: 'Inter, system-ui' }}>Learn More →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
