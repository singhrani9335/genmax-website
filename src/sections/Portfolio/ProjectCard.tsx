import Image from "next/image";
import Link from "next/link";

import { Project } from "@/types/projects";

interface ProjectCardProps {
  project: Project;
  showWebsiteButton?: boolean;
}

export default function ProjectCard({
  project,
  showWebsiteButton = false,
}: ProjectCardProps) {
  return (
    <article className="relative w-full">
      {/* ================= IMAGE CARD ================= */}

      <div className="relative overflow-hidden rounded-[2px] bg-[#f3f5f8] shadow-[0_12px_35px_rgba(20,45,102,0.08)]">
        <div className="relative aspect-[1.45/1] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority={project.id <= 2}
            sizes="(max-width: 640px) 82vw, (max-width: 1024px) 350px, 370px"
            className="object-cover"
          />
        </div>
      </div>

      {/* ================= PROJECT INFO ================= */}

      <div className="mt-4 flex items-center gap-4 sm:mt-5">
        <div className="min-w-0 flex-1">
          {showWebsiteButton ? (
            /* ================= VIEW WEBSITE BUTTON ================= */
            <div className="flex h-[62px] items-center sm:h-[70px] md:h-[78px]">
              {project.website ? (
                <Link
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center rounded-full bg-[#F04D02] px-6 py-3 text-[10px] font-semibold uppercase tracking-[1.5px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#d94300] hover:shadow-[0_12px_30px_rgba(240,77,2,0.22)]"
                >
                  <span>View Website</span>

                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ) : (
                <span className="inline-flex items-center justify-center rounded-full border border-[#e5e9ef] px-6 py-3 text-[10px] font-semibold uppercase tracking-[1.5px] text-[#7a838e]">
                  Website Unavailable
                </span>
              )}
            </div>
          ) : (
            /* ================= PROJECT LOGO ================= */
            <div className="relative h-[62px] w-full sm:h-[70px] md:h-[78px]">
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                fill
                sizes="(max-width: 640px) 170px, (max-width: 768px) 195px, 220px"
                className="object-contain object-left"
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}