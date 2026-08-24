"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Strategy Before Execution",
    description:
      "We understand your goals first, then build digital solutions that are aligned with your business direction.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Built For Performance",
    description:
      "From design to technology, every experience is created to be fast, scalable, reliable and results-focused.",
    icon: Zap,
  },
  {
    number: "03",
    title: "Creative + Technology",
    description:
      "We combine creative thinking with modern technology to create digital experiences people remember.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Long-Term Partnership",
    description:
      "We don't just deliver a project. We work alongside you to improve, evolve and grow your digital presence.",
    icon: Users,
  },
];

const highlights = [
  "Business-focused solutions",
  "Modern technology stack",
  "Dedicated creative team",
  "Scalable digital experiences",
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative isolate w-full overflow-hidden bg-[#070A12] py-16 text-white sm:py-20 md:py-24 lg:py-28 xl:py-32"
    >
      {/* =========================================================
          PREMIUM BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 30%, rgba(240,77,2,0.075), transparent 25%), radial-gradient(circle at 88% 65%, rgba(99,102,241,0.075), transparent 27%), linear-gradient(135deg, #070A12 0%, #0A0F1C 50%, #070A12 100%)",
        }}
      />

      {/* Orange glow */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[260px] top-[15%] h-[520px] w-[520px] rounded-full bg-[#F04D02]/[0.055] blur-[140px]"
      />

      {/* Purple glow */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[250px] bottom-[5%] h-[560px] w-[560px] rounded-full bg-[#6366F1]/[0.055] blur-[150px]"
      />

      {/* Center glow */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[52%] top-[45%] hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F04D02]/[0.018] blur-[120px] lg:block"
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
            "radial-gradient(circle at 50% 50%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 50%, black 0%, transparent 75%)",
        }}
      />

      {/* Side lines */}

      <div className="pointer-events-none absolute left-[5%] top-0 hidden h-full w-px bg-white/[0.035] lg:block" />

      <div className="pointer-events-none absolute right-[5%] top-0 hidden h-full w-px bg-white/[0.035] lg:block" />

      {/* Top accent */}

      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F04D02]/40 to-transparent"
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto w-full max-w-[1540px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* =======================================================
            SECTION HEADER
        ======================================================== */}

        <div className="mb-12 flex items-center justify-between sm:mb-14 lg:mb-16">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 rounded-full bg-[#F04D02]/30 blur-[3px]" />

              <span className="relative h-2.5 w-2.5 rounded-full bg-[#F04D02] shadow-[0_0_18px_rgba(240,77,2,0.8)]" />
            </span>

            <span className="text-[8px] font-semibold uppercase tracking-[2.5px] text-white/45 sm:text-[10px] sm:tracking-[3px]">
              Why GenMax
            </span>

            <span className="hidden h-px w-10 bg-[#F04D02]/35 sm:block sm:w-14" />
          </div>

          <span className="hidden text-[8px] font-medium uppercase tracking-[2px] text-white/20 lg:block">
            Strategy • Creativity • Technology
          </span>
        </div>

        {/* =======================================================
            INTRO
        ======================================================== */}

        <div className="grid items-end gap-8 lg:grid-cols-[58%_42%] lg:gap-12">
          {/* LEFT */}

          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <span className="h-px w-8 bg-[#F04D02] sm:w-11" />

              <span className="text-[8px] font-semibold uppercase tracking-[2.4px] text-[#FF7548] sm:text-[9px] sm:tracking-[3px]">
                Built Around Your Growth
              </span>
            </div>

            <h2 className="max-w-[850px] text-[37px] font-medium leading-[1.06] tracking-[-1.8px] text-white min-[400px]:text-[41px] sm:text-[50px] sm:tracking-[-2.3px] md:text-[58px] lg:text-[62px] xl:text-[70px]">
              More than a service.
              <br />

              <span className="relative inline-block bg-gradient-to-r from-[#F04D02] via-[#ff8059] to-[#a78bfa] bg-clip-text text-transparent">
                A digital partner.
                <span className="absolute -bottom-1 left-0 h-[2px] w-[42%] rounded-full bg-[#F04D02]/60" />
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <div className="lg:pb-2">
            <p className="max-w-[520px] text-[13px] leading-[1.85] text-white/40 sm:text-[15px] sm:leading-[1.9]">
              We bring together strategy, design and technology to create
              digital experiences that are not only visually impressive, but
              also built to move your business forward.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[8px] font-medium uppercase tracking-[1.1px] text-white/30 sm:text-[9px]"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#F04D02]/20 bg-[#F04D02]/[0.06]">
                    <Check
                      size={9}
                      strokeWidth={2.5}
                      className="text-[#F04D02]"
                    />
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =======================================================
            MAIN CONTENT
        ======================================================== */}

        <div className="mt-14 grid gap-5 md:mt-16 lg:grid-cols-[42%_58%] lg:gap-6 xl:mt-20">
          {/* =====================================================
              IMAGE / VISUAL
          ====================================================== */}

          <div className="relative min-h-[390px] overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#0D121C] sm:min-h-[470px] lg:min-h-[600px]">
            {/* Image */}

            <img
              src="/images/why.webp"
              alt="Why choose GenMax IT Solution"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.72] transition-transform duration-700 hover:scale-[1.035]"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/45 to-[#05070B]/5" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#070A12]/30 to-transparent" />

            {/* Corner */}

            <div className="absolute left-0 top-0 h-24 w-24 rounded-br-[40px] border-b border-r border-[#F04D02]/40" />

            {/* Floating top label */}

            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-2 backdrop-blur-xl sm:left-6 sm:top-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F04D02] shadow-[0_0_12px_rgba(240,77,2,0.8)]" />

              <span className="text-[7px] font-semibold uppercase tracking-[2px] text-white/60">
                Digital Excellence
              </span>
            </div>

            {/* Bottom content */}

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-8">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-[8px] font-medium uppercase tracking-[2.5px] text-white/35">
                    Our approach
                  </p>

                  <h3 className="mt-2 max-w-[330px] text-[25px] font-medium leading-[1.1] tracking-[-0.8px] text-white sm:text-[31px]">
                    Think smarter.
                    <br />
                    Build better.
                  </h3>
                </div>

                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl sm:flex">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="text-white/70"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              REASONS
          ====================================================== */}

          <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.number}
                  className="group relative overflow-hidden rounded-[16px] border border-white/[0.075] bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.045] sm:p-6 lg:p-7"
                >
                  {/* Hover glow */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#F04D02]/10 opacity-0 blur-[45px] transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Number */}

                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-semibold tracking-[2px] text-[#F04D02]/60">
                      {reason.number}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] transition-all duration-300 group-hover:border-[#F04D02]/30 group-hover:bg-[#F04D02]/10">
                      <Icon
                        size={15}
                        strokeWidth={1.5}
                        className="text-[#F04D02]"
                      />
                    </span>
                  </div>

                  {/* Title */}

                  <h3 className="relative mt-8 text-[18px] font-medium leading-[1.2] tracking-[-0.4px] text-white sm:text-[20px]">
                    {reason.title}
                  </h3>

                  {/* Description */}

                  <p className="relative mt-3 text-[11px] leading-[1.8] text-white/35 sm:text-[12px] sm:leading-[1.85]">
                    {reason.description}
                  </p>

                  {/* Bottom line */}

                  <div className="mt-7 flex items-center gap-2">
                    <span className="h-px w-8 bg-[#F04D02]/50 transition-all duration-500 group-hover:w-14" />

                    <span className="h-px w-2 bg-white/10" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =======================================================
            BOTTOM CTA / PROOF
        ======================================================== */}

        <div className="mt-12 overflow-hidden rounded-[16px] border border-white/[0.08] bg-white/[0.025] sm:mt-16 lg:mt-20">
          <div className="relative flex flex-col gap-7 p-5 sm:p-7 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
            {/* Glow */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#6366F1]/10 blur-[70px]"
            />

            <div className="relative flex items-center gap-4 sm:gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#F04D02]/20 bg-[#F04D02]/[0.07] sm:h-12 sm:w-12">
                <ShieldCheck
                  size={18}
                  strokeWidth={1.5}
                  className="text-[#F04D02]"
                />
              </div>

              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[2px] text-[#FF7548]">
                  A better way to build digital
                </p>

                <p className="mt-1 text-[12px] leading-[1.6] text-white/40 sm:text-[14px]">
                  Clear strategy. Strong execution. Measurable results.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="group relative z-10 inline-flex h-[48px] w-full items-center justify-center gap-3 rounded-full bg-[#F04D02] px-6 text-[9px] font-semibold uppercase tracking-[1.5px] text-white shadow-[0_16px_40px_rgba(240,77,2,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#111827] sm:w-fit"
            >
              <span>Let's Build Something</span>

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-colors duration-300 group-hover:bg-[#111827]/10">
                <ArrowRight
                  size={13}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </div>
        </div>

        {/* =======================================================
            BOTTOM LABEL
        ======================================================== */}

        <div className="mt-7 hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-white/10" />

            <span className="text-[8px] font-semibold uppercase tracking-[2.4px] text-white/20">
              Strategy • Design • Technology • Growth
            </span>
          </div>

          <div className="flex items-center gap-2">
            <TrendingUp
              size={12}
              strokeWidth={1.5}
              className="text-[#F04D02]"
            />

            <span className="text-[8px] font-medium uppercase tracking-[1.8px] text-white/20">
              Built to perform
            </span>
          </div>
        </div>
      </div>

      {/* Bottom accent */}

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
      />
    </section>
  );
}