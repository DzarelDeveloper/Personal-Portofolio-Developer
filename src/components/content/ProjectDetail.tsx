import { useLanguage } from "../../hooks/useLanguage";
import { pick } from "../../i18n";
import type { Project } from "../../types/portfolio";
import styles from "./sections.module.css";

interface ProjectDetailProps {
  readonly project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { language, t } = useLanguage();
  const [hero, ...gallery] = project.images;

  return (
    <article className={styles.detailBody}>
      <header className={styles.detailHeader}>
        <p className="eyebrow">{project.code}</p>
        <h1 className={styles.detailTitle}>{project.name}</h1>
        <p className={styles.detailSummary}>
          {pick(project.summary, language)}
        </p>
      </header>

      {hero?.kind === "brand" ? (
        <figure className={styles.projectDetailBrand}>
          <img
            className={styles.projectDetailBrandImage}
            src={hero.src}
            alt={pick(hero.alt, language)}
            decoding="async"
          />
          <figcaption className={styles.figureCaption}>
            {pick(hero.caption, language)}
          </figcaption>
        </figure>
      ) : hero ? (
        <figure className={styles.figure}>
          <img
            className={styles.heroImage}
            src={hero.src}
            alt={pick(hero.alt, language)}
            decoding="async"
          />
          <figcaption className={styles.figureCaption}>
            {pick(hero.caption, language)}
          </figcaption>
        </figure>
      ) : (
        <p className={styles.projectNoScreenshot}>
          {t("projects.no_screenshot")}
        </p>
      )}

      {gallery.length > 0 ? (
        <section className={styles.detailBlock}>
          <h2 className={styles.detailBlockTitle}>
            {t("detail.gallery_label")}
          </h2>
          <div className={styles.detailProjectGallery}>
            {gallery.map((image) => (
              <figure key={image.src} className={styles.detailProjectFigure}>
                <img
                  className={styles.detailProjectImage}
                  src={image.src}
                  alt={pick(image.alt, language)}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className={styles.figureCaption}>
                  {pick(image.caption, language)}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <div className={styles.projectDetailSections}>
        <section className={styles.detailBlock}>
          <h2 className={styles.detailBlockTitle}>
            {t("detail.overview_label")}
          </h2>
          <div className={styles.paragraphs}>
            {pick(project.overview, language).map((paragraph) => (
              <p key={paragraph} className="prose">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className={styles.detailBlock}>
          <h2 className={styles.detailBlockTitle}>
            {t("projects.problem_label")}
          </h2>
          <p className="prose">{pick(project.problem, language)}</p>
        </section>

        <section className={styles.detailBlock}>
          <h2 className={styles.detailBlockTitle}>
            {t("projects.features_label")}
          </h2>
          <ul className={styles.projectDetailList}>
            {pick(project.features, language).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className={styles.detailBlock}>
          <h2 className={styles.detailBlockTitle}>
            {t("projects.role_label")}
          </h2>
          <p className="prose">
            <strong>
              {project.role ? pick(project.role, language) : "—"}
            </strong>{" "}
            {pick(project.roleDetails, language)}
          </p>
        </section>

        <section className={styles.detailBlock}>
          <h2 className={styles.detailBlockTitle}>
            {t("projects.process_label")}
          </h2>
          <p className="prose">{pick(project.development, language)}</p>
        </section>

        <section className={styles.detailBlock}>
          <h2 className={styles.detailBlockTitle}>
            {t("projects.challenges_label")}
          </h2>
          <ul className={styles.projectDetailList}>
            {pick(project.challenges, language).map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </section>

        <section className={styles.detailBlock}>
          <h2 className={styles.detailBlockTitle}>
            {t("detail.technologies_label")}
          </h2>
          <ul className={styles.projectTechList}>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </section>

        {project.status ? (
          <section className={styles.detailBlock}>
            <h2 className={styles.detailBlockTitle}>
              {t("projects.status_label")}
            </h2>
            <p className="prose">{pick(project.status, language)}</p>
          </section>
        ) : null}
      </div>

      {project.links.length > 0 ? (
        <section className={styles.detailBlock}>
          <h2 className={styles.detailBlockTitle}>{t("detail.links_label")}</h2>
          <div className={styles.externalLinks}>
            {project.links.map((link) => (
              <a
                key={link.href}
                className={styles.link}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {pick(link.label, language)}
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
