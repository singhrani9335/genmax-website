import Image from "next/image";
import {
  Smartphone,
  Code2,
  Apple,
  Layers,
  Zap,
  Globe,
} from "lucide-react";

import { mobileAppDevelopmentStrategy } from "@/data/mobileAppDevelopment";

export default function MobileAppDevelopmentStrategy() {
  const serviceIcons = [
    Layers,
    Smartphone,
    Apple,
    Code2,
    Zap,
    Globe,
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-16 xl:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* =====================================================
            INTRO SECTION
        ===================================================== */}

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 xl:gap-20">
          {/* ================= LEFT IMAGE ================= */}

          <div className="relative h-[300px] w-full overflow-hidden sm:h-[380px] md:h-[460px] lg:h-[520px] xl:h-[560px]">
            <Image
              src={mobileAppDevelopmentStrategy.image}
              alt={mobileAppDevelopmentStrategy.imageAlt}
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
              {mobileAppDevelopmentStrategy.title}
            </h2>

            {/* PARAGRAPH */}

            <div className="mt-5">
              <p className="max-w-[760px] text-[14px] font-normal leading-[1.85] text-[#555] sm:text-[15px] lg:text-[16px]">
                {mobileAppDevelopmentStrategy.description}
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE APP DEVELOPMENT SERVICES
        ===================================================== */}

        <div className="mt-10 sm:mt-12 lg:mt-16 xl:mt-18">
          <div className="space-y-0">
            {mobileAppDevelopmentStrategy.services.map((service, index) => {
              const Icon = serviceIcons[index] || Smartphone;

              return (
                <div
                  key={service.title}
                  className="border-t border-[#E5E7EB] py-5 sm:py-6 lg:py-7"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* ================= ICON ================= */}

                    <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#F04D02]/10">
                      <Icon
                        className="h-[17px] w-[17px] text-[#F04D02]"
                        strokeWidth={2}
                      />
                    </div>

                    {/* ================= CONTENT ================= */}

                    <div className="min-w-0 flex-1">
                      {/* SERVICE HEADING */}

                      <h3 className="text-[17px] font-semibold leading-[1.35] text-[#263B5A] sm:text-[18px] lg:text-[19px]">
                        {service.title}
                      </h3>

                      {/* SERVICE DESCRIPTION */}

                      <p className="mt-2 max-w-[1100px] text-[13px] leading-[1.7] text-[#56606B] sm:text-[14px] lg:text-[15px]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* BOTTOM BORDER */}

          <div className="border-t border-[#E5E7EB]" />
        </div>
      </div>
    </section>
  );
}