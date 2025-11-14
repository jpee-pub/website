import { Users, Calendar, MessageCircle, Globe } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "情報交換・交流",
    description: "生活情報の共有や雑談まで気軽に情報交換ができます。"
  },
  {
    icon: Calendar,
    title: "イベント企画",
    description: "オンライン会やオフ会など、様々なイベントをメンバー主導で企画しています。"
  },
  {
    icon: Users,
    title: "多様なメンバー",
    description: "在欧邦人、ヨーロッパに興味のある日本人や日本に興味のある外国人など、多様なメンバーが集います。"
  },
  {
    icon: Globe,
    title: "海外ノマド支援",
    description: "エストニアや欧州に海外ノマドやインターンとして来る方のサポートも行っています。"
  }
];

const DiscordIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 inline-block mx-5 translate-y-[-2px]">
    <path fill="#ffffff" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
  </svg>
);

export function Alliance() {
  return (
    <section id="alliance" className="py-20 px-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-[#0072ce] text-xl font-bold">JPEE同盟</h2>
          <p className="text-black max-w-3xl mx-auto">
            JPEE同盟のDiscordサーバーでは情報交換やイベントの企画、日々のちょっとした雑談などでつながりを深めています。<br />
            ヨーロッパ在住の方やただ興味があるという方まで、気軽にご参加ください！
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-[#0072ce]" size={28} />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-black text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <a
            href="https://discord.gg/mFhrJtusyK"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block text-white bg-[#7289DA] p-5 rounded-md hover:bg-[#6377bd] transition-colors text-3xl font-bold"
          >
            <DiscordIcon />
            クリックしてJPEE同盟に参加
            <DiscordIcon />
          </a>
        </div>

      </div>
    </section>
  );
}
