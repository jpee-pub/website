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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="flex h-18 justify-between items-center">

        <img src={logo} alt="JPEE+" className="h-14 ml-3 w-auto" />


        <button onClick={() => scrollToSection('hero')} className="flex mr-5 items-center gap-2 h-full">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-[#0072ce] transition-colors">
              私たちの活動
            </button>
            <button onClick={() => scrollToSection('activities')} className="hover:text-[#0072ce] transition-colors">
              活動内容
            </button>
            <button onClick={() => scrollToSection('alliance')} className="hover:text-[#0072ce] transition-colors">
              JPEE+同盟
            </button>
            <button onClick={() => scrollToSection('archive')} className="hover:text-[#0072ce] transition-colors">
              エストニア・アンソロジーの軌跡
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#0072ce] transition-colors">
              参加する
            </button>
            <button onClick={() => scrollToSection('career')} className="hover:text-[#0072ce] transition-colors">
              メンバー募集
            </button>
          </nav>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden m-3"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden p-4 flex flex-col gap-4">
          <button onClick={() => scrollToSection('about')} className="text-left hover:text-[#0072ce] transition-colors">
            私たちの活動
          </button>
          <button onClick={() => scrollToSection('activities')} className="text-left hover:text-[#0072ce] transition-colors">
            活動内容
          </button>
          <button onClick={() => scrollToSection('alliance')} className="text-left hover:text-[#0072ce] transition-colors">
            JPEE+同盟
          </button>
          <button onClick={() => scrollToSection('archive')} className="text-left hover:text-[#0072ce] transition-colors">
            エストニア・アンソロジーの軌跡
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-left hover:text-[#0072ce] transition-colors">
            参加する
          </button>
          <button onClick={() => scrollToSection('career')} className="text-left hover:text-[#0072ce] transition-colors">
            メンバー募集
          </button>
        </nav>
      )}
    </header>
  );
}
