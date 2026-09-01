import Image from "next/image";
import {
  BadgeCheck,
  HeartHandshake,
  Target,
  ChartNoAxesCombined,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

import { socialMediaServices } from "@/data/socialMediaMarketing";

export default function SocialMediaServices() {
  const pointIcons = [
    BadgeCheck,
    Target,
    HeartHandshake,
    ChartNoAxesCombined,
  ];

  const getServiceIcon = (title: string) => {
    const iconClass = "h-[20px] w-[20px] shrink-0 text-[#F04D02]";

    if (title.toLowerCase().includes("facebook")) {
      return <FaFacebookF className={iconClass} />;
    }

    if (title.toLowerCase().includes("instagram")) {
      return <FaInstagram className={iconClass} />;
    }

    if (title.toLowerCase().includes("linkedin")) {
      return <FaLinkedinIn className={iconClass} />;
    }

    if (title.toLowerCase().includes("youtube")) {
      return <FaYoutube className={iconClass} />;
    }

    if (title.toLowerCase().includes("pinterest")) {
      return <FaPinterestP className={iconClass} />;
    }

    if (title.toLowerCase().includes("twitter")) {
      return <FaTwitter className={iconClass} />;
    }

    return <BadgeCheck className={iconClass} />;
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ================= WHAT WE DO ================= */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[30px] font-normal tracking-wide text-[#263B5A] sm:text-[36px] lg:text-[40px]">
              {socialMediaServices.title}
            </h2>

            {/* POINTS */}
            <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-7 sm:grid-cols-2 lg:mt-16">
              {socialMediaServices.points.map((point, index) => {
                const Icon = pointIcons[index] || BadgeCheck;

                return (
                  <div
                    key={point}
                    className="flex items-center gap-4"
                  >
                    <Icon className="h-[20px] w-[20px] shrink-0 text-[#F04D02]" />

                    <p className="text-[16px] font-normal text-[#4B5563] lg:text-[17px]">
                      {point}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex h-[260px] w-full items-center justify-center sm:h-[320px] lg:h-[360px]">
            <Image
              src={socialMediaServices.image}
              alt={socialMediaServices.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* ================= ADVERTISING SERVICES ================= */}
        <div className="mt-14 pt-6 sm:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 gap-x-20 gap-y-14 md:grid-cols-2 lg:gap-x-28 lg:gap-y-16">
            {socialMediaServices.services.map((service) => (
              <div key={service.title}>
                {/* TITLE */}
                <div className="flex items-center gap-4">
                  {getServiceIcon(service.title)}

                  <h3 className="text-[20px] font-bold text-[#263B5A] sm:text-[21px]">
                    {service.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-3 text-[15px] leading-[1.9] text-[#56606B] sm:text-[16px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}