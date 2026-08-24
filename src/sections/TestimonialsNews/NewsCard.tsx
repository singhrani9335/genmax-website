"use client";

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { latestNews } from "@/data/testimonialsNews";

import "swiper/css";

export default function NewsCard() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!latestNews.length) {
    return null;
  }

  const totalNews = latestNews.length;
  const shouldLoop = totalNews > 1;

  return (
    <div className="relative w-full">
      {/* =====================================================
          HEADER
      ====================================================== */}
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span
            aria-hidden="true"
            className="h-px w-10 bg-[#F04D02]"
          />

          <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#F04D02] sm:text-[10px]">
            Insights
          </span>
        </div>

        <h2 className="text-[32px] font-normal leading-[1.08] tracking-[-1.4px] text-[#07182f] sm:text-[38px] md:text-[43px] lg:text-[48px]">
          Latest News
          <br />
          <span className="text-[#07182f]/40">
            &amp; Updates.
          </span>
        </h2>
      </div>

      {/* =====================================================
          NEWS SLIDER
      ====================================================== */}
      <div className="relative mt-11 sm:mt-13 lg:mt-15">
        {/* Accent Line */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#F04D02] via-[#F04D02]/40 to-transparent"
        />

        <div className="pl-7 sm:pl-10 lg:pl-12">
          <Swiper
            modules={[Autoplay]}
            loop={shouldLoop}
            speed={900}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={0}
            allowTouchMove={false}
            autoplay={
              shouldLoop
                ? {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                    waitForTransition: false,
                  }
                : false
            }
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
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
                <article className="min-h-[370px] pr-2 sm:min-h-[350px] sm:pr-4 lg:min-h-[330px] lg:pr-0">
                  {/* Date */}
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-[#F04D02]"
                    />

                    <time className="text-[9px] font-semibold uppercase tracking-[2px] text-[#F04D02] sm:text-[10px]">
                      {news.date}
                    </time>
                  </div>

                  {/* Title */}
                  <h3 className="mt-7 max-w-[590px] text-[21px] font-medium leading-[1.35] tracking-[-0.4px] text-[#07182f] sm:mt-8 sm:text-[23px] md:text-[24px]">
                    {news.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 max-w-[590px] text-[13px] leading-[1.85] text-[#596678] sm:text-[14px]">
                    {news.description}
                  </p>

                  {/* Read More */}
                  <a
                    href="/news"
                    className="group mt-9 inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[2px] text-[#07182f] transition-colors duration-300 hover:text-[#F04D02] sm:mt-10 sm:text-[10px]"
                  >
                    <span>Read More</span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dfe4ea] bg-white transition-all duration-300 group-hover:border-[#F04D02] group-hover:bg-[#F04D02] group-hover:text-white">
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </a>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* =====================================================
          PROGRESS
      ====================================================== */}
      {shouldLoop && (
        <div className="mt-5 flex items-center border-t border-[#edf0f3] pt-5 sm:mt-6">
          <div className="flex w-full items-center gap-2">
            {latestNews.map((_, index) => (
              <span
                key={index}
                className={`block h-[2px] max-w-[70px] flex-1 transition-all duration-500 ${
                  index === activeIndex
                    ? "bg-gradient-to-r from-[#F04D02] to-[#FE8302]"
                    : "bg-[#dfe4ea]"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}