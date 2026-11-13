import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { CSSProperties } from "react";
import { flushSync } from "react-dom";
import { experienceEntries } from "../../data/experience";
import { useLanguage } from "../../hooks/useLanguage";
import { pick } from "../../i18n";
import { Portrait } from "../profile/Portrait";
import styles from "./ExperienceSection.module.css";

export function ExperienceSection() {
  const { language, t } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const activeButtonRef = useRef<HTMLButtonElement | null>(null);
  const splitIndex = Math.ceil(experienceEntries.length / 2);
  const leftEntries = experienceEntries.slice(0, splitIndex);
  const rightEntries = experienceEntries.slice(splitIndex).reverse();
  const selectedEntry = experienceEntries.find(
    (entry) => entry.id === selectedId,
  );
  const selectedSide =
    selectedEntry === undefined
      ? null
      : leftEntries.some((entry) => entry.id === selectedEntry.id)
        ? "left"
        : "right";

  const changeSelection = (id: string | null): void => {
    const update = (): void => {
      flushSync(() => setSelectedId(id));
    };
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (
      typeof document.startViewTransition === "function" &&
      !reducedMotion
    ) {
      document.startViewTransition(update);
      return;
    }

    setSelectedId(id);
  };

  useEffect(() => {
    if (selectedId === null) return;
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key !== "Escape") return;
      changeSelection(null);
      activeButtonRef.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selectedId]);

  const renderTimeline = (
    entries: typeof experienceEntries,
    side: "left" | "right" | "mobile",
  ) => (
    <ol className={styles.timeline} data-side={side}>
      {entries
        .filter((entry) => selectedId === null || entry.id === selectedId)
        .map((entry, index) => {
        const selected = selectedId === entry.id;

        return (
          <li
            key={entry.id}
            className={styles.timelineItem}
            data-selected={selected || undefined}
            style={{ "--item-index": index } as CSSProperties}
          >
            <button
              type="button"
              className={styles.itemButton}
              aria-expanded={selected}
              aria-controls="experience-details"
              onClick={(event) => {
                activeButtonRef.current = event.currentTarget;
                changeSelection(selected ? null : entry.id);
              }}
            >
              <span className={styles.itemMeta}>
                {entry.period ? pick(entry.period, language) : t("experience.period_pending")}
              </span>
              <span className={styles.itemTitle}>{entry.org}</span>
              <span className={styles.itemRole}>
                {entry.role
                  ? pick(entry.role, language)
                  : t("experience.role_pending")}
              </span>
              <span className={styles.itemSummary}>
                {entry.summary
                  ? pick(entry.summary, language)
                  : t("experience.summary_pending")}
              </span>
              {entry.kind ? (
                <span className={styles.itemKind}>{pick(entry.kind, language)}</span>
              ) : null}
              <ChevronDown
                className={styles.itemChevron}
                size={15}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </button>
          </li>
        );
        })}
    </ol>
  );

  const renderDetails = (entry: (typeof experienceEntries)[number]) => (
    <section
      id="experience-details"
      className={styles.detailPanel}
      aria-labelledby="experience-detail-title"
    >
      <div className={styles.detailHeader}>
        <div>
          <p className={styles.detailEyebrow}>{t("experience.details_label")}</p>
          <h2 id="experience-detail-title">{entry.org}</h2>
        </div>
        <button
          type="button"
          className={styles.closeDetail}
          onClick={() => {
            changeSelection(null);
            activeButtonRef.current?.focus();
          }}
        >
          {t("action.close")}
        </button>
      </div>

      <section className={styles.detailSection}>
        <h3>{t("experience.overview_label")}</h3>
        <dl className={styles.overview}>
          <div>
            <dt>{t("experience.role_label")}</dt>
            <dd>
              {entry.role
                ? pick(entry.role, language)
                : t("experience.role_pending")}
            </dd>
          </div>
          <div>
            <dt>{t("experience.period_label")}</dt>
            <dd>
              {entry.period
                ? pick(entry.period, language)
                : t("experience.period_pending")}
            </dd>
          </div>
          <div>
            <dt>{t("experience.category_label")}</dt>
            <dd>
              {entry.kind
                ? pick(entry.kind, language)
                : t("experience.category_pending")}
            </dd>
          </div>
        </dl>
        <p className={styles.overviewSummary}>
          {entry.summary
            ? pick(entry.summary, language)
            : t("experience.summary_pending")}
        </p>
      </section>

      <div className={styles.detailGrid}>
        <section className={styles.detailSection}>
          <h3>{t("experience.responsibilities_label")}</h3>
          {entry.responsibilities ? (
            <ul>
              {pick(entry.responsibilities, language).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className={styles.detailPending}>
              {t("experience.responsibilities_pending")}
            </p>
          )}
        </section>

        <section className={styles.detailSection}>
          <h3>{t("experience.tools_label")}</h3>
          {entry.technologies.length > 0 ? (
            <ul className={styles.toolsList}>
              {entry.technologies.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          ) : (
            <p className={styles.detailPending}>
              {t("experience.tools_pending")}
            </p>
          )}
        </section>

        <section className={styles.detailSection}>
          <h3>{t("experience.contributions_label")}</h3>
          {entry.contributions ? (
            <ul>
              {pick(entry.contributions, language).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className={styles.detailPending}>
              {t("experience.contributions_pending")}
            </p>
          )}
        </section>
      </div>
    </section>
  );

  return (
    <section
      className={styles.experience}
      data-selected={selectedSide ?? undefined}
    >
      <header className={styles.heading}>
        <p className={styles.eyebrow}>{t("nav.experience")}</p>
        <h1>{t("experience.heading")}</h1>
        <p>{t("experience.lead")}</p>
      </header>

      <div
        className={styles.timelineLayout}
        data-selected-side={selectedSide ?? undefined}
      >
        <div className={styles.timelineSide} data-side="left">
          {renderTimeline(leftEntries, "left")}
          {selectedEntry && selectedSide === "left"
            ? renderDetails(selectedEntry)
            : null}
        </div>
        <div className={styles.portrait}>
          <span className={styles.connectorLeft} aria-hidden="true" />
          <Portrait />
          <span className={styles.connectorRight} aria-hidden="true" />
        </div>
        <div className={styles.timelineSide} data-side="right">
          {renderTimeline(rightEntries, "right")}
          {selectedEntry && selectedSide === "right"
            ? renderDetails(selectedEntry)
            : null}
        </div>
      </div>
      {!selectedEntry ? (
        <div className={styles.mobileTimeline}>
          {renderTimeline(experienceEntries, "mobile")}
        </div>
      ) : null}
    </section>
  );
}
