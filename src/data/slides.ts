export interface ISlide {
  question: string;
  followUpQuestions: string;
  answer: string;
}

export const slides: ISlide[] = [
  {
    question: "what is the vision?",
    followUpQuestions: "What needs to change? Why?",
    answer:
      "Our vision is to create a world where high-quality technology is freely accessible, empowering developers and organizations to innovate without barriers. We aim to become a trusted source of open-source solutions that combine security, scalability, and creativity.",
  },
  {
    question: "goals and tasks",
    followUpQuestions: "What use cases and goals are we focused on?",
    answer:
      "we focus on building high-quality open-source projects that empower developers, improve workflow efficiency, and provide secure, scalable solutions across multiple technologies and domains.",
  },
];
