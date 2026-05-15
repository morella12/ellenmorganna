'use client'

import './style.scss';
import {NavbarPros} from './interface';
import {useLocale, useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Image from 'next/image';

export const Navbar: React.FC<NavbarPros> = ({
  className = ''
}) => {
  const locale = useLocale();
  const t = useTranslations('nav');
  const classButton = 'uppercase text-lg hover:text-light-gray transition-colors';

  return (
    <nav
      id="nav-fullscreen"
      className={className + ' p-8 max-w-7xl mx-auto relative z-10 w-full'}
    >
      <div className="flex flex-wrap justify-between items-center gap-6 w-full">
        <div className="flex flex-wrap items-center gap-8">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo_branco.png"
              alt="Ellen Morganna"
              width={150}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <ul className="menu flex flex-row flex-wrap items-center gap-6">
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
          </ul>
        </div>
        <div className="flex items-center gap-2 text-lg ml-auto">
          <Link href="/" locale="pt" className={locale === 'pt' ? 'font-bold text-cyan-400' : ''}>
            PT
          </Link>
          <span>/</span>
          <Link href="/" locale="en" className={locale === 'en' ? 'font-bold text-cyan-400' : ''}>
            EN
          </Link>
        </div>
      </div>
    </nav>
  );
};
