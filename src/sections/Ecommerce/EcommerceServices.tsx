import Image from "next/image";
import {
  BadgeCheck,
  MonitorSmartphone,
  Smartphone,
  SearchCheck,
  CircleDollarSign,
} from "lucide-react";

import { ecommerceServices } from "@/data/ecommerce";

export default function EcommerceServices() {
  const pointIcons = [
    MonitorSmartphone,
    BadgeCheck,
    Smartphone,
    SearchCheck,
    CircleDollarSign,
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-14 xl:py-16">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14 xl:gap-16">
          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full">
            <h2 className="text-[29px] font-normal tracking-[0.3px] text-[#263B5A] sm:text-[34px] md:text-[36px] lg:text-[40px]">
              {ecommerceServices.title}
            </h2>

            {/* ================= POINTS ================= */}
            <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:mt-10 sm:grid-cols-2 lg:mt-12 lg:gap-x-12 lg:gap-y-5">
              {ecommerceServices.points.map((point, index) => {
                const Icon = pointIcons[index] || BadgeCheck;

                return (
                  <div
                    key={`${point}-${index}`}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#F04D02]/10">
                      <Icon
                        className="h-[16px] w-[16px] text-[#F04D02]"
                        strokeWidth={1.8}
                      />
                    </div>

                    <p className="text-[13px] font-normal leading-[1.5] text-[#4B5563] sm:text-[14px] lg:text-[15px]">
                      {point}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex h-[240px] w-full items-center justify-center sm:h-[290px] md:h-[320px] lg:h-[360px]">
            <Image
              src={ecommerceServices.image}
              alt={ecommerceServices.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}