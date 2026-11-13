import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import type { TranslationKey } from "../../i18n";
import { PROFESSIONAL_SECTIONS } from "../../data/navigation";
import { useLanguage } from "../../hooks/useLanguage";
import type { DetailTarget, RightSectionId } from "../../types/portfolio";
import { SideNavigation } from "../navigation/SideNavigation";
import { CommunitySection } from "../content/CommunitySection";
import { ExperienceSection } from "../content/ExperienceSection";
import { ProjectsSection } from "../content/ProjectsSection";
import { RecognitionSection } from "../content/RecognitionSection";
import styles from "./panel.module.css";

type OpenDetail = (target: DetailTarget) => void;

interface RightSectionDef {
  readonly id: RightSectionId;
  readonly headingKey: TranslationKey;
  readonly leadKey: TranslationKey;
  readonly render: (openDetail: OpenDetail) => ReactNode;
}

/** Section registry — mirrors the personal panel for the professional side. */
const RIGHT_SECTIONS: readonly RightSectionDef[] = [
  {
    id: "projects",
    headingKey: "projects.heading",
    leadKey: "projects.lead",
    render: () => <ProjectsSection />,
  },
  {
    id: "experience",
    headingKey: "experience.heading",
    leadKey: "experience.lead",
    render: () => <ExperienceSection />,
  },
  {
    id: "recognition",
    headingKey: "recognition.heading",
    leadKey: "recognition.lead",
    render: () => <RecognitionSection />,
  },
  {
    id: "community",
    headingKey: "community.heading",
    leadKey: "community.lead",
    render: () => <CommunitySection />,
  },
];

interface RightPanelProps {
  readonly activeId: RightSectionId | null;
  readonly onSelect: (id: RightSectionId) => void;
  readonly onOpenDetail: OpenDetail;
  readonly onExit: () => void;
}

/** Professional column — same interaction model as the personal panel. */
export function RightPanel({
  activeId,
  onSelect,
  onOpenDetail,
  onExit,
}: RightPanelProps) {
  const { t } = useLanguage();
  const expanded = activeId !== null;
  const section = expanded
    ? (RIGHT_SECTIONS.find((entry) => entry.id === activeId) ?? null)
    : null;

  return (
    <aside
      className={styles.side}
      data-side="right"
      data-expanded={expanded || undefined}
      aria-label={t("panel.professional")}
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className="eyebrow">{t("panel.professional")}</p>
          {expanded ? (
            <button type="button" className={styles.back} onClick={onExit}>
              <ArrowLeft size={13} strokeWidth={2.25} aria-hidden="true" />
              {t("action.back")}
            </button>
          ) : null}
        </header>

        <SideNavigation<RightSectionId>
          ariaLabel={t("a11y.nav_professional")}
          entries={PROFESSIONAL_SECTIONS}
          activeId={activeId}
          align="right"
          onSelect={onSelect}
        />

        {section ? (
          <div key={section.id} className={styles.outlet}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>{t(section.headingKey)}</h2>
              <p className={styles.sectionLead}>{t(section.leadKey)}</p>
            </div>
            {section.render(onOpenDetail)}
          </div>
        ) : null}
      </div>
    </aside>
  );
}
