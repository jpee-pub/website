import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1586453098143-6c686af2588e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWxsaW5uJTIwZXN0b25pYSUyMGNpdHl8ZW58MXx8fHwxNzYxNTg3MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tallinn, Estonia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="flex flex-col gap-1">
            <div className="h-2 w-16 bg-blue-600"></div>
            <div className="h-2 w-16 bg-black"></div>
            <div className="h-2 w-16 bg-white"></div>
          </div>
        </div>
        <h1 className="mb-6">JPEE</h1>
        <p className="mb-8 text-xl sm:text-2xl">
          エストニアと日本を文化的に草の根でつなぐ
        </p>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">
          在エストニア邦人、日本に興味のあるエストニア人、エストニアが好きな日本人。
          誰もが参加できる文化交流コミュニティです。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#alliance"
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            JPEE同盟に参加
          </a>
          <a 
            href="#about"
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-md hover:bg-white/20 transition-colors border border-white/30"
          >
            詳しく見る
          </a>
        </div>
      </div>
    </section>
  );
}
