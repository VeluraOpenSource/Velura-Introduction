import type React from 'react';
import type { ISlide } from '../../data/slides';

export const Answer: React.FC<Pick<ISlide, 'answer'>> = ({ answer }) => {
  return (
    <div className="full-page center-section">
      <p data-aos="zoom-in" className="paragraph">
        {answer}
      </p>
    </div>
  );
};
