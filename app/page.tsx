'use client';
import Link from 'next/link';
import Programme from './components/programme';
import Banniere from './components/banniere'
import CardVertical from './components/cardvertical';


export default function Home() {
  return (
    <>
      <div className="absolute top-4 right-4 z-50">
        <Link
          href="/en"
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
        >
          EN
        </Link>
      </div>
      <main className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <img
              src="/rnp_original_logo.png"
              alt="Roots'n Permaculture"
              className="w-24 h-24 mx-auto mb-6"
            />
            <h1 className="text-5xl font-bold text-green-800 mb-6">
              Holistic Life Design
            </h1>
            <p className="text-xl text-green-700 mb-4">
              Écologie de soi & Soin du monde
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Un stage ancré et accessible, pour celles et ceux qui souhaitent prendre un temps
              pour clarifier leur chemin de vie, faire le lien entre leur bien-être personnel
              et leur impact dans le monde.
            </p>
          </div>
        </div>
        <Banniere />
        <div className="container mx-auto px-4 py-8">
          <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <img src="/photo_rakesh.jpg" alt="Rakesh Rootsman Rak" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Rakesh &quot;Rootsman Rak&quot;
              </h3>
              <p className="text-gray-700">
                Designer en permaculture humaine
              </p>
            </div>
            <div className="text-center">
              <img src="/sounil.jpg" alt="Sounil Le Blanc" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Sounil Le Blanc
              </h3>
              <p className="text-gray-700">
                Naturopathe et praticien du soin vivant
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
              Une approche basée sur :
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <CardVertical icon="/logos/ecoute.png" title="L'écoute profonde">
                du corps et du vivant
              </CardVertical>
              <CardVertical icon="/logos/permaculture.png" title="La permaculture">
                méthodologie du design
              </CardVertical>
              <CardVertical icon="/logos/collectif.png" title="Le collectif">
                une dynamique bienveillante
              </CardVertical>
            </div>
          </div>
        </div>
        <Programme />
        <div className="container mx-auto px-4 py-8">
          <div className="mt-2">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
              Vous repartirez avec
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <CardVertical icon="/logos/vision.png" title="Une vision claire">
                de ce que vous souhaitez nourrir dans votre vie
              </CardVertical>
              <CardVertical icon="/logos/design.png" title="Des outils de design">
                pour avancer à votre rythme
              </CardVertical>
              <CardVertical icon="/logos/shared.png" title="Une expérience partagée">
                dans un lieu inspirant et vivant
              </CardVertical>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Dates</h2>

            <div className="w-full max-w-3xl mx-auto px-4">

              <div className="mx-auto max-w-5xl bg-green-50 border border-green-200 shadow-md rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center md:items-start gap-6">
                <img
                  src="/logos/calendar.png"
                  alt="Calendrier"
                  className="w-24 h-24 object-contain"
                />

                <div className="text-center">
                  <p className="text-2xl font-bold text-green-800 mb-2">
                    Du 25 au 31 Octobre 2025
                  </p>
                  <p className="text-gray-700 text-lg">
                    7 jours et 7 nuits <br />
                    arrivée le vendredi 24 à partir de 16h, fin du stage le vendredi 31 au matin
                  </p>
                </div>
              </div>
            </div>
          </div>



          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
              Château du Vergnet
            </h2>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-700">
                Un lieu inspirant et vivant pour votre transformation personnelle
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">

            {/* IMAGE */}
            <div className="md:w-1/2 w-full">
              <img
                src="/images/chateau4.png" // ← mets ton image ici
                alt="Château du Vergnet"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXTE */}
            <div className="md:w-1/2 w-full p-6">
              <p className="text-gray-700 text-lg text-center leading-relaxed">
                Le Domaine du Vergnet se compose d&apos;un parc arboré de 17 hectares, <br />
                d&apos;une maison de Maître  (&quot;Le Château&quot;) et d&apos;une demeure annexe (&quot;La Mainerie&quot;).<br />
                Surplombant le village de Moularès, cet écrin de quiétude ouvre portes et fenêtres sur le parc ensoleillé, tout en offrant la fraîcheur des bois, d&apos;un ruisseau et d&apos;une piscine d&apos;été.<br />
                Il est situé à 5 minutes de la RN88 entre le Tarn et l&apos;Aveyron.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
              Tarifs en conscience
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-center text-green-700 mb-6">
                Stage (7 jours - repas végétariens inclus)
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h4 className="font-semibold text-green-700 mb-2">Minimum</h4>
                  <p className="text-2xl font-bold text-green-800">250€</p>
                  <p className="text-gray-600">sans hébergement</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center border-2 border-green-500">
                  <h4 className="font-semibold text-green-700 mb-2">Médian</h4>
                  <p className="text-2xl font-bold text-green-800">350€</p>
                  <p className="text-gray-600">sans hébergement</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h4 className="font-semibold text-green-700 mb-2">Idéal</h4>
                  <p className="text-2xl font-bold text-green-800">450€</p>
                  <p className="text-gray-600">sans hébergement</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-center text-green-700 mb-6">
                Hébergement (7 nuits)
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h4 className="font-semibold text-green-700 mb-2">Dortoir</h4>
                  <p className="text-gray-600">(dans la Mainerie)</p>
                  <p className="text-2xl font-bold text-green-800">105€</p>
                  <p className="text-gray-600">15€ x 7 nuits</p>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="font-semibold text-green-700">Total avec stage :</p>
                    <p className="text-sm text-gray-600">355€ (min) / 455€ (med) / 555€ (id)</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h4 className="font-semibold text-green-700 mb-2">Château - Lit Simple</h4>
                  <p className="text-gray-600">(chambre de 2 à 4 lits)</p>
                  <p className="text-2xl font-bold text-green-800">210€</p>
                  <p className="text-gray-600">30€ x 7 nuits</p>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="font-semibold text-green-700">Total avec stage :</p>
                    <p className="text-sm text-gray-600">460€ (min) / 560€ (med) / 660€ (id)</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h4 className="font-semibold text-green-700 mb-2">Château - Lit double</h4>
                  <p className="text-gray-600">(chambre 1 lit)</p>
                  <p className="text-2xl font-bold text-green-800">420€</p>
                  <p className="text-gray-600">60€ x 7 nuits</p>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="font-semibold text-green-700">Total avec stage :</p>
                    <p className="text-sm text-gray-600">670€ (min) / 770€ (med) / 870€ (id)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
              Inscription
            </h2>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-gray-700 mb-6">
                Prêt(e) à vivre cette expérience transformatrice ?
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfniHUmQQl59DlueelZusyrOP22qL8uqham6OyLxUW5rfv65g/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg"
              >
                S&apos;inscrire au stage
              </a>
            </div>
          </div>


          <footer className="mt-16 bg-green-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p>rakeshaji@gmail.com</p>
              <p>www.facebook.com/rootsmanrak</p>
            </div>
          </footer>
        </div>
      </main>
    </>
  )
}