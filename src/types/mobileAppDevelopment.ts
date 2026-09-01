export interface MobileAppDevelopmentHero {
  title: string;
  breadcrumb: string;
  image: string;
  imageAlt: string;
  phone: string;
  phoneLink: string;
}

export interface MobileAppDevelopmentIntro {
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
}

export interface MobileAppDevelopmentHighlight {
  title: string;
  image: string;
  imageAlt: string;
}

export interface MobileAppDevelopmentServicePoint {
  title: string;
  description: string;
}

export interface MobileAppDevelopmentServices {
  title: string;
  image: string;
  imageAlt: string;
  points: string[];
}

export interface MobileAppDevelopmentStrategy {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  services: MobileAppDevelopmentServicePoint[];
}

export interface MobileAppDevelopmentProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface MobileAppDevelopmentFaqItem {
  question: string;
  answer: string;
}

export interface MobileAppDevelopmentFaq {
  title: string;
  image: string;
  imageAlt: string;
  faqs: MobileAppDevelopmentFaqItem[];
}

export interface MobileAppDevelopmentData {
  hero: MobileAppDevelopmentHero;
  intro: MobileAppDevelopmentIntro;
  highlights: MobileAppDevelopmentHighlight[];
  services: MobileAppDevelopmentServices;
  strategy: MobileAppDevelopmentStrategy;
  process: MobileAppDevelopmentProcessStep[];
  faq: MobileAppDevelopmentFaq;
}