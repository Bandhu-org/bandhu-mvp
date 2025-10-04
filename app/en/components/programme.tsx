import CardVertical from '../../components/cardvertical';
import Bandeau from '../../components/bandeau-chateau';
import Bandeau2 from '../../components/bandeau-stage';

const activities = [
  {
    title: "Naturopathic assessment",
    desc: "A complete overview of your vitality and needs",
    img: "/images/naturopathie.png",
  },
  {
    title: "Fresh vegetable and fruit juices",
    desc: "Digestive rest accompanied and adapted to your energy",
    img: "/images/orange-1921548_1280.jpg",
  },
  {
    title: "Iridology",
    desc: "Iris reading to decode your overload zones",
    img: "/images/Ananda's left eye-EDIT.jpg",
  },
  {
    title: "Botanical walks",
    desc: "Recognition, gathering and uses of wild plants",
    img: "/images/botanique2.jpg",
  },
  {
    title: "Conscious Touch",
    desc: "Self-massages, anchoring and bodily reappropriation",
    img: "/images/massage.jpg",
  },
  {
    title: "Yoga & respiration",
    desc: "Gentle, morning and adapted practices",
    img: "/images/yoga.jpg",
  },
  {
    title: "Life project workshops",
    desc: "Inner ecology, alignment, clarity, grounding",
    img: "/images/design.jpg",
  },
  {
    title: "Natural remedies",
    desc: "Homemade infusions, tinctures, poultices",
    img: "/images/herbal.jpg",
  },
  {
    title: "Gentle fasting",
    desc: "Discover and experience rest for the body in good conditions",
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
            What about taking 7 days to realign your life?
          </h1>
          <p className="text-xl text-gray-700">
            In the vibrant calm of the Moulares estate, this course offers an immersion in the practices of deep body care and living design
          </p>
          <p className="italic text-lg text-emerald-600 pb-4">
            Detox, regeneration, inner exploration, life projects...
          </p>
        </div>
      </div>

      <Bandeau />

      {/* Objectifs */}
      <div className="max-w-5xl mx-auto space-y-20">
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            Step-by-step support for:
          </h2>


          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <CardVertical icon="/logos/idee.png" title="Understanding">
              imbalances in your lifestyle
            </CardVertical>
            <CardVertical icon="/logos/soin.png" title="Taking care">
              of your vitality with simple and natural practices
            </CardVertical>
            <CardVertical icon="/logos/dessin.png" title="Redrawing">
              your daily life with clarity, grounding and desire
            </CardVertical>
          </div>
        </div>


        {/* Activités */}
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-10">
          🌿 Activities offered
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
            A lively break, between care, autonomy and joyful commitment
          </h2>

        </div>
      </div>
      <Bandeau2 />
    </section>
  );
}
