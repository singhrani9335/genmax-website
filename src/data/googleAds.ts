import type {
  GoogleAdsHeroData,
  GoogleAdsIntroData,
  GoogleAdsServicesData,
  GoogleAdsStrategyData,
  GoogleAdsProcessStep,
  GoogleAdsFaqData,
} from "@/types/google-ads";

/* =====================================================
   GOOGLE ADS HERO
===================================================== */

export const googleAdsHero: GoogleAdsHeroData = {
  title: "Google Ads",

  breadcrumb: "Google Ads",

  image: "/images/google-ads/google-ads-agency-dubai.jpg",

  imageAlt: "Google Ads",

  phone: "+91 99383 07637",

  phoneLink: "+919938307637",
};

/* =====================================================
   GOOGLE ADS INTRO
===================================================== */

export const googleAdsIntro: GoogleAdsIntroData = {
  title: "Google AdWords Agency Dubai!",

  image: "/images/google-ads/google-adwords-agency-dubai.jpg",

  imageAlt: "Google AdWords Agency Dubai",

  paragraphs: [
    "Google Ads helps businesses grow and manage ads on the world's largest search engine, different websites, and mobile apps. Different ad formats are available, including search, display, video, and shopping ads, so businesses can choose what works best for their goals.",

    "GenMax IT Solution is a leading Google AdWords agency in Dubai that helps businesses successfully leverage Google Ads for online growth and reach the right consumer base.",

    "We offer expert advice and customized strategies, ensuring businesses get the most out of their advertising budgets and achieve their objectives.",
  ],
};

/* =====================================================
   GOOGLE ADS SERVICES / WHAT WE DO
===================================================== */

export const googleAdsServices: GoogleAdsServicesData = {
  title: "WHAT WE DO",

  image: "/images/google-ads/what-we-do.jpg",

  imageAlt: "Google Ads What We Do",

  points: [
    "Google Analytics",
    "Google Data Studio",
    "Custom Reporting As Per Client's Convenience",
    "Campaign Setup Strategy",
    "National And International Campaign",
    "Smart Reporting Via GA, GS & Custom",
    "Competition Research",
  ],
};

/* =====================================================
   GOOGLE ADS STRATEGY
===================================================== */

export const googleAdsStrategy: GoogleAdsStrategyData = {
  title: "SMART ADS, SMARTER RESULTS – PARTNER WITH US",

  description:
    "We make online advertising easy by guiding you through every step and delivering the results you want. From keyword research and ad copy creation to campaign optimization, we've got you covered. Our expert services help you engage your audience and boost revenue. Our team identifies opportunities for standing out from the competition and succeeding by analyzing their strengths and weaknesses.",

  image:
    "/images/google-ads/smart-ads-smarter-results-partner-with-us.jpg",

  imageAlt: "Smart Ads, Smarter Results – Partner With Us",

  points: [
    {
      title: "Google Analytics",

      description:
        "Analyze and monitor the performance of your website for in-depth insights about visitor behaviour, traffic sources, and user engagement, enabling you to make informed decisions.",
    },

    {
      title: "Google Data Studio",

      description:
        "Create visually appealing and interactive dashboards to simplify complex data into a digestible format for enhanced business insight.",
    },

    {
      title: "Custom Reporting As Per Client's Convenience",

      description:
        "Get customized reports crafted to fulfill your specific requirements, ensuring you have the necessary data to inform your strategies.",
    },

    {
      title: "Campaign Setup Strategy",

      description:
        "Create successful advertising campaigns with a clear plan to optimize reach, engagement, and outcomes.",
    },

    {
      title: "National And International Campaigns",

      description:
        "Launch powerful campaigns aimed at both regional and international audiences to broaden your business reach.",
    },

    {
      title: "Smart Reporting via GA, GS & Custom",

      description:
        "Obtain smart reports via Google Analytics, Google Sheets, and personalized tools for precise and actionable insights.",
    },

    {
      title: "Competition Research",

      description:
        "Examine competitors' tactics to reveal market trends, pinpoint opportunities, and secure a competitive advantage.",
    },
  ],
};

/* =====================================================
   GOOGLE ADS PROCESS
===================================================== */

export const googleAdsProcess: GoogleAdsProcessStep[] = [
  {
    number: "01",

    title: "GOAL SETTING",

    description:
      "We'll build a campaign strategy based on the assessment of your goals, audience, and budget to meet your business objectives.",
  },

  {
    number: "02",

    title: "KEYWORD RESEARCH",

    description:
      "To drive more visits to your ads from the right audience, we make use of effective tools to research and identify relevant and high-performing keywords.",
  },

  {
    number: "03",

    title: "AD CREATION",

    description:
      "We write compelling copy with headers that grab the reader's attention, generate clicks, and produce conversions.",
  },

  {
    number: "04",

    title: "CAMPAIGN SET UP",

    description:
      "The campaign is then set up with precise audience targeting, bidding strategies, and ad placements for maximum effectiveness.",
  },

  {
    number: "05",

    title: "MONITORING AND OPTIMIZATION",

    description:
      "Keeping track of the campaign's performance, analyzing the collected data, and making adjustments for optimal results is a constant consideration from the moment it goes live.",
  },

  {
    number: "06",

    title: "SMART REPORTING",

    description:
      "Reports are simple and clear, properly put together using Google Analytics and Data Studio to keep you updated with the current status and results of the campaign.",
  },

  {
    number: "07",

    title: "COMPETITOR ANALYSIS",

    description:
      "To stay ahead in the game, we research the strategies of competitors, spot opportunities, and tweak your campaigns for better overall performance.",
  },

  {
    number: "08",

    title: "PERFORMANCE SCALING",

    description:
      "As campaigns become successful in scope, we look at scaling them to gain a greater number of people, engage more, and earn more revenue.",
  },
];

/* =====================================================
   GOOGLE ADS FAQ
===================================================== */

export const googleAdsFaq: GoogleAdsFaqData = {
  title: "Frequently Asked Questions",

  image: "/images/google-ads/frequently-asked-questions.jpg",

  imageAlt: "Frequently Asked Questions About Google Ads",

  faqs: [
    {
      question: "What is Google Ads and How It Works?",

      answer:
        "Google Ads is an online advertising platform that allows businesses to display ads on Google's search engine and its advertising network. Specific keywords trigger ads and can appear in search results, on YouTube, or across websites within Google's network. You bid for keywords, and your ads show based on your bid and quality score. When users click your ad, you pay a cost-per-click (CPC). GenMax IT Solution helps businesses effectively set up and manage Google Ads campaigns, optimizing them for maximum visibility and conversions.",
    },

    {
      question: "How Much Does It Cost to Hire an Agency for Google Ads?",

      answer:
        "The cost of hiring a Google Ads agency depends on factors such as campaign size, advertising budget, target locations, number of campaigns, and the level of management required. A customized strategy can be developed based on your business goals and budget.",
    },

    {
      question: "How Much Should I Pay Someone to Manage My Google Ads?",

      answer:
        "Google Ads management fees vary depending on campaign complexity, advertising spend, reporting requirements, optimization frequency, and the services included. The right management plan should align with your campaign objectives and expected return on investment.",
    },

    {
      question: "What is the ROI of Google Ads?",

      answer:
        "The ROI of Google Ads measures the revenue or value generated from advertising compared with the amount spent on campaigns. ROI can be improved through accurate targeting, relevant keywords, compelling ad copy, effective landing pages, conversion tracking, and continuous campaign optimization.",
    },
  ],
};