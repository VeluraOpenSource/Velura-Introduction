import type React from "react";
import type { ISlide } from "../../data/slides";

export const Question: React.FC<
  Pick<ISlide, "question" | "followUpQuestions">
> = ({ question, followUpQuestions }) => {
  return (
    <div className="full-page center-section">
      <h2 data-aos="fade-right" className="heading">
        <div className="line"></div>
        {question}
      </h2>
      <p data-aos="fade-left" className="paragraph">
        {followUpQuestions}
      </p>
    </div>
  );
};
