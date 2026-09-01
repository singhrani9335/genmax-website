import Image from "next/image";
import {
  Eye,
  RotateCcw,
  ShieldAlert,
  Megaphone,
} from "lucide-react";

import { reputationManagementStrategy } from "@/data/reputationManagement";

export default function ReputationManagementStrategy() {
  const strategyIcons = {
    Monitor: Eye,
    Recover: RotateCcw,
    Suppress: ShieldAlert,
    Promote: Megaphone,
  };

  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-16 xl:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 xl:gap-20">
          {/* ================= LEFT IMAGE ================= */}
          <div className="relative h-[300px] w-full overflow-hidden sm:h-[380px] md:h-[460px] lg:h-[520px] xl:h-[560px]">
            <Image
              src={reputationManagementStrategy.image}
              alt={reputationManagementStrategy.imageAlt}
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
            <h2 className="max-w-[680px] text-[28px] font-normal leading-[1.2] tracking-[0.3px] text-[#17245C] sm:text-[32px] md:text-[35px] lg:text-[39px] xl:text-[41px]">
              {reputationManagementStrategy.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-[760px] text-[14px] font-normal leading-[1.85] text-[#555] sm:text-[15px] lg:text-[16px]">
              {reputationManagementStrategy.description}
            </p>

            {/* ================= STRATEGY GRID ================= */}
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:mt-10 lg:gap-x-10 lg:gap-y-8">
              {reputationManagementStrategy.points.map((point) => {
                const Icon =
                  strategyIcons[
                    point.title as keyof typeof strategyIcons
                  ] || Eye;

                return (
                  <div
                    key={point.title}
                    className="border-t border-[#E5E7EB] pt-4"
                  >
                    {/* ICON + HEADING */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#F04D02]/10">
                        <Icon
                          className="h-[19px] w-[19px] text-[#F04D02]"
                          strokeWidth={2}
                        />
                      </div>

                      <h3 className="text-[18px] font-semibold leading-[1.35] text-[#263B5A] sm:text-[19px]">
                        {point.title}
                      </h3>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-3 text-[13px] leading-[1.75] text-[#666] sm:text-[14px]">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}