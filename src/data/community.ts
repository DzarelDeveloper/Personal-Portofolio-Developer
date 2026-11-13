import type { LocalizedText } from "../types/portfolio";

export interface CommunitySocialLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export interface CommunityEntry {
  readonly id: string;
  readonly name: string;
  readonly role: LocalizedText;
  readonly tagline: LocalizedText | null;
  readonly summary: LocalizedText;
  readonly logo: {
    readonly src: string;
    readonly alt: LocalizedText;
  } | null;
  readonly socialLinks: readonly CommunitySocialLink[];
}

export const communityEntries: readonly CommunityEntry[] = [
  {
    id: "codesphere",
    name: "Codesphered",
    role: { id: "Didirikan & dibangun oleh Dzarel", en: "Founded & built by Dzarel" },
    tagline: { id: "Build • Learn • Share Code", en: "Build • Learn • Share Code" },
    summary: {
      id: "Komunitas teknologi untuk membantu developer belajar, berkembang, berbagi pengetahuan, dan membangun koneksi. Kegiatannya mencakup program komunitas, diskusi teknis, koordinasi pembicara dan kontributor, serta berbagi sumber belajar untuk mendorong proyek praktis.",
      en: "A technology community helping developers learn, grow, share knowledge, and build connections. Its activities include community programs, technical discussions, coordinating speakers and contributors, and sharing learning resources that encourage practical projects.",
    },
    logo: {
      src: "/assets/community/codesphere.png",
      alt: {
        id: "Logo Codesphered",
        en: "Codesphered logo",
      },
    },
    socialLinks: [
      {
        id: "github",
        label: "GitHub",
        href: "https://github.com/Codesphered01010",
      },
      {
        id: "tiktok",
        label: "TikTok",
        href: "https://www.tiktok.com/@codesphered01010",
      },
      {
        id: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com/codesphered/",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/codesphered/home/?viewAsMember=true",
      },
    ],
  },
  {
    id: "zyra-network",
    name: "Zyra Network",
    role: { id: "Inisiatif layanan digital oleh Dzarel", en: "Digital services initiative by Dzarel" },
    tagline: null,
    summary: {
      id: "Inisiatif layanan digital yang berfokus pada web development untuk kebutuhan bisnis. Aktivitasnya mencakup perencanaan dan pembuatan website responsif, implementasi fitur, deployment, pemeliharaan, serta persiapan SEO dasar.",
      en: "A digital services initiative focused on web development for business needs. Its work includes planning and building responsive websites, implementing features, deployment, maintenance, and basic SEO preparation.",
    },
    logo: {
      src: "/assets/community/zyra-network-transparent.png",
      alt: {
        id: "Logo Zyra Network",
        en: "Zyra Network logo",
      },
    },
    socialLinks: [
      {
        id: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com/zyranetwork.id/",
      },
      {
        id: "website",
        label: "Website",
        href: "https://zyranetwork.com/",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/zyra-network-indonesia/home/?viewAsMember=true",
      },
    ],
  },
];
