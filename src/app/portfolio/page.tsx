"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";
import { featuredProjects } from "@/data/portfolio";
import PortfolioGrid from "@/sections/Portfolio/PortfolioGrid";

const categories = [
  "All",
  "E-Commerce",
  "Web Development",
  "Digital Marketing",
  "Web Applications",
  "SEO",
  "Branding",
  "AMC",
  "Email Marketing",
  "Graphic Design",
];

function FeaturedProject({
  project,
  reverse,
}: {
  project: (typeof featuredProjects)[number];
  reverse: boolean;
}) {
  return (
    <article
      className={`grid w-full grid-cols-1 overflow-hidden bg-white lg:min-h-[520px] lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* PROJECT IMAGE */}
      <div className="relative h-[260px] w-full overflow-hidden bg-[#f3f3f3] min-[375px]:h-[280px] sm:h-[340px] md:h-[420px] lg:h-[520px]">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </div>

      {/* PROJECT DETAILS */}
      <div className="flex min-h-[360px] w-full items-center bg-white px-5 py-10 min-[375px]:px-6 sm:min-h-[400px] sm:px-10 sm:py-12 md:px-14 md:py-14 lg:min-h-[520px] lg:px-[10%] lg:py-12 xl:px-[14%]">
        <div className="w-full max-w-[590px]">
          {/* LOGO */}
          <div className="flex h-[58px] w-full items-center sm:h-[68px] md:h-[72px]">
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              width={300}
              height={100}
              className="max-h-[58px] w-auto max-w-full object-contain object-left sm:max-h-[65px] md:max-h-[70px]"
            />
          </div>

          {/* DIVIDER */}
          <div className="mb-6 mt-3 h-px w-full bg-[#e4e7eb] sm:mb-7" />

          {/* INFORMATION */}
          <div className="space-y-2.5">
            <p className="text-[12px] leading-[1.7] text-[#4e5865] min-[375px]:text-[13px] sm:text-[14px]">
              <span className="font-bold text-[#07182f]">Scope:</span>{" "}
              {project.scope}
            </p>

            <p className="text-[12px] leading-[1.7] text-[#4e5865] min-[375px]:text-[13px] sm:text-[14px]">
              <span className="font-bold text-[#07182f]">
                Technology:
              </span>{" "}
              {project.technology}
            </p>

            <p className="text-[12px] leading-[1.7] text-[#4e5865] min-[375px]:text-[13px] sm:text-[14px]">
              <span className="font-bold text-[#07182f]">Location:</span>{" "}
              {project.location}
            </p>
          </div>

          {/* VIEW WEBSITE BUTTON */}
          <div className="mt-7 flex flex-wrap gap-4 sm:mt-9">
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[46px] min-w-[165px] items-center justify-center border border-[#F04D02] bg-white px-6 text-[9px] font-bold uppercase tracking-[1px] text-[#394454] transition-all duration-300 hover:bg-[#F04D02] hover:text-white sm:h-[48px] sm:min-w-[180px] sm:px-7 sm:text-[10px]"
            >
              View Website
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isCategorySticky, setIsCategorySticky] = useState(false);

  /*
   * =====================================================
   * CATEGORY STICKY BEHAVIOUR
   * =====================================================
   */
  useEffect(() => {
    const handleScroll = () => {
      const categoryBar = document.getElementById(
        "portfolio-category-bar"
      );

      const portfolioSection = document.getElementById(
        "portfolio-main-section"
      );

      if (!categoryBar || !portfolioSection) {
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
      const portfolioRect =
        portfolioSection.getBoundingClientRect();

      const reachedNavbar =
        categoryRect.top <= navbarHeight;

      const sectionStillActive =
        portfolioRect.bottom >
        navbarHeight + categoryRect.height;

      const sectionStarted =
        portfolioRect.top <= navbarHeight;

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

  /*
   * =====================================================
   * FILTER NORMAL PROJECTS
   * =====================================================
   */
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => {
          const projectCategory = String(
            project.category ?? ""
          )
            .trim()
            .toLowerCase();

          const selectedCategory =
            activeCategory.trim().toLowerCase();

          return projectCategory === selectedCategory;
        });

  /*
   * =====================================================
   * FILTER FEATURED PROJECTS
   * =====================================================
   */
  const filteredFeaturedProjects =
    activeCategory === "All"
      ? featuredProjects
      : featuredProjects.filter((project) => {
          const projectCategory = String(
            project.category ?? ""
          )
            .trim()
            .toLowerCase();

          const selectedCategory =
            activeCategory.trim().toLowerCase();

          return projectCategory === selectedCategory;
        });

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#07182f]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative h-[230px] w-full overflow-hidden bg-white min-[375px]:h-[250px] sm:h-[280px] md:h-[310px] lg:h-[340px] xl:h-[365px]">
        <Image
          src="/images/portfolio/portfolio-banner.jpg"
          alt="Portfolio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-white/10"
        />

        <div className="relative z-10 flex h-full items-center px-5 min-[375px]:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-20">
          <h1 className="text-[27px] font-medium leading-tight tracking-[-1.2px] text-[#3f4650] min-[375px]:text-[30px] sm:text-[37px] md:text-[43px] lg:text-[48px]">
            Our{" "}
            <span className="text-[#F04D02]">
              Portfolio
            </span>
          </h1>
        </div>
      </section>

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1500px] px-5 py-4 min-[375px]:px-6 sm:px-8 sm:py-5 md:px-10 lg:px-14 lg:py-6 xl:px-20">
          <div className="flex flex-wrap items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[1.5px] min-[375px]:text-[10px] sm:gap-3 sm:text-[12px] sm:tracking-[2px]">
            <Link
              href="/"
              className="text-[#5f6670] no-underline transition-colors duration-300 hover:text-[#F04D02]"
            >
              Home
            </Link>

            <span className="text-[#F04D02]">/</span>

            <span className="text-[#5f6670]">
              Portfolio
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPLETE PORTFOLIO SECTION
      ===================================================== */}

      <section
        id="portfolio-main-section"
        className="relative w-full bg-[#f7f8fa]"
      >
        {/* =================================================
            CATEGORY NAVIGATION
        ================================================= */}

        <div
          id="portfolio-category-bar"
          className={`${
            isCategorySticky
              ? "fixed left-0 right-0 top-[76px] sm:top-[86px] lg:top-[100px]"
              : "relative"
          } z-[9998] w-full border-y border-[#e2e5e9] bg-[#f3f5f7] transition-all duration-300 ${
            isCategorySticky
              ? "shadow-[0_5px_20px_rgba(7,24,47,0.10)]"
              : "shadow-[0_3px_12px_rgba(7,24,47,0.05)]"
          }`}
        >
          <div className="w-full px-3 sm:px-5 md:px-7 lg:px-10 xl:px-14">
            <div
              className={`flex w-full items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
                isCategorySticky
                  ? "gap-4 py-2.5 min-[375px]:gap-5 sm:gap-6 sm:py-3.5 md:gap-7 lg:gap-8 lg:py-4 xl:gap-9"
                  : "gap-4 py-3.5 min-[375px]:gap-5 sm:gap-6 sm:py-5 md:gap-7 lg:gap-8 lg:py-5 xl:gap-9"
              }`}
            >
              {categories.map((category) => {
                const isActive =
                  activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    className={`group relative shrink-0 px-1 text-center sm:px-2 ${
                      isCategorySticky
                        ? "py-2"
                        : "py-2.5"
                    }`}
                  >
                    <span
                      className={`whitespace-nowrap font-medium leading-none tracking-[0.2px] transition-colors duration-300 ${
                        isCategorySticky
                          ? "text-[9px] min-[375px]:text-[10px] sm:text-[10px] md:text-[11px] lg:text-[11px] xl:text-[12px]"
                          : "text-[10px] min-[375px]:text-[11px] sm:text-[11px] md:text-[12px] lg:text-[12px] xl:text-[13px]"
                      } ${
                        isActive
                          ? "font-semibold text-[#F04D02]"
                          : "text-[#4a5563] group-hover:text-[#F04D02]"
                      }`}
                    >
                      {category}
                    </span>

                    <span
                      className={`absolute bottom-[-1px] left-0 h-[2px] w-full origin-left bg-[#F04D02] transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* SPACE RESERVED WHEN CATEGORY IS FIXED */}

        {isCategorySticky && (
          <div
            aria-hidden="true"
            className="h-[54px] min-[375px]:h-[58px] sm:h-[66px] lg:h-[72px]"
          />
        )}

        {/* =================================================
            FEATURED PROJECTS
        ================================================= */}

        {filteredFeaturedProjects.length > 0 && (
          <section className="relative w-full bg-white">
            <div className="flex w-full flex-col">
              {filteredFeaturedProjects.map(
                (project, index) => (
                  <FeaturedProject
                    key={project.id}
                    project={project}
                    reverse={index % 2 === 1}
                  />
                )
              )}
            </div>
          </section>
        )}

        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div
          id="portfolio-project-grid"
          className="relative w-full overflow-hidden bg-[#f7f8fa] py-12 min-[375px]:py-14 sm:py-20 md:py-24 lg:py-28"
        >
          <div className="mx-auto w-full max-w-[1500px] px-0">
            {filteredProjects.length > 0 ? (
              <PortfolioGrid
                projects={filteredProjects}
              />
            ) : (
              <div className="flex min-h-[260px] items-center justify-center border border-[#edf0f3] bg-white px-5 sm:min-h-[300px]">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-2 w-2 rounded-full bg-[#F04D02]" />

                  <h3 className="text-[18px] font-medium text-[#07182f] sm:text-[20px]">
                    No Projects Found
                  </h3>

                  <p className="mt-2 max-w-[300px] text-[12px] leading-6 text-[#7a838e] sm:max-w-none sm:text-[13px]">
                    Projects for this category will
                    appear here soon.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}