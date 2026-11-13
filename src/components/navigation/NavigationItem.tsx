import { ArrowRight, type LucideIcon } from "lucide-react";
import styles from "./NavigationItem.module.css";

/** Which edge the item's content is aligned to. */
export type NavAlign = "left" | "right";

interface NavigationItemProps<Id extends string> {
  readonly id: Id;
  readonly label: string;
  readonly icon: LucideIcon;
  readonly active: boolean;
  readonly align: NavAlign;
  readonly onSelect: (id: Id) => void;
}

/**
 * A single navigation entry. The icon and label are mirrored for the right
 * column so both lists read inward from the portrait edge.
 */
export function NavigationItem<Id extends string>({
  id,
  label,
  icon: Icon,
  active,
  align,
  onSelect,
}: NavigationItemProps<Id>) {
  return (
    <li className={styles.item}>
      <a
        href={`#/${id}`}
        className={styles.button}
        data-nav-id={id}
        data-align={align}
        data-active={active || undefined}
        aria-current={active ? "page" : undefined}
        onClick={(event) => {
          event.preventDefault();
          onSelect(id);
        }}
      >
        <span className={styles.iconFrame} aria-hidden="true">
          <Icon className={styles.icon} size={17} strokeWidth={1.8} />
        </span>
        <span className={styles.label}>{label}</span>
        <ArrowRight
          className={styles.affordance}
          size={15}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </a>
    </li>
  );
}
