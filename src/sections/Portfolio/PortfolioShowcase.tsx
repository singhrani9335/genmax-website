"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function PortfolioShowcase() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isResetting = useRef(false);

  // =====================================================
  // HOME PAGE — SHOW ONLY 4 PROJECTS
  // =====================================================
  const homeProjects = projects.slice(0, 4);

  // Duplicate only these 4 projects for infinite slider
  const loopProjects =
    homeProjects.length > 0
      ? [...homeProjects, ...homeProjects, ...homeProjects]
      : [];

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider || homeProjects.length === 0) return;

    const getCardWidth = () => {
      const card = slider.querySelector(
        "[data-project-card]"
      ) as HTMLElement | null;

      return card?.offsetWidth ?? 0;
    };

    const getSetWidth = () => {
      const cardWidth = getCardWidth();

      if (!cardWidth) return 0;

      const gap = 24;

      return homeProjects.length * (cardWidth + gap);
    };

    const setInitialPosition = () => {
      const setWidth = getSetWidth();

      if (!setWidth) return;

      slider.style.scrollBehavior = "auto";
      slider.scrollLeft = setWidth;
      slider.style.scrollBehavior = "";
    };

    const frame = requestAnimationFrame(setInitialPosition);

    const handleScroll = () => {
      if (isResetting.current) return;

      const setWidth = getSetWidth();

      if (!setWidth) return;

      // Move back to middle set
      if (slider.scrollLeft >= setWidth * 2) {
        isResetting.current = true;

        slider.style.scrollBehavior = "auto";
        slider.scrollLeft -= setWidth;

        requestAnimationFrame(() => {
          slider.style.scrollBehavior = "";
          isResetting.current = false;
        });
      }

      // Move forward to middle set
      if (slider.scrollLeft <= 0) {
        isResetting.current = true;

        slider.style.scrollBehavior = "auto";
        slider.scrollLeft += setWidth;

        requestAnimationFrame(() => {
          slider.style.scrollBehavior = "";
          isResetting.current = false;
        });
      }
    };

    slider.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", setInitialPosition);

    return () => {
      cancelAnimationFrame(frame);

      slider.removeEventListener("scroll", handleScroll);

      window.removeEventListener("resize", setInitialPosition);
    };
  }, [homeProjects.length]);

  const scrollSlider = (direction: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider || isResetting.current) return;

    const card = slider.querySelector(
      "[data-project-card]"
    ) as HTMLElement | null;

    if (!card) return;

    const gap = 24;
    const scrollAmount = card.offsetWidth + gap;

    slider.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  if (!homeProjects.length) return null;

  return (
    <section
      id="portfolio"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND DETAILS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[300px] w-[300px] rounded-full bg-[#F04D02]/[0.025] blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-[#17316a]/[0.025] blur-[120px]"
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1500px] pl-5 pr-0 sm:pl-7 md:pl-10 lg:pl-16 xl:pl-20">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[330px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[350px_minmax(0,1fr)] xl:gap-16">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative z-20 pr-5 sm:pr-7 lg:pr-0">
            {/* Heading */}

            <h2 className="max-w-[330px] text-[36px] font-normal leading-[1.05] tracking-[-1.5px] text-[#142d66] sm:text-[43px] md:text-[50px] lg:text-[54px] xl:text-[58px]">
              A Glimpse at
              <br />

              <span className="relative inline-block">
                Our Work

                <span className="absolute -bottom-2 left-0 h-[2px] w-12 bg-[#F04D02] sm:w-14" />
              </span>
            </h2>

            {/* Description */}

            <p className="mt-6 max-w-[330px] text-[13px] leading-[1.8] text-[#5d6675] sm:mt-7 sm:text-[14px] md:text-[15px]">
              Explore some of the digital experiences, websites, and creative
              solutions we have built for ambitious brands and growing
              businesses.
            </p>

            {/* View All Projects */}

            <Link
              href="/portfolio"
              className="group mt-8 inline-flex min-w-[205px] items-center justify-center gap-3 rounded-br-[24px] border border-[#F04D02] bg-white px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[1px] text-[#171717] transition-all duration-300 hover:border-[#FE8302] hover:bg-gradient-to-r hover:from-[#F04D02] hover:to-[#FE8302] hover:text-white sm:mt-9 sm:min-w-[225px] sm:px-7 sm:py-4"
            >
              View All Projects

              <MoveUpRight
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            {/* =================================================
                SLIDER CONTROLS
            ================================================== */}

            <div className="mt-7 flex items-center gap-3 sm:mt-8 sm:gap-4">
              <button
                type="button"
                aria-label="Previous projects"
                onClick={() => scrollSlider("left")}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#dfe3ea] bg-white text-[#17316a] shadow-sm transition-all duration-300 hover:border-[#F04D02] hover:bg-[#F04D02] hover:text-white"
              >
                <ArrowLeft
                  size={20}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:-translate-x-0.5"
                />
              </button>

              <button
                type="button"
                aria-label="Next projects"
                onClick={() => scrollSlider("right")}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#dfe3ea] bg-white text-[#17316a] shadow-sm transition-all duration-300 hover:border-[#F04D02] hover:bg-[#F04D02] hover:text-white"
              >
                <ArrowRight
                  size={20}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </button>
            </div>
          </div>

          {/* =================================================
              RIGHT SLIDER
          ================================================== */}

          <div className="relative min-w-0 w-full">
            {/* Dot Decoration */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-10 -top-12 z-0 hidden md:block"
            >
              <div
                className="h-[170px] w-[170px] opacity-60"
                style={{
                  backgroundImage:
                    "radial-gradient(#8ba1ce 1.6px, transparent 1.6px)",
                  backgroundSize: "9px 9px",
                }}
              />
            </div>

            {/* Orange Accent */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-5 bottom-8 z-0 h-24 w-24 rounded-full border border-[#F04D02]/10"
            />

            {/* =================================================
                SLIDER
            ================================================== */}

            <div className="relative z-10 w-full overflow-hidden">
              <div
                ref={sliderRef}
                className="flex w-full gap-6 overflow-x-hidden scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {loopProjects.map((project, index) => (
                  <div
                    key={`${project.id}-${index}`}
                    data-project-card
                    className="w-[82vw] min-w-[82vw] shrink-0 sm:w-[62vw] sm:min-w-[62vw] md:w-[350px] md:min-w-[350px] lg:w-[350px] lg:min-w-[350px] xl:w-[370px] xl:min-w-[370px]"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Accent */}

            <div
              aria-hidden="true"
              className="mt-2 h-px w-full bg-gradient-to-r from-[#F04D02]/30 via-[#dfe3ea] to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}