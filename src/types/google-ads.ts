export interface GoogleAdsHeroData {
  title: string;
  breadcrumb: string;
  image: string;
  imageAlt: string;
  phone: string;
  phoneLink: string;
}

export interface GoogleAdsIntroData {
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
}

export interface GoogleAdsServicesData {
  title: string;
  image: string;
  imageAlt: string;
  points: string[];
}

export interface GoogleAdsStrategyPoint {
  title: string;
  description: string;
}

export interface GoogleAdsStrategyData {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  points: GoogleAdsStrategyPoint[];
}

export interface GoogleAdsProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface GoogleAdsFaqItem {
  question: string;
  answer: string;
}

export interface GoogleAdsFaqData {
  title: string;
  image: string;
  imageAlt: string;
  faqs: GoogleAdsFaqItem[];
}