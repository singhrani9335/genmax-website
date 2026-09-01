"use client";

import {
  BarChart3,
  Smartphone,
  Search,
  Monitor,
  ShoppingCart,
  PlayCircle,
  AppWindow,
} from "lucide-react";

import { paidAdsCampaigns } from "@/data/paidAdsManagement";

const serviceIcons = [
  BarChart3,
  Smartphone,
  Search,
  Monitor,
  ShoppingCart,
  PlayCircle,
  AppWindow,
];

export default function PaidAdsCampaigns() {
  return (
    <section className="w-full bg-[#F7F8FA] py-5 sm:py-7 lg:py-9">
      <div className="mx-auto w-full max-w-[1400px] px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        {/* ================= TOP CONTENT ================= */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-10 lg:gap-14">
          {/* ================= LEFT IMAGE ================= */}
          <div className="relative h-[230px] w-full overflow-hidden sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[380px]">
            <img
              src={paidAdsCampaigns.image}
              alt={paidAdsCampaigns.imageAlt}
              className="h-full w-full object-contain object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="w-full">
            <h2 className="max-w-[700px] text-[27px] font-normal uppercase leading-[1.25] tracking-[0.5px] text-[#17245C] sm:text-[32px] lg:text-[38px]">
              {paidAdsCampaigns.title}
            </h2>

            <p className="mt-5 max-w-[700px] text-[14px] leading-[1.8] text-[#56606B] sm:text-[15px] lg:text-[16px]">
              {paidAdsCampaigns.description}
            </p>
          </div>
        </div>

        {/* ================= PPC SERVICES ================= */}
        <div className="mt-8 w-full sm:mt-10 lg:mt-12">
          {paidAdsCampaigns.services.map((service, index) => {
            const Icon = serviceIcons[index] || BarChart3;

            return (
              <div key={service.title} className="py-4 sm:py-5">
                {/* ================= HEADING ================= */}
                <div className="flex items-center gap-3">
                  {/* ICON */}
                  <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#17245C]/8 text-[#F04D02]">
                    <Icon size={16} strokeWidth={1.8} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[16px] font-semibold leading-[1.3] text-[#222] sm:text-[18px]">
                    {service.title}
                  </h3>
                </div>

                {/* ================= DESCRIPTION ================= */}
                <p className="mt-2 w-full text-[13px] font-normal leading-[1.6] text-[#666] sm:text-[14px]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}