"use client";

import { clients } from "@/data/clients";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function OurClients() {
  // 3 rows per column
  const columns = Array.from(
    { length: Math.ceil(clients.length / 3) },
    (_, columnIndex) =>
      Array.from({ length: 3 }, (_, rowIndex) => {
        const index = columnIndex * 3 + rowIndex;
        return clients[index % clients.length];
      })
  );

  return (
    <section
      id="clients"
      className="relative -mt-2 w-full overflow-hidden bg-white py-8 sm:py-10 lg:-mt-4 lg:py-14"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid w-full grid-cols-1 items-stretch lg:grid-cols-[34%_66%]">
          {/* LEFT CONTENT */}
          <div className="relative flex min-h-[260px] w-full overflow-hidden bg-[#34405A] sm:min-h-[300px] lg:min-h-[390px]">
            <div className="flex h-full w-full flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:pl-24 lg:pr-8 xl:pl-28">
              <h2 className="text-left text-[28px] font-normal leading-[1.12] tracking-[-1px] text-white sm:text-[34px] md:text-[36px] lg:text-[40px]">
                Our Clients
              </h2>

              <p className="mt-4 w-full max-w-[350px] text-left text-[13px] leading-[1.65] text-white sm:mt-5 sm:text-[14px] lg:text-[15px]">
                Trusted by industry leaders, our solutions empower businesses
                to thrive and achieve lasting success with customer
                satisfaction at the core.
              </p>
            </div>
          </div>

          {/* RIGHT CLIENT SLIDER */}
          <div className="min-w-0 w-full overflow-hidden bg-white">
            <Swiper
              modules={[Autoplay]}
              loop={columns.length >= 6}
              speed={900}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              slidesPerView={2}
              slidesPerGroup={1}
              spaceBetween={0}
              watchOverflow={true}
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
                        className="flex h-[90px] w-full items-center justify-center border-b border-r border-[#E8E8E8] bg-white px-2 sm:h-[100px] md:h-[110px] lg:h-[130px]"
                      >
                        <img
                          src={client.image}
                          alt={client.name}
                          className="max-h-[42px] max-w-[85px] object-contain sm:max-h-[50px] sm:max-w-[100px] md:max-h-[55px] md:max-w-[115px] lg:max-h-[65px] lg:max-w-[130px]"
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
    </section>
  );
}