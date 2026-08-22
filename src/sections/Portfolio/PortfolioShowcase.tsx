"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function PortfolioShowcase() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isResetting = useRef(false);

  const loopProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider || projects.length === 0) return;

    const getCardWidth = () => {
      const card = slider.querySelector(
        "[data-project-card]"
      ) as HTMLElement | null;

      if (!card) return 0;

      return card.offsetWidth;
    };

    const setInitialPosition = () => {
      const cardWidth = getCardWidth();

      if (!cardWidth) return;

      const gap = 24;
      const singleSetWidth =
        projects.length * (cardWidth + gap);

      slider.scrollLeft = singleSetWidth;
    };

    const frame = requestAnimationFrame(setInitialPosition);

    const handleScroll = () => {
      if (isResetting.current) return;

      const cardWidth = getCardWidth();

      if (!cardWidth) return;

      const gap = 24;
      const singleSetWidth =
        projects.length * (cardWidth + gap);

      if (slider.scrollLeft >= singleSetWidth * 2) {
        isResetting.current = true;

        slider.style.scrollBehavior = "auto";
        slider.scrollLeft -= singleSetWidth;

        requestAnimationFrame(() => {
          slider.style.scrollBehavior = "";
          isResetting.current = false;
        });
      }

      if (slider.scrollLeft <= 0) {
        isResetting.current = true;

        slider.style.scrollBehavior = "auto";
        slider.scrollLeft += singleSetWidth;

        requestAnimationFrame(() => {
          slider.style.scrollBehavior = "";
          isResetting.current = false;
        });
      }
    };

    slider.addEventListener("scroll", handleScroll);

    return () => {
      cancelAnimationFrame(frame);
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollSlider = (
    direction: "left" | "right"
  ) => {
    const slider = sliderRef.current;

    if (!slider || isResetting.current) return;

    const card = slider.querySelector(
      "[data-project-card]"
    ) as HTMLElement | null;

    if (!card) return;

    const gap = 24;
    const scrollAmount = card.offsetWidth + gap;

    slider.scrollBy({
      left:
        direction === "right"
          ? scrollAmount
          : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">

      <div className="mx-auto w-full max-w-[1500px] pl-5 pr-0 sm:pl-7 md:pl-10 lg:pl-16">

        <div className="grid w-full items-center gap-10 lg:grid-cols-[330px_minmax(0,1fr)] lg:gap-12">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10 pr-5 sm:pr-6 lg:pr-0">

            <h2 className="max-w-[320px] text-[34px] font-normal leading-[1.08] tracking-[-1.2px] text-[#142d66] sm:text-[40px] md:text-[50px] lg:text-[54px]">
              A Glimpse at
              <br />
              Our Work
            </h2>

            {/* VIEW ALL PROJECT BUTTON */}
            <Link
              href="/portfolio"
              className="mt-8 inline-flex min-w-[210px] items-center justify-center rounded-br-[24px] border border-[#F04D02] bg-white px-6 py-4 text-[12px] font-medium uppercase tracking-[0.8px] text-black transition-all duration-300 ease-in-out hover:border-[#FE8302] hover:bg-gradient-to-r hover:from-[#F04D02] hover:via-[#F96803] hover:to-[#FE8302] hover:!text-white sm:mt-10 sm:min-w-[230px] sm:px-7 sm:py-5 sm:text-[13px] md:min-w-[250px] md:px-8"
            >
              View All Project
            </Link>

            {/* ARROWS */}
            <div className="mt-6 flex items-center gap-4 sm:mt-7 sm:gap-5">

              <button
                type="button"
                aria-label="Previous projects"
                onClick={() =>
                  scrollSlider("left")
                }
                className="flex h-10 w-10 items-center justify-center text-[#17316a] outline-none focus:outline-none focus-visible:outline-none sm:h-11 sm:w-11"
              >
                <ArrowLeft
                  size={36}
                  strokeWidth={1.2}
                  className="sm:h-[42px] sm:w-[42px]"
                />
              </button>

              <button
                type="button"
                aria-label="Next projects"
                onClick={() =>
                  scrollSlider("right")
                }
                className="flex h-10 w-10 items-center justify-center text-[#17316a] outline-none focus:outline-none focus-visible:outline-none sm:h-11 sm:w-11"
              >
                <ArrowRight
                  size={36}
                  strokeWidth={1.2}
                  className="sm:h-[42px] sm:w-[42px]"
                />
              </button>

            </div>
          </div>

          {/* ================= RIGHT SLIDER ================= */}
          <div className="relative min-w-0 w-full">

            {/* DOT DECORATION */}
            <div className="pointer-events-none absolute -left-10 -top-10 z-0 hidden md:block">

              <div
                className="h-[165px] w-[165px] opacity-70"
                style={{
                  backgroundImage:
                    "radial-gradient(#8ba1ce 1.8px, transparent 1.8px)",
                  backgroundSize: "9px 9px",
                }}
              />

            </div>

            {/* SLIDER */}
            <div className="relative z-10 w-full overflow-hidden">

              <div
                ref={sliderRef}
                className="flex w-full gap-6 overflow-x-hidden scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >

                {loopProjects.map(
                  (project, index) => (
                    <div
                      key={`${project.id}-${index}`}
                      data-project-card
                      className="w-[82vw] min-w-[82vw] shrink-0 sm:w-[62vw] sm:min-w-[62vw] md:w-[350px] md:min-w-[350px] lg:w-[350px] lg:min-w-[350px] xl:w-[370px] xl:min-w-[370px]"
                    >
                      <ProjectCard
                        project={project}
                      />
                    </div>
                  )
                )}

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}