"use client";

interface PortfolioFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function PortfolioFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: PortfolioFilterProps) {
  return (
    <div className="w-full">
      <div className="flex w-full flex-wrap items-center gap-2 sm:gap-3 md:gap-3 lg:gap-4">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              aria-pressed={isActive}
              className={`shrink-0 rounded-br-[14px] border px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[1.1px] transition-colors duration-300 sm:px-5 sm:py-3 sm:text-[10px] sm:tracking-[1.2px] md:px-6 md:text-[11px] ${
                isActive
                  ? "border-[#F04D02] bg-[#F04D02] text-white"
                  : "border-[#dfe3ea] bg-white text-[#17316a] hover:border-[#F04D02] hover:text-[#F04D02]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}