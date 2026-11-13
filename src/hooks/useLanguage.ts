import { useCallback, useSyncExternalStore } from "react";
import {
  DEFAULT_LANGUAGE,
  isLanguage,
  translate,
  type TranslationKey,
  type TranslationVars,
} from "../i18n";
import type { Language } from "../types/portfolio";

/**
 * Language store — same subscription pattern as the theme store.
 * Components never duplicate markup per language; they call `t()`.
 */

const STORAGE_KEY = "dzarel.lang";

function resolveInitialLanguage(): Language {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(value)) return value;
  } catch {
    /* storage unavailable */
  }
  return DEFAULT_LANGUAGE;
}

let currentLanguage: Language = resolveInitialLanguage();

const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): Language {
  return currentLanguage;
}

export function setLanguage(language: Language): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch {
    /* storage unavailable — the language still applies for this session */
  }

  currentLanguage = language;
  document.documentElement.lang = language;
  for (const listener of listeners) listener();
}

export interface LanguageControls {
  readonly language: Language;
  readonly setLanguage: (language: Language) => void;
  readonly t: (key: TranslationKey, vars?: TranslationVars) => string;
}

export function useLanguage(): LanguageControls {
  const language = useSyncExternalStore(subscribe, getSnapshot);
  const t = useCallback(
    (key: TranslationKey, vars?: TranslationVars) =>
      translate(language, key, vars),
    [language],
  );

  return { language, setLanguage, t };
}
