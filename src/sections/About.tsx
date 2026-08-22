"use client";

import { Phone } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1450px] px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20">
        <div className="grid items-center gap-10 lg:grid-cols-[40%_60%] lg:gap-0">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10 lg:translate-x-8 lg:pr-10 xl:translate-x-10 xl:pr-14">

            <h2 className="max-w-full text-[30px] font-normal leading-[1.15] tracking-[-1px] text-[#222222] sm:text-[38px] lg:whitespace-nowrap lg:text-[43px] xl:text-[47px]">
              Best{" "}
              <span className="text-[#F04D02]">
                Digital Marketing
              </span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Company In Noida
            </h2>

            <p className="mt-5 max-w-[560px] text-[14px] leading-[1.7] text-[#666666] sm:text-[15px] lg:mt-6 lg:text-[15px] xl:text-[16px]">
              For a decade, we&apos;ve delivered top-tier IT solutions and
              digital analytics, conquering every challenge with passion and
              perseverance.
            </p>

            {/* ================= DISCOVER MORE ================= */}
            <div className="mt-7 sm:mt-8">
              <a
                href="/about"
                className="group relative inline-flex h-[50px] min-w-[195px] items-center justify-center overflow-hidden rounded-none rounded-br-[28px] border border-[#F04D02] bg-white px-7 text-[11px] font-semibold uppercase tracking-[1px] text-[#F04D02] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#F04D02] hover:to-[#FE8302] hover:text-white sm:h-[52px] sm:min-w-[205px] sm:px-8 sm:text-[12px]"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  DISCOVER MORE
                </span>
              </a>
            </div>
          </div>

          {/* ================= RIGHT IMAGE + TALK ================= */}
          <div className="relative z-10 lg:-mr-16 xl:-mr-20">

            {/* IMAGE */}
            <div className="relative z-10 h-[240px] w-full overflow-hidden rounded-sm sm:h-[300px] md:h-[340px] lg:h-[380px] xl:h-[410px]">
              <img
                src="/images/about.webp"
                alt="Digital Marketing Agency"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* ================= LET'S TALK ================= */}
            <div className="relative">

              {/* HALF CIRCLE */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-[18px] top-full z-0 hidden h-[70px] w-[70px] -translate-y-[35px] rounded-full border-[3px] border-[#F04D02] border-t-0 bg-transparent sm:block lg:right-[28px] lg:h-[82px] lg:w-[82px] lg:-translate-y-[41px]"
              />

              <a
                href="tel:971507534313"
                aria-label="Let's Talk"
                className="group relative z-10 flex min-h-[75px] w-full items-center gap-4 overflow-hidden rounded-b-[5px] bg-white px-5 py-4 shadow-[0_10px_35px_rgba(0,0,0,0.10)] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#F04D02] hover:to-[#FE8302] sm:min-h-[82px] sm:gap-5 sm:px-7 sm:py-5"
              >

                {/* PHONE CIRCLE */}
                <span className="relative z-10 flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#F04D02] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#F04D02] sm:h-[48px] sm:w-[48px]">
                  <Phone
                    size={20}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>

                {/* TEXT */}
                <span className="relative z-10 text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.2px] text-[#222222] transition-colors duration-300 group-hover:text-white sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[19px]">
                  YOUR NEXT BIG IDEA DESERVES A GREAT
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  COMPANION – LET&apos;S TALK!
                </span>

              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}