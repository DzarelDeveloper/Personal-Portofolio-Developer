import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import { pick } from "../../i18n";
import type { RecognitionRecord } from "../../data/recognition";
import styles from "./RecognitionGallery.module.css";

interface RecognitionGalleryProps {
  readonly side: "left" | "right";
  readonly title: string;
  readonly countLabel: string;
  readonly direction: "up" | "down";
  readonly entries: readonly RecognitionRecord[];
  readonly paused: boolean;
  readonly onOpen: (id: string) => void;
}

export function RecognitionGallery({
  side,
  title,
  countLabel,
  direction,
  entries,
  paused,
  onOpen,
}: RecognitionGalleryProps) {
  const { language, t } = useLanguage();
  const duration = `${Math.max(34, entries.length * 3.8)}s`;

  const renderEntries = (duplicate: boolean) => (
    <div
      className={styles.list}
      aria-hidden={duplicate || undefined}
      data-copy={duplicate || undefined}
    >
      {entries.map((entry) => {
        const image = entry.images[0];
        if (!image) return null;

        const titleText = pick(entry.title, language);
        const date = entry.date ? pick(entry.date, language) : null;

        return (
          <button
            key={entry.id}
            className={styles.card}
            type="button"
            tabIndex={duplicate ? -1 : 0}
            aria-label={
              duplicate
                ? undefined
                : t("recognition.open_item", { title: titleText })
            }
            onClick={() => onOpen(entry.id)}
          >
            <span className={styles.imageFrame}>
              <img
                src={image.src}
                alt={duplicate ? "" : pick(image.alt, language)}
                loading="lazy"
                decoding="async"
                draggable={false}
              />
              <span className={styles.openHint} aria-hidden="true">
                <ArrowUpRight size={14} strokeWidth={1.8} />
              </span>
            </span>
            <span className={styles.cardCopy}>
              <span className={styles.cardTitle}>{titleText}</span>
              <span className={styles.cardIssuer}>
                {pick(entry.issuer, language)}
              </span>
              <span className={styles.cardDetail}>
                {pick(entry.detail, language)}
              </span>
              {date ? <span className={styles.cardDate}>{date}</span> : null}
            </span>
          </button>
        );
      })}
    </div>
  );

  return (
    <section
      className={styles.gallery}
      data-side={side}
      aria-labelledby={`${side}-recognition-heading`}
    >
      <header className={styles.heading}>
        <h2 id={`${side}-recognition-heading`}>{title}</h2>
        <span>{countLabel}</span>
      </header>
      <div
        className={styles.viewport}
        data-paused={paused || undefined}
        aria-label={title}
        role="region"
        tabIndex={0}
      >
        <div
          className={styles.track}
          data-direction={direction}
          style={{ "--gallery-duration": duration } as CSSProperties}
        >
          {renderEntries(false)}
          {renderEntries(true)}
        </div>
      </div>
    </section>
  );
}
