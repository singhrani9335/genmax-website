"use client";

import Image from "next/image";

import { Project } from "@/types/projects";

interface PortfolioGridProps {
  projects: Project[];
}

export default function PortfolioGrid({
  projects,
}: PortfolioGridProps) {
  if (!projects || projects.length === 0) {
    return (
      <div className="flex min-h-[250px] w-full items-center justify-center border border-[#e5e9ef] bg-[#fafbfc] px-5">
        <p className="text-center text-[11px] uppercase tracking-[1.5px] text-[#7d8795] sm:text-[12px]">
          No projects found
        </p>
      </div>
    );
  }

  return (
    <div className="m-0 grid w-full grid-cols-1 gap-0 p-0 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.id}
          className="m-0 w-full min-w-0 p-0"
        >
          {/* PROJECT IMAGE */}
          <div className="relative aspect-[1.45/1] w-full overflow-hidden bg-[#f3f5f8]">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33.333vw"
              className="object-cover"
            />
          </div>

          {/* VIEW WEBSITE BUTTON */}
          <div className="flex w-full items-center justify-center bg-white px-4 py-5 sm:py-6">
            {project.website ? (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name} website`}
                className="inline-flex h-[44px] min-w-[160px] items-center justify-center border border-[#F04D02] bg-white px-6 text-[10px] font-bold uppercase tracking-[1px] text-[#394454] transition-all duration-300 hover:bg-[#F04D02] hover:text-white sm:h-[46px] sm:min-w-[170px] sm:px-7 sm:text-[11px]"
              >
                View Website
              </a>
            ) : (
              <span className="inline-flex h-[44px] min-w-[160px] cursor-not-allowed items-center justify-center border border-[#dfe3ea] bg-[#f8f9fa] px-6 text-[10px] font-bold uppercase tracking-[1px] text-[#9aa3ae] sm:h-[46px] sm:min-w-[170px] sm:px-7 sm:text-[11px]">
                Website Unavailable
              </span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}