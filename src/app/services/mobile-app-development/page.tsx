import MobileAppDevelopmentHero from "@/sections/MobileAppDevelopment/MobileAppDevelopmentHero";
import MobileAppDevelopmentIntro from "@/sections/MobileAppDevelopment/MobileAppDevelopmentIntro";
import MobileAppDevelopmentHighlights from "@/sections/MobileAppDevelopment/MobileAppDevelopmentHighlights";
import MobileAppDevelopmentServices from "@/sections/MobileAppDevelopment/MobileAppDevelopmentServices";
import MobileAppDevelopmentStrategy from "@/sections/MobileAppDevelopment/MobileAppDevelopmentStrategy";
import MobileAppDevelopmentProcess from "@/sections/MobileAppDevelopment/MobileAppDevelopmentProcess";
import MobileAppDevelopmentFaq from "@/sections/MobileAppDevelopment/MobileAppDevelopmentFaq";

export default function MobileAppDevelopmentPage() {
  return (
    <main className="w-full">
      {/* ================= HERO ================= */}
      <MobileAppDevelopmentHero />

      {/* ================= INTRO ================= */}
      <MobileAppDevelopmentIntro />

      {/* ================= HIGHLIGHTS ================= */}
      <MobileAppDevelopmentHighlights />

      {/* ================= WHAT WE DO ================= */}
      <MobileAppDevelopmentServices />

      {/* ================= STRATEGY / MOBILE APP SERVICES ================= */}
      <MobileAppDevelopmentStrategy />

      {/* ================= PROCESS ================= */}
      <MobileAppDevelopmentProcess />

      {/* ================= FAQ ================= */}
      <MobileAppDevelopmentFaq />
    </main>
  );
}