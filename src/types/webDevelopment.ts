/* =====================================================
   WEB DEVELOPMENT TYPES
===================================================== */

/* =====================================================
   HERO
===================================================== */

export interface WebDevelopmentHeroData {
  title: string;
  breadcrumb: string;
  image: string;
  imageAlt: string;
  phone: string;
  phoneLink: string;
}

/* =====================================================
   INTRO
===================================================== */

export interface WebDevelopmentIntroData {
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
}

/* =====================================================
   WHAT WE DO / SERVICES
===================================================== */

export interface WebDevelopmentServicesData {
  title: string;
  image: string;
  imageAlt: string;
  points: string[];
}

/* =====================================================
   WEB DEVELOPMENT SERVICE ITEM
===================================================== */

export interface WebDevelopmentService {
  title: string;
  description: string;
}

/* =====================================================
   WEB DEVELOPMENT STRATEGY
===================================================== */

export interface WebDevelopmentStrategyData {
  title: string;
  image: string;
  imageAlt: string;

  paragraphs: string[];

  services: WebDevelopmentService[];
}

/* =====================================================
   PROCESS STEP
===================================================== */

export interface WebDevelopmentProcessStep {
  number: string;
  title: string;
  description: string;
}

/* =====================================================
   FAQ ITEM
===================================================== */

export interface WebDevelopmentFaqItem {
  question: string;
  answer: string;
}

/* =====================================================
   FAQ DATA
===================================================== */

export interface WebDevelopmentFaqData {
  title: string;
  image: string;
  imageAlt: string;
  faqs: WebDevelopmentFaqItem[];
}

/* =====================================================
   WEB DEVELOPMENT TOOL / HIGHLIGHT
===================================================== */

export interface WebDevelopmentTool {
  name: string;
  image: string;
}