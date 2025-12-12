import * as React from "react"
import { MapPinned } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

const members = [
  {
    id: 1,
    name: "Maria",
    role: "代表 / PM",
    description: "",
    location: "クロアチア - ザグレブ",
    career: [
      "20xx年 xx大学 卒業",
      "20xx年 株式会社xx 入社",
      "20xx年 JPEE 設立",
    ],
    image: "https://placehold.co/150x150",
    links: [
      { label: "X (Twitter)", url: "#" },
      { label: "LinkedIn", url: "#" },
    ],
  },
  {
    id: 2,
    name: "Yuki",
    role: "リードデザイナー & ソフトウェアエンジニア",
    description: "ここにメンバーAの紹介文が入ります。得意なデザイン分野などを記載します。",
    location: "エストニア - タリン",
    career: [
      "20xx年 xx美術大学 卒業",
      "20xx年 フリーランスとして活動開始",
    ],
    image: "https://placehold.co/150x150",
    links: [
      { label: "Portfolio", url: "#" },
      { label: "GitHub", url: "#" },
    ],
  },
  {
    id: 3,
    name: "Hinako",
    role: "人事・コミュニティ担当 / HRBP",
    description: "ここにメンバーBの紹介文が入ります。技術スタックや実績などを記載します。",
    location: "オランダ - ハーグ",
    career: [
      "20xx年 xx大学 文学部 卒業",
      "20xx年 人材系企業にてHRBPとして従事",
    ],
    image: "https://placehold.co/150x150",
    links: [
      { label: "Note", url: "#" },
    ],
  },
  {
    id: 4,
    name: "じぇーちゃん & えーくん",
    role: "広報キャラクター",
    description: "ここにメンバーBの紹介文が入ります。技術スタックや実績などを記載します。",
    location: "ネットの海",
    career: [],
    image: "https://placehold.co/150x150",
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
                          <p className="text-sm text-muted-foreground my-2">{member.role}</p>
                          <p className="text-gray-600 leading-relaxed">
                            {member.description}
                          </p>

                          {member.career && member.career.length > 0 && (
                            <Accordion type="single" collapsible className="w-full my-2">
                              <AccordionItem value="item-1" className="border-b-0">
                                <AccordionTrigger className="py-0 [&>svg]:translate-y-[-0.5px] [&>svg]:translate-x-[-10px] text-sm text-[#0072ce] items-center translate-x-3 justify-center hover:underline">
                                  経歴
                                </AccordionTrigger>
                                <AccordionContent>
                                  <ul className="py-1 list-none list-inside text-sm text-gray-600 space-y-1">
                                    {member.career.map((item, i) => (
                                      <li key={i}>{item}</li>
                                    ))}
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          )}

                          {member.location && (
                            <div className="flex items-center gap-1 text-sm text-gray-500 my-2 justify-center md:justify-start">
                              <MapPinned size={16} />
                              <span>{member.location}</span>
                            </div>
                          )}

                          {member.links && member.links.length > 0 && (
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                              {member.links.map((link, index) => (
                                <a
                                  key={index}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#0072ce] hover:underline text-sm font-medium"
                                >
                                  {link.label}
                                </a>
                              ))}
                            </div>
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
