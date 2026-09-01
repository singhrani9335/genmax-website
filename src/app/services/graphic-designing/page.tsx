import Navbar from "@/components/navbar/Navbar";

import GraphicDesigningHero from "@/sections/GraphicDesigning/GraphicDesigningHero";
import GraphicDesigningIntro from "@/sections/GraphicDesigning/GraphicDesigningIntro";
import GraphicDesigningWhatWeDo from "@/sections/GraphicDesigning/GraphicDesigningWhatWeDo";
import GraphicDesigningStrategy from "@/sections/GraphicDesigning/GraphicDesigningStrategy";
import GraphicDesigningProcess from "@/sections/GraphicDesigning/GraphicDesigningProcess";
import GraphicDesigningFaq from "@/sections/GraphicDesigning/GraphicDesigningFaq";

export default function GraphicDesigningPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ================= HERO ================= */}
        <GraphicDesigningHero />

        {/* ================= INTRO ================= */}
        <GraphicDesigningIntro />

        {/* ================= WHAT WE DO ================= */}
        <GraphicDesigningWhatWeDo />

        {/* ================= STRATEGY ================= */}
        <GraphicDesigningStrategy />

        {/* ================= PROCESS ================= */}
        <GraphicDesigningProcess />

        {/* ================= FAQ ================= */}
        <GraphicDesigningFaq />

        
      </main>
    </>
  );
}