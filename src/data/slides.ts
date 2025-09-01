export interface ISlide {
  question: string;
  followUpQuestions: string;
  answer: string;
}

export const slides: ISlide[] = [
  {
    question: "What is the vision?",
    followUpQuestions: "What needs to change? Why?",
    answer:
      "Our vision is to create a world where high-quality technology is freely accessible, empowering developers and organizations to innovate without barriers. We aim to become a trusted source of open-source solutions that combine security, scalability, and creativity.",
  },
  {
    question: "Goals and tasks",
    followUpQuestions: "What use cases and goals are we focused on?",
    answer:
      "We focus on building high-quality open-source projects that empower developers, improve workflow efficiency, and provide secure, scalable solutions across multiple technologies and domains. As our team grows, we aim to expand into a wide range of projects across industries.",
  },
  {
    question: "Who do we serve?",
    followUpQuestions: "Who are our target users and clients?",
    answer:
      "Our primary audience includes developers who benefit from our open-source tools, as well as organizations seeking reliable partners for outsourced projects. We aim to attract talented programmers to join us in building scalable, high-performance solutions for enterprise clients.",
  },
  {
    question: "What makes us different?",
    followUpQuestions: "Why should developers and organizations choose us?",
    answer:
      "We prioritize speed of development, clean and well-tested code, and strong performance. Beyond open-source releases, we provide professional support and commercial versions of our tools, ensuring both innovation and reliability for our community and enterprise partners.",
  },
  {
    question: "How do we generate revenue?",
    followUpQuestions:
      "If open-source is free, how do we sustain the business?",
    answer:
      "While our open-source projects are free for everyone, we offer commercial versions with advanced features, enterprise support, and customization options. Additionally, we take on outsourced projects for organizations, leveraging our expertise to deliver high-quality solutions.",
  },
  {
    question: "What are our core values?",
    followUpQuestions: "What principles guide the way we work?",
    answer:
      "We stand for freedom, transparency, and collaboration. At the same time, we are committed to security, performance, and continuous improvement. These values guide both our open-source contributions and our commercial partnerships.",
  },
  {
    question: "What is the long-term plan?",
    followUpQuestions: "Where do we see ourselves in the future?",
    answer:
      "Our long-term goal is to build a strong open-source ecosystem while becoming a trusted technology partner for organizations worldwide. By attracting and nurturing talented developers, we plan to grow into a company that delivers impactful software solutions across many domains.",
  },
];
