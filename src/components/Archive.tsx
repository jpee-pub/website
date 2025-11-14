import books1 from "../assets/books1.jpg";
import books2 from "../assets/books2.jpg";
import books3 from "../assets/est_lang_book2.jpg";
import books4 from "../assets/est_lang_book3.jpg";
import { useState } from "react";

export function Archive() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <section id="archive" className="py-15 bg-gray-50">
      <div className="max-w-7xl mt-5 mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="mb-4 text-[#0072ce] text-xl font-bold">エストニア・アンソロジーの軌跡</h2>
          <p className="text-black max-w-2xl mx-auto">
            5年間にわたり発行してきた、エストニアがテーマの同人アンソロジー本の記録です。<br />
            エストニア在住の日本人やエストニア人、旅行者、エストニアに関心を持つ日本人が寄稿し、多様な視点からエストニアを紹介してきました。<br />
            当時は「色んな人のエストニア体験が聞きたい」という自分たちの興味関心から始まりましたが、
            つながりを作りたいという気持ちはこの活動を通じて育まれてきました。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start m-10">

          <div className="space-y-6 text-center">
            <img
              src={hover1 ? books2 : books1}
              alt="JPEEエストニア・アンソロジー"
              className="w-full h-70 object-cover rounded-lg"
              onMouseEnter={() => setHover1(true)}
              onMouseLeave={() => setHover1(false)}
            />
            <img
              src={hover2 ? books4 : books3}
              alt="JPEEエストニア・アンソロジー"
              className="w-full h-70 object-cover rounded-lg"
              onMouseEnter={() => setHover2(true)}
              onMouseLeave={() => setHover2(false)}
            />
          </div>

          <div className="space-y-6 text-black">
            <p>
              JPEEエストニア・アンソロジーは、様々な寄稿者が各々の「エストニア」について自由なテーマで書いた同人アンソロジー本です。
              2019年から2024年までの5年間にわたり毎年1冊ずつ刊行、在住者の日々の生活の様子から旅行記、文化や歴史、ITや軍事といった専門的な内容まで多様な視点からエストニアを紹介してきました。
            </p>
            <p>
              その制作活動をする中で、ただ本を出すだけでなくより多くの人に読んでもらいエストニアに興味を持ってもらいたい。
              また執筆者にただ書いてもらって終わりではなく、共通項を通じてもっとつながりたい。
              そして更に、読者と情報発信者が交流することで、エストニアと日本の間で文化的・人的なつながりを深める助けに少しでもなれば、という思いで活動してきました。
              これが発展し、欧州と日本をつなぐJPEEの今の活動につながっています。
            </p>
            <p>
              現地での日本文化発信イベントに参加したり、日本語では珍しいエストニア語学習の補助教材を制作したりと、アンソロジー本の枠を超えた活動も行っています。
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-6 rounded-md border border-gray-300 text-center">

          <p className="mb-3 text-black">
            本誌や関連グッズは各種通販サイトにて取り扱い中です。ぜひご覧ください。
          </p>

          <div className="flex flex-row items-center text-center justify-center gap-6">

            <a
              href="https://jpee.booth.pm/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 m-4 bg-[#ff5c67] text-white rounded-md hover:bg-[#da4e58] transition-colors"
            >
              BOOTHでチェック
            </a>

            <a
              href="https://www.amazon.co.jp/s?i=digital-text&rh=p_27%3AJPEE%25E7%25B7%25A8%25E9%259B%2586%25E9%2583%25A8&s=relevancerank&language=en&text=JPEE%E7%B7%A8%E9%9B%86%E9%83%A8&ref=dp_byline_sr_ebooks_1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#FF9900] text-white rounded-md hover:bg-[#e67e22] transition-colors"
            >
              Amazon Kindleでチェック
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
