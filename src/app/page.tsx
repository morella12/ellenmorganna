import Link from 'next/link';
import {LanguageSelectorHeading} from '@/components/LanguageSelector/language-selector-heading.component';
import {LocaleFlag} from '@/components/LocaleFlag/locale-flag.component';

export default function LanguageSelectorPage() {
  return (
    <main className="min-h-screen bg-brand-dark text-white flex items-center justify-center px-8">
      <div className="text-center space-y-6">
        <LanguageSelectorHeading />
        <div className="flex gap-4 justify-center">
          <Link
            href="/pt"
            className="px-6 py-3 rounded-xl bg-brand-purple hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <LocaleFlag locale="pt" className="text-3xl rounded-sm shadow-sm" />
            Português
          </Link>
          <Link
            href="/en"
            className="px-6 py-3 rounded-xl bg-cyan-600 hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <LocaleFlag locale="en" className="text-3xl rounded-sm shadow-sm" />
            English
          </Link>
        </div>
      </div>
    </main>
  );
}
