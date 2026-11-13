import type { Language, Localized } from "../types/portfolio";
import { en, type TranslationKey } from "./en";
import { id } from "./id";

export type { TranslationKey };

export const LANGUAGES: readonly Language[] = ["id", "en"];

export const LANGUAGE_LABEL_KEY: Record<Language, TranslationKey> = {
  id: "control.language_id",
  en: "control.language_en",
};

const DICTIONARIES: Record<Language, Record<TranslationKey, string>> = { en, id };

export const DEFAULT_LANGUAGE: Language = "id";

export function isLanguage(value: unknown): value is Language {
  return value === "id" || value === "en";
}

export type TranslationVars = Readonly<Record<string, string | number>>;

/** Resolve a UI string, with optional `{token}` interpolation. */
export function translate(
  language: Language,
  key: TranslationKey,
  vars?: TranslationVars,
): string {
  const template = DICTIONARIES[language][key] ?? en[key];
  if (!vars) return template;

  let out: string = template;
  for (const [token, value] of Object.entries(vars)) {
    out = out.split(`{${token}}`).join(String(value));
  }
  return out;
}

/** Read the value of a localized data field. */
export function pick<T>(value: Localized<T>, language: Language): T {
  return value[language];
}
