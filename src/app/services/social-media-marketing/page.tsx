import SocialMediaHero from "@/sections/SocialMediaMarketing/SocialMediaHero";
import SocialMediaIntro from "@/sections/SocialMediaMarketing/SocialMediaIntro";
import SocialMediaServices from "@/sections/SocialMediaMarketing/SocialMediaServices";
import SocialMediaTools from "@/sections/SocialMediaMarketing/SocialMediaTools";
import SocialMediaProcess from "@/sections/SocialMediaMarketing/SocialMediaProcess";
import SocialMediaFaq from "@/sections/SocialMediaMarketing/SocialMediaFaq";

export default function SocialMediaMarketingPage() {
  return (
    <main className="w-full">
      <SocialMediaHero />

      <SocialMediaIntro />

      <SocialMediaServices />

      {/* SOCIAL MEDIA TOOLS */}
      <SocialMediaTools />

      {/* OUR PROCESS */}
      <SocialMediaProcess />

      <SocialMediaFaq />
    </main>
  );
}