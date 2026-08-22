import Image from "next/image";
import { Project } from "@/types/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-full">
      {/* ================= PROJECT IMAGE ================= */}
      <div className="relative w-full overflow-hidden bg-[#f4f6fa]">
        <div className="relative aspect-[1.45/1] w-full">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority={project.id <= 2}
            sizes="(max-width: 640px) 78vw, (max-width: 1024px) 350px, 370px"
            className="object-cover"
          />
        </div>
      </div>

      {/* ================= LOGO ================= */}
      <div className="mt-4 flex h-[65px] w-full items-center sm:mt-5 sm:h-[75px] md:h-[85px]">
        <div className="relative h-[65px] w-[170px] sm:h-[75px] sm:w-[195px] md:h-[85px] md:w-[220px]">
          <Image
            src={project.logo}
            alt={`${project.name} logo`}
            fill
            sizes="(max-width: 640px) 170px, (max-width: 768px) 195px, 220px"
            className="object-contain object-left"
          />
        </div>
      </div>
    </div>
  );
}