import Image from "next/image";
import {
  BadgeCheck,
  HeartHandshake,
  Target,
  ChartNoAxesCombined,
  MousePointerClick,
} from "lucide-react";

import { graphicDesigningWhatWeDo } from "@/data/graphicDesigning";

export default function GraphicDesigningWhatWeDo() {
  const pointIcons = [
    BadgeCheck,
    Target,
    HeartHandshake,
    ChartNoAxesCombined,
    MousePointerClick,
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full">
            <h2 className="text-[30px] font-normal tracking-wide text-[#263B5A] sm:text-[36px] lg:text-[40px]">
              {graphicDesigningWhatWeDo.title}
            </h2>

            {/* ================= POINTS ================= */}
            <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-7 sm:grid-cols-2 lg:mt-12">
              {graphicDesigningWhatWeDo.points.map((point, index) => {
                const Icon = pointIcons[index] || BadgeCheck;

                return (
                  <div
                    key={`${point}-${index}`}
                    className="flex items-center gap-4"
                  >
                    <Icon
                      className="h-[20px] w-[20px] shrink-0 text-[#F04D02]"
                      strokeWidth={2}
                    />

                    <p className="text-[15px] font-normal leading-[1.6] text-[#4B5563] sm:text-[16px] lg:text-[17px]">
                      {point}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex h-[280px] w-full items-center justify-center sm:h-[340px] lg:h-[400px]">
            <Image
              src={graphicDesigningWhatWeDo.image}
              alt={graphicDesigningWhatWeDo.imageAlt}
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