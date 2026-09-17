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
      "A full-stack web development course covering React, Node.js, APIs, testing, and databases.",
    status: "Completed",
    url: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/34241ac4cf87258ea9087e0b8d64d33e",
  },
  {
    name: "Full Stack Open: TypeScript",
    provider: "MOOC.fi",
    description:
      "A TypeScript course focused on typed application development and modern web programming.",
    status: "Completed",
    url: "https://courses.mooc.fi/certificates/validate/3dpfyznkuen7ztz",
  },
  {
    name: "CS50X",
    provider: "Harvard University",
    description:
      "An introduction to computer science and the art of programming.",
    status: "Completed",
    url: "https://cs50.harvard.edu/certificates/3768dc0f-8ae8-490e-bc75-eef7091b43e3",
  },
  {
    name: "Java Programming I",
    provider: "MOOC.fi",
    description:
      "The first course in Java programming fundamentals and object-oriented programming.",
    status: "Completed",
    url: "https://certificates.mooc.fi/validate/ylzh8nyw4h",
  },
  {
    name: "Java Programming II",
    provider: "MOOC.fi",
    description:
      "The second course in Java programming, continuing into object-oriented application development.",
    status: "Completed",
    url: "https://certificates.mooc.fi/validate/7o2ok9l1dsf",
  },
];
