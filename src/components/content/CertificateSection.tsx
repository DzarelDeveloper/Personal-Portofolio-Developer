import { ArrowUpRight } from "lucide-react";
import { certificates } from "../../data/certificates";
import { useLanguage } from "../../hooks/useLanguage";
import { pick } from "../../i18n";
import type { DetailTarget } from "../../types/portfolio";
import styles from "./sections.module.css";

interface CertificateSectionProps {
  readonly onOpenDetail?: (target: DetailTarget) => void;
}

const ICON_SIZE = 15;

export function CertificateSection({ onOpenDetail }: CertificateSectionProps) {
  const { language, t } = useLanguage();

  if (certificates.length === 0) {
    return (
      <div className={styles.body}>
        <p className={styles.emptyState}>{t("certificates.empty")}</p>
      </div>
    );
  }

  return (
    <div className={styles.body}>
      {certificates.map((certificate) => (
        <article key={certificate.id} className={styles.card}>
          <div className={styles.cardHead}>
            <h3 className={styles.cardTitle}>
              {pick(certificate.title, language)}
            </h3>
            <span className={styles.cardPeriod}>
              {pick(certificate.date, language)}
            </span>
          </div>
          <p className={styles.cardSub}>
            {t("certificates.issuer_label")}:{" "}
            {pick(certificate.issuer, language)}
          </p>

          {onOpenDetail ? (
            <button
              type="button"
              className={styles.cardAction}
              onClick={() =>
                onOpenDetail({ kind: "certificate", id: certificate.id })
              }
            >
              {t("action.open_details")}
              <ArrowUpRight
                size={ICON_SIZE}
                strokeWidth={2}
                aria-hidden="true"
              />
            </button>
          ) : null}
        </article>
      ))}
    </div>
  );
}
