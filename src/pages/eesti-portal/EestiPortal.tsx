import { useNavigate } from "react-router-dom";
import akemiQaImg from "../../assets/akemi_qa.png";
import estonianClubImg from "../../assets/estonian_study_club.jpg";
import museumCalImg from "../../assets/museum_calendar.png";
import { EestiMendanCTA } from "../../components/EestiMendanCTA";

interface PortalCardItem {
  to: string;
  title: string;
  image: string;
  imageAlt: string;
  description: React.ReactNode;
  updatedAt?: string;
}

const PORTAL_CARDS: PortalCardItem[] = [
  {
    to: "/eesti-portal/qa",
    title: "留学・移住直前Q&A",
    image: akemiQaImg,
    imageAlt: "Akemi Q&A",
    updatedAt: "2026/08/06",
    description: (
      <>
        <p>
          「留学・移住すると決めたけど、実際何をすればいいの？」「渡航準備を進めていたら疑問が出てきたけど、誰に聞けばいいのかわからない...」という方におすすめです。2023年からエストニア在住のJPEE+メンバーAkemiがばっちり答えます！
        </p>
        <p>
          実際に海外で暮らした経験者の「これはやっておけばよかった！」というお得な情報も必見です👀
        </p>
      </>
    ),
  },
  {
    to: "https://www.instagram.com/estonian_studyclub/",
    title: "Estonian Self Study Club",
    image: estonianClubImg,
    imageAlt: "Estonian Self Study Club",
    updatedAt: "2026/09/20",
    description: (
      <>
        <p>
          Akemiさんが主催の、タリンでエストニア語を学習中の方向けの勉強会です。タリン市内のカフェで不定期開催中。参加の際のエストニア語レベルは不問です。
        </p>
        <p>
          「エストニア語の練習相手がいない…」<br />
          「勉強を続けるモチベーションを保つのが難しい」<br />
          そんな悩みをお持ちの方は、ぜひ一度覗いてみてくださいね。
        </p>
        <p>
          自信がない方、初心者の方も大歓迎！雰囲気やスケジュールはリンク先のInstagramからどうぞ！
        </p>
      </>
    ),
  },
  {
    to: "https://app.notion.com/p/b9dbd385278f824aa473011f371b0b1b?v=816bd385278f8229aea40814d4fb3b53&source=copy_link",
    title: "タリン市内ミュージアムカレンダー",
    image: museumCalImg,
    imageAlt: "タリン市内ミュージアムカレンダー",
    updatedAt: "2026/08/06",
    description: (
      <>
        <p>
          エストニアの様々な美術館や博物館を楽しめる年パスMuuseum Kaartで行ける、タリン市内のミュージアムの企画展示の会期をまとめたカレンダーです。
          年パスを余すことなく使い尽くしたい方、エストニアの文化や歴史にたっぷりと触れたい方におすすめです。
        </p>
        <p>
          現在更新は手動で行っていますので、アップデート漏れなどがある場合はご一報ください📩
        </p>
      </>
    ),
  },
];

export default function EestiPortal() {
  const navigate = useNavigate();

  // リンクの種類によって遷移方法を切り替えるハンドラー
  const handleCardClick = (to: string) => {
    if (to.startsWith("http://") || to.startsWith("https://")) {
      window.open(to, "_blank", "noopener,noreferrer");
    } else {
      navigate(to);
    }
  };

  return (
    <div className="pt-28 pb-16 px-4 max-w-5xl mx-auto min-h-[80vh] flex flex-col gap-12">
      <div className="text-center">
        <h1 className="text-4xl font-black tracking-wide text-[#0072ce] mb-3">エストニア情報</h1>
        <p className="text-gray-600">
          エストニアについての留学、移住、現地の生活情報などを集約・発信するポータルページです。
        </p>
      </div>

      {/* Card List Section */}
      <div className="flex flex-col gap-15">
        {PORTAL_CARDS.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(card.to)}
            className="hover:bg-[#e4effa] transition-all duration-300 cursor-pointer sm:flex w-full"
          >
            <div className="bg-white overflow-hidden flex-1 shrink-0">
              <img
                src={card.image}
                alt={card.imageAlt}
                className="object-cover block w-full h-full max-h-[200px] sm:max-h-[250px]"
              />
            </div>

            {/* 右側：テキストエリア */}
            <div className="p-5 flex flex-col justify-between gap-2 box-border flex-2">
              <div className="space-y-2 overflow-hidden">
                <h2 className="text-xl md:text-2xl font-bold text-[#0072ce] group-hover:underline">
                  {card.title}
                </h2>
                <div className="text-gray-700 text-xs md:text-xl leading-relaxed space-y-1">
                  {card.description}
                </div>
              </div>

              {/* 最終更新日 */}
              {card.updatedAt && (
                <div className="text-right text-xs md:text-sm font-bold text-[#0072ce]">
                  最終更新日 : {card.updatedAt}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <EestiMendanCTA />

    </div>
  );
}