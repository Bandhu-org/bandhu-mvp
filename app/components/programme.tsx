import CardVertical from './cardvertical';
import Bandeau from './bandeau-chateau';
import Bandeau2 from './bandeau-stage';

const activities = [
  {
    title: "Bilan naturopathique",
    desc: "Un point complet sur votre vitalité et vos besoins",
    img: "/images/naturopathie.png",
  },
  {
    title: "Jus de légumes et de fruits frais",
    desc: "Repos digestif accompagné et adapté à votre énergie",
    img: "/images/orange-1921548_1280.jpg",
  },
  {
    title: "Iridologie",
    desc: "Lecture de l'iris pour décoder vos zones de surcharge",
    img: "/images/Ananda's left eye-EDIT.jpg",
  },
  {
    title: "Balades botaniques",
    desc: "Reconnaissance, cueillette et usages des plantes sauvages",
    img: "/images/botanique2.jpg",
  },
  {
    title: "Toucher conscient",
    desc: "Auto-massages, ancrage et réappropriation corporelle",
    img: "/images/massage.jpg",
  },
  {
    title: "Yoga & respiration",
    desc: "Pratiques douces, matinales et adaptées",
    img: "/images/yoga.jpg",
  },
  {
    title: "Ateliers projet de vie",
    desc: "Écologie intérieure, alignement, clarté, ancrage",
    img: "/images/design.jpg",
  },
  {
    title: "Remèdes naturels",
    desc: "Infusions, teintures, cataplasmes maison",
    img: "/images/herbal.jpg",
  },
  {
    title: "Jeûne doux",
    desc: "Découvrir et experimenter le repos de l'organisme dans de bonne conditions",
    img: "/images/jeûne.png",
  },
];

export default function Programme() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* Hero */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-3xl font-extrabold text-emerald-700 leading-tight">
            Et si vous preniez 7 jours pour réaligner votre vie ?
          </h1>
          <p className="text-xl text-gray-700">
            Dans le calme vibrant du domaine de Moulares, ce stage propose une immersion dans les pratiques de soin profond du corps et de design vivant.
          </p>
          <p className="italic text-lg text-emerald-600 pb-4">
            Détox, régénération, exploration intérieure, projets de vie...
          </p>
        </div>
      </div>

      <Bandeau />

      {/* Objectifs */}
      <div className="max-w-5xl mx-auto space-y-20">
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            Un accompagnement pas à pas pour :
          </h2>


          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <CardVertical icon="/logos/idee.png" title="Comprendre">
              les déséquilibres de votre mode de vie
            </CardVertical>
            <CardVertical icon="/logos/soin.png" title="Prendre soin">
              de votre vitalité avec des pratiques simples et naturelles
            </CardVertical>
            <CardVertical icon="/logos/dessin.png" title="Redessiner">
              votre quotidien avec clarté, ancrage et désir
            </CardVertical>
          </div>
        </div>


        {/* Activités */}
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-10">
          🌿 Activités proposées
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={activity.img}
                alt={activity.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-emerald-700">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mt-2">{activity.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Conclusion */}
        <div className="text-center pt-5">
          <h2 className="text-3xl font-bold text-center text-green-700 pb-5">
            Une pause vivante, entre soin, autonomie et engagement joyeux
          </h2>

        </div>
      </div>
      <Bandeau2 />
    </section>
  );
}
