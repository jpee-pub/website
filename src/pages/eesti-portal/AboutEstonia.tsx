import React from "react";
import { TableOfContents } from "../../components/TableOfContents";

export default function () {
  const contentRef = React.useRef<HTMLElement | null>(null);

  return (
    <div className="pt-28 pb-16 px-4 max-w-5xl mx-auto min-h-[80vh] flex flex-col">
      <div className="mb-12">
        <h1 className="text-4xl font-black tracking-wide text-[#0072ce] mb-3">在住者の語るエストニアの魅力と基礎知識</h1>
        <section className="intro-section space-y-4 text-gray-700 leading-relaxed p-6">
          <p>
          「エストニア」と聞いて、皆さんはどんな単語が思い浮かびましたか？
          </p>
          <p>
          「う〜ん、全然わからない…」という方もいれば、「IT先進国」というイメージをお持ちの方もいるかもしれません。あるいはエストニア出身力士の「バルト」氏を覚えておられる方もいるでしょうか。
          </p>
          <p>
          無理を承知で、エストニアを一言で表現するなら…「デジタルと中世の街並みが共存する、実は日本から一番近い北欧の一つ」。
          </p>
          <p>
          エストニアは、四国と九州を合わせたほどの面積に約130万人が暮らす小さな国です。しかし、そのコンパクトな国土には、世界最先端の「電子政府」と、ユネスコ世界遺産に登録された伝統ある「中世の旧市街」、そして国土の半分以上を占める「豊かな森林」による自然が凝縮されています。そして実は、大きなロシア一国を挟んで、日本からは「お隣さんの隣」の国だったりします。
          </p>
          <p>
          旅行や長期滞在の選択肢の一つとして、あるいは単なる豆知識の一つとして。エストニアについてもっと知ってみませんか？
          </p>

           <TableOfContents contentRef={contentRef} />
        </section>
      </div>
    </div>
  );
}