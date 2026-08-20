"use client";

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-white py-10 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1450px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid items-center gap-3 lg:grid-cols-[44%_56%] lg:gap-0">

          {/* LEFT — IMAGE */}
          <div className="relative order-2 -mt-3 lg:order-1 lg:-mt-6 lg:pr-4 xl:pr-6">
            <div className="relative h-[320px] w-[92%] overflow-hidden rounded-[28px] sm:h-[370px] lg:h-[410px] xl:h-[440px]">
              <img
                src="/images/why.webp"
                alt="Why Choose Us"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="relative z-10 order-1 lg:order-2 lg:-ml-2">

            {/* MAIN HEADING */}
            <h2 className="whitespace-nowrap text-[30px] font-normal leading-[1.15] tracking-[-1px] text-[#34405A] sm:text-[36px] lg:text-[40px] xl:text-[44px]">
              Why <span className="text-[#C75B7C]">Choose Us</span>
            </h2>

            {/* SUB HEADING */}
            <h3 className="mt-3 whitespace-nowrap text-[17px] font-medium leading-[1.3] text-[#34405A] sm:text-[19px] lg:text-[21px]">
              Cast Off Towards Success - Let Us Be Your Guiding Hand
            </h3>

            {/* NORMAL TEXT */}
            <p className="mt-4 max-w-[600px] text-[14px] leading-[1.6] text-[#64748B] sm:text-[15px]">
              For ten years, we&apos;ve honed our craft in digital marketing
              to bring you the best solutions. Our secret? A people-first
              approach and a commitment to deliver uncompromising quality.
              Our results speak for themselves: polished, professional and
              in a class of their own.
            </p>

            <p className="mt-3 max-w-[600px] text-[14px] leading-[1.6] text-[#64748B] sm:text-[15px]">
              Our team of skilled professionals combines creativity,
              innovation, and cutting-edge technology to craft customized
              solutions tailored to your unique business needs. Join forces
              with us and watch our collaboration take you to new heights
              of accomplishment.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}