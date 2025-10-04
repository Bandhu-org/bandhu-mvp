'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function Home() {
  const params = useParams()
  const lang = params?.lang === 'fr' ? 'fr' : 'en'

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 relative">

      {/* Bouton langue */}
      <div className="absolute top-4 right-4">
        <Link href={lang === 'fr' ? '/en' : '/fr'}>
          <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition">
            <span className="text-lg">🌍</span>
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </Link>
      </div>

      <h1 className="text-5xl font-bold mb-6 text-center">Bandhu</h1>
      <p className="text-xl text-zinc-400 mb-12 text-center">
        {lang === 'fr' ? 'Dialogue avec les machines' : 'Dialogue with machines'}
      </p>

      <Link
        href={`/${lang}/chat`}
        className="bg-white text-black px-6 py-3 rounded-xl text-lg font-semibold hover:bg-zinc-200 transition"
      >
        {lang === 'fr' ? 'Essayer' : 'Try'}
      </Link>
    </main>
  )
}
