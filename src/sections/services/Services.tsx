"use client";

import Image from "next/image";
import Link from "next/link";

import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#120E0C] py-16 sm:py-20 lg:py-24"
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
          SUBTLE GRID
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

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-[38%_62%] lg:gap-10 xl:gap-16">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative">

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
            <h2 className="max-w-[520px] text-[38px] font-medium leading-[1.04] tracking-[-2px] text-white sm:text-[46px] md:text-[52px] lg:text-[56px] xl:text-[62px]">
              Powerful
              <br />
              <span className="text-[#F04D02]">Digital</span>
              <br />
              Solutions
              <br />
              <span className="text-white/90">
                For Modern Brands.
              </span>
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

            {/* Bottom Info */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.025]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F04D02] shadow-[0_0_14px_rgba(240,77,2,0.9)]" />
              </div>

              <span className="text-[7px] font-medium uppercase tracking-[2.2px] text-white/25 sm:text-[8px]">
                Strategy • Creativity • Technology
              </span>
            </div>
          </div>

          {/* =================================================
              SERVICES GRID
          ================================================== */}

          <div className="relative overflow-hidden rounded-[3px] border border-white/[0.08] bg-white/[0.015]">

            {/* Grid Top Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/4 top-0 h-24 w-1/2 bg-[#F04D02]/5 blur-[55px]"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className={`
                    group relative flex min-h-[180px]
                    flex-col items-center justify-center
                    overflow-hidden px-5 py-8
                    text-center
                    no-underline
                    outline-none
                    transition-all duration-500
                    hover:bg-[#F04D02]/[0.045]
                    hover:no-underline
                    focus-visible:ring-1
                    focus-visible:ring-inset
                    focus-visible:ring-[#F04D02]

                    border-b border-white/[0.08]

                    sm:min-h-[195px]

                    lg:min-h-[200px]
                    lg:border-b-0

                    ${
                      index < 3
                        ? "lg:border-b lg:border-white/[0.08]"
                        : ""
                    }

                    ${
                      index % 3 !== 2
                        ? "lg:border-r lg:border-white/[0.08]"
                        : ""
                    }

                    ${
                      index % 2 === 0
                        ? "sm:border-r sm:border-white/[0.08]"
                        : ""
                    }

                    ${
                      index === services.length - 1
                        ? "border-b-0"
                        : ""
                    }
                  `}
                >
                  {/* Hover Glow */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#F04D02]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* Left Orange Line */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 top-0 w-[2px] origin-bottom scale-y-0 bg-gradient-to-b from-[#F04D02] to-[#FE8302] transition-transform duration-500 group-hover:scale-y-100"
                  />

                  {/* Top Orange Line */}
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-[#F04D02] to-[#FE8302] transition-all duration-500 group-hover:w-12"
                  />

                  {/* Number */}
                  <span
                    aria-hidden="true"
                    className="absolute right-4 top-4 select-none text-[9px] font-medium tracking-[1px] text-white/[0.12] transition-colors duration-300 group-hover:text-[#F04D02]/40"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className="relative flex h-[74px] w-[74px] items-center justify-center sm:h-[82px] sm:w-[82px]">

                    {/* Icon Glow */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-2 rounded-full bg-[#F04D02]/0 blur-xl transition-all duration-500 group-hover:bg-[#F04D02]/15"
                    />

                    <Image
                      src={service.image}
                      alt={service.title}
                      width={82}
                      height={82}
                      unoptimized
                      className="relative z-10 h-[58px] w-[58px] object-contain opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 sm:h-[64px] sm:w-[64px] lg:h-[68px] lg:w-[68px]"
                    />
                  </div>

                  {/* Service Title */}
                  <h3 className="mt-4 max-w-[220px] text-[13px] font-semibold leading-[1.4] !text-white no-underline transition-all duration-300 group-hover:!text-[#FE8302] sm:text-[14px] lg:text-[15px]">
                    {service.title}
                  </h3>

                  {/* Bottom Accent */}
                  <span
                    aria-hidden="true"
                    className="mt-4 h-[2px] w-0 bg-[#F04D02] transition-all duration-500 group-hover:w-9"
                  />
                </Link>
              ))}
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