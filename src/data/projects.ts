import type { Project } from "../types/portfolio";

export const projects: readonly Project[] = [
  {
    id: "sei",
    name: "SEI",
    code: "Self Exploration Intelligence",
    summary: {
      id: "Platform eksplorasi diri untuk membantu siswa memahami minat dan pilihan pendidikan.",
      en: "An educational exploration platform that helps students understand their interests and study options.",
    },
    overview: {
      id: [
        "SEI (Self Exploration Intelligence) adalah aplikasi web client-side untuk siswa SMP, SMA, dan SMK yang ingin mengenali minat serta menjelajahi pilihan pendidikan sebelum menentukan langkah berikutnya.",
        "Asesmen bawaan menggunakan aturan lokal yang transparan. Progres tersimpan di browser; mode AI bersifat opsional dan menggunakan API key milik pengguna.",
      ],
      en: [
        "SEI (Self Exploration Intelligence) is a client-side web app for junior- and senior-high-school students to reflect on their interests and explore education options before choosing a next step.",
        "The default assessment uses transparent local rules. Progress is stored in the browser; optional AI exploration uses an API key supplied by the user.",
      ],
    },
    problem: {
      id: "Banyak siswa diminta memilih jalur atau jurusan sebelum mendapat kesempatan untuk memahami minatnya sendiri. SEI memberi ruang refleksi dan alternatif yang bisa dipelajari, bukan keputusan yang memaksa.",
      en: "Students are often asked to choose a pathway or major before they have had a chance to understand their interests. SEI offers a space for reflection and alternatives to explore—not a decision imposed on them.",
    },
    features: {
      id: [
        "Asesmen interaktif berisi pertanyaan kontekstual dan pilihan tunggal, multi-pilihan, serta skala diri.",
        "Ringkasan sinyal minat yang menunjukkan jawaban pendukung dan alasan rekomendasi.",
        "Jelajah bidang, jurusan, pekerjaan, dan contoh pilihan pendidikan.",
        "Informasi serta perbandingan jalur SMA dan SMK.",
        "Mode eksplorasi AI opsional dengan API key milik pengguna.",
        "Progres asesmen disimpan secara lokal tanpa akun.",
      ],
      en: [
        "An interactive assessment with contextual prompts, single-choice, bounded multi-select, and self-rating questions.",
        "Interest summaries that show supporting answers and explain recommendations.",
        "Exploration of fields, majors, careers, and education options.",
        "Information and comparisons for general and vocational high-school pathways.",
        "Optional AI exploration using the user's own API key.",
        "Assessment progress stored locally, with no account required.",
      ],
    },
    role: {
      id: "Pencipta & pengembang",
      en: "Creator & developer",
    },
    roleDetails: {
      id: "Mengembangkan aplikasi dan alur eksplorasi pendidikan yang terdokumentasi di repository SEI.",
      en: "Developed the application and education-exploration flow documented in the SEI repository.",
    },
    development: {
      id: "Aplikasi dibangun tanpa backend atau basis data server. Penilaian default berjalan di browser; koneksi ke provider AI hanya digunakan jika pengguna mengaktifkan mode tersebut dan memberikan API key sendiri.",
      en: "The app is built without a server backend or database. Default scoring runs in the browser; AI providers are contacted only when a user enables that mode and supplies their own API key.",
    },
    challenges: {
      id: [
        "Menjaga hasil sebagai bahan refleksi, bukan tes psikologi atau rekomendasi pendidikan formal.",
        "Menjelaskan hubungan antara jawaban, sinyal minat, dan alasan rekomendasi.",
        "Menyediakan eksplorasi AI tanpa mewajibkan akun atau API key dari aplikasi.",
      ],
      en: [
        "Keeping results framed as reflection rather than a psychological test or formal education recommendation.",
        "Making the relationship between answers, interest signals, and recommendation reasoning visible.",
        "Offering AI-assisted exploration without requiring an app account or app-owned API key.",
      ],
    },
    year: null,
    status: {
      id: "Aplikasi web tersedia; hasil bukan tes psikologi atau rekomendasi pendidikan formal.",
      en: "Web app available; results are not a psychological test or formal education recommendation.",
    },
    technologies: ["React", "Vite", "TypeScript", "React Router"],
    images: [
      {
        src: "/assets/projects/sei-landing.png",
        alt: {
          id: "Tampilan beranda aplikasi SEI",
          en: "SEI application landing page",
        },
        caption: {
          id: "Halaman beranda SEI",
          en: "SEI landing page",
        },
        kind: "screenshot",
      },
      {
        src: "/assets/projects/sei-recommendations.png",
        alt: {
          id: "Tampilan hasil eksplorasi dan rekomendasi bidang",
          en: "SEI exploration results and field recommendations",
        },
        caption: {
          id: "Hasil eksplorasi dan rekomendasi",
          en: "Exploration results and recommendations",
        },
        kind: "screenshot",
      },
      {
        src: "/assets/projects/sei-pathways.png",
        alt: {
          id: "Perbandingan jalur pendidikan SMA dan SMK",
          en: "Comparison of general and vocational high-school pathways",
        },
        caption: {
          id: "Perbandingan jalur SMA dan SMK",
          en: "General and vocational pathway comparison",
        },
        kind: "screenshot",
      },
    ],
    links: [
      {
        label: { id: "Lihat Demo", en: "View Demo" },
        href: "https://sei-explore.netlify.app/",
      },
      {
        label: { id: "Lihat Repo", en: "View Repo" },
        href: "https://github.com/DzarelDeveloper/sei",
      },
    ],
    verified: true,
  },
  {
    id: "tandara",
    name: "Tandara",
    code: "School Face-Recognition Attendance System",
    summary: {
      id: "Sistem presensi sekolah berbasis pengenalan wajah dengan dashboard untuk Admin IT dan Guru Piket.",
      en: "A face-recognition school attendance system with dashboards for IT Admins and Teachers on Duty.",
    },
    overview: {
      id: [
        "Tandara menangkap wajah melalui kamera browser, memproses deteksi dan pencocokan wajah, lalu mencatat presensi yang dapat dipantau oleh Admin IT dan Guru Piket.",
        "Repository menandai Tandara sebagai MVP untuk pengembangan, demonstrasi, dan validasi perangkat keras—belum dinyatakan siap untuk produksi.",
      ],
      en: [
        "Tandara captures faces through a browser camera, processes face detection and matching, then records attendance for IT Admin and Teacher-on-Duty dashboards.",
        "The repository describes Tandara as an MVP for development, demonstration, and hardware validation—not as production-ready software.",
      ],
    },
    problem: {
      id: "Pencatatan presensi manual dan proses masuk/pulang yang terpisah dapat memperlambat pemantauan kehadiran. Tandara menyatukan pemindaian, pencatatan, koreksi, dan pelaporan dalam satu sistem.",
      en: "Manual attendance and separate check-in/check-out processes can slow attendance monitoring. Tandara brings scanning, records, corrections, and reporting into one system.",
    },
    features: {
      id: [
        "Deteksi wajah menggunakan OpenCV YuNet dan pengenalan wajah dengan OpenCV SFace.",
        "Pendaftaran beberapa sampel wajah serta pemeriksaan kualitas dan konsistensi sampel.",
        "Sesi presensi CHECK_IN dan CHECK_OUT, status kehadiran, riwayat, koreksi, dan ekspor CSV.",
        "Dashboard Admin IT untuk data siswa, kelas, pengguna, enrollment wajah, dan diagnostik.",
        "Antarmuka Guru Piket untuk sesi presensi dan pemantauan hasil secara real-time melalui WebSocket.",
        "Dukungan webcam bawaan, USB, dan kamera virtual DroidCam melalui Browser MediaDevices API.",
        "Portal orang tua dengan relasi akun-siswa; push notification Firebase/FCM belum diterapkan.",
      ],
      en: [
        "Face detection with OpenCV YuNet and face recognition with OpenCV SFace.",
        "Multi-sample face enrollment with sample quality and consistency checks.",
        "CHECK_IN and CHECK_OUT sessions, attendance statuses, history, corrections, and CSV export.",
        "An IT Admin dashboard for student, class, user, face-enrollment, and diagnostics management.",
        "A Teacher-on-Duty interface for attendance sessions and real-time monitoring over WebSockets.",
        "Support for built-in webcams, USB webcams, and virtual DroidCam cameras through the browser MediaDevices API.",
        "A parent portal linked to student accounts; Firebase/FCM push notifications are not implemented.",
      ],
    },
    role: {
      id: "Pengembangan aplikasi",
      en: "Application development",
    },
    roleDetails: {
      id: "Repository mencakup frontend, backend, dan alur presensi berbasis wajah. Pembagian kontribusi tim tidak dijelaskan di README.",
      en: "The repository covers the frontend, backend, and face-based attendance flow. The README does not specify a team contribution split.",
    },
    development: {
      id: "Frontend React mengakses kamera melalui MediaDevices dan mengirim frame ke REST API FastAPI. Backend memakai YuNet dan SFace untuk pemrosesan wajah, menyimpan data di SQLite, dan mengirim pembaruan melalui WebSocket.",
      en: "The React frontend accesses the camera through MediaDevices and sends frames to a FastAPI REST API. The backend uses YuNet and SFace for face processing, stores data in SQLite, and broadcasts updates over WebSockets.",
    },
    challenges: {
      id: [
        "Menghubungkan kamera browser dengan deteksi, pencocokan wajah, dan pencatatan presensi.",
        "Menangani hasil wajah tidak dikenal atau ambigu tanpa menetapkan identitas yang keliru.",
        "Validasi ambang pencocokan pada data sekolah masih diperlukan sebelum penggunaan operasional.",
        "MVP lokal belum mengenkripsi database SQLite dan file wajah.",
      ],
      en: [
        "Connecting browser-camera capture with face detection, matching, and attendance recording.",
        "Handling unknown or ambiguous faces without assigning an incorrect identity.",
        "Matching-threshold validation against school data is still needed before operational use.",
        "The local MVP does not encrypt its SQLite database or face files.",
      ],
    },
    year: null,
    status: {
      id: "MVP untuk pengembangan, demo, dan validasi perangkat keras; belum siap produksi.",
      en: "MVP for development, demos, and hardware validation; not production-ready.",
    },
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "FastAPI",
      "Python",
      "SQLite",
      "SQLAlchemy",
      "JWT",
      "Argon2",
      "OpenCV YuNet",
      "OpenCV SFace",
      "WebSocket",
    ],
    images: [
      {
        src: "/assets/projects/tandara-admin-dashboard.png",
        alt: {
          id: "Dashboard Admin IT Tandara",
          en: "Tandara IT Admin dashboard",
        },
        caption: {
          id: "Dashboard dan status sistem Tandara.",
          en: "Tandara dashboard and system status.",
        },
        kind: "screenshot",
      },
      {
        src: "/assets/projects/tandara-teacher-attendance.png",
        alt: {
          id: "Antarmuka presensi Guru Piket Tandara",
          en: "Tandara Teacher-on-Duty attendance interface",
        },
        caption: {
          id: "Antarmuka presensi untuk Guru Piket.",
          en: "Attendance interface for Teachers on Duty.",
        },
        kind: "screenshot",
      },
      {
        src: "/assets/projects/tandara-logo.jpg",
        alt: {
          id: "Logo Tandara",
          en: "Tandara logo",
        },
        caption: {
          id: "Logo Tandara",
          en: "Tandara logo",
        },
        kind: "brand",
      },
    ],
    links: [
      {
        label: { id: "Lihat Demo", en: "View Demo" },
        href: "https://tandara.id/",
      },
      {
        label: { id: "Lihat Repo", en: "View Repo" },
        href: "https://github.com/DzarelDeveloper/Tandara",
      },
    ],
    verified: true,
  },
  {
    id: "gitrank",
    name: "GitRank",
    code: "Cyberpunk GitHub Profile Analyzer",
    summary: {
      id: "Dashboard cyberpunk yang menganalisis statistik GitHub, menyusun skor developer, dan membandingkan dua profil.",
      en: "A cyberpunk dashboard that analyzes GitHub stats, scores developer profiles, and compares two accounts.",
    },
    overview: {
      id: [
        "GitRank mengambil data profil publik melalui GitHub REST API, lalu mengubah statistik seperti repository, bintang, pengikut, dan estimasi commit menjadi skor, tier, serta archetype.",
        "Aplikasi juga menyediakan grafik radar dan mode perbandingan 1v1 dengan visual bertema cyberpunk.",
      ],
      en: [
        "GitRank retrieves public profile data through the GitHub REST API, then turns metrics such as repositories, stars, followers, and estimated commits into a score, tier, and archetype.",
        "The application also includes a radar chart and a cyberpunk-styled 1v1 comparison mode.",
      ],
    },
    problem: {
      id: "Statistik profil GitHub tersebar di beberapa metrik dan sulit dibandingkan sekilas. GitRank merangkum metrik publik menjadi visualisasi dan sistem peringkat yang mudah dijelajahi.",
      en: "GitHub profile statistics are spread across multiple metrics and are difficult to compare at a glance. GitRank brings public metrics together in an explorable visualization and ranking system.",
    },
    features: {
      id: [
        "Analisis profil GitHub secara langsung menggunakan GitHub REST API.",
        "Skor Power Level, tier D–SSS, dan kategori developer berdasarkan statistik profil.",
        "Grafik radar untuk memvisualisasikan beberapa dimensi metrik.",
        "Mode 1v1 untuk membandingkan dua username GitHub.",
        "Efek suara Web Audio API dan QR code yang mengarah ke profil.",
        "Bahasa antarmuka Indonesia dan Inggris.",
      ],
      en: [
        "Live GitHub profile analysis through the GitHub REST API.",
        "Power Level scores, D–SSS tiers, and developer archetypes derived from profile metrics.",
        "A radar chart visualizing several metric dimensions.",
        "A 1v1 mode for comparing two GitHub usernames.",
        "Web Audio API sound effects and a QR code linking to a profile.",
        "Indonesian and English interface languages.",
      ],
    },
    role: {
      id: "Pengembang",
      en: "Developer",
    },
    roleDetails: {
      id: "Dikembangkan dalam repository publik GitRank milik DzarelDeveloper.",
      en: "Developed in the public GitRank repository owned by DzarelDeveloper.",
    },
    development: {
      id: "Dibangun sebagai aplikasi client-side dengan HTML, CSS, dan JavaScript. GitHub REST API menyediakan data profil; Canvas dan Web Audio API dipakai untuk visualisasi serta efek suara.",
      en: "Built as a client-side application with HTML, CSS, and JavaScript. The GitHub REST API provides profile data; Canvas and Web Audio APIs power visualizations and sound effects.",
    },
    challenges: {
      id: [
        "Mengubah berbagai metrik GitHub menjadi ringkasan skor dan tier yang mudah dipahami.",
        "Membandingkan dua profil dengan visualisasi dan animasi tanpa framework eksternal.",
        "Menjelaskan bahwa skor dan archetype merupakan klasifikasi buatan aplikasi, bukan peringkat resmi GitHub.",
      ],
      en: [
        "Turning multiple GitHub metrics into an understandable score and tier summary.",
        "Comparing two profiles with visualizations and animation without external frameworks.",
        "Making clear that scores and archetypes are application-defined classifications, not official GitHub rankings.",
      ],
    },
    year: null,
    status: {
      id: "Demo GitHub Pages dan repository publik tersedia.",
      en: "A GitHub Pages demo and public repository are available.",
    },
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "GitHub REST API",
      "Canvas API",
      "Web Audio API",
    ],
    images: [
      {
        src: "/assets/projects/gitrank-home.png",
        alt: {
          id: "Halaman pencarian username GitHub pada GitRank",
          en: "GitRank GitHub username search page",
        },
        caption: {
          id: "Halaman awal untuk memasukkan username GitHub yang akan dianalisis.",
          en: "Landing screen for entering a GitHub username to analyze.",
        },
        kind: "screenshot",
      },
      {
        src: "/assets/projects/gitrank-analysis.png",
        alt: {
          id: "Dashboard hasil analisis profil GitHub",
          en: "GitHub profile analysis dashboard",
        },
        caption: {
          id: "Hasil analisis profil DzarelDeveloper dengan statistik dan skor GitRank.",
          en: "DzarelDeveloper profile analysis with GitRank scores and statistics.",
        },
        kind: "screenshot",
      },
      {
        src: "/assets/projects/gitrank-battle.png",
        alt: {
          id: "Hasil perbandingan dua profil pada mode GitRank 1v1",
          en: "Two-profile comparison in GitRank 1v1 mode",
        },
        caption: {
          id: "Mode perbandingan 1v1 antara DzarelDeveloper dan torvalds.",
          en: "1v1 comparison mode between DzarelDeveloper and torvalds.",
        },
        kind: "screenshot",
      },
    ],
    links: [
      {
        label: { id: "Lihat Demo", en: "View Demo" },
        href: "https://dzareldeveloper.github.io/GitRank/",
      },
      {
        label: { id: "Lihat Repo", en: "View Repo" },
        href: "https://github.com/DzarelDeveloper/GitRank",
      },
    ],
    verified: true,
  },
  {
    id: "ramadhan-portal",
    name: "Ramadhan Portal",
    code: "Integrated Worship & Productivity Platform",
    summary: {
      id: "Portal ibadah Ramadhan terpadu dengan jadwal imsakiyah, Al-Qur'an, doa, zikir, kalkulator zakat, dan checklist harian.",
      en: "An integrated Ramadan portal for prayer times, Qur'an, duas, dhikr, zakat calculations, and daily checklists.",
    },
    overview: {
      id: [
        "Portal Ramadhan Terpadu menyatukan beberapa fitur ibadah dan alat bantu harian dalam satu website responsif.",
        "Proyek ini dikembangkan bertahap dalam Ramadan Coding Challenge 2026 oleh Alhazen Academy, dari halaman doa hingga portal final.",
      ],
      en: [
        "The Integrated Ramadan Portal brings several worship features and daily tools together in one responsive website.",
        "The project was developed in stages as part of Alhazen Academy's Ramadan Coding Challenge 2026, from a dua page through to the final portal.",
      ],
    },
    problem: {
      id: "Jadwal, doa, Al-Qur'an, dan catatan amalan sering diakses dari berbagai tempat. Portal ini mengumpulkan fitur-fitur tersebut agar pengguna dapat berpindah dari satu kebutuhan ke kebutuhan lain melalui satu hub.",
      en: "Prayer schedules, duas, Qur'an reading, and habit tracking are often accessed in different places. This portal gathers these features so people can move between them from a single hub.",
    },
    features: {
      id: [
        "Jadwal imsakiyah dan salat berdasarkan pencarian lokasi, dengan countdown menuju waktu berikutnya.",
        "Al-Qur'an digital dengan bacaan, terjemahan, serta audio.",
        "Kumpulan doa Ramadhan dan penghitung zikir dengan target serta progres.",
        "Kalkulator zakat untuk penghasilan, perusahaan, perdagangan, dan emas.",
        "To-do ibadah harian dengan checklist salat, target tilawah, dan jurnal puasa.",
        "Portal final menggunakan komponen Web Components dan menyimpan progres to-do secara lokal.",
      ],
      en: [
        "Imsak and prayer schedules based on location search, with a countdown to the next prayer time.",
        "A digital Qur'an with recitation, translations, and audio.",
        "Ramadan duas and a dhikr counter with targets and progress.",
        "Zakat calculators for income, companies, trade, and gold.",
        "A daily worship to-do list with prayer checklists, Qur'an reading goals, and a fasting journal.",
        "The final portal uses Web Components and stores to-do progress locally.",
      ],
    },
    role: {
      id: "Kontributor · Ramadan Coding Challenge",
      en: "Contributor · Ramadan Coding Challenge",
    },
    roleDetails: {
      id: "Proyek repository ini dikembangkan dalam challenge Alhazen Academy; kontribusi individual per fitur tidak dirinci di README.",
      en: "This repository project was developed as part of the Alhazen Academy challenge; the README does not break down individual feature contributions.",
    },
    development: {
      id: "Dibangun dengan HTML, CSS, JavaScript ES6+, dan Web Components. Beberapa fitur memakai API eksternal seperti pencarian lokasi dan jadwal salat; progres checklist disimpan di localStorage.",
      en: "Built with HTML, CSS, JavaScript ES6+, and Web Components. Some features use external APIs for location search and prayer schedules; checklist progress is stored in localStorage.",
    },
    challenges: {
      id: [
        "Menggabungkan beberapa fitur mandiri ke dalam satu portal dengan navigasi dan komponen bersama.",
        "Mengelola state interaktif seperti checklist, countdown, input lokasi, dan perhitungan zakat.",
        "Menyediakan layout yang responsif dan progres harian yang tetap tersedia di browser pengguna.",
      ],
      en: [
        "Bringing several standalone features into one portal with shared navigation and components.",
        "Managing interactive state such as checklists, countdowns, location input, and zakat calculations.",
        "Providing a responsive layout and keeping daily progress available in the user's browser.",
      ],
    },
    year: null,
    status: {
      id: "Portal final dan repository publik tersedia; sumber data jadwal salat bergantung pada layanan API eksternal.",
      en: "The final portal and public repository are available; prayer schedule data depends on an external API service.",
    },
    technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Web Components", "localStorage", "Prayer-time APIs"],
    images: [
      {
        src: "/assets/projects/ramadhan-portal-home.png",
        alt: {
          id: "Halaman utama portal Ramadhan terpadu",
          en: "Integrated Ramadan portal homepage",
        },
        caption: {
          id: "Beranda portal dengan navigasi ke fitur-fitur ibadah.",
          en: "Portal homepage with navigation to worship features.",
        },
        kind: "screenshot",
      },
      {
        src: "/assets/projects/ramadhan-portal-prayer-times.png",
        alt: {
          id: "Halaman jadwal imsakiyah dan salat berdasarkan lokasi",
          en: "Location-based imsak and prayer schedule page",
        },
        caption: {
          id: "Jadwal salat lokal dengan countdown menuju waktu berikutnya.",
          en: "Local prayer schedule with a countdown to the next prayer.",
        },
        kind: "screenshot",
      },
      {
        src: "/assets/projects/ramadhan-portal-quran.png",
        alt: {
          id: "Halaman Al-Qur'an digital dengan daftar surah",
          en: "Digital Qur'an page with a surah list",
        },
        caption: {
          id: "Daftar surah dengan pencarian dan pilihan baca per surah atau juz.",
          en: "Surah list with search and reading by surah or juz.",
        },
        kind: "screenshot",
      },
    ],
    links: [
      {
        label: { id: "Lihat Repo", en: "View Repo" },
        href: "https://github.com/DzarelDeveloper/Ramadan-challenge",
      },
      {
        label: { id: "Lihat Demo", en: "View Demo" },
        href: "https://dzareldeveloper.github.io/Ramadan-challenge/Misi-6/",
      },
    ],
    verified: true,
  },
];

export function findProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
