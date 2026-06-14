import Link from 'next/link'
import { Zap, Gem, Flame, HandHeart, HeartPulse, Globe, MapPin, Monitor, Share2 } from 'lucide-react'

const ministries = [
  { icon: <Zap size={28} />, name: 'I AM the Storm', badge: "Men's Ministry", desc: 'Called to walk in Kingdom authority, identity, and purpose.' },
  { icon: <Gem size={28} />, name: "Ruby's Gems", badge: "Women's Ministry", desc: 'Empowering women to discover their identity and calling in Christ.' },
  { icon: <Flame size={28} />, name: '7 Days Dead', badge: 'Fasting Ministry', desc: 'Radical consecration — seven days of fasting, prayer, and transformation.' },
  { icon: <HandHeart size={28} />, name: 'Wailing Wall', badge: 'Intercession', desc: 'Standing in the gap for individuals, families, and nations.' },
  { icon: <HeartPulse size={28} />, name: 'Iaomai Wellness', badge: 'Wholistic Health', desc: 'Whole-person healing — spirit, soul, and body.' },
  { icon: <Globe size={28} />, name: 'Community Outreach', badge: 'Mercy Ministry', desc: 'Reaching neighbors with practical love and Gospel witness.' },
]

const events = [
  { date: 'SUN', label: 'Building Block Sundays', time: 'Sundays · 10 AM', place: 'Zoom & In-Person' },
  { date: 'SUN', label: 'Facebook Live Broadcast', time: 'Sundays · 10 AM', place: 'facebook.com/lfcreconstruction' },
  { date: 'WED', label: 'Corporate Fasting & Prayer', time: 'Wednesday Evenings', place: 'Zoom' },
  { date: 'ANN', label: 'Resurrection Sunday', time: 'Annual Celebration', place: 'In-Person' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 min-h-[92vh]"
        style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div style={{ width: 48, height: 3, background: 'var(--color-accent)', borderRadius: 2 }} />
          <h1 className="font-playfair font-bold leading-tight"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', color: '#fff' }}>
            Rebuilding People and Cities for A Path of Kingdom Destiny!
          </h1>
          <p style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.8)', fontSize: '1.125rem' }}>
            Labourers For Christ Center For Reconstruction — Williamsburg, VA
          </p>
          <p className="font-lora" style={{ color: 'var(--color-accent)', fontSize: '1.1rem', maxWidth: 600 }}>
            "They shall rebuild the ancient ruins, they shall raise up the former devastations..."
            <cite style={{ display: 'block', fontStyle: 'normal', fontFamily: 'Inter, system-ui', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.25rem' }}>— Isaiah 58:12</cite>
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Link href="/gathering" className="btn-primary">Join Us Sunday</Link>
            <Link href="/gathering" className="btn-secondary">Watch Online</Link>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section style={{ background: 'var(--color-surface)', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <span className="section-label mb-3">Upcoming Events</span>
          <h2 className="font-playfair font-bold mb-10" style={{ fontSize: '2.25rem', color: 'var(--color-text)' }}>
            Gather With Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map(e => (
              <div key={e.label} className="card-hover rounded-lg p-6 flex flex-col gap-3"
                style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
                <span className="inline-block text-xs font-bold px-2 py-1 rounded self-start"
                  style={{ background: 'var(--color-primary)', color: 'var(--color-text-on-primary)', fontFamily: 'Inter, system-ui', letterSpacing: '0.1em' }}>
                  {e.date}
                </span>
                <h3 className="font-playfair font-semibold" style={{ fontSize: '1.1rem', color: 'var(--color-text)' }}>
                  {e.label}
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)', fontFamily: 'Inter, system-ui' }}>{e.time}</p>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)', fontFamily: 'Inter, system-ui' }}>{e.place}</p>
                <Link href="/gathering" className="text-sm font-semibold mt-auto"
                  style={{ color: 'var(--color-accent)', fontFamily: 'Inter, system-ui' }}>
                  Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ background: 'var(--color-bg)', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label mb-3">About LFC-CFR</span>
            <h2 className="font-playfair font-bold mb-6" style={{ fontSize: '2.25rem', color: 'var(--color-text)' }}>
              Walking in Kingdom Authority
            </h2>
            <p className="mb-6 leading-relaxed" style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text)', fontSize: '1.0625rem' }}>
              Labourers For Christ Center For Reconstruction is an apostolic ministry dedicated to rebuilding
              individuals, families, and communities through the transforming power of the Gospel. We are
              stationed in Williamsburg, VA and serve the region through teaching, intercession, outreach,
              and discipleship.
            </p>
            <div className="scripture-block mb-6">
              <p>"And they shall rebuild the ancient ruins; they shall raise up the former devastations; they shall repair the ruined cities."</p>
              <cite>— Isaiah 58:12</cite>
            </div>
            <Link href="/about" className="btn-outline">Learn About Us →</Link>
          </div>
          <div className="rounded-xl h-80 flex items-center justify-center"
            style={{ background: 'var(--color-surface)', border: '2px solid var(--color-border)' }}>
            <p className="font-playfair text-xl" style={{ color: 'var(--color-text-muted)' }}>Ministry Photo</p>
          </div>
        </div>
      </section>

      {/* MINISTRIES */}
      <section style={{ background: 'var(--color-surface)', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <span className="section-label mb-3">Our Ministries</span>
          <h2 className="font-playfair font-bold mb-10" style={{ fontSize: '2.25rem', color: 'var(--color-text)' }}>
            Kingdom Work in Every Sphere
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map(m => (
              <div key={m.name} className="card-hover rounded-lg p-6 flex flex-col gap-4"
                style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--color-primary)', color: 'var(--color-text-on-primary)' }}>
                  {m.icon}
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest mb-1 block"
                    style={{ color: 'var(--color-accent)', fontFamily: 'Inter, system-ui' }}>{m.badge}</span>
                  <h3 className="font-playfair font-semibold" style={{ fontSize: '1.25rem', color: 'var(--color-text)' }}>{m.name}</h3>
                </div>
                <p className="text-sm flex-1" style={{ color: 'var(--color-text-muted)', fontFamily: 'Inter, system-ui', lineHeight: 1.6 }}>{m.desc}</p>
                <Link href="/outreach" className="text-sm font-semibold"
                  style={{ color: 'var(--color-accent)', fontFamily: 'Inter, system-ui' }}>
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN US */}
      <section style={{ background: 'var(--color-bg)', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <span className="section-label mb-3">How to Join Us</span>
          <h2 className="font-playfair font-bold mb-12" style={{ fontSize: '2.25rem', color: 'var(--color-text)' }}>
            Gather Where You Are
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: <MapPin size={32} />, title: 'In-Person', lines: ['5252 Olde Towne Rd., Suite C', 'Williamsburg, VA 23188'] },
              { icon: <Share2 size={32} />, title: 'Facebook Live', lines: ['@lfcreconstruction', 'Every Sunday · 10 AM'] },
              { icon: <Monitor size={32} />, title: 'Zoom', lines: ['Meeting ID: 882 3700 5419', 'Sundays · 10 AM'] },
            ].map(col => (
              <div key={col.title} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                  style={{ background: 'var(--color-surface)', color: 'var(--color-primary)' }}>
                  {col.icon}
                </div>
                <h3 className="font-playfair font-semibold text-xl" style={{ color: 'var(--color-text)' }}>{col.title}</h3>
                {col.lines.map(l => (
                  <p key={l} className="text-sm" style={{ color: 'var(--color-text-muted)', fontFamily: 'Inter, system-ui' }}>{l}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GIVING BANNER */}
      <section className="text-center" style={{ background: 'var(--color-primary)', padding: '96px 32px' }}>
        <span className="section-label mb-4" style={{ color: 'var(--color-accent)' }}>Support the Work</span>
        <h2 className="font-playfair font-bold mb-4" style={{ fontSize: '2.5rem', color: '#fff' }}>
          Partner With the Kingdom Vision
        </h2>
        <p className="mb-8 max-w-xl mx-auto" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.75)', fontSize: '1.0625rem' }}>
          Your generous gifts fuel ministry, outreach, and community transformation across Williamsburg and beyond.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/giving" className="btn-primary">Give Online</Link>
          <Link href="/giving" className="btn-secondary">Cash App $LFCCFR</Link>
        </div>
      </section>

      {/* PRAYER CTA */}
      <section className="text-center" style={{ background: 'var(--color-surface)', padding: '80px 32px' }}>
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: 'var(--color-primary)', color: 'var(--color-text-on-primary)' }}>
          <HandHeart size={32} />
        </div>
        <h2 className="font-playfair font-bold mb-3" style={{ fontSize: '2rem', color: 'var(--color-text)' }}>
          Submit a Prayer Request
        </h2>
        <p className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text-muted)' }}>
          Our Wailing Wall Ministry stands in intercession. Share your need and our prayer team will cover you.
        </p>
        <Link href="/prayer" className="btn-primary">Submit Prayer Request →</Link>
      </section>
    </>
  )
}
