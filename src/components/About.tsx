import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 px-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="mb-6 text-[#0072ce] text-xl font-bold">私たちの活動</h2>
            <div className="space-y-4 text-black">
              <p>
                JPEEは「エストニアを拠点に、欧州と日本をつなぐ」をミッションに掲げて活動しています。
              </p>
              <p>
                当初はエストニアについて自由なテーマで書いた同人アンソロジー本の編集部として活動を開始。
                5年にわたり本を発行し、現地文化活動への参加やオフ会の開催なども行いながら、
                在エストニア邦人、日本に興味のあるエストニア人、エストニアが好きな日本人などを対象に
                「縛りすぎない、でもつながれるで、エストニアと日本の草の根文化交流を促進する」を目標に
                活動してきました。
              </p>
              <p>
                現在はより広く多様な在り方を目指し、エストニアだけでなく欧州全体への活動拡大や、
                Discordコミュニティ運営、NoteやラジオといったWeb媒体やVR空間へも進出中。
                国境を越え、オンライン空間でのつながりも重視する活動に移行しています。
              </p>
              <p>
                ヨーロッパにお住まいの方、ヨーロッパに興味がある方、日本に興味のある外国人の方。
                状況や場所は違っても、同じ方向を向いてともに歩むことを目指した活動を行います。
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}
