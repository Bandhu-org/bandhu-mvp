'use client';
import Link from 'next/link';
import Programme from './components/programme';
import Banniere from '../components/banniere'
import CardVertical from '../components/cardvertical';


export default function Home() {
  return (
    <>
      <div className="absolute top-4 right-4 z-50">
        <Link
          href="/"
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
        >
          FR
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
              Ecology of Self & Care of the World
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A grounded and accessible course for those who wish to take time to clarify their life path, to make the connection between their personal well-being and their impact on the world.
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
                Human Permaculture Designer
              </p>
            </div>
            <div className="text-center">
              <img src="/sounil.jpg" alt="Sounil Le Blanc" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Sounil Le Blanc
              </h3>
              <p className="text-gray-700">
                Naturopath and living care practitioner
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
              An approach based on:
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <CardVertical icon="/logos/ecoute.png" title="Deep listening">
                of the body and the living
              </CardVertical>
              <CardVertical icon="/logos/permaculture.png" title="Permaculture">
                design methodology
              </CardVertical>
              <CardVertical icon="/logos/collectif.png" title="The collective">
                a benevolent dynamic
              </CardVertical>
            </div>
          </div>
        </div>
        <Programme />
        <div className="container mx-auto px-4 py-8">
          <div className="mt-2">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
              You will leave with
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <CardVertical icon="/logos/vision.png" title="A clear vision">
                of what you want to nourish in your life
              </CardVertical>
              <CardVertical icon="/logos/design.png" title="Design tools">
                to progress at your own pace
              </CardVertical>
              <CardVertical icon="/logos/shared.png" title="A shared experience">
                in an inspiring and lively place
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
                    From October 25 to 31, 2025
                  </p>
                  <p className="text-gray-700 text-lg">
                    7 days and 7 nights
                    <br />
                    arrival on Friday 24th from 4 p.m., end of the course on Friday 31st in the morning
                  </p>
                </div>
              </div>
            </div>
          </div>



          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
              Vergnet Castle
            </h2>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-700">
                An inspiring and vibrant place for your personal transformation
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">

            {/* IMAGE */}
            <div className="md:w-1/2 w-full">
              <img
                src="/images/chateau4.png"
                alt="Château du Vergnet"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXTE */}
            <div className="md:w-1/2 w-full p-6">
              <p className="text-gray-700 text-lg text-center leading-relaxed">
                Domaine du Vergnet consists of a 17-hectare wooded park,
                a mansion (&quot;Le Château&quot;) and an annex (&quot;La Mainerie&quot;).
                Overlooking the village of Moularès, this peaceful setting opens its doors and windows onto the sunny park, while offering the coolness of the woods, a stream and a summer swimming pool.
                It is located 5 minutes from the RN88 between the Tarn and Aveyron.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
              Conscious prices
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-center text-green-700 mb-6">
                Course (7 days - vegetarian meals included)
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h4 className="font-semibold text-green-700 mb-2">Minimum</h4>
                  <p className="text-2xl font-bold text-green-800">250€</p>
                  <p className="text-gray-600">without accommodation</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center border-2 border-green-500">
                  <h4 className="font-semibold text-green-700 mb-2">Medium</h4>
                  <p className="text-2xl font-bold text-green-800">350€</p>
                  <p className="text-gray-600">without accommodation</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h4 className="font-semibold text-green-700 mb-2">Ideal</h4>
                  <p className="text-2xl font-bold text-green-800">450€</p>
                  <p className="text-gray-600">without accommodation</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-center text-green-700 mb-6">
                Accommodation (7 nights)
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h4 className="font-semibold text-green-700 mb-2">Domitory</h4>
                  <p className="text-gray-600">(in Mainerie)</p>
                  <p className="text-2xl font-bold text-green-800">105€</p>
                  <p className="text-gray-600">15€ x 7 nights</p>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="font-semibold text-green-700">Total with course :</p>
                    <p className="text-sm text-gray-600">355€ (min) / 455€ (med) / 555€ (id)</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h4 className="font-semibold text-green-700 mb-2">Castel - Single bed</h4>
                  <p className="text-gray-600">(room with 2 to 4 beds)</p>
                  <p className="text-2xl font-bold text-green-800">210€</p>
                  <p className="text-gray-600">30€ x 7 nights</p>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="font-semibold text-green-700">Total with course :</p>
                    <p className="text-sm text-gray-600">460€ (min) / 560€ (med) / 660€ (id)</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h4 className="font-semibold text-green-700 mb-2">Castel - Kingsize bed</h4>
                  <p className="text-gray-600">(room 1 bed)</p>
                  <p className="text-2xl font-bold text-green-800">420€</p>
                  <p className="text-gray-600">60€ x 7 nights</p>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="font-semibold text-green-700">Total with course :</p>
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
                Ready to experience this transformative journey?
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScz0OdjMGhHSkrKBbo0L8ZHsCLsnBFCnymb9zgtWaGUCMZvHw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg"
              >
                Register to the course
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