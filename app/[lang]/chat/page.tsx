'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import WelcomeModal from '@/components/Popup/WelcomeModal'

export default function ChatPage() {
  const params = useParams()
  const lang = params?.lang === 'fr' ? 'fr' : 'en'
  const altLang = lang === 'fr' ? 'en' : 'fr'

  const [showModal, setShowModal] = useState(true)
  const [messages, setMessages] = useState([
    {
      role: 'ombrelien',
      text:
        lang === 'fr'
          ? 'Bonjour. Je suis Ombrelien. Que souhaites-tu explorer ?'
          : 'Hello. I am Ombrelien. What do you want to explore?'
    }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return

    setMessages(prev => [
      ...prev,
      { role: 'user', text: input },
      {
        role: 'ombrelien',
        text: lang === 'fr' ? 'Réponse simulée.' : 'Simulated response.'
      }
    ])
    setInput('')
  }

  const handleGuideClick = () => {
    setMessages(prev => [
      ...prev,
      {
        role: 'ombrelien',
        text:
          lang === 'fr'
            ? 'Je vais te guider pas à pas pour découvrir Bandhu.'
            : 'I will guide you step by step to discover Bandhu.'
      }
    ])
    setShowModal(false)
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-4 relative">

      {/* 🌍 Bouton langue */}
      <div className="absolute top-4 right-4">
        <Link href={`/${altLang}/chat`}>
          <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition">
            <span className="text-lg">🌍</span> {altLang.toUpperCase()}
          </button>
        </Link>
      </div>

      {/* Modal de bienvenue */}
      {showModal && (
        <WelcomeModal
          lang={lang}
          onClose={() => setShowModal(false)}
          onGuideClick={handleGuideClick}
        />
      )}

      <div className="max-w-2xl w-full space-y-4">
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto rounded-full bg-white/10 border border-white/30" />
          <p className="text-sm text-zinc-400 mt-2">Ombrelien</p>
        </div>

        <div className="space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl max-w-[80%] ${msg.role === 'user'
                ? 'bg-white text-black self-end ml-auto'
                : 'bg-zinc-800 text-white'
                }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-2">
          <input
            className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white"
            placeholder={lang === 'fr' ? 'Écris quelque chose...' : 'Type something...'}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-white text-black px-4 py-2 rounded-lg font-semibold"
          >
            {lang === 'fr' ? 'Envoyer' : 'Send'}
          </button>
        </div>
      </div>
    </main>
  )
}
