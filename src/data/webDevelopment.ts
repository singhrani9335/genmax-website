import type {
  WebDevelopmentHeroData,
  WebDevelopmentIntroData,
  WebDevelopmentServicesData,
  WebDevelopmentStrategyData,
  WebDevelopmentProcessStep,
  WebDevelopmentFaqData,
  WebDevelopmentTool,
} from "@/types/webDevelopment";

/* =====================================================
   WEB DEVELOPMENT HERO
===================================================== */

export const webDevelopmentHero: WebDevelopmentHeroData = {
  title: "Web Development",
  breadcrumb: "Web Development",

  image:
    "/images/web-development/web-development-company-in-dubai.jpg",

  imageAlt: "Web Development Company in Dubai",

  phone: "+91 99383 07637",
  phoneLink: "+919938307637",
};

/* =====================================================
   WEB DEVELOPMENT INTRO
===================================================== */

export const webDevelopmentIntro: WebDevelopmentIntroData = {
  title: "THE BEST WEB DEVELOPMENT COMPANY IN DUBAI",

  image:
    "/images/web-development/web-development-company-in-dubai.jpg",

  imageAlt: "Best Web Development Company in Dubai",

  paragraphs: [
    "With GenMax IT Solution, your online presence can become a powerful platform for business growth. We are a professional web development company helping businesses create modern, visually appealing, and user-friendly websites designed around their unique requirements.",

    "Our web development services cover the complete website lifecycle, including planning, UI/UX design, content structure, programming, testing, optimization, and deployment. From simple business websites to dynamic database-driven platforms and complex web applications, we build solutions that are reliable, responsive, scalable, and easy to use.",

    "At GenMax IT Solution, our experienced team combines creative design with modern technologies to develop websites that attract your target audience, strengthen your brand presence, improve user experience, and support your long-term digital growth.",
  ],
};

/* =====================================================
   WHAT WE DO
===================================================== */

export const webDevelopmentServices: WebDevelopmentServicesData = {
  title: "WHAT WE DO",

  image:
    "/images/web-development/what-we-do.jpg",

  imageAlt: "Web Development Services",

  points: [
    "More Traffic In Less Time",
    "Enhance Visual Appeal For Valued Clients",
    "Simple Navigation",
    "User-friendly Search Engine Design",
    "Boost Website Popularity And Traffic",
  ],
};

/* =====================================================
   WEB DEVELOPMENT STRATEGY
===================================================== */

export const webDevelopmentStrategy: WebDevelopmentStrategyData = {
  title: "Get a Customized Web Solution for Your Business!",

  image:
    "/images/web-development/web-development-technology-stack.jpg",

  imageAlt: "Customized Web Development Solutions",

  paragraphs: [
    "Are you looking for an exceptional and professional Web Design Company in Dubai for a responsive and visually appealing website? GenMax IT Solution is your trusted technology partner. Modern designs and developed websites with easy navigation, visual effects, and user-friendly layouts are our forte. We design solutions with the ideal combination of theme colours, modern frameworks, and SEO-friendly layouts to help businesses grow online.",

    "Our team combines creative design with reliable development technologies to build secure, scalable, and high-performance websites and web applications. From modern business websites to advanced digital platforms, we create customized solutions that turn your ideas into impactful digital experiences.",
  ],

  services: [
    {
      title: "HTML",
      description:
        "We create clean and efficient HTML-coded websites that provide the foundation for stunning, responsive, and user-friendly web designs.",
    },

    {
      title: "WordPress",
      description:
        "Our WordPress solutions include engaging themes, plugins, and scalable designs that work to serve businesses across different industries.",
    },

    {
      title: "Ruby on Rails",
      description:
        "We develop high-performance web applications using Ruby on Rails, known for efficient development, robust architecture, and scalable functionality.",
    },

    {
      title: "Magento",
      description:
        "Our eCommerce development experts deliver Magento-based online stores with powerful functionality and smooth shopping experiences.",
    },

    {
      title: "MySQL",
      description:
        "We utilize MySQL for reliable and scalable database solutions, supporting efficient data management and strong website performance.",
    },

    {
      title: "React",
      description:
        "Our React-based solutions create dynamic, interactive, and fast-loading websites for an enhanced user experience.",
    },

    {
      title: "Laravel",
      description:
        "We specialize in Laravel development to build feature-rich, secure, and scalable web applications tailored to your business requirements.",
    },

    {
      title: "OpenCart",
      description:
        "Our OpenCart services focus on creating easy-to-manage, feature-rich eCommerce platforms designed to support business growth.",
    },

    {
      title: "Angular",
      description:
        "We design Angular-powered web applications that are fast, scalable, responsive, and suitable for modern web environments.",
    },

    {
      title: "CodeIgniter",
      description:
        "Our CodeIgniter development services offer lightweight and high-performance solutions for small and medium-sized businesses.",
    },

    {
      title: "Amazon Store",
      description:
        "We create and optimize Amazon Stores to help businesses showcase their products professionally and improve their presence on the platform.",
    },

    {
      title: "Django",
      description:
        "Our Django web applications provide high-speed performance, robust security, and seamless scalability for different business requirements.",
    },

    {
      title: "Website Maintenance",
      description:
        "Our website maintenance services help keep your website updated, secure, optimized, and running at its best.",
    },

    {
      title: "Joomla Development",
      description:
        "Our Joomla development services provide robust and flexible solutions for dynamic websites and powerful online applications.",
    },

    {
      title: "Python Web App Development",
      description:
        "We design scalable and high-performance web applications in Python to support your business goals and provide smooth user experiences.",
    },

    {
      title: "CMS Development",
      description:
        "Our custom CMS development services empower you to manage website content effortlessly while maintaining a professional and flexible online presence.",
    },
  ],
};

/* =====================================================
   WEB DEVELOPMENT HIGHLIGHTS / TOOLS
===================================================== */

export const webDevelopmentTools: WebDevelopmentTool[] = [
  {
    name: "Search Engine Optimization",
    image:
      "/images/web-development/highlights/search-engine-optimization-9.svg",
  },

  {
    name: "E-Commerce Website",
    image:
      "/images/web-development/highlights/e-commerce-website-5.svg",
  },

  {
    name: "Mobile App Development",
    image:
      "/images/web-development/highlights/mobile-app-development-5.svg",
  },

  {
    name: "Web Applications",
    image:
      "/images/web-development/highlights/web-applications-1.svg",
  },

  {
    name: "Website Portal Management",
    image:
      "/images/web-development/highlights/website-portal-management-1.svg",
  },

  {
    name: "Hosting Solutions",
    image:
      "/images/web-development/highlights/hosting-solutions-3.svg",
  },
];

/* =====================================================
   WEB DEVELOPMENT PROCESS
===================================================== */

export const webDevelopmentProcess: WebDevelopmentProcessStep[] = [
  {
    number: "01",
    title: "REQUIREMENT ANALYSIS",
    description:
      "We begin by understanding your business goals, target audience, industry, competitors, website requirements, and expected functionality. This helps us create the right development strategy for your project.",
  },

  {
    number: "02",
    title: "PROJECT PLANNING",
    description:
      "Our team prepares the project structure, technology requirements, development roadmap, content requirements, integrations, and timeline to ensure the project moves forward efficiently.",
  },

  {
    number: "03",
    title: "UI/UX DESIGN",
    description:
      "We create a modern and user-friendly interface with clear navigation, responsive layouts, engaging visual elements, and a design system that matches your brand identity.",
  },

  {
    number: "04",
    title: "FRONTEND DEVELOPMENT",
    description:
      "The approved design is transformed into a responsive and interactive website using modern frontend technologies. We ensure the interface works smoothly across desktops, tablets, and mobile devices.",
  },

  {
    number: "05",
    title: "BACKEND DEVELOPMENT",
    description:
      "We develop the required backend functionality, databases, APIs, integrations, content management features, and business logic to make the website reliable and functional.",
  },

  {
    number: "06",
    title: "TESTING & QUALITY ASSURANCE",
    description:
      "Before launch, we thoroughly test the website for functionality, responsiveness, browser compatibility, performance, forms, navigation, integrations, and overall user experience.",
  },

  {
    number: "07",
    title: "DEPLOYMENT & LAUNCH",
    description:
      "After final approval and testing, we prepare the website for deployment and launch it in the live environment with the required configuration and optimization.",
  },

  {
    number: "08",
    title: "SUPPORT & MAINTENANCE",
    description:
      "After launch, GenMax IT Solution provides ongoing support and maintenance to help keep your website secure, updated, optimized, and ready for future improvements.",
  },
];

/* =====================================================
   WEB DEVELOPMENT FAQ
===================================================== */

export const webDevelopmentFaq: WebDevelopmentFaqData = {
  title: "Frequently Asked Questions",

  image:
    "/images/web-development/frequently-asked-questions.jpg",

  imageAlt: "Frequently Asked Questions About Web Development",

  faqs: [
    {
      question:
        "How can GenMax IT Solution help businesses stay ahead in the digital landscape?",

      answer:
        "GenMax IT Solution helps businesses stay ahead in the digital landscape by delivering modern, responsive, and high-performance websites tailored to their business goals. Our team combines creative UI/UX design, modern development technologies, SEO-friendly structures, and scalable solutions to create digital experiences that improve user engagement and support long-term business growth.",
    },

    {
      question:
        "What makes GenMax IT Solution different from other web development companies in Dubai?",

      answer:
        "GenMax IT Solution focuses on creating customized digital solutions rather than one-size-fits-all websites. We combine modern design, reliable development practices, responsive layouts, performance optimization, SEO-friendly structures, and business-focused functionality to deliver websites that are visually appealing, easy to use, and built for growth.",
    },

    {
      question:
        "Why is AI-driven automation critical in web design?",

      answer:
        "AI-driven automation can help businesses improve website functionality, personalization, customer engagement, and operational efficiency. AI can support areas such as intelligent recommendations, automated customer assistance, content personalization, analytics, and workflow automation, helping businesses create more efficient and engaging digital experiences.",
    },

    {
      question:
        "How to choose the right web development company in Dubai?",

      answer:
        "When choosing a web development company, consider its experience, portfolio, technical expertise, design capabilities, development process, communication, support services, and understanding of your industry. It is also important to choose a company that can build a scalable, responsive, secure, and SEO-friendly website according to your specific business requirements.",
    },

    {
      question:
        "How much does web design cost in Dubai?",

      answer:
        "The cost of web development in Dubai depends on several factors, including website size, design complexity, number of pages, required functionality, CMS or framework, integrations, e-commerce features, custom development, and ongoing maintenance requirements. GenMax IT Solution provides customized web development solutions based on each business's requirements and objectives.",
    },

    {
      question:
        "Which is the best company for web development?",

      answer:
        "The best web development company is one that understands your business objectives and can deliver a website that is visually appealing, responsive, secure, scalable, and easy to manage. GenMax IT Solution works with businesses to create customized websites and web applications using modern technologies and development practices.",
    },

    {
      question:
        "How much will a web development agency in Dubai charge me?",

      answer:
        "Web development agency charges vary depending on the project's scope, technology stack, design requirements, functionality, integrations, number of pages, and level of customization. GenMax IT Solution evaluates your requirements and provides a solution designed around your business goals and budget.",
    },

    {
      question:
        "What is the difference between Web Design & Development?",

      answer:
        "Web design focuses mainly on the visual appearance, layout, user experience, navigation, typography, and overall interface of a website. Web development focuses on turning that design into a functional website through frontend and backend programming, databases, APIs, integrations, and other technical functionality. A successful website requires both effective design and reliable development.",
    },
  ],
};