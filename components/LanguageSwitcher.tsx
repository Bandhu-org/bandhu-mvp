'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const lang = pathname.split('/')[1] // extrait 'fr' ou 'en'

  const newLang = lang === 'fr' ? 'en' : 'fr'
  const restOfPath = pathname.split('/').slice(2).join('/')
  const newPath = `/${newLang}/${restOfPath}`

  return (
    <Link href={newPath} className="text-sm underline text-gray-400">
      {newLang === 'fr' ? 'Français' : 'English'}
    </Link>
  )
}
