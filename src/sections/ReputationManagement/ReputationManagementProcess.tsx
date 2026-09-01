import { reputationManagementProcess } from "@/data/reputationManagement";

export default function ReputationManagementProcess() {
  const steps = [
    {
      lineY: 55,
      top: 31,
    },
    {
      lineY: 255,
      top: 231,
    },
    {
      lineY: 455,
      top: 431,
    },
    {
      lineY: 655,
      top: 631,
    },
    {
      lineY: 855,
      top: 831,
    },
  ];

  const MAIN_LINE_X = 560;
  const CIRCLE_X = 625;

  const LEFT_DOT_X = 330;
  const LEFT_VERTICAL_X = 410;

  const TOP_DOT_Y = 140;
  const BOTTOM_DOT_Y = 410;

  return (
    <section className="w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-16 xl:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ================= HEADING ================= */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-[30px] font-normal text-[#17245C] sm:text-[36px] lg:text-[40px]">
            Our Process
          </h2>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="relative mx-auto hidden h-[990px] w-full max-w-[1200px] lg:block">
          {/* ================= BACKGROUND SVG LINES ================= */}
          <svg
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            viewBox="0 0 1200 990"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <style>
                {`
                  .process-line {
                    stroke: #F04D02;
                    stroke-width: 1.5;
                    stroke-dasharray: 5 5;
                    fill: none;
                  }
                `}
              </style>
            </defs>

            {/* LEFT IMAGE CONNECTION */}
            <path
              className="process-line"
              d={`
                M ${LEFT_DOT_X} ${TOP_DOT_Y}
                H ${LEFT_VERTICAL_X}
                V ${BOTTOM_DOT_Y}
                H ${LEFT_DOT_X}
              `}
            />

            {/* LEFT TO MAIN LINE */}
            <path
              className="process-line"
              d={`
                M ${LEFT_VERTICAL_X} 275
                H ${MAIN_LINE_X}
              `}
            />

            {/* MAIN VERTICAL LINE */}
            <path
              className="process-line"
              d={`
                M ${MAIN_LINE_X} ${steps[0].lineY}
                V ${steps[steps.length - 1].lineY}
              `}
            />

            {/* STEP CONNECTION LINES */}
            {steps.map((step, index) => (
              <path
                key={`step-line-${index}`}
                className="process-line"
                d={`
                  M ${MAIN_LINE_X} ${step.lineY}
                  H ${CIRCLE_X}
                `}
              />
            ))}
          </svg>

          {/* ================= LEFT IMAGE CIRCLE ================= */}
          <div className="absolute left-[20px] top-[140px] z-10 flex h-[280px] w-[280px] items-center justify-center overflow-hidden rounded-full border-[8px] border-[#F04D02]/10 bg-[#f7f8fb] shadow-[0_15px_40px_rgba(0,0,0,0.10)]">
            <img
              src="/images/genmax-logo.png"
              alt="GenMax IT Solution"
              className="h-full w-full object-cover"
            />
          </div>

          {/* ================= LEFT DOTS ================= */}
          <svg
            className="pointer-events-none absolute inset-0 z-20 h-full w-full"
            viewBox="0 0 1200 990"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx={LEFT_DOT_X}
              cy={TOP_DOT_Y}
              r="8"
              fill="#F04D02"
            />

            <circle
              cx={LEFT_DOT_X}
              cy={BOTTOM_DOT_Y}
              r="8"
              fill="#F04D02"
            />
          </svg>

          {/* ================= PROCESS STEPS ================= */}
          {reputationManagementProcess.map((step, index) => {
            const position = steps[index];

            if (!position) return null;

            return (
              <div
                key={step.number}
                className="absolute z-30"
                style={{
                  left: `${CIRCLE_X}px`,
                  top: `${position.top}px`,
                }}
              >
                <div className="grid grid-cols-[48px_minmax(0,1fr)] gap-5">
                  {/* NUMBER CIRCLE */}
                  <div className="relative z-10 flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full border border-[#F04D02] bg-white text-[19px] font-normal text-[#F04D02]">
                    {step.number}
                  </div>

                  {/* CONTENT */}
                  <div className="w-[510px] xl:w-[540px]">
                    <h3 className="text-[19px] font-normal uppercase leading-[1.35] tracking-[1px] text-[#17245C] xl:text-[21px]">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-[14px] leading-[1.8] text-[#56606B] xl:text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= MOBILE / TABLET ================= */}
        <div className="relative lg:hidden">
          {/* VERTICAL PROCESS LINE */}
          <div className="absolute bottom-[35px] left-[24px] top-[20px] border-l-[1.5px] border-dashed border-[#F04D02]" />

          <div className="relative space-y-16 sm:space-y-20">
            {reputationManagementProcess.map((step) => (
              <div
                key={step.number}
                className="relative grid grid-cols-[65px_minmax(0,1fr)] gap-3"
              >
                {/* NUMBER CIRCLE */}
                <div className="relative z-10 flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#F04D02] bg-white text-[19px] font-normal text-[#F04D02]">
                  {step.number}
                </div>

                {/* CONTENT */}
                <div className="pb-2">
                  <h3 className="text-[17px] font-normal uppercase leading-[1.4] tracking-[0.8px] text-[#17245C] sm:text-[19px]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.8] text-[#56606B] sm:text-[15px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}