/**
 * English interface copy.
 * The shape of this object is the contract every other dictionary must satisfy;
 * `id.ts` is checked against it, so a missing translation is a compile error.
 *
 * Content that belongs to the portfolio itself (project names, roles, dates …)
 * lives in `src/data`, not here.
 */
export const en = {
  /* Brand & shell -------------------------------------------------------- */
  "brand.role": "Software Developer",
  "brand.tagline": "Building secure, user-focused software.",
  "home.tagline_first": "To become a developer",
  "home.tagline_second": "who not only codes — but creates impact",

  /* Panel headings ----------------------------------------------------------- */
  "panel.personal": "Personal",
  "panel.professional": "Professional",

  /* Navigation --------------------------------------------------------------- */
  "nav.about": "About Me",
  "nav.skills": "Skills",
  "nav.education": "Education",
  "nav.contact": "Contact",
  "nav.projects": "Projects",
  "nav.experience": "Experience",
  "nav.records": "Records",
  "nav.community": "Community",

  /* Controls ----------------------------------------------------------------- */
  "control.appearance": "Appearance",
  "control.theme_to_light": "Switch to light theme",
  "control.theme_to_dark": "Switch to dark theme",
  "control.light": "Light",
  "control.dark": "Dark",
  "control.language": "Language",
  "control.language_switch": "Switch interface language",
  "control.language_id": "Indonesian",
  "control.language_en": "English",

  /* Actions ------------------------------------------------------------------ */
  "action.close": "Close",
  "action.back": "Back",
  "action.back_home": "Back to home",
  "action.back_to_overview": "Back to overview",
  "action.back_to_projects": "Back to Projects",
  "action.open_details": "View details",
  "action.copy_email": "Copy email address",
  "action.copied": "Copied to clipboard",
  "action.new_tab": "opens in a new tab",
  "action.open_link": "Open",

  /* About -------------------------------------------------------------------- */
  "about.heading": "About Me",
  "about.lead": "Software developer focused on web systems, application security and the craft of shipping software that is dependable.",
  "about.eyebrow": "Profile",
  "about.introduction":
    "I am a Software Developer interested in building secure, useful, and user-focused software.",
  "about.what_i_do": "What I Do",
  "about.my_approach": "My Approach",
  "about.technical_toolkit": "Technical Toolkit",
  /* Background --------------------------------------------------------------- */

  /* Skills ------------------------------------------------------------------- */
  "skills.heading": "Skills & Technologies",
  "skills.lead": "Explore my technical ecosystem.",
  "skills.scope_note":
    "Technologies are grounded in public projects and profile details; AI is presented as project work and exploration.",
  "skills.globe_label": "Interactive technical ecosystem map",
  "skills.root_label": "Software Developer",
  "skills.technology_label": "Connected technologies and practices",
  "skills.branch_label": "Specialization",
  "skills.status.demonstrated": "Documented in public projects",
  "skills.status.focus": "Documented focus area",
  "skills.status.exploring": "Project work & current exploration",
  "skills.status.unverified": "Awaiting verification",
  "skills.branch.frontend": "Frontend Development",
  "skills.branch.frontend.description":
    "Frontend frameworks and web technologies documented across public projects.",
  "skills.branch.backend": "Backend Development",
  "skills.branch.backend.description":
    "Backend runtimes, APIs and application services documented in public projects.",
  "skills.branch.database": "Database & Data",
  "skills.branch.database.description":
    "Relational databases and data-access tools used across public projects.",
  "skills.branch.security": "Application Security",
  "skills.branch.security.description":
    "A documented focus on secure development and protecting user data.",
  "skills.branch.engineering": "Software Engineering",
  "skills.branch.engineering.description":
    "Engineering practices documented as part of the existing profile.",
  "skills.branch.ai": "AI & Emerging Technologies",
  "skills.branch.ai.description":
    "An exploration area, not a claim of professional proficiency.",
  "skills.tech.react": "React",
  "skills.tech.react.description":
    "Used across the portfolio and web application projects.",
  "skills.tech.nextjs": "Next.js",
  "skills.tech.nextjs.description":
    "Listed as a frontend framework in the public developer profile.",
  "skills.tech.typescript": "TypeScript",
  "skills.tech.typescript.description":
    "Used across the portfolio and TypeScript application projects.",
  "skills.tech.javascript": "JavaScript",
  "skills.tech.javascript.description":
    "Used in web projects, including a vanilla JavaScript application.",
  "skills.tech.html": "HTML",
  "skills.tech.html.description":
    "Used to structure web interfaces in frontend projects.",
  "skills.tech.css": "CSS",
  "skills.tech.css.description":
    "Used to style web interfaces across frontend projects.",
  "skills.tech.vite": "Vite",
  "skills.tech.vite.description":
    "Used as the build tool for the SEI React and TypeScript application.",
  "skills.tech.react_router": "React Router",
  "skills.tech.react_router.description":
    "Used for client-side routing in the SEI single-page application.",
  "skills.tech.nodejs": "Node.js",
  "skills.tech.nodejs.description":
    "Listed as a backend runtime in the public developer profile.",
  "skills.tech.php": "PHP",
  "skills.tech.php.description":
    "Used for the Masakan Nusantara restaurant ordering application backend.",
  "skills.tech.python": "Python",
  "skills.tech.python.description":
    "Used for the Tandara API and the Morphix desktop application.",
  "skills.tech.fastapi": "FastAPI",
  "skills.tech.fastapi.description":
    "Used to build the REST backend for the Tandara application.",
  "skills.tech.rest_api": "REST APIs",
  "skills.tech.rest_api.description":
    "Implemented for the Tandara backend and consumed by its applications.",
  "skills.tech.websockets": "WebSockets",
  "skills.tech.websockets.description":
    "Used for realtime attendance and parent updates in the Tandara API.",
  "skills.tech.jwt": "JWT authentication",
  "skills.tech.jwt.description":
    "Implemented for authentication and role authorization in the Tandara API.",
  "skills.tech.mysql": "MySQL",
  "skills.tech.mysql.description":
    "Used as the relational database for the Masakan Nusantara application.",
  "skills.tech.mariadb": "MariaDB",
  "skills.tech.mariadb.description":
    "Supported as the MySQL-compatible database option for Masakan Nusantara.",
  "skills.tech.sqlite": "SQLite",
  "skills.tech.sqlite.description":
    "Used for local and test database storage in the Tandara API.",
  "skills.tech.sqlalchemy": "SQLAlchemy",
  "skills.tech.sqlalchemy.description":
    "Used by the Tandara API for database models and schema setup.",
  "skills.tech.secure_development": "Secure development",
  "skills.tech.secure_development.description":
    "Considering security throughout software design and implementation.",
  "skills.tech.input_validation": "Input validation",
  "skills.tech.input_validation.description":
    "Validating user input as part of secure application development.",
  "skills.tech.data_protection": "Data protection",
  "skills.tech.data_protection.description":
    "Protecting user data as a documented application security focus.",
  "skills.tech.version_control": "Version control",
  "skills.tech.version_control.description":
    "A documented engineering practice for maintaining software over time.",
  "skills.tech.testing": "Testing",
  "skills.tech.testing.description":
    "A documented engineering practice for checking software behavior.",
  "skills.tech.documentation": "Documentation",
  "skills.tech.documentation.description":
    "A documented practice for keeping software understandable and maintainable.",
  "skills.tech.artificial_intelligence": "Artificial Intelligence",
  "skills.tech.artificial_intelligence.description":
    "Explored through AI-enabled features in SEI and the Morphix computer-vision application.",
  "skills.tech.machine_learning": "Machine learning",
  "skills.tech.machine_learning.description":
    "Applied through face analysis and recognition models in Morphix.",
  "skills.tech.computer_vision": "Computer vision",
  "skills.tech.computer_vision.description":
    "Used for image and video face processing in Morphix.",
  "skills.tech.face_recognition": "Face recognition",
  "skills.tech.face_recognition.description":
    "Implemented in Morphix using InsightFace models.",
  "skills.tech.onnx_runtime": "ONNX Runtime",
  "skills.tech.onnx_runtime.description":
    "Used to run the face-analysis models in Morphix.",
  "skills.tech.insightface": "InsightFace",
  "skills.tech.insightface.description":
    "Used for face analysis and recognition in Morphix.",
  "skills.tech.opencv": "OpenCV",
  "skills.tech.opencv.description":
    "Used for image and video processing in Morphix.",
  "skills.tech.llm_apis": "LLM provider APIs",
  "skills.tech.llm_apis.description":
    "Optional bring-your-own-key integrations in SEI support OpenAI, Anthropic, Gemini, Groq and OpenRouter.",

  /* Education ---------------------------------------------------------------- */
  "education.heading": "My Educational Journey.",
  "education.lead": "Three stages. One continuous journey of learning.",
  "education.empty":
    "No verified education record has been published yet. Verified records will appear here once confirmed.",
  "education.logo_pending": "Official logo not found",
  "education.current": "Currently studying",
  "education.country": "Country",
  "education.program": "Program",
  "education.more_details": "View learning details",

  /* Contact ------------------------------------------------------------------ */
  "contact.heading": "Let's build something meaningful.",
  "contact.lead": "Have a project, an opportunity, or just want to connect? I'd be happy to hear from you.",
  "contact.introduction":
    "Have a project, an opportunity, or just want to connect? I'd be happy to hear from you.",
  "contact.email_label": "Email",
  "contact.location_label": "Based in",
  "contact.not_configured": "Not configured yet",
  "contact.availability_label": "Availability",
  "contact.channels_label": "Elsewhere",
  "contact.note":
    "I usually reply within a couple of days. The quickest way to reach me is email.",

  /* Projects ----------------------------------------------------------------- */
  "projects.heading": "Projects",
  "projects.lead": "Software I have designed and built.",
  "projects.role_label": "Role",
  "projects.year_label": "Year",
  "projects.technologies_label": "Technologies",
  "projects.status_label": "Status",
  "projects.brand_mark": "Project identity, not an interface screenshot",
  "projects.no_screenshot":
    "An interface screenshot is not available in the project files yet.",
  "projects.open_project": "Open {name} details",
  "projects.problem_label": "Problem",
  "projects.features_label": "Main features",
  "projects.process_label": "Development process",
  "projects.challenges_label": "Technical challenges",

  /* Experience --------------------------------------------------------------- */
  "experience.heading": "Professional Experience",
  "experience.lead": "A timeline of the teams and communities I've contributed to.",
  "experience.highlights_label": "Contributions",
  "experience.details_label": "experience details",
  "experience.period_label": "Period",
  "experience.period_pending": "Period not provided",
  "experience.role_label": "Role",
  "experience.role_pending": "Role not configured yet",
  "experience.category_label": "Category",
  "experience.category_pending": "Category not configured yet",
  "experience.summary_pending": "A concise role summary has not been added yet.",
  "experience.overview_label": "Overview",
  "experience.responsibilities_label": "Responsibilities",
  "experience.responsibilities_pending":
    "Responsibilities have not been documented yet.",
  "experience.tools_label": "Skills & Focus",
  "experience.tools_pending":
    "No skills or focus areas have been confirmed for this role yet.",
  "experience.contributions_label": "Contributions & Achievements",
  "experience.contributions_pending":
    "No specific contributions or achievements have been documented yet.",

  /* Recognition -------------------------------------------------------------- */
  "recognition.heading": "Records",
  "recognition.lead":
    "A curated collection of achievements and certificates, presented with their original evidence.",
  "recognition.achievement_label": "Achievements",
  "recognition.certificate_label": "Certificates",
  "recognition.achievement_count": "{count} achievements",
  "recognition.certificate_count": "{count} certificates",
  "recognition.open_item": "View {title}",
  "recognition.previous": "Previous item",
  "recognition.next": "Next item",
  "recognition.date_pending": "Date not listed",

  /* Achievements ------------------------------------------------------------- */
  "achievements.heading": "Achievements",
  "achievements.lead": "Recognitions and milestones, recorded as they are verified.",
  "achievements.empty":
    "No verified achievements are published yet. Verified records will appear here once confirmed.",

  /* Certifications ----------------------------------------------------------- */
  "certificates.heading": "Certifications",
  "certificates.lead": "Credentials and training I have completed.",
  "certificates.empty":
    "No verified certifications are published yet. Verified records will appear here once confirmed.",
  "certificates.issuer_label": "Issued by",
  "certificates.date_label": "Issued",
  "certificates.credential_label": "Credential ID",
  "certificates.skills_label": "Associated skills",

  /* Community ---------------------------------------------------------------- */
  "community.heading": "Communities & Initiatives",
  "community.lead": "Digital spaces and services founded and built by Dzarel.",
  "community.kind_community": "Community",
  "community.kind_initiative": "Initiative",
  "community.logo_pending": "Official logo not available",
  "community.tagline_label": "Tagline",
  "community.tagline_pending": "Tagline has not been configured.",
  "community.about_label": "About",
  "community.social_label": "Social media",
  "community.social_pending": "Public links have not been confirmed.",

  /* Detail view -------------------------------------------------------------- */
  "detail.overview_label": "Overview",
  "detail.role_label": "Role",
  "detail.timeline_label": "Timeline",
  "detail.technologies_label": "Technologies",
  "detail.gallery_label": "Documentation",
  "detail.links_label": "Links",
  "detail.issuer_label": "Issuer",
  "detail.date_label": "Date",
  "detail.credential_label": "Credential ID",
  "detail.skills_label": "Skills covered",

  /* Misc / states ------------------------------------------------------------ */
  "misc.present": "Present",
  "misc.pending_detail": "Full description pending verification.",
  "misc.pending_note": "Awaiting verified detail",
  "misc.no_images": "No documentation image has been published yet.",

  /* Accessibility ------------------------------------------------------------ */
  "a11y.skip": "Skip to main content",
  "a11y.portrait": "Formal portrait of {name}",
  "a11y.nav_personal": "Personal sections",
  "a11y.nav_professional": "Professional sections",
  "a11y.section_active": "Current section",
  "a11y.theme_control": "Theme controls",
  "a11y.detail_dialog": "Detail view",
} as const;

export type TranslationKey = keyof typeof en;
