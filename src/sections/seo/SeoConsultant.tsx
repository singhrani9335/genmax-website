import Image from "next/image";

import { seoConsultant } from "@/data/seo";

export default function SeoConsultant() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-14 xl:py-16">
      <div className="mx-auto grid w-full max-w-[1400px] items-start gap-8 px-5 sm:px-8 md:grid-cols-2 md:gap-10 lg:gap-14 lg:px-12 xl:px-16">
        {/* ================= LEFT IMAGE ================= */}
        <div className="relative w-full overflow-hidden">
          <Image
            src={seoConsultant.image}
            alt={seoConsultant.imageAlt}
            width={750}
            height={850}
            priority
            className="h-[360px] w-full object-cover object-center sm:h-[430px] md:h-[500px] lg:h-[560px] xl:h-[610px]"
          />

          {/* IMAGE OVERLAY */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="w-full pt-0">
          {/* HEADING */}
          <h2 className="max-w-[650px] text-[26px] font-medium uppercase leading-[1.18] tracking-[0.5px] text-[#1D1D1D] sm:text-[31px] md:text-[34px] lg:text-[38px] xl:text-[40px]">
            {seoConsultant.title}
          </h2>

          {/* CONTENT */}
          <div className="mt-4">
            {seoConsultant.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-[14px] font-normal leading-[1.8] text-[#555] sm:text-[15px] lg:text-[16px] ${
                  index > 0 ? "mt-4" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* ================= HIGHLIGHTS ================= */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {seoConsultant.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="border-l-2 border-[#F04D02] pl-4"
              >
                <h3 className="text-[16px] font-semibold text-[#1D1D1D] sm:text-[17px]">
                  {highlight.title}
                </h3>

                <p className="mt-1 text-[13px] leading-[1.7] text-[#666] sm:text-[14px]">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}