import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    id: 1,
    slug: "project-one",
    name: "IFA",
    image: "/images/projects/project-1.png",
    logo: "/images/projects/project-1-logo.png",
    category: "Website Development",
    description:
      "A modern and professional website designed to showcase properties and real estate services.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },

  {
    id: 2,
    slug: "project-two",
    name: "AALTO",
    image: "/images/projects/project-2.png",
    logo: "/images/projects/project-2-logo.png",
    category: "Website Development",
    description:
      "A professional website created for marine and insurance consultancy services.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },

  {
    id: 3,
    slug: "project-three",
    name: "Sultanate",
    image: "/images/projects/project-3.jpg",
    logo: "/images/projects/project-3-logo.png",
    category: "Website Development",
    description:
      "A modern digital experience built with a clean and professional interface.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },

  {
    id: 4,
    slug: "project-four",
    name: "Project Four",
    image: "/images/projects/project-4.jpg",
    logo: "/images/projects/project-4-logo.png",
    category: "Website Development",
    description:
      "A responsive website developed with a modern user experience.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];