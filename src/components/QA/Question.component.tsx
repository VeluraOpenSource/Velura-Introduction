import type React from "react";

interface QuestionProps {
  question: string;
  followUpQuestions: string;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  followUpQuestions,
}) => {
  return (
    <div className="full-page center-section">
      <h2 data-aos="fade-right" className="heading">
        {question}
      </h2>
      <p data-aos="fade-left" className="paragraph">
        {followUpQuestions}
      </p>
    </div>
  );
};
