import { academicJourney } from "../../data/education";
import { useLanguage } from "../../hooks/useLanguage";
import { pick } from "../../i18n";
import styles from "./EducationSection.module.css";

function SchoolLogo({
  logo,
  institution,
}: {
  readonly logo: (typeof academicJourney)[number]["logo"];
  readonly institution: string;
}) {
  const { language, t } = useLanguage();

  return (
    <figure className={styles.imageArea}>
      {logo ? (
        <>
          <img
            className={styles.schoolLogoImage}
            src={logo.src}
            alt={pick(logo.alt, language)}
            loading="lazy"
            decoding="async"
          />
        </>
      ) : (
        <div
          className={styles.imagePlaceholder}
          role="group"
          aria-label={`${institution}: ${t("education.logo_pending")}`}
        >
          <span className={styles.institutionMark} aria-hidden="true">
            SMPN 2
          </span>
          <span>{t("education.logo_pending")}</span>
          <span className={styles.placeholderSchool}>{institution}</span>
        </div>
      )}
    </figure>
  );
}

export function EducationSection() {
  const { language, t } = useLanguage();

  return (
    <div className={styles.journey}>
      <ol className={styles.timeline}>
        {academicJourney.map((milestone, index) => (
          <li
            key={milestone.id}
            className={styles.milestone}
            data-current={milestone.status === "current" || undefined}
            style={{ animationDelay: `${index * 180}ms` }}
          >
            <div className={styles.milestoneImage}>
              <SchoolLogo
                logo={milestone.logo}
                institution={milestone.institution}
              />
            </div>

            <span className={styles.timelineNode} aria-hidden="true">
              <span />
            </span>

            <article className={styles.milestoneContent}>
              <div className={styles.milestoneMeta}>
                <span className={styles.level}>{pick(milestone.level, language)}</span>
                {milestone.period ? (
                  <span className={styles.period}>
                    {pick(milestone.period, language)}
                  </span>
                ) : null}
                {milestone.status === "current" ? (
                  <span className={styles.currentStatus}>
                    <span aria-hidden="true" />
                    {t("education.current")}
                  </span>
                ) : null}
              </div>

              <h2 className={styles.schoolName}>{milestone.institution}</h2>

              {milestone.country ? (
                <p className={styles.country}>
                  {t("education.country")}: {pick(milestone.country, language)}
                </p>
              ) : null}

              {milestone.program ? (
                <div className={styles.program}>
                  <span className={styles.programLabel}>
                    {t("education.program")}
                  </span>
                  <p>{pick(milestone.program, language)}</p>
                </div>
              ) : null}

              {milestone.highlights.length > 0 ||
              milestone.activities.length > 0 ||
              milestone.achievements.length > 0 ||
              milestone.documents.length > 0 ? (
                <details className={styles.moreDetails}>
                  <summary>{t("education.more_details")}</summary>
                  {milestone.highlights.length > 0 ? (
                    <ul>
                      {milestone.highlights.map((highlight) => (
                        <li key={pick(highlight, language)}>
                          {pick(highlight, language)}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {milestone.activities.length > 0 ? (
                    <ul>
                      {milestone.activities.map((activity) => (
                        <li key={pick(activity, language)}>
                          {pick(activity, language)}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {milestone.achievements.length > 0 ? (
                    <ul>
                      {milestone.achievements.map((achievement) => (
                        <li key={pick(achievement, language)}>
                          {pick(achievement, language)}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {milestone.documents.map((document) => (
                    <a
                      key={document.href}
                      href={document.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {pick(document.label, language)}
                    </a>
                  ))}
                </details>
              ) : null}
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
