import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/services/Services";
import OurClients from "@/sections/OurClients";
import WhyChooseUs from "@/sections/WhyChooseUs";
import PortfolioShowcase from "@/sections/Portfolio/PortfolioShowcase";
import CaseStudiesShowcase from "@/sections/CaseStudies/CaseStudiesShowcase";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Our Clients Section */}
      <OurClients />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Services Section */}
      <Services />

      {/* Portfolio Section */}
      <PortfolioShowcase />

      {/* Case Studies Section */}
      <CaseStudiesShowcase />
    </main>
  );
}