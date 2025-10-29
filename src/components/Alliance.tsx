import { Users, Calendar, MessageCircle, Globe } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "情報交換と雑談",
    description: "エストニアでの生活情報や日本文化について、気軽に情報交換ができます。"
  },
  {
    icon: Calendar,
    title: "イベント企画",
    description: "オンライン会やオフ会など、様々なイベントをメンバー主導で企画しています。"
  },
  {
    icon: Users,
    title: "多様なメンバー",
    description: "在エストニア邦人、エストニア人、エストニア好きな日本人など、多様な背景を持つメンバーが集います。"
  },
  {
    icon: Globe,
    title: "海外ノマド支援",
    description: "エストニアや欧州に海外ノマドやインターンとして来る方のサポートも行っています。"
  }
];

export function Alliance() {
  return (
    <section id="alliance" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">JPEE同盟</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discordをメインにした交流の場。在エストニア邦人や過去そうだった人、
            日本に興味のあるエストニア人、ただエストニアが好きな日本人など、
            誰でも気軽に参加できるコミュニティです。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-blue-600" size={28} />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="mb-4">JPEE同盟に参加しませんか？</h3>
          <p className="mb-8 max-w-2xl mx-auto opacity-90">
            エストニアに興味がある方なら誰でも大歓迎。
            情報交換、雑談、イベント参加など、自由なスタイルでコミュニティに参加できます。
          </p>
          <a 
            href="#contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            Discordに参加する
          </a>
        </div>
      </div>
    </section>
  );
}
