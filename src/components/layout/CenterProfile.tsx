import { profile } from "../../data/profile";
import { useLanguage } from "../../hooks/useLanguage";
import { pick } from "../../i18n";
import { Portrait } from "../profile/Portrait";
import { LanguageToggle } from "../ui/LanguageToggle";
import { ThemeToggle } from "../ui/ThemeToggle";
import styles from "./CenterProfile.module.css";

/**
 * The centre column: theme and language controls, the portrait as the visual
 * anchor, and the identity block beneath it. It is the page's `main` landmark.
 */
export function CenterProfile() {
  const { language } = useLanguage();

  return (
    <main id="main" className={styles.center}>
      <div className={styles.controls}>
        <ThemeToggle />
        <LanguageToggle />
      </div>

      <div className={styles.portraitStage}>
        <div className={styles.portraitInner}>
          <Portrait />
        </div>
      </div>

      <div className={styles.identity}>
        <h1 className={styles.name}>{profile.displayName}</h1>
        <p className={styles.role}>{pick(profile.title, language)}</p>
        <p className={styles.tagline}>{pick(profile.tagline, language)}</p>
      </div>
    </main>
  );
}
