import { Link } from "react-router-dom";
import logo from "../assets/jpee+_logo.png";

export function Footer() {

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
            <ul className="text-sm text-white py-6 space-y-2 font-semibold">
              <li><Link to="/" className="text-white hover:text-[#003256] transition-colors">JPEE+について</Link></li>
              <li><Link to="/eesti-portal" className="text-white hover:text-[#003256] transition-colors">エストニア情報</Link></li>
              <li><Link to="/jpee-plus-lab" className="text-white hover:text-[#003256] transition-colors">JPEE+Lab</Link></li>
            </ul>
          </div>

          <div className="text-sm text-white py-6 space-y-2">
            <div className="font-bold mb-1">登記情報</div>
            <div>法人名: OÜ Roua</div>
            <div>登録番号: 14642498</div>
            <div>登記住所: Juhkentali tn 8, Kesklinna linnaosa, 10132 Tallinn, Harju maakond</div>
            <div><a href="https://ariregister.rik.ee/eng/company/14642498/O%C3%9C-Roua" className="text-white underline hover:text-[#003256] transition-colors">エストニアの法人登記局の登録情報はこちら</a></div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-white">
          <div>&copy; 2025 JPEE+. Operated by OÜ ROUA.</div>
        </div>
      </div>
    </footer>
  );
}
