import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import {
  recognitionAchievements,
} from "../../data/recognitionAchievements";
import {
  recognitionCertificates,
} from "../../data/recognitionCertificates";
import { Portrait } from "../profile/Portrait";
import { RecognitionGallery } from "./RecognitionGallery";
import {
  RecognitionLightbox,
  type RecognitionKind,
  type RecognitionSlide,
} from "./RecognitionLightbox";
import styles from "./RecognitionSection.module.css";

const achievementSlides: readonly RecognitionSlide[] =
  recognitionAchievements.flatMap((record) =>
    record.images.map((evidence) => ({
      kind: "achievement" as const,
      record,
      evidence,
    })),
  );

const certificateSlides: readonly RecognitionSlide[] =
  recognitionCertificates.flatMap((record) =>
    record.images.map((evidence) => ({
      kind: "certificate" as const,
      record,
      evidence,
    })),
  );

interface Selection {
  readonly kind: RecognitionKind;
  readonly index: number;
}

export function RecognitionSection() {
  const { t } = useLanguage();
  const [selection, setSelection] = useState<Selection | null>(null);
  const slides =
    selection?.kind === "achievement" ? achievementSlides : certificateSlides;

  const openItem = (kind: RecognitionKind, id: string): void => {
    const categorySlides =
      kind === "achievement" ? achievementSlides : certificateSlides;
    const index = categorySlides.findIndex((slide) => slide.record.id === id);
    if (index >= 0) setSelection({ kind, index });
  };

  const moveSelection = (step: -1 | 1): void => {
    if (!selection || slides.length === 0) return;
    setSelection({
      ...selection,
      index: (selection.index + step + slides.length) % slides.length,
    });
  };

  const activeSlide = selection ? slides[selection.index] : undefined;

  return (
    <section className={styles.recognition}>
      <header className={styles.heading}>
        <p className={styles.eyebrow}>{t("nav.records")}</p>
        <h1>{t("recognition.heading")}</h1>
        <p>{t("recognition.lead")}</p>
      </header>

      <div className={styles.layout}>
        <RecognitionGallery
          side="left"
          title={t("recognition.achievement_label")}
          countLabel={t("recognition.achievement_count", {
            count: recognitionAchievements.length,
          })}
          direction="up"
          entries={recognitionAchievements}
          paused={selection !== null}
          onOpen={(id) => openItem("achievement", id)}
        />

        <div className={styles.portraitStage}>
          <div className={styles.portrait}>
            <Portrait />
          </div>
        </div>

        <RecognitionGallery
          side="right"
          title={t("recognition.certificate_label")}
          countLabel={t("recognition.certificate_count", {
            count: recognitionCertificates.length,
          })}
          direction="down"
          entries={recognitionCertificates}
          paused={selection !== null}
          onOpen={(id) => openItem("certificate", id)}
        />
      </div>

      {activeSlide && selection ? (
        <RecognitionLightbox
          slide={activeSlide}
          index={selection.index}
          total={slides.length}
          onClose={() => setSelection(null)}
          onPrevious={() => moveSelection(-1)}
          onNext={() => moveSelection(1)}
        />
      ) : null}
    </section>
  );
}
