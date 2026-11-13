import type { ExperienceEntry } from "../types/portfolio";

/** Keep entries in chronological order by their start date. */
export const experienceEntries: readonly ExperienceEntry[] = [
  {
    id: "codesphere",
    org: "Codesphered",
    role: { id: "Founder & Community Builder", en: "Founder & Community Builder" },
    period: { id: "Des 2023–Sekarang", en: "Dec 2023–Present" },
    kind: { id: "Self-employed · Remote", en: "Self-employed · Remote" },
    summary: {
      id: "Membangun dan mengorganisasi komunitas teknologi yang berfokus pada software development, cybersecurity, AI, desain, dan pembelajaran kolaboratif.",
      en: "Build and organize a technology community focused on software development, cybersecurity, AI, design, and collaborative learning.",
    },
    responsibilities: {
      id: [
        "Merencanakan program komunitas, diskusi teknis, dan kegiatan kolaboratif.",
        "Mengoordinasikan pembicara, partner, dan kontributor untuk inisiatif komunitas.",
        "Berbagi sumber belajar dan mendorong anggota membangun proyek praktis.",
        "Mengelola komunikasi komunitas dan kehadiran digital.",
      ],
      en: [
        "Plan community programs, technical discussions, and collaborative activities.",
        "Coordinate speakers, partners, and contributors for community initiatives.",
        "Share learning resources and encourage members to build practical projects.",
        "Manage community communication and digital presence.",
      ],
    },
    technologies: ["Software Development", "Cybersecurity", "AI", "Design"],
    contributions: {
      id: [
        "Membangun dan mengorganisasi komunitas teknologi.",
        "Mengembangkan program belajar dan kolaborasi lintas bidang.",
      ],
      en: [
        "Build and organize a technology community.",
        "Develop learning and cross-disciplinary collaboration programs.",
      ],
    },
    verified: true,
  },
  {
    id: "pt-multiusaha",
    org: "PT Multiusaha Prioritas Bersama",
    role: { id: "Programmer Intern", en: "Programmer Intern" },
    period: { id: "Jan 2026–Apr 2026", en: "Jan 2026–Apr 2026" },
    kind: { id: "Magang · On-site", en: "Internship · On-site" },
    summary: {
      id: "Mendukung pengembangan website dan pengujian aplikasi selama program magang.",
      en: "Contributed to website development and application testing during an internship.",
    },
    responsibilities: {
      id: [
        "Mendukung perencanaan struktur website dan implementasi landing page responsif.",
        "Membantu integrasi alur pembayaran, deployment, hosting, dan persiapan SEO dasar.",
        "Menguji alur frontend dan administrasi pada sistem penerimaan berbasis web.",
        "Mendokumentasikan masalah fungsional terkait autentikasi, profil pengguna, ujian, role, dan konsistensi data.",
        "Menyampaikan temuan untuk mendukung debugging dan peningkatan produk.",
      ],
      en: [
        "Supported website structure planning and implementation of responsive landing-page interfaces.",
        "Assisted with payment-flow integration, deployment, hosting, and basic SEO preparation.",
        "Tested front-end and administrative workflows of a web-based admission system.",
        "Documented functional issues involving authentication, user profiles, examinations, roles, and data consistency.",
        "Communicated findings to support debugging and product improvement.",
      ],
    },
    technologies: [
      "Front-End Development",
      "Back-End Development",
      "Authentication",
      "Database Integration",
      "Application Testing",
      "Deployment",
    ],
    contributions: {
      id: [
        "Berkontribusi pada implementasi frontend dan backend platform berbasis web.",
        "Mendukung integrasi autentikasi, database, pengujian aplikasi, dan deployment.",
      ],
      en: [
        "Contributed to front-end and back-end implementation for web-based platforms.",
        "Supported authentication, database integration, application testing, and deployment.",
      ],
    },
    verified: true,
  },
  {
    id: "zyra-network",
    org: "Zyra Network Indonesia",
    role: { id: "Founder & Web Developer", en: "Founder & Web Developer" },
    period: { id: "Apr 2026–Sekarang", en: "Apr 2026–Present" },
    kind: { id: "Self-employed · Remote", en: "Self-employed · Remote" },
    summary: {
      id: "Mendirikan layanan web development yang berfokus pada website bisnis, desain web, dan visibilitas pencarian.",
      en: "Founded a web development service focused on business websites, web design, and search visibility.",
    },
    responsibilities: {
      id: [
        "Merencanakan dan mengembangkan website responsif sesuai kebutuhan klien.",
        "Menerjemahkan kebutuhan bisnis menjadi struktur website, fitur, dan alur pengguna yang praktis.",
        "Menangani implementasi teknis, deployment, pemeliharaan, dan persiapan SEO dasar.",
        "Mengoordinasikan ruang lingkup proyek, revisi, dan hasil kerja dengan klien serta anggota tim.",
      ],
      en: [
        "Plan and develop responsive websites based on client requirements.",
        "Translate business needs into practical website structures, features, and user flows.",
        "Handle technical implementation, deployment, maintenance, and basic SEO preparation.",
        "Coordinate project scope, revisions, and delivery with clients and team members.",
      ],
    },
    technologies: ["Web Security", "Full-Stack Development", "SEO"],
    contributions: {
      id: [
        "Membangun layanan pengembangan website untuk kebutuhan bisnis.",
        "Mendukung proyek dari perencanaan hingga deployment dan pemeliharaan.",
      ],
      en: [
        "Build website development services for business needs.",
        "Support projects from planning through deployment and maintenance.",
      ],
    },
    verified: true,
  },
  {
    id: "diskominfostandi",
    org: "Diskominfostandi Kota Bekasi · Kominfo",
    role: {
      id: "Intern – Cybersecurity and Information Security",
      en: "Intern – Cybersecurity and Information Security",
    },
    period: { id: "Apr 2026–Jul 2026", en: "Apr 2026–Jul 2026" },
    kind: { id: "Magang · On-site", en: "Apprenticeship · On-site" },
    summary: {
      id: "Mendukung kegiatan keamanan siber dan keamanan informasi selama praktik kerja di instansi pemerintahan.",
      en: "Supported cybersecurity and information-security activities during a vocational internship.",
    },
    responsibilities: {
      id: [
        "Membantu monitoring keamanan dan meninjau alert menggunakan tools SIEM.",
        "Mendukung web monitoring serta mendokumentasikan temuan keamanan yang relevan.",
        "Berpartisipasi dalam pengujian keamanan aplikasi web yang telah diotorisasi dan diawasi.",
        "Berkontribusi pada cyber threat intelligence serta penyusunan laporan teknis.",
      ],
      en: [
        "Assisted with security monitoring and reviewed alerts through SIEM tools.",
        "Supported web monitoring and documented relevant security findings.",
        "Participated in authorized web application security testing under supervision.",
        "Contributed to cyber threat intelligence and technical reporting activities.",
      ],
    },
    technologies: [
      "SIEM Monitoring",
      "Web Security Testing",
      "Vulnerability Management",
      "Cyber Threat Intelligence",
      "Digital Asset Monitoring",
      "Security Assessment Documentation",
    ],
    contributions: {
      id: [
        "Mendukung pengujian keamanan aplikasi web dan penilaian kerentanan pada lingkungan yang diotorisasi.",
        "Membantu monitoring SIEM, cyber threat intelligence, dan dokumentasi teknis.",
      ],
      en: [
        "Supported web application security testing and vulnerability assessment in authorized environments.",
        "Assisted with SIEM monitoring, cyber threat intelligence, and technical documentation.",
      ],
    },
    verified: true,
  },
];
