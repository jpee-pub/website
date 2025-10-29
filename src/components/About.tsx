import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">JPEEについて</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                JPEEは「エストニアと日本を文化的に草の根でつなぐ」をミッションに掲げる文化交流コミュニティです。
              </p>
              <p>
                当初はエストニアについて自由なテーマで書いた同人アンソロジー本の編集部として活動を開始。
                5年間にわたり本を発行し、「同人とオタク活動をエストニアやヨーロッパで広めつつ、エストニアと日本をつなぐ」活動を展開してきました。
              </p>
              <p>
                現在は、より多様な形での文化交流を目指し、Discordコミュニティ、Note、ラジオなど、
                オンラインとオフラインを組み合わせた活動に移行しています。
              </p>
              <p>
                エストニアに興���がある方、在エストニア邦人の方、日本に興味のあるエストニア人の方など、
                どなたでも気軽に参加できるオープンなコミュニティです。
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1759932021109-ffbec9251f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBjb25uZWN0aW9uJTIwbmV0d29ya3xlbnwxfHx8fDE3NjE1ODcxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Community connection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
