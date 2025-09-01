import "./App.css";
import "aos/dist/aos.css";

import React from "react";
import AOS from "aos";

import { GoalsAndTasksAnswer } from "./components/slides/GoalsAndTasksAnswer.component";
import { GoalsAndTasksQuestion } from "./components/slides/GoalsAndTasksQuestion.component";
import { Introduction } from "./components/slides/Introduction.component";
import { VisionAnswer } from "./components/slides/VisionAnswer.component";
import { VisionQuestion } from "./components/slides/VisionQuestion.component";
import { TheEnd } from "./components/slides/TheEnd.component";

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 100,
    });
  }, []);

  return (
    <div>
      <Introduction />
      <VisionQuestion />
      <VisionAnswer />
      <GoalsAndTasksQuestion />
      <GoalsAndTasksAnswer />
      <TheEnd />
    </div>
  );
}

export default App;
