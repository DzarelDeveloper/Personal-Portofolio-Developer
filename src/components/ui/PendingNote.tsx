import { useLanguage } from "../../hooks/useLanguage";
import clsx from "../../lib/clsx";
import styles from "./PendingNote.module.css";

interface PendingNoteProps {
  readonly className?: string;
  readonly variant?: "note" | "empty";
}

/**
 * Rendered wherever verified content is genuinely missing.
 * It exists so the interface never fills a gap with invented copy.
 */
export function PendingNote({ className, variant = "note" }: PendingNoteProps) {
  const { t } = useLanguage();

  return (
    <p className={clsx(styles.note, variant === "empty" && styles.empty, className)}>
      <span aria-hidden="true" className={styles.mark} />
      {t(variant === "empty" ? "misc.no_images" : "misc.pending_detail")}
    </p>
  );
}
