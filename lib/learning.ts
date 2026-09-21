import { certifications } from "@/lib/certifications";

export type LearningActivity = {
  name: string;
  provider: string;
  description: string;
  status: "Completed" | "In progress";
  url?: string;
};

export const learningActivities: LearningActivity[] = [
  {
    name: "CS50x",
    provider: "Harvard University",
    description:
      "The first serious pass at computer science fundamentals: abstraction, algorithms, memory, data structures, and the habits of problem solving.",
    status: "Completed",
    url: "https://cs50.harvard.edu/certificates/3768dc0f-8ae8-490e-bc75-eef7091b43e3",
  },
  {
    name: "Java Programming I & II",
    provider: "MOOC.fi",
    description:
      "A sustained introduction to Java, object-oriented design, testing, collections, and building larger programs one concept at a time.",
    status: "Completed",
    url: "https://courses.mooc.fi/",
  },
  {
    name: "Full Stack Open",
    provider: "University of Helsinki",
    description:
      "A practical path through React, Node.js, APIs, testing, TypeScript, and databases, with working applications as the main feedback loop.",
    status: "Completed",
    url: "https://fullstackopen.com/en/",
  },
  {
    name: "The Odin Project",
    provider: "Open curriculum",
    description:
      "Project-led web development practice that made HTML, CSS, JavaScript, Git, and React feel like tools for making things rather than isolated topics.",
    status: "In progress",
    url: "https://www.theodinproject.com/",
  },
];

export const learningCertificates = certifications;
