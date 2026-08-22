"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUp } from "lucide-react";

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

  // IMAGE AUTOMATICALLY CHANGES EVERY 5 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (
          (currentIndex + 1) % caseStudies.length
        );
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // CATEGORY CLICK
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);

    const index = caseStudies.findIndex(
      (project) => project.category === category
    );

    if (index !== -1) {
      setActiveIndex(index);
    }
  };

  // PREVIOUS IMAGE
  const handlePrevious = () => {
    setActiveIndex((currentIndex) => {
      return (
        (currentIndex - 1 + caseStudies.length) %
        caseStudies.length
      );
    });
  };

  // NEXT IMAGE
  const handleNext = () => {
    setActiveIndex((currentIndex) => {
      return (
        (currentIndex + 1) % caseStudies.length
      );
    });
  };

  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#222222]">

      {/* ================= BACKGROUND ================= */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, #222222 0%, #252525 30%, #302020 52%, #7a2d13 75%, #F04D02 100%)",
        }}
      />

      {/* LEFT ORANGE GLOW */}
      <div className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#F04D02] opacity-20 blur-[120px] sm:h-[500px] sm:w-[500px]" />

      {/* RIGHT ORANGE GLOW */}
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#FE8302] opacity-20 blur-[120px] sm:h-[500px] sm:w-[500px]" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-16 lg:py-14">

        {/* ================= CATEGORY NAV ================= */}

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 md:gap-8 lg:gap-10">

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
                className={`cursor-pointer rounded-none px-4 py-2 text-[11px] font-extrabold tracking-[0.2px] text-white transition-all duration-300 sm:px-5 sm:text-[12px] md:px-6 md:text-[13px] ${
                  isActive
                    ? "border-2 border-white bg-white/10"
                    : "border-2 border-transparent bg-transparent"
                }`}
              >
                {category}
              </button>
            );
          })}

        </div>

        {/* ================= TITLE + BUTTON ================= */}

        <div className="mt-8 flex flex-col items-start justify-between gap-6 sm:mt-10 md:mt-12 md:flex-row md:items-center md:px-12 lg:mt-14 lg:px-24">

          <h2 className="text-[25px] font-normal leading-[1.15] tracking-[-0.8px] text-white sm:text-[30px] md:text-[34px] lg:text-[38px]">
            Explore Our Case Studies
          </h2>

          <Link
            href="/case-studies"
            className="inline-flex min-w-[210px] items-center justify-center rounded-br-[22px] bg-white px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.5px] text-[#222222] transition-all duration-300 hover:bg-[#F04D02] hover:text-white sm:min-w-[220px] sm:px-7 sm:py-4 sm:text-[12px]"
          >
            View All Case Studies
          </Link>

        </div>

        {/* ================= MAIN CASE STUDY AREA ================= */}

        <div className="relative mt-8 min-h-[450px] sm:mt-10 md:mt-14">

          {/* LEFT COMPANY NAME */}

          <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 md:block">

            <span className="text-[22px] font-semibold tracking-wide text-white lg:text-[26px] [writing-mode:vertical-rl] rotate-180">
              GEN MAX IT SOLUTION
            </span>

          </div>

          {/* PROJECT IMAGE */}

          <div className="mx-auto w-full max-w-[700px] px-0 sm:px-4 md:px-8 lg:px-0">

            <CaseStudyCard
              caseStudy={activeProject}
            />

          </div>

          {/* MOBILE PROJECT LABEL */}

          <div className="mt-6 flex items-center justify-between md:hidden">

            <span className="text-[13px] font-semibold uppercase tracking-[2px] text-white sm:text-[14px]">
              {activeProject.name}
            </span>

          </div>

          {/* ================= DESKTOP ARROWS ================= */}

          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">

            {/* PREVIOUS */}

            <button
              type="button"
              aria-label="Previous case study"
              onClick={handlePrevious}
              className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-[#222222]"
            >
              <ArrowUp
                size={22}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </button>

            {/* NEXT */}

            <button
              type="button"
              aria-label="Next case study"
              onClick={handleNext}
              className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-[#222222]"
            >
              <ArrowDown
                size={22}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </button>

          </div>

          {/* ================= MOBILE ARROWS ================= */}

          <div className="mt-6 flex justify-center gap-3 lg:hidden">

            <button
              type="button"
              aria-label="Previous case study"
              onClick={handlePrevious}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-[#222222]"
            >
              <ArrowUp
                size={19}
                strokeWidth={1.8}
              />
            </button>

            <button
              type="button"
              aria-label="Next case study"
              onClick={handleNext}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-[#222222]"
            >
              <ArrowDown
                size={19}
                strokeWidth={1.8}
              />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}