import "./App.css";
import { Introduction } from "./components/slides/Introduction.component";
import { VisionAnswer } from "./components/slides/VisionAnswer.component";
import { VisionQuestion } from "./components/slides/VisionQuestion.component";

function App() {
  return (
    <div>
      <Introduction />
      <VisionQuestion />
      <VisionAnswer />
    </div>
  );
}

export default App;
