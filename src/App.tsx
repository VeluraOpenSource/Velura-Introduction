import "./App.css";
import { GoalsAndTasksQuestion } from "./components/slides/GoalsAndTasksQuestion.component";
import { Introduction } from "./components/slides/Introduction.component";
import { VisionAnswer } from "./components/slides/VisionAnswer.component";
import { VisionQuestion } from "./components/slides/VisionQuestion.component";

function App() {
  return (
    <div>
      <Introduction />
      <VisionQuestion />
      <VisionAnswer />
      <GoalsAndTasksQuestion />
    </div>
  );
}

export default App;
