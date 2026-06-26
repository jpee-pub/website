import MariaProf from "../assets/ykkr_roua.png";
import YukiProf from "../assets/profile.jpg";
import HinakoProf from "../assets/hinako.jpg";
import AkemiProf from "../assets/akemi.png";
import JchanEkun from "../assets/じぇーちゃんえぇくん.png";
import { MapPin } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

const members = [
  {
    id: 1,
    name: "Roua/Maria",
    role: "JPEE+代表 / EdTech系PdM・コミックアーティスト ",
    description: (
      <>
        神戸出身。東京大学経済学部への入学を機に上京。<br />
        在学中〜卒業後にかけて父の会社のフィリピンオフィス立ち上げをサポートするべくマニラに行ったり、卒業後はニューヨークでインターンしたり、エストニアで<a href="https://www.roua12tnt.com/" target="_blank" rel="noopener noreferrer" className="text-[#0072ce] underline hover:text-[#005ea2] transition-colors">OÜ Roua</a>を立ち上げたりした。
        現在はクロアチアでデジタルノマドとして主に教育系スタートアップでプロダクトマネージャーとして働いている。<br />
        また本業の傍ら、フランスのウェブ漫画出版社からのスカウトを受けて<a href="https://www.ono.live/webtoon/devilish-vows" target="_blank" rel="noopener noreferrer" className="text-[#0072ce] underline hover:text-[#005ea2] transition-colors">Devilish Vows</a>の連載を持つなど、コミックアーティストとしても活躍。このグローバルコミュニティJPEE+の発起人として、グローバルな引きこもりを掲げながら様々な挑戦を続けている。
      </>
    ),
    location: "クロアチア - ザグレブ",
    image: MariaProf,
    links: [
      { label: "X (Twitter)", url: "https://x.com/roua12tnt" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/maria-nawatani-a264337b/" },
      { label: "Instagram", url: "https://www.instagram.com/roua12tnt/" },
    ],
  },
  {
    id: 2,
    name: "Yuki",
    role: "JPEE+コンテンツ制作・運営 / グラフィックデザイナー・ソフトウェアエンジニア",
    description: (
      <>
        北海道出身。北海道札幌南高等学校を卒業後は札幌市立大学デザイン学科へ進学し、在学中にフィンランドのラップランド大学アート学科へ一年間の交換留学も行った。留学で暮らしたヨーロッパの魅力が忘れられず、日本で大学卒業後にエストニアのタリン大学大学院へ進学、修了後はそのまま現地に移住する。<br />
        エストニアでフリーランスとして会社<a href="https://ariregister.rik.ee/eng/company/16449207/O%C3%9C-illuminate-KMKZ" target="_blank" rel="noopener noreferrer" className="text-[#0072ce] underline hover:text-[#005ea2] transition-colors">OÜ illuminate KMKZ</a>を設立し、エストニアを拠点とするメディア企業Podium Northで日本向けローカライズコンテンツのデザイン制作に携わったり、現地で日本文化振興を行うNPO法人Jaapani Kultuuri Kodaの日本語教室での勤務など、「現地と日本を繋ぐ」活動を続けている。
      </>
    ),
    location: "エストニア - タリン",
    image: YukiProf,
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/yuki-kaneko-b5109a1ba/" },
      { label: "GitHub", url: "https://github.com/YukiKaneko211" },
      { label: "ポートフォリオ", url: "https://kamikazewanderer.portfoliobox.net/" },
    ],
  },
  {
    id: 3,
    name: "Hinako",
    role: "JPEE+ファミリー / 人事・法人営業・キャリアコンサルタント",
    description: (
      <>
        沖縄出身。早稲田大学人間科学部卒業後、パソナのベンチャー企業ベネフィット・ワンで法人営業としてキャリアをスタートする。その後リクルートに転職し着実に日本での実績を重ねてきたが、ずっと憧れだった海外生活の夢を実現するため退職を決意。カナダへの語学留学やMavensWood Investmentsでのインターンで実力を積み、現在はオランダに移住。<br />
        日本で培った営業や人事部での経験を活かし、今度はグローバルな環境で多様な「人と人とを繋ぐ」仕事を続けている。<br />
        JPEE+プロジェクトの立ち上げ時期に、ポッドキャスト『JPEE Radio』の企画とパーソナリティを担当。欧州生活のリアルを日本の視聴者へ届ける役割を担った。
      </>
    ),
    location: "オランダ - ハーグ",
    image: HinakoProf,
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/hinakotamaki81/" },
      { label: "Note", url: "https://note.com/thina_81" },
    ],
  },
  {
    id: 4,
    name: "Akemi",
    role: "JPEE+ファミリー / 看護師・ゲームデザイナー",
    description: (
      <>
        山口県出身。東京大学医学部健康総合科学科在学中から医療福祉の専門職としてキャリアをスタートし、卒業後は国立がん研究センター東病院にて看護師として最先端のがん医療の現場に従事。<br />
        その後、ヘルスケアとゲームを掛け合わせた領域への関心からエストニアへ渡り、タリン大学大学院のDigital Learning Games修士課程に進学。自身のバックグラウンドを活かしながら、さらに専門を広げ、学習用ゲームのデザインなど「ゲームを通じたコミュニケーション」を実践してきた。<br />
        現在はエストニア国内のゲーム開発者から翻訳依頼を受けるなどゲーム業界にコミットしながら、JPEE+でエストニアと日本を繋ぐ活動の支援や、ゲームプロジェクト部門の立ち上げを企画中。専門性を活かしつつ、新たな可能性を追求し続けている。
      </>
    ),
    location: "エストニア - タリン",
    image: AkemiProf,
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/akemi-03b991272/" },
      { label: "Portfolio", url: "https://linktr.ee/ake3desuyo" },
    ],
  },
  {
    id: 5,
    name: "じぇーちゃん & えーくん",
    role: "JPEE+ 公式アンバサダー",
    description: (
      <>
        JPEE+の活動を世界に広めるべく誕生した公式マスコットコンビ。<br />
        電子国家エストニアのネットの海から生まれたウェブ美少女（概念）「じぇーちゃん」と、関西人のおっちゃんが転生した妖精「えぇくん」が、ITとコミュニケーションを武器に「欧州と日本を近くする」ため今日も世界各地を飛び回っている。<br />
      </>
    ),
    location: "ネットの海",
    image: JchanEkun,
    links: [],
  },
]

export function MemberGreeting() {
  return (
    <section id="members" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl text-[#0072ce] font-bold text-center mb-12">メンバー紹介</h2>
        <div className="flex justify-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl"
          >
            <CarouselContent>
              {members.map((member) => (
                <CarouselItem key={member.id} className="md:basis-1/1 lg:basis-1/1">
                  <div className="px-8">
                    <Card>
                      <CardContent className="grid grid-cols-1 md:grid-cols-2 items-center p-6 gap-6">
                        <div className="flex justify-center items-center">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 md:w-[200px] md:h-[200px] rounded-full object-cover border-4 border-white shadow-md"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-xl text-[#0072ce] font-bold mb-1">{member.name}</h3>
                          <p className="text-sm my-2">{member.role}</p>

                          {member.location && (
                            <div className="flex items-center gap-1 text-sm my-2 justify-center md:justify-start">
                              <MapPin size={16} />
                              <span>{member.location}</span>
                            </div>
                          )}

                          {member.links && member.links.length > 0 && (
                            <div className="flex flex-wrap gap-4 my-2 justify-center md:justify-start">
                              {member.links.map((link, index) => (
                                <a
                                  key={index}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#0072ce] hover:underline text-sm font-medium whitespace-nowrap"
                                >
                                  {link.label}
                                </a>
                              ))}
                            </div>
                          )}

                          {member.description && (
                            <Accordion type="single" collapsible className="w-full my-2">
                              <AccordionItem value="item-1" className="border-b-0">
                                <AccordionTrigger className="py-0 [&>svg]:translate-y-[-0.5px] [&>svg]:translate-x-[-10px] text-sm text-[#0072ce] items-center translate-x-3 justify-center hover:underline md:justify-start">
                                  自己紹介・略歴
                                </AccordionTrigger>
                                <AccordionContent>
                                  <div className="py-1 text-sm text-gray-600 leading-relaxed whitespace-pre-wrap text-left">
                                    {member.description}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          )}

                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="w-12 h-12 text-[#0072ce] border-0 bg-transparent hover:bg-gray-200 hover:text-[#0072ce]" />
            <CarouselNext className="w-12 h-12 text-[#0072ce] border-0 bg-transparent hover:bg-gray-200 hover:text-[#0072ce]" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
