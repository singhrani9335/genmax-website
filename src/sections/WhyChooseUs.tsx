"use client";

import {
  Check,
  Code2,
  Lightbulb,
  Zap,
  Users,
} from "lucide-react";

const reasons = [
  {
    title: "Strategy Before Execution",
    description:
      "We understand your goals first, then build digital solutions that are aligned with your business direction.",
    icon: Lightbulb,
  },
  {
    title: "Built For Performance",
    description:
      "From design to technology, every experience is created to be fast, scalable, reliable and results-focused.",
    icon: Zap,
  },
  {
    title: "Creative + Technology",
    description:
      "We combine creative thinking with modern technology to create digital experiences people remember.",
    icon: Code2,
  },
  {
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
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 30%, rgba(240,77,2,0.075), transparent 25%), radial-gradient(circle at 88% 65%, rgba(99,102,241,0.075), transparent 27%), linear-gradient(135deg, #070A12 0%, #0A0F1C 50%, #070A12 100%)",
        }}
      />

      {/* Orange Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[260px] top-[15%] h-[520px] w-[520px] rounded-full bg-[#F04D02]/[0.055] blur-[140px]"
      />

      {/* Purple Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[250px] bottom-[5%] h-[560px] w-[560px] rounded-full bg-[#6366F1]/[0.055] blur-[150px]"
      />

      {/* Center Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[52%] top-[45%] hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F04D02]/[0.018] blur-[120px] lg:block"
      />

      {/* Grid */}
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

      {/* Top Accent */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F04D02]/40 to-transparent"
      />

      {/* Main Container */}
      <div className="relative mx-auto w-full max-w-[1540px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* Intro */}
        <div className="grid items-end gap-8 lg:grid-cols-[58%_42%] lg:gap-12">
          {/* Left */}
          <div>
            <h2 className="max-w-[850px] text-[37px] font-medium leading-[1.06] tracking-[-1.8px] text-white min-[400px]:text-[41px] sm:text-[50px] sm:tracking-[-2.3px] md:text-[58px] lg:text-[62px] xl:text-[70px]">
              More than a service.
              <br />

              <span className="relative inline-block bg-gradient-to-r from-[#F04D02] via-[#ff8059] to-[#a78bfa] bg-clip-text text-transparent">
                A digital partner.
                <span className="absolute -bottom-1 left-0 h-[2px] w-[42%] rounded-full bg-[#F04D02]/60" />
              </span>
            </h2>
          </div>

          {/* Right */}
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

        {/* Main Content */}
        <div className="mt-14 grid gap-5 md:mt-16 lg:grid-cols-[42%_58%] lg:gap-6 xl:mt-20">
          {/* Image */}
          <div className="relative min-h-[390px] overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#0D121C] sm:min-h-[470px] lg:min-h-[600px]">
            <img
              src="/images/why.webp"
              alt="Why choose GenMax IT Solution"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.72] transition-transform duration-700 hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/20 via-[#05070B]/10 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#070A12]/20 to-transparent" />

            {/* Corner */}
            <div className="absolute left-0 top-0 h-24 w-24 rounded-br-[40px] border-b border-r border-[#F04D02]/40" />
          </div>

          {/* Reasons */}
          <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="group relative overflow-hidden rounded-[16px] border border-white/[0.075] bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.045] sm:p-6 lg:p-7"
                >
                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#F04D02]/10 opacity-0 blur-[45px] transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Center Icon */}
                  <div className="relative flex justify-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] transition-all duration-300 group-hover:border-[#F04D02]/30 group-hover:bg-[#F04D02]/10">
                      <Icon
                        size={17}
                        strokeWidth={1.5}
                        className="text-[#F04D02]"
                      />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="relative mt-8 text-center text-[18px] font-medium leading-[1.2] tracking-[-0.4px] text-white sm:text-[20px]">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-3 text-center text-[11px] leading-[1.8] text-white/35 sm:text-[12px] sm:leading-[1.85]">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
      />
    </section>
  );
}