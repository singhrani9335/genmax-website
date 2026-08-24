"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
} from "lucide-react";

import { caseStudies } from "@/data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

const categories = [
  "E-Commerce",
  "Web Development",
  "Digital Marketing",
  "SEO",
  "Branding",
];

export default function CaseStudiesShowcase() {
  const [activeCategory, setActiveCategory] =
    useState("E-Commerce");

  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject =
    caseStudies[activeIndex] || caseStudies[0];

  /* ================= AUTO SLIDE ================= */

  useEffect(() => {
    if (!caseStudies.length) return;

    const interval = setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (
          (currentIndex + 1) % caseStudies.length
        );
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* ================= CATEGORY ================= */

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);

    const index = caseStudies.findIndex(
      (project) => project.category === category
    );

    if (index !== -1) {
      setActiveIndex(index);
    }
  };

  /* ================= PREVIOUS ================= */

  const handlePrevious = () => {
    setActiveIndex((currentIndex) => {
      return (
        (currentIndex - 1 + caseStudies.length) %
        caseStudies.length
      );
    });
  };

  /* ================= NEXT ================= */

  const handleNext = () => {
    setActiveIndex((currentIndex) => {
      return (
        (currentIndex + 1) % caseStudies.length
      );
    });
  };

  if (!caseStudies.length) return null;

  return (
    <section
      id="case-studies"
      className="relative w-full overflow-hidden bg-[#17110F]"
    >
      {/* ================= BACKGROUND ================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 82% 48%, rgba(240,77,2,0.28), transparent 34%), radial-gradient(circle at 8% 90%, rgba(254,131,2,0.10), transparent 30%), linear-gradient(135deg, #17110F 0%, #201714 48%, #2b1711 100%)",
        }}
      />

      {/* Subtle grid */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Orange glow */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[#F04D02]/10 blur-[120px] sm:h-[520px] sm:w-[520px]"
      />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 xl:px-20">

        {/* ================= TOP HEADER ================= */}

        <div className="flex flex-col gap-8">

          {/* Eyebrow */}

          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#F04D02] sm:w-11" />

            <span className="text-[9px] font-semibold uppercase tracking-[2.7px] text-[#FF7040] sm:text-[10px]">
              Selected Work
            </span>
          </div>

          {/* Category Navigation */}

          <div className="flex w-full flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
            {categories.map((category) => {
              const isActive =
                category === activeCategory;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    handleCategoryClick(category)
                  }
                  className={`group relative px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-[0.8px] transition-all duration-300 sm:px-4 sm:text-[11px] md:px-5 md:text-[12px] ${
                    isActive
                      ? "text-white"
                      : "text-white/45 hover:text-white/90"
                  }`}
                >
                  {category}

                  <span
                    className={`absolute bottom-0 left-3 h-[2px] bg-[#F04D02] transition-all duration-300 sm:left-4 md:left-5 ${
                      isActive
                        ? "w-[calc(100%-24px)] opacity-100 sm:w-[calc(100%-32px)] md:w-[calc(100%-40px)]"
                        : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= TITLE AREA ================= */}

        <div className="mt-10 flex flex-col justify-between gap-6 sm:mt-12 md:mt-14 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-[650px] text-[30px] font-normal leading-[1.08] tracking-[-1.2px] text-white sm:text-[36px] md:text-[42px] lg:text-[48px]">
              Explore Our
              <br className="sm:hidden" />{" "}
              <span className="text-[#F04D02]">
                Case Studies
              </span>
            </h2>

            <p className="mt-4 max-w-[580px] text-[12px] leading-[1.8] text-white/45 sm:text-[13px] md:text-[14px]">
              Discover how we combine strategy, creativity,
              technology, and digital expertise to create
              meaningful results for growing brands.
            </p>
          </div>

          {/* ================= VIEW ALL BUTTON ================= */}

          <Link
            href="/case-studies"
            className="group inline-flex w-fit items-center gap-3 rounded-br-[23px] border border-white/20 bg-white/[0.06] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[1px] !text-white backdrop-blur-sm transition-all duration-300 hover:border-[#F04D02] hover:bg-[#F04D02] hover:!text-white sm:px-7 sm:py-4 sm:text-[11px]"
          >
            <span className="!text-white group-hover:!text-white">
              View All Case Studies
            </span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* ================= CASE STUDY SHOWCASE ================= */}

        <div className="relative mt-10 sm:mt-12 md:mt-16">

          {/* Vertical Company Label */}

          <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 xl:block">
            <div className="flex items-center gap-4">
              <span className="h-12 w-px bg-gradient-to-b from-transparent via-[#F04D02] to-transparent" />

              <span className="text-[10px] font-semibold uppercase tracking-[3px] text-white/25 [writing-mode:vertical-rl] rotate-180">
                GenMax IT Solution
              </span>
            </div>
          </div>

          {/* Main Image */}

          <div className="mx-auto w-full max-w-[820px] px-0 md:px-8 lg:px-14 xl:px-20">
            <div className="relative">

              <div className="absolute -inset-3 -z-10 border border-white/[0.06] sm:-inset-5" />

              <CaseStudyCard
                caseStudy={activeProject}
              />

              <div className="absolute -bottom-2 left-1/2 h-[2px] w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#F04D02] to-transparent sm:w-28" />
            </div>
          </div>

          {/* ================= PROJECT INFO ================= */}

          <div className="mt-7 flex flex-col items-center justify-center gap-3 text-center md:mt-8">
            <span className="text-[9px] font-semibold uppercase tracking-[2.5px] text-[#FF7040]">
              {activeProject.category}
            </span>

            <h3 className="text-[18px] font-medium text-white sm:text-[21px]">
              {activeProject.name}
            </h3>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F04D02]" />

              <span className="text-[8px] uppercase tracking-[2px] text-white/30">
                Featured Project
              </span>
            </div>
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}

          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
            <button
              type="button"
              aria-label="Previous case study"
              onClick={handlePrevious}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/70 backdrop-blur-md transition-all duration-300 hover:border-[#F04D02] hover:bg-[#F04D02] hover:text-white"
            >
              <ArrowUp
                size={20}
                strokeWidth={1.5}
                className="text-white transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </button>

            <button
              type="button"
              aria-label="Next case study"
              onClick={handleNext}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/70 backdrop-blur-md transition-all duration-300 hover:border-[#F04D02] hover:bg-[#F04D02] hover:text-white"
            >
              <ArrowDown
                size={20}
                strokeWidth={1.5}
                className="text-white transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </button>
          </div>

          {/* ================= MOBILE NAVIGATION ================= */}

          <div className="mt-7 flex items-center justify-center gap-3 lg:hidden">
            <button
              type="button"
              aria-label="Previous case study"
              onClick={handlePrevious}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/75 backdrop-blur-md transition-all duration-300 hover:border-[#F04D02] hover:bg-[#F04D02] hover:text-white"
            >
              <ArrowUp
                size={18}
                strokeWidth={1.5}
                className="text-white"
              />
            </button>

            <button
              type="button"
              aria-label="Next case study"
              onClick={handleNext}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/75 backdrop-blur-md transition-all duration-300 hover:border-[#F04D02] hover:bg-[#F04D02] hover:text-white"
            >
              <ArrowDown
                size={18}
                strokeWidth={1.5}
                className="text-white"
              />
            </button>
          </div>

          {/* ================= PROGRESS INDICATOR ================= */}

          <div className="mx-auto mt-8 flex max-w-[820px] items-center gap-2 md:mt-10">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to case study ${index + 1}`}
                onClick={() => {
                  setActiveIndex(index);

                  const category =
                    caseStudies[index]?.category;

                  if (category) {
                    setActiveCategory(category);
                  }
                }}
                className="group h-5 flex-1"
              >
                <span
                  className={`block h-[2px] w-full transition-all duration-500 ${
                    index === activeIndex
                      ? "bg-[#F04D02]"
                      : "bg-white/10 group-hover:bg-white/30"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F04D02]/50 to-transparent"
      />
    </section>
  );
}