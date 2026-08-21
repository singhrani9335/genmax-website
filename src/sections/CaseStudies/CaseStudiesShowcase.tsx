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
  const [activeCategory, setActiveCategory] = useState("E-Commerce");
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = caseStudies[activeIndex] || caseStudies[0];

  // Image automatically changes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % caseStudies.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // CATEGORY CLICK
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);

    // Category ke according image turant change hogi
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
      return (currentIndex + 1) % caseStudies.length;
    });
  };

  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#171a38]">

      {/* BACKGROUND GRADIENT */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, #e3262e 0%, #c91f35 28%, #491d48 55%, #18275a 82%, #10275e 100%)",
        }}
      />

      {/* SOFT GLOW */}
      <div className="pointer-events-none absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-[#ff3b1f] opacity-30 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-[#243eaa] opacity-40 blur-[120px]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-10 sm:px-10 md:py-12 lg:px-16 lg:py-14">

        {/* CATEGORY NAV */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10">
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryClick(category)}
                className={`cursor-pointer rounded-none px-5 py-2 text-[12px] font-extrabold tracking-[0.2px] text-white transition-all duration-300 sm:px-6 sm:text-[13px] ${
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

        {/* TITLE + BUTTON */}
        <div className="mt-10 flex flex-col items-start justify-between gap-7 sm:mt-12 md:flex-row md:items-center md:px-20 lg:mt-14 lg:px-24">

          <h2 className="text-[25px] font-normal leading-[1.15] tracking-[-0.8px] text-white sm:text-[30px] md:text-[34px] lg:text-[38px]">
            Explore Our Case Studies
          </h2>

          <Link
            href="/case-studies"
            className="mr-2 inline-flex min-w-[220px] items-center justify-center rounded-br-[22px] bg-white px-7 py-4 text-[12px] font-medium uppercase tracking-[0.5px] text-[#222222] transition-all duration-300 hover:bg-[#F04D02] hover:text-white lg:mr-4"
          >
            View All Case Studies
          </Link>

        </div>

        {/* MAIN CASE STUDY AREA */}
        <div className="relative mt-10 min-h-[450px] sm:mt-12 md:mt-14">

          {/* LEFT COMPANY NAME */}
          <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 md:block">
            <span className="text-[22px] font-semibold tracking-wide text-white lg:text-[26px] [writing-mode:vertical-rl] rotate-180">
              GEN MAX IT SOLUTION
            </span>
          </div>

          {/* PROJECT IMAGE */}
          <div className="mx-auto w-full max-w-[700px] px-0">
            <CaseStudyCard caseStudy={activeProject} />
          </div>

          {/* MOBILE PROJECT LABEL */}
          <div className="mt-6 flex items-center justify-between md:hidden">
            <span className="text-[14px] font-semibold uppercase tracking-[2px] text-white">
              {activeProject.name}
            </span>
          </div>

          {/* UP / DOWN ARROWS */}
          <div className="absolute right-[100px] top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">

            {/* PREVIOUS */}
            <button
              type="button"
              aria-label="Previous case study"
              onClick={handlePrevious}
              className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-[#171a38]"
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
              className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-[#171a38]"
            >
              <ArrowDown
                size={22}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </button>

          </div>
        </div>
      </div>

      {/* BOTTOM ANGLE */}
      <div className="absolute bottom-0 left-0 h-[70px] w-[120px] bg-white [clip-path:polygon(0_100%,100%_100%,0_0)]" />
    </section>
  );
}