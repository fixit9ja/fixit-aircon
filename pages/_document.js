import { Html, Head, Main, NextScript } from 'next/document';
const LOGO = 'https://res.cloudinary.com/dbjahorp6/image/upload/v1778984115/FIX_IT_AIRCONDITIONER_LOGO_2_x_j2rtod.png';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href={LOGO} />
        <link rel="apple-touch-icon" href={LOGO} />
        <meta name="theme-color" content="#00AEEF" />
      </Head>
      <body><Main /><NextScript /></body>
    </Html>
  );
}
