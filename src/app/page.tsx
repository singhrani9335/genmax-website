import Navbar from "@/components/Navbar";

import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Pricing from "@/sections/Pricing";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}