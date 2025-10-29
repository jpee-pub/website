import { Menu, X } from "lucide-react";
import { useState } from "react";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2"
          >
            <div className="flex flex-col gap-0.5">
              <div className="h-1 w-8 bg-blue-600"></div>
              <div className="h-1 w-8 bg-black"></div>
              <div className="h-1 w-8 bg-white border border-gray-300"></div>
            </div>
            <span className="tracking-wider">JPEE</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition-colors">
              JPEEについて
            </button>
            <button onClick={() => scrollToSection('activities')} className="hover:text-blue-600 transition-colors">
              活動内容
            </button>
            <button onClick={() => scrollToSection('alliance')} className="hover:text-blue-600 transition-colors">
              JPEE同盟
            </button>
            <button onClick={() => scrollToSection('archive')} className="hover:text-blue-600 transition-colors">
              アーカイブ
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition-colors">
              参加する
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="text-left hover:text-blue-600 transition-colors">
              JPEEについて
            </button>
            <button onClick={() => scrollToSection('activities')} className="text-left hover:text-blue-600 transition-colors">
              活動内容
            </button>
            <button onClick={() => scrollToSection('alliance')} className="text-left hover:text-blue-600 transition-colors">
              JPEE同盟
            </button>
            <button onClick={() => scrollToSection('archive')} className="text-left hover:text-blue-600 transition-colors">
              アーカイブ
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left hover:text-blue-600 transition-colors">
              参加する
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
