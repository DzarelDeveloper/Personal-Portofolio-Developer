import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { RecognitionRecord, RecognitionEvidence } from "../../data/recognition";
import { useLanguage } from "../../hooks/useLanguage";
import { pick } from "../../i18n";
import styles from "./RecognitionLightbox.module.css";

export type RecognitionKind = "achievement" | "certificate";

export interface RecognitionSlide {
  readonly kind: RecognitionKind;
  readonly record: RecognitionRecord;
  readonly evidence: RecognitionEvidence;
}

interface RecognitionLightboxProps {
  readonly slide: RecognitionSlide;
  readonly index: number;
  readonly total: number;
  readonly onClose: () => void;
  readonly onPrevious: () => void;
  readonly onNext: () => void;
}

export function RecognitionLightbox({
  slide,
  index,
  total,
  onClose,
  onPrevious,
  onNext,
}: RecognitionLightboxProps) {
  const { language, t } = useLanguage();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const title = pick(slide.record.title, language);

  useEffect(() => {
    const previousFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      onPrevious();
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      onNext();
      return;
    }

    if (event.key !== "Tab") return;
    const controls =
      dialogRef.current?.querySelectorAll<HTMLButtonElement>(
        "button:not([disabled])",
      );
    if (!controls?.length) return;

    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  return (
    <div
      className={styles.backdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="recognition-lightbox-title"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      >
        <header className={styles.header}>
          <div className={styles.heading}>
            <p>
              {t(
                slide.kind === "achievement"
                  ? "recognition.achievement_label"
                  : "recognition.certificate_label",
              )}
            </p>
            <h2 id="recognition-lightbox-title">{title}</h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            className={styles.iconButton}
            aria-label={t("action.close")}
            onClick={onClose}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </header>

        <div className={styles.imageStage}>
          <img
            key={slide.evidence.src}
            src={slide.evidence.src}
            alt={pick(slide.evidence.alt, language)}
            decoding="async"
            fetchPriority="high"
            draggable={false}
          />
          <button
            type="button"
            className={`${styles.iconButton} ${styles.previous}`}
            aria-label={t("recognition.previous")}
            onClick={onPrevious}
          >
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={`${styles.iconButton} ${styles.next}`}
            aria-label={t("recognition.next")}
            onClick={onNext}
          >
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>

        <footer className={styles.footer}>
          <div className={styles.metadata}>
            <p>{pick(slide.record.issuer, language)}</p>
            <p>
              {slide.record.date
                ? pick(slide.record.date, language)
                : t("recognition.date_pending")}
            </p>
            <p>{pick(slide.record.detail, language)}</p>
          </div>
          <span className={styles.counter} aria-live="polite">
            {index + 1} / {total}
          </span>
        </footer>
      </div>
    </div>
  );
}
