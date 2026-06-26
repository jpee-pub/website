import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/jpee+_logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0072ce] shadow-lg/30">
      <div className="flex h-18 justify-between items-center">

        <img src={logo} alt="JPEE+" className="h-14 ml-3 w-auto" onClick={() => scrollToSection('intro')} />



        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 mr-5 font-semibold whitespace-nowrap text-white">
          <button onClick={() => scrollToSection('hero')} className="hover:text-[#003399] transition-colors cursor-pointer">
            最新情報
          </button>
          <button onClick={() => scrollToSection('about')} className="hover:text-[#003399] transition-colors cursor-pointer">
            私たちの活動
          </button>
          <button onClick={() => scrollToSection('activities')} className="hover:text-[#003399] transition-colors cursor-pointer">
            活動内容
          </button>
          <button onClick={() => scrollToSection('members')} className="hover:text-[#003399] transition-colors cursor-pointer">
            メンバー紹介
          </button>
          <button onClick={() => scrollToSection('alliance')} className="hover:text-[#003399] transition-colors cursor-pointer">
            JPEE+同盟
          </button>
          <button onClick={() => scrollToSection('archive')} className="hover:text-[#003399] transition-colors cursor-pointer">
            エストニア・アンソロジーの軌跡
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-[#003399] transition-colors cursor-pointer">
            参加する
          </button>
          <button onClick={() => scrollToSection('career')} className="hover:text-[#003399] transition-colors cursor-pointer">
            メンバー募集
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden m-3 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden p-4 flex flex-col gap-4 text-white">
          <button onClick={() => scrollToSection('hero')} className="text-left">
            最新情報
          </button>
          <button onClick={() => scrollToSection('about')} className="text-left">
            私たちの活動
          </button>
          <button onClick={() => scrollToSection('activities')} className="text-left">
            活動内容
          </button>
          <button onClick={() => scrollToSection('career')} className="text-left">
            メンバー募集
          </button>
          <button onClick={() => scrollToSection('alliance')} className="text-left">
            JPEE+同盟
          </button >
          <button onClick={() => scrollToSection('archive')} className="text-left">
            エストニア・アンソロジーの軌跡
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-left">
            参加する
          </button>
        </nav >
      )
      }
    </header >
  );
}
