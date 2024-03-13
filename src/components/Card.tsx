import Indicator from "./Indicator";

interface CardProps {
  title: string;
  description: string;
  bgColor?: string;
  imageSource: string;
  onClickNext: () => void;
  onClickPrevious: () => void;
  steps: any[];
  step: number;
  onClickIndicator: (index: number) => void;
}

export default function Card({
  title,
  description,
  bgColor,
  imageSource,
  onClickPrevious,
  onClickNext,
  steps,
  step,
  onClickIndicator,
}: CardProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <img className={`rounded-t-lg ${bgColor}`} src={imageSource} alt="persona meditando" />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <div className="space-x-3">
          <Indicator steps={steps} currentStep={step} onDotClick={onClickIndicator} />
        </div>
        <div className="flex gap-3 justify-end">
          {step !== 0 ? (
            <button
              type="button"
              onClick={onClickPrevious}
              className="flex items-center justify-center h-full cursor-pointer group focus:outline-none"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white group-hover:bg-slate-700 group-focus:ring-4 group-focus:ring-slate-300 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-black rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
          ) : null}

          {step !== steps.length - 1 ? (
            <button
              type="button"
              onClick={onClickNext}
              className="flex items-center justify-center h-full cursor-pointer group focus:outline-none"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-950 group-hover:bg-slate-700 group-focus:ring-4 group-focus:ring-slate-300 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
