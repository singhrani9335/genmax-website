"use client";

import { testimonials } from "@/data/testimonialsNews";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const quoteIcon =
  "https://www.mightywarner.ae/web/images/testimonials-quote.svg";

export default function TestimonialCard() {
  const totalTestimonials = testimonials.length;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Quote Icon */}
      <div
        className="absolute left-0 top-0 z-10 sm:left-[20px] md:left-[35px] lg:left-[50px] lg:top-[5px]"
      >
        <img
          src={quoteIcon}
          alt="Quote"
          className="h-[48px] w-[65px] object-contain sm:h-[55px] sm:w-[75px] md:h-[60px] md:w-[82px] lg:h-[65px] lg:w-[90px]"
        />
      </div>

      <div
        className="w-full pl-0 pt-[70px] sm:pl-[80px] sm:pt-4 md:pl-[110px] lg:pl-[160px] lg:pt-2"
      >
        {/* Heading */}
        <h2
          className="text-[28px] font-normal leading-[1.15] text-[#07182f] sm:text-[32px] lg:text-[36px]"
        >
          Client Testimonials
        </h2>

        {/* Slider */}
        <div
          className="relative mt-7 h-[450px] w-full overflow-hidden sm:mt-9 sm:h-[420px] md:mt-10 md:h-[400px] lg:mt-12 lg:h-[370px]"
        >
          <Swiper
            modules={[Autoplay]}
            loop={totalTestimonials > 1}
            speed={900}
            autoplay={
              totalTestimonials > 1
                ? {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                  }
                : false
            }
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={0}
            className="!h-full !w-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={`${testimonial.name}-${index}`}
                className="!h-full"
              >
                <a
                  href="/"
                  className="block h-full w-full cursor-pointer"
                  aria-label={`Go to home page from ${testimonial.name} testimonial`}
                >
                  <div className="h-full w-full overflow-hidden pr-3 sm:pr-5 lg:pr-0">
                    {/* Testimonial Text */}
                    <p
                      className="max-w-[600px] text-[14px] leading-[1.75] text-[#3d4a5c] sm:text-[15px] sm:leading-[1.8] lg:text-[16px]"
                    >
                      {testimonial.text}
                    </p>

                    {/* Name */}
                    <h3
                      className="mt-6 text-[17px] font-semibold text-[#26354a] sm:mt-7 sm:text-[18px] lg:mt-8 lg:text-[19px]"
                    >
                      {testimonial.name}
                    </h3>

                    {/* Rating */}
                    <div className="mt-3 flex gap-1 sm:mt-4">
                      {Array.from({
                        length: testimonial.rating,
                      }).map((_, index) => (
                        <span
                          key={index}
                          className="text-[16px] leading-none text-[#e4c53d] sm:text-[18px]"
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Google Reviews */}
                    <div className="mt-4 sm:mt-5">
                      <div className="text-[28px] font-medium leading-none sm:text-[32px] lg:text-[34px]">
                        <span className="text-[#4285f4]">G</span>
                        <span className="text-[#db4437]">o</span>
                        <span className="text-[#f4b400]">o</span>
                        <span className="text-[#4285f4]">g</span>
                        <span className="text-[#0f9d58]">l</span>
                        <span className="text-[#db4437]">e</span>
                      </div>

                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-[12px] text-[#777] sm:text-[13px]">
                          Reviews
                        </span>

                        <div className="flex gap-[2px]">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <span
                              key={index}
                              className="text-[9px] text-[#e4c53d] sm:text-[10px]"
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Dots */}
        {totalTestimonials > 1 && (
          <div className="mt-2 flex items-center gap-2 sm:mt-3">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`h-2 rounded-full ${
                  index === 0
                    ? "w-7 bg-gradient-to-r from-[#F04D02] to-[#FE8302] sm:w-8"
                    : "w-2 bg-[#d5d9df]"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}