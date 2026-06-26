export function Intro() {
  return (
    <section id="intro" className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="mt-30 mb-10 mr-5 ml-5 text-[#0072ce] flex flex-col items-center">
        <p className="w-full text-center text-2xl font-bold">
          私たちJPEE+（じぇぺーぷらす）は欧州と日本を「近く」します！
        </p>
        <a href="#about"
          className="mt-4 bg-[#0072ce] text-white text-xl font-bold px-8 py-3 rounded-md hover:bg-[#005bb5] transition-colors">
          ▼ 活動内容について詳しく見る！ ▼
        </a>
      </div>
    </section>
  );
}
