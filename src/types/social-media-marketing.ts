export interface SocialMediaHeroData {
  title: string;
  breadcrumb: string;
  image: string;
  imageAlt: string;
  phone: string;
  phoneLink: string;
}

export interface SocialMediaIntroData {
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
}

export interface SocialMediaService {
  title: string;
  description: string;
}

export interface SocialMediaServicesData {
  title: string;
  image: string;
  imageAlt: string;
  points: string[];
  services: SocialMediaService[];
}

export interface SocialMediaProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SocialMediaFaq {
  question: string;
  answer: string;
}

export interface SocialMediaFaqData {
  title: string;
  image: string;
  imageAlt: string;
  faqs: SocialMediaFaq[];
}