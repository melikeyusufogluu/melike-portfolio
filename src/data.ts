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
    role: 'Technologist II',
    location: 'Stuttgart, DE',
    period: '10/2022 — Present',
    highlights: [
      'Developed scalable web applications across healthcare, transportation, and finance domains.',
      'Built modern front-end solutions using React, TypeScript, and reusable UI components.',
      'Collaborated with designers and backend engineers in Agile/Scrum teams to deliver end-to-end features.',
      'Integrated complex APIs and optimized applications for performance and responsiveness.',
      'Expanded into backend development, building APIs and services with Node.js.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Agile'],
  },
  {
    company: 'Huawei',
    role: 'Front-End Developer',
    location: 'Istanbul, TR',
    period: '10/2021 — 09/2022',
    highlights: [
      'Developed and maintained enterprise-level applications using Angular and TypeScript.',
      'Built and customized reusable UI components leveraging an internal UI library.',
      'Collaborated within Scrum/Agile environments to deliver high-quality features on time.',
      'Applied best practices in state management (NGXS, NgRx) to improve scalability.',
      'Contributed to hybrid AngularJS / Angular 11 projects, ensuring smooth migration.',
    ],
    tags: ['Angular', 'TypeScript', 'NGXS', 'NgRx'],
  },
  {
    company: 'Etiya',
    role: 'Front-End Developer',
    location: 'Istanbul, TR',
    period: '10/2019 — 10/2021',
    highlights: [
      'Developed responsive interfaces for mobile and desktop using Angular 7, TypeScript, HTML, CSS, and SCSS.',
      'Collaborated with backend developers to integrate REST APIs.',
      'Gained hands-on experience with RxJS operators to manage asynchronous workflows.',
      'Explored and implemented new web technologies and UI trends to improve usability.',
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
