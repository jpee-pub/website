import { Card } from "./ui/card";

const DiscordIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <path fill="#ffffff" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
  </svg>
);

const NoteIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <path fill="#ffffff" d="M0 .279c4.623 0 10.953-.235 15.498-.117 6.099.156 8.39 2.813 8.468 9.374.077 3.71 0 14.335 0 14.335h-6.598c0-9.296.04-10.83 0-13.759-.078-2.578-.814-3.807-2.795-4.041-2.097-.235-7.975-.04-7.975-.04v17.84H0Z"/>
  </svg>
);

const SpotifyIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <path fill="#ffffff" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <path fill="#ffffff" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const activities = [
  {
    icon: DiscordIcon,
    title: "Discord",
    description: "JPEE同盟のメインプラットフォーム。情報交換、雑談、イベント企画など、日々活発な交流が行われています。",
    status: "活動中",
    link: "#alliance",
    color: "bg-[#7289DA]"
  },
  {
    icon: NoteIcon,
    title: "Note",
    description: "エストニア・アンソロジーのコンテンツに加え、文化、生活、イベントレポートなど、様々な寄稿者による多角的な記事を発信しています。",
    status: "活動中",
    link: "https://note.com/jpee_estonia",
    color: "bg-[#41C9B4]"
  },
  {
    icon: SpotifyIcon,
    title: "ラジオ",
    description: "JPEEの活動やメンバー、ゲストによるトークを配信中。活動の紹介から意外な裏側まで!?幅広くお届け。",
    status: "活動中",
    link: "https://open.spotify.com/show/7tJU925JHdciHouOirTfQK?si=f0106f076ab54f19",
    color: "bg-[#1ED760]"
  },
  {
    icon: YoutubeIcon,
    title: "YouTube",
    description: "プロモ動画や活動の様子、ラジオトークの動画版を配信します。見てわかるJPEEの魅力をどうぞ!",
    status: "準備中",
    link: "https://www.youtube.com/@jpee1690",
    color: "bg-[#FF0000]"
  }
];

export function Activities() {
  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-[#0072ce] text-xl font-bold">活動内容</h2>
          <p className="text-black max-w-2xl mx-auto">
            オンラインとオフラインの垣根なく、欧州と日本のつながりをつくっていきます。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <a
                key={index}
                href={activity.link}
                className="block w-full h-full"
                target={activity.link.startsWith("#") ? "_self" : "_blank"}
                rel={activity.link.startsWith("#") ? undefined : "noopener noreferrer"}
              >

                <Card key={index} className="p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`${activity.color} w-12 h-12 rounded-lg flex items-center justify-center shrink-0`}>
                      <Icon />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0072ce]">{activity.title}</h3>
                  </div>
                  <p className="text-black text-sm mb-4">{activity.description}</p>
                </Card>

              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}