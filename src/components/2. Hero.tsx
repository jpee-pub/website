import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/swiper-overrides.css';

import Carousel1 from '../assets/カルーセル-1.png';
import Carousel2 from '../assets/カルーセル-2.gif';
import Carousel3 from '../assets/カルーセル-3.gif';
import Carousel4 from '../assets/カルーセル-4.gif';

// スライド項目の型定義
type SlideItem = {
  id: string | number;
  image: string;
  alt: string;
  href?: string;
  sectionId?: string;
  onClick?: () => void;
};

// =================================================================
// 今後画像を追加・入れ替える際はこちらのリストを編集してください
// =================================================================
const SLIDES: SlideItem[] = [
  {
    id: 'new-page',
    image: Carousel1,
    alt: '新ページ「エストニア情報」「JPEE+Lab」公開!',
    href: 'https://jpee-plus.com/eesti-portal',
  },
  {
    id: 'Q&A',
    image: Carousel2,
    alt: '留学・移住直前Q&A公開中!',
    href: 'https://jpee-plus.com/eesti-portal/qa',
  },
  {
    id: 'interview',
    image: Carousel3,
    alt: '在外邦人インタビュー第2弾「Akemiの海外就活&エストニアの魅力編」公開中!',
    href: 'https://youtu.be/dkUDumpj-_g',
  },
  {
    id: 'podcast',
    image: Carousel4,
    alt: 'Spotify・YouTubeでポッドキャスト配信中',
    sectionId: 'activities',
  },
];

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
          {SLIDES.map((slide) => (
            <SwiperSlide key={slide.id} className="pb-12">
              <CarouselItem slide={slide} onScrollToSection={scrollToSection} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------
// 各スライドの表示用コンポーネント
// -----------------------------------------------------------------
type CarouselItemProps = {
  slide: SlideItem;
  onScrollToSection: (id: string) => void;
};

function CarouselItem({ slide, onScrollToSection }: CarouselItemProps) {
  const baseClassName =
    "relative block w-full aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group";

  const imgElement = (
    <img
      src={slide.image}
      alt={slide.alt}
      className="w-full h-full object-cover transition-transform group-hover:scale-[1.02] duration-300"
    />
  );

  // 1. 外部・内部リンク（hrefが指定されている場合）
  if (slide.href) {
    return (
      <a
        href={slide.href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClassName}
      >
        {imgElement}
      </a>
    );
  }

  // 2. ページ内スクロール（sectionIdが指定されている場合）
  if (slide.sectionId) {
    return (
      <button
        type="button"
        onClick={() => onScrollToSection(slide.sectionId!)}
        className={`${baseClassName} text-left cursor-pointer`}
      >
        {imgElement}
      </button>
    );
  }

  // 3. 独自のクリック処理（onClickが指定されている場合）
  if (slide.onClick) {
    return (
      <button
        type="button"
        onClick={slide.onClick}
        className={`${baseClassName} text-left cursor-pointer`}
      >
        {imgElement}
      </button>
    );
  }

  // 4. リンクやアクションがない単なる画像表示
  return <div className={baseClassName}>{imgElement}</div>;
}