interface IndicatorProps {
  steps: any[];
  currentStep: number;
  onDotClick: (index: number) => void;
}

function Indicator({ steps, currentStep, onDotClick }: IndicatorProps) {
  return (
    <>
      {steps.map((s: any, index: number) => (
        <button
          type="button"
          key={s.title}
          onClick={() => onDotClick(index)}
          className={`buttonCircle w-3 h-3 rounded-full  ${index === currentStep ? "bg-black" : "bg-slate-300"}`}
        ></button>
      ))}
    </>
  );
}

export default Indicator;
