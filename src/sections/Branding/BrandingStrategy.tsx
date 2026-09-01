import Image from "next/image";
import {
  Globe2,
  ShieldCheck,
  Megaphone,
  UsersRound,
  FileBarChart,
  Camera,
  GitMerge,
} from "lucide-react";

import { brandingStrategy } from "@/data/branding";

const strategyIcons = [
  Globe2,
  ShieldCheck,
  Megaphone,
  UsersRound,
  FileBarChart,
  Camera,
  GitMerge,
];

export default function BrandingStrategy() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-12 xl:py-14">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-2 md:gap-10 lg:gap-12 xl:gap-14">
          {/* ================= LEFT IMAGE ================= */}
          <div className="relative h-[240px] w-full overflow-hidden sm:h-[290px] md:h-[330px] lg:h-[370px] xl:h-[400px]">
            <Image
              src={brandingStrategy.image}
              alt={brandingStrategy.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="w-full">
            <h2 className="max-w-[680px] text-[26px] font-normal uppercase leading-[1.2] tracking-[0.3px] text-[#17245C] sm:text-[30px] md:text-[33px] lg:text-[36px] xl:text-[39px]">
              {brandingStrategy.title}
            </h2>

            <div className="mt-4">
              <p className="max-w-[760px] text-[13px] font-normal leading-[1.75] text-[#555] sm:text-[14px] lg:text-[15px]">
                {brandingStrategy.description}
              </p>
            </div>
          </div>
        </div>

        {/* ================= SERVICES ================= */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 lg:mt-12">
          {brandingStrategy.points.map((point, index) => {
            const Icon = strategyIcons[index] || Globe2;

            return (
              <div
                key={point.title}
                className="border-t border-[#E5E7EB] pt-4"
              >
                {/* ================= SERVICE HEADING ================= */}
                <div className="flex items-center gap-2.5">
                  <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#F04D02]/10">
                    <Icon
                      size={16}
                      strokeWidth={1.8}
                      className="text-[#F04D02]"
                    />
                  </div>

                  <h3 className="text-[16px] font-semibold leading-[1.35] text-[#263B5A] sm:text-[17px] lg:text-[18px]">
                    {point.title}
                  </h3>
                </div>

                {/* ================= SERVICE DESCRIPTION ================= */}
                <p className="mt-2 pl-[42px] text-[12px] leading-[1.7] text-[#666] sm:text-[13px] lg:text-[14px]">
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