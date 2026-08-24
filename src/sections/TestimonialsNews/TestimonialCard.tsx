"use client";

import { useRef, useState } from "react";
import { Quote } from "lucide-react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { testimonials } from "@/data/testimonialsNews";

import "swiper/css";

export default function TestimonialCard() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!testimonials.length) {
    return null;
  }

  const totalTestimonials = testimonials.length;
  const shouldLoop = totalTestimonials > 1;

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
            Client Stories
          </span>
        </div>

        <h2 className="max-w-[650px] text-[32px] font-normal leading-[1.08] tracking-[-1.4px] text-[#07182f] sm:text-[38px] md:text-[43px] lg:text-[48px]">
          Trusted by people
          <br />
          <span className="text-[#07182f]/40">
            who value great work.
          </span>
        </h2>
      </div>

      {/* =====================================================
          TESTIMONIAL SLIDER
      ====================================================== */}
      <div className="relative mt-12 sm:mt-14 lg:mt-16">
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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={`${testimonial.name}-${index}`}
                className="!h-auto"
              >
                <article className="relative min-h-[390px] pr-2 sm:min-h-[370px] sm:pr-4 lg:min-h-[350px] lg:pr-0">
                  {/* Large Decorative Quote */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-3 -top-12 select-none font-serif text-[120px] leading-none text-[#F04D02]/[0.07] sm:text-[145px]"
                  >
                    “
                  </div>

                  {/* Quote Icon */}
                  <div className="relative mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-[#F04D02]/[0.08]">
                    <Quote
                      size={19}
                      strokeWidth={1.5}
                      className="text-[#F04D02]"
                    />
                  </div>

                  {/* Testimonial */}
                  <p className="relative max-w-[720px] text-[18px] font-normal leading-[1.7] tracking-[-0.2px] text-[#18283c] sm:text-[21px] md:text-[23px] lg:text-[25px]">
                    “{testimonial.text}”
                  </p>

                  {/* Client */}
                  <div className="mt-9 flex items-center gap-4 sm:mt-10">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#07182f] text-[13px] font-semibold uppercase text-white">
                      {testimonial.name.charAt(0)}
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-[14px] font-semibold text-[#07182f] sm:text-[15px]">
                        {testimonial.name}
                      </h3>

                      <p className="mt-1 text-[9px] uppercase tracking-[2px] text-[#8a94a1] sm:text-[10px]">
                        Client
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex gap-1">
                      {Array.from({
                        length: testimonial.rating,
                      }).map((_, starIndex) => (
                        <span
                          key={starIndex}
                          aria-hidden="true"
                          className="text-[14px] text-[#F04D02]"
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <span
                      aria-hidden="true"
                      className="h-4 w-px bg-[#dce1e7]"
                    />

                    <span className="text-[9px] uppercase tracking-[1.5px] text-[#8b95a1]">
                      Verified Client
                    </span>
                  </div>
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
            {testimonials.map((_, index) => (
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