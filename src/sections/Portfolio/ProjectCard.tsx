import Image from "next/image";
import { Project } from "@/types/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-full">
      {/* PROJECT IMAGE */}
      <div className="relative w-full overflow-hidden bg-[#f4f6fa]">
        <div className="relative aspect-[1.45/1] w-full">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority={project.id <= 2}
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 360px"
          />
        </div>
      </div>

      {/* LOGO */}
      <div className="mt-5 flex h-[85px] w-full items-center">
        <div className="relative h-[85px] w-[220px]">
          <Image
            src={project.logo}
            alt={`${project.name} logo`}
            fill
            sizes="220px"
            className="object-contain object-left"
          />
        </div>
      </div>
    </div>
  );
}