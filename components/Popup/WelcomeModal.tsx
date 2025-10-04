'use client'

import React from 'react'

type WelcomeModalProps = {
  onClose: () => void
  onGuideClick: () => void
  lang: 'fr' | 'en'
}

export default function WelcomeModal({
  onClose,
  onGuideClick,
  lang,
}: WelcomeModalProps) {
  const isFr = lang === 'fr'

  return (
    <div className="fixed inset-0 bg-black/80 text-white flex items-center justify-center z-50 px-4">
      <div className="bg-zinc-900 rounded-xl p-6 max-w-md w-full space-y-4 shadow-xl border border-zinc-700 text-center">
        <h2 className="text-2xl font-bold">
          {isFr ? 'Bienvenue chez Bandhu' : 'Welcome to Bandhu'}
        </h2>
        <p className="text-zinc-400">
          {isFr
            ? 'Choisis comment tu veux commencer.'
            : 'Choose how you want to start.'}
        </p>

        <div className="flex flex-col gap-3 mt-6">
          <button
            className="bg-white text-black py-2 px-4 rounded-lg font-semibold hover:bg-zinc-200 transition"
            onClick={() => {
              // À adapter si tu veux ouvrir une modale d'inscription ou rediriger
              alert(isFr ? "Redirection vers l'inscription (à faire)" : "Redirect to signup (to be done)")
            }}
          >
            {isFr ? 'S’inscrire' : 'Sign up'}
          </button>

          <button
            className="border border-white py-2 px-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            onClick={onGuideClick}
          >
            {isFr ? 'Dialoguer' : 'Chat'}
          </button>

          <button
            className="text-zinc-500 text-sm underline mt-2"
            onClick={onClose}
          >
            {isFr ? 'Fermer' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  )
}
