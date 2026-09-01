export interface ReputationManagementHeroData {
  title: string;
  breadcrumb: string;
  image: string;
  imageAlt: string;
  phone: string;
  phoneLink: string;
}

export interface ReputationManagementIntroData {
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
}

export interface ReputationManagementServicesData {
  title: string;
  image: string;
  imageAlt: string;
  points: string[];
}

export interface ReputationManagementStrategyPoint {
  title: string;
  description: string;
}

export interface ReputationManagementStrategyData {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  points: ReputationManagementStrategyPoint[];
}

export interface ReputationManagementProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ReputationManagementTool {
  name: string;
  image: string;
}

export interface ReputationManagementFaqItem {
  question: string;
  answer: string;
}

export interface ReputationManagementFaqData {
  title: string;
  image: string;
  imageAlt: string;
  faqs: ReputationManagementFaqItem[];
}