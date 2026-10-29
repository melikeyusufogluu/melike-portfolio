export interface ExperienceItem {
  company: string
  role: string
  location: string
  period: string
  highlights: string[]
  tags: string[]
}

export interface Interest {
  title: string
  description: string
}

export interface Education {
  school: string
  degree: string
  location: string
  period: string
}

export interface Skill {
  name: string
  icon: string
  level: number
  note: string
}

export const profile = {
  name: 'Melike Yusufoglu',
  title: 'Front-End Developer',
  tagline: 'React & TypeScript Enthusiast',
  location: 'Stuttgart, DE',
  email: 'melikeyusufoglu96@gmail.com',
  linkedin: 'https://www.linkedin.com/in/melike-yusufoglu/',
  summary:
    "With over 5 years of front-end development experience, I excel in React, Angular, and TypeScript — building fast, scalable web applications and optimizing them for real-world performance. I'm eager to contribute to innovative software solutions with a focus on high-quality, high-performance code.",
}

export const skills: Skill[] = [
  {
    name: 'React',
    icon: '⚛️',
    level: 95,
    note: 'Primary framework for the last 4+ years — hooks, context, performance tuning.',
  },
  {
    name: 'Angular',
    icon: '🅰️',
    level: 85,
    note: 'Enterprise apps at Huawei & Etiya, including NgRx/NGXS state management.',
  },
  {
    name: 'TypeScript',
    icon: '🔷',
    level: 90,
    note: 'Strict typing across every project — components, APIs, and shared libraries.',
  },
  {
    name: 'Node.js',
    icon: '🟢',
    level: 70,
    note: 'Building and consuming APIs and services alongside the front-end work.',
  },
  {
    name: 'JavaScript (ES6+)',
    icon: '🟨',
    level: 95,
    note: 'The foundation — comfortable across modern syntax, async patterns, and tooling.',
  },
  {
    name: 'Tailwind CSS',
    icon: '🎨',
    level: 90,
    note: 'Utility-first styling for fast, consistent, responsive UI.',
  },
  {
    name: 'Shadcn/ui',
    icon: '🧩',
    level: 80,
    note: 'Composable component patterns for polished, accessible interfaces.',
  },
  {
    name: 'Responsive Web Design',
    icon: '📱',
    level: 90,
    note: 'Mobile-first layouts that hold up across breakpoints and devices.',
  },
]

export const experience: ExperienceItem[] = [
  {
    company: 'zigzag GmbH',
    role: 'Senior Frontend Developer',
    location: 'Stuttgart, DE',
    period: '10/2022 — 08/2026',
    highlights: [
      'Shipped React/TypeScript features for healthcare, transportation, and finance; built reusable UI components adopted across 3+ products, shaping shared frontend standards and cutting duplicate code by 30%.',
      'Designed an AI-assisted feature using an LLM API and agentic workflow, automating a repetitive front-end task and reducing manual effort by 50%.',
      'Developed Node.js APIs/services, expanding backend capabilities and enabling full-stack delivery.',
      'Leveraged GitHub Copilot and Claude to accelerate code review and feature delivery by 20%.',
      'Built agentic UI components that handle streaming model outputs and long-running async tasks over WebSockets, improving real-time user feedback.',
      'Collaborated with designers and backend engineers in Agile/Scrum to deliver end-to-end features, integrating complex REST APIs, optimizing performance, and testing with Jest and Playwright.',
      'Mentored junior developers, reducing onboarding time by 20%.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'LLM / Agentic UI', 'WebSockets', 'Playwright'],
  },
  {
    company: 'Huawei',
    role: 'Front-End Developer',
    location: 'Istanbul, TR',
    period: '10/2021 — 09/2022',
    highlights: [
      'Developed enterprise Angular/TypeScript apps; built and customized reusable components for an internal UI library used by 5+ teams.',
      'Improved scalability and maintainability via NGXS/NgRx state management, reducing state-related bugs by 25%.',
      'Sole frontend developer; led the AngularJS to Angular 11 migration, modernizing legacy code with zero downtime.',
      'Delivered features on time in Scrum/Agile, collaborating with backend teams to integrate APIs and build new UIs.',
    ],
    tags: ['Angular', 'TypeScript', 'NGXS', 'NgRx'],
  },
  {
    company: 'Etiya',
    role: 'Front-End Developer',
    location: 'Istanbul, TR',
    period: '10/2019 — 10/2021',
    highlights: [
      'Built responsive interfaces for mobile/desktop using Angular 7, TypeScript, HTML, CSS, and SCSS.',
      'Integrated REST APIs and collaborated with business analysts to deliver features on schedule.',
      'Applied RxJS to manage async workflows, improving UI responsiveness by 40%.',
    ],
    tags: ['Angular 7', 'RxJS', 'SCSS', 'REST APIs'],
  },
]

export const education: Education = {
  school: 'Namık Kemal University',
  degree: 'Bachelor Degree in Computer Engineering',
  location: 'Tekirdağ, TR',
  period: '09/2014 — 06/2019',
}

export const interests: Interest[] = [
  {
    title: 'Tech Innovation',
    description:
      'Passionate about groundbreaking tech innovations, staying updated with the latest advancements in front-end technology.',
  },
  {
    title: 'Open Source Contributions',
    description:
      'Dedicated to contributing to open source projects, promoting community learning, and fostering collaborative growth.',
  },
  {
    title: 'Web Design Aesthetics',
    description:
      'Enthusiast for aesthetic and functional web design, regularly exploring trends that enhance user engagement.',
  },
]
