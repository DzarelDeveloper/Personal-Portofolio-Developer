import {
  Activity,
  Blocks,
  Code2,
  Compass,
  Database,
  Globe2,
  ListChecks,
  PanelsTopLeft,
  Radio,
  Search,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  aboutApproach,
  aboutAreas,
  toolkitGroups,
} from "../../data/about";
import { skillBranches } from "../../data/skills";
import { about } from "../../data/profile";
import { useLanguage } from "../../hooks/useLanguage";
import { pick } from "../../i18n";
import styles from "./sections.module.css";

const TOOLKIT_LOGOS: Readonly<Record<string, string>> = {
  react: "react",
  nextjs: "nextjs",
  typescript: "typescript",
  javascript: "javascript",
  html: "html",
  css: "css",
  vite: "vite",
  "react-router": "react-router",
  nodejs: "nodejs",
  php: "php",
  python: "python",
  fastapi: "fastapi",
  mysql: "mysql",
  mariadb: "mariadb",
  sqlite: "sqlite",
  sqlalchemy: "sqlalchemy",
  jwt: "jwt",
};

const TOOLKIT_ICONS: Readonly<Record<string, LucideIcon>> = {
  "rest-api": Globe2,
  websockets: Radio,
  "secure-development": ShieldCheck,
  "input-validation": ListChecks,
  "data-protection": Database,
};

const skillTechnologies = new Map(
  skillBranches
    .flatMap((branch) => branch.technologies)
    .map((technology) => [technology.id, technology]),
);

const AREA_ICONS: Readonly<Record<string, LucideIcon>> = {
  "software-development": Code2,
  "web-applications": PanelsTopLeft,
  "application-security": ShieldCheck,
  "system-design": Blocks,
};

const STEP_ICONS: Readonly<
  Record<(typeof aboutApproach)[number]["icon"], LucideIcon>
> = {
  search: Search,
  design: Compass,
  build: Code2,
  secure: ShieldCheck,
};

export function AboutSection() {
  const { language, t } = useLanguage();

  return (
    <div className={styles.aboutSections}>
      <section className={styles.aboutSection}>
        <p className={styles.aboutIntroduction}>
          {t("about.introduction")}
        </p>
        <p className="prose">{pick(about.paragraphs, language)[1]}</p>
      </section>

      <section className={styles.aboutSection}>
        <h2 className={styles.aboutSectionTitle}>{t("about.what_i_do")}</h2>
        <div className={styles.aboutAreas}>
          {aboutAreas.map((area) => {
            const Icon = AREA_ICONS[area.id];
            return (
              <article key={area.id} className={styles.aboutArea}>
                <Icon
                  className={styles.aboutAreaIcon}
                  size={19}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <h3 className={styles.aboutAreaTitle}>
                  {pick(area.title, language)}
                </h3>
                <p className={styles.aboutAreaDescription}>
                  {pick(area.description, language)}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.aboutSection}>
        <h2 className={styles.aboutSectionTitle}>{t("about.my_approach")}</h2>
        <ol className={styles.approach}>
          {aboutApproach.map((step) => {
            const Icon = STEP_ICONS[step.icon];
            return (
              <li key={step.id} className={styles.approachStep}>
                <span className={styles.approachMarker} aria-hidden="true">
                  <Icon size={16} strokeWidth={1.75} />
                </span>
                <h3 className={styles.approachTitle}>
                  {pick(step.title, language)}
                </h3>
                <p className={styles.approachDescription}>
                  {pick(step.description, language)}
                </p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutSectionHeading}>
          <h2 className={styles.aboutSectionTitle}>
            {t("about.technical_toolkit")}
          </h2>
        </div>
        <dl className={styles.toolkit}>
          {toolkitGroups.map((group) => (
            <div key={group.id} className={styles.toolkitRow}>
              <dt>{pick(group.title, language)}</dt>
              <dd>
                <ul className={styles.toolkitItems}>
                  {group.technologies.flatMap((id) => {
                    const technology = skillTechnologies.get(id);
                    return technology ? [technology] : [];
                  }).map((technology) => {
                    const Logo = TOOLKIT_LOGOS[technology.id];
                    const Icon = TOOLKIT_ICONS[technology.id] ?? Activity;
                    const label = t(technology.label);

                    return (
                      <li key={technology.id} className={styles.toolkitItem}>
                        <span className={styles.toolkitIcon} aria-hidden="true">
                          {Logo ? (
                            <img
                              src={`/assets/technology-icons/${Logo}.svg`}
                              alt=""
                              loading="lazy"
                              decoding="async"
                            />
                          ) : (
                            <Icon size={16} strokeWidth={1.8} />
                          )}
                        </span>
                        <span>{label}</span>
                      </li>
                    );
                  })}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </section>

    </div>
  );
}
