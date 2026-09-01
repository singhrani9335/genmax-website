import Image from "next/image";
import { Check } from "lucide-react";

import { digitalMarketingWhatWeDo } from "@/data/digitalMarketing";

export default function WhatWeDo() {
  return (
    <section className="w-full bg-[#f7f8fb] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-6 px-8 sm:px-12 md:grid-cols-2 lg:gap-8 lg:px-16 xl:px-20">
        {/* LEFT CONTENT */}
        <div className="max-w-[650px]">
          <h2 className="text-[28px] font-medium uppercase leading-[1.2] text-[#17245C] sm:text-[32px] md:text-[36px] lg:text-[40px]">
            What We Do
          </h2>

          <div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {digitalMarketingWhatWeDo.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3"
              >
                {/* CHECK ICON */}
                <div className="flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full bg-[#17245C]/10 text-[#F04D02]">
                  <Check size={15} strokeWidth={2.5} />
                </div>

                {/* ITEM TEXT */}
                <p className="text-[14px] font-normal leading-[1.45] text-[#444] sm:text-[15px]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-end">
          <div className="absolute -right-3 -top-3 z-0 hidden h-[90px] w-[90px] border-r-4 border-t-4 border-[#F04D02] lg:block" />

          <div className="relative z-10 w-full max-w-[540px] overflow-hidden">
            <Image
              src="/images/digital-marketing/what-we-do-digital-marketing.jpg"
              alt="What We Do at GenMax IT Solution"
              width={750}
              height={560}
              className="h-[350px] w-full object-cover object-center shadow-[0_15px_40px_rgba(0,0,0,0.10)] sm:h-[380px] md:h-[390px] lg:h-[410px] xl:h-[430px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}