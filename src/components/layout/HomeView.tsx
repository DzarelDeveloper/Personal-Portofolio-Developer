import { useEffect } from "react";
import { PERSONAL_SECTIONS, PROFESSIONAL_SECTIONS } from "../../data/navigation";
import { useLanguage } from "../../hooks/useLanguage";
import type { SectionId } from "../../types/portfolio";
import { SideNavigation } from "../navigation/SideNavigation";
import { Portrait } from "../profile/Portrait";
import { LanguageToggle } from "../ui/LanguageToggle";
import { ThemeToggle } from "../ui/ThemeToggle";
import styles from "./HomeView.module.css";

interface HomeViewProps {
  readonly onSelect: (id: SectionId) => void;
  /** Section the visitor just returned from — focus is restored to its entry. */
  readonly focusId?: SectionId | null;
}

/**
 * The home composition: personal navigation on the left, the portrait as the
 * fixed centre, professional navigation on the right. Nothing is captioned
 * beneath the portrait — the navigation carries every label.
 */
export function HomeView({ onSelect, focusId = null }: HomeViewProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (focusId === null) return;
    const entry = document.querySelector<HTMLAnchorElement>(
      `[data-nav-id="${focusId}"]`,
    );
    entry?.focus();
  }, [focusId]);

  return (
    <main id="main" className={styles.home}>
      <div className={styles.left}>
        <SideNavigation
          ariaLabel={t("a11y.nav_personal")}
          entries={PERSONAL_SECTIONS}
          activeId={null}
          align="left"
          onSelect={onSelect}
        />
      </div>

      <div className={styles.center}>
        <div className={styles.controls}>
          <ThemeToggle />
          <LanguageToggle />
        </div>
        <p
          className={styles.tagline}
          aria-label={`${t("home.tagline_first")} ${t("home.tagline_second")}`}
        >
          <span className={styles.taglineFirst}>{t("home.tagline_first")}</span>
          <span className={styles.taglineSecond}>{t("home.tagline_second")}</span>
        </p>
        <div className={styles.portrait}>
          <Portrait />
        </div>
      </div>

      <div className={styles.right}>
        <SideNavigation
          ariaLabel={t("a11y.nav_professional")}
          entries={PROFESSIONAL_SECTIONS}
          activeId={null}
          align="right"
          onSelect={onSelect}
        />
      </div>
    </main>
  );
}
