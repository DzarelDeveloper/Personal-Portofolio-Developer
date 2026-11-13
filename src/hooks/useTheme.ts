import { useSyncExternalStore } from "react";
import type { Theme } from "../types/portfolio";

/**
 * Theme store.
 *
 * Implemented with `useSyncExternalStore` rather than React context: the value
 * is a single primitive that a handful of components read, so a subscription
 * store keeps it dependency-free and avoids re-rendering the whole tree.
 */

const STORAGE_KEY = "dzarel.theme";
const ANIM_CLASS = "theme-anim";
const ANIM_DURATION = 420;

function readStoredTheme(): Theme | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function prefersDark(): boolean {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function resolveInitialTheme(): Theme {
  // `index.html` applies the same resolution before first paint.
  return readStoredTheme() ?? (prefersDark() ? "dark" : "light");
}

let currentTheme: Theme = resolveInitialTheme();

const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): Theme {
  return currentTheme;
}

function commit(theme: Theme): void {
  currentTheme = theme;
  document.documentElement.dataset.theme = theme;
  for (const listener of listeners) listener();
}

export function setTheme(theme: Theme): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* storage unavailable — the theme still applies for this session */
  }

  if (!prefersReducedMotion()) {
    const root = document.documentElement;
    root.classList.add(ANIM_CLASS);
    window.setTimeout(() => root.classList.remove(ANIM_CLASS), ANIM_DURATION);
  }

  commit(theme);
}

export function toggleTheme(): void {
  setTheme(currentTheme === "dark" ? "light" : "dark");
}

/** Follow the OS setting while the visitor has not chosen a theme explicitly. */
function bindSystemPreference(): () => void {
  const query = window.matchMedia("(prefers-color-scheme: dark)");
  const onChange = (event: MediaQueryListEvent): void => {
    if (readStoredTheme() === null) commit(event.matches ? "dark" : "light");
  };
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

bindSystemPreference();

export interface ThemeControls {
  readonly theme: Theme;
  readonly setTheme: (theme: Theme) => void;
  readonly toggleTheme: () => void;
}

export function useTheme(): ThemeControls {
  const theme = useSyncExternalStore(subscribe, getSnapshot);
  return { theme, setTheme, toggleTheme };
}
