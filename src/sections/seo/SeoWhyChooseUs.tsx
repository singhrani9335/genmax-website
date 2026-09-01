import Image from "next/image";

import { seoWhyChooseUs } from "@/data/seo";

export default function SeoWhyChooseUs() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-14 xl:py-16">
      <div className="mx-auto grid w-full max-w-[1400px] items-start gap-8 px-5 sm:px-8 md:grid-cols-2 md:gap-10 lg:gap-14 lg:px-12 xl:px-16">
        {/* ================= LEFT IMAGE ================= */}
        <div className="relative w-full overflow-hidden">
          <Image
            src={seoWhyChooseUs.image}
            alt={seoWhyChooseUs.imageAlt}
            width={750}
            height={800}
            className="h-[360px] w-full object-cover object-center sm:h-[430px] md:h-[500px] lg:h-[550px] xl:h-[590px]"
          />
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="w-full pt-0">
          {/* HEADING */}
          <h2 className="max-w-[650px] text-[27px] font-medium uppercase leading-[1.18] tracking-[0.5px] text-[#1D1D1D] sm:text-[32px] md:text-[35px] lg:text-[39px] xl:text-[41px]">
            {seoWhyChooseUs.title}
          </h2>

          {/* PARAGRAPHS */}
          <div className="mt-4">
            {seoWhyChooseUs.paragraphs.map((paragraph, index) => (
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
            {seoWhyChooseUs.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="border-l-2 border-[#F04D02] pl-4"
              >
                <h3 className="text-[16px] font-medium text-[#1D1D1D] sm:text-[17px]">
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