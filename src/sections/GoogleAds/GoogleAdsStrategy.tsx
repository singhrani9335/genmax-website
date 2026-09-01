import Image from "next/image";
import {
  BarChart3,
  LayoutDashboard,
  FileBarChart,
  Settings2,
  Globe2,
  FileCheck2,
  SearchCheck,
} from "lucide-react";

import { googleAdsStrategy } from "@/data/googleAds";

export default function GoogleAdsStrategy() {
  const serviceIcons = [
    BarChart3,
    LayoutDashboard,
    FileBarChart,
    Settings2,
    Globe2,
    FileCheck2,
    SearchCheck,
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-16 xl:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 xl:gap-20">
          {/* ================= LEFT IMAGE ================= */}
          <div className="relative h-[300px] w-full overflow-hidden sm:h-[380px] md:h-[460px] lg:h-[520px] xl:h-[560px]">
            <Image
              src={googleAdsStrategy.image}
              alt={googleAdsStrategy.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="w-full">
            {/* HEADING */}
            <h2 className="max-w-[680px] text-[28px] font-normal uppercase leading-[1.2] tracking-[0.3px] text-[#17245C] sm:text-[32px] md:text-[35px] lg:text-[39px] xl:text-[41px]">
              {googleAdsStrategy.title}
            </h2>

            {/* DESCRIPTION */}
            <div className="mt-5 space-y-4">
              {googleAdsStrategy.description
                .split("\n\n")
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className="max-w-[760px] text-[14px] font-normal leading-[1.85] text-[#555] sm:text-[15px] lg:text-[16px]"
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-10">
          {googleAdsStrategy.points.map((point, index) => {
            const Icon = serviceIcons[index] || BarChart3;

            return (
              <div
                key={point.title}
                className="border-t border-[#E5E7EB] pt-5"
              >
                {/* SERVICE TITLE */}
                <div className="flex items-center gap-3">
                  <Icon
                    className="h-[21px] w-[21px] shrink-0 text-[#F04D02]"
                    strokeWidth={1.8}
                  />

                  <h3 className="text-[18px] font-semibold leading-[1.35] text-[#263B5A] sm:text-[19px] lg:text-[20px]">
                    {point.title}
                  </h3>
                </div>

                {/* SERVICE DESCRIPTION */}
                <p className="mt-3 text-[13px] leading-[1.8] text-[#666] sm:text-[14px] lg:text-[15px]">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}