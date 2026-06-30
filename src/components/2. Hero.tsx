import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/swiper-overrides.css';

import Carousel1 from '../assets/カルーセル-1.gif';
import Carousel2 from '../assets/カルーセル-2.gif';
import Carousel3 from '../assets/カルーセル-3.gif';

export function Hero() {

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center overflow-hidden bg-gray-50 py-10 w-full">
      <h2 className="mb-6 text-[#0072ce] text-2xl font-bold">最新情報</h2>

      <div className="w-full max-w-6xl px-4 mx-auto">
        <Swiper
          pagination={pagination}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          centeredSlides={true}
          slidesPerView={1.2}
          spaceBetween={16}

          style={{
            // @ts-ignore
            "--swiper-pagination-color": "#0072ce",
            "--swiper-pagination-bullet-inactive-color": "#9ca3af",
            "--swiper-pagination-bullet-inactive-opacity": "0.4",
            "--swiper-pagination-bullet-size": "10px",
          }}
          className="w-full"
        >

          {/* 1枚目: Note */}
          <SwiperSlide className="pb-12">
            <a
              href="https://note.com/jpee_plus"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-gray-200"
            >
              <img
                src={Carousel1}
                alt="留学・移住直前Q&A7月公開！Noteをフォロー!"
                className="w-full h-full object-cover"
              />
            </a>
          </SwiperSlide>

          {/* 2枚目: YouTube（インタビュー） */}
          <SwiperSlide className="pb-12">
            <a
              href="https://youtu.be/UorWvpd0z-4"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
            >
              <img
                src={Carousel2}
                alt="在外邦人インタビュー第一弾公開中"
                className="w-full h-full object-cover transition-transform group-hover:scale-[1.02] duration-300"
              />
            </a>
          </SwiperSlide>

          {/* 3枚目: ポッドキャスト */}
          <SwiperSlide className="pb-12">
            <button
              onClick={() => scrollToSection('activities')}
              className="relative block w-full aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group text-left cursor-pointer"
            >
              <img
                src={Carousel3}
                alt="Spotify・YouTubeでポッドキャスト配信中"
                className="w-full h-full object-cover"
              />
            </button>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
}