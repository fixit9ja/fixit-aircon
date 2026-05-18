import Layout from '../components/Layout';
import Link from 'next/link';
import s from './services.module.css';

const SERVICES = [
  {
    id: 'supply',
    icon: '❄️',
    title: 'AC Supply',
    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
    intro: 'We supply a wide range of air conditioning units from all major brands to suit every budget, space, and requirement, from small split units for bedrooms to large-capacity systems for commercial facilities.',
    items: [
      ['Split Unit AC', 'Wall-mounted split units for bedrooms, living rooms, and small offices. Available in 1HP, 1.5HP, 2HP, and 2.5HP capacities.'],
      ['Cassette AC', 'Ceiling-mounted cassette units ideal for larger rooms and open-plan spaces with 360-degree air distribution.'],
      ['Ducted AC Systems', 'Concealed ducted systems for seamless, unobtrusive cooling across multiple rooms or entire floors.'],
      ['Floor-Standing Units', 'Portable and floor-standing units for spaces that require flexible cooling without wall installation.'],
      ['Commercial AC Units', 'High-capacity commercial air conditioning systems for offices, shops, restaurants, and large facilities.'],
      ['Industrial Chillers', 'Heavy-duty chiller and precision cooling systems for industrial and data centre environments.'],
    ],
  },
  {
    id: 'installation',
    icon: '🔧',
    title: 'Installation',
    img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
    intro: 'Our certified technicians carry out professional installations to manufacturer specifications, ensuring your system operates at peak efficiency from day one, with proper pipe routing, drainage, and electrical connections.',
    items: [
      ['Site Assessment', 'We assess your space, ceiling height, room size, and insulation to recommend the ideal unit size and placement.'],
      ['Residential Installation', 'Clean, professional split unit and multi-split installations for homes and apartments with minimal disruption.'],
      ['Office & Commercial Install', 'Structured installation for offices, retail spaces, restaurants, and multi-floor commercial buildings.'],
      ['New Construction', 'Full HVAC system design and installation for new builds and major renovations.'],
      ['Pipe & Electrical Work', 'Professional copper pipe routing, lagging, and dedicated electrical circuit installation.'],
      ['Testing & Commissioning', 'Full system testing, leak checks, and operational verification before handover.'],
    ],
  },
  {
    id: 'maintenance',
    icon: '⚙️',
    title: 'Preventive Maintenance',
    img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80',
    intro: 'Regular maintenance significantly extends the life of your AC system, reduces energy consumption, and prevents costly breakdowns. We offer flexible maintenance contracts for individuals, businesses, and facilities managers.',
    items: [
      ['Filter Cleaning', 'Thorough cleaning of air filters to restore airflow and maintain indoor air quality.'],
      ['Coil Cleaning', 'Deep cleaning of evaporator and condenser coils to restore cooling efficiency.'],
      ['Refrigerant Level Check', 'Verifying refrigerant levels and checking for leaks to ensure optimal cooling performance.'],
      ['Drainage Inspection', 'Clearing and inspecting condensate drain lines to prevent water damage and overflow.'],
      ['Electrical Checks', 'Inspection of electrical connections, capacitors, and contactors for safety and performance.'],
      ['Annual Service Contracts', 'Scheduled quarterly or bi-annual maintenance visits for homes and businesses at discounted contract rates.'],
    ],
  },
  {
    id: 'repair',
    icon: '🛠',
    title: 'Repair & Servicing',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    intro: 'When your AC breaks down, every hour counts. Our experienced technicians diagnose and fix faults quickly, using genuine parts and refrigerants for lasting repairs across all brands and models.',
    items: [
      ['Fault Diagnosis', 'Systematic diagnosis of all AC faults including no cooling, water leaks, unusual noise, and error codes.'],
      ['Refrigerant Recharging', 'Locate and repair refrigerant leaks, then recharge to correct levels for full cooling performance.'],
      ['Compressor Replacement', 'Supply and fitting of replacement compressors for systems where repair is no longer viable.'],
      ['PCB & Control Board Repair', 'Repair or replacement of faulty printed circuit boards and control modules.'],
      ['Fan Motor Replacement', 'Indoor and outdoor fan motor replacement for units suffering from poor airflow or motor failure.'],
      ['All Brand Repairs', 'We repair LG, Samsung, Daikin, Midea, Hisense, Gree, Panasonic, Carrier, Haier, and all other major brands.'],
    ],
  },
  {
    id: 'commercial',
    icon: '🏭',
    title: 'Commercial HVAC',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    intro: 'We provide complete HVAC solutions for commercial buildings, hotels, hospitals, warehouses, and industrial facilities, combining design, supply, installation, and ongoing maintenance under one contract.',
    items: [
      ['HVAC System Design', 'Load calculation, system design, and equipment selection tailored to your building specifications.'],
      ['VRF/VRV Systems', 'Variable Refrigerant Flow systems for large commercial buildings requiring zoned, energy-efficient cooling.'],
      ['Chiller Systems', 'Water-cooled and air-cooled chiller plant design and installation for large-scale facilities.'],
      ['AHU Installation', 'Air Handling Unit supply and installation for central air distribution systems.'],
      ['Facilities Management', 'Ongoing HVAC maintenance contracts for property managers, facility teams, and building owners.'],
      ['Energy Optimisation', 'Audit and retrofitting of existing systems to reduce energy consumption and running costs.'],
    ],
  },
  {
    id: 'emergency',
    icon: '🚨',
    title: 'Emergency Response',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    intro: 'AC breakdowns do not keep business hours. Our emergency response team is available to attend urgent call-outs and get your system back up and running as quickly as possible.',
    items: [
      ['Same-Day Response', 'We aim to respond to emergency calls on the same day, particularly for commercial and medical clients.'],
      ['Weekend Availability', 'Emergency weekend call-outs available by appointment for urgent situations.'],
      ['Temporary Cooling', 'Portable AC units available for hire while your permanent system is being repaired.'],
      ['Priority Clients', 'Clients on our annual maintenance contracts receive priority emergency response scheduling.'],
      ['Remote Diagnosis', 'Initial phone and video-based diagnosis to help you troubleshoot minor issues immediately.'],
      ['Rapid Parts Sourcing', 'We stock common spare parts and have supplier networks for fast procurement of specialist components.'],
    ],
  },
];

export default function Services() {
  return (
    <Layout title="Services" description="Fix-It Air Conditioner services: AC supply, installation, maintenance, repair, commercial HVAC, and emergency response across Nigeria.">

      <section className={s.hero}>
        <div className={s.heroBg}>
          <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1600&q=80" alt="" />
          <div className={s.heroMask} />
        </div>
        <div className={`container ${s.heroContent}`}>
          <p className="eyebrow">What We Offer</p>
          <h1>Our Services</h1>
          <p>Comprehensive air conditioning services for every need, from a single bedroom unit to a full commercial HVAC system.</p>
        </div>
      </section>

      {/* Quick nav */}
      <nav className={s.quickNav}>
        <div className="container">
          <div className={s.qnRow}>
            {SERVICES.map(sv => (
              <a key={sv.id} href={`#${sv.id}`} className={s.qnLink}>
                <span>{sv.icon}</span>{sv.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {SERVICES.map((sv, i) => (
        <section key={sv.id} id={sv.id} className={`${s.block} ${i % 2 === 1 ? s.blockAlt : ''}`}>
          <div className="container">
            <div className={s.blockGrid}>
              <div className={s.blockImg}>
                <img src={sv.img} alt={sv.title} />
                <div className={s.blockBadge}>
                  <span>{sv.icon}</span>
                  <strong>0{i + 1}</strong>
                </div>
              </div>
              <div className={s.blockText}>
                <p className="eyebrow">Service 0{i + 1}</p>
                <h2>{sv.title}</h2>
                <p className={s.intro}>{sv.intro}</p>
                <ul className={s.items}>
                  {sv.items.map(([t, d]) => (
                    <li key={t}>
                      <strong>{t}</strong>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn btn-ice" style={{ marginTop: 28 }}>Enquire Now</Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className={s.cta}>
        <div className="container">
          <h2>Not Sure What You Need?</h2>
          <p>Call or message us and we will assess your situation and recommend the right solution at the right price.</p>
          <div className={s.ctaBtns}>
            <Link href="/contact" className="btn btn-ice">Contact Us</Link>
            <a href="tel:+2349021111193" className="btn btn-outline">+234 902 111 1193</a>
          </div>
        </div>
      </section>

    </Layout>
  );
}
