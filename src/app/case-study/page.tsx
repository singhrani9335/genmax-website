"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { caseStudies } from "@/data/caseStudies";

const categories = [
  "All",
  "E-Commerce",
  "Web Development",
  "Digital Marketing",
  "SEO",
  "Branding",
  "AMC",
];

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isCategorySticky, setIsCategorySticky] = useState(false);

  /* =======================================================
     CATEGORY STICKY BEHAVIOUR
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const categoryBar = document.getElementById(
        "case-study-category-bar"
      );

      const caseStudySection = document.getElementById(
        "case-study-main-section"
      );

      if (!categoryBar || !caseStudySection) {
        return;
      }

      const width = window.innerWidth;

      let navbarHeight = 76;

      if (width >= 640) {
        navbarHeight = 86;
      }

      if (width >= 1024) {
        navbarHeight = 100;
      }

      const categoryRect = categoryBar.getBoundingClientRect();
      const caseStudyRect = caseStudySection.getBoundingClientRect();

      const reachedNavbar =
        categoryRect.top <= navbarHeight;

      const sectionStillActive =
        caseStudyRect.bottom >
        navbarHeight + categoryRect.height;

      const sectionStarted =
        caseStudyRect.top <= navbarHeight;

      const shouldStick =
        reachedNavbar &&
        sectionStarted &&
        sectionStillActive;

      setIsCategorySticky(shouldStick);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  /* =======================================================
     FILTERED CASE STUDIES
  ======================================================= */

  const filteredCaseStudies =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter(
          (caseStudy) =>
            caseStudy.category === activeCategory
        );

  /* =======================================================
     CATEGORY CHANGE
  ======================================================= */

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-5 sm:px-8 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm font-semibold"
          >
            <Link
              href="/"
              className="text-slate-500 transition-colors hover:text-[#F04D02]"
            >
              Home
            </Link>

            <span
              className="text-[#17245C]"
              aria-hidden="true"
            >
              /
            </span>

            <span className="font-bold text-[#17245C]">
              Case Studies
            </span>
          </nav>
        </div>
      </section>

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 pb-8 pt-10 sm:px-8 sm:pb-10 sm:pt-12 lg:px-12 lg:pb-12 lg:pt-14">
          <h1 className="text-[32px] font-medium leading-none text-[#17245C] sm:text-[38px] lg:text-[44px]">
            Case Study
          </h1>

          <p className="mt-5 max-w-[720px] text-[14px] leading-[1.8] text-[#666] sm:text-[15px] lg:text-[16px]">
            Explore our selected case studies and discover
            how GenMax IT Solution delivers impactful digital
            solutions across different industries and business
            requirements.
          </p>
        </div>
      </section>

      {/* =====================================================
          CASE STUDY MAIN SECTION
      ===================================================== */}

      <section
        id="case-study-main-section"
        className="relative w-full"
      >
        {/* ===================================================
            STICKY CATEGORY NAVIGATION
        =================================================== */}

        <div
          id="case-study-category-bar"
          className={`${
            isCategorySticky
              ? "fixed left-0 right-0 top-[76px] sm:top-[86px] lg:top-[100px]"
              : "relative"
          } z-[9998] w-full border-b border-gray-200 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-all duration-300`}
        >
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10 xl:px-16">
            <div className="flex w-full items-center gap-1 overflow-x-auto [scrollbar-width:none] sm:gap-2 [&::-webkit-scrollbar]:hidden">
              {categories.map((category) => {
                const isActive =
                  activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      handleCategoryChange(category)
                    }
                    aria-pressed={isActive}
                    className={`relative flex shrink-0 items-center justify-center px-4 py-4 text-[13px] font-semibold transition-all duration-300 sm:px-5 sm:text-[14px] ${
                      isActive
                        ? "text-[#F04D02]"
                        : "text-[#171717] hover:text-[#F04D02]"
                    }`}
                  >
                    {category}

                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#F04D02] to-[#FE8302] transition-all duration-300 ${
                        isActive
                          ? "w-[70%] opacity-100"
                          : "w-0 opacity-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===================================================
            SPACE RESERVED WHEN CATEGORY IS FIXED
        =================================================== */}

        {isCategorySticky && (
          <div
            aria-hidden="true"
            className="h-[54px] min-[375px]:h-[58px] sm:h-[66px] lg:h-[72px]"
          />
        )}

        {/* ===================================================
            CASE STUDIES GRID
        =================================================== */}

        <section className="bg-white">
          <div className="mx-auto w-full max-w-[1400px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
            {filteredCaseStudies.length > 0 ? (
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {filteredCaseStudies.map((caseStudy) => (
                  <Link
                    key={caseStudy.id}
                    href={caseStudy.detailsUrl}
                    className="group block cursor-pointer overflow-hidden border border-slate-200 bg-white no-underline shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                  >
                    {/* IMAGE */}

                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#17202A]">
                      <Image
                        src={caseStudy.image}
                        alt={`${caseStudy.name} Case Study`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={75}
                        className="object-cover"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-black/0"
                      />
                    </div>

                    {/* CASE STUDY BUTTON */}

                    <div className="p-5 sm:p-6">
                      <span className="inline-flex border border-[#F04D02] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#F04D02] transition-colors duration-300 hover:bg-[#F04D02] hover:text-white">
                        Case Study
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex min-h-[250px] items-center justify-center border border-dashed border-slate-300 bg-slate-50">
                <p className="text-[15px] font-medium text-[#666]">
                  No case studies available in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}