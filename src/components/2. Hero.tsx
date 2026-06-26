import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/swiper-overrides.css'

export function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center overflow-hidden bg-gray-50">

      <h2 className="mt-10 mb-5 text-[#0072ce] text-2xl font-bold">最新情報</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        navigation
        className="h-[75vh] w-full"
      >

        <SwiperSlide className="relative h-screen flex flex-col justify-center
          bg-[url('https://plus.unsplash.com/premium_photo-1778963525813-e089285c8518?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
          bg-cover
          bg-[position:50%_50%]">

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex flex-col items-center justify-center px-2 text-center text-white p-10 max-w-4xl mx-auto my-auto">

            <p className="text-2xl font-bold text-[#ffcc00]">
              エストニア留学・移住直前Q&A近日公開！
            </p>

            <img
              src="src/assets/akemi.jpeg"
              alt="Akemi-san"
              className="w-30 h-30 m-5 rounded-full object-cover"
            />

            <p className="max-w-2xl mx-auto mb-8">
              JPEE+のエストニア在住メンバーでインタビューにも参加しているAkemiさんが答える、留学・移住直前Q&AがNoteにて7月公開予定です！<br />
              実際にエストニアへの渡航を控える方からのリアルな疑問に、現地在住者が真剣にアンサーします。<br />
              Noteのフォローをお忘れなく！
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://note.com/jpee_plus"
                className="bg-[#0072ce] text-white px-8 py-3 rounded-md hover:bg-[#005bb5] transition-colors">
                Noteのフォローはこちら！
              </a>
            </div>

          </div>

        </SwiperSlide>

        <SwiperSlide className="relative h-screen flex items-center justify-center p-10
          bg-[url('src/assets/interview.png')]
          bg-cover">

          <div className="absolute inset-0 bg-[#00315A]/60 backdrop-blur-xs" />

          <div className="relative z-10 text-center">

            <h2 className="mb-5 text-2xl font-extrabold text-[#ffcc00]">エストニア在住日本人インタビュー第1弾公開中</h2>

            <p className="x-full mx-auto mb-8 text-white ">JPEE+メンバーで元看護師のAkemiさんが、エストニアの大学へ社会人留学しキャリアチェンジを果たしたリアルな体験談！<br />
              海外留学・移住を考えている方、社会人からのキャリアチェンジに興味がある方は必見の内容です！</p>

            <iframe
              className="aspect-video h-full max-w-4xl max-h-60 mx-auto"
              src="https://www.youtube.com/embed/UorWvpd0z-4?si=3qng-MBjrYTDgIEY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

        </SwiperSlide>

        <SwiperSlide className="relative h-screen flex flex-col justify-center
          bg-[url('https://images.unsplash.com/photo-1668609045837-5e2de3b006c6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
          bg-cover
          bg-position-[50%_40%]">

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex flex-col items-center justify-center px-2 text-center text-white p-10 max-w-4xl mx-auto my-auto">

            <h2 className="mb-5 text-2xl font-extrabold text-[#ffcc00]">
              Spotify・YouTubeで活動について語るポッドキャスト配信中!
            </h2>

            <iframe
              className="w-full h-[100px]"
              src="https://open.spotify.com/embed/episode/4m8TbpEth98U6ZEAjVO5dA?utm_source=generator"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
              title="Spotify Embed"
            ></iframe>

            <iframe
              className="aspect-video h-full max-w-4xl max-h-60 mx-auto"
              src="https://www.youtube.com/embed/videoseries?si=3Wwiz6A9CG6btlZb&amp;list=PLnlzGn2uutPcNXGTrZGZtRrX2XytL7Qwv" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>

        </SwiperSlide>

      </Swiper>
    </section>
  );
}
