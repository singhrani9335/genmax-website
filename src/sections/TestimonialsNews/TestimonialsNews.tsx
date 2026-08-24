import TestimonialCard from "./TestimonialCard";
import NewsCard from "./NewsCard";

export default function TestimonialsNews() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid w-full grid-cols-1 items-start gap-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-24">
          <div className="min-w-0 w-full">
            <TestimonialCard />
          </div>

          <div className="min-w-0 w-full">
            <NewsCard />
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-full bg-[#e9edf2]"
      />
    </section>
  );
}