import { profile } from "../../data/profile";
import { useLanguage } from "../../hooks/useLanguage";
import styles from "./Portrait.module.css";

/**
 * The portrait is a background-removed cutout of `public/me.jpeg`, served as
 * WebP with a PNG fallback. It sits above the fold, so it loads eagerly and is
 * never lazy-deferred.
 */
export function Portrait() {
  const { t } = useLanguage();
  const { portrait, displayName } = profile;

  return (
    <picture className={styles.picture}>
      <source srcSet={portrait.webp} type="image/webp" />
      <img
        className={styles.image}
        src={portrait.src}
        width={portrait.width}
        height={portrait.height}
        alt={t("a11y.portrait", { name: displayName })}
        decoding="async"
        fetchPriority="high"
        draggable={false}
      />
    </picture>
  );
}
