import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import type { DetailTarget, SectionId } from "../../types/portfolio";
import { SECTION_REGISTRY } from "../content/sectionRegistry";
import clsx from "../../lib/clsx";
import { DetailView } from "../content/DetailView";
import { Portrait } from "../profile/Portrait";
import { LanguageToggle } from "../ui/LanguageToggle";
import { ThemeToggle } from "../ui/ThemeToggle";
import styles from "./SectionView.module.css";

interface SectionViewProps {
  readonly id: SectionId;
  readonly onBack: () => void;
}

/**
 * A dedicated full-screen section. It replaces the home composition entirely —
 * the portrait does not linger behind it — and always offers a way back.
 */
export function SectionView({ id, onBack }: SectionViewProps) {
  const { t } = useLanguage();
  const backRef = useRef<HTMLButtonElement>(null);
  const [detailTarget, setDetailTarget] = useState<DetailTarget | null>(null);
  const entry = SECTION_REGISTRY[id];
  const isAbout = id === "about";
  const isSkills = id === "skills";
  const isEducation = id === "education";
  const isContact = id === "contact";
  const isProjects = id === "projects";
  const isExperience = id === "experience";
  const isRecognition = id === "recognition";
  const isCommunity = id === "community";
  const handleOpenDetail = useCallback((target: DetailTarget) => {
    setDetailTarget(target);
  }, []);
  const handleCloseDetail = useCallback(() => {
    setDetailTarget(null);
  }, []);

  // The navigation entry that opened the section is unmounted, so focus is
  // handed to the return control rather than falling back to the document.
  useEffect(() => {
    backRef.current?.focus();
  }, []);

  return (
    <main
      id="main"
      className={clsx(
        styles.view,
        isAbout && styles.aboutView,
        isProjects && styles.projectsView,
      )}
    >
      <div className={styles.bar}>
        <button
          ref={backRef}
          type="button"
          className={styles.back}
          onClick={onBack}
        >
          <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
          {t("action.back_home")}
        </button>
        <div className={styles.barEnd}>
          <p className={styles.barLabel}>{t(entry.navKey)}</p>
          {isAbout ||
          isSkills ||
          isEducation ||
          isContact ||
          isProjects ||
          isExperience ||
          isRecognition ||
          isCommunity ? (
            <div className={styles.controls}>
              <ThemeToggle />
              <LanguageToggle />
            </div>
          ) : null}
        </div>
      </div>

      {isAbout ? (
        <div className={`${styles.body} ${styles.aboutBody}`}>
          <div className={styles.aboutColumn}>
            <div className={styles.aboutContent}>
              <header className={styles.aboutHead}>
                <p className={styles.aboutEyebrow}>{t("about.eyebrow")}</p>
                <h1 className={styles.title}>{t(entry.headingKey)}</h1>
              </header>
              {entry.render()}
            </div>
            <div className={styles.aboutPortrait}>
              <Portrait />
            </div>
          </div>
        </div>
      ) : isContact ? (
        <div className={`${styles.body} ${styles.contactBody}`}>
          <div className={styles.contactColumn}>
            <div className={styles.contactContent}>
              <header className={styles.contactHead}>
                <p className={styles.aboutEyebrow}>{t("nav.contact")}</p>
                <h1 className={styles.title}>{t(entry.headingKey)}</h1>
                <p className={styles.contactLead}>{t("contact.introduction")}</p>
              </header>
              {entry.render()}
            </div>
            <div className={styles.contactPortrait}>
              <Portrait />
            </div>
          </div>
        </div>
      ) : isSkills ? (
        <div className={`${styles.body} ${styles.skillsBody}`}>
          {entry.render()}
        </div>
      ) : isExperience ? (
        <div className={`${styles.body} ${styles.experienceBody}`}>
          {entry.render()}
        </div>
      ) : isRecognition ? (
        <div className={`${styles.body} ${styles.recognitionBody}`}>
          {entry.render()}
        </div>
      ) : (
        <div
          className={`${styles.body} ${
            isEducation
              ? styles.educationBody
              : isProjects
                ? styles.projectsBody
                : isCommunity
                  ? styles.communityBody
                : ""
          }`}
        >
          <header className={styles.head}>
            <h2 className={styles.title}>{t(entry.headingKey)}</h2>
            <p className={styles.lead}>{t(entry.leadKey)}</p>
          </header>

          {entry.render(isProjects ? handleOpenDetail : undefined)}
        </div>
      )}
      {detailTarget ? (
        <DetailView target={detailTarget} onClose={handleCloseDetail} />
      ) : null}
    </main>
  );
}
