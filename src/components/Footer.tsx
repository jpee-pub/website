import logo from "../assets/jpee+_logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0072ce] text-white p-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="JPEE+" className="h-14 mb-3 w-auto" />
            <p className="text-white text-sm">
              ITとコミュニケーションで欧州と日本を「近く」する
            </p>
          </div>

          <div>
            <h4 className="mb-5">活動を知る</h4>
            <ul className="space-y-2 text-sm text-white ">
              <li><a href="#about" className="text-white hover:text-[#003256] transition-colors">私たちの活動</a></li>
              <li><a href="#activities" className="text-white hover:text-[#003256] transition-colors">活動内容</a></li>
              <li><a href="#alliance" className="text-white hover:text-[#003256] transition-colors">JPEE+同盟</a></li>
              <li><a href="#archive" className="text-white hover:text-[#003256] transition-colors">エストニア・アンソロジーの軌跡</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5">フォロー・参加する</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#contact" className="text-white hover:text-[#003256] transition-colors">活動をフォローする</a></li>
              <li><a href="#career" className="text-white hover:text-[#003256] transition-colors">メンバー募集</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-white">
          <p>&copy; 2025 JPEE+. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
