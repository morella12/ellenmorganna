'use client';

import './style.scss';
import {NavbarPros} from './interface';
import {useLocale, useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Image from 'next/image';
import {Menu, X} from 'lucide-react';
import {useState} from 'react';

export const Navbar: React.FC<NavbarPros> = ({className = ''}) => {
  const locale = useLocale();
  const t = useTranslations('nav');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const classButton =
    'uppercase text-lg hover:text-light-gray transition-colors w-full text-left md:w-auto';

  const navItems = [
    {key: 'home' as const, label: t('home')},
    {key: 'about' as const, label: t('about')},
    {key: 'services' as const, label: t('services')},
    {key: 'portfolio' as const, label: t('portfolio')},
    {key: 'contact' as const, label: t('contact')},
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      id="nav-fullscreen"
      className={className + ' p-6 md:p-8 max-w-7xl mx-auto relative z-10 w-full'}
    >
      <div className="flex items-center justify-between gap-4 w-full">
        <div className="flex items-center gap-6 md:gap-8 min-w-0">
          <Link href="/" className="shrink-0" onClick={closeMobileMenu}>
            <Image
              src="/images/logo_branco.png"
              alt="Ellen Morganna"
              width={150}
              height={50}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          <ul className="menu hidden md:flex flex-row items-center gap-6">
            {navItems.map((item) => (
              <li key={item.key}>
                <button className={classButton} type="button">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-2 text-lg">
          <Link href="/" locale="pt" className={locale === 'pt' ? 'font-bold text-cyan-400' : ''}>
            PT
          </Link>
          <span>/</span>
          <Link href="/" locale="en" className={locale === 'en' ? 'font-bold text-cyan-400' : ''}>
            EN
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-white hover:text-light-gray transition-colors"
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 rounded-xl border border-white/10 bg-black/80 backdrop-blur-sm p-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.key}>
                <button
                  className={classButton}
                  type="button"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 text-lg pt-2 border-t border-white/10">
            <Link
              href="/"
              locale="pt"
              className={locale === 'pt' ? 'font-bold text-cyan-400' : ''}
              onClick={closeMobileMenu}
            >
              PT
            </Link>
            <span>/</span>
            <Link
              href="/"
              locale="en"
              className={locale === 'en' ? 'font-bold text-cyan-400' : ''}
              onClick={closeMobileMenu}
            >
              EN
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
