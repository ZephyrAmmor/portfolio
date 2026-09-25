import { certifications } from "@/lib/certifications";

export type LearningChapter = {
  title: string;
  body: string;
  takeaway: string;
};

export const learningChapters: LearningChapter[] = [
  {
    title: "The first attempt did not go very far",
    body: "I started exploring computers about two and a half years ago. When I tried CS50x for the first time, I could not follow even the third lecture. That was useful information, even if it did not feel useful then: I was interested in computer science, but I did not yet have enough of a foundation to study it well.",
    takeaway:
      "The gap was not a lack of curiosity. I needed a better way into the subject.",
  },
  {
    title: "The Odin Project gave me a way to practice",
    body: "About fourteen months ago, I started The Odin Project. Its projects gave me a base in HTML, CSS, JavaScript, Git, and React, but the more important change was learning to stay with a problem long enough to make something work. I was no longer only watching explanations; I was building small things and meeting the concepts in context.",
    takeaway: "Project work made the vocabulary of programming less abstract.",
  },
  {
    title: "A second pass through CS50x finally held together",
    body: "A year after the first attempt, I returned to CS50x. This time I completed it in four months. The lectures had not become magically easier; I had acquired enough context from building with The Odin Project to understand what the course was asking me to notice: abstraction, memory, algorithms, data structures, and the discipline of debugging.",
    takeaway:
      "Returning to a difficult course was more productive than treating the first failure as a verdict.",
  },
  {
    title: "University widened the foundation",
    body: "At NUML, I am currently in the third semester of a BS in Computer Science. I studied C++ in Programming Fundamentals, then discrete mathematics, calculus, and object-oriented programming in Java. This semester has brought linear algebra, data structures and algorithms, digital logic design, and databases. Proofs are still unfamiliar territory, so I am deliberately practicing them instead of pretending the gap is not there.",
    takeaway:
      "The formal subjects are not separate from programming; they are the slower groundwork beneath it.",
  },
  {
    title: "This summer was about connecting the pieces",
    body: "I completed Full Stack Open parts 0 through 7 and part 9, and worked through all the lectures and problem sets of CS50 SQL. The final SQL project is paused for now because I want to build one substantial database project for my university course and use it there too. I also continued The Odin Project through its React material, with Express currently waiting for another focused stretch of time.",
    takeaway:
      "Courses are most valuable to me when they leave behind a project, a question, or a clearer next step.",
  },
  {
    title: "The current practice is quieter and more deliberate",
    body: "I have been using Linux experimentally for about a year and Fedora consecutively for six months. I am comfortable with the basics of the command line, from navigation and package installation to simple text operations, although scripting and Bash are still areas I need to grow into. VS Code and its extensions are part of my everyday working environment. My small projects include work from The Odin Project and Full Stack Open, a weather app, and CLI projects in C++ and Java.",
    takeaway:
      "I am trying to build dependable habits, not perform expertise I do not have yet.",
  },
  {
    title: "The direction is intelligent systems, broadly understood",
    body: "Artificial intelligence has been my main area of interest from the beginning, but not only through the lens of large language models. I am drawn to the combination of robotics, natural language processing, and computer vision: systems that can perceive, interpret, and act. For now, that means strengthening mathematics, algorithms, software engineering, and the ability to finish useful projects.",
    takeaway:
      "The long-term goal is broad, so the short-term work is foundational.",
  },
];

export const learningCertificates = certifications;
