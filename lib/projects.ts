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
  {
    name: "Resume Generator",
    description:
      "A focused resume-building experience that turns structured information into a polished, shareable document.",
    story:
      "I built Resume Generator as a self-learning project to make the gap between raw experience and a finished resume feel smaller. AI was part of the building process as a collaborator for exploring implementation ideas, checking edge cases, and tightening the user flow; I still made the product decisions and verified the behavior myself. The project gave me practice turning a practical problem into a clear interface with useful output.",
    language: "AI-assisted build",
    context: "Self-learning project",
    source: "Amor-Self-learning",
    url: "https://github.com/Amor-Self-learning/resume-generator",
    livePreview: "https://resume-generator-en.vercel.app",
  },
  {
    name: "Model Metric",
    description:
      "A web tool for exploring model metrics and making evaluation results easier to read and compare.",
    story:
      "Model Metric grew from the need to make model evaluation feel less like a wall of numbers. I used AI during development to help reason through the product structure, generate implementation starting points, and review places where the interface could be clearer, then shaped and tested the final experience myself. Building it helped me connect my interest in intelligent systems with the everyday discipline of presenting technical results well.",
    language: "AI-assisted build",
    context: "Independent project",
    source: "ZephyrAmmor",
    url: "https://github.com/ZephyrAmmor/model_metric",
    livePreview: "https://modelmetric.vercel.app",
  },
  {
    name: "Base64 Toolkit",
    description:
      "A small browser toolkit for encoding and decoding Base64 without sending the work away from the page.",
    story:
      "I built Base64 Toolkit around a simple utility that should be quick to understand and quick to use. AI helped me move faster while building it by suggesting interface details, checking edge cases around input and output, and acting as a second pair of eyes during refinement; the final behavior and decisions remained mine to test. It is a compact project, but it reflects the same preference for useful tools with a calm, direct interface.",
    language: "AI-assisted build",
    context: "Utility project",
    source: "amor-projects",
    url: "https://github.com/amor-projects/base64-toolkit",
    livePreview: "https://best-base64-toolkit.vercel.app",
  },
];

export const featuredProjects = projects;
