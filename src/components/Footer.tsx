export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex flex-col gap-0.5">
                <div className="h-1 w-8 bg-blue-600"></div>
                <div className="h-1 w-8 bg-white"></div>
                <div className="h-1 w-8 bg-gray-600"></div>
              </div>
              <span className="tracking-wider">JPEE</span>
            </div>
            <p className="text-gray-400 text-sm">
              エストニアと日本を文化的に草の根でつなぐ
            </p>
          </div>

          <div>
            <h4 className="mb-4">リンク</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">JPEEについて</a></li>
              <li><a href="#activities" className="hover:text-white transition-colors">活動内容</a></li>
              <li><a href="#alliance" className="hover:text-white transition-colors">JPEE同盟</a></li>
              <li><a href="#archive" className="hover:text-white transition-colors">アーカイブ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">参加する</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#contact" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Note</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">お問い合わせ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} JPEE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
