import { useLanguage } from "../../hooks/useLanguage";
import { pick } from "../../i18n";
import type { Certificate } from "../../types/portfolio";
import { PendingNote } from "../ui/PendingNote";
import { DetailMetaRow } from "./DetailMetaRow";
import styles from "./sections.module.css";

interface CertificateDetailProps {
  readonly certificate: Certificate;
}

const joinList = (values: readonly string[]): string | null =>
  values.length > 0 ? values.join(", ") : null;

export function CertificateDetail({ certificate }: CertificateDetailProps) {
  const { language, t } = useLanguage();

  return (
    <article className={styles.detailBody}>
      <header className={styles.detailHeader}>
        <p className="eyebrow">{pick(certificate.issuer, language)}</p>
        <h1 className={styles.detailTitle}>
          {pick(certificate.title, language)}
        </h1>
      </header>

      {certificate.image ? (
        <figure className={styles.figure}>
          <img
            className={styles.heroImage}
            src={certificate.image.src}
            alt={pick(certificate.image.alt, language)}
            loading="lazy"
            decoding="async"
          />
        </figure>
      ) : (
        <div className={styles.mediaFallback}>
          <PendingNote variant="empty" />
        </div>
      )}

      <dl className={styles.detailMeta}>
        <DetailMetaRow
          label={t("detail.issuer_label")}
          value={pick(certificate.issuer, language)}
        />
        <DetailMetaRow
          label={t("detail.date_label")}
          value={pick(certificate.date, language)}
        />
        <DetailMetaRow
          label={t("detail.credential_label")}
          value={certificate.credentialId}
        />
        <DetailMetaRow
          label={t("detail.skills_label")}
          value={joinList(certificate.skills)}
        />
      </dl>
    </article>
  );
}
