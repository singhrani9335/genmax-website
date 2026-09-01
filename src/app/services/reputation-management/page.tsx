import ReputationManagementHero from "@/sections/ReputationManagement/ReputationManagementHero";
import ReputationManagementIntro from "@/sections/ReputationManagement/ReputationManagementIntro";
import ReputationManagementServices from "@/sections/ReputationManagement/ReputationManagementServices";
import ReputationManagementTools from "@/sections/ReputationManagement/ReputationManagementTools";
import ReputationManagementStrategy from "@/sections/ReputationManagement/ReputationManagementStrategy";
import ReputationManagementProcess from "@/sections/ReputationManagement/ReputationManagementProcess";
import ReputationManagementFaq from "@/sections/ReputationManagement/ReputationManagementFaq";

export default function ReputationManagementPage() {
  return (
    <main className="w-full">
      {/* ================= HERO ================= */}
      <ReputationManagementHero />

      {/* ================= INTRO ================= */}
      <ReputationManagementIntro />

      {/* ================= WHAT WE DO ================= */}
      <ReputationManagementServices />

      {/* ================= TOOLS ================= */}
      <ReputationManagementTools />

      {/* ================= STRATEGY ================= */}
      <ReputationManagementStrategy />

      {/* ================= PROCESS ================= */}
      <ReputationManagementProcess />

      {/* ================= FAQ ================= */}
      <ReputationManagementFaq />
    </main>
  );
}