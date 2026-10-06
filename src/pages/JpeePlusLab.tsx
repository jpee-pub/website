import React from "react";
import poePanicImg from "../assets/poepanic_thumb.gif";

export default function JpeePlusLab() {
  return (
    <div className="pt-28 pb-16 px-4 max-w-7xl mx-auto min-h-[80vh] flex flex-col items-center">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-black tracking-wide text-[#0072ce] mb-3">JPEE+Lab</h1>
        <p className="text-gray-600">
          <s>社長やメンバーの道楽</s>JPEE+で開発した様々な楽しいプロジェクトです。随時更新中！
        </p>
      </div>

      {/* Link Card */}
      <a
        href="https://www.roua12tnt.com/poe_panic/poe_panic"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 flex flex-col sm:flex-row border border-gray-100 min-h-[380px]"
      >
        {/* Left Side: Game Screenshot */}
        <div className="w-full sm:w-1/2 bg-[#ffebeb] overflow-hidden flex items-center justify-center">
          <img
            src={poePanicImg}
            alt="Poe Panic! ゲーム画面"
            className="w-full h-auto"
          />
        </div>

        {/* Right Side: Game Info */}
        <div className="w-full sm:w-1/2 bg-[#f0f6fc] p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0072ce] text-center sm:text-left">
              Poe Panic!
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-2">
              <p>エストニアのスーパーにある商品でパズルゲームを楽しもう！</p>
              <p>エストニア語の勉強にもなるかも？</p>
              <p>
                JPEE+社長のRouaによる、エストニアではお馴染みのスーパー擬人化マスコットキャラクターも必見です✨
              </p>
            </div>
          </div>

          <div className="text-right mt-6">
          </div>
        </div>
      </a>
    </div>
  );
}
