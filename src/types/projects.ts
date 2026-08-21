export interface Project {
  id: number;
  slug: string;
  name: string;
  image: string;
  logo: string;
  category: string;
  description: string;
  technologies: string[];
  website?: string;
}