import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Book, Calendar } from "lucide-react";

export function Archive() {
  return (
    <section id="archive" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">アーカイブ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            これまでの活動を振り返ります。
            5年間にわたり発行してきた同人アンソロジー本の記録です。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1760869028228-462a61e21644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGV4Y2hhbmdlJTIwYm9va3N8ZW58MXx8fHwxNzYxNTg3MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Books archive"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Book className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="mb-2">エストニア同人アンソロジー</h3>
                <p className="text-gray-600">
                  エストニアについて自由なテーマで書いた同人アンソロジー本。
                  文化、歴史、IT、生活、旅行記など、多様な視点からエストニアを紹介してきました。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <Calendar className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="mb-2">5年間の活動</h3>
                <p className="text-gray-600">
                  同人とオタク活動をエストニアやヨーロッパで広めつつ、
                  エストニアと日本をつなぐ活動を展開。現在は新しい形での文化交流にシフトしています。
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 mb-4">
                これまでに発行した同人誌は引き続き販売しています。
                ご興味のある方はお問い合わせください。
              </p>
              <a 
                href="#contact"
                className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-2"
              >
                同人誌について問い合わせる
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
