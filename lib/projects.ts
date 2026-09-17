export type ProjectGroup =
  | "Selected work"
  | "Self-learning"
  | "University coursework";

export type Project = {
  name: string;
  description: string;
  language?: string;
  group: ProjectGroup;
  source: string;
  url: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Rainify",
    description:
      "A weather experience focused on making forecast information feel clear, visual, and easy to return to.",
    language: "JavaScript",
    group: "Selected work",
    source: "amor-projects",
    url: "https://github.com/amor-projects/Rainify",
    featured: true,
  },
  {
    name: "Library Management System",
    description:
      "A university-level system modeling books, members, borrowing rules, reservations, fines, roles, and book categories.",
    language: "Java",
    group: "Selected work",
    source: "amor-projects",
    url: "https://github.com/amor-projects/library-management-system",
    featured: true,
  },
  {
    name: "WeatherCLI",
    description:
      "A C++ command-line weather tool with static and live modes, JSON parsing, API support, and forecast views.",
    language: "C++",
    group: "Selected work",
    source: "amor-projects",
    url: "https://github.com/amor-projects/weather-cli",
    featured: true,
  },
  {
    name: "Odin",
    description:
      "A single home for projects completed while working through The Odin Project curriculum.",
    language: "JavaScript",
    group: "Self-learning",
    source: "ZephyrAmmor",
    url: "https://github.com/ZephyrAmmor/Odin",
  },
  {
    name: "Shopping Cart",
    description:
      "A React shopping cart project built while working through structured web development study.",
    language: "JavaScript",
    group: "Self-learning",
    source: "Amor-Self-learning",
    url: "https://github.com/Amor-Self-learning/shopping-cart",
  },
  {
    name: "Memory Card",
    description:
      "A memory card game project focused on state, interaction, and component-driven UI.",
    language: "JavaScript",
    group: "Self-learning",
    source: "Amor-Self-learning",
    url: "https://github.com/Amor-Self-learning/memory-card",
  },
  {
    name: "Resume Generator",
    description:
      "A React application for generating a resume from structured user input.",
    language: "JavaScript",
    group: "Self-learning",
    source: "Amor-Self-learning",
    url: "https://github.com/Amor-Self-learning/resume-generator",
  },
  {
    name: "dropDown",
    description:
      "A small dropdown menu package created as part of an Odin Project exercise.",
    language: "JavaScript",
    group: "Self-learning",
    source: "ZephyrAmmor",
    url: "https://github.com/ZephyrAmmor/dropDown",
  },
  {
    name: "Full Stack Open",
    description:
      "A single repository containing the projects and exercises completed through the Full Stack Open course.",
    group: "Self-learning",
    source: "Amor-Self-learning",
    url: "https://github.com/Amor-Self-learning/FSO",
  },
  {
    name: "Programming Fundamentals",
    description:
      "Practice, assignments, and projects from first-semester Programming Fundamentals with C++.",
    language: "C++",
    group: "University coursework",
    source: "uni-course-work",
    url: "https://github.com/uni-course-work/PF-1st-sem-CPP",
  },
  {
    name: "Object-Oriented Programming",
    description:
      "Coursework and practice for learning object-oriented programming with Java.",
    language: "Java",
    group: "University coursework",
    source: "uni-course-work",
    url: "https://github.com/uni-course-work/OOP-2nd-sem-JAVA",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
