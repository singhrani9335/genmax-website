"use client";

import { clients } from "@/data/clients";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function OurClients() {
  const columns = Array.from(
    { length: Math.ceil(clients.length / 3) },
    (_, columnIndex) =>
      Array.from({ length: 3 }, (_, rowIndex) => {
        const index = columnIndex * 3 + rowIndex;
        return clients[index % clients.length];
      }),
  );

  return (
    <section
      id="clients"
      className="relative w-full overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      {/* Top Border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F04D02]/30 to-transparent"
      />

      <div className="mx-auto w-full max-w-[1540px] px-0 lg:px-5">
        <div className="grid w-full overflow-hidden lg:grid-cols-[34%_66%]">
          {/* ================= LEFT CONTENT ================= */}
          <div className="group relative flex min-h-[350px] overflow-hidden bg-[#080B12] text-white sm:min-h-[380px] lg:min-h-[430px]">
            {/* Main Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-32 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-[#F04D02]/10 blur-[110px]"
            />

            {/* Top Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-[240px] w-[240px] rounded-full bg-[#F04D02]/5 blur-[80px]"
            />

            {/* Grid Pattern */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "58px 58px",
              }}
            />

            {/* Decorative Circles */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-24 h-[240px] w-[240px] rounded-full border border-white/[0.04]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -right-16 h-[155px] w-[155px] rounded-full border border-[#F04D02]/10"
            />

            {/* Content */}
            <div className="relative z-10 flex w-full flex-col justify-center px-7 py-12 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
              {/* Heading */}
              <h2 className="max-w-[420px] text-[36px] font-medium leading-[1.03] tracking-[-1.8px] sm:text-[42px] md:text-[46px] lg:text-[48px] xl:text-[54px]">
                Our
                <br />
                <span className="text-[#F04D02]">Clients</span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-[400px] text-[12px] leading-[1.8] text-white/50 sm:text-[13px] lg:text-[14px]">
                We partner with ambitious businesses to create digital
                experiences that deliver meaningful results, stronger brands,
                and sustainable growth.
              </p>
            </div>

            {/* Divider */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 top-0 hidden w-px bg-gradient-to-b from-transparent via-[#F04D02]/30 to-transparent lg:block"
            />
          </div>

          {/* ================= CLIENT LOGOS ================= */}
          <div className="relative min-w-0 overflow-hidden bg-white">
            {/* Top Highlight */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"
            />

            <Swiper
              modules={[Autoplay]}
              loop={columns.length >= 2}
              speed={900}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              slidesPerView={2}
              slidesPerGroup={1}
              spaceBetween={0}
              watchOverflow={false}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                },
                480: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                },
                640: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                },
                768: {
                  slidesPerView: 4,
                  slidesPerGroup: 1,
                },
                1024: {
                  slidesPerView: 5,
                  slidesPerGroup: 1,
                },
                1280: {
                  slidesPerView: 5,
                  slidesPerGroup: 1,
                },
              }}
              className="!w-full"
            >
              {columns.map((column, columnIndex) => (
                <SwiperSlide
                  key={`client-column-${columnIndex}`}
                  className="!h-auto"
                >
                  <div className="grid h-full grid-rows-3">
                    {column.map((client, rowIndex) => (
                      <div
                        key={`${client.name}-${columnIndex}-${rowIndex}`}
                        className="group relative flex h-[112px] w-full items-center justify-center overflow-hidden border-b border-r border-[#E5E7EB] bg-white px-3 transition-all duration-500 hover:bg-[#FCFCFC] sm:h-[120px] md:h-[128px] lg:h-[143px]"
                      >
                        {/* Hover Background */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F04D02]/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />

                        {/* Soft Glow */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -right-8 -top-8 h-16 w-16 rounded-full bg-[#F04D02]/5 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />

                        {/* Bottom Accent */}
                        <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#F04D02] transition-all duration-500 group-hover:w-10" />

                        {/* ORIGINAL COLOR LOGO */}
                        <img
                          src={client.image}
                          alt={client.name}
                          loading="lazy"
                          className="relative z-10 max-h-[50px] max-w-[100px] object-contain transition-transform duration-500 group-hover:scale-105 sm:max-h-[54px] sm:max-w-[115px] md:max-h-[60px] md:max-w-[125px] lg:max-h-[68px] lg:max-w-[140px]"
                        />
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"
      />
    </section>
  );
}