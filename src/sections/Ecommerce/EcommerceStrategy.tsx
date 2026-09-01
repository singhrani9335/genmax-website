import Image from "next/image";
import {
  ShoppingCart,
  Store,
  Settings2,
  Layers3,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

import { ecommerceStrategy } from "@/data/ecommerce";

export default function EcommerceStrategy() {
  const strategyIcons = [
    ShoppingCart,
    Store,
    Settings2,
    Layers3,
    ShoppingBag,
    Sparkles,
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-16 xl:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-14 xl:gap-16">
          {/* ================= LEFT IMAGE ================= */}
          <div className="relative h-[280px] w-full overflow-hidden sm:h-[350px] md:h-[400px] lg:h-[460px] xl:h-[500px]">
            <Image
              src={ecommerceStrategy.image}
              alt={ecommerceStrategy.imageAlt}
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
            <h2 className="max-w-[680px] text-[27px] font-normal leading-[1.2] tracking-[0.3px] text-[#17245C] sm:text-[31px] md:text-[34px] lg:text-[38px] xl:text-[40px]">
              {ecommerceStrategy.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-4 max-w-[760px] text-[14px] font-normal leading-[1.8] text-[#555] sm:text-[15px] lg:text-[16px]">
              {ecommerceStrategy.description}
            </p>
          </div>
        </div>

        {/* ================= E-COMMERCE SERVICES ================= */}
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:gap-x-14 lg:gap-y-7">
          {ecommerceStrategy.points.map((point, index) => {
            const Icon = strategyIcons[index] || ShoppingCart;

            return (
              <div
                key={point.title}
                className="border-t border-[#E5E7EB] pt-4"
              >
                {/* ICON + HEADING */}
                <div className="flex items-start gap-3">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#F04D02]/10">
                    <Icon
                      className="h-[18px] w-[18px] text-[#F04D02]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="pt-[4px] text-[17px] font-semibold leading-[1.35] text-[#263B5A] sm:text-[18px] lg:text-[19px]">
                    {point.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-2.5 pl-[49px] text-[13px] leading-[1.75] text-[#666] sm:text-[14px] lg:text-[15px]">
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