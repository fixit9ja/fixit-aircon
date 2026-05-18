import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const LOGO = 'https://res.cloudinary.com/dbjahorp6/image/upload/v1778984115/FIX_IT_AIRCONDITIONER_LOGO_2_x_j2rtod.png';

export default function Layout({ children, title = '', description = '' }) {
  const t = title
    ? `${title} | Fix-It Air Conditioner`
    : 'Fix-It Air Conditioner | AC Supply, Installation & Maintenance Nigeria';
  const d = description ||
    'Fix-It Air Conditioner — Nigeria\'s specialist AC division. Supply, installation, maintenance and repair of residential and commercial air conditioning systems.';
  return (
    <>
      <Head>
        <title>{t}</title>
        <meta name="description" content={d} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={t} />
        <meta property="og:description" content={d} />
        <meta property="og:image" content={LOGO} />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
