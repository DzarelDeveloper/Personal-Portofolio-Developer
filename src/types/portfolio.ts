/**
 * Domain types for the portfolio.
 * This module is dependency-free so every other layer can import from it
 * without creating cycles.
 */

/* -------------------------------------------------------------------------- */
/* Primitives                                                                  */
/* -------------------------------------------------------------------------- */

export type Language = "id" | "en";

export type Theme = "light" | "dark";

/** A value that exists in every supported language. */
export type Localized<T> = Readonly<Record<Language, T>>;

export type LocalizedText = Localized<string>;

export type LocalizedList = Localized<readonly string[]>;

/* -------------------------------------------------------------------------- */
/* Profile                                                                     */
/* -------------------------------------------------------------------------- */

export type SocialKind =
  | "email"
  | "github"
  | "linkedin"
  | "instagram"
  | "website"
  | "whatsapp";

export interface SocialLink {
  readonly id: string;
  readonly kind: SocialKind;
  readonly label: string;
  readonly href: string;
  readonly handle?: string;
}

export interface PortraitAsset {
  readonly src: string;
  readonly webp: string;
  readonly width: number;
  readonly height: number;
}

export interface Profile {
  readonly name: string;
  readonly displayName: string;
  readonly title: LocalizedText;
  readonly tagline: LocalizedText;
  readonly location: LocalizedText;
  readonly email: string;
  readonly portrait: PortraitAsset;
  readonly interests: readonly string[];
  readonly availability: LocalizedText;
}

export interface Fact {
  readonly label: LocalizedText;
  readonly value: LocalizedText;
}

export interface AboutContent {
  readonly paragraphs: LocalizedList;
  readonly facts: readonly Fact[];
}

/* -------------------------------------------------------------------------- */
/* Projects                                                                    */
/* -------------------------------------------------------------------------- */

export interface ProjectImage {
  readonly src: string;
  readonly alt: LocalizedText;
  readonly caption: LocalizedText;
  readonly kind: "screenshot" | "brand";
}

export interface ExternalLink {
  readonly label: LocalizedText;
  readonly href: string;
}

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly code: string;
  readonly summary: LocalizedText;
  readonly overview: LocalizedList;
  readonly problem: LocalizedText;
  readonly features: LocalizedList;
  readonly role: LocalizedText | null;
  readonly roleDetails: LocalizedText;
  readonly development: LocalizedText;
  readonly challenges: LocalizedList;
  readonly year: LocalizedText | null;
  readonly status: LocalizedText | null;
  readonly technologies: readonly string[];
  readonly images: readonly ProjectImage[];
  readonly links: readonly ExternalLink[];
  /** `false` → the copy is an approved placeholder awaiting verified detail. */
  readonly verified: boolean;
}

/* -------------------------------------------------------------------------- */
/* Experience                                                                  */
/* -------------------------------------------------------------------------- */

export interface ExperienceEntry {
  readonly id: string;
  readonly org: string;
  readonly role: LocalizedText | null;
  readonly period: LocalizedText | null;
  readonly kind: LocalizedText | null;
  readonly summary: LocalizedText | null;
  readonly responsibilities: LocalizedList | null;
  readonly technologies: readonly string[];
  readonly contributions: LocalizedList | null;
  readonly verified: boolean;
}

/* -------------------------------------------------------------------------- */
/* Achievements & certificates                                                 */
/* -------------------------------------------------------------------------- */

export interface Achievement {
  readonly id: string;
  readonly title: LocalizedText;
  readonly issuer: LocalizedText;
  readonly date: LocalizedText;
  readonly detail: LocalizedText;
  readonly verified: boolean;
}

export interface CertificateImage {
  readonly src: string;
  readonly alt: LocalizedText;
}

export interface Certificate {
  readonly id: string;
  readonly title: LocalizedText;
  readonly issuer: LocalizedText;
  readonly date: LocalizedText;
  readonly credentialId: string | null;
  readonly skills: readonly string[];
  readonly image: CertificateImage | null;
  readonly verified: boolean;
}

/* -------------------------------------------------------------------------- */
/* Community                                                                   */
/* -------------------------------------------------------------------------- */

export interface CommunityEntry {
  readonly id: string;
  readonly name: string;
  readonly role: LocalizedText | null;
  readonly period: LocalizedText | null;
  readonly summary: LocalizedText | null;
  readonly focus: readonly string[];
  readonly verified: boolean;
}

/* -------------------------------------------------------------------------- */
/* Navigation & interaction                                                    */
/* -------------------------------------------------------------------------- */

export type LeftSectionId =
  | "about"
  | "skills"
  | "education"
  | "contact";

export type RightSectionId =
  | "projects"
  | "experience"
  | "recognition"
  | "achievements"
  | "certificates"
  | "community";

export type SectionId = LeftSectionId | RightSectionId;

export type DetailTarget =
  | { readonly kind: "project"; readonly id: string }
  | { readonly kind: "certificate"; readonly id: string };
