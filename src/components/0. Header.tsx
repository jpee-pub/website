import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/jpee+_logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutSubOpen, setIsAboutSubOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
    setIsAboutSubOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      const element = document.getElementById("intro");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
    setIsAboutSubOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0072ce] shadow-lg/30">
      <div className="flex h-18 justify-between items-center px-4 max-w-7xl mx-auto">
        <img
          src={logo}
          alt="JPEE+"
          className="h-14 w-auto cursor-pointer"
          onClick={handleLogoClick}
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-semibold whitespace-nowrap text-white">
          <div className="relative group py-2">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleLogoClick();
              }}
              className="hover:text-[#003399] transition-colors cursor-pointer flex items-center gap-1"
            >
              JPEE+について
              <ChevronDown size={16} />
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:flex flex-col min-w-[240px] z-50">
              <div className="bg-white text-gray-800 rounded-lg shadow-xl py-2 border border-gray-100 flex flex-col">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="w-full text-left px-4 py-2 hover:text-[#0072ce] hover:bg-[#0072ce]/5 text-sm font-semibold transition-colors cursor-pointer"
                >
                  最新情報
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="w-full text-left px-4 py-2 hover:text-[#0072ce] hover:bg-[#0072ce]/5 text-sm font-semibold transition-colors cursor-pointer"
                >
                  私たちの活動
                </button>
                <button
                  onClick={() => scrollToSection("activities")}
                  className="w-full text-left px-4 py-2 hover:text-[#0072ce] hover:bg-[#0072ce]/5 text-sm font-semibold transition-colors cursor-pointer"
                >
                  活動内容
                </button>
                <button
                  onClick={() => scrollToSection("members")}
                  className="w-full text-left px-4 py-2 hover:text-[#0072ce] hover:bg-[#0072ce]/5 text-sm font-semibold transition-colors cursor-pointer"
                >
                  メンバー紹介
                </button>
                <button
                  onClick={() => scrollToSection("alliance")}
                  className="w-full text-left px-4 py-2 hover:text-[#0072ce] hover:bg-[#0072ce]/5 text-sm font-semibold transition-colors cursor-pointer"
                >
                  JPEE+同盟
                </button>
                <button
                  onClick={() => scrollToSection("archive")}
                  className="w-full text-left px-4 py-2 hover:text-[#0072ce] hover:bg-[#0072ce]/5 text-sm font-semibold transition-colors cursor-pointer"
                >
                  エストニア・アンソロジーの軌跡
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full text-left px-4 py-2 hover:text-[#0072ce] hover:bg-[#0072ce]/5 text-sm font-semibold transition-colors cursor-pointer"
                >
                  参加する
                </button>
                <button
                  onClick={() => scrollToSection("career")}
                  className="w-full text-left px-4 py-2 hover:text-[#0072ce] hover:bg-[#0072ce]/5 text-sm font-semibold transition-colors cursor-pointer"
                >
                  メンバー募集
                </button>
              </div>
            </div>
          </div>

          <Link
            to="/eesti-portal"
            className="hover:text-[#003399] transition-colors cursor-pointer"
          >
            エストニア情報
          </Link>
          <Link
            to="/jpee-plus-lab"
            className="hover:text-[#003399] transition-colors cursor-pointer"
          >
            JPEE+Lab
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#0072ce] border-t border-[#005bb5] p-4 flex flex-col gap-4 text-white max-h-[85vh] overflow-y-auto">
          <div>
            <button
              onClick={() => setIsAboutSubOpen(!isAboutSubOpen)}
              className="flex items-center justify-between w-full text-left font-semibold"
            >
              <span>JPEE+について</span>
              {isAboutSubOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {isAboutSubOpen && (
              <div className="pl-4 mt-2 flex flex-col gap-3 border-l-2 border-[#005bb5] text-sm">
                <button onClick={() => scrollToSection("hero")} className="text-left py-1">
                  最新情報
                </button>
                <button onClick={() => scrollToSection("about")} className="text-left py-1">
                  私たちの活動
                </button>
                <button onClick={() => scrollToSection("activities")} className="text-left py-1">
                  活動内容
                </button>
                <button onClick={() => scrollToSection("members")} className="text-left py-1">
                  メンバー紹介
                </button>
                <button onClick={() => scrollToSection("alliance")} className="text-left py-1">
                  JPEE+同盟
                </button>
                <button onClick={() => scrollToSection("archive")} className="text-left py-1">
                  エストニア・アンソロジーの軌跡
                </button>
                <button onClick={() => scrollToSection("contact")} className="text-left py-1">
                  参加する
                </button>
                <button onClick={() => scrollToSection("career")} className="text-left py-1">
                  メンバー募集
                </button>
              </div>
            )}
          </div>

          <Link
            to="/eesti-portal"
            onClick={() => setIsMenuOpen(false)}
            className="font-semibold text-left"
          >
            エストニア情報
          </Link>
          <Link
            to="/jpee-plus-lab"
            onClick={() => setIsMenuOpen(false)}
            className="font-semibold text-left"
          >
            JPEE+Lab
          </Link>
        </nav>
      )}
    </header>
  );
}
