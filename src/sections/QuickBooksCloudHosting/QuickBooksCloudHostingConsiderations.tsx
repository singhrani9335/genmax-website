import Image from "next/image";

import {
  quickBooksCloudHostingConsiderations,
} from "@/data/quickBooksCloudHosting";

export default function QuickBooksCloudHostingConsiderations() {
  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-16 xl:py-20">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-8 px-5 sm:px-8 md:grid-cols-2 md:gap-10 lg:gap-14 lg:px-12 xl:px-16">
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full">
          <h2 className="max-w-[650px] text-[27px] font-medium uppercase leading-[1.18] tracking-[0.4px] text-[#17245C] sm:text-[31px] md:text-[34px] lg:text-[38px] xl:text-[40px]">
            {quickBooksCloudHostingConsiderations.title}
          </h2>

          <div className="mt-5">
            <p className="max-w-[700px] text-[14px] leading-[1.8] text-[#555] sm:text-[15px] lg:text-[16px]">
              {quickBooksCloudHostingConsiderations.description}
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {quickBooksCloudHostingConsiderations.points.map(
              (point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <span className="mt-[8px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#F04D02]" />

                  <p className="text-[14px] leading-[1.7] text-[#56606B] sm:text-[15px] lg:text-[16px]">
                    {point}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative w-full overflow-hidden">
          <Image
            src={quickBooksCloudHostingConsiderations.image}
            alt={quickBooksCloudHostingConsiderations.imageAlt}
            width={750}
            height={650}
            className="h-[340px] w-full object-cover object-center sm:h-[420px] md:h-[470px] lg:h-[520px] xl:h-[560px]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}