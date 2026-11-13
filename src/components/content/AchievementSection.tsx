import { achievements } from "../../data/achievements";
import { useLanguage } from "../../hooks/useLanguage";
import { pick } from "../../i18n";
import styles from "./sections.module.css";

export function AchievementSection() {
  const { language, t } = useLanguage();

  if (achievements.length === 0) {
    return (
      <div className={styles.body}>
        <p className={styles.emptyState}>{t("achievements.empty")}</p>
      </div>
    );
  }

  return (
    <div className={styles.body}>
      {achievements.map((achievement) => (
        <article key={achievement.id} className={styles.entry}>
          <div className={styles.entryHead}>
            <h3 className={styles.entryTitle}>
              {pick(achievement.title, language)}
            </h3>
            <span className={styles.entryPeriod}>
              {pick(achievement.date, language)}
            </span>
          </div>
          <p className={styles.entrySubtitle}>
            {pick(achievement.issuer, language)}
          </p>
          <p className="prose">{pick(achievement.detail, language)}</p>
        </article>
      ))}
    </div>
  );
}
