import Layout from '../components/Layout';
import Link from 'next/link';
import s from './about.module.css';

const TEAM = [
  { name: 'Martins Abu',         role: 'Head, HVAC & AC Division (Nationwide)',  dept: 'Operations' },
  { name: 'Abubakar D. Ismaila', role: 'AC Specialist, Abuja',                   dept: 'Technical' },
  { name: 'Jamiu O. Akanni',     role: 'AC Specialist, Lagos',                    dept: 'Technical' },
];

const BRANDS = ['LG','Samsung','Daikin','Midea','Gree','Hisense','Panasonic','Carrier','Haier','Thermocool','AUX','Cooper & Hunter'];

export default function About() {
  return (
    <Layout title="About Us" description="About Fix-It Air Conditioner, Nigeria's specialist AC division of Fix-It Handyman Limited.">

      <section className={s.hero}>
        <div className={s.heroBg}>
          <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80" alt="" />
          <div className={s.heroMask} />
        </div>
        <div className={`container ${s.heroContent}`}>
          <p className="eyebrow">About Us</p>
          <h1>Who We Are</h1>
          <p>Nigeria's dedicated air conditioning specialists, built on technical expertise and a commitment to your comfort.</p>
        </div>
      </section>

      {/* STORY */}
      <section className={s.story}>
        <div className="container">
          <div className={s.storyGrid}>
            <div>
              <p className="eyebrow">Our Story</p>
              <h2 className="section-title">Built to Keep<br /><span>Nigeria Cool</span></h2>
              <p>Fix-It Air Conditioner is the dedicated HVAC and air conditioning division of Fix-It Handyman Limited, one of Nigeria's leading multi-disciplinary engineering and technical services companies.</p>
              <p style={{ marginTop: 14 }}>As the demand for reliable air conditioning grew across homes, offices, and commercial facilities in Nigeria, we established this specialist division to provide focused, expert service, from selecting the right unit and professional installation to scheduled maintenance and rapid repairs.</p>
              <p style={{ marginTop: 14 }}>Our technicians are trained across all major brands and system types, and we operate from bases in Abuja and Lagos with coverage across major Nigerian cities.</p>
            </div>
            <div className={s.storyImg}>
              <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=700&q=80" alt="Technician at work" />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className={s.mission}>
        <div className="container">
          <div className={s.missionGrid}>
            <div className={s.mCard} style={{ borderTopColor: 'var(--ice)' }}>
              <div className={s.mNum}>01</div>
              <h3>Mission</h3>
              <p>To provide reliable, affordable, and professional air conditioning services that keep Nigerians comfortable at home, at work, and in business, backed by technical expertise and genuine customer care.</p>
            </div>
            <div className={s.mCard} style={{ borderTopColor: 'var(--deep)' }}>
              <div className={s.mNum}>02</div>
              <h3>Vision</h3>
              <p>To be Nigeria's most trusted name in air conditioning supply, installation, and maintenance, known for quality workmanship, fast response, and lasting results.</p>
            </div>
            <div className={s.mCard} style={{ borderTopColor: 'var(--navy)' }}>
              <div className={s.mNum}>03</div>
              <h3>Our Values</h3>
              <ul className={s.valList}>
                {['Technical Excellence','Honest Pricing','Fast Response','Customer First','Safety Always'].map(v => (
                  <li key={v}><span>—</span>{v}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className={s.team}>
        <div className="container">
          <p className="eyebrow">Our People</p>
          <h2 className="section-title">The AC Team</h2>
          <div className={s.teamGrid}>
            {TEAM.map(m => (
              <div key={m.name} className={s.teamCard}>
                <div className={s.teamDept}>{m.dept}</div>
                <div className={s.teamInfo}>
                  <h3>{m.name}</h3>
                  <span>{m.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className={s.brandSect}>
        <div className="container">
          <p className="eyebrow" style={{ color: 'var(--ice)' }}>Brands We Work With</p>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>All Major <span>AC Brands</span></h2>
          <div className={s.brandGrid}>
            {BRANDS.map(b => (
              <div key={b} className={s.brandChip}>{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={s.cta}>
        <div className="container">
          <h2>Need AC Help?</h2>
          <p>Whether it is a new installation or an urgent repair, our team is ready.</p>
          <Link href="/contact" className="btn btn-ice" style={{ marginTop: 24 }}>Contact Us Today</Link>
        </div>
      </section>

    </Layout>
  );
}
