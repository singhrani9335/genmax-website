import WebDevelopmentHero from "@/sections/WebDevelopment/WebDevelopmentHero";
import WebDevelopmentIntro from "@/sections/WebDevelopment/WebDevelopmentIntro";
import WebDevelopmentServices from "@/sections/WebDevelopment/WebDevelopmentServices";
import WebDevelopmentStrategy from "@/sections/WebDevelopment/WebDevelopmentStrategy";
import WebDevelopmentTools from "@/sections/WebDevelopment/WebDevelopmentTools";
import WebDevelopmentProcess from "@/sections/WebDevelopment/WebDevelopmentProcess";

import WebDevelopmentFaq from "@/sections/WebDevelopment/WebDevelopmentFaq";


export default function WebDevelopmentPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* ================= HERO ================= */}
      <WebDevelopmentHero />

      {/* ================= INTRO ================= */}
      <WebDevelopmentIntro />

      {/* ================= WHAT WE DO ================= */}
      <WebDevelopmentServices />

      {/* ================= STRATEGY / CUSTOM SOLUTION ================= */}
      <WebDevelopmentStrategy />

      {/* ================= TECHNOLOGY STACK ================= */}
      <WebDevelopmentTools />

      {/* ================= OUR PROCESS ================= */}
      <WebDevelopmentProcess />

      
      {/* ================= FAQ ================= */}
      <WebDevelopmentFaq />

      
    </main>
  );
}