import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { PERSONAL_SECTIONS, PROFESSIONAL_SECTIONS } from "../data/navigation";
import type { SectionId } from "../types/portfolio";

/**
 * The home composition and the content sections are two separate visual states.
 * This hook owns which one is showing and keeps the URL in step with it, so the
 * browser back and forward buttons move between them — no router dependency.
 */

const SECTION_IDS: readonly string[] = [
  ...PERSONAL_SECTIONS.map((entry) => entry.id),
  ...PROFESSIONAL_SECTIONS.map((entry) => entry.id),
  "achievements",
  "certificates",
];

function isSectionId(value: string): value is SectionId {
  return SECTION_IDS.includes(value);
}

/** `#/projects` → `"projects"`; anything else → `null` (the home composition). */
function readSectionFromUrl(): SectionId | null {
  const raw = window.location.hash.replace(/^#\/?/, "");
  return isSectionId(raw) ? raw : null;
}

function homeUrl(): string {
  return window.location.pathname + window.location.search;
}

function normalizeRemovedRoutes(): void {
  const raw = window.location.hash.replace(/^#\/?/, "");
  if (raw === "background") {
    window.history.replaceState(window.history.state, "", homeUrl());
  }
}

function updateWithTransition(update: () => void): void {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (
    typeof document.startViewTransition !== "function" ||
    reducedMotion
  ) {
    update();
    return;
  }

  document.startViewTransition(() => {
    flushSync(update);
  });
}

export interface SectionRoute {
  /** The open section, or `null` when the home composition is showing. */
  readonly section: SectionId | null;
  readonly navigate: (id: SectionId) => void;
  readonly goHome: () => void;
}

export function useSectionRoute(): SectionRoute {
  const [section, setSection] = useState<SectionId | null>(readSectionFromUrl);

  useEffect(() => {
    normalizeRemovedRoutes();
    const onPopState = (): void => {
      normalizeRemovedRoutes();
      updateWithTransition(() => {
        setSection(readSectionFromUrl());
        window.scrollTo(0, 0);
      });
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = useCallback((id: SectionId) => {
    if (readSectionFromUrl() === id) return;
    updateWithTransition(() => {
      window.history.pushState({ section: id }, "", `#/${id}`);
      setSection(id);
      window.scrollTo(0, 0);
    });
  }, []);

  const goHome = useCallback(() => {
    if (readSectionFromUrl() === null) return;
    updateWithTransition(() => {
      window.history.pushState({ section: null }, "", homeUrl());
      setSection(null);
      window.scrollTo(0, 0);
    });
  }, []);

  return { section, navigate, goHome };
}
