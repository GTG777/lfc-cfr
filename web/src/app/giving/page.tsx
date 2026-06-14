import Link from 'next/link'
import { CreditCard, Smartphone, Mail, Heart, Globe, Building } from 'lucide-react'

export default function GivingPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center px-4 py-24"
        style={{ background: 'var(--color-primary)', minHeight: '45vh' }}>
        <nav className="text-xs mb-4" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.6)' }}>
          <Link href="/" style={{ color: 'var(--color-accent)' }}>Home</Link> <span className="mx-2">›</span> Give
        </nav>
        <h1 className="font-playfair font-bold" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff' }}>Give to the Kingdom Work</h1>
        <p className="mt-3 max-w-xl" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.75)' }}>
          Your generosity fuels ministry, outreach, and community transformation.
        </p>
        <div className="scripture-block max-w-xl mt-8 text-left" style={{ borderColor: 'var(--color-accent)' }}>
          <p style={{ color: 'rgba(255,255,255,0.9)' }}>"Bring the whole tithe into the storehouse... and see if I will not throw open the floodgates of heaven."</p>
          <cite style={{ color: 'rgba(255,255,255,0.6)' }}>— Malachi 3:10</cite>
        </div>
      </section>

      <section style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <span className="section-label text-center block mb-10">Giving Methods</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="card-hover rounded-lg p-8 text-center flex flex-col gap-4"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
                style={{ background: 'var(--color-primary)', color: 'var(--color-text-on-primary)' }}>
                <CreditCard size={28} />
              </div>
              <span className="section-label">Give Online</span>
              <h3 className="font-playfair font-semibold text-xl" style={{ color: 'var(--color-text)' }}>Secure Online Giving</h3>
              <p style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text-muted)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                One-time or recurring giving available. Securely processed online.
              </p>
              <a href="#" className="btn-primary mt-auto">Give Now</a>
            </div>

            <div className="card-hover rounded-lg p-8 text-center flex flex-col gap-4"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
                style={{ background: 'var(--color-primary)', color: 'var(--color-text-on-primary)' }}>
                <Smartphone size={28} />
              </div>
              <span className="section-label">Cash App</span>
              <h3 className="font-playfair font-semibold text-xl" style={{ color: 'var(--color-text)' }}>$LFCCFR</h3>
              <p className="font-bold text-3xl" style={{ color: 'var(--color-accent)', fontFamily: 'Inter, system-ui' }}>$LFCCFR</p>
              <p style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}>
                Search $LFCCFR in Cash App to give instantly.
              </p>
              <a href="https://cash.app/$LFCCFR" target="_blank" rel="noopener noreferrer" className="btn-primary mt-auto">Open Cash App</a>
            </div>

            <div className="card-hover rounded-lg p-8 text-center flex flex-col gap-4"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
                style={{ background: 'var(--color-primary)', color: 'var(--color-text-on-primary)' }}>
                <Mail size={28} />
              </div>
              <span className="section-label">Mail a Check</span>
              <h3 className="font-playfair font-semibold text-xl" style={{ color: 'var(--color-text)' }}>By Mail</h3>
              <p style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text-muted)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                Make checks payable to <strong>LFC-CFR</strong> and mail to:<br />
                5252 Olde Towne Rd., Suite C<br />Williamsburg, VA 23188
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-surface)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <span className="section-label text-center block mb-10">Why We Give</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: <Heart size={28} />, title: 'Tithes & Offerings', body: 'Honor God with the first fruits of your increase. Tithing is an act of trust and worship.' },
              { icon: <Globe size={28} />, title: 'Outreach & Missions', body: 'Your gifts reach beyond our walls into the community, funding outreach and mercy ministry.' },
              { icon: <Building size={28} />, title: 'Ministry Operations', body: 'Supporting the infrastructure that makes discipleship, teaching, and transformation possible.' },
            ].map(item => (
              <div key={item.title} className="rounded-lg p-6 flex flex-col gap-4"
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
        </div>
      </section>

      <section className="text-center px-4" style={{ background: 'var(--color-primary)', padding: '80px 32px' }}>
        <h2 className="font-playfair font-bold mb-4" style={{ fontSize: '2.25rem', color: '#fff' }}>Your Gift Makes a Difference</h2>
        <p className="max-w-xl mx-auto mb-8" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.75)' }}>
          Every gift — large or small — advances the Kingdom mandate of rebuilding people and cities.
        </p>
        <a href="#" className="btn-primary">Give Now</a>
      </section>
    </>
  )
}
