type LocaleFlagProps = {
  locale: 'pt' | 'en';
  className?: string;
};

const localeCountryCode = {
  pt: 'br',
  en: 'us',
} as const;

export function LocaleFlag({locale, className = 'text-2xl'}: LocaleFlagProps) {
  const code = localeCountryCode[locale];
  return <span className={`fi fi-${code} fis ${className}`.trim()} aria-hidden />;
}
