import Link from 'next/link';
import s from './Footer.module.css';

const LOGO = 'https://res.cloudinary.com/dbjahorp6/image/upload/v1778984115/FIX_IT_AIRCONDITIONER_LOGO_2_x_j2rtod.png';
const PARENT_LOGO = 'https://res.cloudinary.com/dbjahorp6/image/upload/v1778979476/FIX-IT_HANYMAN_u0w1ko.png';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.top}>
        <div className="container">
          <div className={s.grid}>
            <div className={s.brand}>
              <img src={LOGO} alt="Fix-It Air Conditioner" className={s.logo} />
              <p>Supply, installation, maintenance and repair of air conditioning systems across Nigeria, from residential split units to large commercial and industrial installations.</p>
              <div className={s.parent}>
                <span>A division of</span>
                <img src={PARENT_LOGO} alt="Fix-It Handyman Limited" className={s.parentLogo} />
              </div>
            </div>
            <div className={s.col}>
              <h4>Quick Links</h4>
              <ul>
                {[['/', 'Home'],['/about','About Us'],['/services','Services'],['/contact','Contact']].map(([h, l]) => (
                  <li key={h}><Link href={h}>{l}</Link></li>
                ))}
              </ul>
            </div>
            <div className={s.col}>
              <h4>Our Services</h4>
              <ul>
                {[
                  ['/services#supply','AC Supply'],
                  ['/services#installation','Installation'],
                  ['/services#maintenance','Maintenance'],
                  ['/services#repair','Repair & Servicing'],
                  ['/services#commercial','Commercial HVAC'],
                  ['/services#emergency','Emergency Response'],
                ].map(([h, l]) => (
                  <li key={h}><Link href={h}>{l}</Link></li>
                ))}
              </ul>
            </div>
            <div className={s.col}>
              <h4>Contact</h4>
              <ul className={s.contactList}>
                <li><span>📞</span><a href="tel:+2349021111193">+234 902 111 1193</a></li>
                <li><span>✉️</span><a href="mailto:info@fix-it.ng">info@fix-it.ng</a></li>
                <li><span>📍</span><span>Suite B-005, Quad Plaza, Wuye District, Abuja-FCT</span></li>
                <li><span>📍</span><span>3, Oyedele Ogunniyi St, Anthony Village, Lagos</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={s.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} Fix-It Air Conditioner. A division of Fix-It Handyman Limited (RC 1385277).</p>
          <a href="https://www.fix-it.ng" target="_blank" rel="noopener noreferrer" className={s.parentLink}>Visit Main Website</a>
        </div>
      </div>
    </footer>
  );
}
