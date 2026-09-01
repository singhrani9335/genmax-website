import PaidAdsHero from "@/sections/PaidAdsManagement/PaidAdsHero";
import PaidAdsIntro from "@/sections/PaidAdsManagement/PaidAdsIntro";
import PaidAdsServices from "@/sections/PaidAdsManagement/PaidAdsServices";
import PaidAdsCampaigns from "@/sections/PaidAdsManagement/PaidAdsCampaigns";
import PaidAdsTools from "@/sections/PaidAdsManagement/PaidAdsTools";
import PaidAdsProcess from "@/sections/PaidAdsManagement/PaidAdsProcess";
import PaidAdsFaq from "@/sections/PaidAdsManagement/PaidAdsFaq";

export default function PaidAdsManagementPage() {
  return (
    <main className="w-full overflow-hidden bg-white">
      {/* ================= HERO ================= */}
      <PaidAdsHero />

      {/* ================= INTRO ================= */}
      <PaidAdsIntro />

      {/* ================= WHAT WE DO ================= */}
      <PaidAdsServices />

      {/* ================= PPC CAMPAIGNS ================= */}
      <PaidAdsCampaigns />

      {/* ================= PPC TOOLS ================= */}
      <PaidAdsTools />

      {/* ================= OUR PROCESS ================= */}
      <PaidAdsProcess />

      {/* ================= FAQ ================= */}
      <PaidAdsFaq />
    </main>
  );
}