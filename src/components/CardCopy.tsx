import Indicator from "./Indicator";

interface CardProps {
  title: string;
  description: string;
  bgColor?: string;
  imageSource: string;
  onClickNext: () => void;
  onClickPrevious: () => void;
  totalSteps: number;
  step: number;
  setStep: number;
  currentCardData: number;
  buttonColor: string;
}

export default function Card({
  title,
  description,
  bgColor,
  imageSource,
  onClickPrevious,
  onClickNext,
  totalSteps,
  step,
  setStep,
  currentCardData,
  buttonColor,
}: CardProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <img
        className={`rounded-t-lg ${bgColor}`}
        src={imageSource}
        alt="persona meditando"
      />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <div className="space-x-3">
          <button
            type="button"
            className={`buttonCircle w-3 h-3 rounded-full ${buttonColor} bg-black`}
          ></button>
          <button
            type="button"
            className={`buttonCircle w-3 h-3 rounded-full  ${buttonColor} bg-slate-300`}
          ></button>
          <button
            type="button"
            className={`buttonCircle w-3 h-3 rounded-full ${buttonColor} bg-slate-300`}
          ></button>
        </div>
        <div className="flex gap-3 justify-end">
          {true ? <div>test</div> : null}

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
        </div>
      </div>
    </div>
  );
}
