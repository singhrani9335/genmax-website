import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";

interface ProjectDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <main className="flex min-h-screen w-full items-center justify-center bg-white px-5">
        <div className="w-full max-w-[500px] text-center">
          <h1 className="text-[30px] font-normal tracking-[-1.2px] text-[#07182f] min-[375px]:text-[34px] sm:text-[40px]">
            Project Not Found
          </h1>

          <p className="mt-4 text-[12px] leading-6 text-[#6d7683] sm:text-[14px]">
            The project you are looking for does not exist.
          </p>

          <Link
            href="/portfolio"
            className="mt-7 inline-flex items-center gap-3 rounded-br-[18px] bg-[#F04D02] px-5 py-3.5 text-[9px] font-semibold uppercase tracking-[1.5px] text-white transition-all duration-300 hover:bg-[#d94400] sm:mt-8 sm:px-6 sm:text-[10px]"
          >
            <ArrowLeft size={15} />
            Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#07182f]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative w-full overflow-hidden bg-[#120E0C] pt-24 min-[375px]:pt-26 sm:pt-28 md:pt-32 lg:pt-36">
        {/* Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[180px] top-10 h-[300px] w-[300px] rounded-full bg-[#F04D02]/20 blur-[100px] sm:-right-40 sm:top-20 sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px] md:blur-[130px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-10 min-[375px]:px-6 sm:px-8 sm:pb-14 md:px-12 md:pb-16 lg:px-16 xl:px-20">
          {/* Breadcrumb */}
          <div className="flex max-w-full flex-wrap items-center gap-2 text-[8px] font-semibold uppercase tracking-[1.5px] text-white/40 min-[375px]:gap-2.5 sm:gap-3 sm:text-[10px] sm:tracking-[2px]">
            <Link
              href="/"
              className="text-white/40 transition-colors duration-300 hover:text-white"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/portfolio"
              className="text-white/40 transition-colors duration-300 hover:text-white"
            >
              Portfolio
            </Link>

            <span className="text-[#F04D02]">
              /
            </span>

            <span className="max-w-[150px] truncate text-white min-[375px]:max-w-[200px] sm:max-w-none">
              {project.name}
            </span>
          </div>

          {/* Category */}
          <div className="mt-8 flex items-center gap-3 sm:mt-10">
            <span className="h-px w-7 bg-[#F04D02] min-[375px]:w-8 sm:w-10" />

            <span className="text-[8px] font-semibold uppercase tracking-[2px] text-[#FF7040] sm:text-[10px] sm:tracking-[2.5px]">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-5 max-w-[900px] break-words text-[34px] font-normal leading-[1.04] tracking-[-1.5px] text-white min-[375px]:text-[39px] sm:mt-6 sm:text-[52px] sm:tracking-[-2px] md:text-[64px] lg:text-[78px]">
            {project.name}
          </h1>
        </div>
      </section>

      {/* =====================================================
          PROJECT IMAGE
      ===================================================== */}

      <section className="relative w-full bg-white py-8 min-[375px]:py-10 sm:py-14 md:py-18 lg:py-20">
        <div className="mx-auto w-full max-w-[1400px] px-5 min-[375px]:px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="relative overflow-hidden rounded-[3px] bg-[#f3f5f8] shadow-[0_15px_45px_rgba(20,45,102,0.08)] sm:rounded-[4px] sm:shadow-[0_20px_60px_rgba(20,45,102,0.10)]">
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
              <Image
                src={project.image}
                alt={project.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1400px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT INFORMATION
      ===================================================== */}

      <section className="w-full bg-white pb-14 min-[375px]:pb-16 sm:pb-20 md:pb-24 lg:pb-28">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 px-5 min-[375px]:px-6 sm:gap-12 sm:px-8 md:gap-16 md:px-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20 lg:px-16">
          {/* DESCRIPTION */}
          <div className="min-w-0">
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span className="h-px w-8 bg-[#F04D02] sm:w-10" />

              <span className="text-[8px] font-semibold uppercase tracking-[2px] text-[#F04D02] sm:text-[9px] sm:tracking-[2.5px]">
                About The Project
              </span>
            </div>

            <h2 className="max-w-[700px] text-[27px] font-normal leading-[1.12] tracking-[-0.8px] text-[#07182f] min-[375px]:text-[29px] sm:text-[35px] sm:tracking-[-1px] md:text-[42px] lg:text-[44px]">
              Creating digital experiences that{" "}
              <span className="text-[#07182f]/35">
                make an impact.
              </span>
            </h2>

            <p className="mt-6 max-w-[720px] text-[13px] leading-[1.85] text-[#596678] sm:mt-7 sm:text-[15px] sm:leading-[1.9]">
              {project.description}
            </p>

            {/* LOGO */}
            <div className="relative mt-8 h-[60px] w-[180px] min-[375px]:mt-9 sm:mt-10 sm:h-[70px] sm:w-[220px]">
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                fill
                sizes="220px"
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* DETAILS */}
          <div className="min-w-0 border-t border-[#e5e9ef] pt-6 sm:pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            {/* CATEGORY */}
            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[2px] text-[#8a94a1] sm:text-[9px]">
                Category
              </p>

              <p className="mt-2 text-[14px] font-medium text-[#07182f] sm:text-[15px]">
                {project.category}
              </p>
            </div>

            {/* TECHNOLOGIES */}
            <div className="mt-7 sm:mt-8">
              <p className="text-[8px] font-semibold uppercase tracking-[2px] text-[#8a94a1] sm:text-[9px]">
                Technologies
              </p>

              <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                {project.technologies.map(
                  (technology) => (
                    <span
                      key={technology}
                      className="border border-[#dfe4ea] px-2.5 py-1.5 text-[8px] font-medium uppercase tracking-[0.8px] text-[#17316a] sm:px-3 sm:py-2 sm:text-[9px] sm:tracking-[1px]"
                    >
                      {technology}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* WEBSITE */}
            {project.website && (
              <div className="mt-8 sm:mt-9">
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-3 rounded-br-[18px] bg-[#07182f] px-5 py-3 text-[9px] font-semibold uppercase tracking-[1.2px] text-white transition-all duration-300 hover:bg-[#F04D02] sm:min-h-[46px] sm:px-6 sm:py-3.5 sm:text-[10px] sm:tracking-[1.3px]"
                >
                  Visit Website

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.7}
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          BACK TO PORTFOLIO
      ===================================================== */}

      <section className="w-full border-t border-[#e9edf2] bg-[#fafbfc] py-9 min-[375px]:py-10 sm:py-12 sm:py-14">
        <div className="mx-auto flex w-full max-w-[1400px] justify-center px-5 min-[375px]:px-6 sm:px-8 md:px-12 lg:px-16">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[1.5px] text-[#07182f] transition-colors duration-300 hover:text-[#F04D02] sm:text-[10px] sm:tracking-[1.8px]"
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to All Projects
          </Link>
        </div>
      </section>
    </main>
  );
}