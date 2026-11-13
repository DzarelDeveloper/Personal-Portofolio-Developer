import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { findCertificate } from "../../data/certificates";
import { findProject } from "../../data/projects";
import { useLanguage } from "../../hooks/useLanguage";
import type { DetailTarget } from "../../types/portfolio";
import { CertificateDetail } from "./CertificateDetail";
import { ProjectDetail } from "./ProjectDetail";
import styles from "./DetailView.module.css";

interface DetailViewProps {
  readonly target: DetailTarget;
  readonly onClose: () => void;
}

/**
 * Full-viewport detail for a project or certificate. Focus moves to the return
 * control on open and returns to the trigger on close; Escape closes.
 */
export function DetailView({ target, onClose }: DetailViewProps) {
  const { t } = useLanguage();
  const backRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    backRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  const project =
    target.kind === "project" ? findProject(target.id) : undefined;
  const certificate =
    target.kind === "certificate" ? findCertificate(target.id) : undefined;

  return (
    <div
      className={styles.view}
      role="dialog"
      aria-modal="true"
      aria-label={t("a11y.detail_dialog")}
    >
      <div className={styles.bar}>
        <button
          ref={backRef}
          type="button"
          className={styles.back}
          onClick={onClose}
        >
          <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
          {t(
            target.kind === "project"
              ? "action.back_to_projects"
              : "action.back_to_overview",
          )}
        </button>
        <span className={styles.barLabel}>
          {target.kind === "project"
            ? t("projects.heading")
            : t("certificates.heading")}
        </span>
      </div>

      <div className={styles.body}>
        {project ? <ProjectDetail project={project} /> : null}
        {certificate ? <CertificateDetail certificate={certificate} /> : null}
      </div>
    </div>
  );
}
