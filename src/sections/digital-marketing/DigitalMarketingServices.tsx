import { digitalMarketingServices } from "@/data/digitalMarketing";

export default function DigitalMarketingServices() {
  return (
    <section className="w-full bg-white py-5 sm:py-7 lg:py-9">
      <div className="mx-auto w-full max-w-[1400px] px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <div className="w-full">
          {digitalMarketingServices.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="py-4 sm:py-5"
              >
                {/* HEADING */}
                <div className="flex items-center gap-3">
                  <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#17245C]/8 text-[#F04D02]">
                    <Icon
                      size={16}
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="text-[16px] font-semibold leading-[1.3] text-[#222] sm:text-[18px]">
                    {service.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-2 w-full text-[13px] font-normal leading-[1.6] text-[#666] sm:text-[14px]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}