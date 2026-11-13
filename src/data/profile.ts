import type { AboutContent, Profile, SocialLink } from "../types/portfolio";

/**
 * EDITABLE CONTENT
 * ---------------------------------------------------------------------------
 * Only facts given in the project brief are filled in below. Every value whose
 * truth has not been confirmed is marked `TODO(verify)` and rendered by the UI
 * as an explicit "awaiting verified detail" note — nothing is invented.
 */

const CONTACT_EMAIL = "dzarelalghifari123@gmail.com";

export const profile: Profile = {
  name: "Muhamad Dzarel Alghifari",
  displayName: "DZAREL",
  title: {
    id: "Software Developer",
    en: "Software Developer",
  },
  tagline: {
    id: "Membangun perangkat lunak yang aman dan berpusat pada pengguna.",
    en: "Building secure, user-focused software.",
  },
  /** TODO(verify): confirm the published location. */
  location: {
    id: "Bekasi, Indonesia",
    en: "Bekasi, Indonesia",
  },
  email: CONTACT_EMAIL,
  portrait: {
    src: "/me.png",
    webp: "/me.webp",
    width: 365,
    height: 350,
  },
  interests: [
    "Software Development",
    "Web Development",
    "Application Security",
    "Software Engineering",
  ],
  availability: {
    id: "Terbuka untuk peluang",
    en: "Open to opportunities",
  },
};

export const socialLinks: readonly SocialLink[] = [
  {
    id: "email",
    kind: "email",
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    handle: CONTACT_EMAIL,
  },
  {
    id: "github",
    kind: "github",
    label: "GitHub",
    href: "https://github.com/DzarelDeveloper",
    handle: "DzarelDeveloper",
  },
  {
    id: "linkedin",
    kind: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dzareldeveloper/",
    handle: "in/dzareldeveloper",
  },
  {
    id: "instagram",
    kind: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/buildwithdzarel/",
    handle: "buildwithdzarel",
  },
];

export const about: AboutContent = {
  paragraphs: {
    id: [
      "Saya seorang pengembang perangkat lunak yang bekerja di persimpangan pengembangan web dan keamanan aplikasi. Saya menyukai permasalahan ketika antarmuka, data, dan model ancaman harus dipikirkan bersama-sama.",
      "Sebagian besar yang saya bangun berawal dari usaha membuat sesuatu menjadi lebih mudah digunakan — antarmuka yang jelas, perilaku yang dapat diprediksi, dan kode yang bisa dilanjutkan rekan tim tanpa dokumen serah terima.",
    ],
    en: [
      "I am a software developer working at the intersection of web development and application security. I enjoy problems where the interface, the data and the threat model have to be reasoned about together.",
      "Most of what I build starts as an attempt to make something genuinely easier to use — clear interfaces, predictable behaviour, and code a teammate can continue without a handover document.",
    ],
  },
  facts: [
    {
      label: { id: "Peran", en: "Role" },
      value: { id: "Software Developer", en: "Software Developer" },
    },
    {
      label: { id: "Bidang fokus", en: "Focus" },
      value: {
        id: "Pengembangan Perangkat Lunak · Pengembangan Web · Keamanan Aplikasi · Rekayasa Perangkat Lunak",
        en: "Software Development · Web Development · Application Security · Software Engineering",
      },
    },
    {
      label: { id: "Domisili", en: "Based in" },
      value: profile.location,
    },
    {
      label: { id: "Ketersediaan", en: "Availability" },
      value: profile.availability,
    },
  ],
};
