import type { Achievement } from "../types/portfolio";

/**
 * EDITABLE CONTENT
 * ---------------------------------------------------------------------------
 * No verified award, competition result or ranking has been supplied, so this
 * list is intentionally empty. The UI renders an explicit empty state instead
 * of sample content.
 *
 * Add entries in this shape once a result is confirmed:
 *
 * {
 *   id: "example",
 *   title: { id: "Juara 1 ...", en: "1st place ..." },
 *   issuer: { id: "Penyelenggara", en: "Organiser" },
 *   date: { id: "2025", en: "2025" },
 *   detail: { id: "Deskripsi singkat.", en: "Short description." },
 *   verified: true,
 * }
 */
export const achievements: readonly Achievement[] = [];
