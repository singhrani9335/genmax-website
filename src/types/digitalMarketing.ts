import type { LucideIcon } from "lucide-react";

export interface DigitalMarketingService {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface DigitalMarketingProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface DigitalMarketingFaq {
  question: string;
  answer: string;
}

export interface DigitalMarketingWhatWeDoItem {
  title: string;
}