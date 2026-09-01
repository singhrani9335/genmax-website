export interface EcommerceHeroData {
  title: string;
  breadcrumb: string;
  image: string;
  imageAlt: string;
  phone: string;
  phoneLink: string;
}

export interface EcommerceIntroData {
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
}

export interface EcommerceServicesData {
  title: string;
  image: string;
  imageAlt: string;
  points: string[];
}

export interface EcommerceStrategyPoint {
  title: string;
  description: string;
}

export interface EcommerceStrategyData {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  points: EcommerceStrategyPoint[];
}

export interface EcommerceProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface EcommerceFaqItem {
  question: string;
  answer: string;
}

export interface EcommerceFaqData {
  title: string;
  image: string;
  imageAlt: string;
  faqs: EcommerceFaqItem[];
}