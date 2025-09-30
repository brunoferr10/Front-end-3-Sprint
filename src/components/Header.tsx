
import { Link, useLocation } from "react-router-dom";

type HeaderProps = {
  onLogoClick?: () => void;
}

export default function Header({ onLogoClick }: HeaderProps) {
  const { pathname } = useLocation();
  const link = (to: string, label: string) => (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-semibold hover:underline ${pathname===to ? 'underline' : ''}`}
    >
      {label}
    </Link>
  );

  return (
    <header className="bg-brand-blue text-white">
      <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-between">
        <h1
          onClick={onLogoClick}
          className="text-3xl font-bold cursor-pointer select-none"
        >
          Invox
        </h1>
        <nav className="flex flex-wrap items-center gap-2">
          {link('/', 'Home')}
          {link('/integrantes', 'Quem Somos')}
          {link('/faq', 'FAQ')}
          {link('/projeto', 'Projeto')}
          {link('/contato', 'Contato')}
        </nav>
      </div>
    </header>
  );
}
