import type { Certificate } from "../types/portfolio";

/**
 * EDITABLE CONTENT
 * ---------------------------------------------------------------------------
 * No verified certification has been supplied yet, so this list is empty and
 * the UI shows an explicit empty state. Never publish an unverified credential.
 *
 * Add entries in this shape once a certificate is confirmed (place the scanned
 * image in `src/assets/images/certificates/`):
 *
 * {
 *   id: "example",
 *   title: { id: "Nama Sertifikat", en: "Certificate name" },
 *   issuer: { id: "Penerbit", en: "Issuer" },
 *   date: { id: "2025", en: "2025" },
 *   credentialId: null,
 *   skills: [],
 *   image: { src: certificates.example, alt: { id: "…", en: "…" } },
 *   verified: true,
 * }
 */
export const certificates: readonly Certificate[] = [];

export function findCertificate(id: string): Certificate | undefined {
  return certificates.find((certificate) => certificate.id === id);
}
