'use client';

import {useEffect, useState} from 'react';
import {shouldShowPortuguese} from '@/lib/should-show-portuguese';

const COPY = {
  pt: 'Escolha seu idioma',
  en: 'Choose your language',
} as const;

export function LanguageSelectorHeading() {
  const [showPortuguese, setShowPortuguese] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;

    shouldShowPortuguese().then((value) => {
      if (!cancelled) {
        setShowPortuguese(value);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const title =
    showPortuguese === null
      ? COPY.en
      : showPortuguese
        ? COPY.pt
        : COPY.en;

  return (
    <h1 className="text-4xl font-black uppercase" suppressHydrationWarning>
      {title}
    </h1>
  );
}
