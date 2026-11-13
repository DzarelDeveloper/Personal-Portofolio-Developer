import { ArrowUpRight } from "lucide-react";
import { communityEntries } from "../../data/community";
import { useLanguage } from "../../hooks/useLanguage";
import { pick } from "../../i18n";
import styles from "./CommunitySection.module.css";

export function CommunitySection() {
  const { language, t } = useLanguage();

  return (
    <div className={styles.grid}>
      {communityEntries.map((entry, index) => (
        <article key={entry.id} className={styles.community}>
          <div
            className={styles.logoFrame}
            aria-label={
              entry.logo
                ? pick(entry.logo.alt, language)
                : `${entry.name}: ${t("community.logo_pending")}`
            }
          >
            <div className={styles.logoBadge}>
              {entry.logo ? (
                <img
                  className={styles.logo}
                  src={entry.logo.src}
                  alt={pick(entry.logo.alt, language)}
                  loading="eager"
                  decoding="async"
                />
              ) : (
                <span className={styles.logoPending}>
                  {t("community.logo_pending")}
                </span>
              )}
            </div>
          </div>

          <div className={styles.identity}>
            <p className={styles.index}>
              {String(index + 1).padStart(2, "0")} /{" "}
              {entry.id === "codesphere"
                ? t("community.kind_community")
                : t("community.kind_initiative")}
            </p>
            <h2 className={styles.name}>{entry.name}</h2>
            <p className={styles.role}>{pick(entry.role, language)}</p>
          </div>

          <div className={styles.details}>
            <section className={styles.detail}>
              <h3>{t("community.tagline_label")}</h3>
              <p className={entry.tagline ? styles.tagline : styles.pending}>
                {entry.tagline
                  ? pick(entry.tagline, language)
                  : t("community.tagline_pending")}
              </p>
            </section>

            <section className={styles.detail}>
              <h3>{t("community.about_label")}</h3>
              <p className={styles.summary}>{pick(entry.summary, language)}</p>
            </section>
          </div>

          <div className={styles.socials}>
            <h3>{t("community.social_label")}</h3>
            {entry.socialLinks.length > 0 ? (
              <ul className={styles.socialList}>
                {entry.socialLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      className={styles.socialLink}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.pending}>
                {t("community.social_pending")}
              </p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
