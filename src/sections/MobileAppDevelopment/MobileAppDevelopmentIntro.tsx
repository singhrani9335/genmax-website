import Image from "next/image";

import { mobileAppDevelopmentIntro } from "@/data/mobileAppDevelopment";

export default function MobileAppDevelopmentIntro() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-14 xl:py-16">
      <div className="mx-auto grid w-full max-w-[1400px] items-start gap-8 px-5 sm:px-8 md:grid-cols-2 md:gap-10 lg:gap-14 lg:px-12 xl:px-16">
        {/* ================= LEFT IMAGE ================= */}
        <div className="relative w-full overflow-hidden">
          <Image
            src={mobileAppDevelopmentIntro.image}
            alt={mobileAppDevelopmentIntro.imageAlt}
            width={700}
            height={750}
            priority
            className="h-[360px] w-full object-cover object-center sm:h-[430px] md:h-[500px] lg:h-[550px] xl:h-[590px]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="w-full pt-0">
          <h2 className="max-w-[620px] text-[27px] font-medium uppercase leading-[1.18] tracking-[0.5px] text-[#1D1D1D] sm:text-[32px] md:text-[35px] lg:text-[39px] xl:text-[41px]">
            {mobileAppDevelopmentIntro.title}
          </h2>

          {/* ================= PARAGRAPHS ================= */}
          <div className="mt-4">
            {mobileAppDevelopmentIntro.paragraphs.map(
              (paragraph, index) => (
                <p
                  key={index}
                  className={`text-[14px] font-normal leading-[1.8] text-[#555] sm:text-[15px] lg:text-[16px] ${
                    index > 0 ? "mt-4" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}