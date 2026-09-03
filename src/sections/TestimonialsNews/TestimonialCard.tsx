"use client";

import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { testimonials } from "@/data/testimonialsNews";

import "swiper/css";

export default function TestimonialCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!testimonials.length) {
    return null;
  }

  const shouldLoop = testimonials.length > 1;

  // =====================================
  // GO TO HOME PAGE
  // =====================================
  const goToHomePage = () => {
    window.location.href = "/";
  };

  return (
    <div className="w-full">
      {/* =====================================
          FIXED HEADING
      ====================================== */}
      <div className="flex items-start gap-7">
        <div
          aria-hidden="true"
          className="flex shrink-0 gap-2 pt-2"
        >
          <span className="block h-[88px] w-[52px] rounded-tl-[12px] rounded-br-[8px] bg-[#F04D02]" />
          <span className="block h-[88px] w-[52px] rounded-tl-[12px] rounded-br-[8px] bg-[#F04D02]" />
        </div>

        <h2 className="pt-1 text-[31px] font-normal leading-[1.2] tracking-[0.5px] text-[#1f2d42] sm:text-[36px] lg:text-[40px]">
          Client Testimonials
        </h2>
      </div>

      {/* =====================================
          TESTIMONIAL SLIDER
          ONLY CONTENT BELOW HEADING SLIDES
      ====================================== */}
      <div className="mt-3 sm:mt-5 lg:mt-6">
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={`${testimonial.name}-${index}`}
              className="!h-auto"
            >
              {/* =====================================
                  CLICK / TOUCH AREA
              ====================================== */}
              <div
                role="button"
                tabIndex={0}
                onClick={goToHomePage}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();
                    goToHomePage();
                  }
                }}
                className="min-h-[410px] w-full cursor-pointer select-none pl-[158px] pr-2 sm:min-h-[390px] sm:pl-[165px] lg:min-h-[405px] lg:pl-[160px]"
                aria-label="Go to home page"
              >
                {/* TESTIMONIAL TEXT */}
                <p className="max-w-[455px] text-[14px] leading-[2.15] tracking-[0.1px] text-[#535f70]">
                  {testimonial.text}
                </p>

                {/* CLIENT NAME */}
                <h3 className="mt-10 text-[18px] font-normal tracking-[0.2px] text-[#253247] sm:mt-11 sm:text-[19px]">
                  {testimonial.name}
                </h3>

                {/* STARS */}
                <div className="mt-4 flex items-center gap-[3px]">
                  {Array.from({
                    length: testimonial.rating,
                  }).map((_, starIndex) => (
                    <span
                      key={starIndex}
                      aria-hidden="true"
                      className="text-[16px] leading-none text-[#d6ad25]"
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* GOOGLE REVIEWS */}
                <div className="mt-7 select-none">
                  <div className="flex items-end gap-1">
                    <span className="text-[42px] font-normal leading-none tracking-[-3px] text-[#4285F4]">
                      G
                    </span>

                    <span className="text-[39px] font-normal leading-none tracking-[-3px] text-[#EA4335]">
                      o
                    </span>

                    <span className="text-[39px] font-normal leading-none tracking-[-3px] text-[#FBBC05]">
                      o
                    </span>

                    <span className="text-[39px] font-normal leading-none tracking-[-3px] text-[#4285F4]">
                      g
                    </span>

                    <span className="text-[39px] font-normal leading-none tracking-[-3px] text-[#34A853]">
                      l
                    </span>

                    <span className="text-[39px] font-normal leading-none tracking-[-3px] text-[#EA4335]">
                      e
                    </span>
                  </div>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-[16px] tracking-[1px] text-[#536174]">
                      Reviews
                    </span>

                    <div className="flex gap-[2px]">
                      {Array.from({ length: 5 }).map(
                        (_, starIndex) => (
                          <span
                            key={starIndex}
                            aria-hidden="true"
                            className="text-[9px] text-[#d6ad25]"
                          >
                            ★
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* =====================================
          SLIDER INDICATORS
      ====================================== */}
      {shouldLoop && (
        <div className="mt-2 pl-[158px] sm:pl-[165px] lg:pl-[160px]">
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
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
        </div>
      )}
    </div>
  );
}