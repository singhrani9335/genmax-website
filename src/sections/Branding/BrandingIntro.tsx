import Image from "next/image";

import { brandingIntro } from "@/data/branding";

export default function BrandingIntro() {
  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-16 xl:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 xl:gap-20">
          {/* ================= LEFT IMAGE ================= */}
          <div className="relative h-[300px] w-full overflow-hidden sm:h-[380px] md:h-[460px] lg:h-[520px] xl:h-[560px]">
            <Image
              src={brandingIntro.image}
              alt={brandingIntro.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="w-full pt-0">
            <h2 className="max-w-[620px] text-[27px] font-medium uppercase leading-[1.18] tracking-[0.5px] text-[#1D1D1D] sm:text-[32px] md:text-[35px] lg:text-[39px] xl:text-[41px]">
              {brandingIntro.title}
            </h2>

            <div className="mt-4">
              {brandingIntro.paragraphs.map((paragraph, index) => (
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
          </div>
        </div>
      </div>
    </section>
  );
}