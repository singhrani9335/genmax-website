"use client";

import Image from "next/image";
import Link from "next/link";

import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#120E0C] py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[180px] -top-[180px] h-[420px] w-[420px] rounded-full bg-[#F04D02]/10 blur-[120px] sm:h-[520px] sm:w-[520px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[220px] -left-[180px] h-[450px] w-[450px] rounded-full bg-[#FE8302]/8 blur-[120px] sm:h-[560px] sm:w-[560px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[45%] top-[40%] h-[280px] w-[280px] rounded-full bg-[#F04D02]/[0.025] blur-[100px]"
      />

      {/* =====================================================
          SUBTLE BACKGROUND GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        <div className="grid items-stretch gap-10 lg:grid-cols-[35%_65%] lg:gap-8 xl:grid-cols-[34%_66%] xl:gap-10">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative flex flex-col justify-center">
            {/* Small Label */}

            <div className="mb-6 flex items-center gap-3">
              <span className="relative h-px w-10 bg-[#F04D02] sm:w-12">
                <span className="absolute left-0 top-0 h-px w-1/2 bg-[#FF8B63]" />
              </span>

              <span className="text-[8px] font-semibold uppercase tracking-[3px] text-[#FF7040] sm:text-[9px]">
                What We Offer
              </span>
            </div>

            {/* Heading */}

            <h2 className="max-w-[520px] text-[38px] font-medium leading-[1.04] tracking-[-2px] text-white sm:text-[46px] md:text-[52px] lg:text-[54px] xl:text-[60px]">
              Powerful
              <br />
              <span className="text-[#F04D02]">Digital</span>
              <br />
              Solutions
              <br />
              <span className="text-white/90">For Modern Brands.</span>
            </h2>

            {/* Accent */}

            <div className="mt-7 flex items-center gap-2">
              <span className="h-[2px] w-12 bg-[#F04D02]" />
              <span className="h-[2px] w-3 bg-[#FE8302]" />
            </div>

            {/* Description */}

            <p className="mt-6 max-w-[570px] text-[12px] leading-[1.9] text-white/50 sm:text-[13px] md:text-[14px] lg:text-[15px]">
              At Genmax, we combine creativity, technology, and digital
              expertise to help businesses build powerful digital experiences
              and achieve meaningful growth.
            </p>

            <p className="mt-3 max-w-[570px] text-[12px] leading-[1.9] text-white/35 sm:text-[13px] md:text-[14px]">
              From web development and SEO to digital marketing, social media,
              eCommerce, and creative design, we create smart solutions around
              your business goals.
            </p>

            {/* CTA */}

            <div className="mt-8 sm:mt-9">
              <Link
                href="/contact-us"
                className="group relative inline-flex h-[48px] items-center justify-center overflow-hidden border border-[#F04D02] px-8 text-[10px] font-semibold uppercase tracking-[1.5px] text-[#F04D02] no-underline transition-all duration-300 hover:no-underline sm:h-[50px] sm:px-9 sm:text-[11px]"
                style={{
                  borderBottomRightRadius: "26px",
                }}
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-[#F04D02] to-[#FE8302] transition-transform duration-500 group-hover:scale-x-100" />

                <span className="relative z-10 text-[#F04D02] transition-colors duration-300 group-hover:text-white">
                  Work With Us
                </span>
              </Link>
            </div>
          </div>

          {/* =================================================
              SERVICES GRID
          ================================================== */}

          <div className="relative w-full overflow-hidden bg-transparent">
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const isLast = index === services.length - 1;

                const isFirstRowDesktop = index < 3;
                const hasRightBorderDesktop = index % 3 !== 2;

                const hasRightBorderTablet = index % 2 === 0;

                const hasBottomBorderTablet =
                  index < services.length - 2;

                const hasBottomBorderMobile = !isLast;

                return (
                  <Link
                    key={service.id}
                    href={service.href}
                    className={`
                      group relative flex
                      min-h-[235px]
                      w-full
                      flex-col items-center justify-center
                      overflow-hidden
                      px-5 py-10
                      text-center
                      no-underline
                      outline-none

                      /* MOBILE */
                      ${
                        hasBottomBorderMobile
                          ? "border-b border-white/[0.10]"
                          : ""
                      }

                      /* TABLET */
                      sm:min-h-[245px]
                      ${
                        hasRightBorderTablet
                          ? "sm:border-r sm:border-white/[0.10]"
                          : ""
                      }
                      ${
                        hasBottomBorderTablet
                          ? "sm:border-b sm:border-white/[0.10]"
                          : ""
                      }

                      /* DESKTOP */
                      lg:min-h-[260px]
                      ${
                        hasRightBorderDesktop
                          ? "lg:border-r lg:border-white/[0.10]"
                          : "lg:border-r-0"
                      }
                      ${
                        isFirstRowDesktop
                          ? "lg:border-b lg:border-white/[0.10]"
                          : "lg:border-b-0"
                      }
                    `}
                  >
                    {/* =================================================
                        ICON
                    ================================================== */}

                    <div className="relative flex h-[90px] w-[90px] items-center justify-center sm:h-[98px] sm:w-[98px] lg:h-[105px] lg:w-[105px]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={105}
                        height={105}
                        unoptimized
                        className="relative z-10 h-[68px] w-[68px] object-contain opacity-90 sm:h-[76px] sm:w-[76px] lg:h-[82px] lg:w-[82px]"
                      />
                    </div>

                    {/* =================================================
                        SERVICE TITLE
                    ================================================== */}

                    <h3 className="mt-5 max-w-[230px] text-[13px] font-semibold leading-[1.45] !text-white no-underline sm:text-[14px] lg:text-[15px]">
                      {service.title}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM LINE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#F04D02]/70 to-transparent"
      />
    </section>
  );
}