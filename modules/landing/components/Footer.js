import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer p-10 text-white bg-primary">
      <nav>
        <header className="footer-title">Kontakt</header>
        <Link href="mailto:decoratlyapp@gmail.com" className="link link-hover">
          Centrum wsparcia
        </Link>
      </nav>
      <nav>
        <header className="footer-title">Informacje</header>
        <Link href="/blog/tos" className="link link-hover">
          Regulamin
        </Link>
        <Link href="/blog/privacy-policy" className="link link-hover">
          Polityka prywatności
        </Link>
      </nav>
      <nav>
        <header className="footer-title">O Nas</header>
        <div>Aranżacje AI | 2024</div>
      </nav>
    </footer>
  );
};

export default Footer;
