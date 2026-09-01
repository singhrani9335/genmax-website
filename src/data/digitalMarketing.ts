import {
  Search,
  Share,
  MousePointerClick,
  TrendingUp,
  Target,
  Mail,
  FileText,
  ShieldCheck,
  Smartphone,
  Megaphone,
  Languages,
  Lightbulb,
  Users,
  RefreshCw,
  Trophy,
} from "lucide-react";

import type {
  DigitalMarketingService,
  DigitalMarketingProcessStep,
  DigitalMarketingFaq,
  DigitalMarketingWhatWeDoItem,
} from "@/types/digitalMarketing";

/* =========================================================
   DIGITAL MARKETING SERVICES
========================================================= */

export const digitalMarketingServices: DigitalMarketingService[] = [
  {
    title: "Search Engine Marketing (SEM)",
    description:
      "We create targeted ad campaigns to ensure your business appears at the top of search engine results, driving relevant traffic, increasing online visibility, and boosting conversions.",
    icon: Search,
  },

  {
    title: "Social Media Optimization (SMO)",
    description:
      "Our social media management strategies help increase customer engagement, build brand awareness, strengthen your online presence, and connect your business with specific target audiences across different platforms.",
    icon: Share,
  },

  {
    title: "Pay-Per-Click (PPC)",
    description:
      "We manage targeted PPC campaigns designed to reach the right audience with the right message at the right time, helping businesses generate quality traffic, increase leads, and maximize advertising ROI.",
    icon: MousePointerClick,
  },

  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Our SEO strategies improve your website's search engine rankings, increase organic traffic, strengthen online visibility, and help your business reach potential customers searching for your products or services.",
    icon: TrendingUp,
  },

  {
    title: "Conversion Rate Optimization (CRO)",
    description:
      "We analyze and optimize your website experience to make it easier for visitors to take action, helping turn more visitors into customers, improve engagement, and increase overall conversion rates.",
    icon: Target,
  },

  {
    title: "Email Marketing",
    description:
      "We create personalized email campaigns that engage your audience, drive website traffic, nurture customer relationships, and build long-term brand loyalty through relevant and effective communication.",
    icon: Mail,
  },

  {
    title: "Content Marketing",
    description:
      "We create valuable and engaging content that connects with your target audience, strengthens brand authority, improves online visibility, and encourages meaningful interactions with potential customers.",
    icon: FileText,
  },

  {
    title: "Online Reputation Management (ORM)",
    description:
      "We protect and strengthen your online reputation by improving positive brand visibility, managing your digital presence, building customer trust, and supporting long-term credibility for your business.",
    icon: ShieldCheck,
  },

  {
    title: "App Store Optimization (ASO)",
    description:
      "We optimize your app's visibility on major app stores to improve discoverability, attract relevant users, increase downloads, and achieve better rankings for stronger app growth and performance.",
    icon: Smartphone,
  },

  {
    title: "Public Relations (PR)",
    description:
      "We strengthen your brand voice through strategic public relations, helping build meaningful audience relationships, increase brand awareness, create positive visibility, and maintain a trustworthy public image.",
    icon: Megaphone,
  },

  {
    title: "Online Translation Services",
    description:
      "We translate and adapt your digital content into multiple languages to ensure clear communication, better audience understanding, and stronger engagement with diverse customers across global markets.",
    icon: Languages,
  },
];

/* =========================================================
   WHAT WE DO
========================================================= */

export const digitalMarketingWhatWeDo: DigitalMarketingWhatWeDoItem[] = [
  {
    title: "Digital marketing mix",
  },

  {
    title: "Transparency",
  },

  {
    title: "Ad fraud control",
  },

  {
    title: "Unique team structure",
  },

  {
    title: "Embrace diversity",
  },

  {
    title: "Avoidance of generic creatives",
  },

  {
    title: "Regular customer interaction",
  },

  {
    title: "Brand safety advertising",
  },
];

/* =========================================================
   DIGITAL MARKETING PROCESS
========================================================= */

export const digitalMarketingProcess: DigitalMarketingProcessStep[] = [
  {
    number: "1",
    title: "UNDERSTANDING THE INDUSTRY",
    description:
      "Staying ahead of industry trends helps us understand market changes, reach the right audience, and use the right tools and strategies to achieve better digital marketing results.",
    icon: Lightbulb,
  },

  {
    number: "2",
    title: "KEEPING AN EYE ON COMPETITORS",
    description:
      "We analyze competitors to identify new opportunities, understand market positioning, improve marketing strategies, and help your brand build a stronger competitive advantage.",
    icon: Users,
  },

  {
    number: "3",
    title: "REVIEWING EXISTING STRATEGIES",
    description:
      "We regularly review and refine existing marketing strategies to adapt to changing market conditions, identify new opportunities, and continuously improve campaign performance.",
    icon: RefreshCw,
  },

  {
    number: "4",
    title: "DELIVERING WINNING STRATEGIES",
    description:
      "We develop effective and performance-focused strategies that help strengthen your brand position, improve digital visibility, and create sustainable growth in the competitive digital market.",
    icon: Trophy,
  },
];

/* =========================================================
   DIGITAL MARKETING FAQS
========================================================= */

export const digitalMarketingFaqs: DigitalMarketingFaq[] = [
  {
    question:
      "Why should I hire GenMax IT Solution for Digital Marketing Services?",

    answer:
      "Technology is the future and marketing is the bridge to the future. For continued success in today's digital world, businesses of all kinds, whether new or established, need a strong digital marketing strategy. GenMax IT Solution provides essential online marketing services including search engine optimization, content marketing, pay-per-click advertising, social media marketing, online reputation management, and other digital solutions. Our strategies are customized around your business goals, target audience, and industry requirements to improve visibility, generate quality leads, and support sustainable growth.",
  },

  {
    question: "Which company is best for digital marketing in India?",

    answer:
      "The best digital marketing company depends on your business goals, industry, target audience, budget, and required services. GenMax IT Solution provides customized digital marketing solutions including SEO, PPC, social media marketing, content marketing, email marketing, reputation management, and conversion optimization.",
  },

  {
    question: "Is digital marketing legal in India?",

    answer:
      "Yes, digital marketing is legal in India when campaigns and business practices comply with applicable laws, advertising standards, privacy requirements, intellectual property rules, and platform policies. Businesses should ensure that their advertisements and marketing communications are accurate, transparent, and compliant with applicable regulations.",
  },

  {
    question: "How much does a digital marketing agency cost in India?",

    answer:
      "The cost of digital marketing depends on the services required, campaign size, competition, target audience, advertising budget, and business objectives. GenMax IT Solution can create a customized digital marketing strategy based on your specific requirements and budget.",
  },

  {
    question: "Why should I choose a digital marketing agency?",

    answer:
      "A professional digital marketing agency gives your business access to specialized expertise, marketing tools, data-driven strategies, campaign optimization, and experienced professionals. It also allows you to focus on your core business while your digital presence is managed strategically.",
  },

  {
    question: "Which is the best company for digital marketing?",

    answer:
      "The right digital marketing company is one that understands your business, audience, industry, and goals and can provide measurable results. GenMax IT Solution combines strategy, creativity, technology, and performance-focused digital marketing services to help businesses strengthen their online presence and grow.",
  },
];