import type { RecognitionRecord } from "./recognition";
import { recognitionImage } from "./recognition";

const localized = (id: string, en: string) => ({ id, en });

export const recognitionCertificates: readonly RecognitionRecord[] = [
  {
    id: "database-practitioner",
    title: localized(
      "Certified Database Practitioner",
      "Certified Database Practitioner",
    ),
    issuer: localized("DB Academy", "DB Academy"),
    date: localized("9 Januari 2026", "January 9, 2026"),
    detail: localized(
      "Kredensial Certified Database Practitioner. Galeri menyertakan sertifikat dan lencana yang tersedia.",
      "Certified Database Practitioner credential. The gallery includes the available certificate and badge.",
    ),
    images: [
      recognitionImage(
        "database.jpg",
        localized(
          "Sertifikat Database Practitioner dari DB Academy",
          "Database Practitioner certificate from DB Academy",
        ),
      ),
      recognitionImage(
        "Certified_Database_Practitioner.png",
        localized(
          "Lencana Certified Database Practitioner",
          "Certified Database Practitioner badge",
        ),
      ),
    ],
  },
  {
    id: "game-learning-diklat",
    title: localized(
      "Merancang Game Pembelajaran Interaktif dengan AI",
      "Designing Interactive Learning Games with AI",
    ),
    issuer: localized("SMK Taman Harapan", "SMK Taman Harapan"),
    date: null,
    detail: localized(
      "Sertifikat peserta diklat merancang game pembelajaran interaktif dengan bantuan kecerdasan artifisial untuk melatih logika dan kreativitas siswa.",
      "Participant certificate for training on designing interactive learning games with artificial intelligence to develop students' logic and creativity.",
    ),
    images: [
      recognitionImage(
        "Diklat-Game.jpg",
        localized(
          "Sertifikat diklat merancang game pembelajaran interaktif",
          "Interactive learning game design training certificate",
        ),
      ),
    ],
  },
  {
    id: "imphen-kolosal-hackathon",
    title: localized("Hackathon IMPHNEN x Kolosal.ai", "IMPHNEN x Kolosal.ai Hackathon"),
    issuer: localized("IMPHNEN dan Kolosal.ai", "IMPHNEN and Kolosal.ai"),
    date: localized("2025", "2025"),
    detail: localized(
      "Sertifikat partisipasi dalam hackathon bertema inovasi AI inklusif untuk mendorong usaha lokal.",
      "Participation certificate for a hackathon themed around inclusive AI innovation for local businesses.",
    ),
    images: [
      recognitionImage(
        "Imphen.jpg",
        localized(
          "Sertifikat partisipasi Hackathon IMPHNEN x Kolosal.ai",
          "IMPHNEN x Kolosal.ai Hackathon participation certificate",
        ),
      ),
    ],
  },
  {
    id: "ai-public-sector-guidelines",
    title: localized(
      "Penilaian Garis Panduan Pengadaptasian AI Sektor Awam",
      "Public Sector AI Adoption Guidelines Assessment",
    ),
    issuer: localized("Jabatan Digital Negara", "Jabatan Digital Negara"),
    date: localized("7 Februari 2026", "February 7, 2026"),
    detail: localized(
      "Sertifikat penyelesaian penilaian mengenai prinsip, tadbir urus, dan amalan terbaik pengadaptasian AI di sektor awam.",
      "Certificate of completion for an assessment on principles, governance, and best practices for public-sector AI adoption.",
    ),
    images: [
      recognitionImage(
        "Muhamad Dzarel Alghifari-ai-sector-awam-gpaisa.png",
        localized(
          "Sijil penilaian panduan pengadaptasian AI sektor awam",
          "Public sector AI adoption guidelines assessment certificate",
        ),
      ),
    ],
  },
  {
    id: "cybersafe-for-people",
    title: localized("CyberSAFE untuk Rakyat", "CyberSAFE for the Public"),
    issuer: localized("Ministry of Digital Malaysia", "Ministry of Digital Malaysia"),
    date: localized("7 Februari 2026", "February 7, 2026"),
    detail: localized(
      "Sertifikat penyelesaian kursus dasar keamanan siber yang membahas identifikasi ancaman, manajemen risiko, dan langkah keamanan.",
      "Certificate of completion for a cybersecurity fundamentals course covering threat identification, risk management, and security measures.",
    ),
    images: [
      recognitionImage(
        "Muhamad Dzarel Alghifari-cybersecurity.png",
        localized(
          "Sertifikat penyelesaian CyberSAFE untuk Rakyat",
          "CyberSAFE for the Public completion certificate",
        ),
      ),
    ],
  },
  {
    id: "cyber-security-basics",
    title: localized("Cyber Security Dasar", "Cyber Security Fundamentals"),
    issuer: localized("ID-Networkers", "ID-Networkers"),
    date: null,
    detail: localized(
      "Sertifikat penyelesaian kursus online Cyber Security Dasar.",
      "Certificate of completion for the Cyber Security Fundamentals online course.",
    ),
    images: [
      recognitionImage(
        "Muhamad-Dzarel-Alghifari-Belajar-Cyber-Security-dari-Nol-Sertifikat-Cyber-Security-Dasar-LMS-ID-Networkers_page-0001.jpg",
        localized(
          "Sertifikat kursus Cyber Security Dasar dari ID-Networkers",
          "Cyber Security Fundamentals course certificate from ID-Networkers",
        ),
      ),
    ],
  },
  {
    id: "disaster-simulation-training",
    title: localized(
      "Simulasi Deteksi Bencana dengan Koding Robotika",
      "Disaster Detection Simulation with Robotics Coding",
    ),
    issuer: localized("Guru Mengajar", "Guru Mengajar"),
    date: localized("18 Desember 2025", "December 18, 2025"),
    detail: localized(
      "Sertifikat peserta diklat proyek simulasi deteksi bencana dengan koding robotika untuk pembelajaran STEM kontekstual.",
      "Participant certificate for training on a disaster-detection simulation project using robotics coding for contextual STEM learning.",
    ),
    images: [
      recognitionImage(
        "Simulasi-Bencana.jpg",
        localized(
          "Sertifikat diklat proyek simulasi deteksi bencana dengan koding robotika",
          "Disaster-detection simulation with robotics coding training certificate",
        ),
      ),
    ],
  },
  {
    id: "ai-coding-buddy",
    title: localized(
      "IDCamp x Dicoding Live #2 — AI Coding Buddy",
      "IDCamp x Dicoding Live #2 — AI Coding Buddy",
    ),
    issuer: localized(
      "Indosat Ooredoo Hutchison Digital Camp dan Dicoding",
      "Indosat Ooredoo Hutchison Digital Camp and Dicoding",
    ),
    date: localized("18 November 2025", "November 18, 2025"),
    detail: localized(
      "Sertifikat kehadiran pada sesi “Level Up Your Dev Workflow”.",
      "Attendance certificate for the “Level Up Your Dev Workflow” session.",
    ),
    images: [
      recognitionImage(
        "ai-buddy.jpg",
        localized(
          "Sertifikat kehadiran IDCamp x Dicoding Live #2 — AI Coding Buddy",
          "IDCamp x Dicoding Live #2 — AI Coding Buddy attendance certificate",
        ),
      ),
    ],
  },
  {
    id: "ai-career-readiness",
    title: localized(
      "AI Career Readiness Training",
      "AI Career Readiness Training",
    ),
    issuer: localized("ASEAN Foundation", "ASEAN Foundation"),
    date: localized("11 September 2026", "September 11, 2026"),
    detail: localized(
      "Sertifikat penyelesaian AI Career Readiness Training.",
      "Certificate of completion for the AI Career Readiness Training.",
    ),
    images: [
      recognitionImage(
        "ai-career-readiness-asean-foundation-2026.png",
        localized(
          "Sertifikat AI Career Readiness Training dari ASEAN Foundation",
          "AI Career Readiness Training certificate from the ASEAN Foundation",
        ),
      ),
    ],
  },
  {
    id: "prompt-injection-talk",
    title: localized(
      "Pemanfaatan AI & Cara Menghindari Prompt Injection",
      "Using AI & Avoiding Prompt Injection",
    ),
    issuer: localized("Tegal Dev dan Dicoding", "Tegal Dev and Dicoding"),
    date: localized("29 November 2025", "November 29, 2025"),
    detail: localized(
      "Sertifikat kehadiran pada sesi Tegal Dev tentang pemanfaatan AI dan cara menghindari prompt injection.",
      "Attendance certificate for a Tegal Dev session on using AI and avoiding prompt injection.",
    ),
    images: [
      recognitionImage(
        "ai-injection.jpg",
        localized(
          "Sertifikat kehadiran sesi AI dan prompt injection oleh Tegal Dev",
          "Tegal Dev AI and prompt injection session attendance certificate",
        ),
      ),
    ],
  },
  {
    id: "bekraf-developer-day-2025",
    title: localized(
      "Badan Ekraf Developer Day 2025",
      "Badan Ekraf Developer Day 2025",
    ),
    issuer: localized(
      "Kementerian Ekonomi Kreatif / Badan Ekonomi Kreatif",
      "Ministry of Creative Economy / Creative Economy Agency",
    ),
    date: localized("22 November 2025", "November 22, 2025"),
    detail: localized(
      "Sertifikat kehadiran pada acara Badan Ekraf Developer Day 2025.",
      "Attendance certificate for the Badan Ekraf Developer Day 2025 event.",
    ),
    images: [
      recognitionImage(
        "bdd-2025.jpg",
        localized(
          "Sertifikat kehadiran Badan Ekraf Developer Day 2025",
          "Badan Ekraf Developer Day 2025 attendance certificate",
        ),
      ),
    ],
  },
  {
    id: "copilot-azure-ai-foundry",
    title: localized(
      "Menciptakan Copilot Pribadi dengan Azure AI Foundry",
      "Creating a Personal Copilot with Azure AI Foundry",
    ),
    issuer: localized("Microsoft Elevate dan Dicoding", "Microsoft Elevate and Dicoding"),
    date: localized("20 November 2025", "November 20, 2025"),
    detail: localized(
      "Sertifikat penyelesaian sesi pembelajaran online berdurasi satu jam.",
      "Certificate for completing a one-hour online learning session.",
    ),
    images: [
      recognitionImage(
        "coplit.jpg",
        localized(
          "Sertifikat sesi Menciptakan Copilot Pribadi dengan Azure AI Foundry",
          "Creating a Personal Copilot with Azure AI Foundry session certificate",
        ),
      ),
    ],
  },
  {
    id: "diskominfostandi-internship",
    title: localized(
      "Praktik Kerja Lapangan — Diskominfostandi Kota Bekasi",
      "Internship — Diskominfostandi Bekasi City",
    ),
    issuer: localized(
      "Dinas Komunikasi, Informatika, Statistik dan Persandian Kota Bekasi",
      "Bekasi City Department of Communication, Informatics, Statistics and Cryptography",
    ),
    date: localized(
      "6 April–6 Juli 2026",
      "April 6–July 6, 2026",
    ),
    detail: localized(
      "Sertifikat pelaksanaan PKL/magang dengan predikat nilai sangat baik.",
      "Certificate for completing an internship with a very good rating.",
    ),
    images: [
      recognitionImage(
        "diskominfostandi-pkl.jpg",
        localized(
          "Sertifikat PKL Diskominfostandi Kota Bekasi",
          "Diskominfostandi Bekasi City internship certificate",
        ),
      ),
    ],
  },
  {
    id: "financial-literacy",
    title: localized("Introduction to Financial Literacy", "Introduction to Financial Literacy"),
    issuer: localized("Dicoding", "Dicoding"),
    date: localized("11 November 2025", "November 11, 2025"),
    detail: localized(
      "Sertifikat kompetensi kelulusan kelas Introduction to Financial Literacy.",
      "Certificate of completion for the Introduction to Financial Literacy course.",
    ),
    images: [
      recognitionImage(
        "financial.jpg",
        localized(
          "Sertifikat kelas Introduction to Financial Literacy dari Dicoding",
          "Dicoding Introduction to Financial Literacy course certificate",
        ),
      ),
    ],
  },
  {
    id: "frontend-web-beginners",
    title: localized(
      "Belajar Membuat Front-End Web untuk Pemula",
      "Building Front-End Web Apps for Beginners",
    ),
    issuer: localized("Dicoding", "Dicoding"),
    date: localized("2 Oktober 2025", "October 2, 2025"),
    detail: localized(
      "Sertifikat kompetensi kelulusan kelas Belajar Membuat Front-End Web untuk Pemula.",
      "Certificate of completion for the Building Front-End Web Apps for Beginners course.",
    ),
    images: [
      recognitionImage(
        "front-end.jpg",
        localized(
          "Sertifikat kelas Belajar Membuat Front-End Web untuk Pemula",
          "Building Front-End Web Apps for Beginners course certificate",
        ),
      ),
    ],
  },
  {
    id: "multiusaha-internship",
    title: localized(
      "Praktik Kerja Lapangan — PT Multiusaha Prioritas Bersama",
      "Internship — PT Multiusaha Prioritas Bersama",
    ),
    issuer: localized("PT Multiusaha Prioritas Bersama", "PT Multiusaha Prioritas Bersama"),
    date: localized(
      "12 Januari–2 April 2026",
      "January 12–April 2, 2026",
    ),
    detail: localized(
      "Sertifikat penyelesaian program PKL pada divisi IT Development.",
      "Certificate of completion for an internship program in the IT Development division.",
    ),
    images: [
      recognitionImage(
        "praktek-kerja-lapangan-01.jpg",
        localized(
          "Sertifikat PKL divisi IT Development di PT Multiusaha Prioritas Bersama",
          "IT Development internship certificate from PT Multiusaha Prioritas Bersama",
        ),
      ),
    ],
  },
  {
    id: "python-machine-learning-finance",
    title: localized(
      "Complete Python and Machine Learning in Financial Analysis",
      "Complete Python and Machine Learning in Financial Analysis",
    ),
    issuer: localized("Udemy", "Udemy"),
    date: localized("21 Oktober 2025", "October 21, 2025"),
    detail: localized(
      "Sertifikat penyelesaian kursus dengan durasi tercantum 20,5 jam.",
      "Course completion certificate with a listed duration of 20.5 hours.",
    ),
    images: [
      recognitionImage(
        "python.jpg",
        localized(
          "Sertifikat kursus Python dan machine learning dalam analisis keuangan",
          "Python and machine learning in financial analysis course certificate",
        ),
      ),
    ],
  },
  {
    id: "ramadhan-coding-challenge",
    title: localized("Ramadhan Coding Challenge 2026", "Ramadhan Coding Challenge 2026"),
    issuer: localized("Alhazen Academy", "Alhazen Academy"),
    date: localized("28 Februari–14 Maret 2026", "February 28–March 14, 2026"),
    detail: localized(
      "Sertifikat peserta kategori Frontend Web pada Ramadhan Coding Challenge 2026.",
      "Participant certificate in the Frontend Web category of the Ramadhan Coding Challenge 2026.",
    ),
    images: [
      recognitionImage(
        "ramadhan2026.png",
        localized(
          "Sertifikat peserta Ramadhan Coding Challenge 2026 kategori Frontend Web",
          "Ramadhan Coding Challenge 2026 Frontend Web participant certificate",
        ),
      ),
    ],
  },
  {
    id: "hybrid-technology-webinar",
    title: localized(
      "Mengenal Solusi dan Teknologi Hybrid (PON + Ethernet)",
      "Hybrid Solutions and Technologies (PON + Ethernet)",
    ),
    issuer: localized("ID-Networkers", "ID-Networkers"),
    date: localized("30 Januari 2026", "January 30, 2026"),
    detail: localized(
      "Sertifikat partisipasi webinar tentang solusi dan teknologi hybrid (PON + Ethernet) serta skenario penggunaannya.",
      "Webinar participation certificate about hybrid solutions and technologies (PON + Ethernet) and their use cases.",
    ),
    images: [
      recognitionImage(
        "teknologi-hybird.png",
        localized(
          "Sertifikat webinar teknologi hybrid dari ID-Networkers",
          "ID-Networkers hybrid technology webinar certificate",
        ),
      ),
    ],
  },
];
