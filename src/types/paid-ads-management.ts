/* =====================================================
   PAID ADS MANAGEMENT TYPES
===================================================== */

/* =====================================================
   PAID ADS HERO
===================================================== */

export interface PaidAdsHeroData {
  title: string;
  breadcrumb: string;
  image: string;
  imageAlt: string;
  phone: string;
  phoneLink: string;
}

/* =====================================================
   PAID ADS INTRO
===================================================== */

export interface PaidAdsIntroData {
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  overview?: string;
}

/* =====================================================
   PAID ADS SERVICE ITEM
===================================================== */

export interface PaidAdsServiceItem {
  title: string;
  description: string;
}

/* =====================================================
   PAID ADS SERVICES
===================================================== */

export interface PaidAdsServicesData {
  title: string;
  image: string;
  imageAlt: string;
  points: string[];
  services: PaidAdsServiceItem[];
}

/* =====================================================
   PAID ADS CAMPAIGNS
===================================================== */

export interface PaidAdsCampaignsData {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  services: PaidAdsServiceItem[];
}

/* =====================================================
   PAID ADS TOOLS
===================================================== */

export interface PaidAdsTool {
  name: string;
  image: string;
}

/* =====================================================
   PAID ADS PROCESS
===================================================== */

export interface PaidAdsProcessStep {
  number: string;
  title: string;
  description: string;
}

/* =====================================================
   PAID ADS FAQ ITEM
===================================================== */

export interface PaidAdsFaqItem {
  question: string;
  answer: string;
}

/* =====================================================
   PAID ADS FAQ
===================================================== */

export interface PaidAdsFaqData {
  title: string;
  image: string;
  imageAlt: string;
  faqs: PaidAdsFaqItem[];
}