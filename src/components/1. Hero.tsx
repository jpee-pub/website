import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import books1 from "../assets/books1.jpg";
import books2 from "../assets/books2.jpg";
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/swiper-overrides.css'

export function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center overflow-hidden pt-18">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-120"
      >

        <SwiperSlide className="relative h-screen
          bg-[url('https://unsplash.com/photos/NyIBNMueUQI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8dGFsbGlubnxlbnwwfHx8fDE3NjMwNzcyODF8Mg&force=true&w=1920')]
          bg-cover
          bg-position-[50%_40%]">

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex flex-col items-center justify-center h-full px-2 text-center text-white">
            <p className="text-xl sm:text-2xl">
              エストニアから、欧州と日本を「近く」する
            </p>

            <p className="max-w-2xl mx-auto mb-8">
              <br />
              「エストニア」をキーワードに誰もが参加できるコミュニティとして始まったJPEE+は、<br />
              現在では欧州と日本を多岐にわたる分野でつなぐ活動を促進しています。<br />
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#alliance"
                className="bg-[#0072ce] text-white px-8 py-3 rounded-md hover:bg-[#005bb5] transition-colors">
                JPEE+同盟に参加
              </a>
              <a href="#about"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-md hover:bg-white/20 transition-colors border border-white/30">
                詳しく見る
              </a>
            </div>
          </div>

        </SwiperSlide>

        <SwiperSlide className="relative h-screen
          bg-[url('https://unsplash.com/photos/QckxruozjRg/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzYzMDg1OTUxfA&force=true&w=1920')]
          bg-cover
          bg-position-[50%_40%]">

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
            <p className="mb-6 text-xl sm:text-2xl">
              一緒に欧州と日本を「近く」へ！
            </p>

            <p className="max-w-2xl mx-auto mb-8">
              JPEE+では一緒に活動してくれる仲間を募集しています。<br />
              旅好きなあなたも、メタバースに夢中なあなたも。<br />
              世界のどこにいても、テクノロジーとコミュニケーションで未来をつくります！
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#careers"
                className="bg-[#0072ce] text-white px-8 py-3 rounded-md hover:bg-[#005bb5] transition-colors">
                採用情報を見る
              </a>
            </div>
          </div>

        </SwiperSlide>

        <SwiperSlide className="relative h-screen flex items-center justify-center p-10
          bg-[url('src/assets/flag_bg.png')]
          bg-cover">

          <div className="max-h-10px">
            <iframe
              className="aspect-video h-full max-w-4xl max-h-100 mx-auto"
              src="https://www.youtube.com/embed/l_O7ohcrw1s"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

        </SwiperSlide>

        <SwiperSlide className="relative h-screen flex items-center justify-center bg-[#0072ce] p-10 pt-5">

          <p className="max-w-2xl mx-auto m-4 text-white text-center">
            Spotifyで活動について語るポッドキャストも配信中!
          </p>

          <iframe
            className="w-full h-full"
            src="https://open.spotify.com/embed/episode/4m8TbpEth98U6ZEAjVO5dA?utm_source=generator"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title="Spotify Embed"
          ></iframe>

        </SwiperSlide>

        <SwiperSlide className="relative h-screen
          bg-[url('https://unsplash.com/photos/XT-o5O458as/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzYzMTUzMTQ0fA&force=true&w=1920')]
          bg-cover
          bg-position-[50%_40%]">

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
            <p className="mb-4 text-xl sm:text-2xl">
              私たちの活動の原点をご覧ください
            </p>

            <div className="flex flex-row items-center justify-center">
              <img
                src={books1}
                alt="JPEEエストニア・アンソロジー"
                className="h-30 m-4 object-cover rounded-lg"
              />
              <img
                src={books2}
                alt="JPEEエストニア・アンソロジー"
                className="h-30 m-4 object-cover rounded-lg"
              />
            </div>


            <p className="max-w-2xl mx-auto m-4">
              JPEE+の活動は、「エストニア」がテーマの同人アンソロジーとして始まりました。<br />
              5年にわたる制作活動と寄稿者の方との関わりを通じ、現在の活動の基礎が築かれました。
              生活、旅行記、文化や歴史、ITや軍事といった多様な視点のエストニアをぜひご覧ください。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#archive"
                className="bg-[#0072ce] text-white px-8 py-3 rounded-md hover:bg-[#005bb5] transition-colors">
                詳しく見る
              </a>
            </div>
          </div>

        </SwiperSlide>

      </Swiper>
    </section>
  );
}
