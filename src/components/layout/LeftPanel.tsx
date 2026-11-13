import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import type { TranslationKey } from "../../i18n";
import { PERSONAL_SECTIONS } from "../../data/navigation";
import { useLanguage } from "../../hooks/useLanguage";
import type { LeftSectionId } from "../../types/portfolio";
import { SideNavigation } from "../navigation/SideNavigation";
import { AboutSection } from "../content/AboutSection";
import { ContactSection } from "../content/ContactSection";
import { EducationSection } from "../content/EducationSection";
import { SkillsSection } from "../content/SkillsSection";
import styles from "./panel.module.css";

interface LeftSectionDef {
  readonly id: LeftSectionId;
  readonly headingKey: TranslationKey;
  readonly leadKey: TranslationKey;
  readonly render: () => ReactNode;
}

/** Section registry — keeps navigation ids, copy and bodies in one place. */
const LEFT_SECTIONS: readonly LeftSectionDef[] = [
  {
    id: "about",
    headingKey: "about.heading",
    leadKey: "about.lead",
    render: () => <AboutSection />,
  },
  {
    id: "skills",
    headingKey: "skills.heading",
    leadKey: "skills.lead",
    render: () => <SkillsSection />,
  },
  {
    id: "education",
    headingKey: "education.heading",
    leadKey: "education.lead",
    render: () => <EducationSection />,
  },
  {
    id: "contact",
    headingKey: "contact.heading",
    leadKey: "contact.lead",
    render: () => <ContactSection />,
  },
];

interface LeftPanelProps {
  readonly activeId: LeftSectionId | null;
  readonly onSelect: (id: LeftSectionId) => void;
  readonly onExit: () => void;
}

/**
 * Personal column. Collapsed it presents the navigation; expanded it widens,
 * reveals the selected section and offers an explicit way back to the default
 * composition.
 */
export function LeftPanel({ activeId, onSelect, onExit }: LeftPanelProps) {
  const { t } = useLanguage();
  const expanded = activeId !== null;
  const section = expanded
    ? (LEFT_SECTIONS.find((entry) => entry.id === activeId) ?? null)
    : null;

  return (
    <aside
      className={styles.side}
      data-side="left"
      data-expanded={expanded || undefined}
      aria-label={t("panel.personal")}
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className="eyebrow">{t("panel.personal")}</p>
          {expanded ? (
            <button type="button" className={styles.back} onClick={onExit}>
              <ArrowLeft size={13} strokeWidth={2.25} aria-hidden="true" />
              {t("action.back")}
            </button>
          ) : null}
        </header>

        <SideNavigation<LeftSectionId>
          ariaLabel={t("a11y.nav_personal")}
          entries={PERSONAL_SECTIONS}
          activeId={activeId}
          align="left"
          onSelect={onSelect}
        />

        {section ? (
          <div key={section.id} className={styles.outlet}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>{t(section.headingKey)}</h2>
              <p className={styles.sectionLead}>{t(section.leadKey)}</p>
            </div>
            {section.render()}
          </div>
        ) : null}
      </div>
    </aside>
  );
}
