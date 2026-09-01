import Image from "next/image";
import {
  Target,
  Layers3,
  Lightbulb,
  BarChart3,
  Handshake,
} from "lucide-react";

import { brandingServices } from "@/data/branding";

const serviceIcons = [
  Target,
  Layers3,
  Lightbulb,
  BarChart3,
  Handshake,
];

export default function BrandingServices() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-12 xl:py-14">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-6 px-5 sm:px-8 md:grid-cols-2 md:gap-8 lg:gap-10 lg:px-12 xl:px-16">
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full">
          <h2 className="text-[30px] font-normal leading-[1.2] tracking-[0.3px] text-[#17245C] sm:text-[34px] md:text-[37px] lg:text-[40px]">
            {brandingServices.title}
          </h2>

          {/* ================= SERVICES ================= */}
          <div className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-7 sm:grid-cols-2 sm:gap-3">
            {brandingServices.points.map((point, index) => {
              const Icon = serviceIcons[index] || Target;

              return (
                <div
                  key={`${point}-${index}`}
                  className="flex items-center gap-2.5 py-2"
                >
                  {/* ICON */}
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#F04D02]"
                  />

                  {/* SERVICE NAME */}
                  <p className="text-[14px] font-medium leading-[1.4] text-[#333] sm:text-[15px]">
                    {point}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative flex w-full items-center justify-center">
          <div className="relative h-[240px] w-full overflow-hidden sm:h-[280px] md:h-[310px] lg:h-[340px] xl:h-[360px]">
            <Image
              src={brandingServices.image}
              alt={brandingServices.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}