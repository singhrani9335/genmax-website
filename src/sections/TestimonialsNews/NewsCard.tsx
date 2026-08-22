"use client";

import { useRef, useEffect } from "react";
import { latestNews } from "@/data/testimonialsNews";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function NewsCard() {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  }, []);

  return (
    <div className="pt-3">
      {/* Heading */}
      <h2 className="max-w-[520px] text-[36px] font-normal leading-[1.2] text-[#07182f]">
        Latest News and
        <br />
        Updates
      </h2>

      {/* Slider */}
      <div className="relative mt-10 h-[390px] w-full overflow-hidden">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay]}
          loop={true}
          speed={900}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          slidesPerView={1}
          spaceBetween={0}
          className="!h-full !w-full"
        >
          {latestNews.map((news, index) => (
            <SwiperSlide
              key={`${news.title}-${index}`}
              className="!h-full"
            >
              <div className="h-full w-full">
                {/* Date */}
                <div className="inline-block bg-gradient-to-r from-[#F04D02] to-[#FE8302] px-4 py-2">
                  <span className="text-[14px] font-semibold text-white">
                    {news.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 max-w-[570px] text-[24px] font-normal leading-[1.25] text-[#07182f]">
                  {news.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-[610px] text-[15px] leading-[1.8] text-[#536174]">
                  {news.description}
                </p>

                {/* Read More */}
                <a
                  href="/news"
                  className="mt-16 inline-block text-[14px] font-medium uppercase tracking-wide text-[#596576] transition-colors duration-300 hover:text-[#F04D02]"
                >
                  READ MORE
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Dots */}
      <div className="mt-3 flex items-center gap-2">
        {latestNews.map((_, index) => (
          <span
            key={index}
            className={`h-2 rounded-full ${
              index === 0
                ? "w-8 bg-gradient-to-r from-[#F04D02] to-[#FE8302]"
                : "w-2 bg-[#d5d9df]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}