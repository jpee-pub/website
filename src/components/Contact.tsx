import { Eye, Mail, Briefcase } from "lucide-react";
import { Card } from "./ui/card";

const contactMethods = [
  {
    icon: Eye,
    title: "活動のフォロー",
    description: "Discordへの参加やSNSのフォローで、最新の活動情報をチェックできます。",
    action: "活動を見る",
    link: "#activities",
  },
  {
    icon: Mail,
    title: "お問い合わせ",
    description: "コラボレーションや業務提携、活動内容に関する相談はこちらからどうぞ。",
    action: "問い合わせる",
    link: "mailto:contact@jpee-plus.com"
  },
  {
    icon: Briefcase,
    title: "共に働く",
    description: "活動内容に共感し、世界のどこからでも一緒に働いてくれる方を募集しています。",
    action: "問い合わせる",
    link: "#careers",
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-[#0072ce] text-xl font-bold">参加する</h2>
          <p className="text-black max-w-2xl mx-auto">
            JPEEの活動に興味を持っていただきありがとうございます。<br />
            活動のフォローや参加、コラボレーションのご提案などお待ちしています。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-3">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                href={method.link}
                className="block h-full"
              >
                <Card
                  key={index}
                  className="p-6 hover:bg-[#0072ce] hover:text-white flex flex-col items-center text-center transition-colors"
                >
                  <div className="rounded-lg flex items-center justify-center">
                    <Icon className="hover:text-white" size={24} />
                  </div>
                  <h3>{method.title}</h3>
                  <p className="hover:text-white text-sm mb-6">{method.description}</p>
                </Card>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
