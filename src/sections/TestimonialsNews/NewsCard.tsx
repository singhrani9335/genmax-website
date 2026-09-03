"use client";

import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { latestNews } from "@/data/testimonialsNews";

import "swiper/css";

export default function NewsCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!latestNews.length) {
    return null;
  }

  const shouldLoop = latestNews.length > 1;

  return (
    <div className="w-full">
      {/* =====================================
          FIXED HEADING
      ====================================== */}
      <h2 className="text-[31px] font-normal leading-[1.25] tracking-[0.5px] text-[#1f2d42] sm:text-[36px] lg:text-[40px]">
        Latest News and
        <br />
        Updates
      </h2>

      {/* =====================================
          NEWS SLIDER
          ONLY CONTENT BELOW HEADING SLIDES
      ====================================== */}
      <div className="mt-8 lg:mt-9">
        <Swiper
          modules={[Autoplay]}
          loop={shouldLoop}
          speed={900}
          slidesPerView={1}
          slidesPerGroup={1}
          allowTouchMove
          autoplay={
            shouldLoop
              ? {
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          className="!w-full"
        >
          {latestNews.map((news, index) => (
            <SwiperSlide
              key={`${news.title}-${index}`}
              className="!h-auto"
            >
              <article className="min-h-[400px] pr-2 sm:min-h-[380px] lg:min-h-[400px]">
                {/* DATE */}
                <div className="inline-flex bg-[#F04D02] px-4 py-2 sm:px-5 sm:py-2.5">
                  <time className="text-[14px] font-medium text-white sm:text-[15px]">
                    {news.date}
                  </time>
                </div>

                {/* TITLE */}
                <h3 className="mt-6 max-w-[500px] text-[23px] font-normal leading-[1.3] tracking-[0.2px] text-[#263349] sm:text-[25px] lg:text-[27px]">
                  {news.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 max-w-[505px] text-[14px] leading-[1.95] text-[#596575] sm:text-[15px]">
                  {news.description}
                </p>

                {/* READ MORE */}
                <a
                  href="/news"
                  className="group mt-9 inline-block cursor-pointer text-[14px] font-normal uppercase tracking-[0.7px] text-[#27354b] transition-colors duration-300 hover:text-[#F04D02]"
                >
                  <span className="relative inline-block pb-1">
                    Read More

                    {/* PERMANENT ORANGE UNDERLINE */}
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-[1px] w-full bg-[#F04D02]"
                    />
                  </span>
                </a>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* =====================================
          SLIDER INDICATORS
      ====================================== */}
      {shouldLoop && (
        <div className="mt-2 flex items-center gap-2">
          {latestNews.map((_, index) => (
            <span
              key={index}
              className={`block h-[2px] rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-[#F04D02]"
                  : "w-3 bg-[#d8dde3]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}