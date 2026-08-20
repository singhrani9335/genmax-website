"use client";

import { useEffect, useState } from "react";
import { clients } from "@/data/clients";

export default function OurClients() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % clients.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // 3 rows × 5 columns = 15 logos
  const visibleClients = Array.from({ length: 15 }, (_, index) => {
    return clients[(startIndex + index) % clients.length];
  });

  return (
    <section
      id="clients"
      className="relative -mt-2 overflow-hidden bg-white py-10 sm:py-12 lg:-mt-4 lg:py-14"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-stretch lg:grid-cols-[34%_66%]">

          {/* LEFT CONTENT */}
          <div className="relative min-h-[375px] overflow-hidden bg-[#34405A] lg:min-h-[390px]">
            <div className="flex h-full flex-col justify-center pl-16 pr-8 sm:pl-20 lg:pl-24 xl:pl-28">

              <h2 className="text-left text-[32px] font-normal leading-[1.12] tracking-[-1px] text-white sm:text-[36px] lg:text-[40px]">
                Our Clients
              </h2>

              <p className="mt-5 max-w-[350px] text-left text-[13px] leading-[1.65] text-white sm:text-[14px] lg:text-[15px]">
                Trusted by industry leaders, our solutions empower businesses
                to thrive and achieve lasting success with customer
                satisfaction at the core.
              </p>

            </div>
          </div>

          {/* RIGHT — 3 ROWS × 5 COLUMNS */}
          <div className="grid grid-cols-5 overflow-hidden bg-white">
            {visibleClients.map((client) => (
              <div
                key={`${client.name}-${startIndex}`}
                className="flex h-[130px] items-center justify-center border-b border-r border-[#E8E8E8] bg-white px-3"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-h-[65px] max-w-[130px] object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}