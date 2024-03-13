import "./App.css";
import { useState } from "react";
import Card from "./components/Card";

import time_managment from "./assets/time_managment.svg";
import programming from "./assets/programming.svg";
import meditation from "./assets/meditation.svg";

const tutorialData = [
  {
    title: "Dedica muchas horas",
    description:
      "Una pauta esencial es saber organizar el tiempo. Cuando estamos trabajando tendemos a tener multitud de cometidos. Crea un horario y cúmplelo. Y además elabora listas donde establezcas un orden de importancia entre estas. Utiliza la técnica de pirámide invertida y ve de lo más esencial a lo menos relevante Por otro lado, según vayas cumpliendo los objetivos escritos ve marcándolos para que puedas ver tus progresos.",
    bgColor: "bg-cyan-500",
    image: time_managment,
  },
  {
    title: "Programa proyectos propios",
    description:
      "Postergar una tarea genera retrasos y con ellos se reduce la productividad. Además, puede suponer conflictos con otras personas creándose tensiones en el trajo. Y a nivel personal la acumulación de cometidos con fecha de entrega generan estrés y ansiedad, así como frustración cuando no logramos combatir esta tendencia a aplazar las tareas.",
    bgColor: "bg-slate-200",
    image: programming,
  },
  {
    title: "Procura descansar",
    description:
      "Una alimentación saludable es esencial para dormir bien. Descansar bien y llevar una buena alimentación son un buen antídoto contra el cansancio y la fatiga.",
    bgColor: "bg-amber-300",
    image: meditation,
  },
];

export default function App() {
  const [step, setStep] = useState(0);
  const currentStep = tutorialData[step];

  const handleClickNext = () => {
    setStep(step + 1);
  };

  const handleClickPrevious = () => {
    setStep(step - 1);
  };

  const handleClickIndicator = (index: number) => setStep(index);

  return (
    <Card
      key={currentStep.title}
      onClickNext={handleClickNext}
      onClickPrevious={handleClickPrevious}
      steps={tutorialData}
      step={step}
      title={currentStep.title}
      imageSource={currentStep.image}
      description={currentStep.description}
      bgColor={currentStep.bgColor}
      onClickIndicator={handleClickIndicator}
    />
  );
}
