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

    const setInitialPosition = () => {
      const card = slider.querySelector(
        "[data-project-card]"
      ) as HTMLElement | null;

      if (!card) return;

      const gap = 24;
      const singleSetWidth = projects.length * (card.offsetWidth + gap);

      slider.scrollLeft = singleSetWidth;
    };

    requestAnimationFrame(setInitialPosition);

    const handleScroll = () => {
      if (isResetting.current) return;

      const card = slider.querySelector(
        "[data-project-card]"
      ) as HTMLElement | null;

      if (!card) return;

      const gap = 24;
      const singleSetWidth = projects.length * (card.offsetWidth + gap);

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
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollSlider = (direction: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider) return;

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

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1500px] pl-6 pr-0 md:pl-10 md:pr-0 lg:pl-16 lg:pr-0">
        <div className="grid items-center gap-10 lg:grid-cols-[330px_minmax(0,1fr)] lg:gap-12">

          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <h2 className="max-w-[320px] text-[42px] font-normal leading-[1.05] tracking-[-1.5px] text-[#142d66] md:text-[50px] lg:text-[54px]">
              A Glimpse at
              <br />
              Our Work
            </h2>

            {/* VIEW ALL PROJECT BUTTON */}
            <Link
              href="/portfolio"
              className="mt-10 inline-flex min-w-[250px] items-center justify-center rounded-br-[28px] border border-[#F04D02] bg-white px-8 py-5 text-[13px] font-medium uppercase tracking-[1px] text-black transition-all duration-300 ease-in-out hover:border-[#FE8302] hover:bg-gradient-to-r hover:from-[#F04D02] hover:via-[#F96803] hover:to-[#FE8302] hover:!text-white"
            >
              View All Project
            </Link>

            {/* ARROWS */}
            <div className="mt-7 flex items-center gap-5">
              <button
                type="button"
                aria-label="Previous projects"
                onClick={() => scrollSlider("left")}
                className="flex h-11 w-11 items-center justify-center text-[#17316a] outline-none focus:outline-none focus-visible:outline-none"
              >
                <ArrowLeft size={42} strokeWidth={1.2} />
              </button>

              <button
                type="button"
                aria-label="Next projects"
                onClick={() => scrollSlider("right")}
                className="flex h-11 w-11 items-center justify-center text-[#17316a] outline-none focus:outline-none focus-visible:outline-none"
              >
                <ArrowRight size={42} strokeWidth={1.2} />
              </button>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="relative min-w-0">

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
            <div className="relative z-10 overflow-hidden">
              <div
                ref={sliderRef}
                className="flex gap-6 overflow-x-hidden scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {loopProjects.map((project, index) => (
                  <div
                    key={`${project.id}-${index}`}
                    data-project-card
                    className="w-[78vw] min-w-[78vw] shrink-0 sm:w-[56vw] sm:min-w-[56vw] md:w-[350px] md:min-w-[350px] lg:w-[350px] lg:min-w-[350px] xl:w-[370px] xl:min-w-[370px]"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}