import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";
import { useLanguage } from "../../hooks/useLanguage";
import { pick } from "../../i18n";
import styles from "./sections.module.css";

export function ProjectsSection() {
  const { language, t } = useLanguage();

  return (
    <div className={styles.projectsShowcase}>
      {projects.map((project) => {
        const [visual, ...gallery] = project.images;

        return (
          <article key={project.id} className={styles.featuredProject}>
            <div className={styles.projectVisual}>
              {visual?.kind === "brand" ? (
                <figure className={styles.projectBrandVisual}>
                  <img
                    className={styles.projectBrandImage}
                    src={visual.src}
                    alt={pick(visual.alt, language)}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className={styles.projectVisualCaption}>
                    {t("projects.brand_mark")}
                  </figcaption>
                </figure>
              ) : visual ? (
                <figure className={styles.projectPreview}>
                  <img
                    className={styles.projectPreviewImage}
                    src={visual.src}
                    alt={pick(visual.alt, language)}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className={styles.projectVisualCaption}>
                    {pick(visual.caption, language)}
                  </figcaption>
                </figure>
              ) : (
                <p className={styles.projectNoScreenshot}>
                  {t("projects.no_screenshot")}
                </p>
              )}

              {gallery.length > 0 ? (
                <div className={styles.projectGallery}>
                  {gallery.map((image) => (
                    <figure key={image.src} className={styles.projectGalleryItem}>
                      <img
                        className={styles.projectGalleryImage}
                        src={image.src}
                        alt={pick(image.alt, language)}
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption className={styles.projectVisualCaption}>
                        {pick(image.caption, language)}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}
            </div>

            <div className={styles.featuredProjectCopy}>
              <p className={styles.projectEyebrow}>{project.code}</p>
              <h2 className={styles.projectTitle}>{project.name}</h2>
              <p className={styles.projectSummary}>
                {pick(project.summary, language)}
              </p>
              {project.role ? (
                <p className={styles.projectRole}>
                  <span>{t("projects.role_label")}</span>
                  {pick(project.role, language)}
                </p>
              ) : null}

              <ul
                className={styles.projectTechList}
                aria-label={t("projects.technologies_label")}
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <div className={styles.projectActions}>
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    className={styles.projectExternalLink}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pick(link.label, language)}
                    <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
