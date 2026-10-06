import { useEffect, useState, type CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/swiper-overrides.css";
import { fetchLatestFeeds, type FeedItem } from "../lib/latestFeeds";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Hero = () => {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const controller = new AbortController();

    fetchLatestFeeds(controller.signal)
      .then((feeds) => {
        setItems(feeds);
        setStatus("ready");
      })
      .catch((error) => {
        if (controller.signal.aborted) return;
        console.error(error);
        setStatus("error");
      });

    return () => controller.abort();
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 text-center">
      <h2 className="mb-6 text-[#0072ce] text-xl font-bold">最新アップデート</h2>
      更新履歴の全体は
      <a
        className="text-[#0072ce] font-bold underline"
        target="_blank"
        rel="noopener noreferrer"
        href="https://substack.com/@jpeeplus/note/c-341370927"
      >
        JPEE+のSubstack
      </a>
      上で確認できます。
      <br />
      またSubstackでニュースレターを購読すると、月1の活動まとめを受け取れます。

      <div className="mt-8 text-left">
        {status === "loading" && (
          <p className="text-center text-gray-500">最新情報を読み込み中です…</p>
        )}
        {status === "error" && (
          <p className="text-center text-gray-500">
            最新情報の取得に失敗しました。時間をおいて再度お試しください。
          </p>
        )}
        {status === "ready" && items.length === 0 && (
          <p className="text-center text-gray-500">直近1か月の更新はありません。</p>
        )}
        {status === "ready" && items.length > 0 && (
          <Swiper
            pagination={pagination}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: true }}
            centeredSlides={true}
            slidesPerView={1.15}
            spaceBetween={16}
            breakpoints={{
              768: { slidesPerView: 2.2, spaceBetween: 20 },
              1024: { slidesPerView: 2.6, spaceBetween: 24 },
            }}
            style={
              {
                "--swiper-pagination-color": "#0072ce",
                "--swiper-pagination-bullet-inactive-color": "#9ca3af",
                "--swiper-pagination-bullet-inactive-opacity": "0.4",
                "--swiper-pagination-bullet-size": "10px",
              } as CSSProperties
            }
            className="w-full"
          >
            {items.map((item) => (
              <SwiperSlide key={item.id} className="pb-12 h-auto">
                <FeedCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

const SOURCE_THEME = {
  note: {
    label: "note",
    card: "border-[#00816B] bg-[#00816B]/10",
    badge: "bg-[#00816B] text-white",
    title: "text-[#00816B]",
    excerpt: "text-[#00816B]",
  },
  youtube: {
    label: "YouTube",
    card: "border-[#f20131] bg-[#f20131]/10",
    badge: "bg-[#f20131] text-white",
    title: "text-[#f20131]",
    excerpt: "text-[#8c1a2e]",
  },
} as const;

function FeedCard({ item }: { item: FeedItem }) {
  const theme = SOURCE_THEME[item.source];

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex h-full w-full flex-col overflow-hidden rounded-xl border-2 shadow-md transition-shadow hover:shadow-lg ${theme.card}`}
    >
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        {item.thumbnail ? (
          <ImageWithFallback
            src={item.thumbnail}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
            No image
          </div>
        )}
        <span
          className={`absolute top-2 left-2 rounded-full px-2 py-0.5 text-xs font-bold ${theme.badge}`}
        >
          {theme.label}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className={`line-clamp-2 text-base font-bold ${theme.title}`}>{item.title}</h3>
        {item.excerpt && (
          <p className={`line-clamp-3 text-sm leading-relaxed ${theme.excerpt}`}>
            {item.excerpt}
          </p>
        )}
      </div>
    </a>
  );
}
