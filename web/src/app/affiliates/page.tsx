import Link from 'next/link'
import { Globe, Link as LinkIcon, BookOpen } from 'lucide-react'

const affiliates = [
  {
    category: 'Apostolic Network',
    items: [
      { name: 'International Communion of Evangelical Churches (ICEC)', desc: 'A global network of apostolic ministries united in the mission of Kingdom transformation and church planting.' },
      { name: 'Coalition of Apostles', desc: 'A gathering of recognized apostolic leaders committed to the advancing of the Kingdom through alignment, accountability, and collaborative ministry.' },
    ],
  },
  {
    category: 'Ministry Partnerships',
    items: [
      { name: 'Kingdom Builders Network', desc: 'A network of Kingdom-minded ministries and organizations partnering for community development, education, and economic empowerment.' },
      { name: 'Restoration Alliance', desc: 'Partner ministries united around the shared mandate of rebuilding families, restoring communities, and reforming culture.' },
    ],
  },
]

export default function AffiliatesPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center px-4 py-24"
        style={{ background: 'var(--color-primary)', minHeight: '45vh' }}>
        <nav className="text-xs mb-4" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.6)' }}>
          <Link href="/" style={{ color: 'var(--color-accent)' }}>Home</Link> <span className="mx-2">›</span> Affiliates
        </nav>
        <h1 className="font-playfair font-bold" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff' }}>Affiliate Organizations</h1>
        <p className="mt-3 max-w-xl" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.75)' }}>
          Partners and networks united with LFC-CFR in the mission of Kingdom reconstruction.
        </p>
      </section>

      <section style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center mb-16">
          <span className="section-label mb-3">Kingdom Alignment</span>
          <h2 className="font-playfair font-bold mb-6" style={{ fontSize: '2.25rem', color: 'var(--color-text)' }}>
            Stronger Together
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text)', lineHeight: 1.9, fontSize: '1.0625rem' }}>
            LFC-CFR is not an island — we are part of a broader apostolic movement. Through covenant relationships and ministry networks,
            we partner with organizations who share our DNA of Kingdom reconstruction, apostolic authority, and community transformation.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-12">
          {affiliates.map(group => (
            <div key={group.category}>
              <span className="section-label mb-6 block">{group.category}</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {group.items.map(item => (
                  <div key={item.name} className="card-hover rounded-lg p-8 flex flex-col gap-4"
                    style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: 'var(--color-primary)', color: 'var(--color-text-on-primary)' }}>
                      <Globe size={24} />
                    </div>
                    <h3 className="font-playfair font-semibold" style={{ fontSize: '1.15rem', color: 'var(--color-text)' }}>{item.name}</h3>
                    <p className="text-sm" style={{ color: 'var(--color-text-muted)', fontFamily: 'Inter, system-ui', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--color-surface)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: <LinkIcon size={28} />, title: 'Apostolic Alignment', body: 'We are committed to walking in covenant relationship with proven apostolic fathers and the broader body of Christ.' },
            { icon: <Globe size={28} />, title: 'Global Reach', body: 'Through our affiliate networks, LFC-CFR\'s impact extends beyond Williamsburg into national and international Kingdom work.' },
            { icon: <BookOpen size={28} />, title: 'Shared Values', body: 'All affiliates share our core commitment to Scripture, apostolic foundations, community transformation, and excellence in ministry.' },
          ].map(item => (
            <div key={item.title} className="rounded-lg p-8 flex flex-col gap-4"
              style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: 'var(--color-primary)', color: 'var(--color-text-on-primary)' }}>
                {item.icon}
              </div>
              <h3 className="font-playfair font-semibold" style={{ fontSize: '1.2rem', color: 'var(--color-text)' }}>{item.title}</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)', fontFamily: 'Inter, system-ui', lineHeight: 1.7 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center px-4" style={{ background: 'var(--color-primary)', padding: '80px 32px' }}>
        <h2 className="font-playfair font-bold mb-4" style={{ fontSize: '2.25rem', color: '#fff' }}>Partner With Us</h2>
        <p className="max-w-xl mx-auto mb-8" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.75)' }}>
          Is your ministry or organization aligned with the Kingdom reconstruction mandate? We would love to explore covenant partnership.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="btn-primary">Connect With Us</Link>
          <Link href="/about/purpose" className="btn-secondary">Our Purpose</Link>
        </div>
      </section>
    </>
  )
}
