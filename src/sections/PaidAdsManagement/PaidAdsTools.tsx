"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { paidAdsTools } from "@/data/paidAdsManagement";

export default function PaidAdsTools() {
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
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="w-full"
        >
          {paidAdsTools.map((tool) => (
            <SwiperSlide key={tool.name}>
              <div className="flex min-h-[270px] w-full flex-col items-center justify-center bg-gradient-to-br from-[#F04D02] to-[#FE8302] px-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[280px] lg:min-h-[290px]">
                {/* TOOL IMAGE */}
                <div className="flex h-[90px] w-[90px] items-center justify-center">
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    width={90}
                    height={90}
                    className="h-[80px] w-[80px] object-contain"
                  />
                </div>

                {/* TOOL NAME */}
                <h3 className="mt-7 text-[20px] font-semibold text-white sm:text-[22px]">
                  {tool.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}