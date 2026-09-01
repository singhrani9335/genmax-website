import Image from "next/image";

import { seoIntro } from "@/data/seo";

export default function SeoIntro() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-14 xl:py-16">
      <div className="mx-auto grid w-full max-w-[1400px] items-start gap-8 px-5 sm:px-8 md:grid-cols-2 md:gap-10 lg:gap-14 lg:px-12 xl:px-16">
        {/* ================= LEFT IMAGE ================= */}
        <div className="relative w-full overflow-hidden">
          <Image
            src={seoIntro.image}
            alt={seoIntro.imageAlt}
            width={700}
            height={750}
            priority
            className="h-[360px] w-full object-cover object-center sm:h-[430px] md:h-[500px] lg:h-[550px] xl:h-[590px]"
          />

          {/* IMAGE OVERLAY */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="w-full pt-0">
          {/* HEADING */}
          <h2 className="max-w-[620px] text-[27px] font-medium uppercase leading-[1.18] tracking-[0.5px] text-[#1D1D1D] sm:text-[32px] md:text-[35px] lg:text-[39px] xl:text-[41px]">
            {seoIntro.title}
          </h2>

          {/* MAIN CONTENT */}
          <div className="mt-4">
            {seoIntro.paragraphs.map((paragraph, index) => (
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

          {/* ================= SEO OVERVIEW ================= */}
          <div className="mt-5 border-t border-[#E7E7E7] pt-5">
            <p className="text-[14px] font-normal leading-[1.8] text-[#555] sm:text-[15px] lg:text-[16px]">
              {seoIntro.overview}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}