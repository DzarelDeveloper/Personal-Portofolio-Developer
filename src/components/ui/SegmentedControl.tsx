import type { ReactNode } from "react";
import styles from "./SegmentedControl.module.css";

export interface SegmentedOption<Value extends string> {
  readonly value: Value;
  /** Full accessible name; rendered visually hidden when `text` is present. */
  readonly label: string;
  /** Short visible label, or `null` for an icon-only option. */
  readonly text: string | null;
  readonly icon: ReactNode | null;
}

interface SegmentedControlProps<Value extends string> {
  readonly ariaLabel: string;
  readonly value: Value;
  readonly options: readonly SegmentedOption<Value>[];
  readonly onChange: (value: Value) => void;
}

/**
 * Two-state segmented control shared by the theme and language switches.
 * Every option is a real button, so the current state is exposed via
 * `aria-pressed` and the whole group is reachable with Tab.
 */
export function SegmentedControl<Value extends string>({
  ariaLabel,
  value,
  options,
  onChange,
}: SegmentedControlProps<Value>) {
  return (
    <div className={styles.control} role="group" aria-label={ariaLabel}>
      {options.map((option) => {
        const active = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            className={styles.option}
            data-active={active || undefined}
            aria-pressed={active}
            onClick={() => onChange(option.value)}
          >
            {option.icon ? (
              <span className={styles.icon} aria-hidden="true">
                {option.icon}
              </span>
            ) : null}
            {option.text ? (
              <span className={styles.text} aria-hidden="true">
                {option.text}
              </span>
            ) : null}
            <span className="visually-hidden">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
