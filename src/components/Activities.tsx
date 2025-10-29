import { MessageSquare, BookOpen, Radio, Video } from "lucide-react";
import { Card } from "./ui/card";

const activities = [
  {
    icon: MessageSquare,
    title: "Discord",
    description: "JPEE同盟のメインプラットフォーム。情報交換、雑談、イベント企画など、日々活発な交流が行われています。",
    status: "活動中",
    link: "#alliance",
    color: "bg-blue-600"
  },
  {
    icon: BookOpen,
    title: "Note",
    description: "エストニアの文化、生活、イベントレポートなど、様々な記事を発信しています。",
    status: "活動中",
    link: "#",
    color: "bg-black"
  },
  {
    icon: Radio,
    title: "ラジオ",
    description: "エストニアと日本の架け橋となるトーク番組。ゲストを招いた対談や文化紹介を配信中。",
    status: "活動中",
    link: "#",
    color: "bg-blue-600"
  },
  {
    icon: Video,
    title: "YouTube",
    description: "動画コンテンツの配信を準備中。エストニアの魅力を映像で伝えていきます。",
    status: "準備中",
    link: "#",
    color: "bg-gray-400"
  }
];

export function Activities() {
  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">活動内容</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            オンラインとオフラインを組み合わせた多様な活動を通じて、
            エストニアと日本の文化交流を促進しています。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className={`${activity.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="mb-2">{activity.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    activity.status === "活動中" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-gray-100 text-gray-700"
                  }`}>
                    {activity.status}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
