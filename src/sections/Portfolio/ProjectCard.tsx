import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Project } from "@/types/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative w-full">
      {/* ================= IMAGE CARD ================= */}

      <div className="relative overflow-hidden rounded-[2px] bg-[#f3f5f8] shadow-[0_12px_35px_rgba(20,45,102,0.08)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_45px_rgba(20,45,102,0.14)]">
        <div className="relative aspect-[1.45/1] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority={project.id <= 2}
            sizes="(max-width: 640px) 82vw, (max-width: 1024px) 350px, 370px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
          />

          {/* Image Overlay */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Corner Accent */}

          <div className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center bg-white/95 text-[#17316a] opacity-0 transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight
              size={19}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>

          {/* Bottom Orange Line */}

          <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#F04D02] to-[#FE8302] transition-all duration-500 group-hover:w-full" />
        </div>
      </div>

      {/* ================= PROJECT INFO ================= */}

      <div className="mt-4 flex items-center justify-between gap-4 sm:mt-5">
        <div className="min-w-0 flex-1">
          <div className="relative h-[62px] w-full sm:h-[70px] md:h-[78px]">
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              fill
              sizes="(max-width: 640px) 170px, (max-width: 768px) 195px, 220px"
              className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Small project indicator */}

        <div className="flex shrink-0 items-center gap-2 self-end pb-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F04D02] transition-all duration-300 group-hover:scale-125" />

          <span className="text-[8px] font-medium uppercase tracking-[1.8px] text-[#9aa1ad]">
            Project
          </span>
        </div>
      </div>
    </article>
  );
}