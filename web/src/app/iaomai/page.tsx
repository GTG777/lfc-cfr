import Link from 'next/link'
import { HeartPulse, Brain, Leaf, Users, Dumbbell, Apple } from 'lucide-react'

const pillars = [
  { icon: <HeartPulse size={28} />, title: 'Spiritual Healing', body: 'Addressing the spiritual roots of brokenness through prayer, deliverance ministry, and sound Biblical counsel.' },
  { icon: <Brain size={28} />, title: 'Mental & Emotional Wellness', body: 'Supporting mental health through faith-based counseling, support groups, and trauma-informed care principles.' },
  { icon: <Leaf size={28} />, title: 'Physical Restoration', body: 'Promoting physical wellness through nutrition education, exercise, and holistic health practices rooted in Kingdom values.' },
  { icon: <Users size={28} />, title: 'Community Support', body: 'Building peer support networks where people walk together through seasons of healing and restoration.' },
  { icon: <Dumbbell size={28} />, title: 'Strength & Resilience', body: 'Equipping individuals with tools for long-term resilience — physically, emotionally, and spiritually.' },
  { icon: <Apple size={28} />, title: 'Nutrition & Nourishment', body: 'Teaching Kingdom stewardship of the body through practical wellness, healthy habits, and wholesome living.' },
]

export default function IaomaiPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center px-4 py-24"
        style={{ background: 'var(--color-primary)', minHeight: '50vh' }}>
        <nav className="text-xs mb-4" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.6)' }}>
          <Link href="/" style={{ color: 'var(--color-accent)' }}>Home</Link> <span className="mx-2">›</span> Iaomai
        </nav>
        <span className="section-label mb-4" style={{ color: 'var(--color-accent)' }}>Wholistic Healing Initiative</span>
        <h1 className="font-playfair font-bold" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#fff' }}>Iaomai Wellness Initiative</h1>
        <p className="mt-4 max-w-2xl text-lg" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.8)' }}>
          <em>Iaomai</em> — Greek for "to heal." Whole-person restoration for spirit, soul, and body.
        </p>
        <div className="scripture-block max-w-xl mt-8 text-left">
          <p style={{ color: 'rgba(255,255,255,0.9)' }}>"Beloved, I pray that all may go well with you and that you may be in good health, as it goes well with your soul."</p>
          <cite style={{ color: 'rgba(255,255,255,0.6)' }}>— 3 John 1:2</cite>
        </div>
      </section>

      <section style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center mb-16">
          <span className="section-label mb-3">Our Philosophy</span>
          <h2 className="font-playfair font-bold mb-6" style={{ fontSize: '2.25rem', color: 'var(--color-text)' }}>
            Healing the Whole Person
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text)', lineHeight: 1.9, fontSize: '1.0625rem' }}>
            The Iaomai Wellness Initiative was born from the conviction that true Kingdom healing is never partial.
            God's redemption extends to every dimension of human existence — our spirits, our minds, our emotions, and our bodies.
            Iaomai provides a community and framework for people to pursue wholeness rooted in the grace and power of Jesus Christ.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <span className="section-label text-center block mb-10">Six Pillars of Wellness</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map(p => (
              <div key={p.title} className="card-hover rounded-lg p-8 flex flex-col gap-4"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--color-primary)', color: 'var(--color-text-on-primary)' }}>
                  {p.icon}
                </div>
                <h3 className="font-playfair font-semibold" style={{ fontSize: '1.2rem', color: 'var(--color-text)' }}>{p.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)', fontFamily: 'Inter, system-ui', lineHeight: 1.7 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-surface)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-xl h-72 flex items-center justify-center order-2 lg:order-1"
            style={{ background: 'var(--color-bg)', border: '2px solid var(--color-border)' }}>
            <p className="font-playfair text-lg" style={{ color: 'var(--color-text-muted)' }}>Wellness Program Image</p>
          </div>
          <div className="order-1 lg:order-2">
            <span className="section-label mb-3">Getting Involved</span>
            <h2 className="font-playfair font-bold mb-5" style={{ fontSize: '2rem', color: 'var(--color-text)' }}>
              Join the Iaomai Community
            </h2>
            <p className="mb-4" style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text)', lineHeight: 1.8 }}>
              Whether you are walking through a season of personal healing, looking to support others on their wellness journey,
              or seeking resources for whole-person health — Iaomai has a place for you.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {['Monthly wellness workshops and teaching sessions', 'One-on-one prayer and pastoral support', 'Community health resource referrals', 'Small group support circles'].map(item => (
                <li key={item} className="flex items-start gap-3" style={{ fontFamily: 'Inter, system-ui', color: 'var(--color-text)', fontSize: '0.9375rem' }}>
                  <span className="mt-1 text-sm font-bold" style={{ color: 'var(--color-accent)' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">Get Connected</Link>
              <Link href="/prayer" className="btn-outline">Request Prayer</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center px-4" style={{ background: 'var(--color-primary)', padding: '80px 32px' }}>
        <p className="font-lora text-2xl max-w-2xl mx-auto mb-4" style={{ color: '#fff', lineHeight: 1.7 }}>
          "He sent out his word and healed them, and delivered them from their destruction."
        </p>
        <p className="mb-8" style={{ fontFamily: 'Inter, system-ui', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>— Psalm 107:20</p>
        <Link href="/contact" className="btn-primary">Begin Your Healing Journey</Link>
      </section>
    </>
  )
}
