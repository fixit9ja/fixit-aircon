import Layout from '../components/Layout';
import Link from 'next/link';
import s from './index.module.css';

const STATS = [
  { n: '500+', l: 'Units Installed' },
  { n: '8+',   l: 'Years Experience' },
  { n: '24/7', l: 'Emergency Support' },
  { n: '100%', l: 'Certified Technicians' },
];

const SERVICES_PREVIEW = [
  { icon: '❄️', title: 'AC Supply',            desc: 'We supply all major brands of split, cassette, ducted, and commercial AC units at competitive prices.', anchor: 'supply' },
  { icon: '🔧', title: 'Installation',          desc: 'Professional installation by certified technicians for homes, offices, shops, and commercial spaces.', anchor: 'installation' },
  { icon: '⚙️', title: 'Maintenance',           desc: 'Scheduled preventive maintenance to keep your system running at peak efficiency year-round.', anchor: 'maintenance' },
  { icon: '🛠', title: 'Repair & Servicing',    desc: 'Fast fault diagnosis and repair for all AC brands, including refrigerant recharging and parts replacement.', anchor: 'repair' },
  { icon: '🏭', title: 'Commercial HVAC',       desc: 'End-to-end HVAC solutions for large commercial buildings, factories, and industrial facilities.', anchor: 'commercial' },
  { icon: '🚨', title: 'Emergency Response',    desc: 'Rapid response to AC breakdowns any time — because comfort cannot wait.', anchor: 'emergency' },
];

const WHY = [
  { icon: '✅', t: 'Certified Technicians',    d: 'All our engineers and technicians are trained, certified, and experienced across all major AC brands and systems.' },
  { icon: '⚡', t: 'Fast Response',            d: 'We respond quickly to every call, with same-day service available for repairs and emergencies.' },
  { icon: '🏷', t: 'Competitive Pricing',      d: 'Transparent, fair pricing with no hidden charges. We provide written quotes before starting any work.' },
  { icon: '🔒', t: 'Workmanship Guarantee',    d: 'We stand behind every installation and repair. All our work carries a service guarantee.' },
  { icon: '🏢', t: 'All Building Types',       d: 'From a single bedroom apartment to a 10-storey commercial building, we handle projects of any scale.' },
  { icon: '🌍', t: 'Nationwide Coverage',      d: 'Operating from Abuja and Lagos with service reach across major cities in Nigeria.' },
];

export default function Home() {
  return (
    <Layout>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1600&q=85" alt="" />
          <div className={s.heroMask} />
        </div>
        <div className={`container ${s.heroContent}`}>
          <p className="eyebrow">A Division of Fix-It Handyman Limited</p>
          <h1 className={s.heroH1}>
            Cool. Reliable.<br />
            <span>Professional.</span>
          </h1>
          <p className={s.heroP}>
            Nigeria's specialist air conditioning division. We supply, install, maintain,
            and repair AC systems for homes, offices, and commercial facilities nationwide.
          </p>
          <div className={s.heroBtns}>
            <Link href="/services" className="btn btn-ice">Our Services</Link>
            <Link href="/contact" className="btn btn-outline">Get a Quote</Link>
          </div>
        </div>

        <div className={s.statsBar}>
          <div className="container">
            <div className={s.statsRow}>
              {STATS.map(st => (
                <div key={st.l} className={s.stat}>
                  <strong>{st.n}</strong>
                  <span>{st.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className={s.intro}>
        <div className="container">
          <div className={s.introGrid}>
            <div className={s.introImg}>
              <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80" alt="AC technician at work" />
              <div className={s.introBadge}>
                <span>❄️</span>
                <div>
                  <strong>Fix-It Air Conditioner</strong>
                  <small>A Fix-It Handyman Limited Division</small>
                </div>
              </div>
            </div>
            <div className={s.introText}>
              <p className="eyebrow">About Us</p>
              <h2 className="section-title">Your Comfort Is<br /><span>Our Business</span></h2>
              <p className="section-sub">
                Fix-It Air Conditioner is the dedicated HVAC division of Fix-It Handyman Limited,
                established to provide specialist air conditioning services across Nigeria.
              </p>
              <p className="section-sub" style={{ marginTop: 14 }}>
                Our team of trained and certified technicians handles everything from supplying the
                right unit to full installation, routine maintenance, and emergency repairs, covering
                residential, commercial, and industrial systems of all sizes and brands.
              </p>
              <div className={s.brands}>
                <p>Brands we work with:</p>
                <div className={s.brandTags}>
                  {['LG','Samsung','Daikin','Midea','Gree','Hisense','Panasonic','Carrier','Haier'].map(b => (
                    <span key={b}>{b}</span>
                  ))}
                </div>
              </div>
              <Link href="/about" className="btn btn-navy" style={{ marginTop: 28 }}>Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={s.services}>
        <div className="container">
          <div className={s.servHead}>
            <div>
              <p className="eyebrow">What We Do</p>
              <h2 className="section-title">Our <span>Services</span></h2>
            </div>
            <Link href="/services" className="btn btn-ice">View All</Link>
          </div>
          <div className={s.servGrid}>
            {SERVICES_PREVIEW.map(sv => (
              <Link href={`/services#${sv.anchor}`} key={sv.anchor} className={s.servCard}>
                <span className={s.servIcon}>{sv.icon}</span>
                <h3>{sv.title}</h3>
                <p>{sv.desc}</p>
                <span className={s.servMore}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className={s.why}>
        <div className="container">
          <div className={s.whyHead}>
            <p className="eyebrow" style={{ color: 'var(--ice)' }}>Why Choose Us</p>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>The Fix-It AC <span>Difference</span></h2>
          </div>
          <div className={s.whyGrid}>
            {WHY.map(w => (
              <div key={w.t} className={s.whyCard}>
                <span className={s.whyIcon}>{w.icon}</span>
                <div>
                  <strong>{w.t}</strong>
                  <p>{w.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={s.cta}>
        <div className="container">
          <div className={s.ctaInner}>
            <div>
              <h2>Ready to Stay Cool?</h2>
              <p>Contact us today for a free site assessment and quotation. We serve Abuja, Lagos, and major cities across Nigeria.</p>
            </div>
            <div className={s.ctaBtns}>
              <Link href="/contact" className="btn btn-ice">Get a Free Quote</Link>
              <a href="tel:+2349021111193" className="btn btn-outline">Call Now</a>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
