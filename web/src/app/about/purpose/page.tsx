import Link from 'next/link'

const principles = [
  { n: 1, title: 'The Holy Scriptures', body: 'We believe the Bible is the inspired, infallible Word of God and the supreme authority for faith and practice.' },
  { n: 2, title: 'The Triune God', body: 'We believe in one God eternally existing as Father, Son, and Holy Spirit — co-equal, co-eternal, and co-existent.' },
  { n: 3, title: 'The Lord Jesus Christ', body: 'We believe in the deity of Jesus Christ, His virgin birth, sinless life, atoning death, bodily resurrection, and coming return.' },
  { n: 4, title: 'Salvation by Grace', body: 'We believe salvation is by grace through faith in Jesus Christ alone, not by works or human merit.' },
  { n: 5, title: 'The Holy Spirit', body: 'We believe in the present-day ministry of the Holy Spirit, including the gifts of the Spirit for the edification of the church.' },
  { n: 6, title: 'The Church', body: 'We believe the Church is the Body of Christ, called to make disciples of all nations through preaching, teaching, and compassionate service.' },
  { n: 7, title: 'The Kingdom of God', body: 'We believe the Kingdom of God is both present and coming — advancing now through the Church and to be fully established at Christ\'s return.' },
  { n: 8, title: 'Restoration & Healing', body: 'We believe God\'s will is for wholeness — spirit, soul, and body — and that restoration is available through Christ Jesus.' },
]

export default function PurposePage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center px-4 py-24"
        style={{ background: 'var(--color-primary)', minHeight: '40vh' }}>
        <nav className="text-xs mb-4" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.6)' }}>
          <Link href="/" style={{ color: 'var(--color-accent)' }}>Home</Link> <span className="mx-2">›</span>
          <Link href="/about" style={{ color: 'var(--color-accent)' }}>About</Link> <span className="mx-2">›</span>
          Our Purpose
        </nav>
        <div style={{ width: 48, height: 3, background: 'var(--color-accent)', borderRadius: 2, margin: '0 auto 1.5rem' }} />
        <h1 className="font-playfair font-bold" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff' }}>Our Purpose &amp; Faith Principles</h1>
        <p className="mt-3 max-w-2xl" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.75)' }}>
          The theological and missional foundation of Labourers For Christ Center For Reconstruction
        </p>
      </section>

      <section style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
          <span className="section-label mb-3">Our Mission</span>
          <h2 className="font-playfair font-bold mb-6" style={{ fontSize: '2.25rem', color: 'var(--color-text)' }}>
            Rebuilding People and Cities
          </h2>
          <p className="mb-8 leading-relaxed" style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text)', fontSize: '1.0625rem' }}>
            Labourers For Christ Center For Reconstruction exists to rebuild individuals, families, and communities
            for a path of Kingdom destiny. We are called to the prophetic mandate of Isaiah 58:12 — to raise up
            former devastations, to repair the breach, and to restore paths to dwell in.
          </p>
          <div className="scripture-block text-left">
            <p>"They shall rebuild the ancient ruins; they shall raise up the former devastations; they shall repair the ruined cities, the devastations of many generations."</p>
            <cite>— Isaiah 58:12</cite>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-surface)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-lg p-8" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
            <span className="section-label mb-3">The Vision</span>
            <h3 className="font-playfair font-bold mb-4" style={{ fontSize: '1.5rem', color: 'var(--color-text)' }}>Kingdom Community</h3>
            <p style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text)', lineHeight: 1.8 }}>
              To establish a Kingdom community that reflects the character of Christ in every sphere of life — family,
              education, business, government, arts, media, and church.
            </p>
          </div>
          <div className="rounded-lg p-8" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
            <span className="section-label mb-3">The Mandate</span>
            <h3 className="font-playfair font-bold mb-4" style={{ fontSize: '1.5rem', color: 'var(--color-text)' }}>Raise Up Labourers</h3>
            <p style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text)', lineHeight: 1.8 }}>
              To raise up labourers who are equipped, empowered, and deployed to rebuild broken lives, broken homes,
              and broken communities through the transforming power of the Gospel.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <span className="section-label text-center block mb-3">What We Believe</span>
          <h2 className="font-playfair font-bold text-center mb-12" style={{ fontSize: '2.25rem', color: 'var(--color-text)' }}>
            Our Faith Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map(p => (
              <div key={p.n} className="card-hover rounded-lg p-6"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'var(--color-primary)', color: 'var(--color-text-on-primary)', fontFamily: 'Inter, system-ui', fontWeight: 700 }}>
                  {p.n}
                </div>
                <h3 className="font-playfair font-semibold mb-2" style={{ fontSize: '1.05rem', color: 'var(--color-text)' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)', fontFamily: 'Inter, system-ui' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center px-4" style={{ background: 'var(--color-primary)', padding: '80px 32px' }}>
        <span className="section-label mb-4 block" style={{ color: 'var(--color-accent)' }}>Our Foundation</span>
        <h2 className="font-playfair font-bold mb-4" style={{ fontSize: '2.25rem', color: '#fff' }}>An Apostolic Community</h2>
        <p className="max-w-2xl mx-auto mb-6" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
          LFC-CFR is an apostolic ministry — rooted in the foundational truths of the apostles and prophets,
          with Jesus Christ as our chief cornerstone.
        </p>
        <div className="scripture-block max-w-xl mx-auto text-left">
          <p>"Built on the foundation of the apostles and prophets, Jesus Christ himself being the chief cornerstone."</p>
          <cite>— Ephesians 2:20</cite>
        </div>
      </section>
    </>
  )
}
