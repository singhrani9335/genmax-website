export interface SeoHeroData {
  title: string;
  breadcrumb: string;
  image: string;
  imageAlt: string;
  phone: string;
  phoneLink: string;
}

export interface SeoIntroData {
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  overview: string;
}

export interface SeoRoiData {
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
}

export interface SeoHighlight {
  title: string;
  description: string;
}

export interface SeoWhyChooseUsData {
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  highlights: SeoHighlight[];
}

export interface SeoConsultantData {
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  highlights: SeoHighlight[];
}

export interface SeoStrategy {
  title: string;
  description: string;
}

export interface SeoStrategiesData {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageLabel: string;
  strategies: SeoStrategy[];
}

export interface SeoTool {
  name: string;
  image: string;
}

export interface SeoProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SeoProcessData {
  title: string;
  steps: SeoProcessStep[];
}

export interface SeoFaqItem {
  question: string;
  answer: string;
}

export interface SeoFaqData {
  title: string;
  image: string;
  imageAlt: string;
  faqs: SeoFaqItem[];
}