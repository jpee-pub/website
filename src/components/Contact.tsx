import { MessageSquare, FileText, Mail } from "lucide-react";
import { Card } from "./ui/card";

const contactMethods = [
  {
    icon: MessageSquare,
    title: "Discord",
    description: "JPEE同盟のDiscordサーバーに参加して、コミュニティメンバーと交流しましょう。",
    action: "Discordに参加",
    primary: true
  },
  {
    icon: FileText,
    title: "Note / SNS",
    description: "NoteやSNSをフォローして、最新の活動情報をチェックできます。",
    action: "フォローする",
    primary: false
  },
  {
    icon: Mail,
    title: "お問い合わせ",
    description: "コラボレーション、同人誌購入、海外ノマド・インターンに関するお問い合わせはこちら。",
    action: "問い合わせる",
    primary: false
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">参加する</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            JPEEの活動に興味を持っていただきありがとうございます。
            様々な方法でコミュニティに参加できます。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card 
                key={index} 
                className={`p-6 ${method.primary ? 'border-2 border-blue-600' : ''}`}
              >
                <div className={`w-12 h-12 ${method.primary ? 'bg-blue-600' : 'bg-gray-100'} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={method.primary ? 'text-white' : 'text-gray-600'} size={24} />
                </div>
                <h3 className="mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{method.description}</p>
                <button 
                  className={`w-full py-2 px-4 rounded-md transition-colors ${
                    method.primary 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {method.action}
                </button>
              </Card>
            );
          })}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h3 className="mb-4 text-center">海外ノマド・インターンの方へ</h3>
            <p className="text-gray-600 text-center mb-6">
              エストニアや欧州に海外ノマドやインターンとして来られる方のサポートも行っています。
              現地情報の提供、コミュニティへの参加、ネットワーキングなど、
              お気軽にご相談ください。
            </p>
            <div className="text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
                詳しく相談する
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
