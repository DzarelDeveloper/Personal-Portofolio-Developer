import type { RecognitionRecord } from "./recognition";
import { recognitionImage } from "./recognition";

const localized = (id: string, en: string) => ({ id, en });

export const recognitionAchievements: readonly RecognitionRecord[] = [
  {
    id: "cakrawala-indonesia-finalist",
    title: localized(
      "Finalis Olimpiade Cakrawala Cita — Bahasa Indonesia",
      "Cakrawala Cita Olympiad Finalist — Indonesian",
    ),
    issuer: localized("Komunitas Olimpiade Pedia", "Olimpiade Pedia Community"),
    date: localized("Agustus 2026", "August 2026"),
    detail: localized(
      "Finalis bidang Bahasa Indonesia tingkat SMA pada Olimpiade Cakrawala Cita tingkat nasional.",
      "Finalist in the senior-high-school Indonesian category at the national Cakrawala Cita Olympiad.",
    ),
    images: [
      recognitionImage(
        "cakrawala-cita-bahasa-indonesia-finalis.jpg",
        localized(
          "Sertifikat finalis Bahasa Indonesia, Olimpiade Cakrawala Cita",
          "Indonesian finalist certificate, Cakrawala Cita Olympiad",
        ),
      ),
    ],
  },
  {
    id: "cakrawala-indonesia-top-30",
    title: localized(
      "Top 30 Olimpiade Cakrawala Cita — Bahasa Indonesia",
      "Top 30, Cakrawala Cita Olympiad — Indonesian",
    ),
    issuer: localized("Komunitas Olimpiade Pedia", "Olimpiade Pedia Community"),
    date: localized("Agustus 2026", "August 2026"),
    detail: localized(
      "Meraih Top 30 bidang Bahasa Indonesia tingkat SMA pada Olimpiade Cakrawala Cita tingkat nasional.",
      "Placed in the Top 30 in the senior-high-school Indonesian category at the national Cakrawala Cita Olympiad.",
    ),
    images: [
      recognitionImage(
        "cakrawala-cita-bahasa-indonesia-top-30.jpg",
        localized(
          "Sertifikat Top 30 Bahasa Indonesia, Olimpiade Cakrawala Cita",
          "Top 30 Indonesian certificate, Cakrawala Cita Olympiad",
        ),
      ),
    ],
  },
  {
    id: "cakrawala-english-finalist",
    title: localized(
      "Finalis Olimpiade Cakrawala Cita — Bahasa Inggris",
      "Cakrawala Cita Olympiad Finalist — English",
    ),
    issuer: localized("Komunitas Olimpiade Pedia", "Olimpiade Pedia Community"),
    date: localized("Agustus 2026", "August 2026"),
    detail: localized(
      "Finalis bidang Bahasa Inggris tingkat SMA pada Olimpiade Cakrawala Cita tingkat nasional.",
      "Finalist in the senior-high-school English category at the national Cakrawala Cita Olympiad.",
    ),
    images: [
      recognitionImage(
        "cakrawala-cita-bahasa-inggris-finalis.jpg",
        localized(
          "Sertifikat finalis Bahasa Inggris, Olimpiade Cakrawala Cita",
          "English finalist certificate, Cakrawala Cita Olympiad",
        ),
      ),
    ],
  },
  {
    id: "cakrawala-english-top-30",
    title: localized(
      "Top 30 Olimpiade Cakrawala Cita — Bahasa Inggris",
      "Top 30, Cakrawala Cita Olympiad — English",
    ),
    issuer: localized("Komunitas Olimpiade Pedia", "Olimpiade Pedia Community"),
    date: localized("Agustus 2026", "August 2026"),
    detail: localized(
      "Meraih Top 30 bidang Bahasa Inggris tingkat SMA pada Olimpiade Cakrawala Cita tingkat nasional.",
      "Placed in the Top 30 in the senior-high-school English category at the national Cakrawala Cita Olympiad.",
    ),
    images: [
      recognitionImage(
        "cakrawala-cita-bahasa-inggris-top-30.jpg",
        localized(
          "Sertifikat Top 30 Bahasa Inggris, Olimpiade Cakrawala Cita",
          "Top 30 English certificate, Cakrawala Cita Olympiad",
        ),
      ),
    ],
  },
  {
    id: "cakrawala-pkn-gold",
    title: localized(
      "Peraih Emas Olimpiade Cakrawala Cita — PKN",
      "Gold Award, Cakrawala Cita Olympiad — Civics",
    ),
    issuer: localized("Komunitas Olimpiade Pedia", "Olimpiade Pedia Community"),
    date: localized("Agustus 2026", "August 2026"),
    detail: localized(
      "Meraih penghargaan emas bidang PKN tingkat SMA pada Olimpiade Cakrawala Cita tingkat nasional.",
      "Received the gold award in the senior-high-school Civics category at the national Cakrawala Cita Olympiad.",
    ),
    images: [
      recognitionImage(
        "cakrawala-cita-emas-pkn.jpg",
        localized(
          "Sertifikat peraih emas PKN, Olimpiade Cakrawala Cita",
          "Civics gold award certificate, Cakrawala Cita Olympiad",
        ),
      ),
    ],
  },
  {
    id: "cakrawala-indonesia-silver",
    title: localized(
      "Peraih Perak Olimpiade Cakrawala Cita — Bahasa Indonesia",
      "Silver Award, Cakrawala Cita Olympiad — Indonesian",
    ),
    issuer: localized("Komunitas Olimpiade Pedia", "Olimpiade Pedia Community"),
    date: localized("Agustus 2026", "August 2026"),
    detail: localized(
      "Meraih penghargaan perak bidang Bahasa Indonesia tingkat SMA pada Olimpiade Cakrawala Cita tingkat nasional.",
      "Received the silver award in the senior-high-school Indonesian category at the national Cakrawala Cita Olympiad.",
    ),
    images: [
      recognitionImage(
        "cakrawala-cita-perak-indonesia.jpg",
        localized(
          "Sertifikat peraih perak Bahasa Indonesia, Olimpiade Cakrawala Cita",
          "Indonesian silver award certificate, Cakrawala Cita Olympiad",
        ),
      ),
    ],
  },
  {
    id: "cakrawala-english-bronze",
    title: localized(
      "Peraih Perunggu Olimpiade Cakrawala Cita — Bahasa Inggris",
      "Bronze Award, Cakrawala Cita Olympiad — English",
    ),
    issuer: localized("Komunitas Olimpiade Pedia", "Olimpiade Pedia Community"),
    date: localized("Agustus 2026", "August 2026"),
    detail: localized(
      "Meraih penghargaan perunggu bidang Bahasa Inggris tingkat SMA pada Olimpiade Cakrawala Cita tingkat nasional.",
      "Received the bronze award in the senior-high-school English category at the national Cakrawala Cita Olympiad.",
    ),
    images: [
      recognitionImage(
        "cakrawala-cita-perunggu-inggris.jpg",
        localized(
          "Sertifikat peraih perunggu Bahasa Inggris, Olimpiade Cakrawala Cita",
          "English bronze award certificate, Cakrawala Cita Olympiad",
        ),
      ),
    ],
  },
  {
    id: "cakrawala-pkn-finalist",
    title: localized(
      "Finalis Olimpiade Cakrawala Cita — PKN",
      "Cakrawala Cita Olympiad Finalist — Civics",
    ),
    issuer: localized("Komunitas Olimpiade Pedia", "Olimpiade Pedia Community"),
    date: localized("Agustus 2026", "August 2026"),
    detail: localized(
      "Finalis bidang PKN tingkat SMA pada Olimpiade Cakrawala Cita tingkat nasional.",
      "Finalist in the senior-high-school Civics category at the national Cakrawala Cita Olympiad.",
    ),
    images: [
      recognitionImage(
        "cakrawala-cita-pkn-finalis.jpg",
        localized(
          "Sertifikat finalis PKN, Olimpiade Cakrawala Cita",
          "Civics finalist certificate, Cakrawala Cita Olympiad",
        ),
      ),
    ],
  },
  {
    id: "cakrawala-pkn-first-place",
    title: localized(
      "Juara 1 Olimpiade Cakrawala Cita — PKN",
      "1st Place, Cakrawala Cita Olympiad — Civics",
    ),
    issuer: localized("Komunitas Olimpiade Pedia", "Olimpiade Pedia Community"),
    date: localized("Agustus 2026", "August 2026"),
    detail: localized(
      "Meraih Juara 1 bidang PKN tingkat SMA pada Olimpiade Cakrawala Cita tingkat nasional.",
      "Placed 1st in the senior-high-school Civics category at the national Cakrawala Cita Olympiad.",
    ),
    images: [
      recognitionImage(
        "cakrawala-cita-pkn-juara-1.jpg",
        localized(
          "Sertifikat Juara 1 PKN, Olimpiade Cakrawala Cita",
          "Civics 1st-place certificate, Cakrawala Cita Olympiad",
        ),
      ),
    ],
  },
  {
    id: "cakrawala-pkn-top-1",
    title: localized(
      "Top 1 Olimpiade Cakrawala Cita — PKN",
      "Top 1, Cakrawala Cita Olympiad — Civics",
    ),
    issuer: localized("Komunitas Olimpiade Pedia", "Olimpiade Pedia Community"),
    date: localized("Agustus 2026", "August 2026"),
    detail: localized(
      "Meraih Top 1 bidang PKN tingkat SMA pada Olimpiade Cakrawala Cita tingkat nasional.",
      "Placed Top 1 in the senior-high-school Civics category at the national Cakrawala Cita Olympiad.",
    ),
    images: [
      recognitionImage(
        "cakrawala-cita-pkn-top-1.jpg",
        localized(
          "Sertifikat Top 1 PKN, Olimpiade Cakrawala Cita",
          "Civics Top 1 certificate, Cakrawala Cita Olympiad",
        ),
      ),
    ],
  },
  {
    id: "kid2-top-10",
    title: localized("Top 10 KID#2 Clash of Cyber Heist", "Top 10, KID#2 Clash of Cyber Heist"),
    issuer: localized(
      "Program KID#2 Clash of Cyber Heist",
      "KID#2 Clash of Cyber Heist program",
    ),
    date: localized("November 2025", "November 2025"),
    detail: localized(
      "Meraih Top 10 dalam program KID#2 Clash of Cyber Heist.",
      "Placed in the Top 10 in the KID#2 Clash of Cyber Heist program.",
    ),
    images: [
      recognitionImage(
        "Telkom.jpg",
        localized(
          "Sertifikat apresiasi Top 10 KID#2 Clash of Cyber Heist",
          "Top 10 KID#2 Clash of Cyber Heist appreciation certificate",
        ),
      ),
    ],
  },
  {
    id: "iyac-national-second",
    title: localized(
      "Juara 2 Nasional — Informatika, IYAC 2026",
      "2nd Place Nationally — Informatics, IYAC 2026",
    ),
    issuer: localized(
      "Focus Learning Institute dan Yayasan Al-Mansuriyah",
      "Focus Learning Institute and Al-Mansuriyah Foundation",
    ),
    date: localized("11–12 Juli 2026", "July 11–12, 2026"),
    detail: localized(
      "Meraih Juara 2 Nasional bidang Informatika tingkat SMA/MA/sederajat dalam Indonesian Youth Academic Competition.",
      "Placed 2nd nationally in the senior-high-school Informatics category at the Indonesian Youth Academic Competition.",
    ),
    images: [
      recognitionImage(
        "iyac-2026-juara2-nasional.jpg",
        localized(
          "Piagam Juara 2 Nasional Informatika, Indonesian Youth Academic Competition 2026",
          "2nd Place National Informatics award, Indonesian Youth Academic Competition 2026",
        ),
      ),
    ],
  },
  {
    id: "nsc2-informatics-gold",
    title: localized(
      "Medali Emas — Informatika, National Student Championship 2",
      "Gold Medal — Informatics, National Student Championship 2",
    ),
    issuer: localized("Lembaga Vidyagama", "Vidyagama Institute"),
    date: localized("6 September 2026", "September 6, 2026"),
    detail: localized(
      "Meraih medali emas bidang Informatika pada National Student Championship 2 tingkat nasional.",
      "Received the gold medal in Informatics at the national-level National Student Championship 2.",
    ),
    images: [
      recognitionImage(
        "nsc-2-informatika-gold-award-certificate.jpg",
        localized(
          "Sertifikat Gold Award Informatika, National Student Championship 2",
          "Informatics Gold Award certificate, National Student Championship 2",
        ),
      ),
      recognitionImage(
        "nsc-2-informatika-medali-emas-piagam.jpg",
        localized(
          "Piagam medali emas Informatika, National Student Championship 2",
          "Informatics gold medal award, National Student Championship 2",
        ),
      ),
      recognitionImage(
        "nsc-2-informatika-piagam-legalisir.jpg",
        localized(
          "Salinan legalisir piagam medali emas NSC 2",
          "Certified copy of the NSC 2 gold medal award",
        ),
      ),
      recognitionImage(
        "nsc-2-informatika-surat-keterangan-pemenang.jpg",
        localized(
          "Surat keterangan pemenang medali emas Informatika NSC 2",
          "NSC 2 Informatics gold medal winner confirmation",
        ),
      ),
    ],
  },
];
