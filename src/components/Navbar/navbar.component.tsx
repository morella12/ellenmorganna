'use client'

import './style.scss';
import {NavbarPros} from './interface';
import {useLocale, useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

export const Navbar: React.FC<NavbarPros> = ({
  className = ''
}) => {
  const locale = useLocale();
  const t = useTranslations('nav');
  const classButton = 'uppercase border-r-2 border-white text-lg hover:text-light-gray';

  return (
    <nav
      id="nav-fullscreen"
      className={className + " flex flex-col items-center justify-center w-full"}
    >
      {/* <Image src={navBar} alt="Navbar" className="icon z-50 fixed right-4 top-9 transform -translate-y-1/2" width={50} height={50} /> */}
      <ul className="menu flex flex-row justify-center items-center gap-6">
        <li>
          <button className={classButton} type="button">
            {t('home')}
          </button>
        </li>
        <li>
          <button className={classButton} type="button">
            {t('about')}
          </button>
        </li>
        <li>
          <button className={classButton} type="button">
            {t('services')}
          </button>
        </li>
        <li>
          <button className={classButton} type="button">
            {t('portfolio')}
          </button>
        </li>
        <li>
          <button className={classButton} type="button">
            {t('contact')}
          </button>
        </li>
        <li className="flex items-center gap-2">
          <Link href="/" locale="pt" className={locale === 'pt' ? 'font-bold text-cyan-400' : ''}>
            PT
          </Link>
          <span>/</span>
          <Link href="/" locale="en" className={locale === 'en' ? 'font-bold text-cyan-400' : ''}>
            EN
          </Link>
        </li>
      </ul>
    </nav>
  );
};