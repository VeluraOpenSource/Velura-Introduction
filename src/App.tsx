import './App.css';
import 'aos/dist/aos.css';

import React from 'react';
import AOS from 'aos';

import { Introduction } from './components/slides/Introduction.component';
import { TheEnd } from './components/slides/TheEnd.component';
import { slides } from './data/slides';
import { Question } from './components/QA/Question.component';
import { Answer } from './components/QA/Answer.component';

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

      {slides.map((el, index) => (
        <React.Fragment key={`slide-${index}`}>
          <Question
            question={el.question}
            followUpQuestions={el.followUpQuestions}
          />
          <Answer answer={el.answer} />
        </React.Fragment>
      ))}

      <TheEnd />
    </div>
  );
}

export default App;
