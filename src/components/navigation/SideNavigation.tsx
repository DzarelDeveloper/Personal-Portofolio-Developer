import type { NavEntry } from "../../data/navigation";
import { useLanguage } from "../../hooks/useLanguage";
import { NavigationItem, type NavAlign } from "./NavigationItem";
import styles from "./SideNavigation.module.css";

interface SideNavigationProps<Id extends string> {
  readonly ariaLabel: string;
  readonly entries: readonly NavEntry<Id>[];
  readonly activeId: Id | null;
  readonly align: NavAlign;
  readonly onSelect: (id: Id) => void;
}

/**
 * A stacked navigation list. The left column reads left-aligned, the right
 * column is mirrored and right-aligned; the order of entries never changes.
 */
export function SideNavigation<Id extends string>({
  ariaLabel,
  entries,
  activeId,
  align,
  onSelect,
}: SideNavigationProps<Id>) {
  const { t } = useLanguage();

  return (
    <nav className={styles.nav} data-align={align} aria-label={ariaLabel}>
      <ul className={styles.list}>
        {entries.map((entry) => (
          <NavigationItem
            key={entry.id}
            id={entry.id}
            label={t(entry.labelKey)}
            icon={entry.icon}
            active={entry.id === activeId}
            align={align}
            onSelect={onSelect}
          />
        ))}
      </ul>
    </nav>
  );
}
