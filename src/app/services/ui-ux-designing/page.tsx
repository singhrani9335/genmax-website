import UIUXDesigningHero from "@/sections/UIUXDesigning/UIUXDesigningHero";
import UIUXDesigningIntro from "@/sections/UIUXDesigning/UIUXDesigningIntro";
import UIUXDesigningServices from "@/sections/UIUXDesigning/UIUXDesigningServices";
import UIUXDesigningStrategy from "@/sections/UIUXDesigning/UIUXDesigningStrategy";
import UIUXDesigningProcess from "@/sections/UIUXDesigning/UIUXDesigningProcess";
import UIUXDesigningFaq from "@/sections/UIUXDesigning/UIUXDesigningFaq";

export default function UIUXDesigningPage() {
  return (
    <main className="w-full">
      {/* ================= HERO ================= */}
      <UIUXDesigningHero />

      {/* ================= INTRO ================= */}
      <UIUXDesigningIntro />

      {/* ================= WHAT WE DO ================= */}
      <UIUXDesigningServices />

      {/* ================= STRATEGY / SERVICES ================= */}
      <UIUXDesigningStrategy />

      {/* ================= PROCESS ================= */}
      <UIUXDesigningProcess />

      {/* ================= FAQ ================= */}
      <UIUXDesigningFaq />
    </main>
  );
}