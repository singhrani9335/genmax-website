"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Phone,
  Sparkles,
} from "lucide-react";

const highlights = [
  "Strategy-led digital solutions",
  "Creative & scalable experiences",
  "Technology built for performance",
  "Long-term growth partnership",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate w-full overflow-hidden bg-[#080B12] py-16 text-white sm:py-20 md:py-24 lg:py-28 xl:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[180px] top-[8%] h-[360px] w-[360px] rounded-full bg-[#F04D02]/[0.055] blur-[110px] sm:-left-[220px] sm:h-[480px] sm:w-[480px] lg:h-[560px] lg:w-[560px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[200px] bottom-[5%] h-[380px] w-[380px] rounded-full bg-[#635BFF]/[0.045] blur-[120px] sm:h-[500px] sm:w-[500px] lg:h-[600px] lg:w-[600px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F04D02]/[0.018] blur-[120px] lg:block"
      />

      {/* =========================================================
          SUBTLE GRID
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(circle at 65% 45%, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at 65% 45%, black 0%, transparent 72%)",
        }}
      />

      {/* Top accent */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F04D02]/35 to-transparent"
      />

      {/* Bottom accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
      />

      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div className="relative mx-auto w-full max-w-[1480px] px-5 sm:px-7 md:px-10 lg:px-14 xl:px-20">
        {/* =======================================================
            SECTION HEADER
        ======================================================== */}

        <div className="mb-11 flex items-center justify-between sm:mb-14 lg:mb-16">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F04D02]/25 bg-[#F04D02]/[0.07]">
              <Sparkles
                size={13}
                strokeWidth={1.6}
                className="text-[#FF6A20]"
              />
            </span>

            <span className="truncate text-[8px] font-semibold uppercase tracking-[2.5px] text-white/50 sm:text-[10px] sm:tracking-[3px]">
              About GenMax
            </span>

            <span className="hidden h-px w-10 bg-[#F04D02]/35 sm:block sm:w-12" />
          </div>

          <span className="hidden text-[8px] font-medium uppercase tracking-[2px] text-white/20 lg:block">
            Who we are • What we create
          </span>
        </div>

        {/* =======================================================
            MAIN GRID
        ======================================================== */}

        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-[44%_56%] lg:gap-0">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="relative z-20 w-full min-w-0 lg:pr-10 xl:pr-16">
            {/* Eyebrow */}

            <div className="mb-4 flex items-center gap-2.5 sm:mb-5">
              <span className="h-px w-7 bg-[#F04D02] sm:w-9" />

              <p className="text-[8px] font-semibold uppercase tracking-[2.3px] text-[#FF6A20] sm:text-[10px] sm:tracking-[2.8px]">
                Digital • Creative • Strategic
              </p>
            </div>

            {/* Heading */}

            <h2 className="max-w-[650px] text-[36px] font-medium leading-[1.07] tracking-[-1.8px] text-white min-[400px]:text-[39px] sm:text-[47px] sm:tracking-[-2.2px] md:text-[53px] lg:text-[51px] xl:text-[61px]">
              We turn ambitious
              <br />

              <span className="relative inline-block text-[#FF6A20]">
                ideas
                <span className="absolute -bottom-1 left-0 h-[2px] w-[52%] rounded-full bg-[#FF6A20]/55" />
              </span>{" "}
              into
              <br />

              <span className="text-white">digital impact.</span>
            </h2>

            {/* Description */}

            <p className="mt-6 max-w-[600px] text-[13px] leading-[1.85] text-white/45 sm:mt-7 sm:text-[15px] sm:leading-[1.9] xl:text-[16px]">
              For a decade, we&apos;ve delivered top-tier IT solutions and
              digital experiences that help businesses compete, connect and
              grow. We combine strategy, creativity and technology to turn
              complex ideas into meaningful digital experiences.
            </p>

            {/* =================================================
                HIGHLIGHTS
            ================================================== */}

            <div className="mt-8 grid max-w-[630px] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="group flex min-w-0 items-center gap-2.5"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#F04D02]/20 bg-[#F04D02]/[0.06] transition-all duration-300 group-hover:border-[#F04D02]/60 group-hover:bg-[#F04D02]">
                    <Check
                      size={11}
                      strokeWidth={2.5}
                      className="text-[#FF6A20] transition-colors duration-300 group-hover:text-white"
                    />
                  </span>

                  <span className="text-[10px] font-medium leading-5 text-white/50 transition-colors duration-300 group-hover:text-white/80 sm:text-[12px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* =================================================
                CTA
            ================================================== */}

            <div className="mt-9 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-5">
              <Link
                href="/about"
                className="group inline-flex h-[50px] w-fit items-center gap-3 rounded-full bg-[#F04D02] px-6 text-[9px] font-semibold uppercase tracking-[1.4px] text-white shadow-[0_14px_40px_rgba(240,77,2,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#111318] hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:h-[53px] sm:px-7 sm:text-[10px]"
              >
                <span>Discover More</span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:bg-[#111318]/10">
                  <ArrowRight
                    size={13}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>

              <div className="flex items-center gap-2.5">
                <span className="h-px w-7 bg-white/12 sm:w-8" />

                <span className="text-[7px] font-medium uppercase tracking-[1.6px] text-white/25 sm:text-[8px] sm:tracking-[2px]">
                  Create • Build • Grow
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}

          <div className="relative z-10 w-full min-w-0 lg:-mr-6 xl:-mr-12">
            {/* Background number */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-14 hidden select-none text-[110px] font-semibold leading-none tracking-[-11px] text-white/[0.025] xl:block"
            >
              10
            </div>

            {/* Orange corner */}

            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 z-0 h-[90px] w-[90px] rounded-bl-[38px] border-b-2 border-l-2 border-[#F04D02]/65 sm:-bottom-5 sm:-left-5 sm:h-[115px] sm:w-[115px] sm:rounded-bl-[48px] sm:border-b-[3px] sm:border-l-[3px]"
            />

            {/* Purple corner */}

            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 z-0 h-[65px] w-[65px] rounded-tr-[25px] border-r-2 border-t-2 border-[#6C63FF]/30 sm:-right-4 sm:-top-4 sm:h-[90px] sm:w-[90px] sm:rounded-tr-[32px]"
            />

            {/* Image wrapper */}

            <div className="relative z-10 overflow-hidden rounded-[5px] border border-white/[0.08] bg-[#10141D] shadow-[0_30px_90px_rgba(0,0,0,0.32)]">
              <div className="relative h-[250px] min-[400px]:h-[275px] sm:h-[340px] md:h-[390px] lg:h-[420px] xl:h-[460px]">
                <img
                  src="/images/about.webp"
                  alt="GenMax IT Solution digital services"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
                />

                {/* Image overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/85 via-[#05070B]/15 to-transparent" />

                {/* Status */}

                <div className="absolute left-4 top-4 flex max-w-[calc(100%-32px)] items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 backdrop-blur-xl sm:left-6 sm:top-6 sm:px-3.5 sm:py-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6A20] shadow-[0_0_12px_rgba(255,106,32,0.9)]" />

                  <span className="truncate text-[6px] font-semibold uppercase tracking-[1.5px] text-white/65 sm:text-[7px] sm:tracking-[2px]">
                    Digital Transformation
                  </span>
                </div>

                {/* Bottom information */}

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="min-w-0">
                    <p className="text-[7px] font-medium uppercase tracking-[2px] text-white/35 sm:text-[8px] sm:tracking-[2.5px]">
                      Experience
                    </p>

                    <p className="mt-1 text-[21px] font-semibold leading-none tracking-[-0.8px] text-white sm:text-[29px] sm:tracking-[-1px]">
                      10+ Years
                    </p>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 sm:h-10 sm:w-10">
                    <ArrowUpRight size={15} strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </div>

            {/* =================================================
                LET'S TALK
            ================================================== */}

            <a
              href="tel:971507534313"
              aria-label="Call GenMax IT Solution"
              className="group relative z-20 flex min-h-[82px] w-full items-center gap-3 overflow-hidden rounded-b-[6px] border border-white/[0.06] border-t-0 bg-[#11151E] px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition-all duration-500 hover:bg-[#F04D02] sm:min-h-[96px] sm:gap-5 sm:px-7 md:px-8"
            >
              {/* Hover glow */}

              <span className="pointer-events-none absolute -right-14 top-1/2 h-[140px] w-[140px] -translate-y-1/2 rounded-full bg-white/15 opacity-0 blur-[45px] transition-opacity duration-500 group-hover:opacity-100" />

              {/* Bottom accent */}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />

              {/* Phone */}

              <span className="relative z-10 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-[#F04D02] text-white shadow-[0_8px_22px_rgba(240,77,2,0.22)] transition-all duration-300 group-hover:bg-white group-hover:text-[#F04D02] sm:h-[53px] sm:w-[53px]">
                <Phone
                  size={18}
                  strokeWidth={1.7}
                  className="sm:h-5 sm:w-5"
                />
              </span>

              {/* Text */}

              <span className="relative z-10 min-w-0 flex-1">
                <span className="block text-[7px] font-semibold uppercase tracking-[2px] text-[#FF6A20] transition-colors duration-300 group-hover:text-white/75 sm:text-[8px] sm:tracking-[2.4px]">
                  Let&apos;s Talk
                </span>

                <span className="mt-1 block text-[10px] font-semibold uppercase leading-[1.45] tracking-[0.05px] text-white/85 transition-colors duration-300 group-hover:text-white sm:text-[14px] md:text-[15px] lg:text-[16px]">
                  Your next big idea deserves a great companion.
                </span>
              </span>

              {/* Arrow */}

              <span className="relative z-10 hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 group-hover:border-white/25 group-hover:text-white sm:flex">
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>

            {/* =================================================
                EXPERIENCE BADGE
            ================================================== */}

            <div className="absolute -bottom-10 left-5 z-30 hidden sm:block lg:left-8">
              <div className="flex items-center gap-3 rounded-[12px] border border-white/10 bg-[#151922]/95 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F04D02]/10">
                  <Sparkles
                    size={15}
                    strokeWidth={1.5}
                    className="text-[#FF6A20]"
                  />
                </div>

                <div>
                  <p className="text-[17px] font-semibold leading-none text-white">
                    10+
                  </p>

                  <p className="mt-1 text-[7px] font-semibold uppercase tracking-[1.5px] text-white/35">
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM INFORMATION
        ======================================================== */}

        <div className="mt-14 border-t border-white/[0.07] pt-6 sm:mt-20 sm:pt-7 lg:mt-24">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[720px] text-[11px] leading-[1.85] text-white/30 sm:text-[13px] sm:leading-[1.9]">
              From the first conversation to the final launch, we combine
              business thinking, creative design and reliable technology to
              build digital experiences made for real-world results.
            </p>

            <Link
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-2 text-[8px] font-semibold uppercase tracking-[1.6px] text-white/40 transition-colors duration-300 hover:text-[#FF6A20] sm:text-[9px] sm:tracking-[1.8px]"
            >
              Start a conversation

              <ArrowUpRight
                size={13}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}