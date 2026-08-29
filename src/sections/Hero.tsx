"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Globe2,
  Layers3,
  MousePointer2,
  Palette,
  Search,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const rotatingWords = [
  "Digital Experiences",
  "Powerful Brands",
  "Modern Websites",
  "Creative Solutions",
];

const stats = [
  {
    value: 700,
    suffix: "+",
    label: "Projects Delivered",
    icon: Layers3,
  },
  {
    value: 400,
    suffix: "+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    value: 10,
    suffix: "+",
    label: "Countries Reached",
    icon: Globe2,
  },
  {
    value: 5,
    suffix: ".0",
    label: "Client Satisfaction",
    icon: Sparkles,
  },
];

const services = [
  {
    label: "Web Development",
    icon: Code2,
  },
  {
    label: "UI / UX Design",
    icon: MousePointer2,
  },
  {
    label: "Digital Marketing",
    icon: TrendingUp,
  },
  {
    label: "Brand Strategy",
    icon: Palette,
  },
];

const orbitItems = [
  {
    label: "WEB",
    icon: Code2,
    className: "left-[2%] top-[18%] xl:left-[5%]",
    animation: "heroFloat1 6s ease-in-out infinite",
  },
  {
    label: "UI / UX",
    icon: MousePointer2,
    className: "right-[1%] top-[15%] xl:right-[5%]",
    animation: "heroFloat2 7s ease-in-out infinite",
  },
  {
    label: "BRAND",
    icon: Palette,
    className: "right-[0%] bottom-[22%] xl:right-[4%]",
    animation: "heroFloat3 6.5s ease-in-out infinite",
  },
  {
    label: "SEO",
    icon: Search,
    className: "left-[3%] bottom-[18%] xl:left-[7%]",
    animation: "heroFloat4 7s ease-in-out infinite",
  },
];

export default function Hero() {
  const [activeWord, setActiveWord] = useState(0);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveWord((prev) => (prev + 1) % rotatingWords.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const duration = 1800;
    const startTime = performance.now();
    let animationFrame = 0;

    const animateStats = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1,
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats(
        stats.map((stat) =>
          Math.floor(stat.value * easedProgress),
        ),
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateStats);
      } else {
        setAnimatedStats(stats.map((stat) => stat.value));
      }
    };

    animationFrame = requestAnimationFrame(animateStats);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative isolate w-full overflow-hidden border-none bg-[#070A12] text-white outline-none">
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 78% 35%, rgba(99,102,241,0.13), transparent 27%), radial-gradient(circle at 12% 78%, rgba(240,77,2,0.08), transparent 28%), linear-gradient(135deg, #070A12 0%, #0A0F1C 52%, #070A12 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[260px] -top-[300px] h-[620px] w-[620px] rounded-full bg-[#6366F1]/[0.07] blur-[150px] lg:h-[760px] lg:w-[760px]"
        style={{
          animation: "heroGlow 12s ease-in-out infinite",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[320px] -left-[250px] h-[600px] w-[600px] rounded-full bg-[#F04D02]/[0.055] blur-[155px] lg:h-[740px] lg:w-[740px]"
        style={{
          animation: "heroGlow2 14s ease-in-out infinite",
        }}
      />

      {/* =====================================================
          SUBTLE GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(circle at 62% 45%, black 5%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at 62% 45%, black 5%, transparent 72%)",
        }}
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto w-full max-w-[1540px] px-4 pb-8 pt-6 min-[375px]:px-5 sm:px-8 sm:pb-10 sm:pt-8 lg:px-12 lg:pb-9 lg:pt-9 xl:px-16">
        <div className="relative grid items-center lg:min-h-[595px] lg:grid-cols-[53%_47%]">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative z-20 w-full min-w-0 max-w-[850px]">
            {/* EYEBROW */}

            <div className="mb-5 flex items-center gap-2.5 sm:mb-6 sm:gap-3">
              <span className="h-px w-8 bg-[#F04D02] sm:w-11" />

              <span className="text-[8px] font-semibold uppercase tracking-[2.3px] text-[#ff7548] sm:text-[9px] sm:tracking-[3px]">
                Creative Digital Agency
              </span>
            </div>

            {/* MAIN HEADING */}

            <h1 className="max-w-[870px] text-[38px] font-medium leading-[1.06] tracking-[-2.2px] text-white min-[375px]:text-[41px] sm:text-[54px] sm:tracking-[-2.6px] md:text-[64px] lg:text-[71px] lg:tracking-[-3px] xl:text-[80px]">
              <span className="block">
                We build digital
              </span>

              <span className="mt-1 block">
                experiences that{" "}
                <span className="relative inline-block">
                  perform.

                  <span className="absolute -bottom-1 left-0 h-[3px] w-[58%] rounded-full bg-gradient-to-r from-[#F04D02] to-[#ff9d79] shadow-[0_0_16px_rgba(240,77,2,0.3)] sm:h-[5px]" />
                </span>
              </span>

              <span className="mt-3 block h-[1.1em] overflow-hidden sm:mt-4">
                <span
                  key={activeWord}
                  className="inline-block bg-gradient-to-r from-[#F04D02] via-[#ff8059] to-[#a78bfa] bg-clip-text font-semibold text-transparent"
                  style={{
                    animation: "heroWord 0.55s ease both",
                  }}
                >
                  {rotatingWords[activeWord]}
                </span>
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-[610px] text-[12px] leading-[1.8] text-white/45 sm:mt-7 sm:text-[14px] sm:leading-[1.85] md:text-[15px]">
              We help ambitious businesses turn strategy into
              high-performing digital experiences through design,
              technology, branding and growth.
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row">
              {/* START A PROJECT */}

              <Link
                href="/contact-us"
                prefetch={true}
                aria-label="Start a Project - Contact Us"
                className="group relative z-30 inline-flex h-[52px] w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full bg-[#F04D02] px-6 text-[9px] font-semibold uppercase tracking-[1.5px] text-white no-underline shadow-[0_18px_50px_rgba(240,77,2,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_60px_rgba(240,77,2,0.25)] sm:h-[54px] sm:w-auto sm:px-7 sm:text-[10px]"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Start a Project
                </span>

                <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#F04D02] transition-all duration-300 group-hover:bg-[#F04D02] group-hover:text-white">
                  <ArrowRight
                    size={14}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>

              {/* VIEW OUR WORK */}

              <Link
                href="/portfolio"
                prefetch={true}
                aria-label="View Our Work - Portfolio"
                className="group relative z-30 inline-flex h-[52px] w-full cursor-pointer items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-6 text-[9px] font-semibold uppercase tracking-[1.5px] text-white/70 no-underline backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:text-white sm:h-[54px] sm:w-auto sm:px-7 sm:text-[10px]"
              >
                <span className="relative z-10">
                  View Our Work
                </span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.6}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            {/* =================================================
                TRUST
            ================================================== */}

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4 sm:mt-9 sm:gap-7">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex -space-x-2">
                  {["G", "M", "A", "C"].map((letter, index) => (
                    <span
                      key={letter}
                      className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#080c17] bg-gradient-to-br from-[#30384c] to-[#111621] text-[8px] font-semibold text-white/70"
                      style={{
                        zIndex: 10 - index,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>

                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.8px] text-white/65 sm:text-[9px]">
                    400+ Clients
                  </p>

                  <p className="mt-0.5 text-[7px] text-white/25 sm:text-[8px]">
                    Across multiple industries
                  </p>
                </div>
              </div>

              <span className="hidden h-7 w-px bg-white/10 sm:block" />

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-white">
                    5.0
                  </span>

                  <span className="text-[9px] tracking-[1.5px] text-[#F04D02]">
                    ★★★★★
                  </span>
                </div>

                <p className="mt-0.5 text-[7px] text-white/25 sm:text-[8px]">
                  Client satisfaction
                </p>
              </div>

              <span className="hidden h-7 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#6366F1]/20 bg-[#6366F1]/[0.06]">
                  <Sparkles
                    size={12}
                    strokeWidth={1.5}
                    className="text-[#a78bfa]"
                  />
                </span>

                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.8px] text-white/65 sm:text-[9px]">
                    Results Driven
                  </p>

                  <p className="mt-0.5 text-[7px] text-white/25 sm:text-[8px]">
                    Strategy before execution
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                SERVICES
            ================================================== */}

            <div className="mt-8 hidden flex-wrap gap-x-6 gap-y-3 lg:flex">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.label}
                    className="group flex items-center gap-2"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#F04D02]/15 bg-[#F04D02]/[0.05] transition-all duration-300 group-hover:border-[#F04D02]/30 group-hover:bg-[#F04D02]/[0.1]">
                      <Icon
                        size={9}
                        strokeWidth={1.8}
                        className="text-[#F04D02]"
                      />
                    </span>

                    <span className="text-[8px] font-medium uppercase tracking-[1.1px] text-white/25 transition-colors duration-300 group-hover:text-white/55">
                      {service.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =================================================
              DESKTOP VISUAL
          ================================================== */}

          <div className="relative hidden h-[600px] min-w-0 lg:block">
            <div
              className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6366F1]/[0.035] blur-[55px] xl:h-[540px] xl:w-[540px]"
              style={{
                animation: "heroVisualPulse 8s ease-in-out infinite",
              }}
            />

            <div
              className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045] xl:h-[535px] xl:w-[535px]"
              style={{
                animation: "heroOrbit 30s linear infinite",
              }}
            />

            <div
              className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6366F1]/[0.075] xl:h-[430px] xl:w-[430px]"
              style={{
                animation: "heroOrbitReverse 24s linear infinite",
              }}
            />

            <div
              className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F04D02]/[0.08] xl:h-[335px] xl:w-[335px]"
              style={{
                animation: "heroOrbit 20s linear infinite",
              }}
            />

            <div className="absolute left-[18%] top-[39%] h-px w-[210px] rotate-[17deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent xl:w-[255px]" />

            <div className="absolute right-[10%] top-[39%] h-px w-[210px] rotate-[-19deg] bg-gradient-to-r from-transparent via-[#6366F1]/[0.12] to-transparent xl:w-[250px]" />

            <div className="absolute left-[17%] top-[61%] h-px w-[210px] rotate-[-17deg] bg-gradient-to-r from-transparent via-[#F04D02]/[0.12] to-transparent xl:w-[255px]" />

            <div className="absolute right-[12%] top-[61%] h-px w-[210px] rotate-[17deg] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent xl:w-[245px]" />

            <div
              className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(240,77,2,0.14),rgba(99,102,241,0.07),transparent_70%)] blur-[28px] xl:h-[275px] xl:w-[275px]"
              style={{
                animation: "heroCenterGlow 6s ease-in-out infinite",
              }}
            />

            <div
              className="absolute left-1/2 top-1/2 flex h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.015] shadow-[0_0_90px_rgba(99,102,241,0.07)] backdrop-blur-[3px] xl:h-[220px] xl:w-[220px]"
              style={{
                animation: "heroCenterFloat 7s ease-in-out infinite",
              }}
            >
              <div className="absolute inset-[15px] rounded-full border border-white/[0.05] xl:inset-[18px]" />

              <div
                className="absolute inset-[25px] rounded-full border border-dashed border-[#F04D02]/[0.1] xl:inset-[29px]"
                style={{
                  animation: "heroOrbit 17s linear infinite",
                }}
              />

              <div className="relative flex h-[118px] w-[118px] flex-col items-center justify-center overflow-hidden rounded-full border border-white/[0.1] bg-[#090e1b]/95 shadow-[0_0_60px_rgba(240,77,2,0.08)] xl:h-[138px] xl:w-[138px]">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,125,83,0.14),transparent_55%)]" />

                <Sparkles
                  size={15}
                  strokeWidth={1.5}
                  className="relative mb-2 text-[#F04D02]"
                />

                <span className="relative text-[6px] uppercase tracking-[2.5px] text-white/25">
                  Digital Studio
                </span>

                <span className="relative mt-1 text-[21px] font-semibold tracking-[-1px] text-white xl:text-[24px]">
                  GENMAX
                </span>

                <span className="relative mt-1 text-[5px] uppercase tracking-[1.7px] text-[#a78bfa] xl:text-[6px] xl:tracking-[2px]">
                  Create • Build • Grow
                </span>
              </div>
            </div>

            {orbitItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`absolute ${item.className} flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] xl:px-3 xl:py-2`}
                  style={{
                    animation: item.animation,
                  }}
                >
                  <Icon
                    size={10}
                    strokeWidth={1.5}
                    className="text-[#F04D02]"
                  />

                  <span className="text-[6px] font-semibold uppercase tracking-[1.5px] text-white/35 xl:text-[7px]">
                    {item.label}
                  </span>
                </div>
              );
            })}

            <span
              className="absolute left-[17%] top-[19%] h-1.5 w-1.5 rounded-full bg-[#6366F1] shadow-[0_0_18px_#6366F1] xl:left-[20%] xl:h-2 xl:w-2"
              style={{
                animation: "heroDot 3.5s ease-in-out infinite",
              }}
            />

            <span
              className="absolute right-[9%] top-[41%] h-1.5 w-1.5 rounded-full bg-[#F04D02] shadow-[0_0_17px_#F04D02]"
              style={{
                animation: "heroDot 4s ease-in-out infinite 0.4s",
              }}
            />

            <span
              className="absolute bottom-[17%] right-[25%] h-1.5 w-1.5 rounded-full bg-[#0EA5E9] shadow-[0_0_18px_#0EA5E9] xl:h-2 xl:w-2"
              style={{
                animation: "heroDot 4.5s ease-in-out infinite 0.8s",
              }}
            />

            <div
              className="absolute bottom-[8%] right-[6%] flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 backdrop-blur-xl xl:right-[8%] xl:px-3 xl:py-2"
              style={{
                animation: "heroFloat2 8s ease-in-out infinite",
              }}
            >
              <TrendingUp
                size={10}
                strokeWidth={1.5}
                className="text-[#a78bfa]"
              />

              <span className="text-[6px] font-medium uppercase tracking-[1.3px] text-white/25 xl:text-[7px]">
                Built to perform
              </span>
            </div>
          </div>

          {/* =================================================
              MOBILE VISUAL
          ================================================== */}

          <div className="relative mt-11 flex h-[275px] w-full items-center justify-center sm:mt-13 sm:h-[330px] lg:hidden">
            <div
              className="absolute h-[225px] w-[225px] rounded-full bg-[#6366F1]/[0.06] blur-[75px] sm:h-[290px] sm:w-[290px]"
              style={{
                animation: "heroMobileGlow 8s ease-in-out infinite",
              }}
            />

            <div
              className="absolute h-[235px] w-[235px] rounded-full border border-white/[0.045] sm:h-[290px] sm:w-[290px]"
              style={{
                animation: "heroOrbitMobile 28s linear infinite",
              }}
            />

            <div
              className="absolute h-[190px] w-[190px] rounded-full border border-[#F04D02]/[0.075] sm:h-[235px] sm:w-[235px]"
              style={{
                animation:
                  "heroOrbitMobileReverse 21s linear infinite",
              }}
            />

            <div
              className="absolute h-[145px] w-[145px] rounded-full border border-white/[0.055] sm:h-[180px] sm:w-[180px]"
              style={{
                animation: "heroOrbitMobile 17s linear infinite",
              }}
            />

            <div
              className="relative flex h-[132px] w-[132px] flex-col items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.025] shadow-[0_0_70px_rgba(99,102,241,0.1)] backdrop-blur-xl sm:h-[155px] sm:w-[155px]"
              style={{
                animation:
                  "heroCenterFloatMobile 7s ease-in-out infinite",
              }}
            >
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,125,83,0.14),transparent_55%)]" />

              <Sparkles
                size={15}
                strokeWidth={1.5}
                className="relative mb-2 text-[#F04D02]"
              />

              <span className="relative text-[6px] uppercase tracking-[2.3px] text-white/25 sm:text-[7px]">
                Digital Studio
              </span>

              <span className="relative mt-1 text-[21px] font-semibold tracking-[-0.5px] sm:text-[23px]">
                GENMAX
              </span>

              <span className="relative mt-1 text-[5px] uppercase tracking-[1.7px] text-[#a78bfa] sm:text-[6px]">
                Create • Build • Grow
              </span>
            </div>

            <div
              className="absolute left-0 top-[17%] rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 backdrop-blur-xl sm:left-[4%] sm:px-3 sm:py-2"
              style={{
                animation: "heroFloat1 6s ease-in-out infinite",
              }}
            >
              <span className="text-[6px] font-semibold tracking-[1.4px] text-white/35 sm:text-[7px]">
                WEB
              </span>
            </div>

            <div
              className="absolute right-0 top-[15%] rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 backdrop-blur-xl sm:right-[4%] sm:px-3 sm:py-2"
              style={{
                animation: "heroFloat2 7s ease-in-out infinite",
              }}
            >
              <span className="text-[6px] font-semibold tracking-[1.4px] text-white/35 sm:text-[7px]">
                UI / UX
              </span>
            </div>

            <div
              className="absolute bottom-[13%] left-[3%] rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 backdrop-blur-xl sm:left-[7%] sm:px-3 sm:py-2"
              style={{
                animation: "heroFloat3 6.5s ease-in-out infinite",
              }}
            >
              <span className="text-[6px] font-semibold tracking-[1.4px] text-white/35 sm:text-[7px]">
                BRAND
              </span>
            </div>

            <div
              className="absolute bottom-[11%] right-[3%] rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 backdrop-blur-xl sm:right-[7%] sm:px-3 sm:py-2"
              style={{
                animation: "heroFloat4 7s ease-in-out infinite",
              }}
            >
              <span className="text-[6px] font-semibold tracking-[1.4px] text-white/35 sm:text-[7px]">
                SEO
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            STATS / PROOF BAR
        ====================================================== */}

        <div className="relative z-30 mt-4 sm:mt-5 lg:mt-1">
          <div className="overflow-hidden rounded-[16px] bg-transparent sm:rounded-[18px]">
            <div className="grid grid-cols-2 gap-0 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className={`group relative flex min-h-[92px] origin-center items-center justify-center gap-2.5 overflow-hidden bg-white/[0.025] px-3 py-4 transition-all duration-500 hover:scale-y-[1.08] hover:bg-white/[0.04] sm:min-h-[100px] sm:gap-3 sm:px-4 ${
                      index < 2
                        ? "border-b border-white/[0.06] lg:border-b-0"
                        : ""
                    } ${
                      index % 2 === 0
                        ? "border-r border-white/[0.06]"
                        : ""
                    } ${
                      index === 1 || index === 2
                        ? "lg:border-r lg:border-white/[0.06]"
                        : ""
                    }`}
                  >
                    <span className="pointer-events-none absolute -bottom-8 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-[#F04D02]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] border border-white/[0.07] bg-white/[0.025] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#F04D02]/20 sm:h-9 sm:w-9 sm:rounded-[10px]">
                      <Icon
                        size={14}
                        strokeWidth={1.4}
                        className="text-[#F04D02] sm:h-4 sm:w-4"
                      />
                    </div>

                    <div className="relative min-w-0">
                      <p className="text-[18px] font-semibold leading-none text-white sm:text-[21px]">
                        {animatedStats[index]}
                        {stat.suffix}
                      </p>

                      <p className="mt-1.5 truncate text-[7px] font-medium uppercase tracking-[0.8px] text-white/25 sm:text-[8px] sm:tracking-[1px]">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes heroWord {
          0% {
            opacity: 0;
            transform: translateY(14px);
            filter: blur(5px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes heroFloat1 {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -8px, 0);
          }
        }

        @keyframes heroFloat2 {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(5px, -7px, 0);
          }
        }

        @keyframes heroFloat3 {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(-5px, 7px, 0);
          }
        }

        @keyframes heroFloat4 {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(5px, 6px, 0);
          }
        }

        @keyframes heroOrbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes heroOrbitReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes heroOrbitMobile {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes heroOrbitMobileReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes heroVisualPulse {
          0%,
          100% {
            opacity: 0.65;
            transform: translate(-50%, -50%) scale(0.97);
          }

          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.04);
          }
        }

        @keyframes heroCenterGlow {
          0%,
          100% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(0.95);
          }

          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        @keyframes heroCenterFloat {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0);
          }

          50% {
            transform: translate(-50%, -50%) translateY(-6px);
          }
        }

        @keyframes heroCenterFloatMobile {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes heroMobileGlow {
          0%,
          100% {
            opacity: 0.65;
            transform: scale(0.96);
          }

          50% {
            opacity: 1;
            transform: scale(1.04);
          }
        }

        @keyframes heroGlow {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.75;
          }

          50% {
            transform: translate3d(-22px, 18px, 0) scale(1.05);
            opacity: 1;
          }
        }

        @keyframes heroGlow2 {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.7;
          }

          50% {
            transform: translate3d(22px, -18px, 0) scale(1.06);
            opacity: 1;
          }
        }

        @keyframes heroDot {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(0.85);
          }

          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @media (max-width: 374px) {
          .hero-small-screen {
            font-size: 34px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}