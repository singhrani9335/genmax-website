export interface UIUXDesigningHero {
  title: string;
  breadcrumb: string;
  image: string;
  imageAlt: string;
  phone: string;
  phoneLink: string;
}

export interface UIUXDesigningIntro {
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
}

export interface UIUXDesigningService {
  title: string;
  description: string;
}

export interface UIUXDesigningStrategy {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  services: UIUXDesigningService[];
}

export interface UIUXDesigningProcessItem {
  number: number;
  title: string;
  description: string;
}

export interface UIUXDesigningFaqItem {
  question: string;
  answer: string;
}

export interface UIUXDesigningFaq {
  title: string;
  image: string;
  imageAlt: string;
  faqs: UIUXDesigningFaqItem[];
}

export interface UIUXDesigningServices {
  title: string;
  image: string;
  imageAlt: string;
  points: string[];
}

export interface UIUXDesigningData {
  hero: UIUXDesigningHero;
  intro: UIUXDesigningIntro;
  services: UIUXDesigningServices;
  strategy: UIUXDesigningStrategy;
  process: UIUXDesigningProcessItem[];
  faq: UIUXDesigningFaq;
}