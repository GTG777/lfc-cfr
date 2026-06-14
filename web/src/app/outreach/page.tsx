import Link from 'next/link'
import { Zap, Gem, Flame, HandHeart, HeartPulse, Globe } from 'lucide-react'

const ministries = [
  { icon: <Zap size={28} />, name: 'I AM the Storm', badge: "Men's Ministry", desc: 'A ministry for men called to walk in Kingdom authority, identity, and purpose. Breaking cycles, building legacy.' },
  { icon: <Gem size={28} />, name: "Ruby's Gems", badge: "Women's Ministry", desc: 'Empowering women to discover their identity, worth, and calling in Christ. You are more precious than rubies. Proverbs 31:10' },
  { icon: <Flame size={28} />, name: '7 Days Dead', badge: 'Fasting Ministry', desc: 'A radical consecration ministry rooted in death to self and resurrection life. Seven days of fasting, prayer, and transformation.' },
  { icon: <HandHeart size={28} />, name: 'Wailing Wall Ministry', badge: 'Intercession', desc: 'Our intercessory prayer team that stands in the gap for individuals, families, and nations.' },
  { icon: <HeartPulse size={28} />, name: 'Iaomai Wellness', badge: 'Wholistic Health', desc: 'Whole-person healing — spirit, soul, and body. Iaomai (Greek: to heal) is our initiative for community wellness and restoration.' },
  { icon: <Globe size={28} />, name: 'Community Outreach', badge: 'Mercy Ministry', desc: 'Reaching our neighbors with practical love and Gospel witness through food ministry, resource connection, and community service.' },
]

export default function OutreachPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center px-4 py-24"
        style={{ background: 'var(--color-primary)', minHeight: '45vh' }}>
        <nav className="text-xs mb-4" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.6)' }}>
          <Link href="/" style={{ color: 'var(--color-accent)' }}>Home</Link> <span className="mx-2">›</span> Outreach
        </nav>
        <h1 className="font-playfair font-bold" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff' }}>Outreach &amp; Ministries</h1>
        <p className="mt-3 max-w-xl" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.75)' }}>
          Extending the Kingdom beyond the walls of the church into every sphere of community life.
        </p>
      </section>

      <section style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <span className="section-label text-center block mb-10">Kingdom Work</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map(m => (
              <div key={m.name} className="card-hover rounded-lg p-8 flex flex-col gap-4"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--color-primary)', color: 'var(--color-text-on-primary)' }}>
                  {m.icon}
                </div>
                <div>
                  <span className="section-label mb-1">{m.badge}</span>
                  <h3 className="font-playfair font-semibold" style={{ fontSize: '1.3rem', color: 'var(--color-text)' }}>{m.name}</h3>
                </div>
                <p className="text-sm flex-1" style={{ color: 'var(--color-text-muted)', fontFamily: 'Inter, system-ui', lineHeight: 1.7 }}>{m.desc}</p>
                <Link href={m.name.includes('Wailing') ? '/prayer' : m.name.includes('Iaomai') ? '/iaomai' : '#'}
                  className="text-sm font-semibold" style={{ color: 'var(--color-accent)', fontFamily: 'Inter, system-ui' }}>
                  {m.name.includes('Wailing') ? 'Submit Prayer →' : 'Learn More →'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center px-4" style={{ background: 'var(--color-primary)', padding: '80px 32px' }}>
        <p className="font-lora text-2xl max-w-2xl mx-auto mb-4" style={{ color: '#fff', lineHeight: 1.7 }}>
          "The Kingdom of God is not just a Sunday experience — it is a daily transformation that reaches every broken place in our community."
        </p>
        <p style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>— Archbishop Edgar Purnell</p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Link href="/contact" className="btn-primary">Get Involved</Link>
          <Link href="/giving" className="btn-secondary">Give to Outreach</Link>
        </div>
      </section>
    </>
  )
}
