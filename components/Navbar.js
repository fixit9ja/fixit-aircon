import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import s from './Navbar.module.css';

const LOGO = 'https://res.cloudinary.com/dbjahorp6/image/upload/v1778984115/FIX_IT_AIRCONDITIONER_LOGO_2_x_j2rtod.png';

const LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact',  label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [router.pathname]);

  return (
    <header className={`${s.header} ${scrolled ? s.solid : ''}`}>
      <div className={`container ${s.inner}`}>
        <Link href="/" className={s.logo}>
          <img src={LOGO} alt="Fix-It Air Conditioner" className={s.logoImg} />
        </Link>

        <nav className={`${s.nav} ${open ? s.open : ''}`}>
          <ul>
            {LINKS.map(l => (
              <li key={l.href}>
                <Link href={l.href} className={`${s.link} ${router.pathname === l.href ? s.active : ''}`}>
                  {l.label}
                  <span className={s.bar} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a href="tel:+2349021111193" className={`btn btn-ice ${s.callBtn}`}>Call Us</a>

        <button className={`${s.burger} ${open ? s.burgerOpen : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
      <div className={s.iceLine} />
    </header>
  );
}
