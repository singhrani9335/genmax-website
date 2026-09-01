import Image from "next/image";
import {
  BadgeCheck,
  Search,
  Monitor,
  ShoppingCart,
  Video,
  Smartphone,
  Globe,
} from "lucide-react";

import { paidAdsServices } from "@/data/paidAdsManagement";

export default function PaidAdsServices() {
  const pointIcons = [
    BadgeCheck,
    Search,
    Monitor,
    ShoppingCart,
    Video,
    Smartphone,
    Globe,
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ================= WHAT WE DO ================= */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[30px] font-normal tracking-wide text-[#263B5A] sm:text-[36px] lg:text-[40px]">
              {paidAdsServices.title}
            </h2>

            {/* POINTS */}
            <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-7 sm:grid-cols-2 lg:mt-16">
              {paidAdsServices.points.map((point, index) => {
                const Icon = pointIcons[index] || BadgeCheck;

                return (
                  <div
                    key={point}
                    className="flex items-center gap-4"
                  >
                    <Icon className="h-[20px] w-[20px] shrink-0 text-[#F04D02]" />

                    <p className="text-[16px] font-normal text-[#4B5563] lg:text-[17px]">
                      {point}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex h-[260px] w-full items-center justify-center sm:h-[320px] lg:h-[360px]">
            <Image
              src={paidAdsServices.image}
              alt={paidAdsServices.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}