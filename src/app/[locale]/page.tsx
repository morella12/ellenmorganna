import {Navbar} from '@/components/Navbar/navbar.component';
import {ArrowRight, Gamepad2, Globe, Rocket, Megaphone} from 'lucide-react';
import Image from 'next/image';
import type {LucideIcon} from 'lucide-react';
import {getTranslations, setRequestLocale} from 'next-intl/server';

type ServiceCardProps = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

const ServiceCard = ({title, desc, icon: Icon}: ServiceCardProps) => (
  <div className="bg-brand-card border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:border-brand-purple/50 transition-all group">
    <div className="w-16 h-16 bg-brand-purple/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-brand-purple" size={32} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-sm mb-6 leading-relaxed">{desc}</p>
    <button className="text-xs font-bold uppercase tracking-widest border-b border-brand-purple pb-1">
      <ArrowRight size={14} className="inline mr-1" />
      {title}
    </button>
  </div>
);

const classTeste = `
  min-h-screen
  bg-brand-dark
  text-white
  font-sans
  selection:bg-brand-pink
`;

type Props = {
  params: Promise<{locale: string}>;
};

export default async function LandingPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: 'home'});

  return (
    <main className={classTeste}>
      <div className="fixed inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-20 pointer-events-none" />

      <Navbar />

      <section className="max-w-7xl mx-auto px-8 pt-20 pb-32 flex flex-col md:flex-row items-center gap-12 relative">
        <div className="flex-1 space-y-8">
          <h1 className="text-6xl md:text-8xl font-black leading-none uppercase italic">
            {t('hero.titleStart')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-purple">
              {t('hero.titleHighlight')}
            </span>
          </h1>
          <p className="max-w-md text-gray-400 leading-relaxed">{t('hero.description')}</p>
          <button className="bg-gradient-to-r from-brand-purple to-brand-pink px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-brand-purple/20">
            {t('hero.cta')}
          </button>
        </div>
        <div className="flex-1 relative">
          <div className="w-full aspect-square bg-gradient-to-tr from-brand-purple/20 to-transparent rounded-full blur-3xl absolute inset-0" />
          <div className="relative z-10 animate-bounce-slow">
            <Image
              src="/images/AvatarEllenMorganna.png"
              alt={t('images.avatarAlt')}
              className="w-full h-auto"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <section className="bg-white/5 py-24 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 italic">
          <div>
            <h2 className="text-4xl font-black uppercase mb-6">{t('about.title')}</h2>
            <p className="text-gray-400 leading-relaxed">{t('about.description')}</p>
            <div className="flex gap-12 mt-12">
              <div>
                <span className="text-4xl font-black block">+50</span>{' '}
                <span className="text-xs text-gray-500 uppercase">{t('about.stats.projects')}</span>
              </div>
              <div>
                <span className="text-4xl font-black block">3</span>{' '}
                <span className="text-xs text-gray-500 uppercase">{t('about.stats.awards')}</span>
              </div>
              <div>
                <span className="text-4xl font-black block">6</span>{' '}
                <span className="text-xs text-gray-500 uppercase">{t('about.stats.years')}</span>
              </div>
            </div>
          </div>
          <div id="telas" className="grid grid-cols-2 gap-4 ">
            <div className="relative h-64 bg-brand-purple/20 rounded-2xl border border-white/10 overflow-hidden">
              <Image
                src="/images/Avatar_Ellen_Morgana_Laptop.png"
                alt={t('images.avatarLaptopAlt')}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 bg-brand-pink/20 rounded-2xl border border-white/10 mt-8 overflow-hidden">
              <Image
                src="/images/Monitor_Codigos_React.png"
                alt={t('images.monitorAlt')}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-32">
        <h2 className="text-center text-4xl font-black uppercase mb-20 tracking-widest">
          {t('services.titleStart')} <span className="text-cyan-400">{t('services.titleHighlight')}</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <ServiceCard title={t('services.cards.development.title')} desc={t('services.cards.development.description')} icon={Gamepad2} />
          <ServiceCard title={t('services.cards.release.title')} desc={t('services.cards.release.description')} icon={Rocket} />
          <ServiceCard title={t('services.cards.marketing.title')} desc={t('services.cards.marketing.description')} icon={Megaphone} />
          <ServiceCard title={t('services.cards.localization.title')} desc={t('services.cards.localization.description')} icon={Globe} />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 py-20 mb-32 bg-gradient-to-r from-cyan-900/40 to-brand-purple/40 rounded-[40px] border border-white/10 flex flex-col items-center text-center">
        <h2 className="text-5xl font-black uppercase mb-4 italic italic tracking-tighter">{t('cta.title')}</h2>
        <p className="text-xl text-gray-300 mb-10">{t('cta.description')}</p>
        <div className="flex w-full max-w-md gap-4">
          <input
            type="email"
            placeholder={t('cta.emailPlaceholder')}
            className="flex-1 bg-black/40 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-purple transition-all"
          />
          <button className="bg-white text-black font-black px-8 py-4 rounded-xl hover:bg-brand-pink hover:text-white transition-all uppercase text-sm">
            {t('cta.send')}
          </button>
        </div>
      </section>
    </main>
  );
}
