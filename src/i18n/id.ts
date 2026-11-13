import type { TranslationKey } from "./en";

/**
 * Indonesian interface copy.
 * Typed as an exhaustive map of the English dictionary, so any key added to
 * `en.ts` must be translated here or TypeScript fails the build.
 */
export const id: Record<TranslationKey, string> = {
  /* Brand & shell -------------------------------------------------------- */
  "brand.role": "Software Developer",
  "brand.tagline": "Membangun perangkat lunak yang aman dan berpusat pada pengguna.",
  "home.tagline_first": "Menjadi developer",
  "home.tagline_second": "yang tak hanya menulis kode — tetapi menciptakan dampak",

  /* Panel headings ----------------------------------------------------------- */
  "panel.personal": "Personal",
  "panel.professional": "Profesional",

  /* Navigation --------------------------------------------------------------- */
  "nav.about": "Tentang Saya",
  "nav.skills": "Keahlian",
  "nav.education": "Pendidikan",
  "nav.contact": "Kontak",
  "nav.projects": "Proyek",
  "nav.experience": "Pengalaman",
  "nav.records": "Records",
  "nav.community": "Komunitas",

  /* Controls ----------------------------------------------------------------- */
  "control.appearance": "Tampilan",
  "control.theme_to_light": "Ganti ke tema terang",
  "control.theme_to_dark": "Ganti ke tema gelap",
  "control.light": "Terang",
  "control.dark": "Gelap",
  "control.language": "Bahasa",
  "control.language_switch": "Ganti bahasa antarmuka",
  "control.language_id": "Bahasa Indonesia",
  "control.language_en": "Bahasa Inggris",

  /* Actions ------------------------------------------------------------------ */
  "action.close": "Tutup",
  "action.back": "Kembali",
  "action.back_home": "Kembali ke beranda",
  "action.back_to_overview": "Kembali ke tampilan awal",
  "action.back_to_projects": "Kembali ke Proyek",
  "action.open_details": "Lihat detail",
  "action.copy_email": "Salin alamat email",
  "action.copied": "Tersalin ke papan klip",
  "action.new_tab": "terbuka di tab baru",
  "action.open_link": "Buka",

  /* About -------------------------------------------------------------------- */
  "about.heading": "Tentang Saya",
  "about.lead":
    "Pengembang perangkat lunak yang berfokus pada sistem web, keamanan aplikasi, dan ketelitian dalam membangun perangkat lunak yang dapat diandalkan.",
  "about.eyebrow": "Profil",
  "about.introduction":
    "Saya Software Developer yang tertarik membangun perangkat lunak yang aman, bermanfaat, dan berfokus pada pengguna.",
  "about.what_i_do": "Yang Saya Kerjakan",
  "about.my_approach": "Pendekatan Saya",
  "about.technical_toolkit": "Perangkat Teknis",
  /* Background --------------------------------------------------------------- */

  /* Skills ------------------------------------------------------------------- */
  "skills.heading": "Keahlian & Teknologi",
  "skills.lead": "Jelajahi ekosistem teknis saya.",
  "skills.scope_note":
    "Teknologi didasarkan pada proyek publik dan informasi profil; AI ditampilkan sebagai pengalaman proyek dan eksplorasi.",
  "skills.globe_label": "Peta interaktif ekosistem teknis",
  "skills.root_label": "Software Developer",
  "skills.technology_label": "Teknologi dan praktik terkait",
  "skills.branch_label": "Spesialisasi",
  "skills.status.demonstrated": "Terdokumentasi di proyek publik",
  "skills.status.focus": "Bidang fokus terdokumentasi",
  "skills.status.exploring": "Dikerjakan di proyek & sedang dieksplorasi",
  "skills.status.unverified": "Menunggu verifikasi",
  "skills.branch.frontend": "Pengembangan Frontend",
  "skills.branch.frontend.description":
    "Framework frontend dan teknologi web yang terdokumentasi di proyek publik.",
  "skills.branch.backend": "Pengembangan Backend",
  "skills.branch.backend.description":
    "Runtime backend, API, dan layanan aplikasi yang terdokumentasi di proyek publik.",
  "skills.branch.database": "Basis Data & Data",
  "skills.branch.database.description":
    "Basis data relasional dan alat akses data yang digunakan di berbagai proyek publik.",
  "skills.branch.security": "Keamanan Aplikasi",
  "skills.branch.security.description":
    "Fokus terdokumentasi pada pengembangan yang aman dan perlindungan data pengguna.",
  "skills.branch.engineering": "Rekayasa Perangkat Lunak",
  "skills.branch.engineering.description":
    "Praktik rekayasa yang tercatat dalam profil saat ini.",
  "skills.branch.ai": "AI & Teknologi Baru",
  "skills.branch.ai.description":
    "Bidang eksplorasi, bukan klaim kemahiran profesional.",
  "skills.tech.react": "React",
  "skills.tech.react.description":
    "Digunakan pada portfolio dan proyek aplikasi web.",
  "skills.tech.nextjs": "Next.js",
  "skills.tech.nextjs.description":
    "Tercantum sebagai framework frontend pada profil developer publik.",
  "skills.tech.typescript": "TypeScript",
  "skills.tech.typescript.description":
    "Digunakan pada portfolio dan proyek aplikasi TypeScript.",
  "skills.tech.javascript": "JavaScript",
  "skills.tech.javascript.description":
    "Digunakan pada proyek web, termasuk aplikasi dengan vanilla JavaScript.",
  "skills.tech.html": "HTML",
  "skills.tech.html.description":
    "Digunakan untuk menyusun antarmuka pada proyek frontend.",
  "skills.tech.css": "CSS",
  "skills.tech.css.description":
    "Digunakan untuk menata antarmuka di berbagai proyek frontend.",
  "skills.tech.vite": "Vite",
  "skills.tech.vite.description":
    "Digunakan sebagai build tool untuk aplikasi React dan TypeScript SEI.",
  "skills.tech.react_router": "React Router",
  "skills.tech.react_router.description":
    "Digunakan untuk routing sisi klien pada aplikasi single-page SEI.",
  "skills.tech.nodejs": "Node.js",
  "skills.tech.nodejs.description":
    "Tercantum sebagai runtime backend pada profil developer publik.",
  "skills.tech.php": "PHP",
  "skills.tech.php.description":
    "Digunakan untuk backend aplikasi pemesanan restoran Masakan Nusantara.",
  "skills.tech.python": "Python",
  "skills.tech.python.description":
    "Digunakan untuk API Tandara dan aplikasi desktop Morphix.",
  "skills.tech.fastapi": "FastAPI",
  "skills.tech.fastapi.description":
    "Digunakan untuk membangun REST backend aplikasi Tandara.",
  "skills.tech.rest_api": "REST API",
  "skills.tech.rest_api.description":
    "Diimplementasikan pada backend Tandara dan digunakan oleh aplikasinya.",
  "skills.tech.websockets": "WebSocket",
  "skills.tech.websockets.description":
    "Digunakan untuk update kehadiran dan orang tua secara realtime pada API Tandara.",
  "skills.tech.jwt": "Autentikasi JWT",
  "skills.tech.jwt.description":
    "Diimplementasikan untuk autentikasi dan otorisasi peran pada API Tandara.",
  "skills.tech.mysql": "MySQL",
  "skills.tech.mysql.description":
    "Digunakan sebagai basis data relasional aplikasi Masakan Nusantara.",
  "skills.tech.mariadb": "MariaDB",
  "skills.tech.mariadb.description":
    "Didukung sebagai opsi basis data kompatibel MySQL untuk Masakan Nusantara.",
  "skills.tech.sqlite": "SQLite",
  "skills.tech.sqlite.description":
    "Digunakan untuk penyimpanan basis data lokal dan pengujian pada API Tandara.",
  "skills.tech.sqlalchemy": "SQLAlchemy",
  "skills.tech.sqlalchemy.description":
    "Digunakan API Tandara untuk model basis data dan pengaturan skema.",
  "skills.tech.secure_development": "Pengembangan aman",
  "skills.tech.secure_development.description":
    "Mempertimbangkan keamanan sepanjang perancangan dan implementasi perangkat lunak.",
  "skills.tech.input_validation": "Validasi input",
  "skills.tech.input_validation.description":
    "Memvalidasi input pengguna sebagai bagian dari pengembangan aplikasi yang aman.",
  "skills.tech.data_protection": "Perlindungan data",
  "skills.tech.data_protection.description":
    "Melindungi data pengguna sebagai fokus keamanan aplikasi yang terdokumentasi.",
  "skills.tech.version_control": "Kontrol versi",
  "skills.tech.version_control.description":
    "Praktik rekayasa yang terdokumentasi untuk merawat perangkat lunak dari waktu ke waktu.",
  "skills.tech.testing": "Pengujian",
  "skills.tech.testing.description":
    "Praktik rekayasa yang terdokumentasi untuk memeriksa perilaku perangkat lunak.",
  "skills.tech.documentation": "Dokumentasi",
  "skills.tech.documentation.description":
    "Praktik terdokumentasi agar perangkat lunak mudah dipahami dan dirawat.",
  "skills.tech.artificial_intelligence": "Kecerdasan Buatan",
  "skills.tech.artificial_intelligence.description":
    "Dieksplorasi lewat fitur AI di SEI dan aplikasi computer vision Morphix.",
  "skills.tech.machine_learning": "Machine learning",
  "skills.tech.machine_learning.description":
    "Diterapkan melalui model analisis dan pengenalan wajah di Morphix.",
  "skills.tech.computer_vision": "Computer vision",
  "skills.tech.computer_vision.description":
    "Digunakan untuk pemrosesan wajah pada gambar dan video di Morphix.",
  "skills.tech.face_recognition": "Pengenalan wajah",
  "skills.tech.face_recognition.description":
    "Diimplementasikan di Morphix menggunakan model InsightFace.",
  "skills.tech.onnx_runtime": "ONNX Runtime",
  "skills.tech.onnx_runtime.description":
    "Digunakan untuk menjalankan model analisis wajah di Morphix.",
  "skills.tech.insightface": "InsightFace",
  "skills.tech.insightface.description":
    "Digunakan untuk analisis dan pengenalan wajah di Morphix.",
  "skills.tech.opencv": "OpenCV",
  "skills.tech.opencv.description":
    "Digunakan untuk pemrosesan gambar dan video di Morphix.",
  "skills.tech.llm_apis": "API penyedia LLM",
  "skills.tech.llm_apis.description":
    "Integrasi opsional dengan API key sendiri di SEI mendukung OpenAI, Anthropic, Gemini, Groq, dan OpenRouter.",

  /* Education ---------------------------------------------------------------- */
  "education.heading": "Perjalanan Pendidikan Saya.",
  "education.lead": "Tiga tahap. Satu perjalanan belajar yang berkelanjutan.",
  "education.empty":
    "Belum ada data pendidikan terverifikasi yang dipublikasikan. Data terverifikasi akan muncul di sini setelah dikonfirmasi.",
  "education.logo_pending": "Logo resmi belum ditemukan",
  "education.current": "Sedang menempuh pendidikan",
  "education.country": "Negara",
  "education.program": "Program",
  "education.more_details": "Lihat detail pembelajaran",

  /* Contact ------------------------------------------------------------------ */
  "contact.heading": "Mari membangun sesuatu yang bermakna.",
  "contact.lead":
    "Punya proyek, peluang, atau sekadar ingin terhubung? Saya senang mendengar kabar dari Anda.",
  "contact.introduction":
    "Punya proyek, peluang, atau sekadar ingin terhubung? Saya senang mendengar kabar dari Anda.",
  "contact.email_label": "Email",
  "contact.location_label": "Domisili",
  "contact.not_configured": "Belum dikonfigurasi",
  "contact.availability_label": "Ketersediaan",
  "contact.channels_label": "Tautan lain",
  "contact.note":
    "Saya biasanya membalas dalam beberapa hari. Cara tercepat untuk menghubungi saya adalah melalui email.",

  /* Projects ----------------------------------------------------------------- */
  "projects.heading": "Proyek",
  "projects.lead": "Perangkat lunak yang saya rancang dan bangun.",
  "projects.role_label": "Peran",
  "projects.year_label": "Tahun",
  "projects.technologies_label": "Teknologi",
  "projects.status_label": "Status",
  "projects.brand_mark": "Identitas proyek, bukan screenshot antarmuka",
  "projects.no_screenshot":
    "Screenshot antarmuka belum tersedia di file proyek.",
  "projects.open_project": "Buka detail {name}",
  "projects.problem_label": "Masalah yang diangkat",
  "projects.features_label": "Fitur utama",
  "projects.process_label": "Proses pengembangan",
  "projects.challenges_label": "Tantangan teknis",

  /* Experience --------------------------------------------------------------- */
  "experience.heading": "Pengalaman Profesional",
  "experience.lead":
    "Linimasa tim dan komunitas tempat saya berkontribusi.",
  "experience.highlights_label": "Kontribusi",
  "experience.details_label": "detail pengalaman",
  "experience.period_label": "Periode",
  "experience.period_pending": "Periode belum dicantumkan",
  "experience.role_label": "Jabatan",
  "experience.role_pending": "Jabatan belum dikonfigurasi",
  "experience.category_label": "Kategori",
  "experience.category_pending": "Kategori belum dikonfigurasi",
  "experience.summary_pending": "Ringkasan peran belum ditambahkan.",
  "experience.overview_label": "Ringkasan",
  "experience.responsibilities_label": "Tanggung Jawab",
  "experience.responsibilities_pending":
    "Tanggung jawab belum didokumentasikan.",
  "experience.tools_label": "Keahlian & Fokus",
  "experience.tools_pending":
    "Belum ada keahlian atau fokus yang dikonfirmasi untuk peran ini.",
  "experience.contributions_label": "Kontribusi & Pencapaian",
  "experience.contributions_pending":
    "Kontribusi atau pencapaian spesifik belum didokumentasikan.",

  /* Recognition -------------------------------------------------------------- */
  "recognition.heading": "Records",
  "recognition.lead":
    "Kumpulan pencapaian dan sertifikat terkurasi dengan bukti aslinya.",
  "recognition.achievement_label": "Pencapaian",
  "recognition.certificate_label": "Sertifikat",
  "recognition.achievement_count": "{count} pencapaian",
  "recognition.certificate_count": "{count} sertifikat",
  "recognition.open_item": "Lihat {title}",
  "recognition.previous": "Item sebelumnya",
  "recognition.next": "Item berikutnya",
  "recognition.date_pending": "Tanggal tidak tercantum",

  /* Achievements ------------------------------------------------------------- */
  "achievements.heading": "Pencapaian",
  "achievements.lead": "Pengakuan dan tonggak, dicatat setelah terverifikasi.",
  "achievements.empty":
    "Belum ada pencapaian terverifikasi yang dipublikasikan. Data terverifikasi akan muncul di sini setelah dikonfirmasi.",

  /* Certifications ----------------------------------------------------------- */
  "certificates.heading": "Sertifikasi",
  "certificates.lead": "Kredensial dan pelatihan yang telah saya selesaikan.",
  "certificates.empty":
    "Belum ada sertifikasi terverifikasi yang dipublikasikan. Data terverifikasi akan muncul di sini setelah dikonfirmasi.",
  "certificates.issuer_label": "Diterbitkan oleh",
  "certificates.date_label": "Terbit",
  "certificates.credential_label": "ID Kredensial",
  "certificates.skills_label": "Keahlian terkait",

  /* Community ---------------------------------------------------------------- */
  "community.heading": "Komunitas & Inisiatif",
  "community.lead":
    "Ruang dan layanan digital yang didirikan serta dibangun oleh Dzarel.",
  "community.kind_community": "Komunitas",
  "community.kind_initiative": "Inisiatif",
  "community.logo_pending": "Logo resmi belum tersedia",
  "community.tagline_label": "Tagline",
  "community.tagline_pending": "Tagline belum dikonfigurasi.",
  "community.about_label": "Tentang",
  "community.social_label": "Media sosial",
  "community.social_pending": "Tautan publik belum dikonfirmasi.",

  /* Detail view -------------------------------------------------------------- */
  "detail.overview_label": "Ringkasan",
  "detail.role_label": "Peran",
  "detail.timeline_label": "Rentang waktu",
  "detail.technologies_label": "Teknologi",
  "detail.gallery_label": "Dokumentasi",
  "detail.links_label": "Tautan",
  "detail.issuer_label": "Penerbit",
  "detail.date_label": "Tanggal",
  "detail.credential_label": "ID Kredensial",
  "detail.skills_label": "Keahlian yang dicakup",

  /* Misc / states ------------------------------------------------------------ */
  "misc.present": "Sekarang",
  "misc.pending_detail": "Deskripsi lengkap menunggu verifikasi.",
  "misc.pending_note": "Menunggu detail terverifikasi",
  "misc.no_images": "Belum ada gambar dokumentasi yang dipublikasikan.",

  /* Accessibility ------------------------------------------------------------ */
  "a11y.skip": "Lompat ke konten utama",
  "a11y.portrait": "Potret resmi {name}",
  "a11y.nav_personal": "Bagian personal",
  "a11y.nav_professional": "Bagian profesional",
  "a11y.section_active": "Bagian aktif",
  "a11y.theme_control": "Kontrol tema",
  "a11y.detail_dialog": "Tampilan detail",
};
