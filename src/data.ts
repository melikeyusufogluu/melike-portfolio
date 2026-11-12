export interface ClientProject {
  name: string;
  /** who the product is for, e.g. "Deutsche Bahn" */
  client: string;
  domain: string;
  url: string;
  /** short text shown on the link, e.g. "bahn.de" */
  linkLabel: string;
  description: string;
}

export interface Company {
  company: string;
  role: string;
  location: string;
  period: string;
  intro: string;
  projects: ClientProject[];
  /** key results, shown as big numbers */
  highlights: { value: string; label: string }[];
}

export const profile = {
  firstName: "Melike",
  lastName: "Yusufoglu",
  title: "Senior Frontend Developer",
  location: "Stuttgart, Germany",
  email: "melikeyusufoglu96@gmail.com",
  linkedin: "https://www.linkedin.com/in/melike-yusufoglu/",
  github: "https://github.com/melikeyusufogluu",
  resume: "/MelikeYusufogluResume.pdf",
  photo: "/melike.jpg",
  lead: "Frontend engineer with 6+ years building scalable web apps in React, TypeScript and Node.js, including agentic UIs that stream answers from LLMs.",
  sub: "I work on React architecture, design systems and performance, lead cross-functional projects, and mentor junior developers.",
  experienceBadge: "6+ years",
};

/** Stops on the map from university to today, shown as a route in the "Journey" section. */
export const journey: {
  year: string;
  city: string;
  place: string;
  what: string;
}[] = [
  {
    year: "2014",
    city: "Tekirdağ",
    place: "Namık Kemal University",
    what: "B.Sc. Computer Engineering",
  },
  {
    year: "2019",
    city: "Istanbul",
    place: "Etiya",
    what: "First frontend job: Angular, RxJS, REST",
  },
  {
    year: "2021",
    city: "Istanbul",
    place: "Huawei",
    what: "Enterprise Angular, UI library, big migration",
  },
  {
    year: "2022",
    city: "Stuttgart",
    place: "zigzag GmbH",
    what: "Senior frontend: React, TypeScript, AI UI",
  },
];

export const work: Company[] = [
  {
    company: "zigzag GmbH",
    role: "Senior Frontend Developer",
    location: "Stuttgart",
    period: "10/2022 – 08/2026",
    intro:
      "Client products in healthcare, transportation and AI, built with React, TypeScript and Node.js in Agile teams with designers and backend engineers.",
    projects: [
      {
        name: "Smila",
        client: "JDM × PHOENIX group",
        domain: "Healthcare",
        url: "https://www.phoenixgroup.eu/en/about-phoenix/news/news/the-smart-medication-system-smila",
        linkLabel: "phoenixgroup.eu",
        description:
          "A smart medication system for patients in home care. A device hands out the right dose at the right time, while caregivers and relatives follow medication plans in the cloud and can reach the patient by video call or chat.",
      },
      {
        name: "Penemue",
        client: "Penemue",
        domain: "AI",
        url: "https://app.penemue.ai/en",
        linkLabel: "app.penemue.ai",
        description:
          "An AI platform that detects and filters hate speech, digital violence, toxic content and disinformation, so communities can talk to each other safely online.",
      },
      {
        name: "VVS contact form",
        client: "VVS Stuttgart",
        domain: "Transportation",
        url: "https://www.vvs.de/service/kontakt/formular",
        linkLabel: "vvs.de",
        description:
          "The customer service app for Stuttgart's public transport network. Passengers send praise, requests, complaints and mobility-guarantee claims through one guided form embedded on vvs.de.",
      },
      {
        name: "bahn.de",
        client: "Deutsche Bahn",
        domain: "Transportation",
        url: "https://www.bahn.de/",
        linkLabel: "bahn.de",
        description:
          "Deutsche Bahn's travel site, where people plan train journeys and book tickets across Germany and Europe.",
      },
    ],
    highlights: [
      { value: "−30%", label: "duplicate code, with shared components used in 3+ products" },
      { value: "−50%", label: "manual effort, through an LLM-powered agentic feature" },
      { value: "+20%", label: "faster code review and delivery with Copilot and Claude" },
      { value: "−20%", label: "onboarding time for the junior developers I mentored" },
    ],
  },
  {
    company: "Huawei",
    role: "Frontend Developer",
    location: "Istanbul",
    period: "10/2021 – 09/2022",
    intro:
      "Enterprise Angular/TypeScript apps. As the sole frontend developer, I led the AngularJS to Angular 11 migration with zero downtime.",
    projects: [],
    highlights: [
      { value: "5+", label: "teams using the internal UI library components I built" },
      { value: "−25%", label: "state-related bugs after moving to NGXS/NgRx" },
    ],
  },
  {
    company: "Etiya",
    role: "Frontend Developer",
    location: "Istanbul",
    period: "10/2019 – 10/2021",
    intro:
      "Responsive mobile and desktop interfaces with Angular 7, TypeScript and SCSS, integrating REST APIs together with business analysts.",
    projects: [
      {
        name: "Fizz",
        client: "Fizz (Canada)",
        domain: "Telecom",
        url: "https://fizz.ca/en",
        linkLabel: "fizz.ca",
        description:
          "A Canadian mobile, internet and TV provider with no long-term contracts. Members shop plans and phones and manage or change their plan themselves, right from their account.",
      },
    ],
    highlights: [{ value: "+40%", label: "UI responsiveness after reworking async flows with RxJS" }],
  },
];

export const education = {
  school: "Namık Kemal University",
  degree: "Bachelor's in Computer Engineering",
  period: "09/2014 – 06/2019",
};

/** Skills from the CV. Items marked `strong: true` are listed as Advanced on the CV. */
export const tools: {
  group: string;
  items: { name: string; strong?: boolean }[];
}[] = [
  {
    group: "Languages & frameworks",
    items: [
      { name: "React", strong: true },
      { name: "TypeScript", strong: true },
      { name: "JavaScript / ES6", strong: true },
      { name: "Angular" },
    ],
  },
  {
    group: "Styling & UI",
    items: [
      { name: "HTML / CSS", strong: true },
      { name: "Responsive design", strong: true },
      { name: "Tailwind", strong: true },
      { name: "shadcn/ui" },
      { name: "Accessibility (WCAG)" },
    ],
  },
  {
    group: "State",
    items: [
      { name: "RxJS" },
      { name: "React Context" },
      { name: "NgRx" },
      { name: "NGXS" },
    ],
  },
  {
    group: "AI & agentic",
    items: [
      { name: "GitHub Copilot", strong: true },
      { name: "Claude", strong: true },
      { name: "Prompt engineering", strong: true },
      { name: "Cursor" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "REST APIs", strong: true },
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "MongoDB" },
      { name: "WebSockets" },
    ],
  },
  {
    group: "Tooling",
    items: [
      { name: "Storybook" },
      { name: "Vite" },
      { name: "pnpm" },
      { name: "Turborepo" },
      { name: "GitHub Actions" },
    ],
  },
  { group: "Testing", items: [{ name: "Playwright" }, { name: "Jest" }] },
];

export const languages: { name: string; level: string }[] = [
  { name: "Turkish", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "German", level: "Intermediate (B1)" },
];

export const interests: string[] = [
  "BEM Folk Dance Ensemble",
  "Volleyball",
  "Travelling",
  "Reading",
  "Podcasts",
];
