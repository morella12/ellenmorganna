import Link from 'next/link';

export default function LanguageSelectorPage() {
  return (
    <main className="min-h-screen bg-brand-dark text-white flex items-center justify-center px-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-black uppercase">Escolha seu idioma</h1>
        <div className="flex gap-4 justify-center">
          <Link href="/pt" className="px-6 py-3 rounded-xl bg-brand-purple hover:opacity-90 transition-opacity">
            Portugues
          </Link>
          <Link href="/en" className="px-6 py-3 rounded-xl bg-cyan-600 hover:opacity-90 transition-opacity">
            English
          </Link>
        </div>
      </div>
    </main>
  );
}
