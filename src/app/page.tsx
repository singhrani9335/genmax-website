
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import OurClients from "@/sections/OurClients";
import WhyChooseUs from "@/sections/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Hero />
      <About />
      <OurClients />
      <WhyChooseUs />
    </main>
  );
}