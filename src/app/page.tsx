import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/services/Services";
import OurClients from "@/sections/OurClients";
import WhyChooseUs from "@/sections/WhyChooseUs";
import PortfolioShowcase from "@/sections/Portfolio/PortfolioShowcase";
import CaseStudiesShowcase from "@/sections/CaseStudies/CaseStudiesShowcase";
import TestimonialsNews from "@/sections/TestimonialsNews/TestimonialsNews";

export default function Home() {
  return (
    <main className="min-h-screen w-full min-w-0 overflow-x-hidden bg-white">
      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= ABOUT ================= */}
      <About />

      {/* ================= OUR CLIENTS ================= */}
      <OurClients />

      {/* ================= WHY CHOOSE US ================= */}
      <WhyChooseUs />

      {/* ================= SERVICES ================= */}
      <Services />

      {/* ================= PORTFOLIO ================= */}
      <PortfolioShowcase />

      {/* ================= CASE STUDIES ================= */}
      <CaseStudiesShowcase />

      {/* ================= TESTIMONIALS & NEWS ================= */}
      <TestimonialsNews />
    </main>
  );
}