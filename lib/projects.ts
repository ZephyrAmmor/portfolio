export type Project = {
  name: string;
  description: string;
  story: string;
  language?: string;
  context: string;
  source: string;
  url: string;
  livePreview?: string;
};

export const projects: Project[] = [
  {
    name: "Rainify",
    description:
      "A weather experience focused on making forecast information feel clear, visual, and easy to return to.",
    story:
      "I built Rainify during the break after my first semester to turn a familiar API exercise into a complete web experience. I kept it deliberately framework-free: vanilla JavaScript renders the weather views, CSS handles the responsive layout and motion, and small modules separate location, API requests, formatting, and UI components. The result taught me how much clarity comes from good boundaries, not just from adding features.",
    language: "JavaScript",
    context: "Built after first semester",
    source: "amor-projects",
    url: "https://github.com/amor-projects/Rainify",
    livePreview: "https://rainify-weather.vercel.app",
  },
  {
    name: "Library Management System",
    description:
      "A university-level system modeling books, members, borrowing rules, reservations, fines, roles, and book categories.",
    story:
      "This was our second-semester OOP project: a console application for the everyday work of a library. I worked through the domain model as a set of cooperating classes, using inheritance and polymorphism for book and user types, a text UI for interaction, and a separate storage layer for CSV persistence. The interesting part was making rules such as availability, borrowability, renewals, and fines live in the model instead of scattering them through menu code.",
    language: "Java",
    context: "OOP final project, second semester",
    source: "amor-projects",
    url: "https://github.com/amor-projects/library-management-system",
  },
  {
    name: "WeatherCLI",
    description:
      "A C++ command-line weather tool with static and live modes, JSON parsing, API support, and forecast views.",
    story:
      "WeatherCLI was my first-semester Programming Fundamentals final project. I used it to practice turning a loose feature list into a small, understandable C++ program: one module parses and validates command-line arguments, live and static modes provide data, JSON is parsed with nlohmann/json, and a formatter owns terminal output. Supporting both live API data and an offline JSON mode made the project feel useful while forcing me to think about failure paths and separation of concerns.",
    language: "C++",
    context: "Programming Fundamentals final project, first semester",
    source: "amor-projects",
    url: "https://github.com/amor-projects/weather-cli",
  },
];

export const featuredProjects = projects;
