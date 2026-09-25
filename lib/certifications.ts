export type Certification = {
  name: string;
  provider: string;
  description: string;
  status: "Completed" | "In progress";
  url: string;
};

export const certifications: Certification[] = [
  {
    name: "Full Stack Open: Parts 0-7",
    provider: "University of Helsinki",
    description:
      "The course that turned web development from a collection of tutorials into applications I could reason about, test, and extend.",
    status: "Completed",
    url: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/34241ac4cf87258ea9087e0b8d64d33e",
  },
  {
    name: "Full Stack Open: TypeScript",
    provider: "MOOC.fi",
    description:
      "A first sustained experience with types as a way to make application boundaries and assumptions more visible.",
    status: "Completed",
    url: "https://courses.mooc.fi/certificates/validate/3dpfyznkuen7ztz",
  },
  {
    name: "CS50X",
    provider: "Harvard University",
    description:
      "The course I had to return to: the second attempt gave me a working foundation in algorithms, memory, and problem solving.",
    status: "Completed",
    url: "https://cs50.harvard.edu/certificates/3768dc0f-8ae8-490e-bc75-eef7091b43e3",
  },
  {
    name: "Java Programming I",
    provider: "MOOC.fi",
    description:
      "A structured introduction to Java, objects, collections, testing, and writing programs one idea at a time.",
    status: "Completed",
    url: "https://certificates.mooc.fi/validate/ylzh8nyw4h",
  },
  {
    name: "Java Programming II",
    provider: "MOOC.fi",
    description:
      "A continuation that made larger object-oriented programs feel less like a jump and more like a sequence of manageable decisions.",
    status: "Completed",
    url: "https://certificates.mooc.fi/validate/7o2ok9l1dsf",
  },
];
