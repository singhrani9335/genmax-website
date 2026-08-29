"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Phone,
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
      {/* Background */}
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

      {/* Grid */}
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

      {/* Container */}
      <div className="relative mx-auto w-full max-w-[1480px] px-5 sm:px-7 md:px-10 lg:px-14 xl:px-20">
        {/* Main Grid */}
        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-[44%_56%] lg:gap-0">
          {/* Left Content */}
          <div className="relative z-20 w-full min-w-0 lg:pr-10 xl:pr-16">
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

            <p className="mt-6 max-w-[600px] text-[13px] leading-[1.85] text-white/45 sm:mt-7 sm:text-[15px] sm:leading-[1.9] xl:text-[16px]">
              GenMax IT Solution delivers IT solutions and digital experiences
              that help businesses compete, connect and grow. We combine
              strategy, creativity and technology to turn complex ideas into
              meaningful digital experiences.
            </p>

            {/* Highlights */}
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

            {/* CTA */}
            <div className="mt-9 flex flex-col items-start sm:mt-10">
              <Link
                href="/about-us"
                aria-label="Discover More About GenMax"
                className="group inline-flex h-[50px] w-fit items-center gap-3 rounded-full bg-[#F04D02] px-6 text-[9px] font-semibold uppercase tracking-[1.4px] text-white shadow-[0_14px_40px_rgba(240,77,2,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:h-[53px] sm:px-7 sm:text-[10px]"
              >
                <span className="text-white transition-colors duration-300 group-hover:text-black">
                  Discover More
                </span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-300 group-hover:bg-black/10 group-hover:text-black">
                  <ArrowRight
                    size={13}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative z-10 w-full min-w-0 lg:-mr-6 xl:-mr-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-14 hidden select-none text-[110px] font-semibold leading-none tracking-[-11px] text-white/[0.025] xl:block"
            >
              10
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 z-0 h-[90px] w-[90px] rounded-bl-[38px] border-b-2 border-l-2 border-[#F04D02]/65 sm:-bottom-5 sm:-left-5 sm:h-[115px] sm:w-[115px] sm:rounded-bl-[48px] sm:border-b-[3px] sm:border-l-[3px]"
            />

            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 z-0 h-[65px] w-[65px] rounded-tr-[25px] border-r-2 border-t-2 border-[#6C63FF]/30 sm:-right-4 sm:-top-4 sm:h-[90px] sm:w-[90px] sm:rounded-tr-[32px]"
            />

            {/* Image */}
            <div className="relative z-10 overflow-hidden rounded-[5px] border border-white/[0.08] bg-[#10141D] shadow-[0_30px_90px_rgba(0,0,0,0.32)]">
              <div className="relative h-[250px] min-[400px]:h-[275px] sm:h-[340px] md:h-[390px] lg:h-[420px] xl:h-[460px]">
                <img
                  src="/images/about.webp"
                  alt="GenMax IT Solution digital services"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/40 via-[#05070B]/5 to-transparent" />
              </div>
            </div>

            {/* Let's Talk */}
            <a
              href="tel:+919938307637"
              aria-label="Call GenMax IT Solution at +91 99383 07637"
              className="group relative z-20 flex min-h-[82px] w-full items-center gap-3 overflow-hidden rounded-b-[6px] border border-white/[0.06] border-t-0 bg-[#11151E] px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition-all duration-500 hover:bg-[#F04D02] sm:min-h-[96px] sm:gap-5 sm:px-7 md:px-8"
            >
              <span className="pointer-events-none absolute -right-14 top-1/2 h-[140px] w-[140px] -translate-y-1/2 rounded-full bg-white/15 opacity-0 blur-[45px] transition-opacity duration-500 group-hover:opacity-100" />

              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />

              <span className="relative z-10 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-[#F04D02] text-white shadow-[0_8px_22px_rgba(240,77,2,0.22)] transition-all duration-300 group-hover:bg-white group-hover:text-[#F04D02] sm:h-[53px] sm:w-[53px]">
                <Phone size={18} strokeWidth={1.7} />
              </span>

              <span className="relative z-10 min-w-0 flex-1">
                <span className="block text-[7px] font-semibold uppercase tracking-[2px] text-[#FF6A20] transition-colors duration-300 group-hover:text-white/75 sm:text-[8px] sm:tracking-[2.4px]">
                  Let&apos;s Talk
                </span>

                <span className="mt-1 block text-[10px] font-semibold uppercase leading-[1.45] tracking-[0.05px] text-white/85 transition-colors duration-300 group-hover:text-white sm:text-[14px] md:text-[15px] lg:text-[16px]">
                  Your next big idea deserves a great companion.
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}