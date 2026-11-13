import type { LocalizedText } from "../types/portfolio";

interface SchoolLogoAsset {
  readonly src: string;
  readonly alt: LocalizedText;
}

export interface AcademicMilestone {
  readonly id: string;
  readonly institution: string;
  readonly level: LocalizedText;
  readonly country: LocalizedText | null;
  readonly program: LocalizedText | null;
  readonly status: "current" | null;
  readonly period: LocalizedText | null;
  readonly logo: SchoolLogoAsset | null;
  readonly highlights: readonly LocalizedText[];
  readonly activities: readonly LocalizedText[];
  readonly achievements: readonly LocalizedText[];
  readonly documents: readonly {
    readonly label: LocalizedText;
    readonly href: string;
  }[];
}

export const academicJourney: readonly AcademicMilestone[] = [
  {
    id: "elementary",
    institution: "SDN Pahlawan Setia 01",
    level: { id: "Sekolah Dasar", en: "Elementary School" },
    country: { id: "Indonesia", en: "Indonesia" },
    program: null,
    status: null,
    period: null,
    logo: {
      src: "/assets/education/logos/sdn-pahlawan-setia-01.jpg",
      alt: {
        id: "Logo SDN Pahlawan Setia 01",
        en: "SDN Pahlawan Setia 01 logo",
      },
    },
    highlights: [],
    activities: [],
    achievements: [],
    documents: [],
  },
  {
    id: "junior-high",
    institution: "SMPN 2 Tarumajaya",
    level: { id: "Sekolah Menengah Pertama", en: "Junior High School" },
    country: { id: "Indonesia", en: "Indonesia" },
    program: null,
    status: null,
    period: null,
    logo: {
      src: "/assets/education/logos/smpn-2-tarumajaya-instagram.jpg",
      alt: {
        id: "Logo SMPN 2 Tarumajaya",
        en: "SMPN 2 Tarumajaya logo",
      },
    },
    highlights: [],
    activities: [],
    achievements: [],
    documents: [],
  },
  {
    id: "vocational",
    institution: "SMK Taman Harapan",
    level: { id: "Sekolah Menengah Kejuruan", en: "Vocational High School" },
    country: null,
    program: {
      id: "Teknik Komputer dan Jaringan (TKJ)",
      en: "Computer and Network Engineering (TKJ)",
    },
    status: "current",
    period: null,
    logo: {
      src: "/assets/education/logos/smk-taman-harapan.png",
      alt: {
        id: "Logo SMK Taman Harapan",
        en: "SMK Taman Harapan logo",
      },
    },
    highlights: [],
    activities: [],
    achievements: [],
    documents: [],
  },
];
