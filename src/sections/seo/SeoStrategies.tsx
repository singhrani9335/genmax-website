import Image from "next/image";

import { seoStrategies } from "@/data/seo";

export default function SeoStrategies() {
  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-16 xl:py-20">
      <div className="mx-auto grid w-full max-w-[1400px] items-start gap-10 px-5 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:gap-12 lg:gap-16 lg:px-12 xl:px-16">
        {/* LEFT CONTENT */}
        <div className="w-full">
          <h2 className="text-[30px] font-medium uppercase leading-[1.2] tracking-[1px] text-[#1D1D1D] sm:text-[36px] md:text-[40px] lg:text-[44px]">
            {seoStrategies.title}
          </h2>

          <p className="mt-5 max-w-[760px] text-[14px] leading-[1.85] text-[#555] sm:text-[15px] lg:text-[16px]">
            {seoStrategies.description}
          </p>

          {/* STRATEGIES */}
          <div className="mt-7 space-y-5">
            {seoStrategies.strategies.map((strategy) => (
              <div
                key={strategy.title}
                className="border-b border-[#E7E7E7] pb-5 last:border-b-0"
              >
                <div>
                  <h3 className="text-[18px] font-semibold text-[#1D1D1D] sm:text-[19px]">
                    {strategy.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-[1.8] text-[#666] sm:text-[14px]">
                    {strategy.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full md:sticky md:top-[100px]">
          <div className="relative overflow-hidden">
            <Image
              src={seoStrategies.image}
              alt={seoStrategies.imageAlt}
              width={750}
              height={900}
              className="h-[420px] w-full object-cover sm:h-[500px] md:h-[600px] lg:h-[680px] xl:h-[760px]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
              <div className="inline-block bg-[#F04D02] px-4 py-2 text-[12px] font-medium uppercase tracking-[1px] text-white">
                {seoStrategies.imageLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}