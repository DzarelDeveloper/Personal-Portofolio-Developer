import { Camera, Code2, ContactRound, Mail, MapPin } from "lucide-react";
import { profile, socialLinks } from "../../data/profile";
import { useLanguage } from "../../hooks/useLanguage";
import { pick } from "../../i18n";
import styles from "./sections.module.css";

export function ContactSection() {
  const { language, t } = useLanguage();
  const github = socialLinks.find((link) => link.kind === "github");
  const linkedin = socialLinks.find((link) => link.kind === "linkedin");
  const instagram = socialLinks.find((link) => link.kind === "instagram");

  return (
    <dl className={styles.contactDetails}>
      <div className={styles.contactRow}>
        <dt className={styles.contactLabel}>
          <Mail size={17} strokeWidth={1.7} aria-hidden="true" />
          {t("contact.email_label")}
        </dt>
        <dd className={styles.contactValue}>
          {profile.email ? (
            <a className={styles.contactLink} href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          ) : (
            <span className={styles.contactPending}>
              {t("contact.not_configured")}
            </span>
          )}
        </dd>
      </div>

      <div className={styles.contactRow}>
        <dt className={styles.contactLabel}>
          <Code2 size={17} strokeWidth={1.7} aria-hidden="true" />
          GitHub
        </dt>
        <dd className={styles.contactValue}>
          {github ? (
            <a
              className={styles.contactLink}
              href={github.href}
              target="_blank"
              rel="noreferrer"
            >
              {github.handle ?? github.label}
            </a>
          ) : (
            <span className={styles.contactPending}>
              {t("contact.not_configured")}
            </span>
          )}
        </dd>
      </div>

      <div className={styles.contactRow}>
        <dt className={styles.contactLabel}>
          <ContactRound size={17} strokeWidth={1.7} aria-hidden="true" />
          LinkedIn
        </dt>
        <dd className={styles.contactValue}>
          {linkedin ? (
            <a
              className={styles.contactLink}
              href={linkedin.href}
              target="_blank"
              rel="noreferrer"
            >
              {linkedin.handle ?? linkedin.label}
            </a>
          ) : (
            <span className={styles.contactPending}>
              {t("contact.not_configured")}
            </span>
          )}
        </dd>
      </div>

      <div className={styles.contactRow}>
        <dt className={styles.contactLabel}>
          <Camera size={17} strokeWidth={1.7} aria-hidden="true" />
          Instagram
        </dt>
        <dd className={styles.contactValue}>
          {instagram ? (
            <a
              className={styles.contactLink}
              href={instagram.href}
              target="_blank"
              rel="noreferrer"
            >
              {instagram.handle ?? instagram.label}
            </a>
          ) : (
            <span className={styles.contactPending}>
              {t("contact.not_configured")}
            </span>
          )}
        </dd>
      </div>

      <div className={styles.contactRow}>
        <dt className={styles.contactLabel}>
          <MapPin size={17} strokeWidth={1.7} aria-hidden="true" />
          {t("contact.location_label")}
        </dt>
        <dd className={styles.contactValue}>
          {pick(profile.location, language)}
        </dd>
      </div>
    </dl>
  );
}
