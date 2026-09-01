/* =====================================================
   BRANDING TYPES
===================================================== */

export interface BrandingHeroData {
  title: string;
  breadcrumb: string;
  image: string;
  imageAlt: string;
  phone: string;
  phoneLink: string;
}

export interface BrandingIntroData {
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
}

export interface BrandingServicesData {
  title: string;
  image: string;
  imageAlt: string;
  points: string[];
}

export interface BrandingStrategyPoint {
  title: string;
  description: string;
}

export interface BrandingStrategyData {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  points: BrandingStrategyPoint[];
}

export interface BrandingProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface BrandingFaq {
  question: string;
  answer: string;
}

export interface BrandingFaqData {
  title: string;
  image: string;
  imageAlt: string;
  faqs: BrandingFaq[];
}