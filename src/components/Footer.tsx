import logo from "../assets/jpee_newlogo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0072ce] text-white p-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="JPEE" className="h-14 mb-3 w-auto" />
            <p className="text-white text-sm pr-10">
              ITとコミュニケーションで欧州と日本を「近く」する
            </p>
          </div>

          <div>
            <ul className="text-sm text-white py-6 space-y-2">
              <li><a href="#about" className="text-white hover:text-[#003256] transition-colors">私たちの活動</a></li>
              <li><a href="#activities" className="text-white hover:text-[#003256] transition-colors">活動内容</a></li>
              <li><a href="#alliance" className="text-white hover:text-[#003256] transition-colors">JPEE同盟</a></li>
              <li><a href="#archive" className="text-white hover:text-[#003256] transition-colors">エストニア・アンソロジーの軌跡</a></li>
              <li><a href="#members" className="text-white hover:text-[#003256] transition-colors">メンバー紹介</a></li>
              <li><a href="#contact" className="text-white hover:text-[#003256] transition-colors">デザインパートナー(参加する)</a></li>
              <li><a href="#career" className="text-white hover:text-[#003256] transition-colors">メンバー募集</a></li>
            </ul>
          </div>

          <div className="text-sm text-white py-6 space-y-2">
            <div className="font-bold mb-1">登記情報</div>
            <p>法人名: OÜ Roua</p>
            <p>登録番号: 14642498</p>
            <p>登記住所: Juhkentali tn 8, Kesklinna linnaosa, 10132 Tallinn, Harju maakond</p>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-white">
          <p>&copy; 2025 JPEE. Operated by OÜ ROUA.</p>
        </div>
      </div>
    </footer>
  );
}
