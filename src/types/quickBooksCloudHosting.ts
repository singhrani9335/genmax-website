export interface QuickBooksCloudHostingHero {
  title: string;
  breadcrumb: string;
  image: string;
  imageAlt: string;
  phone: string;
  phoneLink: string;
}

export interface QuickBooksCloudHostingIntro {
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
}

export interface QuickBooksCloudHostingConsiderations {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  points: string[];
}

export interface QuickBooksCloudHostingFeature {
  title: string;
  description: string;
}

export interface QuickBooksCloudHostingFeatures {
  title: string;
  items: QuickBooksCloudHostingFeature[];
}

export interface QuickBooksCloudHostingData {
  hero: QuickBooksCloudHostingHero;
  intro: QuickBooksCloudHostingIntro;
  considerations: QuickBooksCloudHostingConsiderations;
  features: QuickBooksCloudHostingFeatures;
}