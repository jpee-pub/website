import { FilePenLine } from "lucide-react";

const Icon = FilePenLine;

export function Career() {
  return (
    <section id="career" className="p-15 bg-gray-50">
      <div className="max-w-7xl mt-5 mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8 text-black">
          <h2 className="mb-4 text-[#0072ce] text-xl font-bold">JPEE+メンバー募集中!</h2>
          <p className="m-3">
            一緒に働くことで、海外に住みながら働くリアルを肌で感じることができます。
            エストニアでの起業・移住・留学などを考えている方にとっても、現地のリアルな情報や人脈に触れられる貴重な機会となるはずです！
          </p>
          <ul className="list-disc list-inside">
            <li>SNS運用を通して「海外×文化発信」に関わりたい方</li>
            <li>数字を見て改善することにやりがいを感じる方</li>
            <li>企画と分析の両方を経験したい学生・若手社会人</li>
            <li>エストニアや北欧文化に興味がある方</li>
            <li>海外在住メンバーと協働しながら、海外で働くリアルを体感したい方</li>
            <li>将来的にエストニアやヨーロッパでの起業・移住・留学を視野に入れている方</li>
          </ul>
          <p className="m-3">
            国や言葉を越えて、“好き”でつながる人々の輪を広げたい。
            JPEE+は、そんな想いから生まれた文化プロジェクトです。
            あなたの発信力と分析力が、次の交流の架け橋になります。
          </p>

        </div>

        <a
          href="https://forms.gle/RKR8imzVCH3HogSXA"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-block text-white bg-[#0072ce] p-5 rounded-md hover:bg-[#005ea2] transition-colors text-3xl font-bold"
        >
          <div className="text-center">
            <Icon className="text-white inline-block mx-4 translate-y-[-2px] shrink-0" size={28} />
            クリックしてJPEE+の活動に参加
            <Icon className="text-white inline-block mx-4 translate-y-[-2px] shrink-0" size={28} />
          </div>
        </a>

      </div>
    </section>
  );
}
