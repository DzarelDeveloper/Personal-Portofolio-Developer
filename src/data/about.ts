import type { LocalizedText } from "../types/portfolio";

export interface AboutItem {
  readonly id: string;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
}

export interface AboutStep extends AboutItem {
  readonly icon: "search" | "design" | "build" | "secure";
}

export interface ToolkitGroup {
  readonly id: string;
  readonly title: LocalizedText;
  readonly technologies: readonly string[];
}

export const aboutAreas: readonly AboutItem[] = [
  {
    id: "software-development",
    title: { id: "Pengembangan Perangkat Lunak", en: "Software Development" },
    description: {
      id: "Membangun perangkat lunak yang berguna, terstruktur, dan mudah dikembangkan.",
      en: "Building useful, well-structured software that can grow over time.",
    },
  },
  {
    id: "web-applications",
    title: {
      id: "Pengembangan Aplikasi Web",
      en: "Web Application Development",
    },
    description: {
      id: "Merancang pengalaman web yang jelas, responsif, dan nyaman digunakan.",
      en: "Creating web experiences that are clear, responsive, and comfortable to use.",
    },
  },
  {
    id: "application-security",
    title: { id: "Keamanan Aplikasi", en: "Application Security" },
    description: {
      id: "Mempertimbangkan keamanan sejak perancangan hingga implementasi.",
      en: "Considering security from early design through implementation.",
    },
  },
  {
    id: "system-design",
    title: { id: "Desain Sistem", en: "System Design" },
    description: {
      id: "Memikirkan struktur sistem, data, dan trade-off sebelum membangun.",
      en: "Thinking through system structure, data, and trade-offs before building.",
    },
  },
];

export const aboutApproach: readonly AboutStep[] = [
  {
    id: "understand",
    icon: "search",
    title: { id: "Pahami Masalah", en: "Understand the Problem" },
    description: {
      id: "Memahami kebutuhan dan konteks sebelum menentukan arah.",
      en: "Understand the need and context before choosing a direction.",
    },
  },
  {
    id: "design",
    icon: "design",
    title: { id: "Rancang Solusi", en: "Design the Solution" },
    description: {
      id: "Menyusun solusi yang sederhana, terarah, dan terukur.",
      en: "Shape a solution that is focused, simple, and measurable.",
    },
  },
  {
    id: "build-test",
    icon: "build",
    title: { id: "Bangun dan Uji", en: "Build and Test" },
    description: {
      id: "Membangun bertahap dan memeriksa perilakunya.",
      en: "Build incrementally and verify how it behaves.",
    },
  },
  {
    id: "improve-secure",
    icon: "secure",
    title: { id: "Tingkatkan dan Amankan", en: "Improve and Secure" },
    description: {
      id: "Menyempurnakan hasil sambil menjaga keamanan dan keandalan.",
      en: "Refine the result while protecting security and reliability.",
    },
  },
];

export const toolkitGroups: readonly ToolkitGroup[] = [
  {
    id: "frontend",
    title: { id: "Frontend", en: "Frontend" },
    technologies: ["react", "nextjs", "html", "css", "vite", "react-router"],
  },
  {
    id: "backend",
    title: { id: "Backend", en: "Backend" },
    technologies: [
      "nodejs",
      "php",
      "python",
      "fastapi",
      "rest-api",
      "websockets",
      "jwt",
    ],
  },
  {
    id: "database",
    title: { id: "Basis Data", en: "Database" },
    technologies: ["mysql", "mariadb", "sqlite", "sqlalchemy"],
  },
  {
    id: "languages",
    title: { id: "Bahasa Pemrograman", en: "Programming Languages" },
    technologies: ["typescript", "javascript", "php", "python"],
  },
  {
    id: "security",
    title: { id: "Keamanan Aplikasi", en: "Application Security" },
    technologies: [
      "secure-development",
      "input-validation",
      "data-protection",
    ],
  },
];
