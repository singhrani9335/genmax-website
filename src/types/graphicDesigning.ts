export interface GraphicDesigningHero {
  title: string;
  breadcrumb: string;
  phone: string;
  phoneLink: string;
  image: string;
  imageAlt: string;
}

export interface GraphicDesigningIntro {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

export interface GraphicDesigningWhatWeDo {
  title: string;
  points: string[];
  image: string;
  imageAlt: string;
}

export interface GraphicDesigningService {
  title: string;
  description: string;
}

export interface GraphicDesigningStrategy {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  services: GraphicDesigningService[];
}

export interface GraphicDesigningProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface GraphicDesigningFaqItem {
  question: string;
  answer: string;
}

export interface GraphicDesigningFaq {
  title: string;
  image: string;
  imageAlt: string;
  faqs: GraphicDesigningFaqItem[];
}

export interface GraphicDesigningCta {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface GraphicDesigningData {
  hero: GraphicDesigningHero;
  intro: GraphicDesigningIntro;
  whatWeDo: GraphicDesigningWhatWeDo;
  strategy: GraphicDesigningStrategy;
  process: GraphicDesigningProcessStep[];
  faq: GraphicDesigningFaq;
  cta: GraphicDesigningCta;
}