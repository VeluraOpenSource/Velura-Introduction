import type React from "react";

interface AnswerProps {
  answer: string;
}

export const Answer: React.FC<AnswerProps> = ({ answer }) => {
  return (
    <div className="full-page center-section">
      <p data-aos="zoom-in" className="paragraph">
        {answer}
      </p>
    </div>
  );
};
