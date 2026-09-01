"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { ecommerceTools } from "@/data/ecommerce";

export default function EcommerceTools() {
  return (
    <section className="w-full overflow-hidden bg-white py-8 sm:py-10 lg:py-14">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={18}
          slidesPerView={1}
          loop
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 22,
            },
          }}
          className="w-full"
        >
          {ecommerceTools.map((tool) => (
            <SwiperSlide key={tool.name}>
              <div className="flex min-h-[220px] w-full flex-col items-center justify-center bg-gradient-to-br from-[#F04D02] to-[#FE8302] px-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[235px] lg:min-h-[245px]">
                {/* TOOL IMAGE */}
                <div className="flex h-[75px] w-[75px] items-center justify-center">
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    width={75}
                    height={75}
                    className="h-[68px] w-[68px] object-contain"
                  />
                </div>

                {/* TOOL NAME */}
                <h3 className="mt-5 text-[18px] font-semibold text-white sm:text-[20px]">
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