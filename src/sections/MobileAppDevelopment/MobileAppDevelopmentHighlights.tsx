"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { mobileAppDevelopmentHighlights } from "@/data/mobileAppDevelopment";

export default function MobileAppDevelopmentHighlights() {
  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 22,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
          className="w-full"
        >
          {mobileAppDevelopmentHighlights.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="flex min-h-[240px] w-full flex-col items-center justify-center bg-gradient-to-br from-[#F04D02] to-[#FE8302] px-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[250px] lg:min-h-[260px]">
                {/* ================= IMAGE ================= */}
                <div className="flex h-[80px] w-[80px] items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={80}
                    height={80}
                    className="h-[70px] w-[70px] object-contain"
                  />
                </div>

                {/* ================= TITLE ================= */}
                <h3 className="mt-6 text-[18px] font-semibold leading-[1.35] text-white sm:text-[19px] lg:text-[20px]">
                  {item.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}