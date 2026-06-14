import Link from 'next/link'
import { Building2, Share2, Monitor } from 'lucide-react'

export default function GatheringPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center px-4 py-24"
        style={{ background: 'var(--color-primary)', minHeight: '45vh' }}>
        <nav className="text-xs mb-4" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.6)' }}>
          <Link href="/" style={{ color: 'var(--color-accent)' }}>Home</Link> <span className="mx-2">›</span> Gathering
        </nav>
        <h1 className="font-playfair font-bold" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff' }}>Church Gathering</h1>
        <p className="mt-3 max-w-xl" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.75)' }}>
          Join us where you are — in person, on Facebook, or via Zoom
        </p>
      </section>

      <section style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <span className="section-label mb-3">Join Us</span>
          <h2 className="font-playfair font-bold mb-10" style={{ fontSize: '2.25rem', color: 'var(--color-text)' }}>Ways to Gather</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: <Building2 size={32} />, badge: 'IN-PERSON', title: 'Building Block Sundays', body: 'Join us in person at our Williamsburg location.', sub: '5252 Olde Towne Rd., Suite C\nWilliamsburg, VA 23188', cta: 'Get Directions', href: 'https://maps.google.com' },
              { icon: <Share2 size={32} />, badge: 'ONLINE', title: 'Facebook Live Broadcast', body: 'Watch our Sunday morning service live on Facebook. Every Sunday at 10 AM.', sub: 'facebook.com/lfcreconstruction', cta: 'Watch on Facebook', href: 'https://www.facebook.com/lfcreconstruction' },
              { icon: <Monitor size={32} />, badge: 'VIRTUAL', title: 'Join on Zoom', body: 'Connect virtually via Zoom for our gatherings and prayer meetings.', sub: 'Meeting ID: 882 3700 5419', cta: 'Join Zoom Meeting', href: 'https://us02web.zoom.us/j/88237005419?pwd=VkVxWlF1TXNvcGY4cFp1SGpEc2VCZz09' },
            ].map(card => (
              <div key={card.title} className="card-hover rounded-lg p-8 flex flex-col gap-4"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--color-primary)', color: 'var(--color-text-on-primary)' }}>
                  {card.icon}
                </div>
                <span className="section-label">{card.badge}</span>
                <h3 className="font-playfair font-semibold" style={{ fontSize: '1.3rem', color: 'var(--color-text)' }}>{card.title}</h3>
                <p style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text-muted)', fontSize: '0.9375rem', lineHeight: 1.6 }}>{card.body}</p>
                <p className="text-sm whitespace-pre-line" style={{ color: 'var(--color-text-muted)', fontFamily: 'Inter, system-ui' }}>{card.sub}</p>
                <a href={card.href} target="_blank" rel="noopener noreferrer" className="btn-primary mt-auto">{card.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-surface)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label mb-3">Featured Gathering</span>
            <h2 className="font-playfair font-bold mb-5" style={{ fontSize: '2rem', color: 'var(--color-text)' }}>Building Block Sundays</h2>
            <p className="mb-6" style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text)', lineHeight: 1.8 }}>
              Building Block Sundays are our weekly foundation gathering — where the Word of God is taught,
              worship flows freely, and believers are equipped for Kingdom work. Every Sunday is designed
              to be a building block in your spiritual journey.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[['🕙', 'Sundays', '10:00 AM'], ['📅', 'Every Week', 'Year-round'], ['💻', 'In-Person', '& Online']].map(([icon, label, sub]) => (
                <div key={label} className="text-center rounded-lg p-4"
                  style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
                  <div className="text-2xl mb-1">{icon}</div>
                  <p className="text-xs font-semibold" style={{ color: 'var(--color-text)', fontFamily: 'Inter, system-ui' }}>{label}</p>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)', fontFamily: 'Inter, system-ui' }}>{sub}</p>
                </div>
              ))}
            </div>
            <div className="scripture-block">
              <p>"Not forsaking the assembling of ourselves together... but exhorting one another."</p>
              <cite>— Hebrews 10:25</cite>
            </div>
          </div>
          <div className="rounded-xl h-72 flex items-center justify-center"
            style={{ background: 'var(--color-bg)', border: '2px solid var(--color-border)' }}>
            <p className="font-playfair text-lg" style={{ color: 'var(--color-text-muted)' }}>Gathering Photo</p>
          </div>
        </div>
      </section>

      <section className="text-center px-4" style={{ background: 'var(--color-primary)', padding: '80px 32px' }}>
        <span className="section-label mb-4 block" style={{ color: 'var(--color-accent)' }}>Annual Celebration</span>
        <h2 className="font-playfair font-bold mb-4" style={{ fontSize: '2.25rem', color: '#fff' }}>Resurrection Sunday</h2>
        <p className="max-w-xl mx-auto mb-8" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
          Our annual Resurrection Sunday celebration is the crown jewel of our worship calendar — a glorious
          celebration of the risen Christ that draws our entire community together.
        </p>
        <Link href="/contact" className="btn-primary">Get Event Updates</Link>
      </section>
    </>
  )
}
